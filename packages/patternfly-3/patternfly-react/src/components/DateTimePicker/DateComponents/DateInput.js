import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { addMonths } from './helpers';
import MonthView from './MonthView';
import YearView from './YearView';
import DecadeView from './DecadeView';

class DateInput extends React.Component {
  state = {
    selectedDate: new Date(this.props.date),
    date: new Date(this.props.date),
    typeOfDateInput: this.props.typeOfDateInput
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    const nextDate = new Date(nextProps.date);
    const prevDate = new Date(prevState.selectedDate);
    const nextType = new Date(nextProps.date);
    return Date.parse(nextDate) === Date.parse(prevDate)
      ? null
      : {
          selectedDate: nextDate,
          date: nextDate,
          typeOfDateInput: nextType
        };
  }
  getPrevMonth = () => {
    const { date } = this.state;
    this.setState({ date: addMonths(date, -1) });
  };
  getNextMonth = () => {
    const { date } = this.state;
    this.setState({ date: addMonths(date, 1) });
  };
  setSelected = day => {
    this.setState({
      selectedDate: day,
      date: day
    });
    this.props.setSelected(day);
  };
  toggleDateView = (type = null) => {
    this.setState({
      typeOfDateInput: type
    });
  };
  getDateViewByType = type => {
    const { date, weekStartsOn, locale, setSelected } = this.props;
    const parsedDate = Date.parse(date) ? date : new Date();
    switch (type) {
      case 'D':
        return <DecadeView date={parsedDate} setSelected={setSelected} toggleDateView={this.toggleDateView} />;
      case 'Y':
        return (
          <YearView date={parsedDate} setSelected={setSelected} locale={locale} toggleDateView={this.toggleDateView} />
        );
      default:
        return (
          <MonthView
            date={parsedDate}
            setSelected={setSelected}
            locale={locale}
            weekStartsOn={weekStartsOn}
            toggleDateView={this.toggleDateView}
          />
        );
    }
  };
  render() {
    const { className } = this.props;
    const { typeOfDateInput } = this.state;
    return <div className={classNames('datepicker', className)}>{this.getDateViewByType(typeOfDateInput)}</div>;
  }
}

DateInput.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setSelected: PropTypes.func,
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  className: PropTypes.string,
  typeOfDateInput: PropTypes.string
};

DateInput.defaultProps = {
  setSelected: null,
  date: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  className: '',
  typeOfDateInput: 'M'
};
export default DateInput;
