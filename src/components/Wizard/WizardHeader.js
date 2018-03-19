import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardHeader component for Patternfly React
 */
const WizardHeader = ({ children, className, embedded, title, ...rest }) => {
  const classes = classNames({ 'wizard-pf-header': !embedded }, className);

  if (embedded) {
    return (
      <h2 className={classes} {...rest}>
        {title}
      </h2>
    );
  }
  return (
    <div className={classes} {...rest}>
      <h4 className="wizard-pf-title">{title}</h4>
    </div>
  );
};
WizardHeader.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Embedded wizard */
  embedded: PropTypes.bool,
  /** The wizard title */
  title: PropTypes.string
};
WizardHeader.defaultProps = {
  children: null,
  className: '',
  embedded: false,
  title: ''
};
export default WizardHeader;
