import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'}) 
export class UsuarioService {
  
    constructor(private http: HttpClient ) {
     }  
     
    /***************************************************************************************************
     * RESOURCE usuarios cadastrados no scaf
     ***************************************************************************************************/
    private RESOURCE(codigo?: number): string {
        return `${environment.rest_url}/usuarios${codigo > 0 ? '/' + codigo : ''}`;
    }   

    public find(filtro:any): Observable<any[]> {
        let options = {params:filtro};
        return this.http.get<any[]>(this.RESOURCE(), options);
        // .pipe(
        //     map((response: any) => response.content)
        // );
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

    public alterarStatus(codigo:any, status:string): Observable<any> { 
        return this.http.put<any>(this.RESOURCE(codigo)+'/status/'+status, {});
    } 

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