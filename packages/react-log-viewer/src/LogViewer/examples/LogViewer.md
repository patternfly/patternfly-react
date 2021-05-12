---
id: Log viewer
beta: true
section: components
propComponents: [LogViewer, LogViewerSearch]
---

import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
import { bigData } from './bigTestData.js';
import { data } from './realTestData.js';

## Examples

### Basic

```js
import React from 'react';
import { data } from './data/realTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';

<LogViewer hasLineNumbers={false} height={300} />;
```

### With search

```js
import React from 'react';
import { data } from './realTestData';
import { bigData } from './bigTestData.js';
import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
import { Toolbar, ToolbarContent, ToolbarItem, ToolbarGroup } from '@patternfly/react-core';

BasicLogViewer = () => {
  return (
    <LogViewer
      data={data.data}
      toolbar={
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <LogViewerSearch placeholder="Search value" />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      }
    />
  );
};
```

### With complex toolbar

```js
import React from 'react';
import { data } from './realTestData';
import { bigData } from './bigTestData.js';
import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
import { Toolbar, ToolbarContent, ToolbarItem, ToolbarGroup, Button } from '@patternfly/react-core';

CustomControlLogViewer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dataSourceTitles = ['Source 1', 'Source 2'];
  const dataSourcesAmount = 2;
  const currentDataSource = React.useState(0);

  const onActionClick = event => {
    console.log('clicked test action button');
  };

  const onPrintClick = event => {
    console.log('clicked console print button');
  };

  return (
    <LogViewer
      data={data.data}
      toolbar={
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <Button onClick={onActionClick} variant="control">
                Test Action
              </Button>
            </ToolbarItem>
            <ToolbarItem>
              <LogViewerSearch placeholder="Search" />
            </ToolbarItem>
            <ToolbarItem>
              <Button onClick={onPrintClick} variant="control">
                Print to Console
              </Button>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      }
    />
  );
};
```
