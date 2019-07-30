import { Component, Inject } from '@angular/core'; 

import { Constantes } from 'src/app/core/util/constantes';
import { ActionBarRef, ACTIONBAR_DATA } from 'src/app/core/components/actionbar';

/***********************************
*  Tela de Alerta
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-alerta-modal',
  templateUrl:'alerta.modal.html',
  styles:[`

.ss-modal-content-100{
    width: 100% !important;
}  
.ss-modal-content-90{
    width: 90% !important;
}  
.ss-modal-content-80{
    width: 80% !important;
}  
.ss-modal-content-70{
    width: 70% !important;
}  
.ss-modal-content-60{
    width: 60% !important;
}  
.ss-modal-content-50{
    width: 50% !important;
}  
.ss-modal-content-40{
    width: 40% !important;
}  
.ss-modal-content-30{
    width: 30% !important;
}  
.ss-modal-content-20{
    width: 20% !important;
}  
`]
})
export class AlertaModal { 

    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    constructor(public actionBarRef: ActionBarRef
              , @Inject(ACTIONBAR_DATA) public data: any) { 
    }
 
    /***************************************************************************************************
     * Fecha a tela
     ***************************************************************************************************/
    public close(resultado): void { 
        this.actionBarRef.close({ ...this.data, resultado: resultado});
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
