import React from 'react';
import PropsType from 'prop-types';

const BodyCell = ({ ['data-label']: dataLabel, component: Component, ...props }) => {
  const mappedProps = {
    ...dataLabel ? { 'data-label': dataLabel } : {},
    ...props
  }
  return <Component {...mappedProps} />;
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
