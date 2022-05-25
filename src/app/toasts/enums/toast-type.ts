export enum ToastType {
  error = 'error',
  warning = 'warning',
  info = 'info',
  success = 'success',
  system = 'system',
}

export type toastType = keyof typeof ToastType
