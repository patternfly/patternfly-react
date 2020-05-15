---
title: 'Label'
section: components
cssPrefix: 'pf-c-label'
typescript: true
propComponents: ['Label']
---

import { Label } from '@patternfly/react-core';
import { InfoCircleIcon } from '@patternfly/react-icons';

## Examples

```js title=Filled
import React from 'react';
import { Label } from '@patternfly/react-core';
import { InfoCircleIcon } from '@patternfly/react-icons';

FilledLabels = () => (
  <React.Fragment>
    <Label>Grey</Label> <Label icon={<InfoCircleIcon />}>Grey icon</Label>{' '}
    <Label onClose={Function.prototype}>Grey removeable</Label>{' '}
    <Label icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Grey icon removeable
    </Label>{' '}
    <Label href="#filled">Grey link</Label>{' '}
    <Label href="#filled" onClose={Function.prototype}>
      Grey link removeable
    </Label>
    <br />
    <br />
    <Label color="blue">Blue</Label> <Label color="blue" icon={<InfoCircleIcon />}>
      Blue icon
    </Label> <Label color="blue" onClose={Function.prototype}>
      Blue removeable
    </Label> <Label color="blue" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Blue icon removeable
    </Label> <Label color="blue" href="#filled">
      Blue link
    </Label> <Label color="blue" href="#filled" onClose={Function.prototype}>
      Blue link removeable
    </Label>
    <br />
    <br />
    <Label color="green">Green</Label>{' '}
    <Label color="green" icon={<InfoCircleIcon />}>
      Green icon
    </Label>{' '}
    <Label color="green" onClose={Function.prototype}>
      Green removeable
    </Label>{' '}
    <Label color="green" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Green icon removeable
    </Label>{' '}
    <Label color="green" href="#filled">
      Green link
    </Label>{' '}
    <Label color="green" href="#filled" onClose={Function.prototype}>
      Green link removeable
    </Label>
    <br />
    <br />
    <Label color="orange">Orange</Label> <Label color="orange" icon={<InfoCircleIcon />}>
      Orange icon
    </Label> <Label color="orange" onClose={Function.prototype}>
      Orange removeable
    </Label> <Label color="orange" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Orange icon removeable
    </Label> <Label color="orange" href="#filled">
      Orange link
    </Label> <Label color="orange" href="#filled" onClose={Function.prototype}>
      Orange link removeable
    </Label>
    <br />
    <br />
    <Label color="red">Red</Label>{' '}
    <Label color="red" icon={<InfoCircleIcon />}>
      Red icon
    </Label>{' '}
    <Label color="red" onClose={Function.prototype}>
      Red removeable
    </Label>{' '}
    <Label color="red" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Red icon removeable
    </Label>{' '}
    <Label color="red" href="#filled">
      Red link
    </Label>{' '}
    <Label color="red" href="#filled" onClose={Function.prototype}>
      Red link removeable
    </Label>
    <br />
    <br />
    <Label color="purple">Purple</Label> <Label color="purple" icon={<InfoCircleIcon />}>
      Purple icon
    </Label> <Label color="purple" onClose={Function.prototype}>
      Purple removeable
    </Label> <Label color="purple" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Purple icon removeable
    </Label> <Label color="purple" href="#filled">
      Purple link
    </Label> <Label color="purple" href="#filled" onClose={Function.prototype}>
      Purple link removeable
    </Label>
    <br />
    <br />
    <Label color="cyan">Cyan</Label>{' '}
    <Label color="cyan" icon={<InfoCircleIcon />}>
      Cyan icon
    </Label>{' '}
    <Label color="cyan" onClose={Function.prototype}>
      Cyan removeable
    </Label>{' '}
    <Label color="cyan" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Cyan icon removeable
    </Label>{' '}
    <Label color="cyan" href="#filled">
      Cyan link
    </Label>{' '}
    <Label color="cyan" href="#filled" onClose={Function.prototype}>
      Cyan link removeable
    </Label>
  </React.Fragment>
);
```

```js title=Outline
import React from 'react';
import { Label } from '@patternfly/react-core';
import { InfoCircleIcon } from '@patternfly/react-icons';

OutlinedLabels = () => (
  <React.Fragment>
    <Label variant="outline">Grey</Label>{' '}
    <Label variant="outline" icon={<InfoCircleIcon />}>
      Grey icon
    </Label>{' '}
    <Label variant="outline" onClose={Function.prototype}>
      Grey removeable
    </Label>{' '}
    <Label variant="outline" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Grey icon removeable
    </Label>{' '}
    <Label variant="outline" href="#outline">
      Grey link
    </Label>{' '}
    <Label variant="outline" href="#outline" onClose={Function.prototype}>
      Grey link removeable
    </Label>
    <br />
    <br />
    <Label variant="outline" color="blue">
      Blue
    </Label> <Label variant="outline" color="blue" icon={<InfoCircleIcon />}>
      Blue icon
    </Label> <Label variant="outline" color="blue" onClose={Function.prototype}>
      Blue removeable
    </Label> <Label variant="outline" color="blue" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Blue icon removeable
    </Label> <Label variant="outline" color="blue" href="#outline">
      Blue link
    </Label> <Label variant="outline" color="blue" href="#outline" onClose={Function.prototype}>
      Blue link removeable
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
      Green removeable
    </Label>{' '}
    <Label variant="outline" color="green" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Green icon removeable
    </Label>{' '}
    <Label variant="outline" color="green" href="#outline">
      Green link
    </Label>{' '}
    <Label variant="outline" color="green" href="#outline" onClose={Function.prototype}>
      Green link removeable
    </Label>
    <br />
    <br />
    <Label variant="outline" color="orange">
      Orange
    </Label> <Label variant="outline" color="orange" icon={<InfoCircleIcon />}>
      Orange icon
    </Label> <Label variant="outline" color="orange" onClose={Function.prototype}>
      Orange removeable
    </Label> <Label variant="outline" color="orange" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Orange icon removeable
    </Label> <Label variant="outline" color="orange" href="#outline">
      Orange link
    </Label> <Label variant="outline" color="orange" href="#outline" onClose={Function.prototype}>
      Orange link removeable
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
      Red removeable
    </Label>{' '}
    <Label variant="outline" color="red" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Red icon removeable
    </Label>{' '}
    <Label variant="outline" color="red" href="#outline">
      Red link
    </Label>{' '}
    <Label variant="outline" color="red" href="#outline" onClose={Function.prototype}>
      Red link removeable
    </Label>
    <br />
    <br />
    <Label variant="outline" color="purple">
      Purple
    </Label> <Label variant="outline" color="purple" icon={<InfoCircleIcon />}>
      Purple icon
    </Label> <Label variant="outline" color="purple" onClose={Function.prototype}>
      Purple removeable
    </Label> <Label variant="outline" color="purple" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Purple icon removeable
    </Label> <Label variant="outline" color="purple" href="#outline">
      Purple link
    </Label> <Label variant="outline" color="purple" href="#outline" onClose={Function.prototype}>
      Purple link removeable
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
      Cyan removeable
    </Label>{' '}
    <Label variant="outline" color="cyan" icon={<InfoCircleIcon />} onClose={Function.prototype}>
      Cyan icon removeable
    </Label>{' '}
    <Label variant="outline" color="cyan" href="#outline">
      Cyan link
    </Label>{' '}
    <Label variant="outline" color="cyan" href="#outline" onClose={Function.prototype}>
      Cyan link removeable
    </Label>
  </React.Fragment>
);
```
