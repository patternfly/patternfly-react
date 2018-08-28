import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from '../ListGroup';

/**
 * WizardSidebarGroup component for Patternfly React
 */
const WizardSidebarGroup = ({ children, className, step, activeStep, ...props }) => {
  const classes = classNames({ hidden: `${step}` !== `${activeStep}` }, className);
  return (
    <ListGroup componentClass="ul" className={classes} {...props}>
      {children}
    </ListGroup>
  );
};
WizardSidebarGroup.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard step number for this step */
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The active step */
  activeStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
WizardSidebarGroup.defaultProps = {
  children: null,
  className: '',
  step: '',
  activeStep: ''
};
export default WizardSidebarGroup;
