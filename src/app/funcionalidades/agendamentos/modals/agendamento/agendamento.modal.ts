import { Component, Inject } from '@angular/core'; 

import { Constantes } from 'src/app/core/util/constantes';
import { AlertaService } from 'src/app/services/alerta.service';
import { ActionBarRef, ACTIONBAR_DATA } from 'src/app/core/components/actionbar';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Funcoes } from 'src/app/core/util/funcoes';
 
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
    public listTags:any[]; 

    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    constructor(public actionBarRef: ActionBarRef
              , @Inject(ACTIONBAR_DATA) public data: any
              , public agendamentoService:AgendamentoService
              , private alertaService:AlertaService ) {
        this.listGrupos = data.listGrupos;  
        this.listPeriodos = data.listPeriodos;  
        this.listTags = data.listTags;  
        if(data.agendamento && data.agendamento.codigo > 0){
            this.agendamento = Object.assign({}, JSON.parse(JSON.stringify(data.agendamento)));  
            let categoria =  Object.assign({}, JSON.parse(JSON.stringify(data.agendamento.categoria)));  
            this.grupo = Object.assign({}, JSON.parse(JSON.stringify(data.agendamento.categoria.grupo)));  
            this.grupo.listCategorias = [categoria];

            this.agendamento.dataInicio = Funcoes.getDate(this.agendamento.dataInicio); 

        }else{
            this.agendamento = {nome:'', dataInicio: new Date()};  
        }
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.actionBarRef.close({ ...this.data, valor: valor });
    } 
 
    /***************************************************************************************************
     * salva o laudo da fiscalização
     ***************************************************************************************************/
    public salvar(){ 
        let mensagem = `Pagamento Agendado salvo com sucesso!`;

        let agendamento = JSON.parse(JSON.stringify(this.agendamento));
        agendamento.dataInicio = Funcoes.getDateString(agendamento.dataInicio);
         
        this.agendamentoService.save(agendamento).subscribe(
            () => {  
                this.data.agendamento = agendamento; 
                this.alertaService.sucesso(mensagem);
                this.fechar(Constantes.SUCESSO);
            }  
        ); 
    }
 
}
