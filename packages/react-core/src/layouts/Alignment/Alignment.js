import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Alignment/styles.css';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';

const AlignVariant = {
  left: 'left',
  right: 'right',
  center: 'center'
};

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  component: componentShape,
  align: PropTypes.oneOf(Object.keys(AlignVariant))
};

const defaultProps = {
  children: null,
  className: '',
  component: 'div',
  align: AlignVariant.left
};

const Alignment = ({ children, className, align, component: Component, ...props }) => (
  <Component className={css(styles.alignment, className, getModifier(styles, align))} {...props}>
    {children}
  </Component>
);

Alignment.propTypes = propTypes;
Alignment.defaultProps = defaultProps;

export default Alignment;
