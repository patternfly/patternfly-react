import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './example.styles';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

const Example = ({ children, title }) => (
  <div>
    <Title size="lg" withMargins>
      {title}
    </Title>
    <div className={css(styles.example)}>
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

export default Example;
