import { Component, OnInit, Input, AfterContentInit, ContentChild, ElementRef, QueryList, ViewChild } from '@angular/core';
import { NgModel, FormControlName, NgSelectOption } from '@angular/forms'; 
import { LabelDirective } from '../../../directives/form-inputs/label.directive';
import { IconDirective } from '../../../directives/form-inputs/icon.directive'; 

@Component({
  selector: 'sc-form-field',
  template: `
  <div class="ss-form-group"
    [class.ss-select]="isSelect()"
    [class.ss-alert-success]="hasSuccess()"
    [class.ss-alert-warning]="hasWarning()"
    [class.ss-alert-danger]="hasError()">
    <label *ngIf="scLabel" for="default-input">
      {{scLabel.label}}
    </label>
    <i *ngIf="scIcon"
      class="material-icons ss-input-icon-{{scIcon.iconPosition}}">{{scIcon.icon}}</i>
    <ng-content></ng-content>
    
    <sc-error-field [errors]="input.errors"></sc-error-field>
  </div>

  `,
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, AfterContentInit {

  public input: any;

  // Incluir regras de exibição para exibição dos erros dos inputs
  // Ex.: submited, dirty, touched.
  public rules: string[];

  @ContentChild(LabelDirective) scLabel: LabelDirective;
  @ContentChild(NgSelectOption) scSelect: NgSelectOption;
  @ContentChild(IconDirective) scIcon: IconDirective;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
    }
  }

  isSelect(): boolean {
    return !!this.scSelect;
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);

  }

  public hasWarning(): boolean {
    return false;
  }

}
