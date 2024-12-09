---
id: Login page
section: components
cssPrefix: pf-v6-c-login
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
    'LoginMainFooterLinksItem'
  ]
---

import brandImg from '../../assets/PF-IconLogo.svg';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import GoogleIcon from '@patternfly/react-icons/dist/esm/icons/google-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import DropboxIcon from '@patternfly/react-icons/dist/esm/icons/dropbox-icon';
import FacebookSquareIcon from '@patternfly/react-icons/dist/esm/icons/facebook-square-icon';
import GitlabIcon from '@patternfly/react-icons/dist/esm/icons/gitlab-icon';

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
