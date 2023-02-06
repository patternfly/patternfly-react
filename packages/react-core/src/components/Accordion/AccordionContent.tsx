import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { AccordionContext } from './AccordionContext';
import { AccordionExpandedContentBody } from './AccordionExpandedContentBody';

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
  /** Id of the controlling accordion toggle to label the content. */
  'aria-labelledby'?: string;
  /** Component to use as content container */
  component?: React.ElementType;
  /** Flag indicating content is custom. Expanded content Body wrapper will be removed from children.  This allows multiple bodies to be rendered as content. */
  isCustomContent?: React.ReactNode;
}

export const AccordionContent: React.FunctionComponent<AccordionContentProps> = ({
  className = '',
  children = null,
  id = '',
  isHidden = false,
  isFixed = false,
  isCustomContent = false,
  'aria-label': ariaLabel = '',
  'aria-labelledby': ariaLabelledby,
  component,
  ...props
}: AccordionContentProps) => {
  const [hasScrollbar, setHasScrollbar] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef?.current && isFixed && !isHidden) {
      const { offsetHeight, scrollHeight } = containerRef.current;

      setHasScrollbar(offsetHeight < scrollHeight);
    } else if (!isFixed) {
      setHasScrollbar(false);
    }
  }, [containerRef, isFixed, isHidden]);

  return (
    <AccordionContext.Consumer>
      {({ ContentContainer }) => {
        const Container = component || ContentContainer;
        return (
          <Container
            ref={containerRef}
            id={id}
            className={css(
              styles.accordionExpandedContent,
              isFixed && styles.modifiers.fixed,
              !isHidden && styles.modifiers.expanded,
              className
            )}
            hidden={isHidden}
            {...(ariaLabel && { 'aria-label': ariaLabel })}
            {...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
            {...(hasScrollbar && { tabIndex: 0 })}
            {...(hasScrollbar && Container === 'div' && { role: 'region' })}
            {...props}
          >
            {isCustomContent ? children : <AccordionExpandedContentBody>{children}</AccordionExpandedContentBody>}
          </Container>
        );
      }}
    </AccordionContext.Consumer>
  );
};
AccordionContent.displayName = 'AccordionContent';
