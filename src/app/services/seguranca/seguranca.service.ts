import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { ISeguranca } from './seguranca.interface';
import { AlertaService } from '../alerta.service';
import { Constantes } from 'src/app/core/util/constantes';

declare var window;
/***************************************************************************************************
*  Serviço de Segurança
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'}) 
export class SegurancaService implements ISeguranca {
  
    private obtendoToken: Boolean = false;

    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor(private router: Router
              , private http: HttpClient
              , private alertaService: AlertaService) {
    }

    /***************************************************************************************************
     * valida a autenticacao
     ***************************************************************************************************/
    public validarAutenticacao(): boolean {
        // alert(`SegurancaService.validarAutenticacao() \n getObtendoToken: ${this.getObtendoToken()}
        // \n isTicketUrl: ${this.isTicketUrl()}
        // \n isAuthenticated: ${this.isAuthenticated()}`);
        if (this.getObtendoToken()) {
            return true;

        } if (this.isTicketUrl()) {              
            this.solicitarAccessTokenApiManager();
            return true;

        } else if (!this.isAuthenticated()) {
            this.redirectCas();
            return false;

        } else {
            // this.profissionalService.findProfissionalLogado();
        }
        return true;
    }

    /***************************************************************************************************
     * retorna o header
     ***************************************************************************************************/
    public getHeaderAutorizacao(): string {
        return 'Authorization';
    }

    public getObtendoToken(): Boolean {
        return this.obtendoToken;
    }

    /***************************************************************************************************
     * retorna o TOKEN
     ***************************************************************************************************/
    public getToken(): string {
        return localStorage.getItem(Constantes.ACCESS_TOKEN);
    }

    /***************************************************************************************************
     * retorna a url de redirecionamento para a tela do CAS
     ***************************************************************************************************/
    public redirectCas(): void {
        // alert('SegurancaService.redirectCas()');
        const url = this.salvarUrlRetorno();
        window.location.href = environment.cas + this.extrairUrlBase(url);
    }

    /***************************************************************************************************
     * retorna a url em forma de array
     ***************************************************************************************************/
    private extrairUrlBase(url: string): string {
        return url.split('#')[0];
    }

    /***************************************************************************************************
     * salva a url de retorno
     ***************************************************************************************************/
    private salvarUrlRetorno(): string {
        const urlSalva = localStorage.getItem(Constantes.URL_RETORNO);
        if (urlSalva === null) {
            const url = window.location.href.split('?')[0];
            localStorage.setItem(Constantes.URL_RETORNO, url); 
            return url;
        }
        return urlSalva;        
    } 
    
    /***************************************************************************************************
     * retorna se está autenticado
     ***************************************************************************************************/
    public isAuthenticated(): boolean {
        const token = this.getToken();
        return token != null;
    }

    /***************************************************************************************************
     * solicita o TOKEN
     ***************************************************************************************************/
    public async solicitarAccessTokenApiManager() {
        // alert('SegurancaService.solicitarAccessTokenApiManager()');
        this.limparTokens();   
        const ticket = this.recuperarTicketUrl();   
        // alert(`SegurancaService.solicitarAccessTokenApiManager(${ticket}) \n url retorno: ${localStorage.getItem(Constantes.URL_RETORNO)}`);   
        if (ticket != null) {
            this.salvarUrlRetorno();         
            this.router.navigate(['home']);
            this.obtendoToken = true;
            await this.requisitarAccessToken(ticket);         
        }   
        
    }

    /***************************************************************************************************
     * requisita o TOKEN
     ***************************************************************************************************/
    private requisitarAccessToken(ticket: string) {
        let body = this.criarBody(ticket);
        console.log(`SegurancaService.requisitarAccessToken()`, environment.token, body, this.criarHeaders());

        this.http.post(environment.token, body, this.criarHeaders()).toPromise().then(data => { 
            // alert(`SegurancaService.requisitarAccessToken(${ticket}).post(${data})`);   
            localStorage.setItem(Constantes.ACCESS_TOKEN, `${Constantes.BEARER} ${data[Constantes.ACCESS_TOKEN]}`);
            localStorage.setItem(Constantes.REFRESH_TOKEN, data[Constantes.REFRESH_TOKEN]);
            window.location.href = localStorage.getItem(Constantes.URL_RETORNO);
            localStorage.removeItem(Constantes.URL_RETORNO); 
            console.log('requisitarAccessToken', localStorage);
            this.autorizarAcesso();
        }, erro => {
            this.obtendoToken = false;
            console.log('Erro ao obter o token');
            this.limparLocalStorage();
        });
    }

  /***************************************************************************************
   * Valida se o usuário está cadastrado como profissional de fiscalização
   ***************************************************************************************/
    private autorizarAcesso() {
        // this.profissionalService.autorizarAcesso().subscribe(() =>
        //     () => {
        //         this.profissionalService.findProfissionalLogado();
        //     },
        //     (erro) => {
        //         console.log('[CRF] ProfissionalService.autorizarAcesso() ERRO -> ', erro);
        //         this.alertaService.erro("Atenção", erro);
        //         this.obtendoToken = false;
        //         console.log('Erro ao obter o token', erro);
        //         this.limparLocalStorage();
        //     });
    }

    /***************************************************************************************************
     * retorna o BODY da requisição
     ***************************************************************************************************/
    private criarBody(ticket: string): string {
        const url = localStorage.getItem(Constantes.URL_RETORNO);
        return new HttpParams().set('grant_type', 'st')
        .set('ST', ticket)
        .set('service', this.extrairUrlBase(url))
        .toString();
    }

    /***************************************************************************************************
     * retorna o HEADERS
     ***************************************************************************************************/
    private criarHeaders(): any {
        const headers = {'Content-Type': 'application/x-www-form-urlencoded', 
                         'Authorization': `Basic ${environment.autorization}` };
        return { headers: headers };
    } 

    /***************************************************************************************************
     * retorna o TICKET
     ***************************************************************************************************/
    private recuperarTicketUrl(): string {
        const ticket = window.location.href.match(new RegExp('(?:[\?\&]' + 'ticket' + '=)([^#]+)'));
        return ticket ? ticket[1] : null;
    }

    /***************************************************************************************************
     * valida se o TICKET é uma url
     ***************************************************************************************************/
    public isTicketUrl(): boolean {
        const ticket = this.recuperarTicketUrl();
        return ticket  != null;
    }

    /***************************************************************************************************
     * limpa o LOCALSTORAGE
     ***************************************************************************************************/
    public limparLocalStorage(): void {
        localStorage.removeItem(Constantes.URL_RETORNO);
        localStorage.removeItem(Constantes.TENTATIVAS);
        this.limparTokens();
    }

    /***************************************************************************************************
     * limpa os TOKENS no LOCALSTORAGE
     ***************************************************************************************************/
    public limparTokens(): void {
        localStorage.removeItem(Constantes.REFRESH_TOKEN);
        localStorage.removeItem(Constantes.ACCESS_TOKEN);
        localStorage.removeItem(Constantes.ACCESS_TOKEN_LOCAL);
        localStorage.removeItem(Constantes.PROFISSIONAL);
    }

    /***************************************************************************************************
     * sair da aplicação
     ***************************************************************************************************/
    public logout(): void {
        this.limparLocalStorage();
        window.location.href = environment.logout;
    }

}