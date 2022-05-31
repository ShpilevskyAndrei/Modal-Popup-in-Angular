import { Component, Input } from '@angular/core';

import { ButtonType } from '../enums/button-type';
import { IconType } from '../enums/icon-type';
import { IToastOptions } from '../interfaces/toast-options';
import { ToastDataService } from '../toast-data-service';
import { ToastType } from '../enums/toast-type';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
    @Input() public toastData: IToastOptions | null = null;

    public constructor(private toastDataService: ToastDataService) {}

    public icon(): IconType | null {
        if (!this.toastData) {
            return null;
        }
        switch (this.toastData.toastType) {
            case ToastType.error:
                return IconType.error_outline;
            case ToastType.warning:
                return IconType.warning;
            case ToastType.info:
                return IconType.info;
            case ToastType.success:
                return IconType.check_circle_outline;
            case ToastType.system:
                return IconType.info;
            default:
                return null;
        }
    }

    public actionButtonTextGenerator(): ButtonType | null {
        if (!this.toastData) {
            return null;
        }
        switch (this.toastData.toastType) {
            case ToastType.error:
                return ButtonType.Leave;
            case ToastType.warning:
                return ButtonType['Get started'];
            case ToastType.info:
                return ButtonType.Okay;
            case ToastType.success:
                return ButtonType['Got it!'];
            case ToastType.system:
                return ButtonType.Info;
            default:
                return null;
        }
    }

    public buttonTest(): void {
        this.closeToast();
        console.log('pressed button');
    }

    public closeToast(): void {
        this.toastDataService.deleteToast(this.toastData?.id);
    }
}
