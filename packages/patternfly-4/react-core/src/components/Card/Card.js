import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Card/card.css';
import { componentShape } from '../../internal/componentShape';

const propTypes = {
  /** content rendered inside the Card */
  children: PropTypes.any,
  /** additional classes added to the Card */
  className: PropTypes.string,
  /** Sets the base component to render. defaults to article */
  component: componentShape
};

const defaultProps = {
  children: null,
  className: '',
  component: 'article'
};

const Card = ({ children, className, component: Component, ...props }) => (
  <Component className={css(styles.card, className)} {...props}>
    {children}
  </Component>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
