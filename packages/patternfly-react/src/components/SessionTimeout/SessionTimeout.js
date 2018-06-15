import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../common/Timer';

import { Modal, Button, Col, Icon } from '../../index';

export const SessionTimeoutModal = props => (
  <Modal show={props.show}>
    <Modal.Body className="session-timeout-body">
      <Col className="session-timeout-warning-icon" md={2}>
        <Icon type="pf" name="warning-triangle-o" />
      </Col>
      <Col className="session-timeout-message" md={10}>
        {props.children}
      </Col>
    </Modal.Body>
    <Modal.Footer>
      <Button bsStyle="default" onClick={props.logoutFnc}>
        {props.logoutText}
      </Button>
      <Button bsStyle="primary" onClick={props.continueFnc}>
        {props.continueText}
      </Button>
    </Modal.Footer>
  </Modal>
);

SessionTimeoutModal.propTypes = {
  logoutFnc: PropTypes.func.isRequired,
  logoutText: PropTypes.string,
  continueFnc: PropTypes.func.isRequired,
  continueText: PropTypes.string,
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired
};

SessionTimeoutModal.defaultProps = {
  logoutText: 'Log Out',
  continueText: 'Continue Session'
};

const SessionTimeout = props => (
  <SessionTimeoutModal
    show={props.timeLeft > 0 && props.timeLeft <= props.displayBefore}
    logoutFnc={props.logoutFnc}
    continueFnc={props.continueFnc}
  >
    <div>
      <p>Your session is about to expire.</p>
      <p>
        You will be logged out in {props.timeLeft > 0 ? props.timeLeft : 0}{' '}
        {props.units}.
      </p>
    </div>
  </SessionTimeoutModal>
);

SessionTimeout.propTypes = {
  logoutFnc: PropTypes.func.isRequired,
  continueFnc: PropTypes.func.isRequired,
  timeLeft: PropTypes.number,
  displayBefore: PropTypes.number,
  units: PropTypes.string
};

SessionTimeout.defaultProps = {
  timeLeft: 3,
  displayBefore: 10,
  units: 'seconds'
};

const msTimes = {
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000
};

export class CountDownSessionTimeout extends React.Component {
  constructor(props) {
    super(props);
    const { timeLeft, displayBefore } = this.props;
    this.state = {
      timeout: timeLeft,
      display: timeLeft - displayBefore
    };
    this.displayTimer = new Timer(() => {}, -1);
    this.timeoutTimer = new Timer(() => {}, -1);
    this.continue = this.continue.bind(this);
    this.logout = this.logout.bind(this);
  }
  setTimeLeft(timeout, display) {
    this.setState(() => ({ timeout, display }));
  }
  logout() {
    this.setTimeLeft(0, -1);
    this.displayTimer.clearTimer();
    this.timeoutTimer.clearTimer();
  }
  continue() {
    const { sessionTime, displayBefore, units } = this.props;
    this.setTimeLeft(sessionTime, displayBefore - sessionTime);

    this.displayTimer.startTimer(() => {
      this.setTimeLeft(sessionTime - displayBefore, 0);
    }, (sessionTime - displayBefore) * msTimes[units]);

    this.timeoutTimer.startTimer(() => {
      this.setTimeLeft(0, -1);
    }, sessionTime * msTimes[units]);
  }
  componentDidMount() {
    const { timeout, display } = this.state;
    if (display > 0) {
      this.displayTimer.startTimer(() => {
        this.setTimeLeft(this.props.displayBefore, -1);
      }, (timeout - display) * msTimes[this.props.units]);
    }
    this.timeoutTimer.startTimer(() => {
      this.setTimeLeft(0, -1);
    }, timeout * msTimes[this.props.units]);
  }
  componentWillUnmount() {
    this.displayTimer.clearTimer();
    this.timeoutTimer.clearTimer();
  }
  render() {
    return (
      <SessionTimeout
        timeLeft={this.state.timeout}
        displayBefore={this.props.displayBefore}
        units={this.props.units}
        continueFnc={this.continue}
        logoutFnc={this.logout}
      />
    );
  }
}

CountDownSessionTimeout.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  sessionTime: PropTypes.number.isRequired,
  displayBefore: PropTypes.number,
  units: PropTypes.oneOf(Object.keys(msTimes))
};

CountDownSessionTimeout.defaultProps = {
  displayBefore: 30,
  units: 'seconds'
};

export default SessionTimeout;
