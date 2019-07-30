import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { IconDirective } from '../directives/form-inputs/icon.directive';
import { LabelDirective } from '../directives/form-inputs/label.directive';
import { InputDirective } from '../directives/form-inputs/input.directive';
import { SelectDirective } from '../directives/form-inputs/select.directive';
import { CpfDirective } from '../directives/form/cpf.directive';
import { ColDirective } from '../directives/grid/col.directive';
import { RowDirective } from '../directives/grid/row.directive';
import { ColXsDirective } from '../directives/grid/col-xs.directive';
import { DividerDirective } from '../directives/styles/divider.directive';
import { ScMaskDirective } from '../directives/mask/mask.directive';
import { EmailValidatorDirective } from '../directives/validators/email-validator.directive';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { NgxBrModule } from '@nbfontana/ngx-br';
import { GridComponent } from './grid/grid.component';
import { ErrorFieldComponent } from './form/commons/error-field.component';
import { FormFieldComponent } from './form/commons/form-field.component';
import { TextareaComponent } from './form/form/textarea.component';
import { CpfComponent } from './form/form/cpf.component';
import { CheckboxComponent } from './form/form/checkbox/checkbox.component';
import { RadioComponent } from './form/form/radio/radio.component';
import { SelectComponent } from './form/form/select/select.component';
import { ToggleComponent } from './form/form/toggle/toggle.component';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert';
import { ModalComponent } from './modal';
import { ModalHeaderComponent } from './modal/modal-header.component';
import { ModalContentComponent } from './modal/modal-content.component';
import { ModalFooterComponent } from './modal/modal-footer.component';
import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form/form.component';

const DIRECTIVES = [
  ColXsDirective,
  RowDirective,
  InputDirective,
  LabelDirective,
  ColDirective,
  IconDirective,
  EmailValidatorDirective,
  CpfDirective,
  DividerDirective,
  SelectDirective,
  ScMaskDirective
];

// TODO: Separar Componentes e diretivas
const COMPONENTS  = [ 
  UiComponent,
//   ErrorFieldComponent,
//   GridComponent,
//   FormFieldComponent,
  FormComponent,
  TextareaComponent,
  CpfComponent,
  CheckboxComponent,
  RadioComponent,
  SelectComponent,
  ToggleComponent,
//   ButtonComponent,
//   AlertComponent,
//   TabsContainerComponent,
//   TabComponent,
//   ModalComponent,
  ModalHeaderComponent,
  ModalContentComponent,
  ModalFooterComponent,
//   NavbarComponent,
//   NavbarMenuComponent,
//   NavbarItemComponent,
//   NavbarDropdownComponent,
//   NavbarUserComponent,
//   ToolbarComponent,
//   ToolbarItemComponent,
//   InputComponent
];


@NgModule({
  imports: [ CommonModule, FormsModule,  NgxBrModule.forRoot() ],
  declarations: [ COMPONENTS, DIRECTIVES ],
  exports: [ COMPONENTS, DIRECTIVES ]
})
export class UiModule { }
