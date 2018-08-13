import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import PatternflyIcon from './InnerComponents/PatternflyIcon';

const Icon = ({ type, ...props }) => {
  const IconComponent = (type === 'fa' && FontAwesome) || (type === 'pf' && PatternflyIcon);
  if (IconComponent) {
    return <IconComponent {...props} />;
  }
  throw new Error(`Unsupported prop type=${type}`);
};
Icon.propTypes = {
  /** Icon type can be 'fa' or 'pf'.
   'fa' is the default type. */
  type: PropTypes.oneOf(['fa', 'pf']),
  /** Icon name is the pf-name or fa-name without the prefix.
   e.g.: As for 'pf-ok' name will be 'ok' */
  name: PropTypes.string.isRequired
};
Icon.defaultProps = {
  type: 'fa'
};
export default Icon;
