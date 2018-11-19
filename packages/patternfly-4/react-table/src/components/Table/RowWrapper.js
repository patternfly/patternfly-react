import React from 'react';
import PropsType from 'prop-types';
import { tableExpandableRow, modifiers } from '@patternfly/patternfly-next/components/Table/table.css';
import { css } from '@patternfly/react-styles';

const RowWrapper = ({ isOpen, isExpanded, ...props }) => {
  return <tr {...props}
    className={css(isExpanded !== undefined && tableExpandableRow, isExpanded && modifiers.expanded)}
    hidden={isExpanded !== undefined && !isExpanded}
  />;
};

RowWrapper.propTypes = {
  isOpen: PropsType.bool,
  isExpanded: PropsType.bool
}

RowWrapper.defaultProps = {
  isOpen: undefined,
  isExpanded: undefined
}

export default RowWrapper;
