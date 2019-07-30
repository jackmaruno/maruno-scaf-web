import { Injectable } from '@angular/core'; 
import { Constantes } from '../core/util/constantes';
import { AlertaModal } from '../modals/alerta/alerta.modal';
import { Observable } from 'rxjs';
import { Funcoes } from '../core/util/funcoes';
import { AlertService } from '../core/components/alert';
import { ActionBarService } from '../core/components/actionbar';

/***************************************************************************************************
*  Serviço de alertas
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'})
export class AlertaService {

    constructor(private alertService:AlertService, private actionBarService:ActionBarService) { }
      
  /***************************************************************************************************
   * warning=amarelo, primary=verde, success=azul, danger=vermelho,dark=preto,link=marrom
   ***************************************************************************************************/
    public createAlert(color:string, message:string, duration:number = 6000) {   
        this.alertService.open({
            message: message,
            duration: duration,
            position: 'is-top', 
            color: 'is-'+color  
        });
    } 
 
    public sucesso(message:string, duration:number = 3000) {   
        this.createAlert('success', message, duration);
    }    

    public atencao(message:string, duration:number = 3000) {   
        this.createAlert('warning', message, duration);
    }    

    public erroToast(erro:any, duration:number = 3000):string {   
        let msg = Funcoes.getMensagemErro(erro);
        console.log(erro, msg);
        this.createAlert('danger', msg, duration);
        return msg
    }  
    
    /***************************************************************************************************
     * cria popup
     ***************************************************************************************************/
    public criarAlerta(titulo: string, mensagem: string, confirmar:boolean, btnOk: string = 'OK', btnFechar: string = 'Fechar', tamanho:string = '40', tipo:string = 'sucesso'):Observable<any> {
        let params = {
              titulo: titulo
            , mensagem: mensagem
            , confirmar: confirmar
            , btnOk: btnOk
            , btnFechar: btnFechar
            , tamanho: tamanho
            , tipo: tipo
        };
        return this.actionBarService.open(AlertaModal, { data: params}).afterClosed();
    }  

    /***************************************************************************************************
     * abre a popup de confirmação
     ***************************************************************************************************/
    public confirmar(titulo: string, mensagem: string, btnConfirmar: string = 'Confirmar', btnCancelar: string = 'Cancelar'):Observable<any> { 
        return this.criarAlerta(titulo, mensagem, true, btnConfirmar, btnCancelar);
    }  

    /***************************************************************************************************
     * abre a popup de alerta
     ***************************************************************************************************/  
    public alerta(titulo: string = 'Alerta', mensagem: string):Observable<any> { 
        return this.criarAlerta(titulo, mensagem, false, null, 'Fechar', '40', 'atencao');
    }

    /***************************************************************************************************
     * abre a popup de erro
     ***************************************************************************************************/  
    public erro(titulo: string = 'Erro', erro: any): Observable<any> {
        return this.criarAlerta(titulo, Funcoes.getMensagemErro(erro), false, null, 'Fechar', '40', 'erro');
    }
 
}
 