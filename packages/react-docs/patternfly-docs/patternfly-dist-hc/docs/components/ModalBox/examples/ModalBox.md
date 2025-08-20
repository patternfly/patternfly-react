---
id: Modal
section: components
cssPrefix: pf-v6-c-modal-box
---import './ModalBox.css'

## Examples

### Basic

```html isFullscreen
<div
  class="pf-v6-c-modal-box"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title" id="modal-title">Modal title</h1>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
    id="modal-description"
  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### With help button

```html isFullscreen
<div
  class="pf-v6-c-modal-box"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-help-title"
  aria-describedby="modal-help-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header pf-m-help">
    <div class="pf-v6-c-modal-box__header-main">
      <h1
        class="pf-v6-c-modal-box__title"
        id="modal-help-title"
      >Modal title Modal title Modal title Modal title Modal title Modal title Modal title Modal title</h1>
      <div
        class="pf-v6-c-modal-box__description"
        id="modal-help-description"
      >A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.</div>
    </div>
    <div class="pf-v6-c-modal-box__header-help">
      <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Help">
        <span class="pf-v6-c-button__icon">
          <svg
            class="pf-v6-svg"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
          >
            <path
              d="M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0"
            />
          </svg>
        </span>
      </button>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Small

```html isFullscreen
<div
  class="pf-v6-c-modal-box pf-m-sm"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-sm-title"
  aria-describedby="modal-sm-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title" id="modal-sm-title">Modal title</h1>
    </div>
  </header>
  <div class="pf-v6-c-modal-box__body" id="modal-sm-description">
    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Medium

```html isFullscreen
<div
  class="pf-v6-c-modal-box pf-m-md"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-md-title"
  aria-describedby="modal-md-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title" id="modal-md-title">Modal title</h1>
    </div>
  </header>
  <div class="pf-v6-c-modal-box__body" id="modal-md-description">
    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Large

```html isFullscreen
<div
  class="pf-v6-c-modal-box pf-m-lg"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-lg-title"
  aria-describedby="modal-lg-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title" id="modal-lg-title">Modal title</h1>
    </div>
  </header>
  <div class="pf-v6-c-modal-box__body" id="modal-lg-description">
    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Without title

```html isFullscreen
<div
  class="pf-v6-c-modal-box"
  role="dialog"
  aria-modal="true"
  aria-label="Example of a modal without a title"
  aria-describedby="modal-no-title-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-modal-box__body">
    <span
      id="modal-no-title-description"
    >When static text describing the modal is available, it can be wrapped with an ID referring to the modal's aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### With description

```html isFullscreen
<div
  class="pf-v6-c-modal-box"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-with-description-title"
  aria-describedby="modal-with-description-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1
        class="pf-v6-c-modal-box__title"
        id="modal-with-description-title"
      >Modal title</h1>
      <div
        class="pf-v6-c-modal-box__description"
        id="modal-with-description-description"
      >A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.</div>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Custom title

```html isFullscreen
<div
  class="pf-v6-c-modal-box"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-custom-title"
  aria-describedby="modal-custom-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-title pf-m-4xl" id="modal-custom-title">Custom title</h1>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
    id="modal-custom-description"
  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Modal box as generic container

```html isFullscreen
<div
  class="pf-v6-c-modal-box"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-generic-container-description"
>
  <p
    id="modal-generic-container-description"
  >The modal box children elements can be removed, and the modal serves as a generic modal container. One use case of this is when creating a wizard in a modal.</p>
</div>

```

### Icon

```html isFullscreen
<div
  class="pf-v6-c-modal-box"
  role="dialog"
  aria-modal="true"
  aria-labelledby="icon-title"
  aria-describedby="icon-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title pf-m-icon" id="icon-title">
        <span class="pf-v6-c-modal-box__title-icon">
          <i class="fas fa-fw fa-bullhorn" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-modal-box__title-text">Modal with icon title</span>
      </h1>
    </div>
  </header>
  <div class="pf-v6-c-modal-box__body" id="icon-description">Modal description</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Custom alert

```html isFullscreen
<div
  class="pf-v6-c-modal-box pf-m-custom"
  role="dialog"
  aria-modal="true"
  aria-labelledby="custom-alert-title"
  aria-describedby="custom-alert-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title pf-m-icon" id="custom-alert-title">
        <span class="pf-v6-c-modal-box__title-icon">
          <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-u-screen-reader">
          Default
          alert:
        </span>
        <span class="pf-v6-c-modal-box__title-text">Custom alert modal title</span>
      </h1>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
    id="custom-alert-description"
  >Modal description</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Info alert

```html isFullscreen
<div
  class="pf-v6-c-modal-box pf-m-info"
  role="dialog"
  aria-modal="true"
  aria-labelledby="info-alert-title"
  aria-describedby="info-alert-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title pf-m-icon" id="info-alert-title">
        <span class="pf-v6-c-modal-box__title-icon">
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-u-screen-reader">
          Info
          alert:
        </span>
        <span class="pf-v6-c-modal-box__title-text">Info alert modal title</span>
      </h1>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
    id="info-alert-description"
  >Modal description</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Success alert

```html isFullscreen
<div
  class="pf-v6-c-modal-box pf-m-success"
  role="dialog"
  aria-modal="true"
  aria-labelledby="success-alert-title"
  aria-describedby="success-alert-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title pf-m-icon" id="success-alert-title">
        <span class="pf-v6-c-modal-box__title-icon">
          <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-u-screen-reader">
          Success
          alert:
        </span>
        <span class="pf-v6-c-modal-box__title-text">Success alert modal title</span>
      </h1>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
    id="success-alert-description"
  >Modal description</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Warning alert

```html isFullscreen
<div
  class="pf-v6-c-modal-box pf-m-warning"
  role="dialog"
  aria-modal="true"
  aria-labelledby="warning-alert-title"
  aria-describedby="warning-alert-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title pf-m-icon" id="warning-alert-title">
        <span class="pf-v6-c-modal-box__title-icon">
          <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-u-screen-reader">
          Warning
          alert:
        </span>
        <span class="pf-v6-c-modal-box__title-text">Warning alert modal title</span>
      </h1>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
    id="warning-alert-description"
  >Modal description</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Danger alert

```html isFullscreen
<div
  class="pf-v6-c-modal-box pf-m-danger"
  role="dialog"
  aria-modal="true"
  aria-labelledby="danger-alert-title"
  aria-describedby="danger-alert-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1 class="pf-v6-c-modal-box__title pf-m-icon" id="danger-alert-title">
        <span class="pf-v6-c-modal-box__title-icon">
          <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-u-screen-reader">
          Danger
          alert:
        </span>
        <span class="pf-v6-c-modal-box__title-text">Danger alert modal title</span>
      </h1>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
    id="danger-alert-description"
  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

### Danger alert with modifier on modal title

The status modifier classes can be applied directly to the modal title element, instead of the parent modal.

```html isFullscreen
<div
  class="pf-v6-c-modal-box"
  role="dialog"
  aria-modal="true"
  aria-labelledby="danger-alert-title-title"
  aria-describedby="danger-alert-title-description"
>
  <div class="pf-v6-c-modal-box__close">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <header class="pf-v6-c-modal-box__header">
    <div class="pf-v6-c-modal-box__header-main">
      <h1
        class="pf-v6-c-modal-box__title pf-m-icon pf-m-danger"
        id="danger-alert-title-title"
      >
        <span class="pf-v6-c-modal-box__title-icon">
          <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-u-screen-reader">
          Danger
          alert:
        </span>
        <span class="pf-v6-c-modal-box__title-text">Danger alert modal title</span>
      </h1>
    </div>
  </header>
  <div
    class="pf-v6-c-modal-box__body"
    id="danger-alert-title-description"
  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-v6-c-modal-box__footer">Modal footer</footer>
</div>

```

## Documentation

### Overview

A modal box is a generic rectangular container that can be used to build modals. A modal box can have the following sections: header, title, description, body, and footer. With normal use of the modal, a title or body is required. Alternatively, no child elements can be used, and the `.pf-v6-c-modal-box` container will  serve as a generic container with no padding for custom modal content. If no `.pf-v6-c-modal-box__title` is used, `aria-label="[title of modal]"` must be provided for `.pf-v6-c-modal-box`.

### Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-v6-c-modal-box` | Identifies the element that serves as the modal container. **Required** |
| `aria-labelledby="[id value of .pf-v6-c-modal-box__title or custom modal title]"` | `.pf-v6-c-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required when .pf-v6-c-title is present** |
| `aria-label="[title of modal]"` | `.pf-v6-c-modal-box` | Gives the modal an accessible name. **Required when `.pf-v6-c-modal-box__title` is *not* present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-v6-c-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `.pf-v6-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-v6-c-modal-box__close .pf-v6-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|
| `aria-hidden="true"` | Parent element containing the page contents when modal is open | Hides main contents of the page from screen readers. The element with `.pf-v6-c-modal-box` must not be a descendent of the element with `aria-hidden="true"`. For more info see [trapping focus](/accessibility/product-development-guide#trapping-focus). **Required** |
| `form="[id of form in modal body]"` | `.pf-v6-c-modal-box__footer .pf-v6-c-button` | Associates a submit button in the modal footer with a form in the modal body. For use when the submit button is outside of the `<form>` that the button submits. |
| `tabindex="0"` | `.pf-v6-c-modal-box__body` | If a modal box body has overflow content that triggers a scrollbar, to ensure that the content is keyboard accessible, the body must include either a focusable element within the scrollable region or the body itself must be focusable by adding `tabindex="0"`. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-modal-box` | `<div>` | Initiates a modal box. **Required** |
| `.pf-v6-c-modal-box__close` | `<div>` | Creates a container for the modal box close button. **Required** if there is a close button. |
| `.pf-v6-c-button.pf-m-plain` | `<button>` | Initiates a modal box close button. |
| `.pf-v6-c-modal-box__header` | `<header>` | Initiates a modal box header. **Required** if using a `.pf-v6-c-modal-box__title`. |
| `.pf-v6-c-modal-box__header-main` | `<div>` | Initiates a modal box header main container. **Required** when using a modal header. |
| `.pf-v6-c-modal-box__header-help` | `<div>` | Initiates the help button container in the modal box header actions. |
| `.pf-v6-c-modal-box__title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`, `<div>` | Initiates a modal box title. **Required** if using a modal description. |
| `.pf-v6-c-modal-box__title-icon` | `<span>` | Initiates a container for the modal box title icon. |
| `.pf-v6-c-modal-box__title-text` | `<span>` | Initiates a container for the modal box title text. |
| `.pf-v6-c-modal-box__description` | `<div>` | Initiates a modal box description. |
| `.pf-v6-c-modal-box__body` | `<div>` | Initiates a modal box body. |
| `.pf-v6-c-modal-box__footer` | `<footer>` | Initiates a modal box footer. |
| `.pf-m-sm` | `.pf-v6-c-modal-box` | Modifies for a small modal box width. |
| `.pf-m-md` | `.pf-v6-c-modal-box` | Modifies for a medium modal box width. |
| `.pf-m-lg` | `.pf-v6-c-modal-box` | Modifies for a large modal box width. |
| `.pf-m-align-top` | `.pf-v6-c-modal-box` | Modifies for top alignment.  |
| `.pf-m-icon` | `.pf-v6-c-modal-box__title` | Modifies the title layout to accommodate an icon. |
| `.pf-m-custom` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the custom alert state. |
| `.pf-m-info` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the info alert state. |
| `.pf-m-success` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the success alert state. |
| `.pf-m-warning` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the warning alert state. |
| `.pf-m-danger` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the danger alert state. |
| `.pf-m-help` | `.pf-v6-c-modal-box__header` | Modifies the modal box header to support the help action |
