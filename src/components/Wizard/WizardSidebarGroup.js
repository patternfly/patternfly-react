import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ListGroup } from '../ListGroup';

/**
 * WizardSidebarGroup component for Patternfly React
 */
const WizardSidebarGroup = ({
  children,
  className,
  step,
  activeStep,
  ...rest
}) => {
  const classes = cx({ hidden: step !== activeStep }, className);
  return (
    <ListGroup componentClass="ul" className={classes} {...rest}>
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
  step: PropTypes.string,
  /** The active step */
  activeStep: PropTypes.string,
};
export default WizardSidebarGroup;
