import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() titulo: string;


  ngOnInit() {
  }

}
