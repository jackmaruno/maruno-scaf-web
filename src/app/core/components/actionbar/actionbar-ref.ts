import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';

export class ActionBarRef {

  private readonly _afterClosed = new Subject<undefined>();

  afterClosed(): Observable<undefined> {
    return this._afterClosed.asObservable();
  }

  close(data?: any): void {
    this._afterClosed.next(data);
    this._afterClosed.complete();
    this.overlayRef.dispose();
  }

  constructor(private overlayRef: OverlayRef) { }
}
