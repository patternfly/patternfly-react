import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './example.styles';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

const defaultProps = {
  description: ''
};

const Example = ({ children, title, description, ...props }) => (
  <div>
    <Title size="lg" withMargins>
      {title}
    </Title>
    {Boolean(description) && <p className={css(styles.description)}>{description}</p>}
    <div className={css(styles.example)} {...props}>
      {React.Children.map(
        children,
        child =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            className: css(child.props && child.props.className, styles.spacing)
          })
      )}
    </div>
  </div>
);

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;
