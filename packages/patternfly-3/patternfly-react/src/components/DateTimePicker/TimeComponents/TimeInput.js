import React from 'react';
import PropTypes from 'prop-types';
import PickTimeTable from './PickTimeTable';
import PickTimeClock from './PickTimeClock';
import classNames from 'classnames';
import { noop } from '../../../common/helpers';
import { HOUR } from './TimeConstants';

class TimeInput extends React.Component {
  state = {
    isTimeTableOpen: this.props.isTimeTableOpen,
    typeOfTimeInput: HOUR,
    selectedTime: this.props.time
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    const nextTime = new Date(nextProps.time);
    const prevTime = new Date(prevState.selectedTime);
    const nextIsTableOpen = nextProps.isTimeTableOpen;
    return Date.parse(nextTime) === Date.parse(prevTime)
      ? null
      : {
          selectedTime: nextTime,
          isTimeTableOpen: nextIsTableOpen
        };
  }
  toggleTimeTable = type => {
    this.setState({
      typeOfTimeInput: type,
      isTimeTableOpen: !this.state.isTimeTableOpen
    });
  };
  render() {
    const { time, setSelected, className } = this.props;
    const { typeOfTimeInput, isTimeTableOpen } = this.state;
    const parsedTime = Date.parse(time) ? time : new Date();
    return (
      <div className={classNames('timepicker', className)}>
        {isTimeTableOpen ? (
          <PickTimeTable
            time={parsedTime}
            setSelected={setSelected}
            type={typeOfTimeInput}
            show={isTimeTableOpen}
            toggleTimeTable={this.toggleTimeTable}
          />
        ) : (
          <PickTimeClock time={parsedTime} setSelected={setSelected} toggleTimeTable={this.toggleTimeTable} />
        )}
      </div>
    );
  }
}

TimeInput.propTypes = {
  setSelected: PropTypes.func,
  time: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  className: PropTypes.string,
  isTimeTableOpen: PropTypes.bool
};
TimeInput.defaultProps = {
  setSelected: noop,
  time: new Date(),
  className: '',
  isTimeTableOpen: false
};
export default TimeInput;
