---
id: 'Hint'
section: components
cssPrefix: pf-v6-c-hint
---## Examples

### Hint with title

```html
<div class="pf-v6-c-hint">
  <div class="pf-v6-c-hint__actions">
    <button
      class="pf-v6-c-menu-toggle pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Hint with title example actions"
      id="hint-with-title-example-hint"
    >
      <span class="pf-v6-c-menu-toggle__icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-hint__title">Do more with Find it Fix it capabilities</div>
  <div
    class="pf-v6-c-hint__body"
  >Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>
</div>

<br />

<div class="pf-v6-c-hint">
  <div class="pf-v6-c-hint__actions">
    <button
      class="pf-v6-c-menu-toggle pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Hint with title and footer example actions"
      id="hint-with-title-and-actions-example-hint"
    >
      <span class="pf-v6-c-menu-toggle__icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-hint__title">Do more with Find it Fix it capabilities</div>
  <div
    class="pf-v6-c-hint__body"
  >Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>
  <div class="pf-v6-c-hint__footer">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Try it for 90 days</span>
    </button>
  </div>
</div>

```

### Default with no title

```html
<div class="pf-v6-c-hint">
  <div class="pf-v6-c-hint__body">
    Welcome to the new documentation experience.
    <a href="#">Learn more about the improved features</a>.
  </div>
</div>

<br />

<div class="pf-v6-c-hint">
  <div class="pf-v6-c-hint__actions">
    <button
      class="pf-v6-c-menu-toggle pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Hint without title example actions"
      id="hint-with-no-title-example-hint"
    >
      <span class="pf-v6-c-menu-toggle__icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div
    class="pf-v6-c-hint__body"
  >Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>
  <div class="pf-v6-c-hint__footer">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Try it for 90 days</span>
    </button>
  </div>
</div>

```

### Actions with no offset

```html
<div class="pf-v6-c-hint">
  <div class="pf-v6-c-hint__actions pf-m-no-offset">
    <button class="pf-v6-c-button pf-m-primary" type="button">
      <span class="pf-v6-c-button__text">Action</span>
    </button>
  </div>
  <div class="pf-v6-c-hint__title">Do more with Find it Fix it capabilities</div>
  <div
    class="pf-v6-c-hint__body"
  >Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>
</div>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-hint` | `<div>` | Initiates the hint component. **Required** |
| `.pf-v6-c-hint__title` | `<div>` | Initiates the hint title element. |
| `.pf-v6-c-hint__body` | `<div>` | Initiates the hint body element. |
| `.pf-v6-c-hint__footer` | `<div>` | Initiates the hint footer element. |
| `.pf-v6-c-hint__actions` | `<div>` | Initiates the hint actions element. |
| `.pf-m-no-offset` | `.pf-v6-c-hint__actions` | Removes the negative vertical margins on the actions element intended to align the action content with the hint title. |
