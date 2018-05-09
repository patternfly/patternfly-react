# @patternfly/react-codemods

_PatternFly React codemods are currently experimental only. These may be useful in the future after package namespaces are changed for PatternFly Next._

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) that help update Patternfly React projects.

## Setup & Run

1.  `yarn global add jscodeshift`
2.  `yarn install @patternfly/react-codemods`
3.  `jscodeshift -t node_modules/@patternfly/react-codemods/transforms/[transform].js [files]`
    * `path` - files or directory to transform;
    * use the `-d` option for a dry-run and use `-p` to print the output for comparison;
    * use the `--extensions` option if your files have different extensions than `.js` (for example, `--extensions js,jsx`);
    * if you use flowtype, you might also need to use `--parser=flow`;
    * see all available [jscodeshift options](https://github.com/facebook/jscodeshift#usage-cli).
4.  Review changes via git diff. Keep what you want, throw it out if you don't. Magic!

## Included Scripts

### `patternfly-react-to-react-core`

Converts imports of `patternfly-react` to compatible `@patternfly/react-core`;

```sh
jscodeshift -t node_modules/@patternfly/react-codemods/transforms/patternfly-react-to-react-core.js <path>
```

#### Before

```jsx
import { Button, Alert } from 'patternfly-react';
```

#### After

```jsx
import { Button, Alert } from '@patternfly/react-core';
```
