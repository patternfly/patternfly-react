import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { Title, TitleSize, TitleLevel } from '../Title';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  /** the size of the Title  */
  size: PropTypes.oneOf(Object.values(TitleSize)),
  /** the heading level to use */
  headingLevel: PropTypes.oneOf(Object.values(TitleLevel)),
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  size: TitleSize.lg,
  headingLevel: TitleLevel.h1
};

const CardHeader = ({ children, className, size, headingLevel, ...props }) => (
  <Title className={css(styles.cardHeader, className)} size={size} headingLevel={headingLevel} {...props}>
    {children}
  </Title>
);

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
