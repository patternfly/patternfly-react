---
id: Modal
section: components
cssPrefix: pf-v5-c-modal-box
propComponents: ['Modal', 'ModalBoxBody', 'ModalBoxHeader', 'ModalBoxFooter']
ouia: true
beta: true
---

import WarningTriangleIcon from '@patternfly/react-icons/dist/esm/icons/warning-triangle-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import formStyles from '@patternfly/react-styles/css/components/Form/form';

## Examples

### Basic modals

Basic modals give users the option to either confirm or cancel an action. To flag an open modal, use the `isOpen` property. To execute a callback when a modal is closed, use the `onClose` property.

```ts file="./ModalBasic.tsx"

```

### Scrollable modals

To enable keyboard-accessible scrolling of a modal’s content, pass `tabIndex={0}` to the `<ModalBoxBody>`.

```ts file="ModalWithOverflowingContent.tsx"

```

### With a static description

To provide additional information about a modal, use the `description` property. Descriptions are static and do not scroll with other modal content.

```ts file="./ModalWithDescription.tsx"

```

### Top aligned

To override a modal's default center alignment, use the `position` property. In this example, `position` is set to "top", which moves the modal to the top of the screen.

```ts file="./ModalTopAligned.tsx"

```

### Modal sizes

To adjust the size of a modal, use the `variant` property. Modal variants include "small", "medium", "large", and "default".

The following example displays a saml. medium or large modal based on selected radio button. E.g. if you selcet the "Small variant" option, a small  modal will be rendered by passing in `variant={ModalVariant.small}`.

```ts file="./ModalSize.tsx"

```

### Custom width

To choose a specific width for a modal, use the `width` property. The following example has a `width` of "50%".

```ts file="./ModalCustomWidth.tsx"

```

### Custom header

To add a custom header to a modal, do not pass the `title` property to the `ModalBoxHeader`. Custom heade content should be passed as a child of the `ModalBoxHeader` instead.

```ts file="./ModalCustomHeader.tsx"

```

### No header or footer

When no header or footer is added to the model, make sure to add the `aria-label` prop since there is no title.

```ts file="./ModalNoHeaderFooter.tsx"

```

### Title icon

To add an icon before a modal’s title, use the `titleIconVariant`, which can be set to one of the predefined variants -- "success", "danger", "warning", "info", and "custom" -- or to an imported custom icon. The following example uses a "warning" variant.

```ts file="./ModalTitleIcon.tsx"

```

### Custom title icon

To add a custom icon before a modal’s title, set `titleIconVariant` to an imported custom icon. The following example imports and uses a bullhorn icon.

```ts file="./ModalCustomTitleIcon.tsx"

```

### With wizard

To guide users through a series of steps in a modal, you can add a [wizard](/components/wizard) to a modal. To configure the `<Wizard>`, pass an array that contains a “name” and “component” value for each step into the `steps` property.

```ts file="./ModalWithWizard.tsx"

```

### With dropdown

To present a menu of actions or links to a user, you can add a [dropdown](/components/dropdown) to a modal. To allow the dropdown to visually break out of the modal container, set the `menuAppendTo` property to “parent”. Handle the modal’s closing behavior by listening to the `onEscapePress` callback on the `<Modal>` component. This allows the "escape" key to collapse the dropdown without closing the entire modal.

```ts file="./ModalWithDropdown.tsx"

```

### With help

To help simplify and explain complex models, add a help [popover](/components/popover). Only place a help icon at the modal level if its information applies to all content in the modal. If the help popover is specific to a particular modal section, place the help icon beside that section instead.

```ts file="./ModalWithHelp.tsx"

```

### With form

To collect user input within a modal, you can add a [form](/components/form).

To submit the form from a button in the modal's footer (outside of the `<Form>`), set the button's `form` property equal to the form's id.

```ts file="ModalWithForm.tsx"

```

### Custom focus

Use the `elementToFocus` property to customize which element inside the Modal receives focus when initially opened.

```ts file="./ModalCustomFocus.tsx"

```
