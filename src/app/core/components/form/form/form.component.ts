import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-form',
  template: `
    <form novalidate>
      <ng-template></ng-template>
    </form>
  `,
  styles: []
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
