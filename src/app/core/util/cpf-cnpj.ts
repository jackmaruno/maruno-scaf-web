/***************************************************************************************************
*  Classe para formatar CPF/CNPJ
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
export class CpfCnpj{ 

    /***************************************************************************************************
     * Formata CPF OU CNPJ
     ***************************************************************************************************/
    public static formatarCpfCnpj(cpfCnpj: string): string {
        if (cpfCnpj.length <= 11) {
            return CpfCnpj.formatarCPF(cpfCnpj);
        } else {
            return CpfCnpj.formatarCNPJ(cpfCnpj);
        }
    }

    /***************************************************************************************************
     * Formata CPF
     ***************************************************************************************************/
    public static formatarCPF(valor: string): string {
        if (valor.length > 3 && valor.length <= 6) {
            return valor.replace(/(\d{3})(\d{1,3})$/, "$1.$2");
        }
        if (valor.length > 6 && valor.length <= 9) {
            return valor.replace(/(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
        }

        if (valor.length == 10) {
            return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
        }

        return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    }

    /***************************************************************************************************
     * Formata CNPJ
     ***************************************************************************************************/
    public static formatarCNPJ(valor: string): string {
        if (valor.length > 2 && valor.length <= 5) {
            return valor.replace(/(\d{2})(\d{1,3})$/, "$1.$2");
        }

        if (valor.length > 5 && valor.length <= 8) {
            return valor.replace(/(\d{2})(\d{3})(\d{1,3})$/, "$1.$2.$3");
        }

        if (valor.length > 8 && valor.length <= 12) {
            return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})$/, "$1.$2.$3/$4");
        }

        if (valor.length == 13) {
            return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/, "$1.$2.$3/$4-$5");
        }

        return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
    }


    public static validarCPFCNPJ(cpfCnpj) {
        cpfCnpj = cpfCnpj.replace(/[^\d]+/g, '');

        if ((cpfCnpj != null) && (cpfCnpj != undefined) && (cpfCnpj != "")) {
            if (cpfCnpj.length <= 11) {
                return this._testaCPF(cpfCnpj);
            } else {
                return this._testaCNPJ(cpfCnpj);
            }
        }
    }

    private static _testaCPF(cpf: String) {
        if (cpf.length != 11) {
            return false;
        }

        let retorno: boolean = null;

        if (cpf.search(/(1{11})|(2{11})|(3{11})|(4{11})|(5{11})|(6{11})|(7{11})|(8{11})|(9{11})|(0{11})/) == 0) {
            return false;
        }

        let Soma;
        let Resto;
        Soma = 0;

        for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10))) retorno = false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11))) retorno = false;
        if (retorno == null || retorno == undefined) {
            retorno = true;
        }

        return retorno;
    }

    private static _testaCNPJ(cnpj: String) {
        if (cnpj.length != 14) {
            return false;
        }

        // Elimina CNPJs invalidos conhecidos
        if (cnpj.search(/(1{14})|(2{14})|(3{14})|(4{14})|(5{14})|(6{14})|(7{14})|(8{14})|(9{14})|(0{14})/) == 0) {
            return false;
        }

        // Valida DVs
        let tamanho: any = cnpj.length - 2
        let numeros: any = cnpj.substring(0, tamanho);
        let digitos: any = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;

            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)) {

            return false;
        }

        return true;

    }



    /***************************************************************************************************
     * Formata CPF Incompleto
     ***************************************************************************************************/
    public static formatarCPFIncompleto(valor: string): string {
        if (valor.length > 3 && valor.length <= 6) {
            return valor.replace(/(\d{3})(\d{1,3})$/, "$1.$2");
        }
        if (valor.length > 6 && valor.length <= 9) {
            return valor.replace(/(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
        }

        if (valor.length == 10) {
            return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
        }

        return CpfCnpj.formatarCPF(valor);
    }


    /***************************************************************************************************
     * Formata CNPJ Incompleto
     ***************************************************************************************************/
    public static formatarCNPJIncompleto(valor: string): string {
        if (valor.length > 2 && valor.length <= 5) {
            return valor.replace(/(\d{2})(\d{1,3})$/, "$1.$2");
        }

        if (valor.length > 5 && valor.length <= 8) {
            return valor.replace(/(\d{2})(\d{3})(\d{1,3})$/, "$1.$2.$3");
        }

        if (valor.length > 8 && valor.length <= 12) {
            return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})$/, "$1.$2.$3/$4");
        }

        if (valor.length == 13) {
            return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/, "$1.$2.$3/$4-$5");
        }

        return CpfCnpj.formatarCNPJ(valor);
    }
}

