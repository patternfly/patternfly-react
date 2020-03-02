import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from '../ListGroup';
import { noop } from '../../common/helpers';

/**
 * WizardReviewStep component for Patternfly React
 */
const WizardReviewStep = ({ children, onClick, title, collapsed, ...props }) => (
  <ListGroupItem listItem {...props}>
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
WizardReviewStep.defaultProps = {
  children: null,
  onClick: noop,
  title: '',
  collapsed: false
};
export default WizardReviewStep;
