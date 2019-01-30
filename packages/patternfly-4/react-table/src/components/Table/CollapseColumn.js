import React from 'react';
import PropTypes from 'prop-types';
import { AngleDownIcon } from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import styles from '@patternfly/patternfly-next/components/Table/table-grid.css';

const propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool
};
const defaultProps = {
  children: null,
  isOpen: undefined,
  onToggle: null
};

const CollapseColumn = ({ children, onToggle, isOpen, className, ...props }) => (
  <React.Fragment>
    {isOpen !== undefined &&
      <Button className={css(className, isOpen && styles.modifiers.expanded)} {...props} variant="plain" aria-label="Details" onClick={onToggle} aria-expanded={isOpen}><AngleDownIcon /></Button>
    }
    {children}
  </React.Fragment>
);

CollapseColumn.propTypes = propTypes;
CollapseColumn.defaultProps = defaultProps;

export default CollapseColumn;
