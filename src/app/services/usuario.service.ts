import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';
import { Constantes } from '../core/util/constantes';
 
@Injectable({providedIn: 'root'})
export class UsuarioService {
 


    constructor(private http: HttpClient) {
     }

    /***************************************************************************************************
     * RESOURCE usuarios cadastrados no scaf
     ***************************************************************************************************/
    private RESOURCE(codigo?: number): string {
        return `${environment.rest_url}/usuarios${codigo > 0 ? '/' + codigo : ''}`;
    }  

    public findPerfis(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.rest_url}/perfis`);
    }

    public find(filtro:any): Observable<any[]> {
        let options = {params:filtro};
        return this.http.get<any[]>(this.RESOURCE(), options);
    }

    public findById(codigo: number): Observable<any[]> {
        return this.http.get<any[]>(this.RESOURCE(codigo));
    }

    public save(objeto: any): Observable<any> {
        if (objeto.codigo > 0) {
            objeto.id = objeto.codigo;
            return this.http.put<any>(this.RESOURCE(objeto.codigo), objeto);
        } else {
            return this.http.post<any>(this.RESOURCE(), objeto); 
        }
    }

    // public alterarStatus(objeto:any, status:string): Observable<any> { 
    //     return this.http.put<any>(this.urlUsuarioSistema(objeto.codigo)+'/status/'+status, objeto);
    // } 

    public remove(codigo: number): Observable<any> {
        return this.http.delete<any>(this.RESOURCE(codigo));
    }   
 

    public findFotoUsuario(codigo: number): Observable<any[]> {
        return this.http.get<any[]>(this.RESOURCE(codigo)+"/foto");
    }

    public saveFotoUsuario(codigo: number, foto:string): Observable<any[]> {
        let fotoVO = {foto:foto};
        return this.http.put<any[]>(this.RESOURCE(codigo)+"/foto", fotoVO);
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
    
    /***************************************************************************************************
     *  seta o usuário logado 
     ***************************************************************************************************/
    public setUsuario(access_user:any) {
        localStorage.setItem(Constantes.ACCESS_USER, JSON.stringify(access_user)); 
        localStorage.setItem(Constantes.USUARIO, JSON.stringify(access_user.usuario)); 
        localStorage.setItem(Constantes.ACCESS_TOKEN, `${access_user.token_type} ${access_user.access_token}`);
    } 

}