---
id: Spinner
section: components
cssPrefix: pf-v6-c-spinner
---## Examples

### Basic

```html
<svg
  class="pf-v6-c-spinner"
  role="progressbar"
  viewBox="0 0 100 100"
  aria-label="Loading..."
>
  <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
</svg>

```

### Sizes

```html
<svg
  class="pf-v6-c-spinner pf-m-xs"
  role="progressbar"
  viewBox="0 0 100 100"
  aria-label="Loading..."
>
  <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
</svg>

<svg
  class="pf-v6-c-spinner pf-m-sm"
  role="progressbar"
  viewBox="0 0 100 100"
  aria-label="Loading..."
>
  <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
</svg>

<svg
  class="pf-v6-c-spinner pf-m-md"
  role="progressbar"
  viewBox="0 0 100 100"
  aria-label="Loading..."
>
  <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
</svg>

<svg
  class="pf-v6-c-spinner pf-m-lg"
  role="progressbar"
  viewBox="0 0 100 100"
  aria-label="Loading..."
>
  <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
</svg>

<svg
  class="pf-v6-c-spinner pf-m-xl"
  role="progressbar"
  viewBox="0 0 100 100"
  aria-label="Loading..."
>
  <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
</svg>

```

### Inline

An inline spinner inherits its font-size, so its size will match the content around it.

```html
<svg
  class="pf-v6-c-spinner pf-m-inline"
  role="progressbar"
  viewBox="0 0 100 100"
  aria-label="Loading..."
>
  <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
</svg>

```

### Custom size

```html
<svg
  class="pf-v6-c-spinner"
  role="progressbar"
  viewBox="0 0 100 100"
  aria-label="Loading..."
  style="--pf-v6-c-spinner--diameter: 80px;"
>
  <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
</svg>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="progressbar"` | `.pf-v6-c-spinner` | Indicates to assistive technologies that this is an indeterminate progress indicator. |
| `aria-label="Loading..."` | `.pf-v6-c-spinner` | Provides an accessible name for the spinner. **Note: one of `aria-label` or `aria-labelledby` is required.** |
| `aria-labelledby="[id of spinner label]"` | `.pf-v6-c-spinner` | Gives the spinner an accessible name by referring to the element that labels the spinner. |
| `aria-describedby="[id of spinner description]"` | `.pf-v6-c-spinner` | Gives the spinner an accessible description by referring to the element that describes the spinner. |

Note: If the spinner is showing that loading of a particular region of a page is in process, the author should use `aria-describedby` to point to the status, and set the `aria-busy` attribute to `true` on the region until it is finished loading.

Note: A [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) must be present before changing its status in order for the change to be read.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-spinner` | `<svg>` |  Creates a spinner component. The default is an extra large spinner. **Required**|
| `.pf-v6-c-spinner__path` | `<circle>` |  Creates a spinner circle component. **Required**|
| `--pf-v6-c-spinner--diameter` | `.pf-v6-c-spinner` | Modifies the value for `--pf-v6-c-spinner--diameter` declaration. |

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-xs` | `.pf-v6-c-spinner` |  Creates a extra-small spinner. |
| `.pf-m-sm` | `.pf-v6-c-spinner` |  Creates a small spinner. |
| `.pf-m-md` | `.pf-v6-c-spinner` |  Creates a medium spinner. |
| `.pf-m-lg` | `.pf-v6-c-spinner` |  Creates a large spinner. |
| `.pf-m-xl` | `.pf-v6-c-spinner` |  Creates an extra-large spinner. |
| `.pf-m-inline` | `.pf-v6-c-spinner` |  Creates an inline spinner. |
