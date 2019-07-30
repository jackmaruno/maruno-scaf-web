import { Component, Inject } from '@angular/core'; 

import { TipoPagamentoEnum, Constantes } from 'src/app/core/util/constantes';
import { ActionBarRef, ACTIONBAR_DATA } from 'src/app/core/components/actionbar';
import { LancamentoService } from 'src/app/services/lancamento.service';
 
@Component({
  selector: 'app-visualizar-lancamento-modal',
  templateUrl:'visualizar-lancamento.modal.html' ,
  styleUrls: ['visualizar-lancamento.modal.scss']
})
export class VisualizarLancamentoModal {

    public exibeParcelas: boolean = false;
    public lancamento: any;
    public numParcelas:number = 1; 
    
    public TipoPagamentoEnum = TipoPagamentoEnum;

    public CAT_FATURA = Constantes.CAT_FATURA;
    public CAT_PARCELA = Constantes.CAT_PARCELA;
    public CAT_EMPRESTIMO = Constantes.CAT_EMPRESTIMO;
    /***************************************************************************************************
     *            Construtor de pobre 
     ***************************************************************************************************/
    constructor(public actionBarRef: ActionBarRef
              , @Inject(ACTIONBAR_DATA) public data: any
              , public lancamentoService: LancamentoService   ) { 
        lancamentoService.findById(data.codigo).subscribe(
            (response)=>{
                this.lancamento = response;
                this.setDados();
            }
        );
    }
    
    private setDados():void{ 
        if(this.lancamento.listParcelas && this.lancamento.listParcelas.length > 0){
            this.numParcelas = this.lancamento.listParcelas.length;
            this.lancamento.valor = this.lancamento.listParcelas[0].valor;
            this.exibeParcelas = true;
        }

        if(this.lancamento.categoria.codigo == this.CAT_PARCELA  && this.lancamento.parcela && this.lancamento.parcela.codigo > 0){
            this.lancamentoService.findParcelaById(this.lancamento.parcela.codigo).subscribe(
                (response)=>{
                    this.lancamento.parcela = response;
                }
            );
        }


        if(this.lancamento.categoria.codigo == this.CAT_FATURA){
            this.lancamentoService.findParcelasByFatura(this.lancamento.codigo).subscribe(
                (response)=>{
                    this.lancamento.listParcelas = response;
                    this.exibeParcelas = true;
                }
            );
        }
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.actionBarRef.close({ ...this.data, valor: valor });
    } 
  
 
}
