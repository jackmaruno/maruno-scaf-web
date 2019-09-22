import * as moment from 'moment';
import { Constantes } from './constantes';

/***************************************************************************************************
*  Classe utilitária com funções diversas
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***************************************************************************************************/
export class Funcoes{ 
 

    /***************************************************************************************************
    *  formata data STRING -> STRING
    ***************************************************************************************************/
    public static formartarData(data: string, formato: string = null): string {
        if (!data || data == '') {
            return '';
        }
        return moment(data).format(formato && formato.length > 0 ? formato : 'DD/MM/YYYY');
    }

    /***************************************************************************************************
    *  formata data DATE -> STRING
    ***************************************************************************************************/
    public static formartarDate(data: any): string {
        if (!data || data == '') {
            return '';
        }
        return moment(data).format('DD/MM/YYYY');
    } 

    /***************************************************************************************************
    *  retorna a data STRING -> DATE
    ***************************************************************************************************/
    public static getDate(data: string): any {
        if (!data || data.length == 0) {
            return '';
        }
        return moment(data, 'DD/MM/YYYY').toDate();
    }

    /***************************************************************************************************
    *  retorna a data STRING -> DATE
    ***************************************************************************************************/
   public static getMes(data: string): any {
        if (!data || data.length == 0) {
            return '';
        }
        return moment(data, 'DD/MM/YYYY').format('YYYY/MM');
    }

    /***************************************************************************************************
    *  retorna a data STRING -> STRING
    ***************************************************************************************************/
   public static dateToString(data: any): any {
        if (!data || (''+data).length == 0) {
            return '';
        }
        return moment(data, 'YYYY-MM-DD').format('DD/MM/YYYY');
    }

    /***************************************************************************************************
    *  retorna a data DATE -> STRING
    ***************************************************************************************************/
    public static getDateString(data: any, formato?:string): string {
        if (!data) {
            return '';
        }
        if(formato && formato != ''){
            return moment(data).format(formato);
        }
        return moment(data).format('DD/MM/YYYY');
    }

    /***************************************************************************************************
    *  retorna o período STRING -> DATE[]
    ***************************************************************************************************/
    public static getPeriodo(periodo: string): Date[] {
        if (!periodo || periodo.length < 23) {
            return [];
        }
        var dataInicio = moment(periodo.substring(0, 10), 'DD/MM/YYYY').toDate();
        var dataFim = moment(periodo.substring(12, periodo.length), 'DD/MM/YYYY').toDate();
        return [dataInicio, dataFim];
    }

    /***************************************************************************************************
    *  retorna a data inicio e fim STRING -> STRING[]
    ***************************************************************************************************/
    public static getDataInicioFim(periodo: string): string[] { 
        if(periodo && periodo.length > 20){
            return [periodo.substring(0, 10), periodo.substring(12, periodo.length)];
        }    
        return null;
    }
    public static setDataInicioFim(periodo: any[], filtro:any): void { 
        filtro.dataInicio = '';
        filtro.dataFim = '';
        let periodoString = this.formartarPeriodo(periodo);
        if(periodoString && periodoString.length > 20){
            filtro.dataInicio = periodoString.substring(0, 10);
            filtro.dataFim = periodoString.substring(13, periodoString.length);
        }    
    }

    /***************************************************************************************************
    *  formata o período DATE[] -> STRING
    ***************************************************************************************************/
    public static formartarPeriodo(periodo: any[]): string {
        console.log(periodo)
        if (!periodo || periodo.length < 1) {
            return '';
        }
        var dataInicio = Funcoes.formartarDate(periodo[0]);
        var dataFim = Funcoes.formartarDate(periodo[1]);
        console.log(dataInicio, dataFim)
        if (dataInicio != '' && dataFim != '') {
            return dataInicio + ' a ' + dataFim;
        }
        return '';
    }

    /***************************************************************************************************
    *  retorna o período do mês atual -> DATE[]
    ***************************************************************************************************/
    public static getPeriodoMesAtual(): any[] {  
        var dataInicio = moment(`${moment().format('YYYY-')}02-01`, 'YYYY-MM-DD').toDate();
        return [dataInicio, new Date()];
    }

    /***************************************************************************************************
    *  retorna a data STRING -> STRING
    ***************************************************************************************************/
    public static getData(data: string): string {
        if (!data || data.length == 0) {
            return '';
        }
        return moment(data, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }

    /***************************************************************************************************
    *  retorna a data atual -> STRING
    ***************************************************************************************************/
    public static getDataAtual(formato?: string): string {
        if (formato && formato != '') {
            return moment().format(formato);
        }
        return moment().format('DD/MM/YYYY');
    }

    /***************************************************************************************************
    *  retorna a data / hora atual -> STRING
    ***************************************************************************************************/
    public static getDataHoraAtual(): string {
        return moment().format('DD/MM/YYYY hh:mm');
    }

    /***************************************************************************************************
    *  retorna a data / hora / segundo atual -> STRING
    ***************************************************************************************************/
    public static getDataHoraSegundoAtual(): string {
        return moment().format('DD/MM/YYYY hh:mm:ss.SSS');
    }

    /***************************************************************************************************
    *  retorna a hora atual -> STRING
    ***************************************************************************************************/
    public static getHoraAtual(): string {
        return moment().format('hh:mm:ss.SSS');
    }

    /***************************************************************************************************
    *  retorna as datas do período STRING -> STRING[]
    ***************************************************************************************************/
    public static getDatas(periodo: string): string[] {
        if (!periodo || periodo.length < 23) {
            return [];
        }
        var dataInicio = moment(periodo.substring(0, 10), 'DD/MM/YYYY').format('YYYY-MM-DD');
        var dataFim = moment(periodo.substring(12, periodo.length), 'DD/MM/YYYY').format('YYYY-MM-DD');
        return [dataInicio, dataFim];
    }

    /***************************************************************************************************
    * adiciona dias na data DATE, NUMBER -> DATE 
    ***************************************************************************************************/

    public static addDias(data, dias: number): Date {
        return moment(data).add(dias, 'days').toDate();
    }

    /***************************************************************************************************
    * retorna a diferenca em dias entre duas datas DATE, DATE -> NUMBER
    ***************************************************************************************************/
    public static getDiferencaDias(data1, data2): number {
        var one_day = 1000 * 60 * 60 * 24;
        return Math.round((new Date(data1).getTime() - new Date(data2).getTime()) / one_day);
    } 

    /***************************************************************************************************
    * STRING -> NUMBER
    ***************************************************************************************************/
    public static stringToNumber(valor:any): number {
        if(!valor || valor == ''){
            return 0;
        }
        let s:string = '' +valor;
        s = s.replace(/\./g,'').replace(',', '.');
        console.log('stringToNumber', valor, s, parseFloat(s));
        return parseFloat(s);
    } 

    /***************************************************************************************************
    * NUMBER -> STRING
    ***************************************************************************************************/
    public static numberToMoney(valor:any): any {
        if(!valor || valor == 0){
            return '0';
        }
        let valorLimpo = (valor + '').replace(/[^\d]+/g, '');
        let numero = Number(valorLimpo + 'e-2');
        return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    } 
    
    public static formatInteiro(valor:any){
        return valor.toString().split('.')[0];
    } 

    public static newArray(rows:number, page:number) {
        var v = new Array();
        for (var i = 0; i < (rows / page); i++) {
            v[i] = i + 1;
        }
        return v;
    }

    /***************************************************************************************************
    * { lista: listTemp, pagina: pagina };
    ***************************************************************************************************/
    public static nextPage(rows: number, pagina: number, lista: any[]):any[] {
        var limite = pagina * rows;
        let listTemp = new Array();
        if (limite == rows) {
            var tamanho = (lista.length > limite ? limite : lista.length);
            for (var i = 0; i < tamanho; i++) {
                listTemp[i] = lista[i];
            }
        } else {
            if (lista.length > (limite - rows)) {
                var tamanho = (lista.length > limite ? limite : lista.length);
                var j = -1;
                for (var i = (limite - rows); i < tamanho; i++) {
                    listTemp[++j] = lista[i];
                }
            }
        }
        return listTemp;
    }

    /***************************************************************************************************
    * converte a string em blob STRING -> BLOB
    ***************************************************************************************************/
    public static stringToBlob(str, contentType): any {
        var raw = window.atob(str);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return new Blob([array], { type: contentType });
    }    

    /***************************************************************************************************
    * abre o arquivo
    ***************************************************************************************************/
    public static openFile(nome, binario, extensao): void {
        let contentType = '';//TipoArquivoEnum.get(extensao.toUpperCase());
        let a = document.createElement('a');
        a.href = URL.createObjectURL(Funcoes.stringToBlob(binario, contentType));
        a.download = nome;
        a.click();
    }

    /*************************************************************************************
     *  converte uma string para o formato base64 para Blob
     *************************************************************************************/
    public static base64ToBlob(base64: string, contentType: string, sliceSize?: number) {
        sliceSize = sliceSize || 512;

        console.log('base64', base64, 'contentType', contentType);
        let byteCharacters = atob(base64);
        let byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);

            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            let byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, { type: contentType || '' });
    } 

    /*************************************************************************************
     *  retorna um objeto FormData de uma string no formato base64
     *************************************************************************************/
    public static getFormData(base64: string, contentType: string): FormData {
        let formData: FormData = new FormData();
        formData.append("file", this.base64ToBlob(base64, contentType));
        return formData;
    } 

    /*************************************************************************************
     *  retorna um objeto FormData de uma string de uma imagem no formato base64 
     *************************************************************************************/
    public static getFormDataDocumento(doc: any): any {
        var formData: FormData = new FormData();
        // let formData:FormData = this.getFormData(doc.dados, doc.contentType); 
        formData.append("fileName", doc.fileName);
        formData.append("siglaTipoDocumento", doc.siglaTipoDocumento);
        formData.append("descricao", doc.descricao);
        formData.append("coordenadas", doc.coordenadas);
        formData.append("extensao", doc.extensao);
        formData.append("file", doc.binario);
        console.log('getFormDataDocumento (formData) => ', formData);

        var arquivo = {};
        // let formData:FormData = this.getFormData(doc.dados, doc.contentType); 
        arquivo["fileName"] = doc.fileName;
        arquivo["siglaTipoDocumento"] = doc.siglaTipoDocumento;
        arquivo["descricao"] = doc.descricao;
        arquivo["coordenadas"] = doc.coordenadas;
        arquivo["extensao"] = doc.extensao;
        arquivo["file"] = doc.binario;

        console.log('getFormDataDocumento (arquivo) => ', arquivo);
        return formData;
    }


    /*************************************************************************************
     *  formata o objeto de erro
     *************************************************************************************/
    public static getMensagemErro(erro): string {
        if (!erro) {
            return "";
        }

        if (erro.status == 0 || erro.status == 503) {
            return "Serviço indisponível.";
        }
        if (erro.status == 600) {
            return "Sem conexão com a internet.";
        }
        if (erro.status == 401) {
            return "Sua sessão expirou.";
        }
        if (erro.status == 500) {
            if (erro['_body'] && ('' + erro['_body']).length > 0) {
                var body = JSON.parse(erro['_body']);
                console.log('MensagensErro', body);
                if (body['erro'] && body['erro']['mensagem'] && body['erro']['mensagem'].length > 0) {
                    return body['erro']['mensagem'];
                }
            }
            return "Erro ao realizar a requisição. Contate o suporte.";
        }

        if (erro.error && erro.error.error_description) {
            return erro.error.error_description;
        }

        if (erro.error && erro.error.erro) {
            return erro.error.erro.mensagem;
        }

        if (erro._body && JSON.parse(erro._body).error_description) {
            return JSON.parse(erro._body).error_description;
        }

        return erro._body ? JSON.parse(erro._body).erro.mensagem : erro;
    }


    /***************************************************************************************************
     * STORAGE
     ***************************************************************************************************/
    public static setItem(name: string, value: any[]): void {
        localStorage.setItem(`${this.getLogin()}_${name}`, JSON.stringify(value));
    }
    
    public static getItem(name: string): any[] {
        let s = localStorage.getItem(`${this.getLogin()}_${name}`);
        if (s && s != '') {
            return JSON.parse(s);
        }
        return [];
    } 

    private static getLogin(): any {
        let login = localStorage.getItem(Constantes.LOGIN); 
        return login ? login.toUpperCase() : '';
    } 
    
}  