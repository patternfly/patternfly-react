---
id: Time picker
section: components
cssPrefix: pf-c-time-picker
propComponents: ['TimePicker']
beta: true
---

import { TimePicker } from '@patternfly/react-core';

## Examples
### Basic 12 hour
```js
import React from 'react';
import { TimePicker } from '@patternfly/react-core';

SimpleTimePicker = () => {
  const onChange = (time, hour, minute, isValid) => {
    console.log("time", time);
    console.log("hour", hour);
    console.log("minute", minute);
    console.log("isValid", isValid);
  };
  
  return <TimePicker time="3:35 AM" onChange={onChange}/>;
}
```

### Basic 24 hour
```js
import React from 'react';
import { TimePicker } from '@patternfly/react-core';

<TimePicker time="2020-10-14T18:06:02Z" is24Hour />
```

### Custom delimiter
```js
import React from 'react';
import { TimePicker } from '@patternfly/react-core';

<TimePicker is24Hour delimiter="h" placeholder=""/>
```
