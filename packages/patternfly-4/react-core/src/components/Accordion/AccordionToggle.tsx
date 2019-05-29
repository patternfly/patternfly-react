import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { AngleRightIcon } from '@patternfly/react-icons';
import { Omit } from '../../helpers/typeUtils';

export interface AccordionToggleProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  /** Content rendered inside the Accordion toggle  */
  children?: React.ReactNode;
  /** Additional classes added to the Accordion Toggle  */
  className?: string;
  /** Flag to show if the expanded content of the Accordion item is visible  */
  isExpanded?: boolean;
  /** Identify the Accordion toggle number  */
  id: string;
}

export const AccordionToggle: React.FunctionComponent<AccordionToggleProps> = ({
  className = '',
  id,
  isExpanded = false,
  children = null,
  ...props
}: AccordionToggleProps) => (
  <dt>
    <h3>
      <button
        id={id}
        className={css(styles.accordionToggle, isExpanded && styles.modifiers.expanded, className)}
        {...props}
        aria-expanded={isExpanded}
      >
        <span className={css(styles.accordionToggleText)}>{children}</span>
        <AngleRightIcon className={css(styles.accordionToggleIcon)} />
      </button>
    </h3>
  </dt>
);
