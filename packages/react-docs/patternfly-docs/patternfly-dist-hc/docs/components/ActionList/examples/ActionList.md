---
id: Action list
section: components
cssPrefix: pf-v6-c-action-list
---## Examples

### Action list single group

```html
<div class="pf-v6-c-action-list">
  <div class="pf-v6-c-action-list__group">
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Next</span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Back</span>
      </button>
    </div>
  </div>
</div>
<br />With kebab
<div class="pf-v6-c-action-list">
  <div class="pf-v6-c-action-list__group">
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Next</span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Back</span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Toggle"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </div>
</div>

```

### Action list with icons

```html
<div class="pf-v6-c-action-list pf-m-icons">
  <div class="pf-v6-c-action-list__item">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Close">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-action-list__item">
    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Toggle">
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-check" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>
<br />With group icons wrapper
<div class="pf-v6-c-action-list">
  <div class="pf-v6-c-action-list__group pf-m-icons">
    <div class="pf-v6-c-action-list__item">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Toggle"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </div>
  <div class="pf-v6-c-action-list__group pf-m-icons">
    <div class="pf-v6-c-action-list__item">
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
    <div class="pf-v6-c-action-list__item">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Toggle"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </div>
</div>

```

### Action list multiple groups

```html
<div class="pf-v6-c-action-list">
  <div class="pf-v6-c-action-list__group">
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Next</span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Back</span>
      </button>
    </div>
  </div>
  <div class="pf-v6-c-action-list__group">
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Submit</span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-link" type="button">
        <span class="pf-v6-c-button__text">Cancel</span>
      </button>
    </div>
  </div>
</div>

```

### Action list with cancel button

```html
In modals, forms, data lists
<div class="pf-v6-c-action-list">
  <div class="pf-v6-c-action-list__group">
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Save</span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-link" type="button">
        <span class="pf-v6-c-button__text">Cancel</span>
      </button>
    </div>
  </div>
</div>
<br />In wizards
<div class="pf-v6-c-action-list">
  <div class="pf-v6-c-action-list__group">
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Next</span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Back</span>
      </button>
    </div>
    <div class="pf-v6-c-action-list__item">
      <button class="pf-v6-c-button pf-m-link" type="button">
        <span class="pf-v6-c-button__text">Cancel</span>
      </button>
    </div>
  </div>
</div>

```

### Overview

### Usage

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-action-list` | `<div>` | Initiates the action list container. |
| `.pf-v6-c-action-list__item` | `<div>` | Initiates the action list item container. |
| `.pf-v6-c-action-list__group` | `<div>` | Initiates the action list group container. |
| `.pf-m-icons` | `.pf-v6-c-action-list`, `.pf-v6-c-action-list__group` | Modifies the action list and/or group to support icon buttons. If applied to `.pf-v6-c-action-list`, all nested groups will inherit this modification. |
