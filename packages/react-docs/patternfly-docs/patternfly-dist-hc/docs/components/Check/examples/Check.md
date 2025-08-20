---
id: Checkbox
section: components
subsection: forms
cssPrefix: pf-v6-c-check
---## Examples

### Basic

```html
<div class="pf-v6-c-check">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="basic-example-example-input"
    name="basic-example-example-input"
  />
  <label class="pf-v6-c-check__label" for="basic-example-example-input">Check</label>
</div>

```

### Required

```html
<div class="pf-v6-c-check">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="check-required-example-input"
    name="check-required-example-input"
  />
  <label class="pf-v6-c-check__label" for="check-required-example-input">
    Check
    <span class="pf-v6-c-check__label-required" aria-hidden="true">&#42;</span>
  </label>
</div>

```

### Checked

```html
<div class="pf-v6-c-check">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="check-checked-example-input"
    name="check-checked-example-input"
    checked
  />
  <label
    class="pf-v6-c-check__label"
    for="check-checked-example-input"
  >Check checked</label>
</div>

```

### Label wrapping input

```html
<label class="pf-v6-c-check" for="check-label-wrapping-input-example-input">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="check-label-wrapping-input-example-input"
    name="check-label-wrapping-input-example-input"
  />
  <span class="pf-v6-c-check__label">Check label wraps input</span>
</label>

```

### Reversed

```html
<div class="pf-v6-c-check">
  <label
    class="pf-v6-c-check__label"
    for="check-reversed-example-input"
  >Check reversed</label>
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="check-reversed-example-input"
    name="check-reversed-example-input"
  />
</div>

```

### Disabled

```html
<div class="pf-v6-c-check">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="check-disabled-example-input"
    name="check-disabled-example-input"
    disabled
  />
  <label
    class="pf-v6-c-check__label pf-m-disabled"
    for="check-disabled-example-input"
  >Check disabled</label>
</div>
<div class="pf-v6-c-check">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="check-disabled-checked-example-input"
    name="check-disabled-checked-example-input"
    checked
    disabled
  />
  <label
    class="pf-v6-c-check__label pf-m-disabled"
    for="check-disabled-checked-example-input"
  >Check disabled checked</label>
</div>

```

### With description

```html
<div class="pf-v6-c-check">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    aria-describedby="check-with-example-description-example-description"
    id="check-with-example-description-example-input"
    name="check-with-example-description-example-input"
  />
  <label
    class="pf-v6-c-check__label"
    for="check-with-example-description-example-input"
  >Check with description</label>
  <span
    class="pf-v6-c-check__description"
    id="check-with-example-description-example-description"
  >Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</span>
</div>

```

### With body

```html
<div class="pf-v6-c-check">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="check-with-example-body-example-input"
    name="check-with-example-body-example-input"
  />
  <label
    class="pf-v6-c-check__label"
    for="check-with-example-body-example-input"
  >Check with body</label>
  <span class="pf-v6-c-check__body">This is where custom content goes.</span>
</div>

```

### With description and body

```html
<div class="pf-v6-c-check">
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    aria-describedby="check-with-example-description-body-example-description"
    id="check-with-example-description-body-example-input"
    name="check-with-example-description-body-example-input"
  />
  <label
    class="pf-v6-c-check__label"
    for="check-with-example-description-body-example-input"
  >Check with description and body</label>
  <span
    class="pf-v6-c-check__description"
    id="check-with-example-description-body-example-description"
  >Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</span>
  <span class="pf-v6-c-check__body">This is where custom content goes.</span>
</div>

```

### Standalone input

```html
<label
  class="pf-v6-c-check pf-m-standalone"
  for="standalone-input-example-input"
>
  <input
    class="pf-v6-c-check__input"
    type="checkbox"
    id="standalone-input-example-input"
    name="standalone-input-example-input"
    aria-label="Standalone check"
  />
</label>

```

## Documentation

### Overview

The Check component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `.pf-v6-c-check__input` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |
| `required` | `.pf-v6-c-check__input` | Indicates that the element is required. |
| `aria-describedby` | `.pf-v6-c-check__input` |  When using `.pf-v6-c-check__description` make use of this on the input. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-check` | `<div>`, `<label>` |  Initiates the check component. **Required**  |
| `.pf-v6-c-check__input` | `<input type="checkbox">` |  Initiates a check input. **Required**  |
| `.pf-v6-c-check__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-v6-c-check__label-required` | `<span>` |  Initiates a required indicator. |
| `.pf-v6-c-check__description` | `<span>` |  Initiates a check description. |
| `.pf-v6-c-check__body` | `<span>` |  Initiates a check body. |
| `.pf-m-standalone` | `.pf-v6-c-check` |  Modifies the check component for use with a standalone `<input type="checkbox">`. **Required when there is no label** |
| `.pf-m-disabled` | `.pf-v6-c-check__label` |  Modifies the check component for the disabled state. **Required when input is disabled** |
