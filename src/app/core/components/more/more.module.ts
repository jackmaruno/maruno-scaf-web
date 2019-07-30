import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './more.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ MoreComponent ],
  exports: [ MoreComponent ]
})
export class MoreModule { }
