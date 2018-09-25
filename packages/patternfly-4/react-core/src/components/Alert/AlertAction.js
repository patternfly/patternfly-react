import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Alert/alert.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  children: '',
  className: ''
};

const AlertAction = ({ className, children, ...props }) => (
  <div {...props} className={css(styles.alertAction, className)}>
    {children}
  </div>
);

AlertAction.propTypes = propTypes;
AlertAction.defaultProps = defaultProps;

export default AlertAction;
