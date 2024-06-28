import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { AccordionItemContext } from './AccordionContext';

export interface AccordionItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the accordion item. */
  children?: React.ReactNode;
  /** Additional classes added to the accordion item. */
  className?: string;
  /** Flag to indicate whether the accordion item is expanded. */
  isExpanded?: boolean;
}

export const AccordionItem: React.FunctionComponent<AccordionItemProps> = ({
  children = null,
  className,
  isExpanded: isExpandedProp = false,
  ...props
}: AccordionItemProps) => (
  <AccordionItemContext.Provider
    value={{
      isExpanded: isExpandedProp
    }}
  >
    <div className={css(styles.accordionItem, isExpandedProp && styles.modifiers.expanded, className)} {...props}>
      {children}
    </div>
  </AccordionItemContext.Provider>
);
AccordionItem.displayName = 'AccordionItem';
