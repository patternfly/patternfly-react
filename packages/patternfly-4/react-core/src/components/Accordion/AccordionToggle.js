import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

const AccordionToggle = ({ className, id, isExpanded, children, ...props }) => (
  <dt>
    <h3>
      <button
        id={id}
        className={css(styles.accordionToggle, isExpanded && styles.modifiers.expanded, className)}
        {...props}
        variant="plain"
        aria-expanded={isExpanded}
      >
        <span className={css(styles.accordionToggleText)}>{children}</span>
        <AngleRightIcon className={css(styles.accordionToggleIcon)} />
      </button>
    </h3>
  </dt>
);

AccordionToggle.propTypes = {
  /** Content rendered inside the Accordion toggle */
  children: PropTypes.node,
  /** Additional classes added to the Accordion Toggle */
  className: PropTypes.string,
  /** Flag to show if the expanded content of the Accordion item is visible */
  isExpanded: PropTypes.bool,
  /** Identify the Accordion toggle number */
  id: PropTypes.string.isRequired,
  /** Additional props are spread to the container <dt> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

AccordionToggle.defaultProps = {
  className: '',
  children: null,
  isExpanded: false
};

export default AccordionToggle;
