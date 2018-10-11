import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

export const TextListVariants = {
  ul: 'ul',
  ol: 'ol',
  dl: 'dl'
};

const propTypes = {
  /** The text list component */
  component: PropTypes.oneOf(Object.values(TextListVariants)),
  /** Content rendered within the TextList */
  children: PropTypes.node,
  /** Additional classes added to the TextList */
  className: PropTypes.string
};

const defaultProps = {
  component: 'ul',
  children: null,
  className: ''
};

const TextList = ({ component, children, className, ...props }) => {
  const Component = TextListVariants[component] || 'ul';

  return (
    <Component {...props} data-pf-content className={css(className)}>
      {children}
    </Component>
  );
};

TextList.propTypes = propTypes;
TextList.defaultProps = defaultProps;

export default TextList;
