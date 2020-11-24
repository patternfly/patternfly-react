---
id: Calendar month
section: components
cssPrefix: pf-c-calendar-month
propComponents: ['CalendarMonth', 'CalendarFormat']
beta: true
---

import { CalendarMonth } from '@patternfly/react-datetime';

Note: CalendarMonth lives in its own package at [@patternfly/react-datetime](https://www.npmjs.com/package/@patternfly/react-datetime).

## Examples

### Default
```js
import React from 'react';
import { CalendarMonth } from '@patternfly/react-datetime';

<CalendarMonth />
```

### Selectable date
```js
import React from 'react';
import { CalendarMonth } from '@patternfly/react-datetime';

SelectableCalendarMonth = () => {
  const [date, setDate] = React.useState(new Date(2020, 10, 24));
  
  return (
    <React.Fragment>
      <pre>Selected date: {date.toString()}</pre>
      <CalendarMonth date={date} onChange={setDate} />
    </React.Fragment>
  );
}
```

