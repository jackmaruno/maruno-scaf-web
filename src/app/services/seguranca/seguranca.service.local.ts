import { Injectable } from '@angular/core';
 
import { ISeguranca } from './seguranca.interface';
import { Constantes } from 'src/app/core/util/constantes';
import { environment } from 'src/environments/environment';
import { UsuarioService } from '../usuario.service';

/***************************************************************************************************
*  Serviço de Segurança Local
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'})
export class SegurancaServiceLocal implements ISeguranca {

    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor(private usuarioService: UsuarioService) { 
    }
        
    /***************************************************************************************************
     * valida a autenticacao
     ***************************************************************************************************/
    public validarAutenticacao(): boolean {
        localStorage.removeItem(Constantes.REFRESH_TOKEN);
        localStorage.removeItem(Constantes.ACCESS_TOKEN);

        this.usuarioService.setUsuario(this.access_user);
        return true;
    }

    /***************************************************************************************************
     * retorna o token
     ***************************************************************************************************/
    public getToken(): string {
        return "Bearer MC40MTUyOTc0NTU2MzEyNzU1bWFydW5vMTU2NDUwNTI3MDcxOA==";
    }

    /***************************************************************************************************
     * sair da aplicação
     ***************************************************************************************************/
    public logout(): void {
        localStorage.removeItem(Constantes.REFRESH_TOKEN);
        localStorage.removeItem(Constantes.ACCESS_TOKEN);
        localStorage.removeItem(Constantes.ACCESS_TOKEN_LOCAL);
        window.location.href = environment.logout;
    }

    /***************************************************************************************************
     * retorna o header
     ***************************************************************************************************/
    public getHeaderAutorizacao(): string {
        return 'Authorization';
    }

    /***************************************************************************************************
     * retorna se está autenticado
     ***************************************************************************************************/
    public isAuthenticated(): boolean {
        return true;
    }

    /***************************************************************************************************
     * retorna a url de redirecionamento para a tela do CAS
     ***************************************************************************************************/
    public redirectCas(): void {
        window.location.href = environment.cas;
    }



    private access_user = {
        access_token: "MC40MTUyOTc0NTU2MzEyNzU1bWFydW5vMTU2NDUwNTI3MDcxOA==",
        token_type: "Bearer",
        usuario: {
            codigo: 1,
            nome: "Willian Ferreira Maruno",
            login: "maruno",
            email: "jackmaruno@gmail.com",
            foto: "data:image/jpeg;base64,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",
            dataCadastro: "22/08/2018 05:17",
            dataAtualizacao: "02/03/2019 06:35",
            perfil: {
                codigo: 2,
                nome: "Administrador"
            }
        }
    }; 
}