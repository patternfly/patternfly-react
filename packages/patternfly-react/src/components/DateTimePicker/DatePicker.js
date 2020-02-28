import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import DateInput from './DateComponents/DateInput';
import TodayButton from './DateComponents/TodayButton';
import { formatDate } from './DateHelpers';

class DatePicker extends React.Component {
  state = {
    value: new Date(this.props.value),
    tmpValue: formatDate(this.props.value, this.props.locale)
  };
  setSelected = date => {
    let newDate = new Date(this.state.value);
    if (Date.parse(date)) {
      newDate = new Date(date);
    } else if (date === '') {
      newDate = date;
    }
    this.setState({ value: newDate, tmpValue: formatDate(newDate) });
  };

  render() {
    const { value } = this.state;
    const { locale, weekStartsOn, id, placement } = this.props;
    const popover = (
      <Popover id={id} className="bootstrap-datetimepicker-widget date-picker-pf usetwentyfour">
        <ul className="list-unstyled">
          <li>
            <DateInput date={value} setSelected={this.setSelected} locale={locale} weekStartsOn={weekStartsOn} />
          </li>
          <li className="picker-switch accordion-toggle">
            <TodayButton setSelected={this.setSelected} />
          </li>
        </ul>
      </Popover>
    );
    return (
      <div>
        <InputGroup className="input-group date-time-picker-pf">
          <FormControl
            aria-label="date-time-picker-input"
            type="text"
            value={this.state.tmpValue}
            onChange={e => this.setState({ tmpValue: e.target.value })}
            onBlur={e => this.setSelected(e.target.value)}
          />
          <OverlayTrigger trigger="click" placement={placement} overlay={popover} rootClose>
            <InputGroup.Addon className="date-picker-pf" onClick={() => this.setState({ tmpValue: formatDate(value) })}>
              <Icon type="fa" name="calendar" />
            </InputGroup.Addon>
          </OverlayTrigger>
        </InputGroup>
      </div>
    );
  }
}

DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  id: PropTypes.string,
  placement: OverlayTrigger.propTypes.placement
};
DatePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'popover-date-picker',
  placement: 'top'
};
export default DatePicker;
