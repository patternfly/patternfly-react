import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export interface AccordionExpandableContentBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the accordion content body  */
  children?: React.ReactNode;
}

export const AccordionExpandableContentBody: React.FunctionComponent<AccordionExpandableContentBodyProps> = ({
  children = null,
  ...props
}: AccordionExpandableContentBodyProps) => (
  <div className={css(styles.accordionExpandableContentBody)} {...props}>
    {children}
  </div>
);
AccordionExpandableContentBody.displayName = 'AccordionExpandableContentBody';
