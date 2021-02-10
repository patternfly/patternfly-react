import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';

export interface FormProps extends React.HTMLProps<HTMLFormElement> {
  /** Anything that can be rendered as Form content. */
  children?: React.ReactNode;
  /** Additional classes added to the Form. */
  className?: string;
  /** Sets the Form to horizontal. */
  isHorizontal?: boolean;
  /** Flag to limit the max-width to 500px. */
  isWidthLimited?: boolean;
}

export const Form: React.FunctionComponent<FormProps> = ({
  children = null,
  className = '',
  isHorizontal = false,
  isWidthLimited = false,
  ...props
}: FormProps) => (
  <form
    noValidate
    {...props}
    className={css(
      styles.form,
      isHorizontal && styles.modifiers.horizontal,
      isWidthLimited && styles.modifiers.limitWidth,
      className
    )}
  >
    {children}
  </form>
);
Form.displayName = 'Form';
