import { Component } from '@angular/core'; 
import { CartaoService } from '../../../../services/cartao.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Constantes } from '../../../../util/constantes';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
 
 
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
    constructor(public ref: DynamicDialogRef
              , public config: DynamicDialogConfig
              , public cartaoService:CartaoService
              , private alertaService:AlertaService ) {
        if(config.data.cartao){
            this.cartao = Object.assign({}, JSON.parse(JSON.stringify(config.data.cartao)));   
        }else{
            this.cartao = {nome:''};  
        }
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.ref.close({...this.config.data, alor: valor}); 
    } 
 
    /***************************************************************************************************
     * salva 
     ***************************************************************************************************/
    public salvar(){ 
        let mensagem = `Cartão salvo com sucesso!`;
        this.cartaoService.save(this.cartao).subscribe(
            () => {  
                this.config.data.cartao = this.cartao; 
                this.alertaService.sucesso(mensagem);
                this.fechar(Constantes.SUCESSO);
            }  
        ); 
    }
 
}
