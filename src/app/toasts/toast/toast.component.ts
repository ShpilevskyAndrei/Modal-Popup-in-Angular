import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

import {ToastType} from "../enums/toast-type";
import {IToastOptions} from "../interfaces/toast-options";
import {ToastDataService} from "../toast-data-service";


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent {
  @Input() public toastData!: IToastOptions;

  public toast$: Observable<IToastOptions | null> = this.toastService.toastsData.asObservable()

  constructor(private toastService: ToastDataService) {
  }

  public icon(toast: IToastOptions | null) {
    if (!toast) {
      return null
    }
    if (toast.toastType === ToastType.error) {
      return `error_outline`
    } else if (toast.toastType === ToastType.warning) {
      return `warning`
    } else if (toast.toastType === ToastType.info) {
      return `info`
    } else if (toast.toastType === ToastType.success) {
      return `check_circle_outline`
    } else if (toast.toastType === ToastType.system) {
      return `info`
    } else {
      return null
    }
  }

  public actionButtonTextGenerator (toast: IToastOptions | null) {
    if (!toast) {
      return null
    }
    if (toast.toastType === ToastType.error) {
      return `Leave`
    } else if (toast.toastType === ToastType.warning) {
      return `Get started`
    } else if (toast.toastType === ToastType.info) {
      return `Okay`
    } else if (toast.toastType === ToastType.success) {
      return `Got it!`
    } else if (toast.toastType === ToastType.system) {
      return `Info`
    } else {
      return null
    }
  }

  buttonTest() {
    console.log('pressed button');
  }

}

