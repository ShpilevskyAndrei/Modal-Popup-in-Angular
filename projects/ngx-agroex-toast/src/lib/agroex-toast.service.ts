import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';

import { AgroexToastDataService } from './agroex-toast-data.service';
import { AgroexToastsLayoutComponent } from './agroex-toasts-layout/agroex-toasts-layout.component';
import { IToastOptions } from './interfaces/toast-options';

@Injectable({ providedIn: 'root' })
export class AgroexToastService {
    constructor(
        private toastDataService: AgroexToastDataService,
        private overlay: Overlay
    ) {
        const portalToast = new ComponentPortal(AgroexToastsLayoutComponent);

        const createOverlay = this.overlay.create({
            positionStrategy: this.overlay
                .position()
                .global()
                .top('10px')
                .centerHorizontally(),
        });

        createOverlay.attach(portalToast);
    }

    public addToast(config: IToastOptions): void {
        this.toastDataService.addToast(config);
    }
}
