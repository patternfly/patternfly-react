import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';

export interface FormSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the section */
  children?: React.ReactNode;
  /** Additional classes added to the section */
  className?: string;
}

export const FormSection: React.FunctionComponent<FormSectionProps> = ({
  className = '',
  children,
  ...props
}: FormSectionProps) => (
  <section {...props} className={css(styles.formSection, className)}>
    {children}
  </section>
);
FormSection.displayName = 'FormSection';
