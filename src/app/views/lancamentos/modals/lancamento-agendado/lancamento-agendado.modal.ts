import { Component } from '@angular/core';  
import { TipoPagamentoEnum, TIPOS_PAGAMENTOS, Constantes } from '../../../../util/constantes';
import { LancamentoService } from '../../../../services/lancamento.service';
import { CartaoService } from '../../../../services/cartao.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Funcoes } from '../../../../util/funcoes';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
 
@Component({
  selector: 'app-lancamento-agendado-modal',
  templateUrl:'lancamento-agendado.modal.html' ,
  styleUrls: ['lancamento-agendado.modal.scss']
})
export class LancamentoAgendadoModal {

    public atividade: any;
    public valor:any;
    public dataReferencia = new Date();
    public descricao:any; 

    public numParcelas:number = 1; 
    public listParcelas: any[];
    
    public codTipoPagamento:number = TipoPagamentoEnum.A_VISTA; 
    public TipoPagamentoEnum = TipoPagamentoEnum;
    public listTiposPagamentos = TIPOS_PAGAMENTOS;
    public cartaoCredito:any;
    public listCartoes: any[];
    /***************************************************************************************************
     *            Construtor de pobre 
     ***************************************************************************************************/
    constructor(public ref: DynamicDialogRef
              , public config: DynamicDialogConfig
              , public lancamentoService: LancamentoService
              , public cartaoService: CartaoService
              , private alertaService:AlertaService ) {
 
        this.atividade = Object.assign({}, JSON.parse(JSON.stringify(config.data.atividade)));   
        this.valor = Funcoes.numberToMoney(this.atividade.valorPrevisto);

        if(this.atividade.codCartaoCredito > 0){
            this.findParcelasByFatura();
        }
    }

    public setListCartoes(){
        this.cartaoCredito = null;
        if(!this.listCartoes || this.listCartoes.length == 0){
            this.cartaoService.findCartoesAtivos((listCartoes: any) => {
                this.listCartoes = listCartoes;
                for(let cartao of this.listCartoes){
                    cartao.nome = `${cartao.bandeira} ${cartao.nome}`;
                }
            });
        }
    }   

    private getLancamento():any{
        let lancamento:any = {
            valorPrevisto: this.atividade.valorPrevisto,
            valor: Funcoes.stringToNumber(this.valor),
            dataReferencia: Funcoes.getDateString(this.dataReferencia),
            codTipoPagamento: this.codTipoPagamento,
            tags:"",
            descricao: this.descricao,
            categoria:{codigo: this.atividade.codCategoria}
        }; 
        if(this.codTipoPagamento > TipoPagamentoEnum.A_VISTA && this.cartaoCredito.codigo > 0){
            lancamento.cartaoCredito = {codigo: this.cartaoCredito.codigo};
        }
        if(this.atividade.codCartaoCredito > 0){
            lancamento.cartaoCredito = {codigo: this.atividade.codCartaoCredito};
            lancamento.dataFatura = this.atividade.dataPrevista;
        }
        if(this.atividade.codAgendamento > 0){
            lancamento.agendamento = {codigo: this.atividade.codAgendamento};
        }
        if(this.atividade.codParcela > 0){
            lancamento.parcela = {codigo: this.atividade.codParcela};
        }
        return lancamento;
    }

    /***************************************************************************************************
     * FATURAS
     ***************************************************************************************************/ 
    public findParcelasByFatura(){
        if(this.atividade.codCartaoCredito > 0){
            this.cartaoService.findParcelas(this.atividade.codCartaoCredito, Funcoes.getData(this.atividade.dataPrevista)).subscribe(
                (response)=>{
                    this.listParcelas = response; 
                }
            );
        }    
    }  
 
    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.ref.close({valor: valor}); 
    } 
 
    /***************************************************************************************************
     * salva
     ***************************************************************************************************/
    public salvar(){ 
        let lancamento = this.getLancamento();
        console.log('lancamento', lancamento);

        if(this.atividade.codCartaoCredito > 0){
            this.lancamentoService.saveLancamentoFatura(lancamento).subscribe(
                () => {  
                    this.alertaService.sucesso(`Lançamento salvo com sucesso!`);
                    this.fechar(Constantes.SUCESSO);
                }  
            ); 
        }else{
            this.lancamentoService.saveLancamentoAgendado(lancamento, this.numParcelas).subscribe(
                () => {  
                    this.alertaService.sucesso(`Lançamento salvo com sucesso!`);
                    this.fechar(Constantes.SUCESSO);
                }  
            );  
        }    
    }
 
}
