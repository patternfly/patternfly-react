import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Dropdown } from '../Dropdown';

/**
 * DropdownKebab Component for Patternfly React
 */
const DropdownKebab = ({ className, children, id, pullRight }) => {
  const kebabClass = ClassNames('dropdown-kebab-pf', className);
  return (
    <Dropdown className={kebabClass} id={id} pullRight={pullRight}>
      <Dropdown.Toggle bsStyle="link" noCaret>
        <Icon name="ellipsis-v" />
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
};
DropdownKebab.propTypes = {
  /** additional kebab dropdown classes */
  className: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node,
  /** kebab dropdown id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** menu right aligned */
  pullRight: PropTypes.bool,
};
export default DropdownKebab;
