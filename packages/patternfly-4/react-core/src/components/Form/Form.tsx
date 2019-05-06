import * as React from 'react';
import styles from '@patternfly/patternfly/components/Form/form.css';
import { css } from '@patternfly/react-styles';
import { FormContext } from './FormContext';

export interface FormProps extends React.HTMLProps<HTMLFormElement> {
  children?: React.ReactNode;
  className?: string;
  isHorizontal?: boolean;
}

export const Form: React.FunctionComponent<FormProps> = ({
  children = null,
  className = '',
  isHorizontal = false,
  ...props
}) => (
  <form noValidate {...props} className={css(styles.form, isHorizontal && styles.modifiers.horizontal, className)}>
    <FormContext.Provider value={{ isHorizontal }}>{children}</FormContext.Provider>
  </form>
);
