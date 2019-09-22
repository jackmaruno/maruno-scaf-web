import { Component } from '@angular/core';
import { DialogService } from 'primeng/api';
import { UsuarioService } from '../../services/usuario.service';
import { AlertaService } from '../../services/alerta.service';
import { SegurancaService } from '../../services/seguranca.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 


  public login = '';
  public senha = '';

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor( public dialogService: DialogService
             , public segurancaService: SegurancaService
             , private alertaService: AlertaService) {
  }

  public logar(){
    if(this.isEmpty(this.login) || this.isEmpty(this.senha) ){
      this.alertaService.erroToast('<B>Login</B> e <B>Senha</B> são de preenchimento obrigatório');
    }else{
      this.segurancaService.autenticar(this.login, this.senha).subscribe(
        (response) =>{
          console.log('autenticar', response);
          this.segurancaService.setUsuario(response);
          window.location.href = "/#painel-gerencial";
          // window.location.href = "/v2/#painel-gerencial";
        }
      );
    }
  }
  private isEmpty(a: any) { 
    return a == null || (a + "").length <= 0; 
  }
}
