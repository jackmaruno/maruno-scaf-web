import { NgModule } from '@angular/core'; 
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
import { AlertaModal } from './alerta/alerta.modal';
import { TagsModal } from './tags/tags.modal';

@NgModule({
    imports: [ CommonModule, NgSelectModule, FormsModule],
    declarations: [ AlertaModal, TagsModal],
    exports: [ AlertaModal, TagsModal],
    entryComponents:[ AlertaModal, TagsModal]
}) 
export class ModalsModule { }  