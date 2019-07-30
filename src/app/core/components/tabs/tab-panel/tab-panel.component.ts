import { 
    Component, 
    ContentChildren, 
    QueryList, 
    Input, 
    TemplateRef,
    AfterContentInit, 
    Output, 
    EventEmitter,
} from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'sc-tab-panel',
    templateUrl: './tab-panel.component.html',
    styleUrls: ['../tabs.component.scss']
})
export class TabPanelComponent implements AfterContentInit {

    @ContentChildren(TabComponent)
    tabs: QueryList<TabComponent>;

    @Input()
    headerTemplate: TemplateRef<any>;

    // @Output() 
    // focusChange: EventEmitter<number> =  new EventEmitter<number>();

    @Output()
    selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();

    // @Output()
    // selectedTabChange:  EventEmitter<number> =  new EventEmitter<number>();

    ngAfterContentInit() {
        const selectedTab = this.tabs.find(tab => tab.selected);
        if (!selectedTab && this.tabs.first) {
            this.tabs.first.selected = true;
            this.selectedIndexChange.emit(0);
        }
    }

    selectTab(tab: TabComponent) {
        this.tabs.forEach(tab => tab.selected = false);
        tab.selected = true;
        this.selectedIndexChange.emit((this.tabs as any)._results.indexOf(tab))
    }

    selectByIndex(index: number) {
        this.selectTab((this.tabs as any)._results[index]);
        this.selectedIndexChange.emit(index);
    }

    get tabsContext() {
        return { 
            tabs: this.tabs
        }
    }

}
