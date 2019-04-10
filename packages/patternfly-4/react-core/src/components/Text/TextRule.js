import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Additional classes added to the Text */
  className: PropTypes.string,
  /** Additional props are spread to the hr element */
  // eslint-disable-next-line react/require-default-props
  '': PropTypes.any
};

const defaultProps = {
  className: ''
};

const TextRule = ({ className, ...props }) => <hr {...props} data-pf-content className={css(className)} />;

TextRule.propTypes = propTypes;
TextRule.defaultProps = defaultProps;

export default TextRule;
