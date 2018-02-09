import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from '../ListGroup';

/**
 * WizardReviewSubStep component for Patternfly React
 */
const WizardReviewSubStep = ({
  children,
  onClick,
  label,
  title,
  collapsed,
  ...rest
}) => (
  <ListGroupItem listItem {...rest}>
    <a href="#" onClick={onClick} className={collapsed ? 'collapsed' : ''}>
      <span className="wizard-pf-substep-number">{label}</span>
      <span className="wizard-pf-substep-title">{title}</span>
    </a>
    {children}
  </ListGroupItem>
);
WizardReviewSubStep.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Click handler */
  onClick: PropTypes.func,
  /** Review step label */
  label: PropTypes.string,
  /** Review step title */
  title: PropTypes.string,
  /** Step collapsed */
  collapsed: PropTypes.bool
};
export default WizardReviewSubStep;
