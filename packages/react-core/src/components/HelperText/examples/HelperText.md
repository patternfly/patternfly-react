---
id: Helper text
section: components
cssPrefix: pf-c-helper-text
propComponents: ['HelperText', 'HelperTextItem']
---

import InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';
import QuestionIcon from '@patternfly/react-icons/dist/esm/icons/question-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import ExclamationIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-icon';

## Examples

### Static

```js
import React from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';

<React.Fragment>
  <HelperText>
    <HelperTextItem>This is default helper text</HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="indeterminate">This is indeterminate helper text</HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="warning">This is warning helper text</HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="success">This is success helper text</HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="error">This is error helper text</HelperTextItem>
  </HelperText>
</React.Fragment>;
```

### Static with default icons

```js
import React from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';
import InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';
import QuestionIcon from '@patternfly/react-icons/dist/esm/icons/question-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

<React.Fragment>
  <HelperText>
    <HelperTextItem hasIcon>This is default helper text</HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="indeterminate" hasIcon>
      This is indeterminate helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="warning" hasIcon>
      This is warning helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="success" hasIcon>
      This is success helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="error" hasIcon>
      This is error helper text
    </HelperTextItem>
  </HelperText>
</React.Fragment>;
```

### Static with custom icons

```js
import React from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';
import InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';
import QuestionIcon from '@patternfly/react-icons/dist/esm/icons/question-icon';
import ExclamationIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

<React.Fragment>
  <HelperText>
    <HelperTextItem icon={<InfoIcon />}>This is default helper text</HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="indeterminate" icon={<QuestionIcon />}>
      This is indeterminate helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="warning" icon={<ExclamationIcon />}>
      This is warning helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="success" icon={<CheckIcon />}>
      This is success helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem variant="error" icon={<TimesIcon />}>
      This is error helper text
    </HelperTextItem>
  </HelperText>
</React.Fragment>;
```

### Multiple static

```js
import React from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';

<HelperText>
  <HelperTextItem>This is default helper text</HelperTextItem>
  <HelperTextItem>This is another default helper text in the same block</HelperTextItem>
  <HelperTextItem>And this is more default text in the same block</HelperTextItem>
</HelperText>;
```

### Dynamic

```js
import React from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

<React.Fragment>
  <HelperText>
    <HelperTextItem isDynamic>This is default helper text</HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem isDynamic variant="indeterminate">
      This is indeterminate helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem isDynamic variant="warning">
      This is warning helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem isDynamic variant="success">
      This is success helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem isDynamic variant="error">
      This is error helper text
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem isDynamic variant="error" icon={<TimesIcon />}>
      This is error helper text with a custom icon
    </HelperTextItem>
  </HelperText>
  <HelperText>
    <HelperTextItem isDynamic variant="error" hasIcon={false}>
      This is error helper text with no icon
    </HelperTextItem>
  </HelperText>
</React.Fragment>;
```

### Dynamic list

```js
import React from 'react';
import { HelperText, HelperTextItem } from '@patternfly/react-core';

<HelperText component="ul">
  <HelperTextItem isDynamic variant="success" component="li">
    Must be at least 14 characters
  </HelperTextItem>
  <HelperTextItem isDynamic variant="error" component="li">
    Cannot contain any variation of the word "redhat"
  </HelperTextItem>
  <HelperTextItem isDynamic variant="success" component="li">
    Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols
  </HelperTextItem>
</HelperText>;
```
