import { Component, OnInit, Input } from '@angular/core';
import { Funcoes } from '../../../util/funcoes';
// import { Chart } from 'angular-highcharts';

var RECEITAS_COR = '#00a65a';
var DESPESAS_COR = '#f56954';
/***********************************
*  CHART
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'chart-meses',
  template:`
<div class="card sombreado"> 
  <div class="card-header">
    <i class="icon-calendar"></i> <span style="font-size: 22px;">Despesas e Receitas nos Últimos 12 meses</span>
  </div>
  <div class="card-body painel" >
    <canvas baseChart class="chart"
            [datasets]="lineChartData"
            [labels]="lineChartLabels"
            [options]="chartOptions" 
            [legend]="true"
            [chartType]="'line'" >
    </canvas>
  </div> 
</div>
 
  `,
  styles:[``] 
})
export class ChartMeses implements OnInit {
   
  @Input() public lista: any[]; 

  public lineChartLabels: Array<any>;
  public lineChartData: Array<any>;

  public chartOptions = {
    scaleShowVerticalLines: true
  , responsive: true 
  , showLine: true 
  , animation: false
  , elements: {
      line: {
          tension: 0 // disables bezier curves
      }
  }
  , scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
};
 
  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor() {
  } 

  /***************************************************************************************************
   * Inicializa o componente   
   ***************************************************************************************************/
  ngOnInit() {     
    this.lineChartData = new Array();
    this.lineChartData.push({data: this.getLineChartData('valorReceita'), label: 'Receitas', fill: false, borderColor:"#00a65a", backgroundColor: '#00a65a', pointBackgroundColor:'#00a65a'});
    this.lineChartData.push({data: this.getLineChartData('valorDespesa'), label: 'Despesas', fill: false, borderColor:"#FF0000", backgroundColor: '#FF0000', pointBackgroundColor:'#FF0000'});

    this.lineChartLabels = this.getMeses();
  }     

  public getLineChartData(field:string):any[] {
    var dados  = new Array();
    for(let o of this.lista){ 
      dados.push(o[field]);
    }   
    return dados;
  }

  public getMeses():any[] {
    var dados  = new Array();
    for(let o of this.lista){ 
      dados.push(Funcoes.getMes(o.data));
    }   
    return dados;
  }

}
