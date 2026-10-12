---
id: Code editor
section: components
cssPrefix: pf-v6-c-code-editor
propComponents: ['CodeEditor', 'CodeEditorControl', 'Popover']
---

Note: Code editor lives in its own package at [@rh-felt/react-code-editor](https://www.npmjs.com/package/@rh-felt/react-code-editor) and has [**required peer deps**](https://github.com/patternfly/patternfly-react/blob/main/packages/react-code-editor/package.json).

import { Fragment, useState } from 'react';
import { CodeEditor, CodeEditorControl, Language } from '@rh-felt/react-code-editor';
import RhUiSettingsFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-settings-fill-icon';
import HashtagIcon from '@rh-felt/react-icons/dist/esm/icons/hashtag-icon';
import MapIcon from '@rh-felt/react-icons/dist/esm/icons/map-icon';
import RhUiDarkModeFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-dark-mode-fill-icon';
import RhUiPlayFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-play-fill-icon';
import FontIcon from '@rh-felt/react-icons/dist/esm/icons/font-icon';
import AdjustIcon from '@rh-felt/react-icons/dist/esm/icons/adjust-icon';

## Examples

### Basic

```ts file="./CodeEditorBasic.tsx"

```

### With sizeToFit height, height will grow/shrink with content

```ts file="./CodeEditorSizeToFit.tsx"

```

### With isFullHeight height, height will match the size of the parent

```ts file="CodeEditorFullHeight.tsx"

```

### With shortcut menu and main header content

These examples below are the shortcuts that we recommend describing in the popover since they are monaco features.

```ts file="./CodeEditorShortcutMainHeader.tsx"

```

### With actions

```ts file="./CodeEditorWithActions.tsx"

```

### With custom control

```ts file="CodeEditorCustomControl.tsx"

```

### With configuration modal

```ts file="CodeEditorConfigurationModal.tsx"

```
