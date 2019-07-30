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
  selector: 'chart-mes',
  template:`
<div class="box box-primary sombreado">
  <div class="box-header">
    <h3 class="box-title"><i class="material-icons">insert_chart</i> Atividades do Mês</h3> 
  </div>
  <div class="box-body no-padding">
    <div [chart]="chart"></div>
  </div>
</div>
  `,
  styles:[``]
})
export class ChartMes implements OnInit {
   
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
        type: 'column'
      },
      title: {
        text: 'Relação de Despesas'
      },
      credits: {
        enabled: false
      },
      series: [{
          type: 'column',
          name: '',
          color: 'red',
          data: this.getBarChart()
      }],  
      xAxis: { 
        title: {
          text: ''
        }, 
        categories: this.getkeys()
      },  
      yAxis: { 
        title: {
          text: ''
        }, 
        labels:  { 
          formatter:  function () {
            return Funcoes.numberToMoney(this.value+'.00') ;
          },
        } 
      }, 
      tooltip:{
        animation:true,
        backgroundColor: 'white',
        borderColor: 'blue',
        borderRadius: 15,
        useHTML:true,
        valueDecimals: 2,
        formatter: function () {
          return `<span style="color:${this.color}">\u25CF</span> ${this.x}: <b>${Funcoes.numberToMoney(Number(this.y).toFixed(2))}</b><br/>`;
        }
      }
    });  
  }     
  
  public getBarChart():any[] {     
    var dados  = new Array();
    for(let o of this.lista){
      if(o.codTipo != 4 ){
        dados.push({name: o.descricao, color: this.getColor(o), y: o.valorPago});
      }
    }     
    return dados;
  } 

  private getkeys():any[] {     
    var keys = new Array();
    for(let o of this.lista){ 
      if(o.codTipo != 4 ){
        keys.push(o.descricao);
      }
    }  
    return keys;
  }

  private iniciar(lista:any[]){
    
    let valorTotal = 0;
	  for(let atividade of lista){
			valorTotal += atividade.valorPago;
		}  

		var perc = 0;
	  for(let atividade of lista){ 
			perc = ((atividade.valorPago / valorTotal) * 100);
			atividade.percentual = Funcoes.formatInteiro(perc);
			atividade.percentualString = Funcoes.numberToMoney(perc);
			atividade.cor = this.getColor(atividade); 
    }
  }

  private getColor(resumo:any) {          
    if(resumo.codTipo == 1){
      return '#ff9900' ;
    }else if(resumo.codTipo == 2){
      return '#ffcc00' ;
    }else if(resumo.codTipo == 3){
      return '#f56954' ;
    }else if(resumo.codTipo == 4){
      return '#00a65a' ;
    }else if(resumo.codTipo == 5){
      return '#59d' ;
    }else {
    return '' ;
    }      
  }
}
