import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { componentShape } from '../../helpers/componentShape';

const propTypes = {
  /** content rendered inside the Card Footer */
  children: PropTypes.any,
  /** additional classes added to the Footer */
  className: PropTypes.string,
  /** Sets the base component to render. defaults to div */
  component: componentShape,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  component: 'div'
};

const CardFooter = ({ children, className, component: Component, ...props }) => (
  <Component className={css(styles.cardFooter, className)} {...props}>
    {children}
  </Component>
);

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
