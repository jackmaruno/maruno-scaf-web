import { Injectable, Injector, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

 // Cdk Referencias
import { Portal } from '@angular/cdk/portal';

import {  BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class SidebarContainerService {

  get sidebarOptionsPortal$() { 
    return this.sidebarOptionsPortalSubject.asObservable();
  }

  private sidebarOptionsPortalSubject: BehaviorSubject<Portal<any>>;

  private _isClosed: BehaviorSubject<boolean>;

  public open(portal: Portal<any>) {
    this._isClosed.next(false);
    this.sidebarOptionsPortalSubject.next(portal);
  }

  public close() {
    this._isClosed.next(true);
    this.sidebarOptionsPortalSubject.next(undefined);
  }

  get isClosed$(): Observable<boolean> {
    return this._isClosed.asObservable();
  }


  constructor() {
    this.sidebarOptionsPortalSubject = new BehaviorSubject(undefined);
    this._isClosed = new BehaviorSubject(true);
  }

}
