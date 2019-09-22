import { Component, OnInit, Input } from '@angular/core';
// import { Chart } from 'angular-highcharts';

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
<div class="card sombreado"> 
  <div class="card-header">
    <i class="icon-calendar"></i> <span style="font-size: 22px;">Total Despesas e Receitas do mês</span>
  </div>

  <div class="card-body painel" >
    <canvas baseChart class="chart"
    [datasets]="barChartData"
    [labels]="['']"
    [options]="chartOptions"
    [legend]="true"
    [chartType]="'bar'"  >
    </canvas>
  </div> 
</div>  
  `,
  styles:[``]
})
export class ChartTotalMes implements OnInit {
   
  @Input() public lista: any[];  

  public barChartData: any[] = null;

  public chartOptions = {
      scaleShowVerticalLines: true
    , responsive: true 
    , animation: false
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
    this.barChartData  = new Array();

    let total:number = 0.00;
    let receitas:number = 0.00;
 
    for(let o of this.lista){
      if(o.codTipo != 4 ){
        total = Number((total + o.valorPago).toFixed(2));
      }else{
        receitas = o.valorPago;
      }
    }      
    this.barChartData.push({data: [total], label: 'Total Despesas', backgroundColor: DESPESAS_COR, borderColor: DESPESAS_COR});
    this.barChartData.push({data: [receitas], label: 'Total Receitas', backgroundColor: RECEITAS_COR, borderColor: RECEITAS_COR});

  }     
    
  
}
