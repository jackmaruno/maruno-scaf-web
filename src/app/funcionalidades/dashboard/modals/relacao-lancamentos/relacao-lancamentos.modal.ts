import { Component, Inject } from '@angular/core'; 

import { ActionBarRef, ACTIONBAR_DATA } from 'src/app/core/components/actionbar';
import { DashBoardService } from 'src/app/services/dashboard.service';
 
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
    constructor(@Inject(ACTIONBAR_DATA) public data: any
              , public actionBarRef: ActionBarRef
              , public dashBoardService: DashBoardService   ) { 
            dashBoardService.findRelacaoLancamentos(data.codTipo).subscribe(
                (response)=>{
                    this.atividade = data;
                    this.lista = response;
            }
        );
    } 

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.actionBarRef.close({ ...this.data, valor: valor });
    } 
 
}
