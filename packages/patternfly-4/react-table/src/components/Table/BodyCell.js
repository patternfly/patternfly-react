import React from 'react';
import PropTypes from 'prop-types';

const BodyCell = ({ 'data-label': dataLabel, parentId, isVisible, component: Component, colSpan, ...props }) => {
  const mappedProps = {
    ...(dataLabel ? { 'data-label': dataLabel } : {}),
    ...props
  };
  return (parentId !== undefined && colSpan === undefined) || !isVisible ? null : (
    <Component {...mappedProps} colSpan={colSpan} />
  );
};

BodyCell.propTypes = {
  'data-label': PropTypes.string,
  component: PropTypes.node
};

BodyCell.defaultProps = {
  component: 'td',
  'data-label': ''
};

export default BodyCell;
