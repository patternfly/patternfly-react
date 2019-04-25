import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly/components/Accordion/accordion.css';
// import { Button } from '@patternfly/react-core';

const AccordionToggle = ({
  className,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  id,
  isExpanded,
  children,
  ...props
}) => (
  <dt>
    <h3>
      <button
        id={id}
        className={css(styles.accordionToggle, isExpanded && styles.modifiers.expanded, className)}
        {...props}
        variant="plain"
        aria-label={ariaLabel}
        aria-expanded={isExpanded}
      >
        <span className={css(styles.accordionToggleText)}>{children}</span>
        <span className={css(styles.accordionToggleIcon)}>
          <AngleRightIcon />
        </span>
      </button>
    </h3>
  </dt>
);

AccordionToggle.propTypes = {
  /** Additional classes added to the Accordion Toggle */
  className: PropTypes.string,
  /** Flag to show if the expanded content of the Accordion item is visible */
  isExpanded: PropTypes.bool,
  /** Identify the Accordion toggle number */
  id: PropTypes.string.isRequired,
  /** Adds accessible text to the Accordion toggle */
  'aria-labelledby': PropTypes.string,
  /** Adds accessible text to the Accordion toggle */
  'aria-label': PropTypes.string,
  /** Additional props are spread to the container <dt> */
  '': PropTypes.any
};

AccordionToggle.defaultProps = {
  'aria-label': 'Details',
  'aria-labelledby': '',
  className: '',
  isExpanded: false
};

export default AccordionToggle;
