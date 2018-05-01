import { ComponentClass } from 'react';
import { NotificationProps } from '../Notification';
import { ToastNotificationProps } from './ToastNotification';
import { AlertType } from '../Alert';

export interface TimedToastNotificationProps extends ToastNotificationProps {
  onMouseEnter?(): void;
  onMouseLeave?(): void;
  paused?: boolean;
  persistent?: boolean;
  timerdelay?: number;
}

declare const TimedToastNotification: ComponentClass<
  TimedToastNotificationProps
> & {
  TOAST_NOTIFICATION_TYPES: AlertType[];
};

export default TimedToastNotification;
