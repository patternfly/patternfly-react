---
id: Log viewer
beta: true
section: extensions
propComponents: [LogViewer, LogViewerSearch]
---

import { LogViewer, LogViewerSearch, LogViewerContext } from '@patternfly/react-log-viewer';
import { Button, Checkbox, Toolbar, ToolbarContent, ToolbarItem } from '@patternfly/react-core';
import { data } from './realTestData.js';

## Examples

### Basic

```js
import React from 'react';
import { data } from './realTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';
import { Checkbox } from '@patternfly/react-core';

BasicLogViewer = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <React.Fragment>
      <Checkbox
        label="Dark theme"
        isChecked={isDarkTheme}
        onChange={setIsDarkTheme}
        aria-label="toggle dark theme checkbox"
        id="toggle-dark-theme"
        name="toggle-dark-theme"
      />
      <LogViewer hasLineNumbers={false} height={300} data={data.data} theme={isDarkTheme ? 'dark' : 'light'} />
    </React.Fragment>
  );
};
```

### With line number chars specified

```js
import React from 'react';
import { data } from './realTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';

LineNumberCharsSpecifiedLogViewer = () => {
  return (
    <LogViewer
      data={data.data}
      initialIndexWidth={7}
    />
  );
};
```

### With search

```js
import React from 'react';
import { data } from './realTestData';
import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
import { Toolbar, ToolbarContent, ToolbarItem } from '@patternfly/react-core';

BasicSearchLogViewer = () => {
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
import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
import { Toolbar, ToolbarContent, ToolbarItem, Button, Checkbox } from '@patternfly/react-core';

CustomControlLogViewer = () => {
  const [isTextWrapped, setIsTextWrapped] = React.useState(false);
  const onActionClick = event => {
    console.log('clicked test action button');
  };

  const onPrintClick = event => {
    console.log('clicked console print button');
  };

  return (
    <LogViewer
      data={data.data}
      isTextWrapped={isTextWrapped}
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
            <ToolbarItem>
              <Checkbox label="Wrap text" aria-label="wrap text checkbox" isChecked={isTextWrapped} id="wrap-text-checkbox" onChange={setIsTextWrapped} />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      }
    />
  );
};
```

### With header component

```js
import React from 'react';
import { data } from './realTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';
import { Banner } from '@patternfly/react-core';

HeaderComponentLogViewer = () => {
  return (
    <LogViewer
      hasLineNumbers={false}
      height={300}
      data={data.data}
      theme="dark"
      header={<Banner>5019 lines</Banner>}
    />
  );
};
```

### With footer component

```js
import React from 'react';
import { data } from './realTestData.js';
import { LogViewer, LogViewerContext } from '@patternfly/react-log-viewer';
import { Button } from '@patternfly/react-core';

FooterComponentLogViewer = () => {
  const logViewerRef = React.useRef();
  const FooterButton = () => {
    const handleClick = e => {
      logViewerRef.current.scrollToBottom();
    };
    return <Button onClick={handleClick}>Jump to the bottom</Button>;
  };

  return (
    <LogViewer
      ref={logViewerRef}
      hasLineNumbers={false}
      height={300}
      data={data.data}
      theme="dark"
      footer={<FooterButton />}
    />
  );
};
```

### With ANSI color logs

```js
import React from 'react';
import { data } from './realTestData.js';
import { LogViewer } from '@patternfly/react-log-viewer';

FooterComponentLogViewer = () => {
  return (
    <LogViewer
      hasLineNumbers={false}
      height={300}
      data={data.data4}
      theme="dark"
    />
  );
};
```