import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import PatternflyIcon from './InnerComponents/PatternflyIcon';

const Icon = ({ type, ...props }) => {
  const IconComponent =
    (type === 'fa' && FontAwesome) || (type === 'pf' && PatternflyIcon);
  if (IconComponent) {
    return <IconComponent {...props} />;
  }
  throw new Error(`Unsupported prop type=${type}`);
};
Icon.propTypes = {
  /** Icon type */
  type: PropTypes.oneOf(['fa', 'pf']),
  /** Font awesome icon rendered if name prop is provided */
  name: PropTypes.string.isRequired,
};
Icon.defaultProps = {
  type: 'fa',
};
export default Icon;
