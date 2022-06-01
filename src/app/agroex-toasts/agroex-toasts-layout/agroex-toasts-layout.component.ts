import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IToastOptions } from '../interfaces/toast-options';
import { AgroexToastDataService } from '../agroex-toast-data.service';

@Component({
    selector: 'app-agroex-toasts-layout',
    templateUrl: './agroex-toasts-layout.component.html',
})
export class AgroexToastsLayoutComponent {
    public toasts$: Observable<IToastOptions[]> =
        this.toastDataService.toastsData.asObservable();

    constructor(private toastDataService: AgroexToastDataService) {}
}
