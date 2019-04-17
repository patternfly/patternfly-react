import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Card/card.css';
import titleStyles from '@patternfly/patternfly/components/Title/title.css';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: ''
};

const CardHeader = ({ children, className, ...props }) => (
  <div className={css(styles.cardHeader, titleStyles.title, titleStyles.modifiers.lg, className)} {...props}>
    {children}
  </div>
);

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
