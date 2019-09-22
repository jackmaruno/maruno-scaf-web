import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';

export const LIST_GRUPOS = 'listGrupos';
export const LIST_PERIODOS = 'listPeriodos';
export const LIST_PERFIS = 'listPerfis';
 
@Injectable({providedIn: 'root'})
export class ParametrosService {

    constructor(private http: HttpClient) { }

    public findGrupos(callback: any) {
        let listGrupos = this.getItem(LIST_GRUPOS);
        if(listGrupos == null || listGrupos.length <= 0){
            this.GET("grupos").subscribe((lista) => {
                this.setItem(LIST_GRUPOS, lista);
                callback(lista);
            }); 
        }else{
            callback(listGrupos);
        }
    }  

    public findPeriodos(callback: any) {
        let lista = this.getItem(LIST_PERIODOS);
        if(lista == null || lista.length <= 0){
            this.GET("periodos").subscribe((response) => {
                this.setItem(LIST_PERIODOS, response);
                callback(response);
            }); 
        }else{
            callback(lista);
        }
    }  

    public findPerfis(callback: any) {
        let lista = this.getItem(LIST_PERFIS);
        if(lista == null || lista.length <= 0){
            this.GET("perfis").subscribe((response) => {
                this.setItem(LIST_PERFIS, response);
                callback(response);
            }); 
        }else{
            callback(lista);
        }
    }

    /***************************************************************************************************
     * RESOURCE
     ***************************************************************************************************/
    public GET(path:string): Observable<any[]> {
        return this.http.get<any[]>(`${environment.rest_url}/${path}`);
    }  

    /***************************************************************************************************
     * STORAGE
     ***************************************************************************************************/
    public setItem(name: string, lista: any[]): void {
        localStorage.setItem(name, JSON.stringify(lista));
    }
    
    public getItem(name: string): any[] {
        let s = localStorage.getItem(name);
        if (s && s != '') {
            return JSON.parse(s);
        }
        return [];
    } 
}