import React from 'react';
import {
  compose,
  setPropTypes,
  withProps,
  defaultProps,
  renameProp
} from 'recompose';
import { DateTimePicker } from 'react-widgets';

// Setup localizer for the DatePicker via moment - default to English (en)
import momentLocalizer from 'react-widgets-moment';
momentLocalizer();

const enhance = compose(
  // RwDateTimePicker uses 'culture' instead of the more common 'locale' or
  // the 'language' used by bootstrap-datepicker
  renameProp('locale', 'culture'),

  setPropTypes({
    ...DateTimePicker.propTypes
  }),
  defaultProps({
    format: 'MM/DD/YYYY' // moment.js format patterns
  }),
  withProps({
    date: true,
    time: false
  })
);

/*
  Reference Markup on Bootstrap Datepicker...
    autoclose: true,
    todayBtn: "linked",
    todayHighlight: true

  How to...
    remove the inline open popup button?
    change the popup button icon?

 */

const DatePicker = enhance(({ className, ...props }) => (
  <DateTimePicker className={className} {...props} />
));

export default DatePicker;
