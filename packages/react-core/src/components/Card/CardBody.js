import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Card/styles.css';
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

const CardBody = ({ children, className, component: Component, ...props }) => (
  <Component className={css(styles.cardBody, className)} {...props}>
    {children}
  </Component>
);

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
