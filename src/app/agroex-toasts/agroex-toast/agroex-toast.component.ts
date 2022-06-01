import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
} from '@angular/core';

import { ActionButtonType } from '../enums/action-button-type';
import { IconType } from '../enums/icon-type';
import { IToastOptions } from '../interfaces/toast-options';
import { AgroexToastDataService } from '../agroex-toast-data.service';
import { ToastType } from '../enums/toast-type';

@Component({
    selector: 'app-agroex-toast',
    templateUrl: './agroex-toast.component.html',
    styleUrls: ['./agroex-toast..component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, //in all
})
export class AgroexToastComponent implements OnChanges {
    @Input() public toastData: IToastOptions | null = null;

    @ViewChild('toast') public toast: ElementRef | null = null;

    constructor(
        private toastDataService: AgroexToastDataService,
        private cd: ChangeDetectorRef
    ) {}

    public get icon(): IconType {
        if (this.toastData) {
            switch (this.toastData.toastType) {
                case ToastType.Error:
                    return IconType.ErrorOutline;
                case ToastType.Warning:
                    return IconType.Warning;
                case ToastType.Info:
                    return IconType.Info;
                case ToastType.Success:
                    return IconType.CheckCircleOutline;
                case ToastType.System:
                    return IconType.Info;
            }
        } else {
            return IconType.Info;
        }
    }

    public get actionButtonType(): ActionButtonType {
        if (this.toastData) {
            switch (this.toastData.toastType) {
                case ToastType.Error:
                    return ActionButtonType.Error;
                case ToastType.Warning:
                    return ActionButtonType.Warning;
                case ToastType.Info:
                    return ActionButtonType.Info;
                case ToastType.Success:
                    return ActionButtonType.Success;
                case ToastType.System:
                    return ActionButtonType.System;
            }
        } else {
            return ActionButtonType.Info;
        }
    }

    public toastButton(): void {
        this.closeToast();
    }

    public closeToast(): void {
        if (this.toast) {
            (this.toast.nativeElement as HTMLDivElement).className +=
                ' toast-closing';
            this.cd.detectChanges();
            setTimeout(
                () => this.toastDataService.deleteToast(this.toastData?.id),
                1000
            );
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes?.['toastData']?.firstChange) {
            setTimeout(
                () => this.closeToast(),
                this.toastData?.timeOut || 5000
            );
        }
    }
}
