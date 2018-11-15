import React from 'react';
import PropTypes from 'prop-types';
import { Icon, MessageDialog } from '../../index';
import CountDownSessionTimeout from './CountDownSessionTimeout';

const SessionTimeout = props => (
  <MessageDialog
    show={props.timeLeft > 0 && props.timeLeft <= props.displayBefore}
    primaryActionButtonContent={props.continueContent}
    primaryAction={props.continueFnc}
    secondaryActionButtonContent={props.logoutContent}
    secondaryAction={props.logoutFnc}
    primaryContent={props.primaryContent}
    secondaryContent={props.secondaryContent}
    onHide={props.logoutFnc}
    icon={<Icon type="pf" name="warning-triangle-o" />}
  />
);

SessionTimeout.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  displayBefore: PropTypes.number,
  continueContent: PropTypes.node,
  continueFnc: PropTypes.func.isRequired,
  logoutContent: PropTypes.node,
  logoutFnc: PropTypes.func.isRequired,
  primaryContent: PropTypes.node,
  secondaryContent: PropTypes.node
};

SessionTimeout.defaultProps = {
  displayBefore: 10,
  continueContent: 'Continue Session',
  logoutContent: 'Log Out',
  primaryContent: <p className="lead">Your session is about to expire</p>,
  secondaryContent: (
    <React.Fragment>
      <p>You will be logged out in a few seconds.</p>
      <p>To continue your session click on the Continue Session button.</p>
    </React.Fragment>
  )
};

SessionTimeout.CountDown = CountDownSessionTimeout;

export default SessionTimeout;
