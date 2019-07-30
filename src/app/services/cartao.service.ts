import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'})
export class CartaoService {

    constructor(private http: HttpClient) { }

    public find(): Observable<any[]> {
        return this.http.get<any[]>(this.RESOURCE()); 
    }

    public findAtivos(): Observable<any[]> {
        return this.http.get<any[]>(this.RESOURCE()+"/ativos"); 
    }

    public save(objeto: any): Observable<any> {
        if (objeto.codigo > 0) {
            objeto.id = objeto.codigo;
            return this.http.put<any>(this.RESOURCE(objeto.codigo), objeto);
        } else {
            return this.http.post<any>(this.RESOURCE(), objeto); 
        }
    }

    public alterarStatus(objeto: any): Observable<any> {
        if (objeto.ativo) {
            objeto.ativo = false;
            return this.http.put<any>(this.RESOURCE(objeto.codigo)+'/desativar', objeto);
        } else {
            objeto.ativo = true;
            return this.http.put<any>(this.RESOURCE(objeto.codigo)+'/ativar', objeto);
        }
    } 

    public remove(codigo: number): Observable<any> {
        return this.http.delete<any>(this.RESOURCE(codigo));
    }   

    /***************************************************************************************************
     * 
     ***************************************************************************************************/
    public findFaturaxs(codigo: number): Observable<any> {
        return this.http.get<any[]>(this.RESOURCE(codigo)+"/faturas");
    }   

    /***************************************************************************************************
     * 
     ***************************************************************************************************/
    public findDatasFaturas(codigo: number): Observable<any> {
        return this.http.get<any[]>(this.RESOURCE(codigo)+"/faturas/datas");
    }   

    /***************************************************************************************************
     * 
     ***************************************************************************************************/
    public findParcelas(codigo: number, data:string): Observable<any> {
        return this.http.get<any[]>(this.RESOURCE(codigo)+`/faturas/${data}/parcelas`);
    }   

    /***************************************************************************************************
     * RESOURCE
     ***************************************************************************************************/
    public RESOURCE(codigo?: number): string {
        return `${environment.rest_url}/cartoes${codigo > 0 ? '/' + codigo : ''}`;
    }  
}