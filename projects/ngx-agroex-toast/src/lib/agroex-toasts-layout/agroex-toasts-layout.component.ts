import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IToastOptions } from '../interfaces/toast-options';
import { AgroexToastDataService } from '../agroex-toast-data.service';

@Component({
    selector: 'app-agroex-toasts-layout',
    template: `<app-agroex-toast
        class="layout-container"
        *ngFor="let toast of toasts$ | async"
        [toastData]="toast"
    >
    </app-agroex-toast>`,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgroexToastsLayoutComponent {
    public toasts$: Observable<IToastOptions[]> =
        this.toastDataService.toastsData.asObservable();

    constructor(private toastDataService: AgroexToastDataService) {}
}
