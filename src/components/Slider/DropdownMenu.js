import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, MenuItem } from 'react-bootstrap';

const DropdownMenu = props => {
  const { dropup, dropdownList, onFormatChange, title } = props;
  if (!dropdownList) {
    return null;
  }
  const menuItems = dropdownList.map((item, index) => (
    <MenuItem
      bsClass="slider_menuitem"
      onClick={event => onFormatChange(event.target.text)}
      key={index}
      value={item}
    >
      {item}
    </MenuItem>
  ));

  const isDropup = !!dropup;
  return (
    <Dropdown id="slider_dropdown" dropup={isDropup} pullRight>
      <Dropdown.Toggle>
        <span>{title || dropdownList[0]}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>{menuItems}</Dropdown.Menu>
    </Dropdown>
  );
};

DropdownMenu.propTypes = {
  dropup: PropTypes.bool,
  dropdownList: PropTypes.array,
  onFormatChange: PropTypes.func,
  title: PropTypes.string
};

DropdownMenu.defaultProps = {
  dropup: false,
  dropdownList: null,
  onFormatChange: v => v,
  title: null
};

export default DropdownMenu;
