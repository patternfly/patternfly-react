import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

const PopoverContent = ({ className, children, ...rest }) => (
  <div className={css(styles.popoverContent, className)} {...rest}>
    {children}
  </div>
);

PopoverContent.propTypes = {
  /** PopoverContent additional class */
  className: PropTypes.string,
  /** PopoverContent content */
  children: PropTypes.node.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

PopoverContent.defaultProps = {
  className: null
};

export default PopoverContent;
