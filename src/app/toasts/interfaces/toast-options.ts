import { ToastType } from '../enums/toast-type';
import { WidthType } from '../enums/width-type';

export interface IToastOptions {
    toastType: ToastType;
    title: string;
    width?: WidthType | null;
    addMessage?: boolean;
    message?: string | null;
    addButton?: boolean;
    buttonText?: string | null;
    timeOut?: number | null;
    id?: number;
}
