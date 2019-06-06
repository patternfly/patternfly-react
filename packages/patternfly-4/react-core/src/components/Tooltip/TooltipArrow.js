import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import { css } from '@patternfly/react-styles';

const TooltipArrow = ({ className, ...rest }) => <div className={css(styles.tooltipArrow, className)} {...rest} />;

TooltipArrow.propTypes = {
  /** Tooltip arrow additional className */
  className: PropTypes.string
};

TooltipArrow.defaultProps = {
  className: null
};

export default TooltipArrow;
