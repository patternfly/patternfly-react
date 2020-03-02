import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroupItem } from '../ListGroup';
import { noop } from '../../common/helpers';

/**
 * WizardSidebarGroupItem component for Patternfly React
 */
const WizardSidebarGroupItem = ({
  stepIndex,
  subStepIndex,
  className,
  subStep,
  label,
  title,
  activeSubStep,
  onClick,
  ...props
}) => {
  const classes = classNames({ active: `${subStep}` === `${activeSubStep}` }, className);
  return (
    <ListGroupItem className={classes} listItem {...props}>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onClick(stepIndex, subStepIndex);
        }}
      >
        <span className="wizard-pf-substep-number">{label}</span>
        <span className="wizard-pf-substep-title">{title}</span>
      </a>
    </ListGroupItem>
  );
};
WizardSidebarGroupItem.propTypes = {
  /** The wizard parent step index */
  stepIndex: PropTypes.number.isRequired,
  /** The wizard sub step index */
  subStepIndex: PropTypes.number.isRequired,
  /** Additional css classes */
  className: PropTypes.string,
  /** This wizard sub step name */
  subStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** This wizard sub step label */
  label: PropTypes.string,
  /** This wizard sub step title */
  title: PropTypes.string,
  /** The currently active wizard substep */
  activeSubStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sidebar group item click handler */
  onClick: PropTypes.func
};
WizardSidebarGroupItem.defaultProps = {
  className: '',
  subStep: '',
  label: '',
  title: '',
  activeSubStep: '',
  onClick: noop
};
export default WizardSidebarGroupItem;
