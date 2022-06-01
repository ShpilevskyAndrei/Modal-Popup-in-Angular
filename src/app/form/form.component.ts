import { Component } from '@angular/core';

import { IToastOptions } from '../agroex-toasts/interfaces/toast-options';
import { AgroexToastService } from '../agroex-toasts/agroex-toast.service';
import { ToastType } from '../agroex-toasts/enums/toast-type';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent {
    public toastOption: IToastOptions = {
        toastType: ToastType.Warning,
        width: '',
        title: '',
        message: '',
        buttonText: '',
        timeOut: 5000,
    };

    constructor(private toastService: AgroexToastService) {}

    public returnToastOptions(): void {
        this.toastService.addToast(this.toastOption);
    }
}
