import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export const AccordionContext = React.createContext('h3');

export interface AccordionProps extends React.HTMLProps<HTMLDListElement> {
  /** Content rendered inside the Accordion  */
  children?: React.ReactNode;
  /** Additional classes added to the Accordion  */
  className?: string;
  /** Adds accessible text to the Accordion */
  'aria-label'?: string;
  /** the heading level to use */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Accordion: React.FunctionComponent<AccordionProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel = '',
  headingLevel = 'h3',
  ...props
}: AccordionProps) => (
  <dl className={css(styles.accordion, className)} aria-label={ariaLabel} {...props}>
    <AccordionContext.Provider value={headingLevel}>{children}</AccordionContext.Provider>
  </dl>
);
