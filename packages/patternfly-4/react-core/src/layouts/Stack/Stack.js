import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Stack/stack.css';
import { componentShape } from '../../internal/componentShape';
import { GutterSize, getGutterModifier } from '../../styles/gutters';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),
  /** content rendered inside the Stack layout */
  children: PropTypes.node,
  /** additional classes added to the Stack layout */
  className: PropTypes.string,
  /** Sets the base component to render. defaults to div */
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
