import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface ApplicationLauncherTextProps extends React.HTMLProps<HTMLSpanElement> {
  /** content rendered inside the text container */
  children: React.ReactNode;
  /** Additional classes added to the text container */
  className?: string;
}

/**
 *
 */
export function ApplicationLauncherText({ className = '', children, ...props }: ApplicationLauncherTextProps) {
  return (
    <span className={css('pf-c-app-launcher__menu-item-text', className)} {...props}>
      {children}
    </span>
  );
}
