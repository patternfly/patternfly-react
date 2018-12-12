import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

const PopoverArrow = ({ className, ...rest }) => <div className={css(styles.popoverArrow, className)} {...rest} />;

PopoverArrow.propTypes = {
  /** Popover arrow additional className */
  className: PropTypes.string
};

PopoverArrow.defaultProps = {
  className: null
};

export default PopoverArrow;
