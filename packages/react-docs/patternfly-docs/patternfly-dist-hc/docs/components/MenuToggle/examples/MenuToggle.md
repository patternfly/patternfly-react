---
id: 'Menu toggle'
section: components
subsection: menus
cssPrefix: pf-v6-c-menu-toggle
---import './MenuToggle.css'

## Examples

### Collapsed

```html
<button class="pf-v6-c-menu-toggle" type="button" aria-expanded="false">
  <span class="pf-v6-c-menu-toggle__text">Collapsed</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Expanded

```html
<button
  class="pf-v6-c-menu-toggle pf-m-expanded"
  type="button"
  aria-expanded="true"
>
  <span class="pf-v6-c-menu-toggle__text">Expanded</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Disabled

```html
<button
  class="pf-v6-c-menu-toggle pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__text">Disabled</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Count

```html
<button class="pf-v6-c-menu-toggle" type="button" aria-expanded="false">
  <span class="pf-v6-c-menu-toggle__text">Count</span>
  <span class="pf-v6-c-menu-toggle__count">
    <span class="pf-v6-c-badge pf-m-unread">4 selected</span>
  </span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-text pf-m-small pf-m-plain"
  type="button"
  aria-expanded="false"
  aria-label="Menu toggle"
>
  <span class="pf-v6-c-menu-toggle__count">
    <span class="pf-v6-c-badge pf-m-unread">
      4
      <span class="pf-v6-screen-reader">additional items</span>
    </span>
  </span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Primary

```html
<button
  class="pf-v6-c-menu-toggle pf-m-primary"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Collapsed</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-primary"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
  <span class="pf-v6-c-menu-toggle__text">Icon</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-primary"
  type="button"
  aria-expanded="true"
>
  <span class="pf-v6-c-menu-toggle__text">Expanded</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__text">Disabled</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Secondary

```html
<button
  class="pf-v6-c-menu-toggle pf-m-secondary"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Collapsed</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-secondary"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
  <span class="pf-v6-c-menu-toggle__text">Icon</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-secondary"
  type="button"
  aria-expanded="true"
>
  <span class="pf-v6-c-menu-toggle__text">Expanded</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__text">Disabled</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Plain

```html
<button
  class="pf-v6-c-menu-toggle pf-m-plain"
  type="button"
  aria-expanded="false"
  aria-label="Actions"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-plain"
  type="button"
  aria-expanded="true"
  aria-label="Actions"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-plain pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
  aria-label="Actions"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </span>
</button>

```

### Plain with text

```html
<button
  class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
  type="button"
  aria-expanded="false"
  aria-label="Menu toggle"
>
  <span class="pf-v6-c-menu-toggle__text">Custom text</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-text pf-m-plain"
  type="button"
  aria-expanded="true"
  aria-label="Menu toggle"
>
  <span class="pf-v6-c-menu-toggle__text">Custom text</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-text pf-m-plain pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
  aria-label="Menu toggle"
>
  <span class="pf-v6-c-menu-toggle__text">Disabled</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Small

```html
<button
  class="pf-v6-c-menu-toggle pf-m-small"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Collapsed</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-small"
  type="button"
  aria-expanded="true"
>
  <span class="pf-v6-c-menu-toggle__text">Expanded</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-small pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__text">Disabled</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
<br />
<br />
<button
  class="pf-v6-c-menu-toggle pf-m-small pf-m-primary"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Collapsed</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-small pf-m-primary"
  type="button"
  aria-expanded="true"
>
  <span class="pf-v6-c-menu-toggle__text">Expanded</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-small pf-m-primary pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__text">Disabled</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
<br />
<br />
<button
  class="pf-v6-c-menu-toggle pf-m-small pf-m-secondary"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Collapsed</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-small pf-m-secondary"
  type="button"
  aria-expanded="true"
>
  <span class="pf-v6-c-menu-toggle__text">Expanded</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-small pf-m-secondary pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__text">Disabled</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
<br />
<br />
<button
  class="pf-v6-c-menu-toggle pf-m-text pf-m-small pf-m-plain"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Collapsed</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-text pf-m-small pf-m-plain"
  type="button"
  aria-expanded="true"
>
  <span class="pf-v6-c-menu-toggle__text">Expanded</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-text pf-m-small pf-m-plain pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__text">Disabled</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>
<br />
<br />
<button
  class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
  type="button"
  aria-expanded="false"
  aria-label="Actions"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-small pf-m-plain"
  type="button"
  aria-expanded="true"
  aria-label="Actions"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </span>
</button>
&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-small pf-m-plain pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
  aria-label="Actions"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </span>
</button>

```

### With icon/image and text

```html
<button
  class="pf-v6-c-menu-toggle pf-m-secondary"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
  <span class="pf-v6-c-menu-toggle__text">Icon</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
  <span class="pf-v6-c-menu-toggle__text">Icon</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### With avatar and text

```html
<button class="pf-v6-c-menu-toggle" type="button" aria-expanded="false">
  <span class="pf-v6-c-menu-toggle__icon">
    <img
      class="pf-v6-c-avatar pf-m-sm"
      alt="Avatar image"
      src="/assets/images/img_avatar-light.svg"
    />
  </span>
  <span class="pf-v6-c-menu-toggle__text">Ned Username</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-expanded"
  type="button"
  aria-expanded="true"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <img
      class="pf-v6-c-avatar pf-m-sm"
      alt="Avatar image"
      src="/assets/images/img_avatar-light.svg"
    />
  </span>
  <span class="pf-v6-c-menu-toggle__text">Ned Username</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

&nbsp;
<button
  class="pf-v6-c-menu-toggle pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
>
  <span class="pf-v6-c-menu-toggle__icon">
    <img
      class="pf-v6-c-avatar pf-m-sm"
      alt="Avatar image"
      src="/assets/images/img_avatar-light.svg"
    />
  </span>
  <span class="pf-v6-c-menu-toggle__text">Ned Username</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Full height

```html
<button
  class="pf-v6-c-menu-toggle pf-m-full-height"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Full height</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Full width

```html
<button
  class="pf-v6-c-menu-toggle pf-m-full-width"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Full width</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Typeahead

```html
<div
  class="pf-v6-c-menu-toggle pf-m-full-width pf-m-typeahead"
  id="typeahead-example"
>
  <div class="pf-v6-c-text-input-group pf-m-plain">
    <div class="pf-v6-c-text-input-group__main">
      <span class="pf-v6-c-text-input-group__text">
        <input
          class="pf-v6-c-text-input-group__text-input"
          type="text"
          value
          aria-label="Type to filter"
        />
      </span>
    </div>
    <div class="pf-v6-c-text-input-group__utilities">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Clear input"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times fa-fw" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </div>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="typeahead-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

```

### Status

```html
<button
  class="pf-v6-c-menu-toggle pf-m-success"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Success</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__status-icon">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

<br />
<br />

<button
  class="pf-v6-c-menu-toggle pf-m-warning"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Warning</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__status-icon">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

<br />
<br />

<button
  class="pf-v6-c-menu-toggle pf-m-danger"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Danger</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__status-icon">
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Placeholder

```html
<button
  class="pf-v6-c-menu-toggle pf-m-placeholder"
  type="button"
  aria-expanded="false"
>
  <span class="pf-v6-c-menu-toggle__text">Placeholder text</span>
  <span class="pf-v6-c-menu-toggle__controls">
    <span class="pf-v6-c-menu-toggle__toggle-icon">
      <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
    </span>
  </span>
</button>

```

### Split toggle

Shown with default, primary, and secondary styling

```html
<div
  class="pf-v6-c-menu-toggle pf-m-split-button"
  id="split-button-checkbox-with-toggle-action-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button">Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-action-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-with-toggle-action-expanded-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button">Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-with-toggle-action-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-with-toggle-action-disabled-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button" disabled>Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-action-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button"
  id="split-button-checkbox-with-toggle-action-primary-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button">Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-action-primary-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-with-toggle-action-primary-expanded-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button">Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-with-toggle-action-primary-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-with-toggle-action-primary-disabled-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button" disabled>Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-action-primary-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button"
  id="split-button-checkbox-with-toggle-action-secondary-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button">Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-action-secondary-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-with-toggle-action-secondary-expanded-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button">Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-with-toggle-action-secondary-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-with-toggle-action-secondary-disabled-example"
>
  <button class="pf-v6-c-menu-toggle__button" type="button" disabled>Action</button>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-action-secondary-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

```

### Split toggle with checkbox

Shown with default, primary, and secondary styling

```html
<div
  class="pf-v6-c-menu-toggle pf-m-split-button"
  id="split-button-checkbox-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-example-input"
      name="split-button-checkbox-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-expanded-example-input"
      name="split-button-checkbox-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-checkbox-disabled-example-input"
      name="split-button-checkbox-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button"
  id="split-button-primary-checkbox-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-primary-checkbox-example-input"
      name="split-button-primary-checkbox-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-primary-checkbox-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-expanded pf-m-split-button"
  id="split-button--primary-checkbox-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button--primary-checkbox-expanded-example-input"
      name="split-button--primary-checkbox-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button--primary-checkbox-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button pf-m-disabled"
  id="split-button--primary-checkbox-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button--primary-checkbox-disabled-example-input"
      name="split-button--primary-checkbox-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button--primary-checkbox-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button"
  id="split-button-secondary-checkbox-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-secondary-checkbox-example-input"
      name="split-button-secondary-checkbox-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-secondary-checkbox-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-expanded pf-m-split-button"
  id="split-button-secondary-checkbox-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-secondary-checkbox-expanded-example-input"
      name="split-button-secondary-checkbox-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button-secondary-checkbox-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button pf-m-disabled"
  id="split-button-secondary-checkbox-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-secondary-checkbox-disabled-example-input"
      name="split-button-secondary-checkbox-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-secondary-checkbox-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

```

### Split toggle with labeled checkbox

To add a label to a split toggle that will be linked to the checkbox, pass the text wrapped in `span.pf-v6-c-check__label` as a child to `label.pf-v6-c-check`. Clicking the text will update the checked state of the split toggle's checkbox. <br/> <br/>
Shown with default, primary, and secondary styling

```html
<div
  class="pf-v6-c-menu-toggle pf-m-split-button"
  id="split-button-checkbox-with-toggle-text-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-with-toggle-text-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-with-toggle-text-example-input"
      name="split-button-checkbox-with-toggle-text-example-input"
    />
    <span class="pf-v6-c-check__label">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-text-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-with-toggle-text-expanded-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-with-toggle-text-expanded-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-with-toggle-text-expanded-example-input"
      name="split-button-checkbox-with-toggle-text-expanded-example-input"
    />
    <span class="pf-v6-c-check__label">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-with-toggle-text-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-with-toggle-text-disabled-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-with-toggle-text-disabled-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-checkbox-with-toggle-text-disabled-example-input"
      name="split-button-checkbox-with-toggle-text-disabled-example-input"
    />
    <span class="pf-v6-c-check__label pf-m-disabled">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-text-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button"
  id="split-button-checkbox-primary-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-primary-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-primary-example-input"
      name="split-button-checkbox-primary-example-input"
    />
    <span class="pf-v6-c-check__label">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-primary-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-primary-expanded-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-primary-expanded-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-primary-expanded-example-input"
      name="split-button-checkbox-primary-expanded-example-input"
    />
    <span class="pf-v6-c-check__label">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-primary-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-primary-disabled-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-primary-disabled-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-checkbox-primary-disabled-example-input"
      name="split-button-checkbox-primary-disabled-example-input"
    />
    <span class="pf-v6-c-check__label pf-m-disabled">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-primary-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button"
  id="split-button-checkbox-secondary-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-secondary-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-secondary-example-input"
      name="split-button-checkbox-secondary-example-input"
    />
    <span class="pf-v6-c-check__label">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-secondary-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-secondary-expanded-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-secondary-expanded-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-secondary-expanded-example-input"
      name="split-button-checkbox-secondary-expanded-example-input"
    />
    <span class="pf-v6-c-check__label">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-secondary-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>
&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-secondary-disabled-example"
>
  <label
    class="pf-v6-c-check"
    for="split-button-checkbox-secondary-disabled-example-input"
  >
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-checkbox-secondary-disabled-example-input"
      name="split-button-checkbox-secondary-disabled-example-input"
    />
    <span class="pf-v6-c-check__label pf-m-disabled">Select all items</span>
  </label>
  <button
    class="pf-v6-c-menu-toggle__button"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-secondary-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

```

### Split toggle with checkbox and toggle text

To add a label to a split toggle that will be linked to the toggle button, pass the text wrapped in `span.pf-v6-c-menu-toggle__text` as a child to `button.pf-v6-c-menu-toggle__button.pf-m-text`. Clicking the text should trigger any click action on the toggle. <br/> <br/>
Shown with default, primary, and secondary styling

```html
<div
  class="pf-v6-c-menu-toggle pf-m-split-button"
  id="split-button-checkbox-with-toggle-button-text-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-with-toggle-button-text-example-input"
      name="split-button-checkbox-with-toggle-button-text-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-button-text-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-with-toggle-button-text-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-with-toggle-button-text-expanded-example-input"
      name="split-button-checkbox-with-toggle-button-text-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-with-toggle-button-text-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-with-toggle-button-text-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-checkbox-with-toggle-button-text-disabled-example-input"
      name="split-button-checkbox-with-toggle-button-text-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-button-text-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button"
  id="split-button-primary-checkbox-with-toggle-button-text-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-primary-checkbox-with-toggle-button-text-example-input"
      name="split-button-primary-checkbox-with-toggle-button-text-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-primary-checkbox-with-toggle-button-text-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-expanded pf-m-split-button"
  id="split-button-primary-checkbox-with-toggle-button-text-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-primary-checkbox-with-toggle-button-text-expanded-example-input"
      name="split-button-primary-checkbox-with-toggle-button-text-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="true"
    id="split-button-primary-checkbox-with-toggle-button-text-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button pf-m-disabled"
  id="split-button-primary-checkbox-with-toggle-button-text-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-primary-checkbox-with-toggle-button-text-disabled-example-input"
      name="split-button-primary-checkbox-with-toggle-button-text-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-primary-checkbox-with-toggle-button-text-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button"
  id="split-button-secondary-checkbox-with-toggle-button-text-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-secondary-checkbox-with-toggle-button-text-example-input"
      name="split-button-secondary-checkbox-with-toggle-button-text-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-secondary-checkbox-with-toggle-button-text-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-expanded pf-m-split-button"
  id="split-button-secondary-checkbox-with-toggle-button-text-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-secondary-checkbox-with-toggle-button-text-expanded-example-input"
      name="split-button-secondary-checkbox-with-toggle-button-text-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="true"
    id="split-button-secondary-checkbox-with-toggle-button-text-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button pf-m-disabled"
  id="split-button-secondary-checkbox-with-toggle-button-text-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-secondary-checkbox-with-toggle-button-text-disabled-example-input"
      name="split-button-secondary-checkbox-with-toggle-button-text-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-secondary-checkbox-with-toggle-button-text-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__text">Toggle button text</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

```

### Split toggle with checkbox, icon, and toggle text

To add a label to a split toggle that will be linked to the toggle button, pass the text wrapped in `span.pf-v6-c-menu-toggle__text` as a child to `button.pf-v6-c-menu-toggle__button.pf-m-text`. Clicking the text should trigger any click action on the toggle. <br/> <br/>
Shown with default, primary, and secondary styling

```html
<div
  class="pf-v6-c-menu-toggle pf-m-split-button"
  id="split-button-checkbox-with-toggle-button-icon-text-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-with-toggle-button-icon-text-example-input"
      name="split-button-checkbox-with-toggle-button-icon-text-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-button-icon-text-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-expanded pf-m-split-button"
  id="split-button-checkbox-with-toggle-button-icon-text-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-checkbox-with-toggle-button-icon-text-expanded-example-input"
      name="split-button-checkbox-with-toggle-button-icon-text-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="true"
    id="split-button-checkbox-with-toggle-button-icon-text-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-split-button pf-m-disabled"
  id="split-button-checkbox-with-toggle-button-icon-text-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-checkbox-with-toggle-button-icon-text-disabled-example-input"
      name="split-button-checkbox-with-toggle-button-icon-text-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-checkbox-with-toggle-button-icon-text-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button"
  id="split-button-primary-checkbox-with-toggle-button-icon-text-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-primary-checkbox-with-toggle-button-icon-text-example-input"
      name="split-button-primary-checkbox-with-toggle-button-icon-text-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-primary-checkbox-with-toggle-button-icon-text-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-expanded pf-m-split-button"
  id="split-button-primary-checkbox-with-toggle-button-icon-text-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-primary-checkbox-with-toggle-button-icon-text-expanded-example-input"
      name="split-button-primary-checkbox-with-toggle-button-icon-text-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="true"
    id="split-button-primary-checkbox-with-toggle-button-icon-text-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-primary pf-m-split-button pf-m-disabled"
  id="split-button-primary-checkbox-with-toggle-button-icon-text-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-primary-checkbox-with-toggle-button-icon-text-disabled-example-input"
      name="split-button-primary-checkbox-with-toggle-button-icon-text-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-primary-checkbox-with-toggle-button-icon-text-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

<br />
<br />

<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button"
  id="split-button-secondary-checkbox-with-toggle-button-icon-text-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-secondary-checkbox-with-toggle-button-icon-text-example-input"
      name="split-button-secondary-checkbox-with-toggle-button-icon-text-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-secondary-checkbox-with-toggle-button-icon-text-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-expanded pf-m-split-button"
  id="split-button-secondary-checkbox-with-toggle-button-icon-text-expanded-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      id="split-button-secondary-checkbox-with-toggle-button-icon-text-expanded-example-input"
      name="split-button-secondary-checkbox-with-toggle-button-icon-text-expanded-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="true"
    id="split-button-secondary-checkbox-with-toggle-button-icon-text-expanded-example-toggle-button"
    aria-label="Menu toggle"
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>&nbsp;
<div
  class="pf-v6-c-menu-toggle pf-m-secondary pf-m-split-button pf-m-disabled"
  id="split-button-secondary-checkbox-with-toggle-button-icon-text-disabled-example"
>
  <label class="pf-v6-c-check pf-m-standalone">
    <input
      class="pf-v6-c-check__input"
      type="checkbox"
      disabled
      id="split-button-secondary-checkbox-with-toggle-button-icon-text-disabled-example-input"
      name="split-button-secondary-checkbox-with-toggle-button-icon-text-disabled-example-input"
      aria-label="Select all items"
    />
  </label>
  <button
    class="pf-v6-c-menu-toggle__button pf-m-text"
    type="button"
    aria-expanded="false"
    id="split-button-secondary-checkbox-with-toggle-button-icon-text-disabled-example-toggle-button"
    aria-label="Menu toggle"
    disabled
  >
    <span class="pf-v6-c-menu-toggle__icon">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-menu-toggle__text">Icon</span>
    <span class="pf-v6-c-menu-toggle__controls">
      <span class="pf-v6-c-menu-toggle__toggle-icon">
        <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</div>

```

### Settings

```html
<button
  class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
  type="button"
  aria-expanded="false"
  aria-label="Settings"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
</button>

<button
  class="pf-v6-c-menu-toggle pf-m-settings pf-m-expanded pf-m-plain"
  type="button"
  aria-expanded="true"
  aria-label="Settings"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
</button>

<button
  class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain pf-m-disabled"
  type="button"
  aria-expanded="false"
  disabled
  aria-label="Settings"
>
  <span class="pf-v6-c-menu-toggle__icon">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
</button>

```

## Documentation

### Accessibility

| Class | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button` | Indicates that the menu toggle component is in the expanded state. |
| `aria-expanded="false"` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button` | Indicates that the menu toggle component is in the collapsed state. |
| `aria-label="Descriptive text"` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle.pf-m-plain` | Gives the menu toggle component an accessible label. Used whenever there is no text visible in the menu toggle. Often, plain modifiers are used when the menu toggle only contains an icon. |
| `disabled` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button` | Indicates that the menu toggle component is disabled. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-menu-toggle` | `<button>` | Initiates the menu toggle component. |
| `.pf-v6-c-menu-toggle__icon` | `<span>` | Defines the menu toggle component icon/image. |
| `.pf-v6-c-menu-toggle__text` | `<span>` | Defines the menu toggle component text. |
| `.pf-v6-c-menu-toggle__count` | `<span>` | Defines the menu toggle component count. |
| `.pf-v6-c-menu-toggle__controls` | `<span>` | Defines the menu toggle component controls. |
| `.pf-v6-c-menu-toggle__toggle-icon` | `<span>` | Defines the menu toggle component toggle/arrow icon. |
| `.pf-v6-c-menu-toggle__button` | `<button>` | Initiates the menu toggle button. |
| `.pf-m-split-button` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the split button variation. |
| `.pf-m-text` | `.pf-v6-c-menu-toggle__button` | Modifies the menu toggle component split button variation with text. |
| `.pf-m-disabled` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the disabled variation. |
| `.pf-m-primary` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the primary variation. |
| `.pf-m-secondary` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the secondary variation. |
| `.pf-m-text` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the text variation. |
| `.pf-m-plain` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the plain variation. |
| `.pf-m-expanded` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the expanded state. |
| `.pf-m-full-height` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component to full height of parent. |
| `.pf-m-full-width` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component to full width of parent. |
| `.pf-m-success` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the success state. |
| `.pf-m-warning` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the warning state. |
| `.pf-m-danger` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the danger state. |
| `.pf-m-placeholder` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle text for placeholder styles. |
