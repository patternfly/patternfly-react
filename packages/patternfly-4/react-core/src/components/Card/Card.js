import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { componentShape } from '../../helpers/componentShape';

const propTypes = {
  /** content rendered inside the Card */
  children: PropTypes.any,
  /** additional classes added to the Card */
  className: PropTypes.string,
  /** Sets the base component to render. defaults to article */
  component: componentShape,
  /** Modifies the card to include hover styles on :hover */
  isHoverable: PropTypes.bool,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  component: 'article',
  isHoverable: false
};

const Card = ({ children, className, component: Component, isHoverable, ...props }) => (
  <Component className={css(styles.card, isHoverable && styles.modifiers.hoverable, className)} {...props}>
    {children}
  </Component>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
