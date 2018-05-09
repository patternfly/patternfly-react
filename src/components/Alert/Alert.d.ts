import { HTMLAttributes, SFC } from 'react';

export type AlertType = 'error' | 'warning' | 'success' | 'info';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** callback when alert is dismissed  */
  onDismiss?(event: React.MouseEvent<HTMLButtonElement>): void;
  /** the type of alert  */
  type?: AlertType;
}

declare const Alert: SFC<AlertProps> & {
  ALERT_TYPES: AlertType[];
};

export default Alert;
