---
id: Label
section: components
cssPrefix: pf-c-label
propComponents: ['Label']
---

import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import { Link } from '@reach/router';

## Examples

### Filled

```js
import React from 'react';
import { Label } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

<React.Fragment>
  <Label>Grey</Label> <Label icon={<InfoCircleIcon />}>Grey icon</Label>{' '}
  <Label onClose={Function.prototype}>Grey removable</Label>{' '}
  <Label icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Grey icon removable
  </Label>{' '}
  <Label href="#filled">Grey link</Label>{' '}
  <Label href="#filled" onClose={Function.prototype}>
    Grey link removable
  </Label>
  <Label icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Grey label with icon that overflows
  </Label>
  <br />
  <br />
  <Label color="blue">Blue</Label>{' '}
  <Label color="blue" icon={<InfoCircleIcon />}>
    Blue icon
  </Label>{' '}
  <Label color="blue" onClose={Function.prototype}>
    Blue removable
  </Label>{' '}
  <Label color="blue" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Blue icon removable
  </Label>{' '}
  <Label color="blue" href="#filled">
    Blue link
  </Label>{' '}
  <Label color="blue" href="#filled" onClose={Function.prototype}>
    Blue link removable
  </Label>
  <Label color="blue" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Blue label with icon that overflows
  </Label>
  <br />
  <br />
  <Label color="green">Green</Label>{' '}
  <Label color="green" icon={<InfoCircleIcon />}>
    Green icon
  </Label>{' '}
  <Label color="green" onClose={Function.prototype}>
    Green removable
  </Label>{' '}
  <Label color="green" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Green icon removable
  </Label>{' '}
  <Label color="green" href="#filled">
    Green link
  </Label>{' '}
  <Label color="green" href="#filled" onClose={Function.prototype}>
    Green link removable
  </Label>
  <Label color="green" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Green label with icon that overflows
  </Label>
  <br />
  <br />
  <Label color="orange">Orange</Label>{' '}
  <Label color="orange" icon={<InfoCircleIcon />}>
    Orange icon
  </Label>{' '}
  <Label color="orange" onClose={Function.prototype}>
    Orange removable
  </Label>{' '}
  <Label color="orange" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Orange icon removable
  </Label>{' '}
  <Label color="orange" href="#filled">
    Orange link
  </Label>{' '}
  <Label color="orange" href="#filled" onClose={Function.prototype}>
    Orange link removable
  </Label>
  <Label color="orange" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Orange label with icon that overflows
  </Label>
  <br />
  <br />
  <Label color="red">Red</Label>{' '}
  <Label color="red" icon={<InfoCircleIcon />}>
    Red icon
  </Label>{' '}
  <Label color="red" onClose={Function.prototype}>
    Red removable
  </Label>{' '}
  <Label color="red" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Red icon removable
  </Label>{' '}
  <Label color="red" href="#filled">
    Red link
  </Label>{' '}
  <Label color="red" href="#filled" onClose={Function.prototype}>
    Red link removable
  </Label>
  <Label color="red" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Red label with icon that overflows
  </Label>
  <br />
  <br />
  <Label color="purple">Purple</Label>{' '}
  <Label color="purple" icon={<InfoCircleIcon />}>
    Purple icon
  </Label>{' '}
  <Label color="purple" onClose={Function.prototype}>
    Purple removable
  </Label>{' '}
  <Label color="purple" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Purple icon removable
  </Label>{' '}
  <Label color="purple" href="#filled">
    Purple link
  </Label>{' '}
  <Label color="purple" href="#filled" onClose={Function.prototype}>
    Purple link removable
  </Label>
  <Label color="purple" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Purple label with icon that overflows
  </Label>
  <br />
  <br />
  <Label color="cyan">Cyan</Label>{' '}
  <Label color="cyan" icon={<InfoCircleIcon />}>
    Cyan icon
  </Label>{' '}
  <Label color="cyan" onClose={Function.prototype}>
    Cyan removable
  </Label>{' '}
  <Label color="cyan" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Cyan icon removable
  </Label>{' '}
  <Label color="cyan" href="#filled">
    Cyan link
  </Label>{' '}
  <Label color="cyan" href="#filled" onClose={Function.prototype}>
    Cyan link removable
  </Label>
  <Label color="cyan" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Cyan label with icon that overflows
  </Label>
</React.Fragment>;
```

### Outline

```js
import React from 'react';
import { Label } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

<React.Fragment>
  <Label variant="outline">Grey</Label>{' '}
  <Label variant="outline" icon={<InfoCircleIcon />}>
    Grey icon
  </Label>{' '}
  <Label variant="outline" onClose={Function.prototype}>
    Grey removable
  </Label>{' '}
  <Label variant="outline" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Grey icon removable
  </Label>{' '}
  <Label variant="outline" href="#outline">
    Grey link
  </Label>{' '}
  <Label variant="outline" href="#outline" onClose={Function.prototype}>
    Grey link removable
  </Label>
  <Label variant="outline" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Grey label with icon that overflows
  </Label>
  <br />
  <br />
  <Label variant="outline" color="blue">
    Blue
  </Label>{' '}
  <Label variant="outline" color="blue" icon={<InfoCircleIcon />}>
    Blue icon
  </Label>{' '}
  <Label variant="outline" color="blue" onClose={Function.prototype}>
    Blue removable
  </Label>{' '}
  <Label variant="outline" color="blue" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Blue icon removable
  </Label>{' '}
  <Label variant="outline" color="blue" href="#outline">
    Blue link
  </Label>{' '}
  <Label variant="outline" color="blue" href="#outline" onClose={Function.prototype}>
    Blue link removable
  </Label>
  <Label variant="outline" color="blue" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Blue label with icon that overflows
  </Label>
  <br />
  <br />
  <Label variant="outline" color="green">
    Green
  </Label>{' '}
  <Label variant="outline" color="green" icon={<InfoCircleIcon />}>
    Green icon
  </Label>{' '}
  <Label variant="outline" color="green" onClose={Function.prototype}>
    Green removable
  </Label>{' '}
  <Label variant="outline" color="green" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Green icon removable
  </Label>{' '}
  <Label variant="outline" color="green" href="#outline">
    Green link
  </Label>{' '}
  <Label variant="outline" color="green" href="#outline" onClose={Function.prototype}>
    Green link removable
  </Label>
  <Label variant="outline" color="green" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Green label with icon that overflows
  </Label>
  <br />
  <br />
  <Label variant="outline" color="orange">
    Orange
  </Label>{' '}
  <Label variant="outline" color="orange" icon={<InfoCircleIcon />}>
    Orange icon
  </Label>{' '}
  <Label variant="outline" color="orange" onClose={Function.prototype}>
    Orange removable
  </Label>{' '}
  <Label variant="outline" color="orange" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Orange icon removable
  </Label>{' '}
  <Label variant="outline" color="orange" href="#outline">
    Orange link
  </Label>{' '}
  <Label variant="outline" color="orange" href="#outline" onClose={Function.prototype}>
    Orange link removable
  </Label>
  <Label variant="outline" color="orange" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Orange label with icon that overflows
  </Label>
  <br />
  <br />
  <Label variant="outline" color="red">
    Red
  </Label>{' '}
  <Label variant="outline" color="red" icon={<InfoCircleIcon />}>
    Red icon
  </Label>{' '}
  <Label variant="outline" color="red" onClose={Function.prototype}>
    Red removable
  </Label>{' '}
  <Label variant="outline" color="red" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Red icon removable
  </Label>{' '}
  <Label variant="outline" color="red" href="#outline">
    Red link
  </Label>{' '}
  <Label variant="outline" color="red" href="#outline" onClose={Function.prototype}>
    Red link removable
  </Label>
  <Label variant="outline" color="red" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Red label with icon that overflows
  </Label>
  <br />
  <br />
  <Label variant="outline" color="purple">
    Purple
  </Label>{' '}
  <Label variant="outline" color="purple" icon={<InfoCircleIcon />}>
    Purple icon
  </Label>{' '}
  <Label variant="outline" color="purple" onClose={Function.prototype}>
    Purple removable
  </Label>{' '}
  <Label variant="outline" color="purple" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Purple icon removable
  </Label>{' '}
  <Label variant="outline" color="purple" href="#outline">
    Purple link
  </Label>{' '}
  <Label variant="outline" color="purple" href="#outline" onClose={Function.prototype}>
    Purple link removable
  </Label>
  <Label variant="outline" color="purple" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Purple label with icon that overflows
  </Label>
  <br />
  <br />
  <Label variant="outline" color="cyan">
    Cyan
  </Label>{' '}
  <Label variant="outline" color="cyan" icon={<InfoCircleIcon />}>
    Cyan icon
  </Label>{' '}
  <Label variant="outline" color="cyan" onClose={Function.prototype}>
    Cyan removable
  </Label>{' '}
  <Label variant="outline" color="cyan" icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Cyan icon removable
  </Label>{' '}
  <Label variant="outline" color="cyan" href="#outline">
    Cyan link
  </Label>{' '}
  <Label variant="outline" color="cyan" href="#outline" onClose={Function.prototype}>
    Cyan link removable
  </Label>
  <Label variant="outline" color="cyan" icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Cyan label with icon that overflows
  </Label>
</React.Fragment>;
```

### Compact

```js
import React from 'react';
import { Label } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

<React.Fragment>
  <Label isCompact>Grey</Label>{' '}
  <Label isCompact icon={<InfoCircleIcon />}>
    Compact icon
  </Label>{' '}
  <Label isCompact onClose={Function.prototype}>
    Compact removable
  </Label>{' '}
  <Label isCompact icon={<InfoCircleIcon />} onClose={Function.prototype}>
    Compact icon removable
  </Label>{' '}
  <Label isCompact href="#outline">
    Compact link
  </Label>{' '}
  <Label isCompact href="#outline" onClose={Function.prototype}>
    Compact link removable
  </Label>
  <Label isCompact icon={<InfoCircleIcon />} onClose={Function.prototype} isTruncated>
    Compact label with icon that overflows
  </Label>
</React.Fragment>;
```

### Router link

```js
import React from 'react';
import { Label } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import { Link } from '@reach/router';

<Label
  color="blue"
  icon={<InfoCircleIcon />}
  onClose={Function.prototype}
  isTruncated
  render={({ className, content, componentRef }) => (
    <Link to="/" className={className} innerRef={componentRef}>
      {content}
    </Link>
  )}
>
  Blue label router link with icon that overflows
</Label>;
```

### Editable

Click or press either enter or space to begin editing a label. After editing, click outside the label or press enter again to complete the edit. To cancel an edit, press escape. 

You can also customize any Label's close button aria-label as this example shows with `closeBtnAriaLabel`.

```js file="LabelEditable.tsx" isBeta 
```
