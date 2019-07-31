/***************************************************************************************************
*  Interface do Serviço de Segurança
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
export interface ISeguranca { 

    validarAutenticacao(): boolean; 

    isAuthenticated(): boolean;

    logout(): void;

    limparLocalStorage(): void;

    

    getToken(): string;

    getUsuario(): any;

    getIdUsuario(): any;

}