import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Form/form';

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
  // There are currently no associated styles with the pf-v6-c-form_alert class.
  // Therefore, it does not exist in react-styles
  <div {...props} className={css(`${styles.form}__alert`, className)}>
    {children}
  </div>
);
FormAlert.displayName = 'FormAlert';
