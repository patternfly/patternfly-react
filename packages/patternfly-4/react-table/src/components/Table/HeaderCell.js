import React from 'react';
import PropsType from 'prop-types';

const HeaderCell = ({ ['data-label']: dataLabel, scope, component: Component, ...props }) => {
  const mappedProps = {
    ...scope ? { scope } : {},
    ...props
  }
  return <Component {...mappedProps} />;
};

HeaderCell.propTypes = {
  'data-label': PropsType.string,
  scope: PropsType.string,
  component: PropsType.oneOfType([PropsType.string, PropsType.node, PropsType.number])
}

HeaderCell.defaultProps = {
  scope: '',
  component: 'th',
  'data-label': ''
}

export default HeaderCell;
