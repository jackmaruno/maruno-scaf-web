import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'})
export class ContatosService {

    constructor(private http: HttpClient) { }

    public find(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.rest_url}/contatos`); 
    }

    public save(objeto: any): Observable<any> { 
        return this.http.post<any>(`${environment.rest_url}/contatos`, objeto);
    } 

    public remove(codigo: number): Observable<any> {
        return this.http.delete<any>(`${environment.rest_url}/contatos/${codigo}`);
    }   
 
}