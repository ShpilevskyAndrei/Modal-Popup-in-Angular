import { ToastType} from "./enums/toast-type";
import { IToastTypeStyle } from "./interfaces/toast-type-style";

export const toastTypeStyles: Record<ToastType, IToastTypeStyle> = {
  error: {
    iconProp: {
      icon: '<mat-icon>error_outline</mat-icon>',
      'background-color': '#EB3D26',
    },
    body: {
      'background-color': '#FDECE9',
      'border-color': '#EB3D26',
    },
    button: {
      'background-color': '#DC3737'
    },
  },
  warning: {
    iconProp: {
      icon: '<mat-icon>warning</mat-icon>',
      'background-color': '#F87E25',
    },
    body: {
      'background-color': '#FFF1E7',
      'border-color': '#FA9850',
    },
    button: {
      'background-color': '#F87E25'
    },
  },
  info: {
    iconProp: {
      icon: '<mat-icon>info</mat-icon>',
      'background-color': '#131314',
    },
    body: {
      'background-color': '#F2F5F5',
      'border-color': '#798787',
    },
    button: {
      'background-color': '#131314'
    },
  },
  success: {
    iconProp: {
      icon: '<mat-icon>check_circle_outline</mat-icon>',
      'background-color': '#4CAF50',
    },
    body: {
      'background-color': '#ECF9F4',
      'border-color': '#12AB74',
    },
    button: {
      'background-color': '#12AB74'
    },
  },
  system:{
    iconProp: {
      icon: '<mat-icon>info</mat-icon>',
      'background-color': '#368ACE',
    },
    body: {
      'background-color': '#EEF7FF',
      'border-color': '#368ACE',
    },
    button: {
      'background-color': '#368ACE',
    },
  },
};
