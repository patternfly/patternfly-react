import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/layouts/Split/split';
import { componentShape } from '../../helpers/componentShape';
import { GutterSize, getGutterModifier } from '../../styles/gutters';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),
  /** content rendered inside the Split layout */
  children: PropTypes.node,
  /** additional classes added to the Split layout */
  className: PropTypes.string,
  /** Sets the base component to render. defaults to div */
  component: componentShape,
  /** Additional props are spread to the container component */
  '': PropTypes.any // eslint-disable-line react/require-default-props
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
