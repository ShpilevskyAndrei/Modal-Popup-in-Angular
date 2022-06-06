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

import { ACTION_BUTTON_TYPE } from '../constants/action-button-type';
import { ICON_TYPE } from '../constants/icon-type';
import { ICON_TYPE_STYLE } from '../constants/icon-type-style';
import { AgroexToastDataService } from '../agroex-toast-data.service';
import { IToastOptions } from '../interfaces/toast-options';
import { ToastType } from '../enums/toast-type';

@Component({
    selector: 'app-agroex-toast',
    templateUrl: './agroex-toast.component.html',
    styleUrls: ['./agroex-toast..component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgroexToastComponent implements OnChanges {
    @Input() public toastData: IToastOptions | null = null;

    @ViewChild('toast') public toast: ElementRef<HTMLDivElement>;

    constructor(
        private toastDataService: AgroexToastDataService,
        private cd: ChangeDetectorRef
    ) {}

    public get iconTypeStyle(): string {
        return this.toastData
            ? ICON_TYPE_STYLE[this.toastData.toastType]
            : ICON_TYPE_STYLE[ToastType.Error];
    }

    public get icon(): string {
        return this.toastData
            ? ICON_TYPE[this.toastData.toastType]
            : ICON_TYPE[ToastType.Error];
    }

    public get actionButtonType(): string {
        return this.toastData
            ? ACTION_BUTTON_TYPE[this.toastData.toastType]
            : ACTION_BUTTON_TYPE[ToastType.Error];
    }

    public toastButton(): void {
        this.closeToast();
    }

    public closeToast(): void {
        if (this.toast) {
            this.toast.nativeElement.className += ' toast-closing';
            this.cd.detectChanges();
            setTimeout(
                () => this.toastDataService.deleteToast(this.toastData?.id),
                1000
            );
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes?.toastData?.firstChange) {
            setTimeout(
                () => this.closeToast(),
                this.toastData?.timeOut || 5000
            );
        }
    }
}
