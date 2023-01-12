import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export interface AccordionExpandableContentBodyProps {
  /** Content rendered inside the accordion content body  */
  children?: React.ReactNode;
}

export const AccordionExpandableContentBody: React.FunctionComponent<AccordionExpandableContentBodyProps> = ({
  children = null
}: AccordionExpandableContentBodyProps) => <div className={css(styles.accordionExpandableContentBody)}>{children}</div>;
AccordionExpandableContentBody.displayName = 'AccordionExpandableContentBody';
