import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarService } from './actionbar.service';
import { ActionBarComponent } from './actionbar.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ActionBarComponent ],
  exports: [ ActionBarComponent ],
  providers: [ ActionBarService ]
})
export class ActionbarModule { }
