import { Injectable } from '@angular/core';
import { AlertComponent } from './alert.component'; 
import { DomService } from '../commons/dom/dom.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private domService: DomService) {}

  public open(config: AlertConfig): AlertComponent {
    const componentRef = this.getComponentRef(config);

    return componentRef.instance;
  }

  private getComponentRef(config: AlertConfig) {
    const componentRef = this.domService.attachComponentPortal(AlertComponent, null);

    config = Object.assign(
      {
        position: 'is-top'
      },
      config
    );

    componentRef.instance.config = config;

    componentRef.instance.afterClosed().subscribe(() => {
      componentRef.destroy();
    });

    return componentRef;
  }
}

export interface AlertConfig {
  message: string;
  icon?: string;
  color?: string;
  position?: string;
  duration?: number;
  extraClasses?: string;
}

export enum Color {
  SUCCESS = "success",
  DEFAULT ="default",
  WARNING = "warning",
  DANGER = "danger"
}
