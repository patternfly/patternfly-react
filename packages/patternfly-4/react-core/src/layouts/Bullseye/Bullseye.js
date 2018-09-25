import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Bullseye/bullseye.css';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';

const propTypes = {
  /** content rendered inside the Bullseye layout */
  children: PropTypes.any,
  /** additional classes added to the Bullseye layout */
  className: PropTypes.string,
  /** Sets the base component to render. defaults to div */
  component: componentShape
};

const defaultProps = {
  children: null,
  className: '',
  component: 'div'
};

const Bullseye = ({ children, className, component: Component, ...props }) => (
  <Component className={css(styles.bullseye, className)} {...props}>
    {children}
  </Component>
);

Bullseye.propTypes = propTypes;
Bullseye.defaultProps = defaultProps;

export default Bullseye;
