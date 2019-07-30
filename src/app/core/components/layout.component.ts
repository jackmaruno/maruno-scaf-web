import { Component } from '@angular/core';

@Component({
  selector: 'scs-layout',
  template: `
    <main id="app" class="app-cm">
      <ng-content></ng-content>
    </main>
  `,
  styles: [],
})
export class LayoutComponent {}
