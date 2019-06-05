import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

const Accordion = ({ children, className, 'aria-label': ariaLabel, ...props }) => (
  <dl className={css(styles.accordion, className)} aria-label={ariaLabel} {...props}>
    {children}
  </dl>
);

Accordion.propTypes = {
  /** Content rendered inside the Accordion */
  children: PropTypes.node,
  /** Additional classes added to the Accordion */
  className: PropTypes.string,
  /** Adds accessible text to the Accordion */
  'aria-label': PropTypes.string,
  /** Additional props are spread to the container <dl> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

Accordion.defaultProps = {
  children: null,
  className: '',
  'aria-label': ''
};

export default Accordion;
