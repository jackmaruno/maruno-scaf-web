import { 
  Injectable
} from '@angular/core';

 // Cdk Referencias
import { Portal } from '@angular/cdk/portal';

import {  BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class HeaderActionsContainerService {

  private optionsPortalSubject: BehaviorSubject<Portal<any>>;

  get optionsPortal$() {
    return this.optionsPortalSubject.asObservable();
  }

  open(portal: Portal<any>) {
    this.optionsPortalSubject.next(portal);
  }

  constructor() {
    this.optionsPortalSubject = new BehaviorSubject(undefined);
  }

}
