import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from '../ListGroup';

/**
 * WizardReviewStep component for Patternfly React
 */
const WizardReviewStep = ({ children, onClick, title, collapsed, ...rest }) => (
  <ListGroupItem listItem {...rest}>
    <a href="#" onClick={onClick} className={collapsed ? 'collapsed' : ''}>
      {title}
    </a>
    {children}
  </ListGroupItem>
);
WizardReviewStep.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Click handler */
  onClick: PropTypes.func,
  /** Step title */
  title: PropTypes.string,
  /** Step collapsed */
  collapsed: PropTypes.bool
};
export default WizardReviewStep;
