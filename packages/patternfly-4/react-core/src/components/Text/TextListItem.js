import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

export const TextListItemVariants = {
  li: 'li',
  dt: 'dt',
  dd: 'dd'
};

const propTypes = {
  /** The text list item component */
  component: PropTypes.oneOf(Object.values(TextListItemVariants)),
  /** Content rendered within the TextListItem */
  children: PropTypes.node,
  /** Additional classes added to the TextListItem */
  className: PropTypes.string
};

const defaultProps = {
  component: 'li',
  children: null,
  className: ''
};

const TextListItem = ({ component, children, className, ...props }) => {
  const Component = TextListItemVariants[component] || 'li';

  return (
    <Component {...props} data-pf-content className={css(className)}>
      {children}
    </Component>
  );
};

TextListItem.propTypes = propTypes;
TextListItem.defaultProps = defaultProps;

export default TextListItem;
