---
id: Expandable section
section: components
cssPrefix: pf-v6-c-expandable-section
---## Examples

### Hidden

```html
<div class="pf-v6-c-expandable-section">
  <div class="pf-v6-c-expandable-section__toggle">
    <button class="pf-v6-c-button pf-m-link" type="button">
      <span class="pf-v6-c-button__icon pf-m-start">
        <span class="pf-v6-c-expandable-section__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
      <span class="pf-v6-c-button__text">Show more hidden example content</span>
    </button>
  </div>
  <div
    class="pf-v6-c-expandable-section__content"
    hidden
  >This content is visible only when the component is expanded.</div>
</div>

```

### Expanded

```html
<div class="pf-v6-c-expandable-section pf-m-expanded">
  <div class="pf-v6-c-expandable-section__toggle">
    <button class="pf-v6-c-button pf-m-link" type="button" aria-expanded>
      <span class="pf-v6-c-button__icon pf-m-start">
        <span class="pf-v6-c-expandable-section__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
      <span class="pf-v6-c-button__text">Show less expanded example content</span>
    </button>
  </div>
  <div
    class="pf-v6-c-expandable-section__content"
  >This content is visible only when the component is expanded.</div>
</div>

```

### Indented

```html
<div class="pf-v6-c-expandable-section pf-m-expanded pf-m-indented">
  <div class="pf-v6-c-expandable-section__toggle">
    <button class="pf-v6-c-button pf-m-link" type="button" aria-expanded>
      <span class="pf-v6-c-button__icon pf-m-start">
        <span class="pf-v6-c-expandable-section__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
      <span class="pf-v6-c-button__text">Show less indented example content</span>
    </button>
  </div>
  <div
    class="pf-v6-c-expandable-section__content"
  >This content is visible only when the component is expanded.</div>
</div>

```

### Disclosure variation (hidden)

```html
<div class="pf-v6-c-expandable-section pf-m-display-lg pf-m-limit-width">
  <div class="pf-v6-c-expandable-section__toggle">
    <button class="pf-v6-c-button pf-m-link" type="button">
      <span class="pf-v6-c-button__icon pf-m-start">
        <span class="pf-v6-c-expandable-section__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
      <span
        class="pf-v6-c-button__text"
      >Show more disclosure variation example content</span>
    </button>
  </div>
  <div
    class="pf-v6-c-expandable-section__content"
    hidden
  >This content is visible only when the component is expanded.</div>
</div>

```

### Disclosure variation (expanded)

```html
<div
  class="pf-v6-c-expandable-section pf-m-expanded pf-m-display-lg pf-m-limit-width"
>
  <div class="pf-v6-c-expandable-section__toggle">
    <button class="pf-v6-c-button pf-m-link" type="button" aria-expanded>
      <span class="pf-v6-c-button__icon pf-m-start">
        <span class="pf-v6-c-expandable-section__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
      <span
        class="pf-v6-c-button__text"
      >Show less disclosure variation example content</span>
    </button>
  </div>
  <div
    class="pf-v6-c-expandable-section__content"
  >This content is visible only when the component is expanded.</div>
</div>

```

### Disclosure variation (indented)

```html
<div
  class="pf-v6-c-expandable-section pf-m-expanded pf-m-display-lg pf-m-limit-width pf-m-indented"
>
  <div class="pf-v6-c-expandable-section__toggle">
    <button class="pf-v6-c-button pf-m-link" type="button" aria-expanded>
      <span class="pf-v6-c-button__icon pf-m-start">
        <span class="pf-v6-c-expandable-section__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
      <span
        class="pf-v6-c-button__text"
      >Show less disclosure variation indented example content</span>
    </button>
  </div>
  <div
    class="pf-v6-c-expandable-section__content"
  >This content is visible only when the component is expanded.</div>
</div>

```

### Detached

```html
<div class="pf-v6-l-stack pf-m-gutter">
  <div class="pf-v6-l-stack__item">
    <div
      class="pf-v6-c-expandable-section pf-m-expanded pf-m-detached pf-m-expand-top"
    >
      <div
        class="pf-v6-c-expandable-section__content"
        id="detached-toggle-content"
      >This content is visible only when the component is expanded.</div>
    </div>
  </div>

  <div class="pf-v6-l-stack__item">
    <div
      class="pf-v6-c-expandable-section pf-m-expanded pf-m-detached pf-m-expand-top"
    >
      <div class="pf-v6-c-expandable-section__toggle">
        <button
          class="pf-v6-c-button pf-m-link"
          type="button"
          aria-expanded
          aria-controls="detached-toggle-content"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-expandable-section__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
          <span class="pf-v6-c-button__text">Show less detached example content</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Truncate expansion (hidden)

```html
<div class="pf-v6-c-expandable-section pf-m-truncate">
  <div
    class="pf-v6-c-expandable-section__content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, diam vitae eleifend consequat, metus sapien posuere quam, ut tincidunt nunc enim eget sapien. Mauris ac dui imperdiet dolor dignissim efficitur laoreet quis erat. Proin turpis leo, malesuada eget urna et, tristique mollis odio. Ut mattis nulla lorem, elementum hendrerit nunc molestie vitae. Proin massa sem, bibendum id urna in, viverra porta neque. Ut ut mi ac lacus rhoncus mollis id quis sem. Suspendisse non justo elementum, dictum eros nec, hendrerit sapien. Mauris aliquet, est sit amet tincidunt vehicula, purus est hendrerit arcu, vitae egestas odio lorem ut lacus. In et neque non metus viverra rhoncus quis non purus. Integer id venenatis tortor. Nulla sollicitudin convallis tellus, at porta eros volutpat in. Curabitur rhoncus rhoncus nisi, sit amet tincidunt dolor efficitur vitae. Integer purus neque, porta non odio lobortis, accumsan elementum risus. Pellentesque viverra id lacus a cursus. Etiam eu pulvinar risus. Etiam ultrices nec urna id consequat.</div>
  <div class="pf-v6-c-expandable-section__toggle">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Show more truncated content</span>
    </button>
  </div>
</div>

```

### Truncate expansion (expanded)

```html
<div class="pf-v6-c-expandable-section pf-m-expanded pf-m-truncate">
  <div
    class="pf-v6-c-expandable-section__content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, diam vitae eleifend consequat, metus sapien posuere quam, ut tincidunt nunc enim eget sapien. Mauris ac dui imperdiet dolor dignissim efficitur laoreet quis erat. Proin turpis leo, malesuada eget urna et, tristique mollis odio. Ut mattis nulla lorem, elementum hendrerit nunc molestie vitae. Proin massa sem, bibendum id urna in, viverra porta neque. Ut ut mi ac lacus rhoncus mollis id quis sem. Suspendisse non justo elementum, dictum eros nec, hendrerit sapien. Mauris aliquet, est sit amet tincidunt vehicula, purus est hendrerit arcu, vitae egestas odio lorem ut lacus. In et neque non metus viverra rhoncus quis non purus. Integer id venenatis tortor. Nulla sollicitudin convallis tellus, at porta eros volutpat in. Curabitur rhoncus rhoncus nisi, sit amet tincidunt dolor efficitur vitae. Integer purus neque, porta non odio lobortis, accumsan elementum risus. Pellentesque viverra id lacus a cursus. Etiam eu pulvinar risus. Etiam ultrices nec urna id consequat.</div>
  <div class="pf-v6-c-expandable-section__toggle">
    <button
      class="pf-v6-c-button pf-m-inline pf-m-link"
      type="button"
      aria-expanded
    >
      <span class="pf-v6-c-button__text">Show less truncated content</span>
    </button>
  </div>
</div>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-v6-c-expandable-section__toggle .pf-v6-c-button` | Indicates that the expandable section content is visible. **Required** |
| `aria-expanded="false"` | `.pf-v6-c-expandable-section__toggle .pf-v6-c-button` | Indicates the the expandable section content is hidden. **Required** |
| `hidden` | `.pf-v6-c-expandable-section__content` | Indicates that the expandable section content element is hidden. Use with `aria-expanded="false"` **Required** |
| `aria-hidden="true"` | `.pf-v6-c-expandable-section__toggle-icon` | Hides the icon from screen readers. **Required** |
| `aria-controls="[id of content element]"` | `.pf-v6-c-expandable-section.pf-m-detached .pf-v6-c-expandable-section__toggle .pf-v6-c-button` | Identifies the element controlled by the toggle button. **Required** |
| `id` | `.pf-v6-c-expandable-section.pf-m-detached .pf-v6-c-expandable-section__content` | Gives the content an `id` for use with `aria-controls` on `.pf-v6-c-expandable-section__toggle .pf-v6-c-button`. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-expandable-section` | `<div>` | Initiates the expandable section component. **Required** |
| `.pf-v6-c-expandable-section__toggle` | `<div>` | Initiates the expandable toggle wrapper. **Required** |
| `.pf-v6-c-expandable-section__toggle-icon` | `<span>` | Initiates the expandable toggle icon. **Required** |
| `.pf-v6-c-expandable-section__content` | `<div>` | Initiates the expandable section content. **Required** |
| `.pf-m-expanded` | `.pf-v6-c-expandable-section` | Modifies the component for the expanded state. |
| `.pf-m-detached` | `.pf-v6-c-expandable-section` | Modifies the component for a detached variant. |
| `.pf-m-expand-top` | `.pf-v6-c-expandable-section__toggle-icon` | Modifies the toggle icon to point up when expanded. We recommend the new method of applying this class directly to the `.pf-v6-c-expandable-section` wrapper element. |
| `.pf-m-expand-top` | `.pf-v6-c-expandable-section.pf-m-detached` | Modifies the expandable animation and icon rotation directions for detached expandable sections. **Required** when the content is above the toggle. |
| `.pf-m-expand-bottom` | `.pf-v6-c-expandable-section.pf-m-detached` | Modifies the expandable animation direction for detached expandable sections. **Required** when the content is below the toggle. |
| `.pf-m-display-lg` | `.pf-v6-c-expandable-section` | Modifies the styling of the component to have large display styling. |
| `.pf-m-indented` | `.pf-v6-c-expandable-section` | Indicates that the expandable section content is indented and is aligned with the start of the title text to provide visual hierarchy. |
| `.pf-m-truncate` | `.pf-v6-c-expandable-section` | Indicates that the expandable section content is truncated by default, and not truncated when expanded. |
| `--pf-v6-c-expandable-section--m-truncate__content--LineClamp` | `.pf-v6-c-expandable-section.pf-m-truncate` | Modifies the number of lines to show before truncating. |
