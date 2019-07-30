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
  selector: 'chart-total-mes',
  template:`
<div class="box box-primary sombreado">
  <div class="box-header">
    <h3 class="box-title"><i class="material-icons">insert_chart</i> Total Despesas e Receitas do mês</h3> 
  </div>
  <div class="box-body no-padding">
    <div [chart]="chartTotal"></div>
  </div>
</div>
  `,
  styles:[``]
})
export class ChartTotalMes implements OnInit {
   
  @Input() public lista: any[];  

  public chartTotal:any;

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor() {
  } 

  /***************************************************************************************************
   * Inicializa o componente   
   ***************************************************************************************************/
  ngOnInit() {   
    this.chartTotal = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Total Despesas e Receitas'
      },
      credits: {
        enabled: false
      },
      series: [ 
        {
          type: 'column',
          name: '',
          color: '#0099ff',
          data: this.getBarChartTotal()
        },
      ],  
      xAxis: { 
        title: {
          text: null
        }, 
        categories: ['Total Despesas', 'Total Receitas']
      } ,  
      yAxis: { 
        title: {
          text: null
        }, 
        labels:  { 
          formatter:  function () {
            return Funcoes.numberToMoney(Number(this.value).toFixed(2)) ;
          },
        }
      },
      tooltip:{
        animation:true,
        backgroundColor: '#FFFFFF',
        borderColor: '#0000FF',
        borderRadius: 15,
        useHTML:true,
        valueDecimals: 2,
        formatter: function () {
          return `<span style="color:${this.color}">\u25CF</span> ${this.x}: <b>${Funcoes.numberToMoney(Number(this.y).toFixed(2))}</b><br/>`;
        }
      }
    }); 
  }     
   
  private getBarChartTotal():any[] {     
    var dados  = new Array();
    let total:number = 0.00;
    let receitas:number = 0.00;
 
    for(let o of this.lista){
      if(o.codTipo != 4 ){
        total = Number((total + o.valorPago).toFixed(2));
      }else{
        receitas = o.valorPago;
      }
    }     
    dados.push({name: 'Total Despesas', color: DESPESAS_COR, y: total});
    dados.push({name: 'Total Receitas', color: RECEITAS_COR, y: receitas});

    return dados;
  }
  
}
