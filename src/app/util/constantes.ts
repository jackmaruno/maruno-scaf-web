
/***************************************************************************************************
*  Classe de Constantes
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***************************************************************************************************/
export class Constantes{ 

    public static SUCESSO:string = 'SUCESSO';  
    public static CANCELADO:string = 'CANCELADO'; 
    public static CONFIRMADO:string = 'CONFIRMADO'; 


    public static USUARIO: string = 'USUARIO';  
    public static LOGIN: string = 'APP_LOGIN';  
    public static ACCESS_TOKEN: string = 'access_token';


    public static GRUPO_RECEITAS :number = 9;

    public static CAT_FATURA:number = 48;
    public static CAT_PARCELA:number = 46;
    public static CAT_EMPRESTIMO:number = 63;


    public static LIST_TAGS = 'listTags';
    public static LIST_CARTOES = 'listCartoes';
    public static LIST_CARTOES_ATIVOS = 'listCartoesAtivos';
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
  