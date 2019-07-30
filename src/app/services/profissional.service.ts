import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment'; 
import { Constantes } from '../core/util/constantes';

/***************************************************************************************************
*  Serviço para recuperar dados do usuário logado
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'})
export class ProfissionalService implements OnDestroy  {

    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor(private http: HttpClient) { 
    }

    ngOnDestroy() {
    }

    /***************************************************************************************************
     *  retorna o profissional logado
     ***************************************************************************************************/
    public getProfissional(): any {
        let s = localStorage.getItem(Constantes.PROFISSIONAL);
        if (s && s != '') {
            return JSON.parse(s);
        }
        return {};
    } 

    /***************************************************************************************************
     *  retorna o id do profissional logado
     ***************************************************************************************************/
    public getIdProfissional(): any { 
        return this.getProfissional().idProfissional;
    } 

    /***************************************************************************************************
     *  recupera os dados do profissional logado
     ***************************************************************************************************/
    public findProfissionalLogado()  {
        if(!(this.getIdProfissional() > 0)){
            this.http.get(`${environment.rest_url}/profissionais`).subscribe((response: any) => {
                localStorage.setItem(Constantes.PROFISSIONAL, JSON.stringify(response.resultado));
                console.log('ProfissionalService.findProfissionalLogado(profissional) => ', response.resultado);
            });
        }
    }

    /***************************************************************************************************
     *  Recupera as notificações do Profissional
     ***************************************************************************************************/
    public findNotificacoes():Observable<any>   {
        if(this.getIdProfissional() > 0){
            return this.http.get(`${environment.rest_url}/profissionais/${this.getIdProfissional()}/notificacoes`).pipe(
                map((response: any) => response.resultado)
            );
        }
        return null;
    }

    /***************************************************************************************************
     *  verifica se o usuário logado possui acesso
     ***************************************************************************************************/
    public autorizarAcesso(): Observable<any> {
        return this.http.get<any>(`${environment.rest_url}/autorizacoes`);
    }
}  