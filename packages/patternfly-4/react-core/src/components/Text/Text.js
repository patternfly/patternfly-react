import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

export const TextVariants = {
  p: 'p',
  a: 'a',
  small: 'small',
  blockquote: 'blockquote',
  pre: 'pre'
};

const propTypes = {
  /** The text component */
  component: PropTypes.oneOf(Object.values(TextVariants)),
  /** Content rendered within the Text */
  children: PropTypes.node,
  /** Additional classes added to the Text */
  className: PropTypes.string,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  component: 'p',
  children: null,
  className: ''
};

const Text = ({ component, children, className, ...props }) => {
  const Component = TextVariants[component] || 'p';

  return (
    <Component {...props} data-pf-content className={css(className)}>
      {children}
    </Component>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
