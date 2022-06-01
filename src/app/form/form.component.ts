import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AgroexToastService } from '../agroex-toasts/agroex-toast.service';
import { IToastOptions } from '../agroex-toasts/interfaces/toast-options';
import { ToastType } from '../agroex-toasts/enums/toast-type';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styles: [
        `
            :host {
                .form-container {
                    display: flex;
                }

                .first-form-container,
                .second-form-container {
                    margin: 30px;
                }

                .action-button-container {
                    margin-top: 50px;
                }

                .action-button {
                    width: 100%;
                    height: 100px;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
