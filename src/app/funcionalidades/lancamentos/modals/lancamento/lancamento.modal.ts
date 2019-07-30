import { Component, Inject } from '@angular/core'; 

import { Constantes, TipoPagamentoEnum, TIPOS_PAGAMENTOS } from 'src/app/core/util/constantes';
import { AlertaService } from 'src/app/services/alerta.service';
import { ActionBarRef, ACTIONBAR_DATA, ActionBarService } from 'src/app/core/components/actionbar';
import { TagsModal } from 'src/app/modals/tags/tags.modal';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { Funcoes } from 'src/app/core/util/funcoes';
import { CartaoService } from 'src/app/services/cartao.service';
 
@Component({
  selector: 'app-lancamento-modal',
  templateUrl:'lancamento.modal.html' ,
  styleUrls: ['lancamento.modal.scss']
})
export class LancamentoModal {

    public lancamento: any;
    public numParcelas:number = 1;
    public grupo:any = {listCategorias:[]};
    public cartaoCredito:any;
    
    public dataFatura:any;

    public fatura:any;
    public listFaturas: any[];
    public listParcelas: any[];
    
    public dataParcela:any;
    public parcela:any;
    public listDatasParcelas: any[];
    public listParcelasPendentes: any[];
    
    public listGrupos: any[];
    public listCartoes: any[];
    public listTags: any[];
    public TipoPagamentoEnum = TipoPagamentoEnum;
    public listTiposPagamentos = TIPOS_PAGAMENTOS;

    public CAT_FATURA = Constantes.CAT_FATURA;
    public CAT_PARCELA = Constantes.CAT_PARCELA;
    public CAT_EMPRESTIMO = Constantes.CAT_EMPRESTIMO;
    // public listFormaPagamentos = [{codigo: -1, nome: 'À Vista'}, {codigo: 0, nome: 'Carnê'}];

    /***************************************************************************************************
     *            Construtor de pobre 
     ***************************************************************************************************/
    constructor(private actionBarService: ActionBarService
              , public actionBarRef: ActionBarRef
              , @Inject(ACTIONBAR_DATA) public data: any
              , public lancamentoService: LancamentoService 
              , public cartaoService: CartaoService
              , private alertaService:AlertaService ) {

        this.listGrupos = data.listGrupos;  
        this.listCartoes = data.listCartoes;  
        this.listTags = data.listTags;  
         
        if(this.listCartoes){
            for(let cartao of this.listCartoes){
                cartao.nome = `${cartao.bandeira} ${cartao.nome}`;
                // this.listFormaPagamentos.push(cartao); 
            }
        }

        if(data.lancamento && data.lancamento.codigo > 0){
            this.lancamento = Object.assign({}, JSON.parse(JSON.stringify(data.lancamento)));  
            let categoria =  Object.assign({}, JSON.parse(JSON.stringify(data.lancamento.categoria)));  
            this.grupo = Object.assign({}, JSON.parse(JSON.stringify(data.lancamento.categoria.grupo)));  
            this.grupo.listCategorias = [categoria];
            this.lancamento.dataReferencia = Funcoes.getDate(this.lancamento.dataReferencia); 
            this.lancamento.valor = Funcoes.numberToMoney(this.lancamento.valor);
        }else{
            this.lancamento = {dataReferencia: new Date(), codTipoPagamento:TipoPagamentoEnum.A_VISTA, tags:"", valor:0, descricao:""};  
        }
    }

    /*************************************************************************************************** 
     ***************************************************************************************************/
    public openTags() {
        let data = { tags: this.lancamento.tags, listTags:this.listTags };
        this.actionBarService.open(TagsModal, { data: data }).afterClosed().subscribe((result?: any) => {
            if (result && result.valor === Constantes.SUCESSO) {
                this.lancamento.tags = result.tags;
            }
        });
    }

    public setCategoria(){

        if(this.isParcelaOrFatura()){
            this.listParcelas = [];
            this.lancamento.valor = Funcoes.numberToMoney(0.00);
        }

        if(this.isFatura() || this.isEmprestimo()){ 
            this.lancamento.codTipoPagamento = TipoPagamentoEnum.A_VISTA;
        }   

        if(this.isEmprestimo()){ 
            this.dataFatura = new Date();
            this.lancamento.valorPrevisto = Funcoes.numberToMoney(0.00);
        }   

        if(this.isFatura()){
            this.fatura = null;
            this.cartaoCredito = null;
        }   

        if(this.isParcela()){ 
            this.parcela = null;
            this.dataParcela = null;
            this.listParcelasPendentes = [];
            this.findDatasParcelasPendentes();
        }
    }

    public isParcelaOrFatura(){
        return this.isParcela() || this.isFatura();
    }   

    public isFatura(){
        if(this.lancamento && this.lancamento.categoria && this.lancamento.categoria.codigo == this.CAT_FATURA){
            return true;
        }
        return false;
    }

    public isParcela(){
        if(this.lancamento && this.lancamento.categoria && this.lancamento.categoria.codigo == this.CAT_PARCELA){
            return true;
        }
        return false;
    } 

    public isEmprestimo(){
        if(this.lancamento && this.lancamento.categoria && this.lancamento.categoria.codigo == this.CAT_EMPRESTIMO){
            return true;
        }
        return false;
    } 


    /***************************************************************************************************
     * FATURAS
     ***************************************************************************************************/
    public findDatasFaturas(){
        if(this.lancamento 
            && this.lancamento.categoria 
                && this.lancamento.categoria.codigo == this.CAT_FATURA
                    && this.cartaoCredito 
                        && this.cartaoCredito.codigo > 0){
            this.cartaoService.findDatasFaturas(this.cartaoCredito.codigo).subscribe(
                (response)=>{
                    this.listFaturas = response;
                    for(let fatura of this.listFaturas){
                        fatura.data = Funcoes.dateToString(fatura.dataReferencia);
                        fatura.descricao = fatura.data + (fatura.valor > 0 ? ` - Paga em ${Funcoes.dateToString(fatura.dataFatura)} no valor de R$ ${Funcoes.numberToMoney(fatura.valor.toFixed(2))}`: '');
                    }
                }
            );
        }    
    }  

    public findParcelasByFatura(){
        this.lancamento.valor = Funcoes.numberToMoney(0.00);
        if(this.fatura && this.fatura.dataReferencia  ){
            this.cartaoService.findParcelas(this.cartaoCredito.codigo, this.fatura.dataReferencia).subscribe(
                (response)=>{
                    let valor = 0;
                    this.listParcelas = response;
                    for(let parcela of this.listParcelas){
                        valor = valor + parcela.valor;
                    }    
                    this.lancamento.valor = Funcoes.numberToMoney(valor.toFixed(2));
                }
            );
        }    
    }  

    /***************************************************************************************************
     * PARCELAS PENDENTES
     ***************************************************************************************************/
    public findDatasParcelasPendentes(){
        this.listParcelasPendentes = [];
        this.parcela = null;
        if(this.isParcela()){
            this.lancamento.valor = Funcoes.numberToMoney(0.00);
            if(this.lancamento 
                && this.lancamento.categoria 
                    && this.lancamento.categoria.codigo == this.CAT_PARCELA){
                this.lancamentoService.findDatasParcelasPendentes().subscribe(
                    (response)=>{
                        this.listDatasParcelas = response; 
                    }
                );
            }    
        }
    }  

    public findParcelasPendentes(){
        this.listParcelasPendentes = [];
        this.parcela = null;
        this.lancamento.valor = Funcoes.numberToMoney(0.00);
        if(this.dataParcela && this.dataParcela.anoMes  ){
            this.lancamentoService.findParcelasPendentes(this.dataParcela.anoMes).subscribe(
                (response)=>{
                    this.listParcelasPendentes = response;
                    let size = this.listParcelasPendentes.length;
                    for(let parcela of this.listParcelasPendentes){
                        parcela.descricao = `${parcela.numero}/${size} - ${parcela.lancamento.categoria.nome} - ${parcela.data} - ${Funcoes.numberToMoney(parcela.valor.toFixed(2))}`; 
                    }    
                    this.findParcelasPagas();
                }
            );
        }    
    }  

    public findParcelasPagas(){
        this.listParcelas = [];  
        if(this.dataParcela && this.dataParcela.anoMes  ){
            this.lancamentoService.findParcelasPagas(this.dataParcela.anoMes).subscribe(
                (response)=>{
                    this.listParcelas = response; 
                }
            );
        }    
    }  

    public setParcelaPendente(){
        if(this.parcela && this.parcela.valor > 0){
            this.lancamento.valor = Funcoes.numberToMoney(this.parcela.valor.toFixed(2));
        }
    }
 
    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.actionBarRef.close({ ...this.data, valor: valor });
    } 
 
    /***************************************************************************************************
     * salva
     ***************************************************************************************************/
    public salvar(){ 
        console.log('this.lancamento', this.lancamento);
        let mensagem = `Lançamento salvo com sucesso!`;
        let lancamento = JSON.parse(JSON.stringify(this.lancamento));
        lancamento.dataReferencia = Funcoes.getDateString(lancamento.dataReferencia);
        lancamento.valor = Funcoes.stringToNumber(lancamento.valor);
        console.log(lancamento);
        

        if(this.isFatura()){
            if(this.fatura.valor > 0){
                this.alertaService.alerta('Lançamento de Fatura',`Fatura para a data ${Funcoes.dateToString(this.fatura.dataReferencia)} já foi paga em ${Funcoes.dateToString(this.fatura.dataFatura)} \n ${this.fatura.data}`);
            }else{ 
                lancamento.dataFatura = this.fatura.data;
                lancamento.cartaoCredito = this.cartaoCredito;
                delete lancamento.valorPrevisto;
                console.log(lancamento);
                this.lancamentoService.saveLancamentoFatura(lancamento).subscribe(
                    () => {  
                        this.alertaService.sucesso(mensagem);
                        this.fechar(Constantes.SUCESSO);
                    }  
                ); 
            }
        }else{
            if(this.isEmprestimo()){
                lancamento.dataFatura = Funcoes.getDateString(this.dataFatura);
                lancamento.cartaoCredito = null;
                lancamento.valorPrevisto = Funcoes.stringToNumber(lancamento.valorPrevisto);
            }else{
                delete lancamento.valorPrevisto;
            }
            if(this.isParcela()){
                lancamento.parcela = {codigo: this.parcela.codigo}
            } 
            console.log(lancamento);
            this.lancamentoService.save(lancamento, this.numParcelas).subscribe(
                () => {  
                    this.alertaService.sucesso(mensagem);
                    this.fechar(Constantes.SUCESSO);
                }  
            ); 
        }


    }
 
}
