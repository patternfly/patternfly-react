import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Title/styles.css';

export const TitleSize = {
  xxxxl: 'xxxxl',
  xxxl: 'xxxl',
  xxl: 'xxl',
  xl: 'xl',
  lg: 'lg',
  md: 'md'
};

const propTypes = {
  size: PropTypes.oneOf(Object.keys(TitleSize)).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  withMargins: PropTypes.bool
};

const defaultProps = {
  children: '',
  className: '',
  withMargins: false
};

const Title = ({ size, withMargins, className, children, ...props }) => (
  <h1
    {...props}
    className={css(
      styles.title,
      getModifier(styles, size),
      withMargins && styles.modifiers.margin,
      className
    )}
  >
    {children}
  </h1>
);

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
