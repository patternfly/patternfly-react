import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Check/check.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSelect: PropTypes.func
};
const defaultProps = {
  children: null,
  className: '',
  onSelect: null
};

const SelectColumn = ({ children, className, onSelect, ...props }) => (
  <React.Fragment>
    <input {...props} className={css(styles.checkInput)} type="checkbox" onChange={onSelect}></input>
    {children}
  </React.Fragment>
);

SelectColumn.propTypes = propTypes;
SelectColumn.defaultProps = defaultProps;

export default SelectColumn;
