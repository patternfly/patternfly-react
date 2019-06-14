import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export interface AccordionProps extends React.HTMLProps<HTMLDListElement> {
  /** Content rendered inside the Accordion  */
  children?: React.ReactNode;
  /** Additional classes added to the Accordion  */
  className?: string;
  /** Adds accessible text to the Accordion */
  'aria-label'?: string;
}

export const Accordion: React.FunctionComponent<AccordionProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel = '',
  ...props
}: AccordionProps) => (
  <dl className={css(styles.accordion, className)} aria-label={ariaLabel} {...props}>
    {children}
  </dl>
);
