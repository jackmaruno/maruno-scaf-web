import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Funcoes } from 'src/app/core/util/funcoes';

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
<div class="box box-primary sombreado">
  <div class="box-header">
      <h3 class="box-title"><i class="material-icons">insert_chart</i> Despesas e Receitas nos Últimos 12 meses</h3> 
  </div>
  <div class="box-body no-padding">
      <div [chart]="chart"></div>
  </div>
</div>
  `,
  styles:[``]
})
export class ChartMeses implements OnInit {
   
  @Input() public lista: any[]; 

  public chart:any;

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor() {
  } 

  /***************************************************************************************************
   * Inicializa o componente   
   ***************************************************************************************************/
  ngOnInit() {    
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [
        { 
          type: 'line',
          name: 'Receitas',
          color: RECEITAS_COR, 
          data: this.getLineChart('valorReceita')
        },
        { 
          type: 'line',
          name: 'Despesas',
          color: DESPESAS_COR, 
          data: this.getLineChart('valorDespesa') 
        } 
      ], 
      xAxis: { 
        labels:  { 
          format: '{value:%Y/%m}'
        },
        crosshair: true
      },
      yAxis: {
        labels:  { 
          formatter:  function () {
            return Funcoes.numberToMoney(this.value+'.00') ;
          },
        },
        title: {
          text: ''
        }, 
      }, 
      tooltip:{
        animation:true,
        backgroundColor: 'white',
        borderColor: 'blue',
        borderRadius: 15,
        useHTML:true,
        valueDecimals: 2,
        // headerFormat: '<B>{point.x:%Y/%m}</B><BR>',
        shared: true, 
        formatter: function () {
          return this['points'].reduce(function (s:any, point:any) {
              let cor  = DESPESAS_COR;
              if(point.series.name == 'Receitas'){
                cor = RECEITAS_COR;
              }
              return `${s}<br/><span style="color: ${cor}">${point.series.name}:</span> ${Funcoes.numberToMoney(point.y)} `;
          }, `<b> ${Funcoes.getDateString(new Date(this.x), 'YYYY/MM')}</b>`);
        },
      }
    }); 
  }    
  
  public getLineChart(field:string):any[] {     
    var dados  = new Array();
    for(let o of this.lista){ 
      dados.push([Funcoes.getDate(o.data).getTime() , o[field]]);
    }   
    return dados;
  }


}
