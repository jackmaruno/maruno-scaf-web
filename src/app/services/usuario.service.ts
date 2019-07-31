import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'})
export class UsuarioService {
  
    constructor(private http: HttpClient ) {
     } 

     public autenticar(login: string, senha: string): Observable<any> {
        const url_token = `${environment.rest_url}/token?client_id=ID_SCAF_cj4XjHXNSRmL3TWQcgoEOW3220BFonJsEO7RAmCIc&client_secret=SECRET_SCAF_H4At4cj4XjHXEEWNSRFDSQRLOTcgyKooOW0Bo&grant_type=password`;
        const url = `${url_token}&username=${login}&password=${senha}`;
        console.log(`\n\n\n\n${url}\n\n\n\n`);
        return this.http.post(url, {});
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

 
}