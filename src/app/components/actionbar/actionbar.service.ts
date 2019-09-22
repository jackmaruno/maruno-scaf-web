import { Injectable, Injector, ComponentRef } from '@angular/core';

 // Cdk Referencias
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { Subject, Observable } from 'rxjs';
// import { DynamicDomComponents } from '../../commons/services/dynamic-dom-components.service';

import { ACTIONBAR_DATA } from './actionbar.tokens';
import { ActionBarConfig } from './actionbar.config';
import { ActionBarRef } from './actionbar-ref';




const DEFAULT_CONFIG: ActionBarConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  data: {}
};


@Injectable({
  providedIn: 'root',
})
export class ActionBarService {

  dynamicComponent: any;

  private modalElementId = 'action-bar-container';
  private overlayElementId = 'action-bar-overlay';

  open(dynamicComponent: any, config: ActionBarConfig = {}) {

    this.dynamicComponent = dynamicComponent;
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig);

    const dialogRef = new ActionBarRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;

  }

  private createOverlay(config: ActionBarConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: ActionBarConfig, dialogRef: ActionBarRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(this.dynamicComponent, null, injector);
    const containerRef: ComponentRef<any> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: ActionBarConfig, dialogRef: ActionBarRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(ActionBarRef, dialogRef);
    injectionTokens.set(ACTIONBAR_DATA, config.data);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: ActionBarConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  constructor(
    private injector: Injector,
    private overlay: Overlay) { }
}
