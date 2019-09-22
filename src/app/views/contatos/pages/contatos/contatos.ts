import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';   
import { ActionBarService } from '../../../../components/actionbar';
import { ContatosService } from '../../../../services/contatos.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Constantes } from '../../../../util/constantes';
import { SidebarContainerService } from '../../../../components/sidebar/sidebar-container.service';
 
 

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
    , private sidebarService: SidebarContainerService
    , public contatosService:ContatosService
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
