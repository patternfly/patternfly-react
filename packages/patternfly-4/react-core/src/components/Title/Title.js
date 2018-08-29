import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Title/styles.css';
import { BaseSizes } from '../../styles/sizes';

export const TitleSize = {
  [BaseSizes.md]: BaseSizes.md,
  [BaseSizes.lg]: BaseSizes.lg,
  [BaseSizes.xl]: BaseSizes.xl,
  [BaseSizes['2xl']]: BaseSizes['2xl'],
  [BaseSizes['3xl']]: BaseSizes['3xl'],
  [BaseSizes['4xl']]: BaseSizes['4xl']
};

const propTypes = {
  size: PropTypes.oneOf(Object.values(TitleSize)).isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  children: '',
  className: ''
};

const Title = ({ size, className, children, ...props }) => (
  <h1 {...props} className={css(styles.title, getModifier(styles, size), className)}>
    {children}
  </h1>
);

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
