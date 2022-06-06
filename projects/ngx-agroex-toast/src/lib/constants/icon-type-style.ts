import { ToastType } from '../enums/toast-type';

export const ICON_TYPE_STYLE = {
    [ToastType.Error]: 'error-icon',
    [ToastType.Warning]: 'warning-icon',
    [ToastType.Info]: 'info-icon',
    [ToastType.Success]: 'success-icon ',
    [ToastType.System]: 'system-icon',
};
