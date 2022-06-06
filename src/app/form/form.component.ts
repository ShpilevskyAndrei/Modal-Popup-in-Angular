import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AgroexToastService } from '../../../projects/ngx-agroex-toast/src/lib/agroex-toast.service';
import { ToastType } from '../../../projects/ngx-agroex-toast/src/lib/enums/toast-type';

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
    public toastOption = new FormGroup({
        toastType: new FormControl(ToastType.Error),
        width: new FormControl(''),
        title: new FormControl('Error'),
        message: new FormControl(''),
        buttonText: new FormControl(''),
        timeOut: new FormControl(5000),
    });

    constructor(private toastService: AgroexToastService) {}

    public returnToastOptions(): void {
        this.toastService.addToast(this.toastOption.value);
    }
}
