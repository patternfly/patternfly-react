import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown, ListGroup, ListGroupItem } from '../../index';

const HorizontalNavMenuItem = props => {
  const { children, onItemClick, title, active, dropdown, submenu, dropup, pullLeft } = props;

  const dropdownClasses = classNames({
    'dropdown-submenu': submenu,
    'pull-left': pullLeft
  });

  return dropdown ? (
    <Dropdown componentClass="li" className={dropdownClasses}>
      <a bsRole="toggle">
        {title}
        {!submenu && <span className="caret" />}
      </a>
      <Dropdown.Menu className={dropup ? 'dropup' : ''}>{children}</Dropdown.Menu>
    </Dropdown>
  ) : (
    <ListGroupItem listItem bsClass="" active={active}>
      <a href="#" onClick={onItemClick}>
        {title}
      </a>
      {children && (
        <ListGroup componentClass="ul" bsClass="nav navbar-nav navbar-persistent">
          {children}
        </ListGroup>
      )}
    </ListGroupItem>
  );
};

HorizontalNavMenuItem.propTypes = {
  children: PropTypes.node,
  onItemClick: PropTypes.object,
  title: PropTypes.string,
  active: PropTypes.bool,
  dropdown: PropTypes.bool,
  submenu: PropTypes.bool,
  dropup: PropTypes.bool,
  pullLeft: PropTypes.bool
};

HorizontalNavMenuItem.defaultProps = {
  children: null,
  onItemClick: null,
  title: '',
  active: false,
  dropdown: false,
  submenu: false,
  dropup: false,
  pullLeft: false
};
export default HorizontalNavMenuItem;
