import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { AccordionContext, AccordionItemContext } from './AccordionContext';
import { AccordionExpandableContentBody, AccordionExpandableContentBodyProps } from './AccordionExpandableContentBody';

export interface AccordionContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Accordion  */
  children?: React.ReactNode;
  /** Additional classes added to the Accordion content  */
  className?: string;
  /** Identify the AccordionContent item  */
  id?: string;
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
  /** Props passed to the AccordionExpandableContentBody **/
  contentBodyProps?: AccordionExpandableContentBodyProps;
}

export const AccordionContent: React.FunctionComponent<AccordionContentProps> = ({
  className = '',
  children = null,
  id = '',
  isFixed = false,
  isCustomContent = false,
  'aria-label': ariaLabel = '',
  'aria-labelledby': ariaLabelledby,
  component,
  contentBodyProps,
  ...props
}: AccordionContentProps) => {
  const [hasScrollbar, setHasScrollbar] = React.useState(false);
  const containerRef = React.useRef(null);
  const { isExpanded } = React.useContext(AccordionItemContext);

  React.useEffect(() => {
    if (containerRef?.current && isFixed && isExpanded) {
      const { offsetHeight, scrollHeight } = containerRef.current;

      setHasScrollbar(offsetHeight < scrollHeight);
    } else if (!isFixed) {
      setHasScrollbar(false);
    }
  }, [containerRef, isFixed, isExpanded]);

  return (
    <AccordionContext.Consumer>
      {({ ContentContainer }) => {
        const Container = component || ContentContainer;
        return (
          <Container
            ref={containerRef}
            id={id}
            className={css(styles.accordionExpandableContent, isFixed && styles.modifiers.fixed, className)}
            hidden={!isExpanded}
            {...(ariaLabel && { 'aria-label': ariaLabel })}
            {...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
            {...(hasScrollbar && { tabIndex: 0 })}
            {...(hasScrollbar && Container === 'div' && { role: 'region' })}
            {...props}
          >
            {isCustomContent ? (
              children
            ) : (
              <AccordionExpandableContentBody {...contentBodyProps}>{children}</AccordionExpandableContentBody>
            )}
          </Container>
        );
      }}
    </AccordionContext.Consumer>
  );
};
AccordionContent.displayName = 'AccordionContent';
