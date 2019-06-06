import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import { AM, PM, HOUR, MINUTE } from './TimeConstants';

class PickTimeClock extends React.Component {
  state = {
    ampm: this.props.time.getHours() >= 12 ? PM : AM
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ampm: nextProps.time.getHours() >= 12 ? PM : AM
    };
  }
  setTime = (type, amount) => {
    const { time, setSelected } = this.props;
    if (type === HOUR) {
      time.setHours(time.getHours() + amount);
    } else if (type === MINUTE) {
      time.setMinutes(time.getMinutes() + amount);
    }
    setSelected(time);
  };
  toggleAMPM = () => {
    const { time, setSelected } = this.props;
    if (this.state.ampm === AM) {
      time.setHours(time.getHours() + 12);
      this.setState({ ampm: PM });
    } else {
      time.setHours(time.getHours() - 12);
      this.setState({ ampm: AM });
    }
    setSelected(time);
  };
  render() {
    const { time, toggleTimeTable } = this.props;
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12 || 12;

    return (
      <div className="timepicker-picker">
        <table>
          <tbody>
            <tr>
              <td onClick={() => this.setTime(HOUR, 1)}>
                <a title="Increment Hour" className="btn clock-btn">
                  <span className="glyphicon glyphicon-chevron-up" />
                </a>
              </td>
              <td className="separator" />
              <td onClick={() => this.setTime(MINUTE, 1)}>
                <a title="Increment Minute" className="btn clock-btn">
                  <span className="glyphicon glyphicon-chevron-up" />
                </a>
              </td>
              <td className="separator" />
            </tr>
            <tr>
              <td onClick={() => toggleTimeTable(HOUR)}>
                <span className="timepicker-hour" title="Pick Hour">
                  {`${hours}`.padStart(2, '0')}
                </span>
              </td>
              <td className="separator">:</td>
              <td onClick={() => toggleTimeTable(MINUTE)}>
                <span className="timepicker-minute" title="Pick Minute">
                  {`${minutes}`.padStart(2, '0')}
                </span>
              </td>
              <td>
                <button className="btn btn-primary ampm-toggle" onClick={() => this.toggleAMPM()}>
                  {this.state.ampm}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <a title="Decrement Hour" className="btn clock-btn" onClick={() => this.setTime(HOUR, -1)}>
                  <span className="glyphicon glyphicon-chevron-down" />
                </a>
              </td>
              <td className="separator" />
              <td>
                <a title="Decrement Minute" className="btn clock-btn" onClick={() => this.setTime(MINUTE, -1)}>
                  <span className="glyphicon glyphicon-chevron-down" />
                </a>
              </td>
              <td className="separator" />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

PickTimeClock.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  setSelected: PropTypes.func,
  toggleTimeTable: PropTypes.func
};
PickTimeClock.defaultProps = {
  setSelected: noop,
  toggleTimeTable: noop
};
export default PickTimeClock;
