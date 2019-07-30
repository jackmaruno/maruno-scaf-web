import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'})
export class ParametrosService {

    constructor(private http: HttpClient) { }

    public findGrupos(): Observable<any[]> {
        return this.GET("grupos");
    } 

    public findPeriodos(): Observable<any[]> {
        return this.GET("periodos");
    }  

    /***************************************************************************************************
     * RESOURCE
     ***************************************************************************************************/
    public GET(path:string): Observable<any[]> {
        return this.http.get<any[]>(`${environment.rest_url}/${path}`);
    }  
}