import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Card/card.css';
import { componentShape } from '../../internal/componentShape';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  component: componentShape
};

const defaultProps = {
  children: null,
  className: '',
  component: 'div'
};

const CardHeader = ({ children, className, component: Component, ...props }) => (
  <Component className={css(styles.cardHeader, className)} {...props}>
    {children}
  </Component>
);

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
