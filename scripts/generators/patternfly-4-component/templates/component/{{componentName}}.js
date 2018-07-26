import React from 'react';
import styles from '@patternfly/patternfly-next/{{typeDir}}/{{componentName}}/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const {{componentName}} = ({ className, children, ...props }) => (
  <div {...props} className={css(styles.{{camelCase componentName}}, className)}>
    {children}
  </div>
);

{{componentName}}.propTypes = propTypes;
{{componentName}}.defaultProps = defaultProps;

export default {{componentName}};
