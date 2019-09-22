import { Component, OnDestroy, Inject, ViewChild, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { SidebarContainerService } from '../../components/sidebar/sidebar-container.service';
import { SidebarContainerComponent } from '../../components/sidebar/sidebar-container.component';
import { AppAsideComponent } from '@coreui/angular/lib/aside/app-aside.component';
import { SegurancaService } from '../../services/seguranca.service';
import { ParametrosService } from '../../services/parametros.service';
import { TagsService } from '../../services/tags.service';
import { CartaoService } from '../../services/cartao.service';
import { DialogService } from 'primeng/api';
import { LancamentoModal } from '../../views/lancamentos/modals/lancamento/lancamento.modal';
import { Constantes } from '../../util/constantes';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  
  public listGrupos: any[];
  public listCartoes: any[];
  public listTags: any[];

  // @ViewChild('sidebarRight' ) sidebarContainer: TemplateRef<any>; 
  // @ViewChild('sidebarRight') sidebarContainer: AppAsideComponent;
  @ViewChild(SidebarContainerComponent, {static:true}) sidebarContainerComponent: SidebarContainerComponent;

  constructor(@Inject(DOCUMENT) _document?: any
            //, public sidebarService: SidebarContainerService
            , public dialogService?: DialogService
            , public segurancaService?: SegurancaService
            , public parametrosService?: ParametrosService
            , public cartaoService?: CartaoService
            , public tagsService?:TagsService
            ) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
    this.findParametros();
    // console.log('sidebarRight', this.sidebarContainer);
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  public getUsuario() {
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
   * abre o sidebar 
   ***************************************************************************************************/

  public findParametros() {
    this.parametrosService.findGrupos((listGrupos: any) => {
      this.listGrupos = listGrupos;
    }); 
    this.tagsService.findTags((listTags : any) => {
      this.listTags = listTags;
    });
    this.cartaoService.findCartoesAtivos((listCartoes: any) => {
      this.listCartoes = listCartoes;
    });
  } 

  public novoLancamento() {
      this.dialogService.open(LancamentoModal, {
        data: { lancamento: {}, listGrupos: this.listGrupos, listCartoes: this.listCartoes, listTags:this.listTags },
        header: 'Cadastro de Lançamento', 
        closeOnEscape: true,
        width: '75%',
        baseZIndex: 10000,
    });
  }

  /***************************************************************************************************
   * retorna se o sidebar está fechado
   ***************************************************************************************************/
  public isClosed(): Observable<boolean> {
    return this.sidebarContainerComponent.isClosed$;
  }
}
