
/***************************************************************************************************
*  Classe de Constantes
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
export class Constantes{ 


    public static CAT_FATURA:number = 48;
    public static CAT_PARCELA:number = 46;
    public static CAT_EMPRESTIMO:number = 63;
    
    public static GRUPO_RECEITAS :number = 9;

    public static SITUACAO_DEVOLVIDO:number = 2; 
    public static SITUACAO_REJEITADO:number = 3; 
    public static SITUACAO_NOVA:number = 4; 
    public static SITUACAO_EM_ANDAMENTO:number = 5; 
    public static SITUACAO_REPROVADO:number = 6; 
    public static SITUACAO_EM_ANALISE:number = 7;

    public static SUCESSO:string = 'SUCESSO'; 
    public static CANCELADO:string = 'CANCELADO'; 
    public static CONFIRMADO:string = 'CONFIRMADO'; 
    public static RESPOSTA:string = 'resposta'; 
    public static DATA:string = 'data'; 
    public static PERIODO:string = 'periodo'; 
    public static DATA_INICIO:string = 'dataInicio'; 
    public static DATA_FIM: string = 'dataFim'; 

    public static ACCESS_TOKEN: string = 'access_token';
    public static TENTATIVAS: string = 'tentativas';  
    public static PROFISSIONAL: string = 'PROFISSIONAL';  
    public static USUARIO: string = 'USUARIO';  

    public static DEFAULT_DROPZONE_CONFIG: any = {
    // Change this to your upload POST address:
     url: 'http://localhost:1000/fiscalizacoes/documentos/upload',
     autoQueue:false, 
     autoProcessQueue:false,
    //  url: 'http://localhost:3000/fiscalizacoes/documentos/upload',
    //  maxFilesize: 50,
    //  acceptedFiles: 'image/*',
     dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "bytes" },
     dictDefaultMessage: "Clique ou arraste os arquivos aqui", 
     dictFallbackMessage: "dictFallbackMessage",
     dictFileTooBig: "O arquivo é maior que o permitido",
     dictResponseError: "Erro na requisição",
     dictInvalidFileType: "Formato do arquivo não é aceito",
     dictRemoveFile: "Remover",
     dictCancelUpload: "Cancelar",
     dictUploadCanceled: "Cancelado",
     dictFallbackText: "dictFallbackText",
     dictMaxFilesExceeded: "Limite de arquivos excedido",
     dictRemoveFileConfirmation: "Deseja mesmo remover o arquivo?",
     dictCancelUploadConfirmation: "Deseja mesmo cancelar o upload?",
       
     clickable: true,
     maxFiles: 1,
     autoReset: null,
     errorReset: null,
     cancelReset: null,
     addRemoveLinks:true,
     createImageThumbnails:true, 
     uploadMultiple:false
   };
}   

/*************************************************
 *  ENUM de tipo de dados
 *************************************************/
export enum TipoDadoEnum {  
    TEXTO = 1,
    DATA = 2, 
    NUMERO = 3, 
    FLOAT = 4, 
    CHECK = 5, 
    BOOLEANO = 6, 
    VALOR_PADRAO = 7, 
    RADIO = 8, 
    PERIODO = 9, 
    TEXTO_GRANDE = 10, 
}  

/*************************************************
 *  ENUM 
 *************************************************/
export class PaginaEnum{ 

    public static HOME:PaginaEnum =  new PaginaEnum("/", "Home", []);  
    public static DASHBOARD:PaginaEnum =  new PaginaEnum("/dashboard", "Dashboard", []);  
    public static TAGS:PaginaEnum =  new PaginaEnum("/tags", "Etiquetas", []);  
    public static AGENDAMENTOS:PaginaEnum =  new PaginaEnum("/agendamentos", "Pagamentos Agendados", []);  
    public static CARTOES:PaginaEnum =  new PaginaEnum("/cartoes", "Cartões de Crédito", []);  
    public static USUARIOS:PaginaEnum =  new PaginaEnum("/usuarios", "Usuários", []);  
    public static LANCAMENTOS:PaginaEnum =  new PaginaEnum("/lancamentos", "Lançamentos", []);  

    public static NOVAS_FISCALIZACOES:PaginaEnum =  new PaginaEnum("/novas-fiscalizacoes", "Novas Fiscalizações", []);  
    public static FISCALIZACOES:PaginaEnum =  new PaginaEnum("/fiscalizacoes", "Fiscalizações em Andamento", []);  
    public static FISCALIZACAO:PaginaEnum =  new PaginaEnum("/fiscalizacao", "Fiscalização", ['Fiscalizações em Andamento']);  
    public static FISCALIZACAO_LAUDO:PaginaEnum =  new PaginaEnum("/fiscalizacao-laudo", "Laudo de Fiscalização", ['Fiscalizações em Andamento','Fiscalização']);  
    public static RELATORIO:PaginaEnum =  new PaginaEnum("/relatorio-fiscalizacao", "Relatório de Fiscalização", ['Relatórios']);  

    public path:string; 
    public funcionalidade:string;
    public caminho:string[];

    constructor(path:string, funcionalidade:string, caminho:string[]){
        this.path = path;
        this.funcionalidade = funcionalidade;
        this.caminho = caminho;
    }

    public is(other:PaginaEnum):boolean{
        return other.path == this.path;
    } 

    public static values():Array<PaginaEnum>{
        return [
            PaginaEnum.HOME
            , PaginaEnum.DASHBOARD
            ,  PaginaEnum.TAGS
            ,  PaginaEnum.AGENDAMENTOS
            ,  PaginaEnum.CARTOES
            ,  PaginaEnum.USUARIOS
            ,  PaginaEnum.LANCAMENTOS
            
            , PaginaEnum.NOVAS_FISCALIZACOES, PaginaEnum.FISCALIZACOES, PaginaEnum.FISCALIZACAO, PaginaEnum.RELATORIO, PaginaEnum.FISCALIZACAO_LAUDO
        ];
    }

    public static get(path:string):PaginaEnum{ 
		for (let other of PaginaEnum.values()) { 
			if (other.path != '/' && path.startsWith(other.path)) {
				return other;
			}
		}
		return PaginaEnum.HOME;
    }
}  

/*************************************************
 *  TIPOS_PAGAMENTOS 
 *************************************************/
export enum TipoPagamentoEnum {  
    A_VISTA = 1,
    PARCELADO = 2, 
    PARCELADO_CARTAO = 3,  
}  
export const TIPOS_PAGAMENTOS = [
     {codigo:TipoPagamentoEnum.A_VISTA, nome:"À Vista"}
    ,{codigo:TipoPagamentoEnum.PARCELADO, nome:"Parcelado (Carnê)"}
    ,{codigo:TipoPagamentoEnum.PARCELADO_CARTAO, nome:"Parcelado no Cartão"}
];
  


/*************************************************
 *  ENUM de tipo de arquivo
 *************************************************/
export class TipoArquivoEnum{ 

    public static TEXT:TipoArquivoEnum = new TipoArquivoEnum("TXT", "text/plain"); 
    public static HTML:TipoArquivoEnum = new TipoArquivoEnum("HTML", "application/xhtml+xml"); 
    public static PDF :TipoArquivoEnum = new TipoArquivoEnum("PDF" , "application/pdf"); 
    public static XML :TipoArquivoEnum = new TipoArquivoEnum("XML" , "application/xml"); 
    public static BYTE :TipoArquivoEnum = new TipoArquivoEnum("" , "application/octet-stream");  

    // Oficce
    public static DOC :TipoArquivoEnum = new TipoArquivoEnum("DOC" , "application/msword"); 
    public static DOCX :TipoArquivoEnum = new TipoArquivoEnum("DOCX" , "application/msword"); 
    public static XLS :TipoArquivoEnum = new TipoArquivoEnum("XLS" , "application/vnd.ms-excel"); 
    public static XLSX :TipoArquivoEnum = new TipoArquivoEnum("XLSX" , "application/vnd.ms-excel"); 
    public static PPT :TipoArquivoEnum = new TipoArquivoEnum("PPT" , "application/vnd.ms-powerpoint"); 
    public static PPTX :TipoArquivoEnum = new TipoArquivoEnum("PPTX" , "application/vnd.ms-powerpoint"); 
 
    // Imagens
    public static JPG :TipoArquivoEnum = new TipoArquivoEnum("JPG" , "image/jpeg"); 
    public static JPEG :TipoArquivoEnum = new TipoArquivoEnum("JPEG" , "image/jpeg"); 
    public static PNG :TipoArquivoEnum = new TipoArquivoEnum("PNG" , "image/png"); 
    public static GIF :TipoArquivoEnum = new TipoArquivoEnum("GIF" , "image/gif"); 
    public static BMP :TipoArquivoEnum = new TipoArquivoEnum("BMP" , "image/bmp"); 

    public formato:string;  
    public contentType:string

    constructor(formato:string, contentType:string){
        this.formato = formato; 
        this.contentType = contentType;
    } 

    public static values():Array<TipoArquivoEnum>{
        return [
            TipoArquivoEnum.TEXT, 
            TipoArquivoEnum.HTML, 
            TipoArquivoEnum.PDF, 
            TipoArquivoEnum.XML,
            TipoArquivoEnum.BYTE,

            // Oficce
            TipoArquivoEnum.DOC, 
            TipoArquivoEnum.DOCX, 
            TipoArquivoEnum.XLS, 
            TipoArquivoEnum.XLSX, 
            TipoArquivoEnum.PPT, 
            TipoArquivoEnum.PPTX, 

            // Imagens
            TipoArquivoEnum.JPG,
            TipoArquivoEnum.JPEG,
            TipoArquivoEnum.PNG,
            TipoArquivoEnum.GIF,
            TipoArquivoEnum.BMP
        ];
    }

    public static get(formato:string):TipoArquivoEnum{ 
		for (let other of TipoArquivoEnum.values()) {
			if (other.formato == formato) {
				return other;
			}
		}
		return TipoArquivoEnum.BYTE;
    }

    public static getByType(contentType:string):TipoArquivoEnum{ 
		for (let other of TipoArquivoEnum.values()) {
			if (other.contentType == contentType) {
				return other;
			}
		}
		return TipoArquivoEnum.BYTE;
    }
} 


/*************************************************
 *  ENUM de tipo de documento
 *************************************************/
export class TipoDocumentoEnum{ 

    public static FOTO:TipoDocumentoEnum =  new TipoDocumentoEnum("FOTOENVIDFISCAL", "Foto de evidência da fiscalização"); 
    public static LAUDO:TipoDocumentoEnum =  new TipoDocumentoEnum("LAUDOFISCAL", "Laudo de fiscalização"); 
    public static MAPA:TipoDocumentoEnum =  new TipoDocumentoEnum("MAPA_PROPRIEDADE", "Mapa da propriedade"); 

    public sigla:string; 
    public descricao:string

    constructor(sigla:string, descricao:string){
        this.sigla = sigla;
        this.descricao = descricao;
    }

    public is(other:TipoDocumentoEnum):boolean{
        return other.sigla == this.sigla;
    } 

    public static values():Array<TipoDocumentoEnum>{
        return [TipoDocumentoEnum.FOTO, TipoDocumentoEnum.LAUDO, TipoDocumentoEnum.MAPA];
    }

    public static get(sigla:string):TipoDocumentoEnum{ 
		for (let other of TipoDocumentoEnum.values()) {
			if (other.sigla == sigla) {
				return other;
			}
		}
		return null;
    }
}  