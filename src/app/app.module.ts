import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { NgSelectModule } from '@ng-select/ng-select'; 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {CdkTableModule} from '@angular/cdk/table'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client'; 


import { environment } from '../environments/environment'; 
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { AppComponent } from './core/containers/app.component';
import { RequestInterceptor } from './services/seguranca/request-interceptor.service';
import { DashboardModule } from './funcionalidades/dashboard/dashboard.module';
import { AlertModule, AlertComponent } from './core/components/alert';
import { ModalModule, ModalComponent } from './core/components/modal';
import { TagsModule } from './funcionalidades/tags/tags.module';
import { AgendamentosModule } from './funcionalidades/agendamentos/agendamentos.module';
import { CartoesModule } from './funcionalidades/cartoes/cartoes.module';   
import { UsuariosModule } from './funcionalidades/usuarios/usuarios.module';
import { LancamentosModule } from './funcionalidades/lancamentos/lancamentos.module';
import { ContatosModule } from './funcionalidades/contatos/contatos.module';
import { RelatoriosModule } from './funcionalidades/relatorios/relatorios.module';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [],
  imports: [
      BrowserModule
    , AppRoutingModule 
    , HttpClientModule
    , FormsModule
    , ReactiveFormsModule
    , StoreModule.forRoot(reducers, { metaReducers })
    , StoreRouterConnectingModule.forRoot({stateKey: 'router'})
    , !environment.production ? StoreDevtoolsModule.instrument() : [] 
    , EffectsModule.forRoot([AppEffects])
    , NgSelectModule
    , LoadingBarHttpClientModule
    , CdkTableModule
    , BsDatepickerModule.forRoot()
    , AlertModule 
    , ModalModule
    
    , CoreModule 
    , TagsModule
    , AgendamentosModule
    , CartoesModule
    , UsuariosModule
    , LancamentosModule
    , ContatosModule
    , RelatoriosModule

    , DashboardModule
    
  ],
  providers: [  
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: 'pt' } 
  ],
  bootstrap: [ AppComponent ],
  exports: [],
  entryComponents: [AlertComponent, ModalComponent]
    
})
export class AppModule {}
