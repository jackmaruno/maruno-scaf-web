import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';   
import { TemplatePortal } from '@angular/cdk/portal';
 

import { Constantes } from 'src/app/core/util/constantes';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { AlertaService } from 'src/app/services/alerta.service';
import { UsuarioService } from 'src/app/services/usuario.service';  
import { SidebarContainerService } from 'src/app/core/components/sidebar/sidebar-container.service';
import { UsuarioModal } from '../../modals/usuario/usuario.modal';

/***********************************
*  Tela Cadastro de Usuários
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-usuarios', 
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.scss']
})
export class UsuariosPage implements OnInit{ 

  public lista$: Observable<any[]>;
  public listPerfis: any[]; 
  public filtro: any = {}; 

  @ViewChild('filtrosSidebar') filtrosSidebar: TemplateRef<any>;
  
  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService
    , private sidebarService: SidebarContainerService
    , public usuarioService: UsuarioService 
    , private alertaService: AlertaService) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.usuarioService.findPerfis().subscribe((listPerfis) => {
      this.listPerfis = listPerfis;
    }); 

    this.sidebarService.open(new TemplatePortal(this.filtrosSidebar, undefined, {})); 
  }

  /***************************************************************************************************
   *  realiza a pesquisa 
   ***************************************************************************************************/
  public pesquisar() {
    this.lista$ = this.usuarioService.find(this.filtro);
  }

  /***************************************************************************************************
   * abre a tela de cadastro
   ***************************************************************************************************/
  public editar(usuario: any) {
    this.usuarioService.findById(usuario.codigo).subscribe(
        (response) => { 
          let data = { usuario: response, listPerfis:this.listPerfis };
          this.actionBarService.open(UsuarioModal, { data: data }).afterClosed().subscribe((result?: any) => {
            if (result && result.valor === Constantes.SUCESSO) {
              this.pesquisar();
            }
          });
        }
    ); 
  }
 

  /***************************************************************************************************
   *  remove
   ***************************************************************************************************/
  public remover(usuario: any) {
    let msg = `Deseja mesmo excluir o Usuário "${usuario.nome}"`;
    this.alertaService.confirmar("Exclusão de Usuário", msg).subscribe((data?: any) => {
      console.log(data);
      if (data && data.resultado && data.resultado == Constantes.CONFIRMADO) {
        this.usuarioService.remove(usuario.codigo).subscribe((r?) => {
          this.alertaService.sucesso(`Usuário "${usuario.nome}" excluído com sucesso!`);
          this.pesquisar();
        });
      }
    }); 
  }
}
