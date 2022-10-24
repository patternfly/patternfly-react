---
id: Banner
section: components
cssPrefix: pf-c-banner
propComponents: ['Banner']
---

import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

## Examples

### Basic

Banners can be styled with one of 5 different colors. A basic banner should only be used when the banner color does not represent status or severity.

```ts file="./BannerBasic.tsx"

```

### Status

When a banner is used to convey status, it is advised to pass in an icon inside the banner to convey the status in a way besides just color. The `screenReaderText` prop should also be passed in to convey the status/severity of the banner to users of certain assistive technologies such as screen readers.

In the following example, a flex layout is used inside the banner content to show one possible way to create spacing between the icons and banner text.

```ts file="./BannerStatus.tsx"

```
