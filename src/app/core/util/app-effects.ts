
/***************************************************************************************************
*  Classe pai dos Efects
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
export class AppEffects {

    /***************************************************************************************************
    *  transforma o resultado do response
    ***************************************************************************************************/
    public resultTransform(response, key: string) {
        console.log('AppEffects', key, response);
        return response.resultado.map(i => ({ ...i, id: i[key] }));
    }
}