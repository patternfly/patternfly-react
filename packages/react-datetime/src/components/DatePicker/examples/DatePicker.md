---
id: Date picker
section: components
cssPrefix: pf-c-date-picker
propComponents: ['DatePicker']
beta: true
---

import { DatePicker } from '@patternfly/react-datetime';

Note: DatePicker lives in its own package at [@patternfly/react-datetime](https://www.npmjs.com/package/@patternfly/react-datetime).

## Examples
### Basic
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-datetime';

<DatePicker value="2020-03-05" onChange={(str, date) => console.log('onChange', str, date)} />
```

### Helper text
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-datetime';

<DatePicker value="2020-03-05" helperText="Use the calendar button to select a date." />
```

### Min and max date
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-datetime';

MinMaxDate = () => {
  const minDate = new Date(2020, 2, 16);
  const maxDate = new Date(2020, 2, 20);
  const rangeValidator = date => {
    if (date < minDate) {
      return 'Date is before the allowable range.';
    }
    else if (date > maxDate) {
      return 'Date is after the allowable range.';
    }

    return '';
  };
  return <DatePicker value="2020-03-17" validators={[rangeValidator]} />;
}
```

### French

```js
import React from 'react';
import { DatePicker } from '@patternfly/react-datetime';

FrenchMinMaxDate = () => {
  const minDate = new Date(2020, 2, 16);
  const maxDate = new Date(2020, 2, 20);
  const rangeValidator = date => {
    if (date < minDate) {
      return 'Cette date est antérieure à la première date valide.';
    }
    else if (date > maxDate) {
      return 'Cette date est postérieure à la dernière date valide.';
    }

    return '';
  };
  return (
    <DatePicker
      value="2020-03-17"
      validators={[rangeValidator]}
      placeholder="aaaa-mm-jj"
      invalidFormatText="Cette date est invalide."
      locale="fr"
      weekStart={1}
    />
  );
}
```
