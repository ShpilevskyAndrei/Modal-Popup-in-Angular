import { Component } from '@angular/core';

import { toastType } from "../enums/toast-type";
import { iconType } from "../enums/icon-type";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  toastType: toastType = 'info'; // 'error' | 'warning' | 'info' | 'success' | 'system'
  // get value from set func

  width: 'long' | 'short' = 'long'; // 'long' | 'short'
  // get value from set func

  icon = ():iconType | null => {
    if (this.toastType === 'error') {
      return `error_outline`
    } else if (this.toastType === 'warning') {
      return `warning`
    } else if (this.toastType === 'info') {
      return `info`
    } else if (this.toastType === 'success') {
      return `check_circle_outline`
    } else if (this.toastType === 'system') {
      return `info`
    } else {
      return null
    }
  }
  // 'error_outline' | 'warning' | 'info' | 'check_circle_outline' | 'info

  toastHeader: string | false = '' || `You didn't entry some ${this.toastType} title`; // any text
  // get value from set func

  toastTextAdd: boolean = true;

  toastText: string | false =
    '' || `You didn't entry some ${this.toastType} message`; // any text
  // get value from set func

  button: boolean = true; // boolean
  // get value from func

  actionButtonText: string | false = '' || 'Ok';
  // get value from set func

  exFunc() {
    console.log(this.actionButtonText);
  }
}

