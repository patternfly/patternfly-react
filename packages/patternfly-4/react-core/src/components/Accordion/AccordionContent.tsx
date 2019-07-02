import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { AccordionContext } from './AccordionContext';

export interface AccordionContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Accordion  */
  children?: React.ReactNode;
  /** Additional classes added to the Accordion content  */
  className?: string;
  /** Identify the AccordionContent item  */
  id?: string;
  /** Flag to show if the expanded content of the Accordion item is visible  */
  isHidden?: boolean;
  /** Flag to indicate Accordion content is fixed  */
  isFixed?: boolean;
  /** Adds accessible text to the Accordion content */
  'aria-label'?: string;
}

export const AccordionContent: React.FunctionComponent<AccordionContentProps> = ({
  className = '',
  children = null,
  id = '',
  isHidden = false,
  isFixed = false,
  'aria-label': ariaLabel = '',
  ...props
}: AccordionContentProps) => (
  <AccordionContext.Consumer>
    {({ asDefinitionList }) => {
      const AccordionContentContainer = asDefinitionList ? 'dd' : 'div';
      return (
        <AccordionContentContainer
          id={id}
          className={css(
            styles.accordionExpandedContent,
            isFixed && styles.modifiers.fixed,
            !isHidden && styles.modifiers.expanded,
            className
          )}
          hidden={isHidden}
          aria-label={ariaLabel}
          {...props}
        >
          <div className={css(styles.accordionExpandedContentBody)}>{children}</div>
        </AccordionContentContainer>
      );
    }}
  </AccordionContext.Consumer>
);
