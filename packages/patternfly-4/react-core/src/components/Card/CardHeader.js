import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { Title } from '../Title';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: ''
};

const CardHeader = ({ children, className, ...props }) => (
  <Title className={css(styles.cardHeader, className)} size="lg" {...props}>
    {children}
  </Title>
);

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
