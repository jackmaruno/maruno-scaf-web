import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs'; 
import { AlertaModal } from '../modals/alerta/alerta.modal';
import { AlertService } from '../components/alert';
import { DialogService } from 'primeng/api';

/***************************************************************************************************
*  Serviço de alertas
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Injectable({providedIn: 'root'})
export class AlertaService {

    constructor(private alertService: AlertService
              , public dialogService: DialogService) { }
      
  /***************************************************************************************************
   * warning=amarelo, primary=verde, success=azul, danger=vermelho,dark=preto,link=marrom
   ***************************************************************************************************/
    private createAlert(color:string, message:string, duration:number = 6000) {        
        this.alertService.open({
            message: message,
            duration: duration,
            position: 'is-top', 
            color:  color  
        });

    } 
 
    public sucesso(message:string, duration:number = 6000) {   
        this.createAlert('success', message, duration);
    }    

    public atencao(message:string, duration:number = 6000) {   
        this.createAlert('warning', message, duration);
    }    

    public erroToast(erro:any, duration:number = 6000):string {   
        let msg = ''+(erro);
        console.log(erro, msg);
        this.createAlert('danger', msg, duration);
        return msg
    }   
    
    /***************************************************************************************************
     * cria popup
    data?: any;
    header?: string;
    footer?: string;
    width?: string;
    height?: string;
    closeOnEscape?: boolean;
    baseZIndex?: number;
    autoZIndex?: boolean;
    dismissableMask?: boolean;
    rtl?: boolean;
    style?: any;
    contentStyle?: any;
    styleClass?: string;
    transitionOptions?: string;
    closable?: boolean;
    showHeader?: boolean; 
     ***************************************************************************************************/
    public criarAlerta(titulo: string, mensagem: string, confirmar:boolean, btnOk: string = 'OK', btnFechar: string = 'Fechar', tamanho:string = '40', tipo:string = 'sucesso'):Observable<any> {
        let params = {
              mensagem: mensagem
            , confirmar: confirmar
            , btnOk: btnOk
            , btnFechar: btnFechar
        };

        return this.dialogService.open(AlertaModal, {
            data: params,
            header: titulo, 
            closeOnEscape: true,
            baseZIndex: 10000,
            styleClass: tipo == 'atencao' ? 'modal-warning': tipo == 'erro' ? 'modal-danger' : ''
        }).onClose; 
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
        return this.criarAlerta(titulo, erro, false, null, 'Fechar', '40', 'erro');
    }
 
}
 