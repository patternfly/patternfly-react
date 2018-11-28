import React, { Fragment } from 'react';
import PropsType from 'prop-types';

const BodyCell = ({ ['data-label']: dataLabel, parentId, component: Component, colSpan, ...props }) => {
  const mappedProps = {
    ...dataLabel ? { 'data-label': dataLabel } : {},
    ...props
  }
  return (parentId !== undefined && colSpan === undefined) ?
    null :
    <Component {...mappedProps} colSpan={colSpan} />;
};

BodyCell.propTypes = {
  'data-label': PropsType.string,
  component: PropsType.oneOfType([PropsType.string, PropsType.node, PropsType.number])
}

BodyCell.defaultProps = {
  component: 'td',
  'data-label': ''
}

export default BodyCell;
