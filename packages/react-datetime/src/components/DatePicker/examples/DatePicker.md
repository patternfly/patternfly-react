---
id: Date picker
section: components
cssPrefix: pf-c-date-picker
propComponents: ['DatePicker']
beta: true
---

import { DatePicker, Locales } from '@patternfly/react-datetime';

Note: DatePicker lives in its own package at [@patternfly/react-datetime](https://www.npmjs.com/package/@patternfly/react-datetime) and uses format strings from [date-fns@^2.0.0](https://date-fns.org/docs/format).

## Examples
### Basic
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-datetime';

<DatePicker value="03/05/2020" />
```

### Helper text
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-datetime';

<DatePicker value="03/05/2020" helperText="Select a date." />
```

### Min and max date
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-datetime';

<DatePicker minDate="03/16/2020" maxDate="03/20/2020"/>
```

### French

```js
import React from 'react';
import { DatePicker, Locales } from '@patternfly/react-datetime';

<DatePicker 
  locale={Locales.fr}
  dateFormat="dd.MM.yyyy" 
  placeholder="jj.mm.aaaa"
  invalidFormatErrorMessage="Cette date est invalide."
  dateOutOfRangeErrorMessage="Cette date dépasse la limite, que ce soit en borne inférieure ou supérieure."
  beforeMinDateErrorMessage="Cette date est antérieure à la première date valide."
  afterEndDateErrorMessage="Cette date est postérieure à la dernière date valide."
/>
```
