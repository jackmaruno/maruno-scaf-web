import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-error-field',
  template: `
  <div *ngIf="errors">
    <small class="ss-small-error" *ngFor="let error of getErrorsList()">
      {{getErrorMessage(error)}}
    </small>
  </div>
  `,
  styles: []
})
export class ErrorFieldComponent implements OnInit {

  public erros: {
    key: string,
    message: string,
    params?: any
  }[] = [
    {
      key: 'required',
      message: 'Campo Requerido'
    },
    {
      key: 'minlength',
      message: `O tamanho mínimo e voce informou.`,
      params: {
        requiredLength: 2,
        actualLength: 1
      }
    },
    {
      key: 'maxlength',
      message: '',
      params: {
        requiredLength: 2,
        actualLength: 1
      }
    },
    {
      key: 'emailInvalido',
      message: 'O Email é inválido.',
    }
  ];

  @Input('errors') public errors: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.errors);
  }

  public getErrorsList(): any[] {
    return Object.keys(this.errors);
  }

  public getErrorMessage(errorKey: any): any {
    return this.erros.find(e => e.key === errorKey).message;
  }

}
