import { Observable, Subject } from 'rxjs';
import { AlertConfig } from './alert.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'sc-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  host: {
    class: 'sc-alert'
  },
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {
  config: AlertConfig;

  private _afterClosed: Subject<any> = new Subject();

  open = false;

  @Input() dimissTime = 300;

  private timer: any;

  ngOnInit() {
    setTimeout(() => {
      this.open = true;
    }, 50);

    if (this.config.duration > 0) {
      this.timer = setTimeout(() => this.dismiss(), this.config.duration);
    }
  }

  dismiss() {
    this.open = false;

    setTimeout(() => {
      this._afterClosed.next(true);
      this._afterClosed.complete();
    }, this.dimissTime);
  }

  afterClosed(): Observable<any> {
    return this._afterClosed.asObservable();
  }
}
