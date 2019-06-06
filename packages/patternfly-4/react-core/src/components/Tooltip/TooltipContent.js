import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import { css } from '@patternfly/react-styles';

const TooltipContent = ({ className, children, ...rest }) => (
  <div className={css(styles.tooltipContent, className)} {...rest}>
    {children}
  </div>
);

TooltipContent.propTypes = {
  /** TooltipContent additional class */
  className: PropTypes.string,
  /** TooltipContent content */
  children: PropTypes.node.isRequired
};

TooltipContent.defaultProps = {
  className: null
};

export default TooltipContent;
