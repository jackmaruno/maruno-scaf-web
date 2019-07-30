import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SidebarContainerService } from '../components/sidebar/sidebar-container.service';
import { SidebarContainerComponent } from '../components/sidebar/sidebar-container.component';
import { ActionBarService } from '../components/actionbar';
import { UsuarioService } from 'src/app/services/usuario.service';

/***************************************************************************************************
*  Componente Principal
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/ 
@Component({
  selector: 'sc-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./app.component.html`, 
})
export class AppComponent {

  @ViewChild(SidebarContainerComponent) sidebarContainerComponent: SidebarContainerComponent;

  public itensToolbar = [
    { displayName: 'Início',     iconName: 'dashboard', route: '/dashboard' },
    { displayName: 'Pagamentos Agendados', iconName: 'av_timer', route: '/agendamentos' },
    { displayName: 'Lançamentos',          iconName: 'border_color', route: '/lancamentos' },
    { displayName: 'Cartões de Crédito',   iconName: 'credit_card', route: '/cartoes' },
    { displayName: 'Etiquetas',       iconName: 'local_offer', route: '/tags' },
    { displayName: 'Usuários',             iconName: 'people', route: '/usuarios' },
    { displayName: 'Contatos',             iconName: 'mail', route: '/contatos' },
    { displayName: 'Relatório Dinâmico',   iconName: 'insert_chart', route: '/relatorios' },

    // { displayName: 'Novas',     iconName: 'new_releases', route: '/novas-fiscalizacoes' },
    // { displayName: 'Andamento', iconName: 'dvr',          route: '/fiscalizacoes' },
    // { displayName: 'Relatório', iconName: 'search',       route: '/relatorio-fiscalizacao' },
  ]; 

  /***************************************************************************************************
   *          Construtor de pobre 
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService
            , private sidebarService: SidebarContainerService
            , private UsuarioService: UsuarioService) {
              // console.log(environment);
              // console.log('x_api', environment.x_api('/profissionais')); 
              // console.log('x_cas', environment.x_cas());
              // console.log('x_token', environment.x_token());
              // console.log('x_autorization', environment.x_autorization());
              // console.log('x_logout', environment.x_logout());
  } 

  public getUsuario(): any { 
    return this.UsuarioService.getUsuario();
  }  

  /***************************************************************************************************
   * abre o sidebar 
   ***************************************************************************************************/
  public closeSidenav() {
  }

  /***************************************************************************************************
   * abre o sidebar 
   ***************************************************************************************************/
  public openSidenav() {
  }

  /***************************************************************************************************
   * retorna se o sidebar está fechado
   ***************************************************************************************************/
  public isClosed(): Observable<boolean> {
    return this.sidebarContainerComponent.isClosed$;
  }

  /***************************************************************************************************
   * sai da aplicação
   ***************************************************************************************************/
  public logout() {
  }
}

