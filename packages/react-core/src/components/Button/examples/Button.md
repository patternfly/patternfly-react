---
id: Button
section: components
cssPrefix: pf-c-button
propComponents: ['Button']
ouia: true
---

import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';

## Examples

### Variations
```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';

ButtonVariants = () => (
  <React.Fragment>
    <Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="tertiary">Tertiary</Button> <Button variant="danger">Danger</Button>{' '}
    <Button variant="warning">Warning</Button><br /><br />
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

### Disabled
```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import Tooltip from '@patternfly/react-icons/dist/js/icons/tooltip';

DisabledBtn = () => (
  <React.Fragment>
    <Button isDisabled>
      Primary disabled
    </Button>{' '}
    <Button isDisabled>
      Secondary disabled
    </Button>{' '}
    <Button isDisabled variant="tertiary">Tertiary disabled</Button>{' '}
    <Button isDisabled variant="danger">Danger disabled</Button>{' '}
    <Button isDisabled variant="warning">Warning disabled</Button><br /><br />
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

### Aria disabled
```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import Tooltip from '@patternfly/react-icons/dist/js/icons/tooltip';

AriaDisabledBtn = () => (
  <React.Fragment>
    <Button isAriaDisabled>
      Primary aria disabled
    </Button>{' '}
    <Button isAriaDisabled>
      Secondary aria disabled
    </Button>{' '}
    <Button isAriaDisabled variant="tertiary">Tertiary aria disabled</Button>{' '}
    <Button isAriaDisabled variant="danger">Danger disabled</Button>{' '}
    <Button isAriaDisabled variant="warning">Warning disabled</Button><br /><br />
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

### Aria disabled button with tooltip
```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import Tooltip from '@patternfly/react-icons/dist/js/icons/tooltip';

AriaDisabledBtnWithTooltip = () => (
  <Tooltip content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.">
    <Button isAriaDisabled variant="secondary">
      Secondary button to core docs
    </Button>
  </Tooltip>
);
```

### Aria disabled link as button with tooltip
```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import Tooltip from '@patternfly/react-icons/dist/js/icons/tooltip';

AriaDisabledLinkBtnWithTooltip = () => (
  <Tooltip content="Aria-disabled link as button with tooltip">
    <Button component="a" isAriaDisabled href="https://pf4.patternfly.org/" target="_blank" variant="tertiary">
      Tertiary link as button to core docs
    </Button>
  </Tooltip>
);
```

### Links as button
```js
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

### Block level
```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';

BlockButton = () => <Button isBlock>Block level button</Button>;
```

### Types
```js
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

### Small
```js
import React from 'react';
import { Button } from '@patternfly/react-core';

ButtonSmallVariants = () => (
  <React.Fragment>
    <Button variant="primary" isSmall>Primary</Button>{' '}
    <Button variant="secondary" isSmall>Secondary</Button>{' '}
    <Button variant="tertiary" isSmall>Tertiary</Button>{' '}
    <Button variant="danger" isSmall>Danger</Button>{' '}
    <Button variant="warning" isSmall>Warning</Button>
    <br /><br />
  </React.Fragment>
);
```

### Call to action
```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';

ButtonCTAVariants = () => (
  <React.Fragment>
    <Button variant="primary" isLarge>Call to action</Button>{' '}
    <Button variant="secondary" isLarge>Call to action</Button>{' '}
    <Button variant="tertiary" isLarge>Call to action</Button>{' '}
    <Button variant="link" isLarge>Call to action <ArrowRightIcon/></Button>
    <br /><br />
  </React.Fragment>
);
```

### Progress
```js
import React from 'react';
import { Button } from '@patternfly/react-core';

ButtonProgressVariants = () => {
  const [isPrimaryLoading, setIsPrimaryLoading] = React.useState(true);
  const [isSecondaryLoading, setIsSecondaryLoading] = React.useState(true);
  const extraPrimaryProps = {};
  if (isPrimaryLoading)
    extraPrimaryProps.spinnerAriaValueText = "Loading";
  const extraSecondaryProps = {};
  if (isSecondaryLoading)
    extraSecondaryProps.spinnerAriaValueText = "Loading";

  return (
    <React.Fragment>
      <Button spinnerAriaValueText={isPrimaryLoading ? "Loading" : undefined}
              isLoading={isPrimaryLoading}
              variant="primary"
              onClick={() => setIsPrimaryLoading(!isPrimaryLoading)}
              {...extraPrimaryProps}>
        {isPrimaryLoading ? 'Click to stop loading' : 'Click to start loading'}
      </Button>{' '}
      <Button spinnerAriaValueText={isSecondaryLoading ? "Loading" : undefined}
              isLoading={isSecondaryLoading}
              variant="secondary"
              onClick={() => setIsSecondaryLoading(!isSecondaryLoading)}
              {...extraSecondaryProps}>
        {isSecondaryLoading ? 'Click to stop loading' : 'Click to start loading'}
      </Button>
      <br /><br />
    </React.Fragment>
  );
};
```
