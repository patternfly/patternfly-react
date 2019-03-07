import React, { HTMLProps, ReactNode, MouseEvent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Alert/alert.css';
import { Button } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

export interface AlertBodyProps extends HTMLProps<HTMLDivElement> {
  /** title */
  title?: string;
  /** children */
  children?: ReactNode;
  /** className */
  className?: string;
  /** onClose */
  onClose?(event: MouseEvent<HTMLButtonElement>): void;
  /** closeButtonAriaLabel */
  closeButtonAriaLabel?: string;
};

export const defaultAlertBodyProps = {
  title: null,
  children: '',
  className: '',
  onClose: () => undefined,
  closeButtonAriaLabel: 'Close'
};

export const AlertBody: React.FunctionComponent<AlertBodyProps> = ({ title, className, children, onClose, closeButtonAriaLabel, ...props }: AlertBodyProps) => (
  <div {...props} className={className}>
    {onClose && (
      <Button variant="plain" onClick={onClose} aria-label={closeButtonAriaLabel}>
        <TimesIcon />
      </Button>
    )}
    {title && <h4 className={css(styles.alertTitle)}>{title}</h4>}
    {children && <p>{children}</p>}
  </div>
);

AlertBody.defaultProps = defaultAlertBodyProps;
