import { Component, Inject } from '@angular/core'; 
import { ActionBarRef, ACTIONBAR_DATA } from '../../components/actionbar';
import { Constantes } from '../../util/constantes';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
 
/***********************************
*  Tela de Alerta
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-alerta-modal',
  templateUrl:'alerta.modal.html'
})
export class AlertaModal {  

    public data: any;
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    constructor(public ref: DynamicDialogRef
              , public config: DynamicDialogConfig) { 
        this.data = config.data;
    }
 
    /***************************************************************************************************
     * Fecha a tela
     ***************************************************************************************************/
    public close(resultado: any): void { 
        this.ref.close({...this.data, resultado: resultado}); 
    }

    /***************************************************************************************************
     * OK
     ***************************************************************************************************/
    public ok(): void { 
        this.close(Constantes.CONFIRMADO);
    }

    /***************************************************************************************************
     * fechar
     ***************************************************************************************************/
    public fechar(): void {
        this.close(Constantes.CANCELADO);
    }
}
