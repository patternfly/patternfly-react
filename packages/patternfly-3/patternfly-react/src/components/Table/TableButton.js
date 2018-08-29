import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../Button';
import { BUTTON_BS_STYLES } from '../Button/ButtonConstants';
import { noop } from '../../common/helpers';

/**
 * TableButton component for Patternfly React
 */
const TableButton = ({ children, className, onClick, ...props }) => {
  const classes = classNames('table-view-pf-btn', className);
  const { bsStyle, ...otherProps } = props;
  return (
    <div className={classes} {...otherProps}>
      <Button onClick={onClick} bsStyle={bsStyle}>
        {children}
      </Button>
    </div>
  );
};
TableButton.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** onClick callback for button */
  onClick: PropTypes.func,
  bsStyle: PropTypes.oneOf(BUTTON_BS_STYLES)
};
TableButton.defaultProps = {
  children: null,
  className: '',
  onClick: noop,
  bsStyle: 'default'
};
TableButton.BUTTON_BS_STYLES = BUTTON_BS_STYLES;

export default TableButton;
