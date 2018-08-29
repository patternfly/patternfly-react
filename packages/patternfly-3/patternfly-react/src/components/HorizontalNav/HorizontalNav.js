import React from 'react';
import PropTypes from 'prop-types';

const HorizontalNav = props => {
  const { children } = props;

  return <nav className="navbar navbar-default navbar-pf">{children}</nav>;
};

HorizontalNav.propTypes = {
  children: PropTypes.node
};

HorizontalNav.defaultProps = {
  children: null
};

export default HorizontalNav;
