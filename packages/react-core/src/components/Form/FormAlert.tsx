import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface FormAlertProps extends React.HTMLProps<HTMLDivElement> {
  /** An inline PatternFly Alert. */
  children?: React.ReactNode;
  /** Additional classes added to the FormGroup. */
  className?: string;
}

export const FormAlert: React.FunctionComponent<FormAlertProps> = ({
  children = null,
  className = '',
  ...props
}: FormAlertProps) => (
  <div {...props} className={css('pf-c-form__alert', className)}>
    {children}
  </div>
);
FormAlert.displayName = 'FormAlert';
