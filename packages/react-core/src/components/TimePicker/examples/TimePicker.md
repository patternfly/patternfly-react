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
import { TimePicker } from '@patternfly/react-datetime';

SimpleTimePicker = () => {
  const onChange = (time) => {
    // console.log(time);
  };
  
  return (
    <React.Fragment>
        <TimePicker defaultTime="3:35pm" onChange={onChange}/>
      </React.Fragment>
  );
}
```

### Basic 24 hour
```js
import React from 'react';
import { TimePicker } from '@patternfly/react-datetime';

<TimePicker defaultTime="2020-10-14T18:06:02Z" variant="24hr" />

```
### Custom delimiter
```js
import React from 'react';
import { TimePicker } from '@patternfly/react-datetime';

<TimePicker defaultTime="2020-10-14T18:06:02Z" variant="24hr" delimiter="h"/>

```
