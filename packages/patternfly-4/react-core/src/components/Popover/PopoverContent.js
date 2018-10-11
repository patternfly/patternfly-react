import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

const PopoverContent = ({ className, children, ...props }) => (
  <div className={css(styles.popoverContent, className)} {...props}>
    {children}
  </div>
);

PopoverContent.propTypes = {
  /** PopoverContent additional class */
  className: PropTypes.string,
  /** PopoverContent content */
  children: PropTypes.node.isRequired,
};

PopoverContent.defaultProps = {
  className: null
};

export default PopoverContent;
