import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import TimeInput from './TimeComponents/TimeInput';
import { getDateFromTime, formatTime } from './TimeHelpers';

class TimePicker extends React.Component {
  state = {
    value: getDateFromTime(this.props.value),
    tmpValue: formatTime(this.props.value, this.props.locale)
  };

  setSelected = time => {
    const newTime = getDateFromTime(time);
    if (newTime) {
      this.setState({ value: newTime, tmpValue: formatTime(newTime, this.props.locale) });
    } else {
      this.setState({ tmpValue: formatTime(newTime, this.props.locale) });
    }
  };
  render() {
    const { value } = this.state;
    const { locale, placement, id } = this.props;
    const popover = (
      <Popover id={id} className="bootstrap-datetimepicker-widget date-time-picker-pf bootstrap-timepicker-widget">
        <ul className="list-unstyled">
          <li className="picker-switch accordion-toggle">
            <table className="table-condensed">
              <tbody>
                <tr />
              </tbody>
            </table>
          </li>
          <li>
            <TimeInput time={value} setSelected={this.setSelected} locale={locale} />
          </li>
        </ul>
      </Popover>
    );

    return (
      <InputGroup className="input-group date-time-picker-pf time-picker-pf">
        <FormControl
          aria-label="time-picker-input"
          type="text"
          value={this.state.tmpValue}
          onChange={e => this.setState({ tmpValue: e.target.value })}
          onBlur={e => this.setSelected(e.target.value)}
        />
        <OverlayTrigger trigger="click" placement={placement} overlay={popover} rootClose>
          <InputGroup.Addon
            className="picker-pf"
            onClick={() => this.setState({ tmpValue: formatTime(value, locale) })}
          >
            <Icon type="fa" name="clock-o" />
          </InputGroup.Addon>
        </OverlayTrigger>
      </InputGroup>
    );
  }
}

TimePicker.propTypes = {
  /** Value of the input */
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** locale string for formating the time string */
  locale: PropTypes.string,
  /** id of the popover */
  id: PropTypes.string,
  /** Placement of the popover */
  placement: OverlayTrigger.propTypes.placement
};
TimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  id: 'popover-time-picker',
  placement: 'top'
};
export default TimePicker;
