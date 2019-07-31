import { Injectable } from '@angular/core';

import { ISeguranca } from './seguranca.interface';
import { Constantes } from 'src/app/core/util/constantes';

declare var window;
/***************************************************************************************************
*  Serviço de Segurança
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'}) 
export class SegurancaService implements ISeguranca {
  
    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor() {
    }

    /***************************************************************************************************
     * valida a autenticacao
     ***************************************************************************************************/
    public validarAutenticacao(): boolean { 
        if (!this.isAuthenticated()) {
            this.logout();
            return false;
        }
        return true;
    } 
    
    /***************************************************************************************************
     * retorna se está autenticado
     ***************************************************************************************************/
    public isAuthenticated(): boolean {
        const token = this.getToken();
        return token != null && token.length > 5;
    }

    /***************************************************************************************************
     * sair da aplicação
     ***************************************************************************************************/
    public logout(): void {
        this.limparLocalStorage();
        window.location.href = 'login.html';
    }

    /***************************************************************************************************
     * limpa o LOCALSTORAGE
     ***************************************************************************************************/
    public limparLocalStorage(): void {
        localStorage.removeItem(Constantes.TENTATIVAS);
        localStorage.removeItem(Constantes.USUARIO);
        localStorage.removeItem(Constantes.ACCESS_TOKEN);
    }

    /***************************************************************************************************
     * retorna o TOKEN
     ***************************************************************************************************/
    public getToken(): string {
        return localStorage.getItem(Constantes.ACCESS_TOKEN);
    }

    /***************************************************************************************************
     *  retorna o usuário logado 
     ***************************************************************************************************/
    public getUsuario(): any {
        let s = localStorage.getItem(Constantes.USUARIO);
        if (s && s != '') {
            return JSON.parse(s);
        }
        return {};
    } 

    /***************************************************************************************************
     *  retorna o código do usuário logado
     ***************************************************************************************************/
    public getIdUsuario(): any { 
        return this.getUsuario().codigo;
    }  

    
}