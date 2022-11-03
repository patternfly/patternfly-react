---
id: Code editor
section: components
cssPrefix: pf-c-code-editor
propComponents: ['CodeEditor', 'CodeEditorControl', 'Popover']
---

Note: Code editor lives in its own package at [@patternfly/react-code-editor](https://www.npmjs.com/package/@patternfly/react-code-editor) and has [**required peer deps**](https://github.com/patternfly/patternfly-react/blob/main/packages/react-code-editor/package.json).

import { CodeEditor, CodeEditorControl, Language } from '@patternfly/react-code-editor';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

## Examples

### Basic

```ts file="./CodeEditorBasic.tsx"
```

### With sizeToFit height, height will grow/shrink with content

```ts file="./CodeEditorSizeToFit.tsx"
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
