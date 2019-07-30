import { Directive, Attribute } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CpfCnpj } from '../util/cpf-cnpj';
 
/***************************************************************************************************
*  Diretiva de máscaras 
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Directive({
    selector: '[mascara]'
  , host: {'(keyup)': 'onInputChange($event)'}
  , providers: [NgModel]
})
export class MascaraDirective {
 
    private tipo: string;

    /***************************************************************************************************
     *          Construtor de pobre 
     ***************************************************************************************************/
    constructor(public model: NgModel, @Attribute('mascara') tipo: string) {
        this.tipo = tipo;
    }

    /***************************************************************************************************
     *          Evento mapeado
     ***************************************************************************************************/
    public onInputChange(event) {
        let valorLimpo = event.target.value.replace(/[^\d]+/g, '');
        switch (this.tipo) {
            case "CPF":
                this.cpf(valorLimpo);
                return;
            case "CNPJ":
                this.cnpj(valorLimpo);
                return;
            case "CPF-CNPJ":
                this.cpfCnpj(valorLimpo);
                return;
            case "MONETARIO":
                this.monetario(valorLimpo);
                return;
            case "MONETARIO-NULL":
                this.monetarioNull(valorLimpo);
                return;
            case "INTEIRO":
                this.model.update.emit(valorLimpo);
                return;
            case "TELEFONE":
                this.telefone(valorLimpo);
                return;
            default:
                return;
        }
    }

    /***************************************************************************************************
     * formata CPF
     ***************************************************************************************************/
    private cpf(valorLimpo: any) {
        this.model.update.emit(CpfCnpj.formatarCPFIncompleto(valorLimpo));
    }

    /***************************************************************************************************
     * formata CNPJ
     ***************************************************************************************************/
    private cnpj(valorLimpo: any) {
        this.model.update.emit(CpfCnpj.formatarCNPJIncompleto(valorLimpo));
    }

    /***************************************************************************************************
     * formata CPF/CNPJ
     ***************************************************************************************************/
    private cpfCnpj(valorLimpo: any) {
        if (valorLimpo.length <= 11) {
            this.model.update.emit(CpfCnpj.formatarCPFIncompleto(valorLimpo));
        } else {
            this.model.update.emit(CpfCnpj.formatarCNPJIncompleto(valorLimpo));
        }
    }

    /***************************************************************************************************
     * formata Telefone
     ***************************************************************************************************/
    private telefone(valorLimpo: any) {
        let telefone = valorLimpo.replace(/(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
        this.model.update.emit(telefone);
    }

    /***************************************************************************************************
     * formata Moeda
     ***************************************************************************************************/
    private monetario(valorLimpo: any) {
        if (!valorLimpo) {
            this.model.update.emit(valorLimpo);
            return;
        }
        let v = valorLimpo + 'e-2';
        let numero = Number(v);
        v = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        this.model.update.emit(v);
    }

    /***************************************************************************************************
     * formata Moeda e/ou nulo
     ***************************************************************************************************/
    private monetarioNull(valorLimpo: any) {
        if (!valorLimpo) {
            this.model.update.emit(valorLimpo);
            return;
        }
        let v = valorLimpo + 'e-2';
        let numero = Number(v);
        if (numero > 0) {
            v = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        } else {
            v = '';
        }
        this.model.update.emit(v);
        return;
    }
}