import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';

export interface BackdropProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the backdrop */
  children?: React.ReactNode; 
  /** additional classes added to the button */
  className?: string; 
}

export const Backdrop: React.FunctionComponent<BackdropProps> = ({
  children = null, 
  className = '', 
  ...props
}: BackdropProps) => (
  <div {...props} className={css(styles.backdrop, className)}>
    {children}
  </div>
)