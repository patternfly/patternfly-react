import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

export const TextVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  a: 'a',
  small: 'small',
  blockquote: 'blockquote',
  pre: 'pre'
};

const propTypes = {
  /** The text variant */
  variant: PropTypes.oneOf(Object.values(TextVariants)),
  /** Content rendered within the Text */
  children: PropTypes.node,
  /** Additional classes added to the Text */
  className: PropTypes.string
};

const defaultProps = {
  variant: 'p',
  children: null,
  className: ''
};

const Text = ({ variant, children, className, ...props }) => {
  const Component = TextVariants[variant];

  return (
    <Component {...props} className={css('is-content', className)}>
      {children}
    </Component>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
