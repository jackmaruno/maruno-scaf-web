
import {throwError as observableThrowError,  Observable } from 'rxjs'; 
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError, finalize, tap} from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Constantes } from '../util/constantes';

 

  

/***************************************************************************************************
*  Serviço para interceptar as requisições
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'})
export class RequestInterceptor implements HttpInterceptor {

    // private loading:boolean = false; 
    private loadingBar:any; 
    private requestsPendentes:number = 0; 

    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor(private injector: Injector
        // , private spinner: NgxSpinnerService
        ) { } 
 
    /***************************************************************************************************
     * intercepta a requisição
     ***************************************************************************************************/
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let req = request; 
        this.carregando();  
         

        let token = localStorage.getItem(Constantes.ACCESS_TOKEN);
        if(token == null){
            token = "";
        }

        let headers:HttpHeaders = new HttpHeaders({"Authorization": token, "Content-Type": "application/json"});
        req = request.clone({
            headers: headers
        });  
        console.log('RequestInterceptor', req.url, req.method, JSON.stringify(req.headers)); 
        let response = next.handle(req).pipe(
            tap(() => {
                this.removerCarregando();
            }),
            catchError((responseError:HttpErrorResponse ) => { 

                if (responseError.status === 401) { 
                    window.location.href = "/#login";
                    // window.location.href = "/v2/#login";
                } else if (responseError.status === 500) { 
                    // this.injector.get(AlertaService).erroToast(responseError, 5000); 
                }
                return observableThrowError(responseError); 
            })
        );
        return response;    
    }

    /***************************************************************************************************
     * LOADING START 
     ***************************************************************************************************/
    private carregando() {
        if (this.loadingBar == null) {
            this.loadingBar = this.injector.get(NgxSpinnerService);
        }
        console.log('RequestInterceptor', this.requestsPendentes, 'start', new Date());
        
        if (this.requestsPendentes == 0) {
            this.loadingBar.show(); 
        }    
        this.requestsPendentes++; 
    }


    public carregandos() {
        this.loadingBar.show();
        setTimeout(() => {this.loadingBar.hide();}, 5000);
    }

    /***************************************************************************************************
    * LOADING FINISH 
    ***************************************************************************************************/
    private removerCarregando() {
        if (this.requestsPendentes > 0) {
            this.requestsPendentes--;
        }
        // if (this.requestsPendentes == 0) {
        if (this.loadingBar != null && this.requestsPendentes == 0) {
            console.log('RequestInterceptor', this.requestsPendentes, 'finish', new Date());
            this.loadingBar.hide();
            // this.loading.dismiss();
            // this.loadingBar.complete();
            // this.loadingBar.setShow(false);
        }
    } 
 

} 