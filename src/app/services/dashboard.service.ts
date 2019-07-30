import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'})
export class DashBoardService {

    constructor(private http: HttpClient) { }
 
    /***************************************************************************************************
     *  
     ***************************************************************************************************/
    public findDadosDashBoard():Observable<any>{  
        return this.http.get<any[]>(`${environment.rest_url}/painel-gerencial`);
    }

    /***************************************************************************************************
     *  
     ***************************************************************************************************/
    public findRelacaoLancamentos(codTipo:any):Observable<any>{  
        return this.http.get<any[]>(`${environment.rest_url}/painel-gerencial/lancamentos?codTipo=${codTipo}`);
    } 
 
}