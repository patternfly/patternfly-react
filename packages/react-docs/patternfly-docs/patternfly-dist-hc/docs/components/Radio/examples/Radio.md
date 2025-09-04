---
id: Radio
section: components
subsection: forms
cssPrefix: pf-v6-c-radio
---## Examples

### Basic

```html
<div class="pf-v6-c-radio" id="radio-basic-example">
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    id="radio-basic-example-input"
    name="radio-basic-example-input"
  />
  <label
    class="pf-v6-c-radio__label"
    for="radio-basic-example-input"
  >Basic radio</label>
</div>

```

### Checked

```html
<div class="pf-v6-c-radio" id="radio-checked-example">
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    id="radio-checked-example-input"
    name="radio-checked-example-input"
    checked
  />
  <label
    class="pf-v6-c-radio__label"
    for="radio-checked-example-input"
  >Radio checked</label>
</div>

```

### Label wrapping input

```html
<label
  class="pf-v6-c-radio"
  id="radio-label-wrapping-input-example"
  for="radio-label-wrapping-input-example-input"
>
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    id="radio-label-wrapping-input-example-input"
    name="radio-label-wrapping-input-example-input"
  />
  <span class="pf-v6-c-radio__label">Radio label wraps input</span>
</label>

```

### Reversed

```html
<div class="pf-v6-c-radio" id="radio-reversed-example">
  <label
    class="pf-v6-c-radio__label"
    for="radio-reversed-example-input"
  >Radio reversed</label>
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    id="radio-reversed-example-input"
    name="radio-reversed-example-input"
  />
</div>

```

### Disabled

```html
<div class="pf-v6-c-radio" id="radio-disabled-example">
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    id="radio-disabled-example-input"
    name="radio-disabled-example-input"
    disabled
  />
  <label
    class="pf-v6-c-radio__label pf-m-disabled"
    for="radio-disabled-example-input"
  >Radio disabled</label>
</div>
<div class="pf-v6-c-radio" id="radio-disabled-checked-example">
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    id="radio-disabled-checked-example-input"
    name="radio-disabled-checked-example-input"
    checked
    disabled
  />
  <label
    class="pf-v6-c-radio__label pf-m-disabled"
    for="radio-disabled-checked-example-input"
  >Radio disabled checked</label>
</div>

```

### With description

```html
<div class="pf-v6-c-radio" id="radio-with-description-exmaple">
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    aria-describedby="radio-with-description-exmaple-description"
    id="radio-with-description-exmaple-input"
    name="radio-with-description-exmaple-input"
  />
  <label
    class="pf-v6-c-radio__label"
    for="radio-with-description-exmaple-input"
  >Radio with description</label>
  <span
    class="pf-v6-c-radio__description"
    id="radio-with-description-exmaple-description"
  >Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</span>
</div>

```

### With body

```html
<div class="pf-v6-c-radio" id="radio-with-body-example">
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    id="radio-with-body-example-input"
    name="radio-with-body-example-input"
  />
  <label
    class="pf-v6-c-radio__label"
    for="radio-with-body-example-input"
  >Radio with body</label>
  <span class="pf-v6-c-radio__body">This is where custom content goes.</span>
</div>

```

### With description and body

```html
<div class="pf-v6-c-radio" id="radio-with-description-body-example">
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    aria-describedby="radio-with-description-body-example-description"
    id="radio-with-description-body-example-input"
    name="radio-with-description-body-example-input"
  />
  <label
    class="pf-v6-c-radio__label"
    for="radio-with-description-body-example-input"
  >Radio with description and body</label>
  <span
    class="pf-v6-c-radio__description"
    id="radio-with-description-body-example-description"
  >Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</span>
  <span class="pf-v6-c-radio__body">This is where custom content goes.</span>
</div>

```

### Standalone input

```html
<label class="pf-v6-c-radio pf-m-standalone" id="radio-standalon-input-example">
  <input
    class="pf-v6-c-radio__input"
    type="radio"
    id="radio-standalon-input-example-input"
    name="radio-standalon-input-example-input"
    aria-label="Standalone radio"
  />
</label>

```

## Documentation

### Overview

The Radio component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `<input type="radio">` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |
| `aria-describedby` | `.pf-v6-c-radio__input` |  When using `.pf-v6-c-radio__description` make use of this on the input. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-radio` | `<div>`, `<label>` |  Initiates the radio component. **Required**  |
| `.pf-v6-c-radio__input` | `<input type="radio">` |  Initiates a radio input. **Required**  |
| `.pf-v6-c-radio__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-v6-c-radio__description` | `<span>` | Initiates a radio description. |
| `.pf-v6-c-radio__body` | `<span>` | Initiates a radio body. |
| `.pf-m-standalone` | `.pf-v6-c-radio` |  Modifies the radio component for use with a standalone `<input type="radio">`. **Required when there is no label** |
| `.pf-m-disabled` | `.pf-v6-c-radio__label` |  Modifies the radio component for the disabled state. **Required when input is disabled** |
