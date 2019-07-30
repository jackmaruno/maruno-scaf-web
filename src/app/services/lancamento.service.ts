import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';
 
@Injectable({providedIn: 'root'})
export class LancamentoService {

    constructor(private http: HttpClient) { }
 
	/************************************************************************************
	 * FIND LANCAMENTOS 
     * let filtro = {codLancamento, codGrupo, codCategoria, dataInicio, dataFim, descricao}
	 ************************************************************************************/
    public find(filtro:any): Observable<any[]> {
        let options = {params:filtro};
        return this.http.get<any[]>(this.RESOURCE(), options);
        // .pipe(
            // map((response: any) => response.map(i => ({ ...i, codigo:i.id })))
        // );
    } 
	/************************************************************************************
	 * FIND LANCAMENTO
	 ************************************************************************************/
    public findById(codigo:any): Observable<any[]> {
        return this.http.get<any[]>(this.RESOURCE(codigo));
    } 

	/************************************************************************************
	 * SAVE LANCAMENTO
	 ************************************************************************************/
    public save(objeto: any, numParcelas?:number): Observable<any> {
        if (objeto.codigo > 0) {
            objeto.id = objeto.codigo;
            return this.http.put<any>(this.RESOURCE(objeto.codigo), objeto);
        } else {
            let options:any = {}; 
            if(numParcelas > 0){
                options = {params: {numParcelas:numParcelas}}; 
            }
            return this.http.post<any>(this.RESOURCE(), objeto, options); 
        }
    }

	/************************************************************************************
	 * SAVE LANCAMENTO AGENDADO 
	 ************************************************************************************/
    public saveLancamentoAgendado(objeto:any, numParcelas?:number): Observable<any> {
        let options:any = {params: {numParcelas:numParcelas}}; 
        return this.http.post<any>(`${this.RESOURCE()}/agendados`, objeto, options); 
    } 

	/************************************************************************************
	 * SAVE LANCAMENTO FATURA 
	 ************************************************************************************/
    public saveLancamentoFatura(objeto:any): Observable<any> { 
        return this.http.post<any>(`${this.RESOURCE()}/faturas`, objeto); 
    } 

	/************************************************************************************
	 *  FIND PARCELAS LANCAMENTO FATURA 
	 ************************************************************************************/
    public findParcelasByFatura(codigo: number): Observable<any> { 
        return this.http.get<any>(`${this.RESOURCE()}/faturas/${codigo}/parcelas`); 
    } 

	/************************************************************************************
	 * REMOVE LANCAMENTO
	 ************************************************************************************/
    public remove(codigo: number): Observable<any> {
        return this.http.delete<any>(this.RESOURCE(codigo));
    }   

    /***************************************************************************************************
     * 
     ***************************************************************************************************/
    public findParcelaById(codigo: number): Observable<any> {
        return this.http.get<any[]>(`${environment.rest_url}/parcelas/${codigo}`);
    }  

    /***************************************************************************************************
     * 
     ***************************************************************************************************/
    public findParcelasPagas(anoMes: any): Observable<any> {
        return this.http.get<any[]>(`${environment.rest_url}/parcelas/pagas?anoMes=${anoMes}`);
    }  

    /***************************************************************************************************
     * 
     ***************************************************************************************************/
    public findParcelasPendentes(anoMes: any): Observable<any> {
        return this.http.get<any[]>(`${environment.rest_url}/parcelas/pendentes?anoMes=${anoMes}`);
    }  

    /***************************************************************************************************
     * 
     ***************************************************************************************************/
    public findDatasParcelasPendentes(): Observable<any> {
        return this.http.get<any[]>(`${environment.rest_url}/parcelas/pendentes/datas`);
    }  

	/************************************************************************************
	 * RESOURCE
	 ************************************************************************************/ 
    public RESOURCE(codigo?: number): string {
        return `${environment.rest_url}/lancamentos${codigo > 0 ? '/' + codigo : ''}`;
    }  
}