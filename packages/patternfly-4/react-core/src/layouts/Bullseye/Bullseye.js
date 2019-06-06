import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import PropTypes from 'prop-types';
import { componentShape } from '../../helpers/componentShape';

const propTypes = {
  /** content rendered inside the Bullseye layout */
  children: PropTypes.any,
  /** additional classes added to the Bullseye layout */
  className: PropTypes.string,
  /** Sets the base component to render. defaults to div */
  component: componentShape,
  /** Additional props are spread to the container component */
  '': PropTypes.any // eslint-disable-line react/require-default-props
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
