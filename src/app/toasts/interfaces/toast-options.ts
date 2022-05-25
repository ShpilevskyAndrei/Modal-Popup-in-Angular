//NOT USED

import {ToastType} from "../enums/toast-type";

export interface IToastOptions {
  toastType: ToastType,
  width: "short" | "long",
  toastHeader: string,
  toastMessage: string,
  button: boolean,
  buttonText: string,
  timeOut: number,
}

// const popup: IToastOptions = {
//   toastType: ToastType.error,
//   width: "short",
//   toastHeader: 'Wrong name',
//   toastMessage: 'Please enter correct name',
//   button: true,
//   buttonText: "Return",
//   timeOut: 5000,
// }
