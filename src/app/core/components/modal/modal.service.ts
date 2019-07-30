import { Injectable, Injector, ComponentRef } from '@angular/core';

 // Cdk Referencias
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';


import { MODAL_DATA } from './modal.tokens';
import { ModalConfig } from './modal.config';
import { ModalRef } from './modal-ref';




const DEFAULT_CONFIG: ModalConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  data: {}
};


@Injectable({
  providedIn: 'root',
})
export class ModalService {

  dynamicComponent: any;

  private modalElementId = 'modal-container';
  private overlayElementId = 'modal-overlay';

  open(dynamicComponent: any, config: ModalConfig = {}) {

    this.dynamicComponent = dynamicComponent;
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig);

    const dialogRef = new ModalRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;

  }

  private createOverlay(config: ModalConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: ModalConfig, dialogRef: ModalRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(this.dynamicComponent, null, injector);
    const containerRef: ComponentRef<any> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: ModalConfig, dialogRef: ModalRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(ModalRef, dialogRef);
    injectionTokens.set(MODAL_DATA, config.data);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: ModalConfig): OverlayConfig {
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
