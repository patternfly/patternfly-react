import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { componentShape } from '../../helpers/componentShape';

const propTypes = {
  /** content rendered inside the Card Body */
  children: PropTypes.any,
  /** additional classes added to the Card Body */
  className: PropTypes.string,
  /** Sets the base component to render. defaults to div */
  component: componentShape,
  /** Enables the body Content to fill the height of the card */
  isFilled: PropTypes.bool,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  component: 'div',
  isFilled: true
};

const CardBody = ({ children, className, component: Component, isFilled, ...props }) => (
  <Component className={css(styles.cardBody, !isFilled && styles.modifiers.noFill, className)} {...props}>
    {children}
  </Component>
);

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
