import { Component, Inject } from '@angular/core'; 

import { Constantes } from 'src/app/core/util/constantes';
import { AlertaService } from 'src/app/services/alerta.service';
import { ActionBarRef, ACTIONBAR_DATA } from 'src/app/core/components/actionbar';
import { CartaoService } from 'src/app/services/cartao.service';
 
@Component({
  selector: 'app-cartao-modal',
  templateUrl:'cartao.modal.html' ,
  styleUrls: ['cartao.modal.scss']
})
export class CartaoModal {

    public cartao: any; 
    public listBandeiras: any[] = [{sigla:'MASTER'}, {sigla:'VISA'}]; 


    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    constructor(public actionBarRef: ActionBarRef
              , @Inject(ACTIONBAR_DATA) public data: any
              , public cartaoService:CartaoService
              , private alertaService:AlertaService ) {
        if(data.cartao){
            this.cartao = Object.assign({}, JSON.parse(JSON.stringify(data.cartao)));   
        }else{
            this.cartao = {nome:''};  
        }
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.actionBarRef.close({ ...this.data, valor: valor });
    } 
 
    /***************************************************************************************************
     * salva 
     ***************************************************************************************************/
    public salvar(){ 
        let mensagem = `Cartão salvo com sucesso!`;
        this.cartaoService.save(this.cartao).subscribe(
            () => {  
                this.data.cartao = this.cartao; 
                this.alertaService.sucesso(mensagem);
                this.fechar(Constantes.SUCESSO);
            }  
        ); 
    }
 
}
