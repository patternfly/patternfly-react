---
id: Popover
section: components
cssPrefix: pf-v6-c-popover
---import './Popover.css'

## Examples

### Top

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-top"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-top-header"
  aria-describedby="popover-top-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-top-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-top-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Right

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-right"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-right-header"
  aria-describedby="popover-right-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-right-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-right-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Bottom

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-bottom"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-bottom-header"
  aria-describedby="popover-bottom-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-bottom-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-bottom-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Left

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-left"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-left-header"
  aria-describedby="popover-left-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-left-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-left-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Left top

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-left-top"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-left-start-header"
  aria-describedby="popover-left-start-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-left-start-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-left-start-body"
    >This popover is to the left and at the start position</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Left bottom

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-left-bottom"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-left-end-header"
  aria-describedby="popover-left-end-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-left-end-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-left-end-body"
    >This popover is to the left and at the end position</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Bottom left

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-bottom-left"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-bottom-start-header"
  aria-describedby="popover-bottom-start-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-bottom-start-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-bottom-start-body"
    >This popover is to the bottom and at the start position</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Bottom right

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-bottom-right"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-bottom-end-header"
  aria-describedby="popover-bottom-end-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-bottom-end-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-bottom-end-body"
    >This popover is to the bottom and at the end position</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Without header/footer

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-right"
  role="dialog"
  aria-modal="true"
  aria-label="Popover with no header example"
  aria-describedby="popover-no-header-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div
      class="pf-v6-c-popover__body"
      id="popover-no-header-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
  </div>
</div>

```

### No padding

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-right pf-m-no-padding"
  role="dialog"
  aria-modal="true"
  aria-label="Popover with no padding example"
  aria-describedby="popover-no-padding-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div
      class="pf-v6-c-popover__body"
      id="popover-no-padding-body"
    >This popover has no padding itself. Instead it is intended for use with content that has its own padding that prevents it from touching the popover container's edges.</div>
  </div>
</div>

```

### Width auto

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-right pf-m-width-auto"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-width-auto-header"
  aria-describedby="popover-width-auto-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-width-auto-header">
        <h1 class="pf-v6-c-popover__title-text">Popover header</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-width-auto-body"
    >Popovers body</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Popover with icon in the title

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-left"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-icon-title-header"
  aria-describedby="popover-icon-title-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-icon-title-header">
        <span class="pf-v6-c-popover__title-icon">
          <i class="fas fa-fw fa-bullhorn" aria-hidden="true"></i>
        </span>
        <h1 class="pf-v6-c-popover__title-text">Popover with icon title</h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-icon-title-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Custom alert popover

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-custom pf-m-left"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-custom-alert-header"
  aria-describedby="popover-custom-alert-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-custom-alert-header">
        <span class="pf-v6-c-popover__title-icon">
          <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
        </span>
        <h1 class="pf-v6-c-popover__title-text">
          <span class="pf-v6-screen-reader">
            Custom
            alert:
          </span>
          Custom popover title
        </h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-custom-alert-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Info alert popover

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-info pf-m-top"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-info-alert-header"
  aria-describedby="popover-info-alert-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-info-alert-header">
        <span class="pf-v6-c-popover__title-icon">
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        </span>
        <h1 class="pf-v6-c-popover__title-text">
          <span class="pf-v6-screen-reader">
            Info
            alert:
          </span>
          Info popover title
        </h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-info-alert-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Success alert popover

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-success pf-m-top"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-success-alert-header"
  aria-describedby="popover-success-alert-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-success-alert-header">
        <span class="pf-v6-c-popover__title-icon">
          <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
        </span>
        <h1 class="pf-v6-c-popover__title-text">
          <span class="pf-v6-screen-reader">
            Success
            alert:
          </span>
          Success popover title
        </h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-success-alert-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Warning alert popover

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-warning pf-m-top"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-warning-alert-header"
  aria-describedby="popover-warning-alert-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-warning-alert-header">
        <span class="pf-v6-c-popover__title-icon">
          <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
        </span>
        <h1 class="pf-v6-c-popover__title-text">
          <span class="pf-v6-screen-reader">
            Warning
            alert:
          </span>
          Warning popover title
        </h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-warning-alert-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

### Danger alert popover

```html isFullscreen
<div
  class="pf-v6-c-popover pf-m-danger pf-m-top"
  role="dialog"
  aria-modal="true"
  aria-labelledby="popover-danger-alert-header"
  aria-describedby="popover-danger-alert-body"
>
  <div class="pf-v6-c-popover__arrow"></div>
  <div class="pf-v6-c-popover__content">
    <div class="pf-v6-c-popover__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <header class="pf-v6-c-popover__header">
      <div class="pf-v6-c-popover__title" id="popover-danger-alert-header">
        <span class="pf-v6-c-popover__title-icon">
          <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
        </span>
        <h1 class="pf-v6-c-popover__title-text">
          <span class="pf-v6-screen-reader">
            Danger
            alert:
          </span>
          Danger popover title
        </h1>
      </div>
    </header>
    <div
      class="pf-v6-c-popover__body"
      id="popover-danger-alert-body"
    >Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-v6-c-popover__footer">Popover footer</footer>
  </div>
</div>

```

## Documentation

### Overview

A popover is used to provide contextual information for another component on click.  The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body.  One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the popover component

### Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-v6-c-popover` | Identifies the element that serves as the popover container. **Required** |
| `aria-labelledby="[id value of .pf-v6-c-title]"` | `.pf-v6-c-popover` | Gives the popover an accessible name by referring to the element that provides the dialog title. **Required when .pf-v6-c-title is present** |
| `aria-label="[title of popover]"` | `.pf-v6-c-popover` | Gives the popover an accessible name. **Required when .pf-v6-c-title is *not* present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-v6-c-popover` | Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover. |
| `aria-modal="true"` | `.pf-v6-c-popover` | Tells assistive technologies that the windows underneath the current popover are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-v6-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|
| `aria-hidden="true"` | Parent element containing the page contents when the popover is open. | Hides main contents of the page from screen readers. The element with `.pf-v6-c-popover` must not be a descendent of the element with `aria-hidden="true"`. For more info, see [trapping focus](/accessibility/product-development-guide#trapping-focus). **Required** |
| `.pf-v6-screen-reader` | `.pf-v6-c-popover__title-text <span>` | Adds text to be read saying the alert status before the title. If `.pf-v6-c-popover__title-text` is not used to create a title, this must be added within the title. **Required for popovers that are alerts** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-popover` | `<div>` |  Creates a popover. Always use it with a modifier class that positions the popover relative to the element that triggered it. **Required** |
| `.pf-v6-c-popover__arrow` | `<div>` |  Creates an arrow pointing towards the element the popover describes. **Required** |
| `.pf-v6-c-popover__content` | `<div>` |  Creates the content area of the popover. **Required** |
| `.pf-v6-c-popover__close` | `<div>` |  Positions the close icon in the top-right corner of the popover. **Required if there is a close button** |
| `.pf-v6-c-popover__header` | `<header>` | Creates the popover header. **Required if there is a title**|
| `.pf-v6-c-popover__title` | `<div>` | Creates the popover title. |
| `.pf-v6-c-popover__title-icon` | `<span>` | Creates the popover title icon. |
| `.pf-v6-c-popover__title-text` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`,`<span>` | Creates the popover title text. |
| `.pf-v6-c-popover__body` | `<div>` |  The popover's body text. **Required** |
| `.pf-v6-c-popover__footer` | `<footer>` | Initiates a popover footer. |
| `.pf-m-left{-top/bottom}` | `.pf-v6-c-popover` | Positions the popover to the left (or left top/left bottom) of the element. |
| `.pf-m-right{-top/bottom}` | `.pf-v6-c-popover` | Positions the popover to the right (or right top/right bottom) of the element. |
| `.pf-m-top{-left/right}` | `.pf-v6-c-popover` | Positions the popover to the top (or top left/top right) of the element. |
| `.pf-m-bottom{-left/right}` | `.pf-v6-c-popover` | Positions the popover to the bottom (or bottom left/bottom right) of the element. |
| `.pf-m-no-padding` | `.pf-v6-c-popover` | Removes the outer padding from the popover content. |
| `.pf-m-width-auto` | `.pf-v6-c-popover` | Allows popover width to be defined by the popover content. |
| `.pf-m-custom` | `.pf-v6-c-popover` | Modifies for the custom alert state. |
| `.pf-m-info` | `.pf-v6-c-popover` | Modifies for the info alert state. |
| `.pf-m-success` | `.pf-v6-c-popover` | Modifies for the success alert state. |
| `.pf-m-warning` | `.pf-v6-c-popover` | Modifies for the warning alert state. |
| `.pf-m-danger` | `.pf-v6-c-popover` | Modifies for the danger alert state. |
