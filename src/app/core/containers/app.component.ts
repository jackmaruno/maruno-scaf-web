import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SidebarContainerService } from '../components/sidebar/sidebar-container.service';
import { SidebarContainerComponent } from '../components/sidebar/sidebar-container.component';
import { ActionBarService } from '../components/actionbar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SegurancaFactory } from 'src/app/services/seguranca/seguranca-factory.service';
import { ISeguranca } from 'src/app/services/seguranca/seguranca.interface';

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

  private segurancaService: ISeguranca; 
  /***************************************************************************************************
   *          Construtor de pobre 
   ***************************************************************************************************/
  constructor(public actionBarService: ActionBarService
            , public sidebarService: SidebarContainerService
            , public segurancaFactory: SegurancaFactory) {
      this.segurancaService = segurancaFactory.getSeguranca(environment);
  } 

  public getUsuario(): any { 
    return this.segurancaService.getUsuario();
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

