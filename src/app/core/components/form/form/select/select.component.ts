import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sco-select',
  template: `
    <div class="ss-select">
        <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
    </div>
  `,
  styles: []
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
