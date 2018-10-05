import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

export const TextListItemVariants = {
  li: 'li',
  dt: 'dt',
  dd: 'dd'
};

const propTypes = {
  /** The text list item variant */
  variant: PropTypes.oneOf(Object.values(TextListItemVariants)),
  /** Content rendered within the TextListItem */
  children: PropTypes.node,
  /** Additional classes added to the TextListItem */
  className: PropTypes.string
};

const defaultProps = {
  variant: 'li',
  children: null,
  className: ''
};

const TextListItem = ({ variant, children, className, ...props }) => {
  const Component = TextListItemVariants[variant];

  return (
    <Component {...props} className={css('is-content', className)}>
      {children}
    </Component>
  );
};

TextListItem.propTypes = propTypes;
TextListItem.defaultProps = defaultProps;

export default TextListItem;
