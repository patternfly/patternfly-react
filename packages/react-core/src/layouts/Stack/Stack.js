import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Stack/styles.css';
import { componentShape } from '../../internal/componentShape';
import { GutterSize, getGutterModifier } from '../../styles/gutters';
import { css } from '@patternfly/react-styles';

const propTypes = {
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),
  children: PropTypes.node,
  className: PropTypes.string,
  component: componentShape
};

const defaultProps = {
  gutter: null,
  className: '',
  children: null,
  component: 'div'
};

const Stack = ({ gutter, className, children, component: Component, ...props }) => (
  <Component
    {...props}
    className={css(styles.stack, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)}
  >
    {children}
  </Component>
);

Stack.propTypes = propTypes;
Stack.defaultProps = defaultProps;

export default Stack;
