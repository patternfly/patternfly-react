---
id: Overflow menu
section: components
cssPrefix: pf-v6-c-overflow-menu
---import './overflow-menu.css'

## Introduction

The overflow menu component condenses actions inside `.pf-v6-c-overflow-menu__content` container into a single menu button wrapped in `.pf-v6-c-overflow-menu__control`.

The overflow menu relies on groups (`.pf-v6-c-overflow-menu__group`) and items (`.pf-v6-c-overflow-menu__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-v6-c-toolbar--spacer--base`, whose value is `--pf-v6-global--spacer--md` or 16px.

### Simple condensed

```html
<div class="pf-v6-c-overflow-menu" id="overflow-menu-simple">
  <div class="pf-v6-c-overflow-menu__control">
    <button
      class="pf-v6-c-menu-toggle pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Generic options"
      id="overflow-menu-simple-toggle"
    >
      <span class="pf-v6-c-menu-toggle__icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

```

### Simple

```html
<div class="pf-v6-c-overflow-menu" id="overflow-menu-simple-expanded">
  <div class="pf-v6-c-overflow-menu__content">
    <div class="pf-v6-c-overflow-menu__item">Item 1</div>
    <div class="pf-v6-c-overflow-menu__item">Item 2</div>
    <div class="pf-v6-c-overflow-menu__group">
      <div class="pf-v6-c-overflow-menu__item">Item 3</div>
      <div class="pf-v6-c-overflow-menu__item">Item 4</div>
      <div class="pf-v6-c-overflow-menu__item">Item 5</div>
    </div>
  </div>
</div>

```

### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-v6-c-overflow-menu__group` | `--pf-v6-c-overflow-menu__group--spacer` | `16px` |
| `.pf-v6-c-overflow-menu__item` | `--pf-v6-c-overflow-menu__item--spacer` | `16px` |

### Overflow menu item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-overflow-menu` | `<div>` | Initiates an overflow menu. **Required** |
| `.pf-v6-c-overflow-menu__content` | `<div>` | Initiates an overflow menu content section. **Required** |
| `.pf-v6-c-overflow-menu__control` | `<div>` | Initiates the overflow menu control. **Required** |
| `.pf-v6-c-overflow-menu__group` | `<div>` | Initiates an overflow menu group. |
| `.pf-v6-c-overflow-menu__item` | `<div>` | Initiates an overflow menu item. **Required** |

### Group types

```html
<div class="pf-v6-c-overflow-menu" id="overflow-menu-button-group-example">
  <div class="pf-v6-c-overflow-menu__content">
    <div class="pf-v6-c-overflow-menu__group">
      <div class="pf-v6-c-overflow-menu__item">Item 1</div>
      <div class="pf-v6-c-overflow-menu__item">Item 2</div>
      <div class="pf-v6-c-overflow-menu__item">Item 3</div>
    </div>
    <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary</span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-tertiary" type="button">
          <span class="pf-v6-c-button__text">Tertiary</span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-overflow-menu__group pf-m-icon-button-group">
      <div class="pf-v6-c-overflow-menu__item">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Align left"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-align-left" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Align center"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-align-center" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Align right"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-align-right" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

```

The action group consists of a primary and secondary action. Any additional actions are part of the overflow control menu.

### Overflow menu group types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-overflow-menu__group` | `<div>` | Initiates an overflow menu component group. |
| `.pf-m-button-group` | `.pf-v6-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-button-group--spacer)`. Child `.pf-v6-c-button` spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-v6-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-icon-button-group--spacer)`. Child `.pf-v6-c-button.pf-m-button-plain` spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-icon-button-group--space-items)`. |

### Additional options in menu (hidden)

```html
<div
  class="pf-v6-c-overflow-menu"
  id="overflow-menu-simple-additional-options-hidden"
>
  <div class="pf-v6-c-overflow-menu__control">
    <button
      class="pf-v6-c-menu-toggle pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Additional options in menu toggle"
      id="overflow-menu-simple-additional-options-hidden-toggle"
    >
      <span class="pf-v6-c-menu-toggle__icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

```

### Additional options in menu

```html
<div
  class="pf-v6-c-overflow-menu"
  id="overflow-menu-simple-additional-options-visible"
>
  <div class="pf-v6-c-overflow-menu__content">
    <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary</span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-tertiary" type="button">
          <span class="pf-v6-c-button__text">Tertiary</span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-overflow-menu__group pf-m-icon-button-group">
      <div class="pf-v6-c-overflow-menu__item">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Align left"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-align-left" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Align center"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-align-center" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Align right"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-align-right" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-overflow-menu__control">
    <button
      class="pf-v6-c-menu-toggle pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Additional options toggle"
      id="overflow-menu-simple-additional-options-visible-toggle"
    >
      <span class="pf-v6-c-menu-toggle__icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

```

## Persistent configuration

### Persistent additional options (hidden)

```html
<div class="pf-v6-c-overflow-menu" id="overflow-menu-persistent-hidden">
  <div class="pf-v6-c-overflow-menu__content">
    <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary</span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-overflow-menu__control">
    <button
      class="pf-v6-c-menu-toggle pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="menu with additional options"
      id="overflow-menu-persistent-hidden-toggle"
    >
      <span class="pf-v6-c-menu-toggle__icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

```

### Persistent additional options (visible)

```html
<div
  class="pf-v6-c-overflow-menu"
  id="overflow-menu-persistent-visible-example"
>
  <div class="pf-v6-c-overflow-menu__content">
    <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary</span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
      </div>
      <div class="pf-v6-c-overflow-menu__item">
        <button class="pf-v6-c-button pf-m-tertiary" type="button">
          <span class="pf-v6-c-button__text">Tertiary</span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-overflow-menu__control">
    <button
      class="pf-v6-c-menu-toggle pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Persistent options toggle"
      id="overflow-menu-persistent-visible-example-toggle"
    >
      <span class="pf-v6-c-menu-toggle__icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-overflow-menu` | `<div>` | Initiates an overflow menu. **Required** |
| `.pf-v6-c-overflow-menu__content` | `<div>` | Initiates an overflow menu content section. **Required** |
| `.pf-v6-c-overflow-menu__control` | `<div>` | Initiates the overflow menu control. **Required** |
| `.pf-v6-c-overflow-menu__group` | `<div>` | Initiates an overflow menu group. |
| `.pf-v6-c-overflow-menu__item` | `<div>` | Initiates an overflow menu item. **Required** |
| `.pf-m-button-group` | `.pf-v6-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-button-group--spacer)`. Child spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-v6-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-icon-button-group--spacer)`. Child spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-icon-button-group--space-items)`. |
