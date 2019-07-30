import { AstMemoryEfficientTransformer } from "@angular/compiler";

declare var window;
const server: string = 'cog-backoffice-was';
const localHost: string = 'localhost';
const ti: string = server+'-ti';
const hom: string = server+'-hom';

const basicTi: string = 'OGQ0YURjMUFLcFhjVXBXdWY1NjZObG1rZnM0YTpjTk1MOXNONWp5WUlJdnpxeGd2QVZORWxTQmNh';
const basicHomol = 'a203bGh1ZWZpc3dKZmRYT1Bpb1BYOWR4NWFvYTpnd19ranlNVjVLTGkwVmV3Nk1kNXZRbGxUcklh';
const basicProd = 'UFA0QmI3R29GQ3BnTE5EMTllYzdkRkhKNThNYTpVNHJBdlpCMlB6SGNQZk5EbUlOQk1UV1NyY3Nh';

const API_LOCALHOST: string = 'http://localhost:3000';
const API_TI: string = 'http://apit:8280';
const API_HOMOL: string = 'http://apimanager-homol:8280/fiscalizacao/v1';
const API_PROD: string = 'http://apimanager.com.br/fiscalizacao/v1';

const CAS_TI: string = 'http://cas-ti.homologacao.com.br:8080/cas';
const CAS_HOMOL: string = 'https://cas-homol.coop.br/cas';
const CAS_PROD: string = 'https://portal.coop.br/cas';
  
 

var parametros:any = {}; 


export function getParametros() { 
    return parametros;
} 

export function getCasUrl() {
    return getParametros().cas;
}

export function api(servico) {
    return getParametros().api + servico;
}

export function token() {
    return getParametros().token;
}

export function getAutorization() { 
    return getParametros().autorization;
}

export function logout() {
    return getParametros().logout;
}

export function setParametros(cas, apiManager, autorization) {
    parametros = { cas: `${cas}/login?service=`, logout: `${cas}/logout` , api: apiManager, token: `${apiManager}/token`, autorization: autorization };
}
    
const url = window.location.href; 
if (url.indexOf(ti) !== -1) {
    setParametros(CAS_TI, API_TI, basicTi);  
} else if (url.indexOf(hom) !== -1) {
    setParametros(CAS_HOMOL, API_HOMOL, basicHomol);  
} else if (url.indexOf(localHost) !== -1) {
    setParametros(CAS_TI, API_TI, basicTi); 
}else{
    setParametros(CAS_PROD, API_PROD, basicProd);
} 
 

export const environment:any = {
    production: true,
    // rest_url: 'http://localhost:3000',
    // rest_url: 'http://cru-fiscalizacao-backoffice-was-ti:9080/fiscalizacao-rest/api', 
    rest_url: 'http://localhost:9080/fiscalizacao-rest/api',
    // rest_url: 'http://apit:8280/fiscalizacao/v1',
    // cas: getCasUrl,
    // api: api,
    // token: token,
    // autorization: getAutorization,
    // logout: logout, 
    cas: `${CAS_TI}/login?service=`,//  x:parametros.getCasUrl(),
    api: `${API_TI}/fiscalizacao/v1`,
    token: `${API_TI}/token`,
    autorization: basicTi,
    logout: `${CAS_TI}/logout` ,
    x_cas: getCasUrl,
    x_api: api,
    x_token: token,
    x_autorization: getAutorization,
    x_logout: logout
    // getCasUrl: getCasUrl
};
