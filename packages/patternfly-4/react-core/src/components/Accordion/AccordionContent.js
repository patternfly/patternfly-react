import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Accordion/accordion.css';

const AccordionContent = ({ className, children, id, isHidden, isFixed, 'aria-label': ariaLabel, ...props }) => (
  <dd
    id={id}
    className={css(styles.accordionExpandedContent, isFixed && styles.modifiers.fixed, !isHidden && styles.modifiers.expanded, className)} 
    hidden={isHidden}
    aria-label={ariaLabel}
    {...props}
  >
  <div className={css(styles.accordionExpandedContentBody)}>
    {children}
  </div>
  </dd>
);

AccordionContent.propTypes = {
  /** Content rendered inside the Accordion */
  children: PropTypes.node,
  /** Additional classes added to the Accordion content */
  className: PropTypes.string,
  /** Identify the AccordionContent item */
  id: PropTypes.string,
  /** Flag to show if the expanded content of the Accordion item is visible */
  isHidden: PropTypes.bool,
  /** Flag to indicate Accordion content is fixed */
  isFixed: PropTypes.bool,
  /** Adds accessible text to the Accordion content */
  'aria-label': PropTypes.string,
  /** Additional props are spread to the container <dd> */
  '': PropTypes.any
};

AccordionContent.defaultProps = {
  className: '',
  id: '',
  isHidden: false,
  isFixed: false,
  'aria-label': ''
};

export default AccordionContent;
