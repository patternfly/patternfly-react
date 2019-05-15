---
title: 'Button'
cssPrefix: 'pf-c-button'
---

## Block button

import { Button } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon } from '@patternfly/react-icons';

```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon } from '@patternfly/react-icons';

class BlockButton extends React.Component {
  render() {
    return <Button isBlock>Block level button</Button>;
  }
}
```

## Button variants

```js
import React from 'react';
import { Button, ButtonVariant } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon } from '@patternfly/react-icons';

class ButtonVariants extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button variant={ButtonVariant.primary}>Primary</Button>{' '}
        <Button variant={ButtonVariant.secondary}>Secondary</Button>{' '}
        <Button variant={ButtonVariant.tertiary}>Tertiary</Button>{' '}
        <Button variant={ButtonVariant.danger}>Danger</Button>{' '}
        <Button variant={ButtonVariant.link}>
          <PlusCircleIcon /> Link button
        </Button>{' '}
        <Button variant={ButtonVariant.plain} aria-label="Action">
          <TimesIcon />
        </Button>
        <Button variant={ButtonVariant.link} isInline>
          Inline Link Button
        </Button>
      </React.Fragment>
    );
  }
}
```

## Link button

```js
import React from 'react';
import { Button, ButtonVariant } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon } from '@patternfly/react-icons';

class LinkButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button component="a" href="https://pf-next.com/" target="_blank" variant={ButtonVariant.primary}>
          Link to Core Docs
        </Button>{' '}
        <Button component="a" href="https://pf-next.com/" target="_blank" variant={ButtonVariant.secondary}>
          Secondary Link to Core Docs
        </Button>{' '}
        <Button component="a" isDisabled href="https://pf-next.com/" target="_blank" variant={ButtonVariant.tertiary}>
          Tertiary Link to Core Docs
        </Button>
      </React.Fragment>
    );
  }
}
```
