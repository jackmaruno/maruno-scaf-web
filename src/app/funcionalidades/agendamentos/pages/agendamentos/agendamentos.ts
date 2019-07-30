import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';   
 

import { Constantes } from 'src/app/core/util/constantes';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { AgendamentoModal } from '../../modals/agendamento/agendamento.modal';
import { AlertaService } from 'src/app/services/alerta.service';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { TagsService } from 'src/app/services/tags.service';
import { TagsModal } from 'src/app/modals/tags/tags.modal';

/***********************************
*  Tela Cadastro de Pagamentos Agendados
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-agendamentos', 
  templateUrl: './agendamentos.html',
  styleUrls: ['./agendamentos.scss']
})
export class AgendamentosPage implements OnInit{ 

  public lista$: Observable<any[]>;
  public listGrupos: any[];
  public listPeriodos: any[];
  public listTags: any[];

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService
    , public agendamentoService: AgendamentoService
    , public parametrosService: ParametrosService
    , public tagsService:TagsService
    , private alertaService: AlertaService) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.pesquisar();
    this.parametrosService.findGrupos().subscribe((listGrupos) => {
      this.listGrupos = listGrupos;
    });
    this.parametrosService.findPeriodos().subscribe((listPeriodos) => {
      this.listPeriodos = listPeriodos;
    });
    this.tagsService.findTags().subscribe((listTags) => {
      this.listTags = listTags;
    });
  }

  /***************************************************************************************************
   *  realiza a pesquisa 
   ***************************************************************************************************/
  public pesquisar() {
    this.lista$ = this.agendamentoService.find();
  }

  /*************************************************************************************************** 
   ***************************************************************************************************/

  public openTags(agendamento: any) {
    let data = { tags: agendamento.tags, listTags:this.listTags };
    this.actionBarService.open(TagsModal, { data: data }).afterClosed().subscribe((result?: any) => {
      if (result && result.valor === Constantes.SUCESSO) {
        agendamento.tags = result.tags;
      }
    });
  }

  /***************************************************************************************************
   * abre a tela de cadastro
   ***************************************************************************************************/
  public editar(agendamento: any) {
    let data = { agendamento: agendamento, listGrupos: this.listGrupos, listPeriodos: this.listPeriodos, listTags:this.listTags };
    this.actionBarService.open(AgendamentoModal, { data: data }).afterClosed().subscribe((result?: any) => {
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
      console.log(data);
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
      console.log(data);
      if (data && data.resultado && data.resultado == Constantes.CONFIRMADO) {
        this.agendamentoService.remove(agendamento.codigo).subscribe((r?) => {
          this.alertaService.sucesso(`Pagamento Agendado "${agendamento.nome}" excluído com sucesso!`);
          this.pesquisar();
        });
      }
    }); 
  }
}
