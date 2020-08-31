import * as React from 'react';

interface NotificationDrawerCloseButtonProps extends React.HTMLProps<HTMLDivElement> {
  /** Adds custom accessible text to the notification drawer close button. */
  closeButtonAriaLabel?: string;
  /** Optional icon other than x */
  icon?: React.ReactNode;
  /**  Callback for when close button is clicked */
  onClose: () => void;
}

export const NotificationDrawerCloseButton: React.FunctionComponent<NotificationDrawerCloseButtonProps> = ({
  closeButtonAriaLabel = 'Close',
  icon,
  onClose
}: NotificationDrawerCloseButtonProps) => (
  <div>
    <button className="pf-c-button pf-m-plain" type="button" aria-label={closeButtonAriaLabel} onClick={onClose}>
      {icon ? icon : <i className="fas fa-times" aria-hidden="true"></i>}
    </button>
  </div>
);
NotificationDrawerCloseButton.displayName = 'NotificationDrawerCloseButton';
