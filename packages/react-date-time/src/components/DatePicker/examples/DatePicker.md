---
id: Date picker
section: components
cssPrefix: pf-c-date-picker
propComponents: ['DatePicker', 'DatePickerLocales']
beta: true
---

import { DatePicker } from '@patternfly/react-date-time';

## Examples
### Basic
```js
import React from 'react';
import { DatePicker } from '@patternfly/react-date-time';

SimpleDatePicker = () => (
  <React.Fragment>
    <DatePicker value="03/05/2020"/>
    <br />
    <br />
    <DatePicker minDate="03/16/2020" maxDate="03/20/2020"/>
    <br />
    <br />
    <DatePicker 
      locale="fr" 
      dateFormat="DD.MM.YYYY" 
      placeholder='jj.mm.aaaa'
      invalidFormatErrorMessage='Cette date est invalide.'
      dateOutOfRangeErrorMessage='Cette date dépasse la limite, que ce soit en borne inférieure ou supérieure.'
      beforeMinDateErrorMessage='Cette date est antérieure à la première date valide.'
      afterEndDateErrorMessage='Cette date est postérieure à la dernière date valide.'
    />
  </React.Fragment>
);
```
