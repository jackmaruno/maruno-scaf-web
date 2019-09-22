import { Injectable, Injector, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import {  BehaviorSubject, Observable } from 'rxjs';

export const SIDEBAR_CLASS = 'aside-menu-lg-show';

@Injectable({providedIn: 'root'})
export class SidebarContainerService {

  constructor() {
    this.sidebarOptionsPortalSubject = new BehaviorSubject(undefined);
    this._isClosed = new BehaviorSubject(true);
  }

  get sidebarOptionsPortal$() { 
    return this.sidebarOptionsPortalSubject.asObservable();
  }

  private sidebarOptionsPortalSubject: BehaviorSubject<Portal<any>>;

  private _isClosed: BehaviorSubject<boolean>;

  public open(portal: Portal<any>) {
    this._isClosed.next(false);
    this.sidebarOptionsPortalSubject.next(portal);
    let body = document.getElementsByTagName('body')[0];
    let style = body.className; 
    
    if(!body.classList.contains(SIDEBAR_CLASS)){
      body.classList.add(SIDEBAR_CLASS);
    }
    // console.log('style', body.className, body.classList);
  }

  public close() {
    this._isClosed.next(true);
    this.sidebarOptionsPortalSubject.next(undefined);
    let body = document.getElementsByTagName('body')[0];
    if(body.classList.contains(SIDEBAR_CLASS)){
      body.classList.remove(SIDEBAR_CLASS);
    }
  }
 
  get isClosed$(): Observable<boolean> {
    return this._isClosed.asObservable();
  }
}
