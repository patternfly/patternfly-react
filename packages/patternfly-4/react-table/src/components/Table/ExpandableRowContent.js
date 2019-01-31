import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { tableExpandableRowContent } from '@patternfly/patternfly-next/components/Table/table.css';

const propTypes = {
  children: PropTypes.node
};
const defaultProps = {
  children: null
};

const ExpandableRowContent = ({ children, className, ...props }) => (
  <div {...props} className={css(tableExpandableRowContent)}>
    {children}
  </div>
);

ExpandableRowContent.propTypes = propTypes;
ExpandableRowContent.defaultProps = defaultProps;

export default ExpandableRowContent;
