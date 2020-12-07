---
id: Date picker
section: components
cssPrefix: pf-c-date-picker
propComponents: ['DatePicker', 'CalendarFormat']
beta: true
---

## Examples
### Basic
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-core';

<DatePicker onChange={(str, date) => console.log('onChange', str, date)} />
```

### American format
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-core';

AmericanFormat = () => {
  const dateFormat = date => date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const dateParse = date => {
    const split = date.split('/');
    if (split.length !== 3) {
      return new Date();
    }
    let month = split[0];
    let day = split[1];
    let year = split[2];
    return new Date(`${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00`);
  };

  return (
    <DatePicker
      value="03/05/2020"
      placeholder="MM/dd/yyyy"
      dateFormat={dateFormat}
      dateParse={dateParse}
    />
  );
}
```

### Helper text
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-core';

<DatePicker value="2020-03-05" helperText="Use the calendar button to select a date." />
```

### Min and max date
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-core';

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
import { DatePicker, Weekday } from '@patternfly/react-core';

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
      weekStart={Weekday.Monday}
    />
  );
}
```

### Controlled

```js
import React from 'react';
import { Button, DatePicker } from '@patternfly/react-core';

ControlledDate = () => {
  const initialValue = '2020-03-17';
  const [value, setValue] = React.useState(initialValue);
  return (
    <React.Fragment>
      <Button onClick={() => setValue(initialValue)}>
        Reset date
      </Button>
      <DatePicker
        value={value}
        onChange={value => setValue(value)}
      />
    </React.Fragment>
  );
}
```
