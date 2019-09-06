import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../index';
import { addDays, getWeekStart } from './helpers';
import times from 'lodash/times';

class Header extends React.Component {
  getWeekArray = () => {
    const { weekStartsOn } = this.props;
    const weekStart = getWeekStart(new Date());
    const dayFormat =
      Intl.DateTimeFormat(this.props.locale, { weekday: 'short' }).format(weekStart).length > 3 ? 'narrow' : 'short';
    return times(7, i =>
      Intl.DateTimeFormat(this.props.locale, { weekday: dayFormat })
        .format(addDays(weekStart, (i + weekStartsOn) % 7))
        .slice(0, 2)
    );
  };
  render() {
    const { getNextMonth, getPrevMonth, toggleDateView } = this.props;
    const date = new Date(this.props.date);
    const month = Intl.DateTimeFormat(this.props.locale, { month: 'long' }).format(date);
    const year = date.getFullYear();
    const daysOfTheWeek = this.getWeekArray();
    return (
      <thead>
        <tr>
          <th className="prev" onClick={getPrevMonth}>
            <Icon type="fa" name="angle-left" />
          </th>
          <th className="picker-switch" colSpan="5" onClick={() => toggleDateView('Y')}>
            {month} {year}
          </th>
          <th className="next" onClick={getNextMonth}>
            <Icon type="fa" name="angle-right" />
          </th>
        </tr>
        <tr>
          {daysOfTheWeek.map((day, idx) => (
            <th key={idx} className="dow">
              {day}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

Header.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  getPrevMonth: PropTypes.func,
  getNextMonth: PropTypes.func,
  toggleDateView: PropTypes.func,
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number
};

Header.defaultProps = {
  date: new Date(),
  getPrevMonth: null,
  getNextMonth: null,
  toggleDateView: null,
  locale: 'en-US',
  weekStartsOn: 1
};
export default Header;
