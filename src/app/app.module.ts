import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { OverlayModule } from '@angular/cdk/overlay'; 
import { PortalModule } from '@angular/cdk/portal';


import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from '@ng-select/ng-select'; 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { TreeTableModule } from 'primeng/treetable';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/api';


//LOCAL
import { RequestInterceptor } from './services/request-interceptor.service';

import { ActionbarModule } from './components/actionbar';
import { ModalsModule } from './modals/modals.module'; 
import { AlertModule, AlertComponent } from './components/alert';
import { DirectivesModule } from './directives/directives.module';
import { ComponentModule } from './components/component.module';
import { SidebarContainerModule } from './components/sidebar/sidebar-container.module';

import { LancamentosModule } from './views/lancamentos/lancamentos.module';
import { AgendamentosModule } from './views/agendamentos/agendamentos.module';
import { TagsModule } from './views/tags/tags.module';
import { CartoesModule } from './views/cartoes/cartoes.module';
import { ContatosModule } from './views/contatos/contatos.module';
import { RelatoriosModule } from './views/relatorios/relatorios.module';
import { PainelModule } from './views/painel/painel.module';
import { UsuariosModule } from './views/usuarios/usuarios.module';

registerLocaleData(localePt, 'pt')

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgxSpinnerModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    OverlayModule,
    PortalModule,
    ActionbarModule,
    TreeTableModule,
    DynamicDialogModule,

    AlertModule,
    SidebarContainerModule,
    ModalsModule,
    ComponentModule,
    DirectivesModule,

    PainelModule,
    LancamentosModule,
    AgendamentosModule,
    TagsModule,
    CartoesModule,
    ContatosModule,
    UsuariosModule,
    RelatoriosModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: 'pt' } ,
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    DialogService
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [AlertComponent]
})
export class AppModule { }
