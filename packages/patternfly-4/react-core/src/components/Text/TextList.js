import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

export const TextListVariants = {
  ul: 'ul',
  ol: 'ol',
  dl: 'dl'
};

const propTypes = {
  /** The text list variant */
  variant: PropTypes.oneOf(Object.values(TextListVariants)),
  /** Content rendered within the TextList */
  children: PropTypes.node,
  /** Additional classes added to the TextList */
  className: PropTypes.string
};

const defaultProps = {
  variant: 'ul',
  children: null,
  className: ''
};

const TextList = ({ variant, children, className, ...props }) => {
  const Component = TextListVariants[variant];

  return (
    <Component {...props} className={css('is-content', className)}>
      {children}
    </Component>
  );
};

TextList.propTypes = propTypes;
TextList.defaultProps = defaultProps;

export default TextList;
