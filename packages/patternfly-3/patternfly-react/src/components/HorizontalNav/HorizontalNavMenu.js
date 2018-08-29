import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from '../../index';
import classNames from 'classnames';

const HorizontalNavMenu = props => {
  const { children, twoLevels } = props;
  const menuClasses = classNames(
    {
      'persistent-secondary': twoLevels
    },
    'nav navbar-nav navbar-primary'
  );
  return (
    <div className="collapse navbar-collapse navbar-collapse-1">
      <ListGroup componentClass="ul" bsClass={menuClasses}>
        {children}
      </ListGroup>
    </div>
  );
};

HorizontalNavMenu.propTypes = {
  children: PropTypes.node,
  twoLevels: PropTypes.bool
};

HorizontalNavMenu.defaultProps = {
  children: null,
  twoLevels: false
};

export default HorizontalNavMenu;
