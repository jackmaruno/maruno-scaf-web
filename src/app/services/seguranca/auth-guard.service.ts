import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { SegurancaFactory } from './seguranca-factory.service';
import { environment } from './../../../environments/environment';
import { ISeguranca } from './seguranca.interface';

/***************************************************************************************************
*  Serviço para validar a autenticação
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor(private segurancaFactory: SegurancaFactory) {
    }

    /***************************************************************************************************
     * valida se está autenticado
     ***************************************************************************************************/
    public canActivate(): boolean {
        const seguranca: ISeguranca = this.segurancaFactory.getSeguranca(environment);
        return seguranca.validarAutenticacao();
    }

}
