import React from 'react';
import PropsType from 'prop-types';

const BodyCell = ({ ['data-label']: dataLabel, parentId, isVisible, component: Component, colSpan, ...props }) => {
  const mappedProps = {
    ...dataLabel ? { 'data-label': dataLabel } : {},
    ...props
  }
  return (parentId !== undefined && colSpan === undefined) || !isVisible ?
    null :
    <Component {...mappedProps} colSpan={colSpan} />;
};

BodyCell.propTypes = {
  'data-label': PropsType.string,
  component: PropsType.node
}

BodyCell.defaultProps = {
  component: 'td',
  'data-label': ''
}

export default BodyCell;
