import { TipoDadoEnum } from "./constantes";

/***************************************************************************************************
*  Classe para validar campos de um formulário
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
export class FormularioUtil {

    public static TIPOS_STRING = [
        TipoDadoEnum.DATA, TipoDadoEnum.PERIODO, TipoDadoEnum.TEXTO, TipoDadoEnum.TEXTO_GRANDE
    ];

    public static TIPOS_NUMERICOS = [
        TipoDadoEnum.NUMERO, TipoDadoEnum.FLOAT, TipoDadoEnum.RADIO
    ];

    /***************************************************************************************************
    *  valida o campo
    ***************************************************************************************************/
    public static validarCampo(campo: any): boolean {
        if (campo.obrigatorio == true
            && (this.in(campo.tipoDado.codigo, this.TIPOS_STRING) || this.in(campo.tipoDado.codigo, this.TIPOS_NUMERICOS))) {
            if (this.isPossuiItens(campo) && campo.tipoDado.codigo != TipoDadoEnum.RADIO) {
                for (let item of campo.listaItens) {
                    if (!this.validarValor(campo.tipoDado.codigo, item.resposta)) {
                        return false;
                    }
                }
            } else {
                return this.validarValor(campo.tipoDado.codigo, campo.resposta);
            }
        }
        return true;
    }

    /***************************************************************************************************
    *  valida o valor do campo
    ***************************************************************************************************/
    public static validarValor(codTipoDado: number, valor): boolean {
        if (this.in(codTipoDado, this.TIPOS_STRING)) {
            return valor && valor.length > 0;
        } else if (this.in(codTipoDado, this.TIPOS_NUMERICOS)) {
            return valor && valor > 0;
        }
        return true;
    }

    /***************************************************************************************************
    *  verifica se possui itens
    ***************************************************************************************************/
    public static isPossuiItens(campo: any): boolean {
        if (campo.possuiItens == true && campo.listaItens) {
            return campo.listaItens.length > 0;
        }
        return false;
    }


    /***************************************************************************************************
    *  verifica se possui na lista
    ***************************************************************************************************/
    public static in(codigo: number, lista): boolean {
        for (let other of lista) {
            if (other == codigo) {
                return true;
            }
        }
        return false;
    }

    /***************************************************************************************************
    *  verifica se o tipo de dado do campo é do tipo STRING
    ***************************************************************************************************/
    public static isString(campo: any): boolean {
        return this.in(campo.tipoDado.codigo, this.TIPOS_STRING);
    }

    /***************************************************************************************************
    *  verifica se o tipo de dado do campo é do tipo NUMÉRICO
    ***************************************************************************************************/
    public static isNumerico(campo: any): boolean {
        return this.in(campo.tipoDado.codigo, this.TIPOS_NUMERICOS);
    }
}