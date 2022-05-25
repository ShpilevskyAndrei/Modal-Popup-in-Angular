import { Component } from '@angular/core';
import {toastTypeStyles} from "../toast-config";

import { toastType } from "../enums/toast-type";
import { iconType } from "../enums/icon-type";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  toastType: toastType = 'error'; // 'error' | 'warning' | 'info' | 'success' | 'system'
  // add type
  // get value from set func

  width: string = 'long'; // 'long' | 'shirt'
  // add type
  // get value from set func

//   icon = () => {
//     if (this.toastType === 'error') {
//       return 'error_outline'
//     } else if (this.toastType === 'warning') {
//       return 'warning'
//     } else if (this.toastType === 'info') {
//       return 'info'
//     } else if (this.toastType === 'success') {
//       return 'check_circle_outline'
//     } else if (this.toastType === 'system') {
//       return 'info'
//      } else {
//       return null
// }

  icon: iconType = 'error_outline';
  // 'error_outline' | 'warning' | 'info' | 'check_circle_outline' | 'info
  // add type
  // make the logic by toastType

  toastHeader: string = 'ex. Error'; // any text
  // get value from set func

  toastText: string = 'ex. Error message'; // any text
  // get value from set func

  button: boolean = true; // boolean
  // get value from func

  actionButtonText: string = 'ex. Enter'; // any text
  // get value from set func

  exFunc() {
    console.log(this.actionButtonText);
  }
}

