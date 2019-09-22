import { Component, Inject } from '@angular/core'; 
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { PainelService } from '../../../../services/painel.service';
 
 
@Component({
  selector: 'app-relacao-lancamentos',
  templateUrl:'relacao-lancamentos.modal.html' ,
  styleUrls: ['relacao-lancamentos.modal.scss']
})
export class RelacaoLancamentosModal {
 
    public lista: any[]; 
    public atividade: any = {}; 
    /***************************************************************************************************
     *            Construtor de pobre 
     ***************************************************************************************************/
    constructor(public ref: DynamicDialogRef
              , public config: DynamicDialogConfig
              , public painelService: PainelService   ) { 
        painelService.findRelacaoLancamentos(config.data.codTipo).subscribe(
                (response)=>{
                    this.atividade = config.data;
                    this.lista = response;
            }
        );
    } 

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.ref.close({ ...this.config.data, valor: valor }); 
    } 
 
}
 