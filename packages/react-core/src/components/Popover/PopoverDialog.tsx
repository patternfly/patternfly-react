import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';

export const PopoverPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

/**
 *
 */
export function PopoverDialog({ position = 'top', children = null, className = null, ...props }: PopoverDialogProps) {
  return (
    <div
      className={css(styles.popover, styles.modifiers[position] || styles.modifiers.top, className)}
      role="dialog"
      aria-modal="true"
      {...props}
    >
      {children}
    </div>
  );
}

export interface PopoverDialogProps extends React.HTMLProps<HTMLDivElement> {
  /** PopoverDialog position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** PopoverDialog additional class */
  className?: string;
  /** PopoverDialog body */
  children: React.ReactNode;
}
