---
id: Modal
section: components
cssPrefix: pf-v6-c-modal-box
propComponents: ['Modal', 'ModalBody', 'ModalHeader', 'ModalFooter']
ouia: true
---

import WarningTriangleIcon from '@patternfly/react-icons/dist/esm/icons/warning-triangle-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import formStyles from '@patternfly/react-styles/css/components/Form/form';

## Examples

### Basic modals

Basic modals give users the option to either confirm or cancel an action. 

To flag an open modal, use the `isOpen` property. To execute a callback when a modal is closed, use the `onClose` property.

The `<ModalBody>`, `<ModalHeader>`, and `<ModalFooter>` components are not required, but are typically used to display the main content of the modal, modal title, and any button actions, respectively.

```ts file="./ModalBasic.tsx"

```

### Scrollable modals

To enable keyboard-accessible scrolling of a modal’s content, pass `tabIndex={0}` to the `<ModalBody>`.

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

In the following example, you can display each modal size option. To launch a modal with a specific size, first select the respective radio button, followed by the "Show modal" button.

```ts file="./ModalSize.tsx"

```

### Custom width

To choose a specific width for a modal, use the `width` property. The following example has a `width` of "50%".

```ts file="./ModalCustomWidth.tsx"

```

### Custom header

To add a custom header to a modal, your custom content must be passed as a child of the `<ModalHeader>` component. Do not pass the `title` property to `<ModalHeader>` when using a custom header. 

```ts file="./ModalCustomHeader.tsx"

```

### No header or footer

To exclusively present information in a modal, remove the header and/or footer.

When a modal has no header or footer, make sure to add an `aria-label` explicitly stating this, so that those using assistive technologies can understand this context.

```ts file="./ModalNoHeaderFooter.tsx"

```

### Title icon

To add an icon before a modal’s title, use the `titleIconVariant` property, which can be set to a "success", "danger", "warning", or "info" variant. The following example uses a "warning" variant.

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

To present a menu of actions or links to a user, you can add a [dropdown](/components/menus/dropdown) to a modal. 

To allow the dropdown to visually break out of the modal container, set the `menuAppendTo` property to “parent”. Handle the modal’s closing behavior by listening to the `onEscapePress` callback on the `<Modal>` component. This allows the "escape" key to collapse the dropdown without closing the entire modal.

```ts file="./ModalWithDropdown.tsx"

```

### With help

To help simplify and explain complex models, add a help [popover](/components/popover). Only place a help icon at the modal level if its information applies to all content in the modal. If the help popover is specific to a particular modal section, place the help icon beside that section instead.

```ts file="./ModalWithHelp.tsx"

```

### With form

To collect user input within a modal, you can add a [form](/components/forms/form).

To enable form submission from a button in the modal's footer (outside of the `<Form>`), set the button's `form` property equal to the form's id.

```ts file="ModalWithForm.tsx"

```

### Custom focus

To customize which element inside the modal receives focus when initially opened, use the `elementToFocus` property`. 

```ts file="./ModalCustomFocus.tsx"

```
