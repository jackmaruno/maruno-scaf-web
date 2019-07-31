import { Component, OnInit } from '@angular/core';
 
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertaService } from 'src/app/services/alerta.service';

/***********************************
*  Tela Login
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-login', 
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginPage implements OnInit{ 
 
  public login: string;
  public senha: string;
 
 
  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor( private usuarioService:UsuarioService
             , private alertaService: AlertaService ) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() { 
  }

  /***************************************************************************************************
    *  realiza a pesquisa 
   ***************************************************************************************************/
  public onKey(event: any) {
    if (event.key === "Enter") {
      this.autenticar();
    }
  }

  /***************************************************************************************************
    *  realiza a pesquisa 
   ***************************************************************************************************/
  public autenticar() {
    if( (this.login && (this.login+'').length > 3) && (this.senha && (this.senha+'').length > 3) ){
      this.usuarioService.autenticar(this.login, this.senha).subscribe(
        (response?: any) => {
            console.log("SUCCESS: ", response);
            localStorage.setItem('access_token', `${response['token_type']} ${response['access_token']}`);
            localStorage.setItem("USUARIO", JSON.stringify(response));
            localStorage.setItem("ACCESS_USER", JSON.stringify(response['usuario']));
            window.location.href = "/#/dashboard";
        }, (erro?: any) => {
            if(erro){ 
                if(erro.error || erro.message){
                    this.alertaService.erro(erro.error, erro.message);
                }else{
                    this.alertaService.erro("Atenção", "Erro desconhecido");
                } 
            }else{
                this.alertaService.erro("Atenção", "Erro desconhecido");
            }
        }
    );
    }else{
      this.alertaService.erro("Atenção", `Os campos "Login" e "Senha" são de preenchimento obrigatórios!`);
    }
  }
 
}
