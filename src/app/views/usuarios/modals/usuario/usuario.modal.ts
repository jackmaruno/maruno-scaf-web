import { Component } from '@angular/core'; 
import { UsuarioService } from '../../../../services/usuario.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Constantes } from '../../../../util/constantes';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
 
 
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
    constructor(public ref: DynamicDialogRef
              , public config: DynamicDialogConfig
              , public usuarioService:UsuarioService
              , private alertaService:AlertaService ) {
        this.listPerfis = config.data.listPerfis;
        if(config.data.usuario.codigo > 0){
            this.usuario = Object.assign({}, JSON.parse(JSON.stringify(config.data.usuario)));
            for(let perfil of this.listPerfis){
                if(perfil.codigo === config.data.usuario.perfil.codigo){
                    this.usuario.perfil = perfil;
                }
            }
        }else{
            this.usuario = {nome:''};  
        }
    }
 
    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.ref.close({...this.config.data, valor: valor}); 
    } 
 
    /***************************************************************************************************
     * salva
     ***************************************************************************************************/
    public salvar(){ 
        let mensagem = `Usuário salvo com sucesso!`;
        this.usuarioService.save(this.usuario).subscribe(
            () => {  
                this.config.data.usuario = this.usuario; 
                this.alertaService.sucesso(mensagem);
                this.fechar(Constantes.SUCESSO);
            }  
        ); 
    }
 
}
