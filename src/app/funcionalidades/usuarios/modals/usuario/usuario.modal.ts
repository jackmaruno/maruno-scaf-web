import { Component, Inject } from '@angular/core'; 

import { Constantes } from 'src/app/core/util/constantes';
import { AlertaService } from 'src/app/services/alerta.service';
import { ActionBarRef, ACTIONBAR_DATA } from 'src/app/core/components/actionbar';
import { UsuarioService } from 'src/app/services/usuario.service';
 
@Component({
  selector: 'app-usuario-modal',
  templateUrl:'usuario.modal.html' ,
  styleUrls: ['usuario.modal.scss']
})
export class UsuarioModal {

    public usuario: any; 
    public listPerfis:any[];  

    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    constructor(public actionBarRef: ActionBarRef
              , @Inject(ACTIONBAR_DATA) public data: any
              , public usuarioService:UsuarioService
              , private alertaService:AlertaService ) {
        this.listPerfis = data.listPerfis;   
        if(data.usuario){
            this.usuario = Object.assign({}, JSON.parse(JSON.stringify(data.usuario)));   
        }else{
            this.usuario = {nome:''};  
        }
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.actionBarRef.close({ ...this.data, valor: valor });
    } 
 
    /***************************************************************************************************
     * salva o laudo da fiscalização
     ***************************************************************************************************/
    public salvar(){ 
        let mensagem = `Usuário salvo com sucesso!`;
        this.usuarioService.save(this.usuario).subscribe(
            () => {  
                this.data.usuario = this.usuario; 
                this.alertaService.sucesso(mensagem);
                this.fechar(Constantes.SUCESSO);
            }  
        ); 
    }
 
}
