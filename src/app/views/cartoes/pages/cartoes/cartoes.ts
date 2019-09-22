import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';   
 
 
import { CartaoModal } from '../../modals/cartao/cartao.modal';
import { CartaoService } from '../../../../services/cartao.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Constantes } from '../../../../util/constantes';
import { SidebarContainerService } from '../../../../components/sidebar/sidebar-container.service';
import { DialogService } from 'primeng/api';
import { Funcoes } from '../../../../util/funcoes';

/***********************************
*  Tela Cadastro de Cartões
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-cartoes', 
  templateUrl: './cartoes.html',
  styleUrls: ['./cartoes.scss']
})
export class CartoesPage implements OnInit{ 

  public lista: any[];
  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private sidebarService: SidebarContainerService
    , public dialogService: DialogService
    , public cartaoService: CartaoService
    , private alertaService: AlertaService) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.sidebarService.close();
    this.pesquisar(); 
  }

  /***************************************************************************************************
   *  realiza a pesquisa 
   ***************************************************************************************************/
  public pesquisar() {
    Funcoes.setItem(Constantes.LIST_CARTOES, []);
    Funcoes.setItem(Constantes.LIST_CARTOES_ATIVOS, []);
    this.cartaoService.findCartoes(
      (lista: any)=>{
        this.lista = lista;
      }
    );
  }

  /***************************************************************************************************
   * abre a tela de cadastro
   ***************************************************************************************************/
  public editar(objecto: any) {
    let data = { cartao: objecto};

    this.dialogService.open(CartaoModal, {
      data: data,
      header: 'Cadastro de Cartão de Crédito', 
      closeOnEscape: true,
      // width: '75%',
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
  public alterarStatus(objecto: any) {
    let msg = `Deseja mesmo ${objecto.ativo ?'Desativar':'Ativar'} o Cartão "${objecto.nome}"`;
    this.alertaService.confirmar(`${objecto.ativo ?'Desativação':'Ativação'} de Cartão`, msg).subscribe((data?: any) => {
      console.log(data);
      if (data && data.resultado && data.resultado == Constantes.CONFIRMADO) {
        this.cartaoService.alterarStatus(objecto).subscribe((r?) => { 
          this.alertaService.sucesso(`Cartão "${objecto.nome}" ${objecto.ativo ?'desativado':'ativado'} com sucesso!`);
          this.pesquisar();
        });
      }
    }); 
  }

  /***************************************************************************************************
   *  remove
   ***************************************************************************************************/
  public remover(objecto: any) {
    let msg = `Deseja mesmo excluir o Cartão "${objecto.nome}"`;
    this.alertaService.confirmar("Exclusão de Cartão", msg).subscribe((data?: any) => {
      console.log(data);
      if (data && data.resultado && data.resultado == Constantes.CONFIRMADO) {
        this.cartaoService.remove(objecto.codigo).subscribe((r?) => {
          this.alertaService.sucesso(`Cartão "${objecto.nome}" excluído com sucesso!`);
          this.pesquisar();
        });
      }
    }); 
  }
}
