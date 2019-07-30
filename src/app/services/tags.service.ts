import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'})
export class TagsService {

    constructor(private http: HttpClient) { }

    public findTags(): Observable<any[]> {
        return this.http.get<any[]>(this.RESOURCE());
    }

    public saveTag(objeto: any): Observable<any> {
        if (objeto.codigo > 0) {
            objeto.id = objeto.codigo;
            return this.http.put<any>(this.RESOURCE(objeto.codigo), objeto);
        } else {
            return this.http.post<any>(this.RESOURCE(), objeto);
        }
    }

    public removeTag(codigo: number): Observable<any> {
        return this.http.delete<any>(this.RESOURCE(codigo));
    }   

    /***************************************************************************************************
     * RESOURCE
     ***************************************************************************************************/
    public RESOURCE(codigo?: number): string {
        return `${environment.rest_url}/tags${codigo > 0 ? '/' + codigo : ''}`;
    }  
}