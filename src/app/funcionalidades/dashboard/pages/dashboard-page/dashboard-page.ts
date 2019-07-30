import { Component, OnInit } from '@angular/core';

import { SidebarContainerService } from 'src/app/core/components/sidebar/sidebar-container.service';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { DashBoardService } from 'src/app/services/dashboard.service';

/***********************************
*  Tela DashBoard
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.html',
  styleUrls: ['./dashboard-page.scss']
})
export class DashboardPage implements OnInit {
   
  public dados: any; 
 

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private sidebarService: SidebarContainerService
            , private actionBarService: ActionBarService
            , public dashBoardService: DashBoardService ) {
    sidebarService.close();
  } 

  /***************************************************************************************************
   * Inicializa o componente
  public ultimasAtividades: any;
  public proximasAtividades: any;
  public atividadesMes: any;
  public atividadesMeses: any;
  public agenda: any;
   ***************************************************************************************************/
  ngOnInit() { 

    this.dashBoardService.findDadosDashBoard().subscribe((dados) => {
      this.dados = dados;
    });
    // this.dados = this.dados_temp;  
 
  } 
  

  /*************************************************************************************************** 
   ***************************************************************************************************/
  public dados_temp:any = {
    agenda: [
        {
            codAgendamento: 1,
            codCategoria: 1,
            nomeCategoria: "Aluguel (teste)",
            valorPrevisto: 0,
            dataPrevista: "07/03/2019"
        },
        {
            codParcela: 34,
            codCategoria: 46,
            nomeCategoria: "Parcela 2 (Faculdade)",
            valorPrevisto: 20,
            valorPago: 20,
            dataPrevista: "23/03/2019",
            dataPagamento: "19/03/2019"
        }
    ],
    "atividadesMes": [
        {
            codTipo: 1,
            descricao: "Agendamentos",
            valorPrevisto: 1790.67,
            valorPago: 1790.67
        },
        {
            codTipo: 3,
            descricao: "Despesas Gerais",
            valorPrevisto: 750.00,
            valorPago: 750.00
        },
        {
            codTipo: 2,
            descricao: "Parcelas",
            valorPrevisto: 1387.97,
            valorPago: 1387.97
        },
        {
            codTipo: 5,
            descricao: "Faturas",
            valorPrevisto: 1269.95,
            valorPago: 1269.95
        },
        {
            codTipo: 4,
            descricao: "Receitas",
            valorPrevisto: 6441.58,
            valorPago: 6441.58
        }
    ],
    "atividadesMeses": [
        {
            "data": "01/11/2018",
            "valorDespesa": 4000.42,
            "valorReceita": 6100
        },
        {
            "data": "01/12/2018",
            "valorDespesa": 7000.95,
            "valorReceita": 7200
        },
        {
            "data": "01/01/2019",
            "valorDespesa": 6000.23, 
            "valorReceita": 6300.54
        },
        {
            "data": "01/02/2019",
            "valorDespesa": 5400.23, 
            "valorReceita": 6350.54
        },
        {
            "data": "01/03/2019",
            "valorDespesa": 6300.23, 
            "valorReceita": 6400.54
        },
        {
            "data": "01/04/2019",
            "valorDespesa": 6100.23, 
            "valorReceita": 6500.54
        },
        {
            "data": "01/05/2019",
            "valorDespesa": 6600.23, 
            "valorReceita": 6300.54
        },
        {
            "data": "01/06/2019",
            "valorDespesa": 6700.23, 
            "valorReceita": 6100.54
        },
        {
            "data": "01/07/2019",
            "valorDespesa": 6100.23, 
            "valorReceita": 7400.54
        },
        {
            "data": "01/08/2019",
            "valorDespesa": 6300.23, 
            "valorReceita": 7400.54
        },
        {
            "data": "01/09/2019",
            "valorDespesa": 6000.23, 
            "valorReceita": 7200.54
        },
        {
            "data": "01/10/2019",
            "valorDespesa": 8300.23, 
            "valorReceita": 8400.54
        }
    ],
    "proximasAtividades": [  
      {
          "dataPrevista": "09/01/2019",
          "codCartaoCredito": 1,
          "nome": "MASTER - Sicoob",
          "codGrupo": 7,
          "nomeGrupo": "Operações Financeiras",
          codCategoria: 48,
          "nomeCategoria": "Pagamento de Fatura(MASTER - Sicoob)",
          valorPrevisto: 304.95,
          "dias": -79
      },
      {
          "dataPrevista": "01/03/2019",
          "codAgendamento": 3,
          "nome": "Curumim",
          "codGrupo": 10,
          "nomeGrupo": "Dependentes",
          codCategoria: 67,
          "nomeCategoria": "Material Escolar (Curumim)",
          valorPrevisto: 32.89,
          "dias": -29
      },
      {
          "dataPrevista": "07/03/2019",
          "codAgendamento": 1,
          "nome": "teste",
          "codGrupo": 1,
          "nomeGrupo": "Moradia",
          codCategoria: 1,
          "nomeCategoria": "Aluguel (4 Norte)",
          valorPrevisto: 1200.65,
          "dias": -23
      },
      {
          "dataPrevista": "10/03/2019",
          "codCartaoCredito": 1,
          "nome": "VISA - Santander",
          "codGrupo": 7,
          "nomeGrupo": "Operações Financeiras",
          codCategoria: 48,
          "nomeCategoria": "Pagamento de Fatura(VISA - Santander)",
          valorPrevisto: 536.06,
          "dias": -20
      }
    ],


    "ultimasAtividades": [
      {
          "codLancamento": 8,
          "nomeCategoria": "PARCELA N 2 (Faculdade)",
          "valor": 20,
          "data": "23/02/2019",
          "dias": 4,
          "horas": 833,
          "minutos": 50035
      },
      {
          "codLancamento": 26,
          "nomeCategoria": "Pagamento de Fatura(MASTER - sicoob)",
          "valor": 8888.88,
          "data": "02/03/2019",
          "dias": 0,
          "horas": 4,
          "minutos": 40361
      },
      {
          "codLancamento": 29,
          "nomeCategoria": "Férias",
          "valor": 343.44,
          "data": "06/03/2019",
          "dias": 0,
          "horas": 0,
          "minutos": 15
      },
      {
          "codLancamento": 30,
          "nomeCategoria": "Feira",
          "valor": 435.34,
          "data": "17/03/2019",
          "dias": 12,
          "horas": 311,
          "minutos": 18671
      }
    ]

    ,"usltimasAtividades": [
        {
            "nomeCategoria": "PARCELA N 2 (Faculdade)",
            "valor": 20,
            "data": "23/02/2019",
            "dias": 1,
            "horas": 25,
            "minutos": 41352
        },
        {
            "nomeCategoria": "Pagamento de Fatura(MASTER - sicoob)",
            "valor": 8888.88,
            "data": "02/03/2019",
            "dias": 0,
            "horas": 3,
            "minutos": 31677
        },
        {
            "nomeCategoria": "Férias",
            "valor": 343.44,
            "data": "06/03/2019",
            "dias": 0,
            "horas": 0,
            "minutos": 25
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 6,
            "horas": 166,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 2,
            "horas": 49,
            "minutos": 9988
        },
        {
            "nomeCategoria": "Feira",
            "valor": 435.34,
            "data": "17/03/2019",
            "dias": 1,
            "horas": 25,
            "minutos": 9988
        }
    ]
};

}
