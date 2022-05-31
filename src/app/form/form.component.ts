import { Component } from '@angular/core';

import { IToastOptions } from '../toasts/interfaces/toast-options';
import { ToastService } from '../toasts/toast-sevice';
import { ToastType } from '../toasts/enums/toast-type';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent {
    public toastOption: IToastOptions = {
        toastType: ToastType.warning,
        width: null,
        title: '',
        addMessage: false,
        message: '',
        addButton: false,
        buttonText: '',
        timeOut: null,
    };

    public constructor(private toastService: ToastService) {}

    public returnToastOptions(): void {
        this.toastService.addToast(this.toastOption);
    }
}
