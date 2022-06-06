import { ToastType } from '../enums/toast-type';

export const ICON_TYPE = {
    [ToastType.Error]: 'error_outline',
    [ToastType.Warning]: 'warning',
    [ToastType.Info]: 'info',
    [ToastType.Success]: 'check_circle_outline',
    [ToastType.System]: 'info',
};
