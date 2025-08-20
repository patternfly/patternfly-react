---
id: Accordion
section: components
cssPrefix: pf-v6-c-accordion
---## Examples

### Fluid

```html
<div class="pf-v6-c-accordion">
  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item one</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item two</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item three</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item pf-m-expanded">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="true"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item four</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content">
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item five</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>
</div>

```

### Fixed

```html
<div class="pf-v6-c-accordion">
  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item one</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item pf-m-expanded">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="true"
        id="accordion-fixed-item-two-toggle"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item two</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div
      class="pf-v6-c-accordion__expandable-content pf-m-fixed"
      role="region"
      tabindex="0"
      aria-labelledby="accordion-fixed-item-two-toggle"
    >
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item three</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item four</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item five</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>
</div>

```

### Definition list

```html
<dl class="pf-v6-c-accordion">
  <div class="pf-v6-c-accordion__item">
    <dt>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item one</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </dt>
    <dd class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </dd>
  </div>

  <div class="pf-v6-c-accordion__item">
    <dt>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item two</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </dt>
    <dd class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </dd>
  </div>

  <div class="pf-v6-c-accordion__item">
    <dt>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item three</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </dt>
    <dd class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </dd>
  </div>

  <div class="pf-v6-c-accordion__item pf-m-expanded">
    <dt>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="true"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item four</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </dt>
    <dd class="pf-v6-c-accordion__expandable-content">
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </dd>
  </div>

  <div class="pf-v6-c-accordion__item">
    <dt>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item five</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </dt>
    <dd class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </dd>
  </div>
</dl>

```

### Bordered

```html
<div class="pf-v6-c-accordion pf-m-bordered">
  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item one</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item two</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item three</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item pf-m-expanded">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="true"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item four</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content">
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item five</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>
</div>

```

### Large bordered

```html
<div class="pf-v6-c-accordion pf-m-display-lg pf-m-bordered">
  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item one</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item two</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item three</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item pf-m-expanded">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="true"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item four</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content">
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-text">Item five</span>

        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>
</div>

```

### Toggle icon at start

```html
<div class="pf-v6-c-accordion pf-m-toggle-start">
  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>

        <span class="pf-v6-c-accordion__toggle-text">Item one</span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>

        <span class="pf-v6-c-accordion__toggle-text">Item two</span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>

        <span class="pf-v6-c-accordion__toggle-text">Item three</span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item pf-m-expanded">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="true"
      >
        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>

        <span class="pf-v6-c-accordion__toggle-text">Item four</span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content">
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  </div>

  <div class="pf-v6-c-accordion__item">
    <h3>
      <button
        class="pf-v6-c-accordion__toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="pf-v6-c-accordion__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>

        <span class="pf-v6-c-accordion__toggle-text">Item five</span>
      </button>
    </h3>
    <div class="pf-v6-c-accordion__expandable-content" hidden>
      <div
        class="pf-v6-c-accordion__expandable-content-body"
      >This text is hidden</div>
    </div>
  </div>
</div>

```

## Documentation

### Overview

There are two variations to build the accordion component. The first is to use `<div>` and `<h1 - h6>` tags:

* `.pf-v6-c-accordion` is placed on a `<div>`,
* `.pf-v6-c-accordion__toggle` is placed on a `<button>` that is inside a `<h1-h6>`, and
* `.pf-v6-c-accordion__expandable-content` is placed on a `<div>`.

The heading level that you use should fit within the rest of the headings outlined on your page.

Another variation is using the definition list:

* `.pf-v6-c-accordion` is placed on a `<dl>`,
* `.pf-v6-c-accordion__toggle` is placed on a `<button>` that is inside a `<dt>`, and
* `.pf-v6-c-accordion__expandable-content` is placed on a `<dd>`.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-accordion` | `<div>`, `<dl>` | Initiates an accordion component. **Required**|
| `.pf-v6-c-accordion__item` | `<div>` | Initiates an accordion item component. **Required**|
| `.pf-v6-c-accordion__toggle` | `<h1-h6><button>`, `<dt><button>` | Initiates a toggle in the accordion. **Required** |
| `.pf-v6-c-accordion__toggle-text` | `<span>` | Initiates the text inside the toggle. **Required** |
| `.pf-v6-c-accordion__toggle-icon` | `<span>` | Initiates the toggle icon wrapper. **Required** |
| `.pf-v6-c-accordion__expandable-content` | `<div>`, `<dd>` | Initiates expandable content. **Must be paired with a button** |
| `.pf-v6-c-accordion__expandable-content-body` | `<div>` | Initiates expandable content body. **Required** |
| `.pf-m-bordered` | `.pf-v6-c-accordion` | Modifies the accordion to add borders between items. |
| `.pf-m-display-lg` | `.pf-v6-c-accordion` | Modifies the accordion for large display styling. This variation is for marketing/web use cases. |
| `.pf-m-toggle-start` | `.pf-v6-c-accordion` | Modifies accordion styling when accordion toggle icons are rendered at the start of the toggle, before the toggle text. |
| `.pf-m-expanded` | `.pf-v6-c-accordion__item` | Modifies the accordion item for the expanded state. |
| `.pf-m-fixed` | `.pf-v6-c-accordion__expandable-content` | Modifies the expandable content for the fixed state. |
