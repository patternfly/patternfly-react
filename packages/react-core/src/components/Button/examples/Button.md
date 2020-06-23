---
title: 'Button'
section: components
cssPrefix: 'pf-c-button'
typescript: true
propComponents: ['Button']
ouia: true
---

import { Button, Tooltip } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon, ExternalLinkSquareAltIcon, CopyIcon } from '@patternfly/react-icons';

## Examples

```js title=Variations
import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon, ExternalLinkSquareAltIcon, CopyIcon } from '@patternfly/react-icons';

ButtonVariants = () => (
  <React.Fragment>
    <Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="tertiary">Tertiary</Button> <Button variant="danger">Danger</Button><br /><br />
    <Button variant="link" icon={<PlusCircleIcon />}>
      Link
    </Button>{' '}
    <Button variant="link" icon={<ExternalLinkSquareAltIcon />} iconPosition="right">
      Link
    </Button>
    <Button variant="link" isInline>
      Inline link
    </Button><br /><br />
    <Button variant="plain" aria-label="Action">
      <TimesIcon />
    </Button><br /><br />
    <Button variant="control">Control</Button>{' '}
    <Button variant="control" aria-label="Copy">
      <CopyIcon />
    </Button>
  </React.Fragment>
);
```

```js title=Disabled
import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon, Tooltip } from '@patternfly/react-icons';

DisabledBtn = () => (
  <React.Fragment>
    <Button isDisabled>
      Primary disabled
    </Button>{' '}
    <Button isDisabled>
      Secondary disabled
    </Button>{' '}
    <Button isDisabled variant="tertiary">Tertiary disabled</Button>{' '}
    <Button isDisabled variant="danger">Danger disabled</Button><br /><br />
    <Button isDisabled variant="link" icon={<PlusCircleIcon />}>
      Link disabled
    </Button>{' '}
    <Button isDisabled variant="link" isInline>
      Inline link disabled
    </Button>{' '}
    <Button isDisabled variant="plain" aria-label="Action">
      <TimesIcon />
    </Button>{' '}
    <Button isDisabled variant="control">Control disabled</Button>
  </React.Fragment>
);
```

```js title=Aria-disabled
import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon, Tooltip } from '@patternfly/react-icons';

AriaDisabledBtn = () => (
  <React.Fragment>
    <Button isAriaDisabled>
      Primary aria disabled
    </Button>{' '}
    <Button isAriaDisabled>
      Secondary aria disabled
    </Button>{' '}
    <Button isAriaDisabled variant="tertiary">Tertiary aria disabled</Button>{' '}
    <Button isAriaDisabled variant="danger">Danger aria disabled</Button><br /><br />
    <Button isAriaDisabled variant="link" icon={<PlusCircleIcon />}>
      Link aria disabled
    </Button>{' '}
    <Button isAriaDisabled variant="link" isInline>
      Inline link aria disabled
    </Button>{' '}
    <Button isAriaDisabled variant="plain" aria-label="Action">
      <TimesIcon />
    </Button>{' '}
    <Button isAriaDisabled variant="control">Control aria disabled</Button>
  </React.Fragment>
);
```

```js title=Aria-disabled-button-with-tooltip
import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon, Tooltip } from '@patternfly/react-icons';

AriaDisabledBtnWithTooltip = () => (
  <Tooltip content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.">
    <Button isAriaDisabled variant="secondary">
      Secondary button to core docs
    </Button>
  </Tooltip>
);
```

```js title=Aria-disabled-link-as-button-with-tooltip
import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon, PlusCircleIcon, Tooltip } from '@patternfly/react-icons';

AriaDisabledLinkBtnWithTooltip = () => (
  <Tooltip content="Aria-disabled link as button with tooltip">
    <Button component="a" isAriaDisabled href="https://pf4.patternfly.org/" target="_blank" variant="tertiary">
      Tertiary link as button to core docs
    </Button>
  </Tooltip>
);
```

```js title=Links-as-button
import React from 'react';
import { Button } from '@patternfly/react-core';

LinkButton = () => (
  <React.Fragment>
    <Button component="a" href="https://pf4.patternfly.org/" target="_blank" variant="primary">
      Link to core docs
    </Button>{' '}
    <Button component="a" href="https://pf4.patternfly.org/" target="_blank" variant="secondary">
      Secondary link to core docs
    </Button>{' '}
    <Button isDisabled component="a" href="https://pf4.patternfly.org/" target="_blank" variant="tertiary">
      Tertiary link to core docs
    </Button>{' '}
    <Button component="a" href="https://pf4.patternfly.org/contribution/#modifiers" variant="link">
      Jump to modifiers in contribution guidelines
    </Button>
  </React.Fragment>
);
```

```js title=Block-level
import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';

BlockButton = () => <Button isBlock>Block level button</Button>;
```

```js title=Types
import React from 'react';
import { Button } from '@patternfly/react-core';

ButtonTypes = () => (
  <React.Fragment>
    <Button type="submit">Submit</Button>{' '}
    <Button type="reset">Reset</Button>{' '}
    <Button>Default</Button>
  </React.Fragment>
);
```
