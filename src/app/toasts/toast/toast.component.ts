import {Component, Input} from '@angular/core';

import {toastType} from "../enums/toast-type";
import {iconType} from "../enums/icon-type";
import {IToastOptions} from "../interfaces/toast-options";


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent {
  @Input() public toastData!: IToastOptions;

constructor() {}
  //ЗДЕСЬ ДОЛЖЕН БЫТЬ ОБЪЕКТ ИЗ FORM.COMP - toastOption

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
  toastHeader: string = '' || `You didn't entry some ${this.toastType} title`; // any text
  // get value from set func

  toastTextAdd: boolean = true;
  // get value from set func

  toastText: string =
    '' || `You didn't entry some ${this.toastType} message`; // any text
  // get value from set func

  button: boolean = true;
  // get value from set func

  actionButtonTextGenerator = (): string | null => {
    if (this.toastType === 'error') {
      return `Leave`
    } else if (this.toastType === 'warning') {
      return `Get started`
    } else if (this.toastType === 'info') {
      return `Okay`
    } else if (this.toastType === 'success') {
      return `Got it!`
    } else if (this.toastType === 'system') {
      return `Info`
    } else {
      return null
    }
  }

  actionButtonText = (): string | false => {
    return ('' || `${this.actionButtonTextGenerator()}`)
  }

  // get value from set func

  buttonTest() {
    console.log(this.actionButtonText());
  }

}

