import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';   
import { TemplatePortal } from '@angular/cdk/portal';
 
 
import { UsuarioModal } from '../../modals/usuario/usuario.modal';
import { AlertaService } from '../../../../services/alerta.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { Constantes } from '../../../../util/constantes';
import { SidebarContainerService } from '../../../../components/sidebar/sidebar-container.service';
import { ParametrosService } from '../../../../services/parametros.service';
import { DialogService } from 'primeng/api';

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
/**
        read?: any;
        static: boolean; */
  @ViewChild('filtrosSidebar', {static:true} ) filtrosSidebar: TemplateRef<any>; 
  
  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private sidebarService: SidebarContainerService
    , public dialogService: DialogService
    , public usuarioService: UsuarioService
    , public parametrosService: ParametrosService
    , private alertaService: AlertaService) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.parametrosService.findPerfis((listPerfis: any) => {
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
    if(usuario.codigo > 0){
      this.usuarioService.findById(usuario.codigo).subscribe(
          (response) => { 
            this.abrirTelaEdicao(response); 
          }
      );  
    }else{
      this.abrirTelaEdicao({}); 
    }
  }
 

  private abrirTelaEdicao(usuario: any) {
    let data = { usuario: usuario, listPerfis:this.listPerfis };
    this.dialogService.open(UsuarioModal, {
        data: data,
        header: 'Cadastro de Usuário', 
        closeOnEscape: true,
        baseZIndex: 10000,
    }).onClose.subscribe((result?: any) => {
        if (result && result.valor === Constantes.SUCESSO) {
          this.pesquisar();
        }
    }); 
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
