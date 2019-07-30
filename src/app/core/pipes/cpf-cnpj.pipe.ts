import { Pipe, PipeTransform } from '@angular/core'; 
import { CpfCnpj } from '../util/cpf-cnpj';

/***************************************************************************************************
*  Pipe para formatar CPF/CNPJ
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Pipe({name: 'cpfcnpj'})
export class CpfCnpjPipe implements PipeTransform {

  /***************************************************************************************************
  *  formata
  ***************************************************************************************************/
  public transform(value, args: any[]) {
    if (!value) {
      return;
    }
    return CpfCnpj.formatarCpfCnpj(value);
  }
}
