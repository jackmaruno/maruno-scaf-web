import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent, TabPanelComponent, TabComponent],
  exports: [TabsComponent, TabPanelComponent, TabComponent]
})
export class TabsModule { }
