import { ComponentClass, MouseEvent } from 'react';

export interface ToastNotificationListProps {
  className?: string;
  onMouseEnter?(event: MouseEvent<HTMLDivElement>): void;
  onMouseLeave?(event: MouseEvent<HTMLDivElement>): void;
  onMouseOver?(event: MouseEvent<HTMLDivElement>): void;
}

declare const ToastNotificationList: ComponentClass<ToastNotificationListProps>;

export default ToastNotificationList;
