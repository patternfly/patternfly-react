import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Title/title.css';
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
  /** the size of the Title  */
  size: PropTypes.oneOf(Object.values(TitleSize)).isRequired,
  /** content rendered inside the Title */
  children: PropTypes.node,
  /** additional classes added to the Title */
  className: PropTypes.string,
  /** the heading level to use */
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

const defaultProps = {
  children: '',
  className: '',
  headingLevel: 'h1'
};

const Title = ({ size, className, children, headingLevel: HeadingLevel, ...props }) => {
  return (
    <HeadingLevel {...props} className={css(styles.title, getModifier(styles, size), className)}>
      {children}
    </HeadingLevel>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
