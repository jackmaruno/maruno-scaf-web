import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';   
 

import { Constantes } from 'src/app/core/util/constantes';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { AlertaService } from 'src/app/services/alerta.service';
import { ContatosService } from 'src/app/services/contatos.service';

/***********************************
*  Tela Contatos
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-contatos', 
  templateUrl: './contatos.html',
  styleUrls: ['./contatos.scss']
})
export class ContatosPage implements OnInit{ 

  public lista$: Observable<any[]>; 

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService 
    , public contatosService:ContatosService
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
    this.lista$ = this.contatosService.find();
  }

  /***************************************************************************************************
   *  remove
   ***************************************************************************************************/
  public remover(contato: any) {
    let msg = `Deseja mesmo excluir o Contato do "${contato.nome}" com a seguinte mensagem "${contato.mensagem}"?`;
    this.alertaService.confirmar("Exclusão de Contato", msg).subscribe((data?: any) => {
      console.log(data);
      if (data && data.resultado && data.resultado == Constantes.CONFIRMADO) {
        this.contatosService.remove(contato.codigo).subscribe((r?) => {
          this.alertaService.sucesso(`Contato do "${contato.nome}" excluído com sucesso!`);
          this.pesquisar();
        });
      }
    }); 
  }
}
