import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  selected = false;

  constructor() {}

  ngOnInit() {}

}
