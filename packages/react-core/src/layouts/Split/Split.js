import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Split/styles.css';
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

const Split = ({ gutter, className, children, component: Component, ...props }) => (
  <Component
    {...props}
    className={css(styles.split, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)}
  >
    {children}
  </Component>
);

Split.propTypes = propTypes;
Split.defaultProps = defaultProps;

export default Split;
