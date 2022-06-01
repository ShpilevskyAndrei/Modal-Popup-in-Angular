import { ToastType } from '../enums/toast-type';

export const ACTION_BUTTON_TYPE = {
    [ToastType.Error]: 'action-button-for-error',
    [ToastType.Warning]: 'action-button-for-warning',
    [ToastType.Info]: 'action-button-for-info',
    [ToastType.Success]: 'action-button-for-success',
    [ToastType.System]: 'action-button-for-system',
};
