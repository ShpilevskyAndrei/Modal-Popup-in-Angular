import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable } from '@angular/core';
import { Overlay } from "@angular/cdk/overlay";

import { IToastOptions } from "./interfaces/toast-options";
import { ToastDataService } from "./toast-data-service";
import { ToastsLayoutComponent } from "./toasts-layout/toasts-layout.component";

@Injectable()
export class ToastService {

  constructor(
    private toastDataService: ToastDataService,
    private overlay: Overlay,
  ) {
    const portalToast = new ComponentPortal(ToastsLayoutComponent)

    const add = this.overlay.create({
      positionStrategy: this.overlay.position().global().top('10px').centerHorizontally()
    });

    add.attach(portalToast);
  }

  public addToast(config: IToastOptions) {
    this.toastDataService.addToast(config)
  }
}
