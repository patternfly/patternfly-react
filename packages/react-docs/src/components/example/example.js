import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './example.styles';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  className: '',
  description: ''
};

const Example = ({ children, title, className, description, ...props }) => (
  <div>
    <Title size="md">{title}</Title>
    {Boolean(description) && <p className={css(styles.description)}>{description}</p>}
    <div className={css(className, styles.example)} {...props}>
      {children}
    </div>
  </div>
);

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;
