---
id: Login page
section: components
cssPrefix: pf-c-login
propComponents:
  [
    'LoginPage',
    'Login',
    'LoginForm',
    'LoginMainBody',
    'LoginMainHeader',
    'LoginHeader',
    'LoginFooter',
    'LoginMainFooter',
    'LoginFooterItem',
    'LoginMainFooterBandItem',
    'LoginMainFooterLinksItem',
  ]
---

import brandImg2 from './brandImgColor2.svg';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

## Examples
### Basic
```ts file='./LoginPageBasic.tsx' isFullscreen
```

### Show/hide password
```ts file='./LoginPageShowHidePassword.tsx' isFullscreen
```

### Customizing the header utilities

`headerUtilities` is a prop that can be customized to allow components to be placed into the header of the login page, likely for the user to take an action. The following example demonstrates the use of a Select component to display a list a languages.

### With header utilities
```ts file='./LoginPageLanguageSelect.tsx' isFullscreen
```