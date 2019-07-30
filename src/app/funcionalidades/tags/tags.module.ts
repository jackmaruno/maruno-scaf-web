import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "angular-6-datatable";
 
import { ComponentModule } from 'src/app/core/components/component.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { ActionbarModule } from 'src/app/core/components/actionbar';
import { TagsPage } from './pages/tags/tags';
import { TagsRoutingModule } from './tags-routing.module';
import { TagModal } from './modals/tag/tag.modal';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ActionbarModule, 
    FormsModule,
    ComponentModule,
    ModalsModule,
    TagsRoutingModule
  ],
  declarations: [TagsPage, TagModal ], 
  entryComponents:[ TagModal ]
})
export class TagsModule { }
