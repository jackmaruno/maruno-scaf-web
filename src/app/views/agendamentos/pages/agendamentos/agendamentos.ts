import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';   
import {DialogService} from 'primeng/api';
  
import { AgendamentoModal } from '../../modals/agendamento/agendamento.modal'; 
import { AgendamentoService } from '../../../../services/agendamento.service';
import { ParametrosService } from '../../../../services/parametros.service';
import { TagsService } from '../../../../services/tags.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Constantes } from '../../../../util/constantes';
import { SidebarContainerService } from '../../../../components/sidebar/sidebar-container.service';

/***********************************
*  Tela Cadastro de Pagamentos Agendados
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-agendamentos', 
  templateUrl: './agendamentos.html',
  styleUrls: ['./agendamentos.scss'],
  // providers: [DialogService]
})
export class AgendamentosPage implements OnInit{ 

  public lista$: Observable<any[]>;
  public listGrupos: any[];
  public listPeriodos: any[];

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(
      private sidebarService: SidebarContainerService
    , public dialogService: DialogService
    , public agendamentoService: AgendamentoService
    , public parametrosService: ParametrosService
    , public tagsService:TagsService
    , private alertaService: AlertaService) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.sidebarService.close();
    this.pesquisar();
    this.parametrosService.findGrupos((listGrupos: any[]) => {
      this.listGrupos = listGrupos;
    });
    this.parametrosService.findPeriodos((listPeriodos: any[]) => {
      this.listPeriodos = listPeriodos;
    }); 
  }

  /***************************************************************************************************
   *  realiza a pesquisa 
   ***************************************************************************************************/
  public pesquisar() {
    this.lista$ = this.agendamentoService.find();
  }
 
  /***************************************************************************************************
   * abre a tela de cadastro  
   ***************************************************************************************************/
  public editar(agendamento: any) {
    this.dialogService.open(AgendamentoModal, {
        data: { agendamento: agendamento, listGrupos: this.listGrupos, listPeriodos: this.listPeriodos},
        header: 'Cadastro de Pagamento Agendado', 
        closeOnEscape: true,
        width: '75%',
        baseZIndex: 10000,
    }).onClose.subscribe((result?: any) => {
        if (result && result.valor === Constantes.SUCESSO) {
          this.pesquisar();
        }
    }); 
  }
 
  /***************************************************************************************************
   *  alterar Status
   ***************************************************************************************************/
  public alterarStatus(agendamento: any) {
    let msg = `Deseja mesmo ${agendamento.ativo ?'Desativar':'Ativar'} o Pagamento Agendado "${agendamento.nome}"`;
    this.alertaService.confirmar(`${agendamento.ativo ?'Desativação':'Ativação'} de Pagamento Agendado`, msg).subscribe((data?: any) => {
      if (data && data.resultado && data.resultado == Constantes.CONFIRMADO) {
        this.agendamentoService.alterarStatus(agendamento).subscribe((r?) => {
          this.alertaService.sucesso(`Pagamento Agendado "${agendamento.nome}" ${agendamento.ativo ?'desativado':'ativado'} com sucesso!`);
          this.pesquisar();
        });
      }
    }); 
  }
  
  /***************************************************************************************************
   *  remove
   ***************************************************************************************************/
  public remover(agendamento: any) {
    let msg = `Deseja mesmo excluir o Pagamento Agendado "${agendamento.nome}"`;
    this.alertaService.confirmar("Exclusão de Pagamento Agendado", msg).subscribe((data?: any) => {
      if (data && data.resultado && data.resultado == Constantes.CONFIRMADO) {
        this.agendamentoService.remove(agendamento.codigo).subscribe((r?) => {
          this.alertaService.sucesso(`Pagamento Agendado "${agendamento.nome}" excluído com sucesso!`);
          this.pesquisar();
        });
      }
    });  
  }
}
