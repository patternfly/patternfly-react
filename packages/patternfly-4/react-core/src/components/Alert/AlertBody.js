import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Alert/alert.css';

const propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  title: null,
  children: '',
  className: ''
};

const AlertBody = ({ title, className, children, ...props }) => (
  <div {...props} className={css(styles.alertBody, className)}>
    {title && <h4 className={css(styles.alertTitle)}>{title}</h4>}
    {children}
  </div>
);

AlertBody.propTypes = propTypes;
AlertBody.defaultProps = defaultProps;

export default AlertBody;
