import { NgModule } from '@angular/core';
import { CpfCnpjPipe } from './cpf-cnpj.pipe';

/***************************************************************************************************
*  Módulo de Pipes
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@NgModule({
    imports: [],
    declarations: [CpfCnpjPipe],
    exports: [CpfCnpjPipe]
})
export class PipeModule { }