import {ToastType} from "../enums/toast-type";

export interface IToastOptions {
  toastType: ToastType,
  width: "short" | "long",
  title: string,
  addMessage: boolean,
  message: string,
  addButton: boolean,
  buttonText: string,
}
