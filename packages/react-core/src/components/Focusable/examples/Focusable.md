---
title: 'Focusable'
section: components
cssPrefix: 'pf-c-focusable'
typescript: true
propComponents: ['Focusable']
beta: true
---

import { Focusable, Button, Tooltip, Radio, Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import { BeerIcon } from '@patternfly/react-icons';

## Examples
```js title=Focus-text
import React from 'react';
import { Focusable } from '@patternfly/react-core';

class FocusableText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Focusable>
        This text is focusable
      </Focusable>
    );
  }
}
```

```js title=Focus-non-interactive-html-children
import React from 'react';
import { Focusable, Button } from '@patternfly/react-core';

class FocusNonInteractiveHtmlChildren extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Focusable aria-label="Example focusable article">
        <article>Article element</article>
      </Focusable>
    );
  }
}
```

```js title=Focus-non-interactive-component-children
import React from 'react';
import { Focusable, Button, Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

class FocusNonInteractiveComponentChildren extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Focusable>
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Focusable>
    );
  }
}
```

```js title=Focus-with-positive-tabindex
import React from 'react';
import { Focusable } from '@patternfly/react-core';

class FocusPositiveTabindex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Focusable tabIndex={1}>
        <button className="pf-c-button pf-m-tertiary">First focusable element on the page (example)</button>
      </Focusable>
    );
  }
}
```

```js title=Focus-an-icon
import React from 'react';
import { Focusable, Button, Tooltip } from '@patternfly/react-core';
import { BeerIcon } from '@patternfly/react-icons';

class FocusIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tooltip content="Focus on beer">
        <Focusable>
          <BeerIcon />
        </Focusable>
      </Tooltip>
    );
  }
}
```

```js title=Wrapping-disabled-button-with-tooltip
import React from 'react';
import { Focusable, Button, Tooltip } from '@patternfly/react-core';

class WrapDisabledButtonTooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tooltip content="Disabled button tooltip content">
        <Focusable withContainer component="span">
          <Button isDisabled onClick={() => {console.log('click event fired for disabled button')}}>Disabled button text</Button>
        </Focusable>
      </Tooltip>
    );
  }
}
```

```js title=Wrapping-disabled-html-button-with-tooltip
import React from 'react';
import { Focusable, Button, Tooltip } from '@patternfly/react-core';

class WrapDisabledButtonTooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tooltip content="Disabled button tooltip content">
        <Focusable withContainer component="span">
          <button disabled onClick={() => {console.log('click event fired for html disabled button')}}>Disabled button text</button>
        </Focusable>
      </Tooltip>
    );
  }
}
```

```js title=Wrapping-disabled-radio-with-tooltip
import React from 'react';
import { Focusable, Radio, Tooltip } from '@patternfly/react-core';

class WrapDisabledRadioTooltip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tooltip content="Disabled radio tooltip content">
        <Focusable withContainer>
          <Radio isDisabled label="Disabled radio with tooltip" id="disabled-radio-with-tooltip" name="radio-1" />
        </Focusable>
      </Tooltip>
    );
  }
}
```
