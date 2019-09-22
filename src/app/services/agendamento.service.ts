import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'})
export class AgendamentoService {

    constructor(private http: HttpClient) { }

    public find(): Observable<any[]> {
        return this.http.get<any[]>(this.RESOURCE());
        // .pipe(
        //     map((response: any) => response.map(i => ({ ...i, codigo:i.id })))
        //   );
    }

    public save(objeto: any): Observable<any> {
        if (objeto.codigo > 0) {
            // objeto.id = objeto.codigo;
            return this.http.put<any>(this.RESOURCE(objeto.codigo), objeto);
        } else {
            return this.http.post<any>(this.RESOURCE(), objeto);
        }
    }

    public alterarStatus(objeto:any): Observable<any> {
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
     * RESOURCE
     ***************************************************************************************************/
    public RESOURCE(codigo?: number): string {
        return `${environment.rest_url}/agendamentos${codigo > 0 ? '/' + codigo : ''}`;
    }  
}