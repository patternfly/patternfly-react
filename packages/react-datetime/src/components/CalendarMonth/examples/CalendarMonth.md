---
id: Calendar month
section: components
cssPrefix: pf-c-calendar-month
propComponents: ['CalendarMonth']
beta: true
---

import { CalendarMonth } from '@patternfly/react-datetime';

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
