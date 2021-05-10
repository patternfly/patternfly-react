---
id: Log viewer
beta: true
section: components
propComponents: [LogViewer, LogViewerCustomControl]
---

import { LogViewer, LogViewerCustomControl } from '@patternfly/react-log-viewer';

import { bigData } from './bigTestData.js';

import { data } from './realTestData.js';

## Examples
### Basic log-viewer
```js
import React from 'react';
import { data } from './data/realTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';

<LogViewer hasLineNumbers={false} hasToolbar={false} height={300}/>
```

### Log-viewer with toolbar and data
```js
import React from 'react';
import { data } from './realTestData';
import { bigData } from './bigTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';

BasicLogViewer = () => {
  return(
    <React.Fragment>
      <LogViewer data={data.data} />
    </React.Fragment>
  );  
};
```

### Log-viewer with custom button
```js
import React from 'react';
import { data } from './realTestData';
import { bigData } from './bigTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';
import { LogViewerCustomControl } from '@patternfly/react-log-viewer';
import { Dropdown, DropdownItem, DropdownToggle } from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';

CustomControlLogViewer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dataSourceTitles = ['Source 1', 'Source 2'];
  const dataSourcesAmount = 2;
  const currentDataSource = React.useState(0);

  const onClickExample = (event, value) => {
    console.log('MY VALUE', value); //eslint-disable-line
  };

  const customControls = (
    <LogViewerCustomControl onClick={onClickExample}>Print to Console</LogViewerCustomControl>
  );

  return(
    <React.Fragment>
      <LogViewer data={data.data} customControls={customControls} />
    </React.Fragment>
  );  
};

```