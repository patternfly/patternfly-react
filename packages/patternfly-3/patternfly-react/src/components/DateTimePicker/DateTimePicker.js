import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import DateInput from './DateComponents/DateInput';
import TodayButton from './DateComponents/TodayButton';
import TimeInput from './TimeComponents/TimeInput';
import { MONTH } from './DateComponents/DateConstants';

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(this.props.value),
      tmpValue: this.formatDate(new Date(this.props.value)),
      typeOfDateInput: MONTH,
      isTimeTableOpen: false
    };
  }

  formatDate = date => {
    const { locale } = this.props;
    const options = [
      { year: 'numeric', month: 'numeric', day: 'numeric' },
      { hour: '2-digit', minute: '2-digit' }
    ];
    if (Date.parse(date)) {
      const parsedValue = new Date(date);
      return `${parsedValue.toLocaleString(
        locale,
        options[0]
      )} ${parsedValue.toLocaleString(locale, options[1])}`;
    }
    return date;
  }

  setSelected = date => {
    let newDate = new Date(this.state.value);
    if (Date.parse(date)) {
      newDate = new Date(date);
    }
    this.setState({
      value: newDate,
      tmpValue: this.formatDate(newDate),
      typeOfDateInput: 'M',
      isTimeTableOpen: false
    });
  }

  render() {
    const { locale, weekStartsOn, id, placement } = this.props;
    const { value, typeOfDateInput, isTimeTableOpen, hiddenValue } = this.state;
    const popover = (
      <Popover
        id={id}
        className="bootstrap-datetimepicker-widget date-time-picker-pf dropdown-menu timepicker-sbs"
      >
        <div className="row">
          <DateInput
            date={value}
            setSelected={this.setSelected}
            locale={locale}
            weekStartsOn={weekStartsOn}
            className="col-md-6"
            typeOfDateInput={typeOfDateInput}
          />
          <TimeInput
            time={value}
            setSelected={this.setSelected}
            isTimeTableOpen={isTimeTableOpen}
            locale={locale}
            className="col-md-6"
          />
        </div>
        <li className="picker-switch accordion-toggle">
          <TodayButton setSelected={this.setSelected} />
        </li>
      </Popover>
    );
    return (
      <div>
        <InputGroup className="input-group date-time-picker-pf">
          <FormControl
            aria-label="date-picker-input"
            type="text"
            value={this.state.tmpValue}
            onChange={e => this.setState({ tmpValue: e.target.value })}
            onBlur={e => this.setSelected(e.target.value)}
          />
          <OverlayTrigger
            trigger="click"
            placement={placement}
            overlay={popover}
            rootClose
          >
            <InputGroup.Addon
              className="date-time-picker-pf"
              onClick={() =>
                this.setState({ tmpValue: formatTime(value, locale) })
              }
            >
              <Icon type="fa" name="calendar" />
            </InputGroup.Addon>
          </OverlayTrigger>
        </InputGroup>
      </div>
    );
  }
}

DateTimePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  id: PropTypes.string,
  hiddenValue: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'bottom'])
};
DateTimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'datetime-picker-popover',
  hiddenValue: true,
  placement: 'top'
};
export default DateTimePicker;
