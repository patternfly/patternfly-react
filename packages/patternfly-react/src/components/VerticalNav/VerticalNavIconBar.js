import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from '../Nav';

const VerticalNavIconBar = props => {
  const iconBar = (
    <Nav navbar pullRight className="navbar-iconic">
      {props.children}
    </Nav>
  );
  return props.collapse ? <nav className="collapse navbar-collapse">{iconBar}</nav> : iconBar;
};

VerticalNavIconBar.propTypes = {
  /** Children to render inside .navbar-right */
  children: PropTypes.node,
  /** Whether to also wrap the children in a .navbar-collapse */
  collapse: PropTypes.bool
};

VerticalNavIconBar.defaultProps = {
  collapse: true,
  children: null
};

VerticalNavIconBar.displayName = 'VerticalNav.IconBar';

export default VerticalNavIconBar;
