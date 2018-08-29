import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../common/Timer';
import SessionTimeout from './SessionTimeout';

const msTimes = {
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000
};

class CountDownSessionTimeout extends React.Component {
  constructor(props) {
    super(props);
    this.timer = new Timer(() => {}, -1);
    this.state = { timeLeft: 0 };
  }
  componentDidMount() {
    if (this.props.timeLeft < this.props.displayBefore) {
      this.setTimeout('dialog');
    } else {
      this.setTimeout('init');
    }
  }
  componentWillUnount() {
    this.timer.clearTimer();
  }
  setTimeout(mode) {
    const { sessionTime, timeLeft, displayBefore, units } = this.props;
    switch (mode) {
      case 'logout': {
        this.setState(() => ({ timeLeft: 0 }));
        this.timer.clearTimer();
        break;
      }
      case 'continue': {
        this.setState(() => ({ timeLeft: sessionTime }));
        this.timer.startTimer(() => this.setTimeout('dialog'), (sessionTime - displayBefore) * msTimes[units]);
        break;
      }
      case 'dialog': {
        const leftNow = timeLeft < displayBefore ? timeLeft : displayBefore;
        this.setState(() => ({ timeLeft: leftNow }));
        this.timer.startTimer(() => this.setTimeout('logout'), leftNow * msTimes[units]);
        break;
      }
      case 'init': {
        this.setState(() => ({ timeLeft }));
        this.timer.startTimer(() => this.setTimeout('dialog'), (timeLeft - displayBefore) * msTimes[units]);
        break;
      }
      default: {
        break;
      }
    }
  }
  render() {
    return (
      <SessionTimeout
        logoutFnc={() => this.setTimeout('logout')}
        continueFnc={() => this.setTimeout('continue')}
        displayBefore={this.props.displayBefore}
        timeLeft={this.state.timeLeft}
        secondaryContent={this.props.secondaryContent}
      />
    );
  }
}

CountDownSessionTimeout.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  sessionTime: PropTypes.number.isRequired,
  displayBefore: PropTypes.number,
  units: PropTypes.oneOf(Object.keys(msTimes)),
  secondaryContent: PropTypes.node
};

CountDownSessionTimeout.defaultProps = {
  displayBefore: 10,
  units: 'seconds',
  secondaryContent: <p>You will be logged out in 10 seconds.</p>
};

export default CountDownSessionTimeout;
