
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { SegurancaFactory } from './seguranca-factory.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError, finalize, tap} from 'rxjs/operators';

 

 
import { ISeguranca } from './seguranca.interface'; 
import { AlertaService } from '../alerta.service';
import { environment } from 'src/environments/environment';

/***************************************************************************************************
*  Serviço para interceptar as requisições
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'})
export class RequestInterceptor implements HttpInterceptor {

    private loadingBar:any; 
    private requestsPendentes:number = 0; 

    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor(private injector: Injector) { } 

    /***************************************************************************************************
     * intercepta a requisição
     ***************************************************************************************************/
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let req = request;
        const segurancaFactory: SegurancaFactory = this.injector.get(SegurancaFactory);
        const segurancaService: ISeguranca = segurancaFactory.getSeguranca(environment);
        this.carregando();  
        
        if (segurancaService.isAuthenticated()) {
            const header = segurancaService.getHeaderAutorizacao(); 
            const token = segurancaService.getToken();

            // {"Authorization":token, "Content-Type": "application/json"}
            let headers:HttpHeaders = new HttpHeaders({"Authorization":token, "Content-Type": "application/json"});
            req = request.clone({
                headers: headers
            });
        }else{
            let headers:HttpHeaders = new HttpHeaders({"Content-Type": "application/json"});
            req = request.clone({
                headers: headers
            });
        }
        console.log('RequestInterceptor', req.url, req.method, JSON.stringify(req.headers)); 
        let response = next.handle(req).pipe(
            tap(() => {
                this.removerCarregando();
            }),
            catchError((responseError:HttpErrorResponse ) => { 

                if (responseError.status === 401) {
                    if (this.recuperarQtdTentativas() > 3) {
                        this.injector.get(AlertaService).erro('Erro', 'Erro ao se autenticar no servidor');
                        localStorage.removeItem('tentativas');
                    } else {
                        this.contarTentativas();
                        segurancaService.redirectCas();
                    }  
                } else if (responseError.status === 500) { 
                    localStorage.removeItem('tentativas');
                    this.injector.get(AlertaService).erroToast(responseError, 5000); 
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
            this.loadingBar = this.injector.get(LoadingBarService);
        }
        // console.log('RequestInterceptor', this.requestsPendentes);
        
        if (this.requestsPendentes == 0) {
            this.loadingBar.start()
        }    
        this.requestsPendentes++;
    }

    /***************************************************************************************************
    * LOADING FINISH 
    ***************************************************************************************************/
    private removerCarregando() {
        if (this.requestsPendentes > 0) {
            this.requestsPendentes--;
        }
        if (this.loadingBar != null && this.requestsPendentes == 0) {
            // this.loading.dismiss();
            this.loadingBar.complete();
        }
        // console.log('RequestInterceptor', this.requestsPendentes);
    } 

    /***************************************************************************************************
    * contabiliza as tentativas
    ***************************************************************************************************/
    private contarTentativas(): void {
      const qtdTentativasArmazenadas = localStorage.getItem('tentativas');
      let qtdTentativas = 0;
      if (qtdTentativasArmazenadas === undefined || qtdTentativasArmazenadas === null) {
        localStorage.setItem('tentativas', '1');
      } else {
        qtdTentativas = parseInt(qtdTentativasArmazenadas) + 1;
        localStorage.setItem('tentativas', qtdTentativas.toString());
      }
    } 

    /***************************************************************************************************
    * retorna as tentativas
    ***************************************************************************************************/
    private recuperarQtdTentativas(): number {
      const qtdTentativas = localStorage.getItem('tentativas');
      if (qtdTentativas === undefined || qtdTentativas === null) {
        return 0
      }
      return parseInt(qtdTentativas);
    }

} 