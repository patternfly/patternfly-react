import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from '../ListGroup';
import { noop } from '../../common/helpers';

/**
 * WizardReviewSubStep component for Patternfly React
 */
const WizardReviewSubStep = ({ children, onClick, label, title, collapsed, ...props }) => (
  <ListGroupItem listItem {...props}>
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
WizardReviewSubStep.defaultProps = {
  children: null,
  onClick: noop,
  label: '',
  title: '',
  collapsed: false
};
export default WizardReviewSubStep;
