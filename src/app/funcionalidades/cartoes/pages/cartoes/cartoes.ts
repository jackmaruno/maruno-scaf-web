import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';   
 

import { Constantes } from 'src/app/core/util/constantes';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { AlertaService } from 'src/app/services/alerta.service';
import { CartaoService } from 'src/app/services/cartao.service';
import { CartaoModal } from '../../modals/cartao/cartao.modal';

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

  public lista$: Observable<any[]>;

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService
    , public cartaoService: CartaoService
    , private alertaService: AlertaService) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.pesquisar(); 
  }

  /***************************************************************************************************
   *  realiza a pesquisa 
   ***************************************************************************************************/
  public pesquisar() {
    this.lista$ = this.cartaoService.find();
  }

  /***************************************************************************************************
   * abre a tela de cadastro
   ***************************************************************************************************/
  public editar(objecto: any) {
    let data = { cartao: objecto};
    this.actionBarService.open(CartaoModal, { data: data }).afterClosed().subscribe((result?: any) => {
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
