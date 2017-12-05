import React from 'react';
import PropTypes from 'prop-types';
import WizardHeader from './WizardHeader';

/**
 * Wizard - main Wizard component.
 */
const Wizard = ({ children, className, embedded, ...rest }) => {
  const renderChildren = () => {
    return React.Children.map(children, child => {
      if (child && child.type === WizardHeader) {
        return React.cloneElement(child, {
          embedded: embedded,
        });
      } else {
        return child;
      }
    });
  };

  return (
    <div className={className} {...rest}>
      {renderChildren()}
    </div>
  );
};
Wizard.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Embedded wizard */
  embedded: PropTypes.bool,
};
export default Wizard;
