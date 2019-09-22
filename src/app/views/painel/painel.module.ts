import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import {TableModule} from 'primeng/table';
import { ChartsModule } from 'ng2-charts';
 
import { UltimasAtividades } from './components/ultimas-atividades';
import { ProximasAtividades } from './components/proximas-atividades';
import { Atividades } from './components/atividades';
// import { ChartTotalMes } from './components/chart-total-mes';
// import { ChartMes } from './components/chart-mes';
// import { ChartMeses } from './components/chart-meses';
import { RelacaoLancamentosModal } from './modals/relacao-lancamentos/relacao-lancamentos.modal';
import { PainelPage } from './pages/painel/painel-page';
import { PainelRoutingModule } from './painel-routing.module';
import { ChartMes } from './components/chart-mes';
import { ChartTotalMes } from './components/chart-total-mes';
import { ChartMeses } from './components/chart-meses';

@NgModule({
  imports: [
    CommonModule, 
    TableModule,
    ChartsModule,
    PainelRoutingModule
  ], 
  declarations: [PainelPage, UltimasAtividades, ProximasAtividades, Atividades, ChartMes, ChartTotalMes, ChartMeses,
    RelacaoLancamentosModal
  ],
  // providers: [
  //   { provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock ] }
  // ],
  entryComponents: [RelacaoLancamentosModal]
})
export class PainelModule { } 
