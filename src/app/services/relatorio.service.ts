import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';  

/***************************************************************************************************
*  Serviço para recuperar dados de relatórios
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'})
export class RelatorioService {

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private http: HttpClient) { }
 
  /***************************************************************************************************
   *  
   ***************************************************************************************************/
  public findRelatorio():Observable<any>{  
    return this.http.get<any[]>(`${environment.rest_url}/relatorios`);
  } 
 
  /***************************************************************************************************
   *  
   ***************************************************************************************************/
  public findRelatorioAgrupado():Observable<any>{  
    return this.http.get<any[]>(`${environment.rest_url}/relatorios/agrupados`);
  } 
   
}
