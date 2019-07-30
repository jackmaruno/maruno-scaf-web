import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() items: any;

  constructor() { }

  ngOnInit() {
  }

}
