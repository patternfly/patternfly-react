import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

const PopoverFooter = ({ children, className, ...rest }) => (
  <footer className={css(styles.popoverFooter, className)} {...rest}>
    {children}
  </footer>
);

PopoverFooter.propTypes = {
  /** Additional classes added to the Popover Footer */
  className: PropTypes.string,
  /** Footer node */
  children: PropTypes.any,
  /** Additional props are spread to the container <footer> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

PopoverFooter.defaultProps = {
  children: null,
  className: ''
};

export default PopoverFooter;
