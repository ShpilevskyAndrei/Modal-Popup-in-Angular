import { ToastType } from '../enums/toast-type';

export interface IToastOptions {
    toastType: ToastType;
    title: string;
    width?: string;
    message?: string;
    buttonText?: string;
    timeOut?: number;
    id?: number;
}
