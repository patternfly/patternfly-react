---
id: Calendar month
section: components
cssPrefix: pf-c-calendar-month
propComponents: ['CalendarMonth']
beta: true
---

import { CalendarMonth } from '@patternfly/react-datetime';

Note: CalendarMonth lives in its own package at [@patternfly/react-datetime](https://www.npmjs.com/package/@patternfly/react-datetime) and uses format strings from [date-fns@^2.0.0](https://date-fns.org/docs/format).

## Examples
### Date selected
```js
import React from 'react';
import { CalendarMonth } from '@patternfly/react-datetime';

SelectableCalendarMonth = () => {
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const [date, setDate] = React.useState(nextWeek);
  
  return (
    <React.Fragment>
      <pre>Selected date: {date.toString()}</pre>
      <CalendarMonth date={date} onChange={setDate} />
    </React.Fragment>
  );
}
```
