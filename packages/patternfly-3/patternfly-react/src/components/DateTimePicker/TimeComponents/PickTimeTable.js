import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import { HOUR, MINUTE } from './TimeConstants';

class PickTimeTable extends React.Component {
  setTime = (newTime, type) => {
    const { time, setSelected, toggleTimeTable } = this.props;
    const hours = time.getHours();
    newTime = parseInt(newTime, 10);
    if (type === MINUTE) { time.setMinutes(newTime); }
    else if (type === HOUR) {
      time.setHours(hours < 12 ? newTime % 12 : (newTime % 12) + 12);
    }
    setSelected(time);
    toggleTimeTable();
  }
  render() {
    const hoursArray = [['12', '01', '02', '03'], ['04', '05', '06', '07'], ['08', '09', '10', '11']];
    const minutesArray = [['00', '05', '10', '15'], ['20', '25', '30', '35'], ['40', '45', '50', '55']];
    return this.props.type === HOUR ? (
      <div className="timepicker-hours">
        <table className="table-condensed">
          <tbody>
            {hoursArray.map((hoursRow, idx) => (
              <tr key={idx}>
                {hoursRow.map(hour => (
                  <td key={hour} className="hour" onClick={() => this.setTime(hour, HOUR)}>
                    {hour}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="timepicker-minutes">
        <table className="table-condensed">
          <tbody>
            {minutesArray.map((minutesRow, idx) => (
              <tr key={idx}>
                {minutesRow.map(minute => (
                  <td key={minute} className="minute" onClick={() => this.setTime(minute, MINUTE)}>
                    {minute}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
PickTimeTable.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  setSelected: PropTypes.func,
  toggleTimeTable: PropTypes.func,
  type: PropTypes.string.isRequired
};
PickTimeTable.defaultProps = {
  setSelected: noop,
  toggleTimeTable: noop
};
export default PickTimeTable;
