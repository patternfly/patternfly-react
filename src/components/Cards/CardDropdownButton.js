import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { ButtonGroup } from '../Button';

const CardDropdownButton = ({
  id,
  children,
  title,
  className,
  pullRight,
  ...props
}) => {
  const classes = ClassNames('card-pf-time-frame-filter', className);
  const CustomButtonGroup = props => {
    return <ButtonGroup {...props} bsClass=" " />;
  };
  return (
    <Dropdown
      className={classes}
      id={id}
      pullRight={pullRight}
      componentClass={CustomButtonGroup}
    >
      <Dropdown.Toggle>{title}</Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
};
CardDropdownButton.propTypes = {
  /** dropdown button id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Dropdown title */
  title: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string,
  /** menu right aligned */
  pullRight: PropTypes.bool
};
CardDropdownButton.defaultProps = {
  pullRight: true
};
export default CardDropdownButton;
