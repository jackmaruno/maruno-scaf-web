import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormFieldComponent } from './commons/form-field.component';
import { ErrorFieldComponent } from './commons/error-field.component';


const COMPONENTES = [
  FormComponent,
  FormFieldComponent,
  ErrorFieldComponent,
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [COMPONENTES],
  exports: [COMPONENTES]
})
export class FormModule { }
