import { Injector, Injectable } from '@angular/core';

import { ISeguranca } from './seguranca.interface';
import { SegurancaServiceLocal } from './seguranca.service.local';
import { SegurancaService } from './seguranca.service';

/***************************************************************************************************
*  Fábrica do Serviço de Segurança
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'})
export class SegurancaFactory {

    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor(private injector: Injector) {}

    /***************************************************************************************************
     * retorna o Serviço de Segurança de acordo com o ambiente
     ***************************************************************************************************/
    public getSeguranca(environment): ISeguranca {
        let seguranca: ISeguranca;
        if (environment.production) {
            seguranca = this.injector.get(SegurancaService);            
        } else {
            seguranca = this.injector.get(SegurancaServiceLocal);
        }
        return seguranca;
    }

}