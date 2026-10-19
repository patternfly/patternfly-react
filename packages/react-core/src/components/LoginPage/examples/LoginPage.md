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

import { Fragment, useState } from 'react';
import brandImg from '../../assets/PF-IconLogo.svg';
import RhUiErrorFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import GoogleIcon from '@rh-felt/react-icons/dist/esm/icons/google-icon';
import GithubIcon from '@rh-felt/react-icons/dist/esm/icons/github-icon';
import DropboxIcon from '@rh-felt/react-icons/dist/esm/icons/dropbox-icon';
import FacebookSquareIcon from '@rh-felt/react-icons/dist/esm/icons/facebook-square-icon';
import GitlabIcon from '@rh-felt/react-icons/dist/esm/icons/gitlab-icon';

## Examples

### Basic

By default, a login page requires users to enter both a username and a password into their respective fields. The username must always be a required field, but you can make the password optional by passing the `isPasswordRequired` property to the `<LoginForm>`.

This example uses `brandImgProps` to pass the brand image source, alt text, and an extra class, which will be preferred over `brandImgSrc` when both are provided.
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
