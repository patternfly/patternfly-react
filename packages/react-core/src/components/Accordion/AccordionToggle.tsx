import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { AccordionContext, AccordionItemContext } from './AccordionContext';

export interface AccordionToggleProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /** Content rendered inside the Accordion toggle  */
  children?: React.ReactNode;
  /** Additional classes added to the Accordion Toggle  */
  className?: string;
  /** Identify the Accordion toggle number  */
  id: string;
  /** Container to override the default for toggle */
  component?: React.ElementType;
}

export const AccordionToggle: React.FunctionComponent<AccordionToggleProps> = ({
  className = '',
  id,
  children = null,
  component,
  ...props
}: AccordionToggleProps) => {
  const renderToggleIcon = () => (
    <span className={css(styles.accordionToggleIcon)}>
      <AngleRightIcon />
    </span>
  );

  const { isExpanded } = React.useContext(AccordionItemContext);

  return (
    <AccordionContext.Consumer>
      {({ ToggleContainer, togglePosition }) => {
        const Container = component || ToggleContainer;
        const isToggleStartPositioned = togglePosition === 'start';

        return (
          <Container>
            <button
              id={id}
              className={css(styles.accordionToggle, isExpanded && styles.modifiers.expanded, className)}
              aria-expanded={isExpanded}
              type="button"
              {...props}
            >
              {isToggleStartPositioned && renderToggleIcon()}
              <span className={css(styles.accordionToggleText)}>{children}</span>
              {!isToggleStartPositioned && renderToggleIcon()}
            </button>
          </Container>
        );
      }}
    </AccordionContext.Consumer>
  );
};
AccordionToggle.displayName = 'AccordionToggle';
