import React from 'react';
import PropTypes from 'prop-types';

const HeaderCell = ({ 'data-label': dataLabel, isVisible, scope, component: Component, ...props }) => {
  const mappedProps = {
    ...(scope ? { scope } : {}),
    ...props
  };
  return <Component {...mappedProps} />;
};

HeaderCell.propTypes = {
  'data-label': PropTypes.string,
  scope: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number])
};

HeaderCell.defaultProps = {
  scope: '',
  component: 'th',
  'data-label': ''
};

export default HeaderCell;
