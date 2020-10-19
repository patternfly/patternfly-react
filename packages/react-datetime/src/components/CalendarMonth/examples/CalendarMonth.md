---
id: Calendar month
section: components
# cssPrefix: pf-c-calendar-month
propComponents: ['CalendarMonth', 'Locales']
beta: true
---

import { CalendarMonth } from '@patternfly/react-datetime';

## Examples
### Basic
```js
import React from 'react';
import { CalendarMonth } from '@patternfly/react-datetime';

BasicCalendarMonth = (
  <CalendarMonth onChange={newDate => console.log('Clicked', newDate)} />
);
```

### Selectable
```js
import React from 'react';
import { CalendarMonth } from '@patternfly/react-datetime';

SelectableCalendarMonth = () => {
  const [date, setDate] = React.useState(new Date());
  
  return (
    <React.Fragment>
      <pre>Selected date: {date.toString()}</pre>
      <CalendarMonth date={date} onChange={setDate} />
    </React.Fragment>
  );
}
```
