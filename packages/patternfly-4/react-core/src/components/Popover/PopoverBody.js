import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

const PopoverBody = ({ children, id }) => (
  <div className={css(styles.popoverBody)} id={id}>
    {children}
  </div>
);

PopoverBody.propTypes = {
  /** PopoverBody id */
  id: PropTypes.string.isRequired,
  /** PopoverBody content */
  children: PropTypes.node.isRequired
};

export default PopoverBody;
