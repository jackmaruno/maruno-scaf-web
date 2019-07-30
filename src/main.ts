import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare var gertecEPOS700;

if (environment.production) {
  enableProdMode();
}


// let iniciarContextoMaquina = () => {
//    gertecEPOS700.iniciarContexto(null, function(success) {
//         console.log('contexto final execucao sucesso', success);
//     }, function(error) {
//         console.log('contexto final execucao error', error);
//     });
// }


// TODO: Melhorar forma de inicilizacao do dispositivo quando não houver o dispositivo na máquina
// let onDeviceReady = () => {
  //  iniciarContextoMaquina();
    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(err => {console.log('main.js', err);console.log(err)});
// };
// document.addEventListener('deviceready', onDeviceReady, false);
