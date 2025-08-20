---
id: Switch
section: components
cssPrefix: pf-v6-c-switch
---## Examples

### Basic

```html
<label class="pf-v6-c-switch" for="switch-with-label-1">
  <input
    class="pf-v6-c-switch__input"
    type="checkbox"
    role="switch"
    id="switch-with-label-1"
    aria-labelledby="switch-with-label-1-text"
    checked
  />

  <span class="pf-v6-c-switch__toggle"></span>

  <span
    class="pf-v6-c-switch__label"
    id="switch-with-label-1-text"
    aria-hidden="true"
  >Togglable option in basic example</span>
</label>

```

### Reverse (toggle on right)

```html
<label class="pf-v6-c-switch pf-m-reverse" for="switch-reverse-1">
  <input
    class="pf-v6-c-switch__input"
    type="checkbox"
    role="switch"
    id="switch-reverse-1"
    aria-labelledby="switch-reverse-1-text"
    checked
  />

  <span class="pf-v6-c-switch__toggle"></span>

  <span
    class="pf-v6-c-switch__label pf-m-on"
    id="switch-reverse-1-text"
    aria-hidden="true"
  >Togglable option in reverse example</span>
</label>

```

### Label and check icon

```html
<label class="pf-v6-c-switch" for="switch-label-check-1">
  <input
    class="pf-v6-c-switch__input"
    type="checkbox"
    role="switch"
    id="switch-label-check-1"
    aria-labelledby="switch-label-check-1-text"
    checked
  />

  <span class="pf-v6-c-switch__toggle">
    <span class="pf-v6-c-switch__toggle-icon">
      <i class="fas fa-check" aria-hidden="true"></i>
    </span>
  </span>
  <span
    class="pf-v6-c-switch__label pf-m-on"
    id="switch-label-check-1-text"
    aria-hidden="true"
  >Togglable option in check icon example</span>
</label>

```

### Without visible text label

```html
<label class="pf-v6-c-switch" for="switch-with-icon-1">
  <input
    class="pf-v6-c-switch__input"
    type="checkbox"
    role="switch"
    id="switch-with-icon-1"
    aria-label="Togglable option in no text label example"
    checked
  />

  <span class="pf-v6-c-switch__toggle">
    <span class="pf-v6-c-switch__toggle-icon">
      <i class="fas fa-check" aria-hidden="true"></i>
    </span>
  </span>
</label>

```

### Disabled

```html
<label class="pf-v6-c-switch" for="switch-disabled-1">
  <input
    class="pf-v6-c-switch__input"
    type="checkbox"
    role="switch"
    id="switch-disabled-1"
    aria-labelledby="switch-disabled-1-text"
    disabled
    checked
  />

  <span class="pf-v6-c-switch__toggle"></span>

  <span
    class="pf-v6-c-switch__label"
    id="switch-disabled-1-text"
    aria-hidden="true"
  >Togglable option in disabled example</span>
</label>

<br />
<br />
<label class="pf-v6-c-switch" for="switch-disabled-2">
  <input
    class="pf-v6-c-switch__input"
    type="checkbox"
    role="switch"
    id="switch-disabled-2"
    aria-labelledby="switch-disabled-2-text"
    disabled
  />

  <span class="pf-v6-c-switch__toggle"></span>

  <span
    class="pf-v6-c-switch__label"
    id="switch-disabled-2-text"
    aria-hidden="true"
  >Togglable option in basic example</span>
</label>

<br />
<br />
<label class="pf-v6-c-switch" for="switch-with-icon-disabled-1">
  <input
    class="pf-v6-c-switch__input"
    type="checkbox"
    role="switch"
    id="switch-with-icon-disabled-1"
    aria-label="Togglable option in disabled icon example"
    disabled
    checked
  />

  <span class="pf-v6-c-switch__toggle">
    <span class="pf-v6-c-switch__toggle-icon">
      <i class="fas fa-check" aria-hidden="true"></i>
    </span>
  </span>
</label>

<br />
<br />
<label class="pf-v6-c-switch" for="switch-with-icon-disabled-2">
  <input
    class="pf-v6-c-switch__input"
    type="checkbox"
    role="switch"
    id="switch-with-icon-disabled-2"
    aria-label="Togglable option in disabled icon example"
    disabled
  />
  <span class="pf-v6-c-switch__toggle">
    <span class="pf-v6-c-switch__toggle-icon">
      <i class="fas fa-check" aria-hidden="true"></i>
    </span>
  </span>
</label>

```

## Documentation

### Overview

A switch is an alternative to the checkbox component.

Use a switch when your user needs to perform instantaneous actions without confirmation.

Use checkbox if your user has to perform additional steps for changes to become effective.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-labelledby="..."` or `aria-label="..."` | `.pf-v6-c-switch__input` | Indicates the behavior of the switch. This label should never dynamically change, and should always describe the behavior of the switch when its checked state is true. If an additional text label is included with the switch besides `.pf-v6-c-switch__label`, then `aria-labelledby` can reference the `id` of this text, but it must be in addition to the text of `.pf-v6-c-switch__label`. If there is no visible text label provided, then an `aria-label` must be provided. **Required** |
| `for` | `<label>` | Each `<label>` must have a `for` attribute that matches its input id. **Required** |
| `id` | `<input type="checkbox">` | Each `<input>` must have an `id` attribute that matches its label's `for` value. **Required** |
| `role="switch"` | `<input type="checkbox">` | Exposes the element as a switch for assistive technologies. **Required** |
| `id` | `.pf-v6-c-switch__label` | Each `.pf-v6-c-switch__label` must have an `id` attribute that matches the `aria-labelledby` on `.pf-v6-c-switch__input`. |
| `checked` | `.pf-v6-c-switch__input` |  Indicates that the input is checked |
| `disabled` | `.pf-v6-c-switch__input` |  Indicates that the input is disabled |
| `aria-hidden="true"` | `.pf-v6-c-switch__label` | Hides the text from the screen reader. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-switch` | `<label>` |  Initiates a switch. **Required**  |
| `.pf-v6-c-switch__input` | `<input type="checkbox">` |  Hide the checkbox inside the switch. **Required**  |
| `.pf-v6-c-switch__toggle` | `<span>` |  Initiates the toggle inside the switch. **Required**  |
| `.pf-v6-c-switch__toggle-icon` | `<span>` | Initiates the switch toggle icon wrapper. **Required when the switch is used without a label** |
| `.pf-v6-c-switch__label` | `<span>` |  Initiates a label inside the switch. |
| `.pf-m-reverse` | `.pf-v6-c-switch` | Positions the switch toggle to the right of the label. |
