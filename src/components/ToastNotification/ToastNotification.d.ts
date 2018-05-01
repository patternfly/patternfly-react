import { SFC } from 'react';
import { AlertProps } from '../Alert';

export interface ToastNotificationProps extends AlertProps {}

declare const ToastNotification: SFC<ToastNotificationProps>;

export default ToastNotification;
