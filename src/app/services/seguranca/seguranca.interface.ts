/***************************************************************************************************
*  Interface do Serviço de Segurança
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
export interface ISeguranca { 

    validarAutenticacao(): boolean;
    
    getToken(): string;

    logout(): void;

    getHeaderAutorizacao(): string;

    isAuthenticated(): boolean;

    redirectCas(): void;

}