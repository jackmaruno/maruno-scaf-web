import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highstock from 'highcharts/modules/stock.src';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { DataTableModule } from 'angular-6-datatable';
import { ComponentModule } from 'src/app/core/components/component.module';
import { PipeModule } from 'src/app/core/pipes/pipe.module';
import { TabsModule } from 'src/app/core/components/tabs/tabs.module';  
import { UltimasAtividades } from './components/ultimas-atividades';
import { ProximasAtividades } from './components/proximas-atividades';
import { Atividades } from './components/atividades';
import { ChartTotalMes } from './components/chart-total-mes';
import { ChartMes } from './components/chart-mes';
import { ChartMeses } from './components/chart-meses';
import { RelacaoLancamentosModal } from './modals/relacao-lancamentos/relacao-lancamentos.modal';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ChartModule,
    ComponentModule,
    TabsModule,
    PipeModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPage, UltimasAtividades, ProximasAtividades, Atividades, ChartTotalMes, ChartMes, ChartMeses, RelacaoLancamentosModal],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock ] }
  ],
  entryComponents: [RelacaoLancamentosModal]
})
export class DashboardModule { } 
