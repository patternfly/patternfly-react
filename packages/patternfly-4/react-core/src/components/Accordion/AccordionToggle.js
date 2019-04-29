import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly/components/Accordion/accordion.css';
import { Button } from '@patternfly/react-core';

const AccordionToggle = ({
  className,
  'aria-controls': ariaControls,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  id,
  isExpanded,
  children,
  ...props
}) => (
  <dt>
    <h3>
      <Button
        id={id}
        className={css(styles.accordionToggle, isExpanded && styles.modifiers.expanded, className)}
        {...props}
        variant="plain"
        aria-controls={ariaControls !== '' && ariaControls}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabel !== 'Details' ? null : `${id}`}
        aria-expanded={isExpanded}
      >
        <span className={css(styles.accordionToggleText)}>{children}</span>
        <span className={css(styles.accordionToggleIcon)}>
          <AngleRightIcon />
        </span>
      </Button>
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
  'aria-labelledby': PropTypes.string.isRequired,
  /** Adds accessible text to the Accordion toggle */
  'aria-label': PropTypes.string.isRequired,
  /** Allows users of some screen readers to shift focus to the controlled element. Should be used when the controlled contents are not adjacent to the toggle that controls them. */
  'aria-controls': PropTypes.string,
  /** Additional props are spread to the container <dt> */
  '': PropTypes.any
};

AccordionToggle.defaultProps = {
  'aria-controls': '',
  'aria-label': 'Details',
  'aria-labelledby': '',
  className: '',
  isExpanded: false
};

export default AccordionToggle;
