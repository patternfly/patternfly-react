---
id: Calendar month
section: components
cssPrefix: pf-c-calendar-month
propComponents: ['CalendarMonth', 'CalendarFormat']
beta: true
---

## Examples

### Default
```js
import React from 'react';
import { CalendarMonth } from '@patternfly/react-core';

<CalendarMonth />
```

### Selectable date
```js
import React from 'react';
import { CalendarMonth } from '@patternfly/react-core';

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

