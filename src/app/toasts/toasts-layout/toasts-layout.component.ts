import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IToastOptions } from '../interfaces/toast-options';
import { ToastDataService } from '../toast-data-service';

@Component({
    selector: 'app-toasts-layout',
    templateUrl: './toasts-layout.component.html',
})
export class ToastsLayoutComponent {
    public toasts$: Observable<IToastOptions[] | null> =
        this.toastDataService.toastsData.asObservable();

    public constructor(private toastDataService: ToastDataService) {}
}
