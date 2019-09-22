import { Component} from '@angular/core'; 
import {DynamicDialogRef} from 'primeng/api';
import {DynamicDialogConfig} from 'primeng/api';

import { AgendamentoService } from '../../../../services/agendamento.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Funcoes } from '../../../../util/funcoes';
import { Constantes } from '../../../../util/constantes';
 
@Component({
  selector: 'app-agendamento-modal',
  templateUrl:'agendamento.modal.html' ,
  styleUrls: ['agendamento.modal.scss']
})
export class AgendamentoModal {

    public agendamento: any;
    public grupo:any = {listCategorias:[]};
    public listGrupos:any[]; 
    public listPeriodos:any[];  

    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    constructor(public ref: DynamicDialogRef
              , public config: DynamicDialogConfig
              , public agendamentoService:AgendamentoService
              , private alertaService:AlertaService 
              ) {
        this.listGrupos = config.data.listGrupos;  
        this.listPeriodos = config.data.listPeriodos;  
        if(config.data.agendamento && config.data.agendamento.codigo > 0){
            this.agendamento = Object.assign({}, JSON.parse(JSON.stringify(config.data.agendamento)));  
            for(let grupo of this.listGrupos){
                if(grupo.codigo === config.data.agendamento.categoria.grupo.codigo){
                    this.grupo = grupo;

                    for(let categoria of grupo.listCategorias){
                        if(categoria.codigo === config.data.agendamento.categoria.codigo){
                            this.agendamento.categoria = categoria;
                        }
                    }
                }
            }
            for(let periodo of this.listPeriodos){
                if(periodo.numero === config.data.agendamento.periodo.numero){
                    this.agendamento.periodo = periodo;
                }
            }  
            this.agendamento.dataInicio = Funcoes.getDate(this.agendamento.dataInicio); 

        }else{
            this.agendamento = {nome:'', dataInicio: new Date()};  
        }
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.ref.close({valor: valor}); 
    } 
 
    /***************************************************************************************************
     * salva
     ***************************************************************************************************/
    public salvar(){ 
        let mensagem = `Pagamento Agendado salvo com sucesso!`;

        let agendamento = JSON.parse(JSON.stringify(this.agendamento));
        agendamento.dataInicio = Funcoes.getDateString(agendamento.dataInicio);
         
        this.agendamentoService.save(agendamento).subscribe(
            () => {  
                this.alertaService.sucesso(mensagem);
                this.fechar(Constantes.SUCESSO);
            }  
        ); 
    }
 
}
