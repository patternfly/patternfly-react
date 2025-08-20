---
id: Form control
section: components
subsection: forms
cssPrefix: pf-v6-c-form-control
---## Examples

### Input

**Note:** In webkit browsers, inputs with status icons that are autocompleted will have their icons removed by the user agent stylesheet. If the field does not need to use autocomplete, turn it off with `autocomplete="off"` to avoid the problem. Otherwise, use [helper text](/components/helper-text/html-demos)  instead to ensure that the status will remain visible if the field is autocompleted.

```html
<span class="pf-v6-c-form-control">
  <input
    type="text"
    value="Standard"
    id="input-standard"
    aria-label="Standard input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control">
  <input
    type="text"
    placeholder="Placeholder"
    id="input-placeholder"
    aria-label="Placeholder input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-readonly">
  <input
    readonly
    type="text"
    value="Readonly"
    id="input-readonly"
    aria-label="Readonly input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-readonly pf-m-plain">
  <input
    readonly
    type="text"
    value="Readonly plain"
    id="input-readonly-plain"
    aria-label="Readonly plain input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-disabled">
  <input
    disabled
    type="text"
    value="Disabled"
    id="input-disabled"
    aria-label="Disabled input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-success">
  <input
    type="text"
    value="Success"
    id="input-success"
    aria-label="Success state input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-warning">
  <input
    type="text"
    value="Warning"
    id="input-warning"
    aria-label="Warning state input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-error">
  <input
    required
    type="text"
    value="Error"
    id="input-error"
    aria-invalid="true"
    aria-label="Error state input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-expanded">
  <input
    type="text"
    value="Expanded"
    id="input-expanded"
    aria-label="Expanded input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-icon">
  <input
    type="text"
    value="Calendar"
    id="input-calendar"
    name="input-calendar"
    aria-label="Calendar input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon">
      <i class="fas fa-calendar" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-warning pf-m-icon">
  <input
    type="text"
    value="Clock (invalid)"
    id="input-clock"
    name="input-clock"
    aria-label="Clock input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon">
      <i class="fas fa-clock" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-icon">
  <input
    type="text"
    value="Custom icon"
    id="input-custom-icon"
    name="custom-icon"
    aria-label="Custom icon input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </span>
  </span>
</span>

```

### Select

```html
<span class="pf-v6-c-form-control pf-m-placeholder">
  <select
    class
    id="select-selectable-placeholder"
    name="select-selectable-placeholder"
    aria-label="Selectable placeholder select example"
  >
    <option value selected>Selectable placeholder</option>
    <option value="Mr">Mr</option>
    <option value="Miss">Miss</option>
    <option value="Mrs">Mrs</option>
    <option value="Ms">Ms</option>
    <option value="Dr">Dr</option>
    <option value="Dr" disabled>Disabled option</option>
    <option value="Other">Other</option>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-placeholder">
  <select
    class
    id="select-non-selectable-placeholder"
    name="select-non-selectable-placeholder"
    aria-label="Non-selectable placeholder select example"
  >
    <option value selected disabled>Non-selectable placeholder</option>
    <option value="Mr">Mr</option>
    <option value="Miss">Miss</option>
    <option value="Mrs">Mrs</option>
    <option value="Ms">Ms</option>
    <option value="Dr">Dr</option>
    <option value="Other">Other</option>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control">
  <select
    class
    id="select-group"
    name="select-group"
    aria-label="Select group example"
  >
    <optgroup label="Group 1">
      <option value="Option 1">The first option</option>
      <option value="Option 2" selected>Option groups (second option selected)</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="Option 3">The third option</option>
      <option value="Option 4" disabled>The fourth option (disabled)</option>
    </optgroup>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-success">
  <select
    class
    id="select-group-success"
    name="select-group-success"
    aria-label="Success state select group example"
  >
    <option value>Valid option</option>
    <optgroup label="Group 1">
      <option value="Option 1">The first option</option>
      <option value="Option 2">The second option</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="Option 3">The third option</option>
      <option value="Option 4">The fourth option</option>
    </optgroup>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-form-control__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-warning">
  <select
    class
    id="select-group-warning"
    name="select-group-warning"
    aria-label="Warning state select group example"
  >
    <option value>Warning option</option>
    <optgroup label="Group 1">
      <option value="Option 1">The first option</option>
      <option value="Option 2">The second option</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="Option 3">The third option</option>
      <option value="Option 4">The fourth option</option>
    </optgroup>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-form-control__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-error">
  <select
    class
    required
    aria-invalid="true"
    id="select-group-error"
    name="select-group-error"
    aria-label="Error state select group example"
  >
    <option value>Invalid option</option>
    <optgroup label="Group 1">
      <option value="Option 1">The first option</option>
      <option value="Option 2">The second option</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="Option 3">The third option</option>
      <option value="Option 4">The fourth option</option>
    </optgroup>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-form-control__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-disabled pf-m-placeholder">
  <select
    class
    disabled
    id="select-disabled"
    name="select-disabled"
    aria-label="Disabled select example"
  >
    <option value selected>Disabled</option>
    <option value="Mr">Mr</option>
    <option value="Miss">Miss</option>
    <option value="Mrs">Mrs</option>
    <option value="Ms">Ms</option>
    <option value="Dr">Dr</option>
    <option value="Other">Other</option>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </span>
</span>

```

### Textarea

```html
<span class="pf-v6-c-form-control pf-m-textarea">
  <textarea
    name="textarea-standard"
    id="textarea-standard"
    aria-label="Standard textarea example"
  >Standard
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-readonly pf-m-textarea">
  <textarea
    readonly
    name="textarea-readonly"
    id="textarea-readonly"
    aria-label="Readonly textarea example"
  >Readonly
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-readonly pf-m-plain pf-m-textarea">
  <textarea
    readonly
    name="textarea-readonly-plain"
    id="textarea-readonly-plain"
    aria-label="Readonly plain textarea example"
  >Readonly plain
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-disabled pf-m-textarea">
  <textarea
    disabled
    name="textarea-disabled"
    id="textarea-disabled"
    aria-label="Disabled textarea example"
  >Disabled
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-success pf-m-textarea">
  <textarea
    name="textarea-success"
    id="textarea-success"
    aria-label="Success state textarea example"
  >Success
</textarea>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-warning pf-m-textarea">
  <textarea
    name="textarea-warning"
    id="textarea-warning"
    aria-label="Warning state textarea example"
  >Warning
</textarea>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-error pf-m-textarea">
  <textarea
    required
    name="textarea-error"
    id="textarea-error"
    aria-label="Error state textarea example"
    aria-invalid="true"
  >Error
</textarea>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-vertical">
  <textarea
    name="textarea-resize-vertical"
    id="textarea-resize-vertical"
    aria-label="Resize vertical textarea example"
  >Resizes vertically
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-horizontal">
  <textarea
    name="textarea-resize-horizontal"
    id="textarea-resize-horizontal"
    aria-label="Resize horizontal textarea example"
  >Resizes horizontally
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-both">
  <textarea
    name="textarea-resize-both"
    id="textarea-resize-both"
    aria-label="Resize both textarea example"
  >Resizes in both directions
</textarea>
</span>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `id` | `.pf-v6-c-form-control > input`,`.pf-v6-c-form-control > select`, or `.pf-v6-c-form-control > textarea` | Provides an `id` value that can be used with the `for` attribute on an associated `<label>` element to provide an accessible label for the form control element.
| `aria-invalid="true"` | `.pf-v6-c-form-control > input`,`.pf-v6-c-form-control > select`, or `.pf-v6-c-form-control > textarea` | Indicates that the form control is in the error state and applies error state styling. Use with `.pf-m-error` on the `.pf-v6-c-form-control` to ensure correct styling. |
| `aria-label="descriptive text"` | `.pf-v6-c-form-control > input`,`.pf-v6-c-form-control > select`, or `.pf-v6-c-form-control > textarea` | Provides an accessible label for assistive technology. |
| `aria-expanded="true"` | `.pf-v6-c-form-control > input` | Indicates that clicking in the form control has toggled something else to be expanded. Use with `.pf-m-expanded` on the `.pf-v6-c-form-control` to ensure correct styling. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-form-control` | `<span>` |  Initiates a container for an input, text area or select. For styling of checkboxes or radios see the [checkbox component](/components/forms/checkbox) or [radio component](/components/forms/radio). **Required**  |
| `.pf-v6-c-form-control__utilities` | `<span>` |  Initiates a container for elements like icons to be associated with the form control.  |
| `.pf-v6-c-form-control__icon` | `<span>` |  Creates a container for an icon associated with a form control.  |
| `.pf-v6-c-form-control__toggle-icon` | `<span>` |  Initiates a toggle icon for a form select.  |
| `.pf-m-resize-vertical` | `.pf-v6-c-form-control` | Modifies a form control element containing a text area so it can only be resized vertically. |
| `.pf-m-resize-horizontal` | `.pf-v6-c-form-control` | Modifies a form control element containing a text area so it can only be resized horizontally. |
| `.pf-m-resize-both` | `.pf-v6-c-form-control` | Modifies a `.pf-v6-c-form-control` element containing a text area so it resizes in both directions. |
| `.pf-m-icon` | `.pf-v6-c-form-control` | Modifies a form control to allow for an icon. |
| `.pf-m-readonly` | `.pf-v6-c-form-control` | Modifies a form control for a readonly input, text area, or select.|
| `.pf-m-disabled` | `.pf-v6-c-form-control` | Modifies a form control for a disabled input, text area, or select.|
| `.pf-m-success` | `.pf-v6-c-form-control` | Modifies a form control for the success state. |
| `.pf-m-warning` | `.pf-v6-c-form-control` | Modifies a form control for the warning state. |
| `.pf-m-error` | `.pf-v6-c-form-control` | Modifies a form control for the error (invalid) state. |
| `.pf-m-expanded` | `.pf-v6-c-form-control` | Modifies a form control for the expanded state. This is used when clicking in the text input toggles something open/closed. |
| `.pf-m-placeholder` | `.pf-v6-c-form-control` | Modifies a form select for placeholder styles. This modifier is set programatically based on the chosen option. |
| `.pf-m-plain` | `.pf-v6-c-form-control` | Modifies a form control containing an `<input>` or `<textarea>` with a `readonly` attribute to be presented as normal text. |
| `.pf-m-status`| `.pf-v6-c-form-control__icon` | Modifies a form control icon to show status. |
