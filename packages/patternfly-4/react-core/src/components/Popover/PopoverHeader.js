import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

const PopoverHeader = ({ children, id, ...rest }) => (
  <header className={css(styles.popoverHeader)} {...rest}>
    <h1 className={css(styles.popoverHeaderTitle)} id={id}>
      {children}
    </h1>
  </header>
);

PopoverHeader.propTypes = {
  /** popover id */
  id: PropTypes.string.isRequired,
  /** header node */
  children: PropTypes.node.isRequired
};

export default PopoverHeader;
