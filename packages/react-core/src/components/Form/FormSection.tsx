import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';

export interface FormSectionProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  /** Content rendered inside the section */
  children?: React.ReactNode;
  /** Additional classes added to the section */
  className?: string;
  /** Title for the section */
  title?: React.ReactNode;
}

export const FormSection: React.FunctionComponent<FormSectionProps> = ({
  className = '',
  children,
  title = '',
  ...props
}: FormSectionProps) => (
  <section {...props} className={css(styles.formSection, className)}>
    {title && <div className={css(styles.formSectionTitle, className)}>{title}</div>}
    {children}
  </section>
);
FormSection.displayName = 'FormSection';
