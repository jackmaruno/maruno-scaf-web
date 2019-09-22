import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TagsPage } from './pages/tags/tags';
import { TagsRoutingModule } from './tags-routing.module';
import { TagModal } from './modals/tag/tag.modal';
import { ActionbarModule } from '../../components/actionbar';
import { ModalsModule } from '../../modals/modals.module';

@NgModule({
  imports: [
    CommonModule,
    ActionbarModule, 
    FormsModule,
    ModalsModule,
    TagsRoutingModule
  ],
  declarations: [TagsPage, TagModal ], 
  entryComponents:[ TagModal ]
})
export class TagsModule { } 
