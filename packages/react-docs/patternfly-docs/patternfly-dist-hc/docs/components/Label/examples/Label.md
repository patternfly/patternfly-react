---
id: Label
section: components
cssPrefix: ['pf-v6-c-label','pf-v6-c-label-group']
---import './Label.css'

## Examples

### Filled

```html
<strong>Non-status:</strong>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Grey</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Grey icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="grey-filled-removable-text"
    >Grey removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="grey-filled-removable-button grey-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="grey-filled-icon-removable-text"
    >Grey icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="grey-filled-icon-removable-button grey-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Grey link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Grey button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="grey-filled-link-removable-text"
    >Grey link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="grey-filled-link-removable-button grey-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="grey-filled-button-removable-text"
    >Grey button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="grey-filled-button-removable-button grey-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Grey label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="grey-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Grey label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="grey-filled-truncated-with-icon-button grey-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="grey-filled-link-removable-disabled-text"
    >Grey link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="grey-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="grey-filled-link-removable-disabled-button grey-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="grey-filled-button-removable-disabled-text"
    >Grey button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="grey-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="grey-filled-button-removable-disabled-button grey-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Blue</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Blue icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="blue-filled-removable-text"
    >Blue removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="blue-filled-removable-button blue-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="blue-filled-icon-removable-text"
    >Blue icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="blue-filled-icon-removable-button blue-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Blue link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Blue button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="blue-filled-link-removable-text"
    >Blue link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="blue-filled-link-removable-button blue-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="blue-filled-button-removable-text"
    >Blue button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="blue-filled-button-removable-button blue-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Blue label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="blue-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Blue label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="blue-filled-truncated-with-icon-button blue-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-blue pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="blue-filled-link-removable-disabled-text"
    >Blue link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="blue-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="blue-filled-link-removable-disabled-button blue-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-blue pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="blue-filled-button-removable-disabled-text"
    >Blue button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="blue-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="blue-filled-button-removable-disabled-button blue-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Green</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Green icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="green-filled-removable-text"
    >Green removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="green-filled-removable-button green-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="green-filled-icon-removable-text"
    >Green icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="green-filled-icon-removable-button green-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Green link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Green button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="green-filled-link-removable-text"
    >Green link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="green-filled-link-removable-button green-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="green-filled-button-removable-text"
    >Green button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="green-filled-button-removable-button green-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Green label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="green-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Green label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="green-filled-truncated-with-icon-button green-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-green pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="green-filled-link-removable-disabled-text"
    >Green link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="green-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="green-filled-link-removable-disabled-button green-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-green pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="green-filled-button-removable-disabled-text"
    >Green button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="green-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="green-filled-button-removable-disabled-button green-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Orange</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Orange icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="orange-filled-removable-text"
    >Orange removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="orange-filled-removable-button orange-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orange-filled-icon-removable-text"
    >Orange icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="orange-filled-icon-removable-button orange-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Orange link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Orange button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="orange-filled-link-removable-text"
    >Orange link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="orange-filled-link-removable-button orange-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="orange-filled-button-removable-text"
    >Orange button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="orange-filled-button-removable-button orange-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Orange label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orange-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Orange label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="orange-filled-truncated-with-icon-button orange-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-orange pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orange-filled-link-removable-disabled-text"
    >Orange link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="orange-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="orange-filled-link-removable-disabled-button orange-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-orange pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orange-filled-button-removable-disabled-text"
    >Orange button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="orange-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="orange-filled-button-removable-disabled-button orange-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Red</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Red icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="red-filled-removable-text"
    >Red removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="red-filled-removable-button red-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="red-filled-icon-removable-text"
    >Red icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="red-filled-icon-removable-button red-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Red link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Red button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="red-filled-link-removable-text"
    >Red link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="red-filled-link-removable-button red-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="red-filled-button-removable-text"
    >Red button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="red-filled-button-removable-button red-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Red label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="red-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Red label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="red-filled-truncated-with-icon-button red-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-red pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="red-filled-link-removable-disabled-text"
    >Red link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="red-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="red-filled-link-removable-disabled-button red-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-red pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="red-filled-button-removable-disabled-text"
    >Red button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="red-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="red-filled-button-removable-disabled-button red-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Orange red</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Orange red icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="orangered-filled-removable-text"
    >Orange red removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="orangered-filled-removable-button orangered-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orangered-filled-icon-removable-text"
    >Orange red icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="orangered-filled-icon-removable-button orangered-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Orange red link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Orange red button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="orangered-filled-link-removable-text"
    >Orange red link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="orangered-filled-link-removable-button orangered-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="orangered-filled-button-removable-text"
    >Orange red button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="orangered-filled-button-removable-button orangered-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Orange red label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orangered-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Orange red label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="orangered-filled-truncated-with-icon-button orangered-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-orangered pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orangered-filled-link-removable-disabled-text"
    >Orange red link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="orangered-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="orangered-filled-link-removable-disabled-button orangered-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-orangered pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orangered-filled-button-removable-disabled-text"
    >Orange red button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="orangered-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="orangered-filled-button-removable-disabled-button orangered-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Purple</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Purple icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="purple-filled-removable-text"
    >Purple removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="purple-filled-removable-button purple-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="purple-filled-icon-removable-text"
    >Purple icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="purple-filled-icon-removable-button purple-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Purple link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Purple button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="purple-filled-link-removable-text"
    >Purple link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="purple-filled-link-removable-button purple-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="purple-filled-button-removable-text"
    >Purple button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="purple-filled-button-removable-button purple-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Purple label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="purple-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Purple label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="purple-filled-truncated-with-icon-button purple-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-purple pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="purple-filled-link-removable-disabled-text"
    >Purple link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="purple-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="purple-filled-link-removable-disabled-button purple-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-purple pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="purple-filled-button-removable-disabled-text"
    >Purple button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="purple-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="purple-filled-button-removable-disabled-button purple-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Teal</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Teal icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="teal-filled-removable-text"
    >Teal removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="teal-filled-removable-button teal-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="teal-filled-icon-removable-text"
    >Teal icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="teal-filled-icon-removable-button teal-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Teal link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Teal button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="teal-filled-link-removable-text"
    >Teal link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="teal-filled-link-removable-button teal-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="teal-filled-button-removable-text"
    >Teal button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="teal-filled-button-removable-button teal-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Teal label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="teal-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Teal label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="teal-filled-truncated-with-icon-button teal-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-teal pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="teal-filled-link-removable-disabled-text"
    >Teal link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="teal-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="teal-filled-link-removable-disabled-button teal-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-teal pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="teal-filled-button-removable-disabled-text"
    >Teal button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="teal-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="teal-filled-button-removable-disabled-button teal-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Yellow</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Yellow icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="yellow-filled-removable-text"
    >Yellow removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-filled-removable-button"
      aria-label="Remove"
      aria-labelledby="yellow-filled-removable-button yellow-filled-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="yellow-filled-icon-removable-text"
    >Yellow icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-filled-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="yellow-filled-icon-removable-button yellow-filled-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Yellow link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Yellow button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="yellow-filled-link-removable-text"
    >Yellow link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-filled-link-removable-button"
      aria-label="Remove"
      aria-labelledby="yellow-filled-link-removable-button yellow-filled-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="yellow-filled-button-removable-text"
    >Yellow button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-filled-button-removable-button"
      aria-label="Remove"
      aria-labelledby="yellow-filled-button-removable-button yellow-filled-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Yellow label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="yellow-filled-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Yellow label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-filled-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="yellow-filled-truncated-with-icon-button yellow-filled-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-yellow pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="yellow-filled-link-removable-disabled-text"
    >Yellow link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="yellow-filled-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="yellow-filled-link-removable-disabled-button yellow-filled-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-yellow pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="yellow-filled-button-removable-disabled-text"
    >Yellow button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="yellow-filled-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="yellow-filled-button-removable-disabled-button yellow-filled-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<strong>Status:</strong>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-success">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Success</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-success">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-filled-status-removable-text"
    >Success removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="success-filled-status-removable-button"
      aria-label="Remove"
      aria-labelledby="success-filled-status-removable-button success-filled-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-success pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Success link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-success pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Success button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-success pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-filled-status-link-removable-text"
    >Success link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="success-filled-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="success-filled-status-link-removable-button success-filled-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-success pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-filled-status-button-removable-text"
    >Success button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="success-filled-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="success-filled-status-button-removable-button success-filled-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-success">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Success, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-success">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-filled-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Success removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="success-filled-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="success-filled-status-truncated-removable-button success-filled-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-success pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-filled-status-link-removable-disabled-text"
    >Success link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="success-filled-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="success-filled-status-link-removable-disabled-button success-filled-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-success pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-filled-status-button-removable-disabled-text"
    >Success button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="success-filled-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="success-filled-status-button-removable-disabled-button success-filled-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-warning">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Warning</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-warning">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-filled-status-removable-text"
    >Warning removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="warning-filled-status-removable-button"
      aria-label="Remove"
      aria-labelledby="warning-filled-status-removable-button warning-filled-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-warning pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Warning link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-warning pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Warning button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-warning pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-filled-status-link-removable-text"
    >Warning link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="warning-filled-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="warning-filled-status-link-removable-button warning-filled-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-warning pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-filled-status-button-removable-text"
    >Warning button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="warning-filled-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="warning-filled-status-button-removable-button warning-filled-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-warning">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Warning, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-warning">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-filled-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Warning removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="warning-filled-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="warning-filled-status-truncated-removable-button warning-filled-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-warning pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-filled-status-link-removable-disabled-text"
    >Warning link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="warning-filled-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="warning-filled-status-link-removable-disabled-button warning-filled-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-warning pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-filled-status-button-removable-disabled-text"
    >Warning button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="warning-filled-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="warning-filled-status-button-removable-disabled-button warning-filled-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-danger">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Danger</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-danger">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-filled-status-removable-text"
    >Danger removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="danger-filled-status-removable-button"
      aria-label="Remove"
      aria-labelledby="danger-filled-status-removable-button danger-filled-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-danger pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Danger link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-danger pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Danger button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-danger pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-filled-status-link-removable-text"
    >Danger link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="danger-filled-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="danger-filled-status-link-removable-button danger-filled-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-danger pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-filled-status-button-removable-text"
    >Danger button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="danger-filled-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="danger-filled-status-button-removable-button danger-filled-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-danger">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Danger, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-danger">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-filled-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Danger removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="danger-filled-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="danger-filled-status-truncated-removable-button danger-filled-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-danger pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-filled-status-link-removable-disabled-text"
    >Danger link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="danger-filled-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="danger-filled-status-link-removable-disabled-button danger-filled-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-danger pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-filled-status-button-removable-disabled-text"
    >Danger button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="danger-filled-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="danger-filled-status-button-removable-disabled-button danger-filled-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-info">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Info</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-info">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-filled-status-removable-text"
    >Info removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="info-filled-status-removable-button"
      aria-label="Remove"
      aria-labelledby="info-filled-status-removable-button info-filled-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-info pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Info link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-info pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Info button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-info pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-filled-status-link-removable-text"
    >Info link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="info-filled-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="info-filled-status-link-removable-button info-filled-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-info pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-filled-status-button-removable-text"
    >Info button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="info-filled-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="info-filled-status-button-removable-button info-filled-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-info">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Info, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-info">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-filled-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Info removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="info-filled-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="info-filled-status-truncated-removable-button info-filled-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-info pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-filled-status-link-removable-disabled-text"
    >Info link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="info-filled-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="info-filled-status-link-removable-disabled-button info-filled-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-info pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-filled-status-button-removable-disabled-text"
    >Info button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="info-filled-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="info-filled-status-button-removable-disabled-button info-filled-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-filled pf-m-custom">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Custom</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-custom">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-filled-status-removable-text"
    >Custom removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="custom-filled-status-removable-button"
      aria-label="Remove"
      aria-labelledby="custom-filled-status-removable-button custom-filled-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-custom pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Custom link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-custom pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Custom button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-custom pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-filled-status-link-removable-text"
    >Custom link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="custom-filled-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="custom-filled-status-link-removable-button custom-filled-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-custom pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-filled-status-button-removable-text"
    >Custom button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="custom-filled-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="custom-filled-status-button-removable-button custom-filled-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-custom">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Custom, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-custom">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-filled-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Custom removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="custom-filled-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="custom-filled-status-truncated-removable-button custom-filled-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-custom pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-filled-status-link-removable-disabled-text"
    >Custom link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="custom-filled-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="custom-filled-status-link-removable-disabled-button custom-filled-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-disabled pf-m-custom pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-filled-status-button-removable-disabled-text"
    >Custom button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="custom-filled-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="custom-filled-status-button-removable-disabled-button custom-filled-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

```

### Outline

```html
<strong>Non-status:</strong>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Grey</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Grey icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="grey-outline-removable-text"
    >Grey removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="grey-outline-removable-button grey-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="grey-outline-icon-removable-text"
    >Grey icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="grey-outline-icon-removable-button grey-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Grey link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Grey button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="grey-outline-link-removable-text"
    >Grey link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="grey-outline-link-removable-button grey-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="grey-outline-button-removable-text"
    >Grey button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="grey-outline-button-removable-button grey-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Grey label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="grey-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Grey label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="grey-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="grey-outline-truncated-with-icon-button grey-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="grey-outline-link-removable-disabled-text"
    >Grey link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="grey-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="grey-outline-link-removable-disabled-button grey-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="grey-outline-button-removable-disabled-text"
    >Grey button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="grey-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="grey-outline-button-removable-disabled-button grey-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Blue</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Blue icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="blue-outline-removable-text"
    >Blue removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="blue-outline-removable-button blue-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="blue-outline-icon-removable-text"
    >Blue icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="blue-outline-icon-removable-button blue-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Blue link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Blue button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="blue-outline-link-removable-text"
    >Blue link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="blue-outline-link-removable-button blue-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="blue-outline-button-removable-text"
    >Blue button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="blue-outline-button-removable-button blue-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Blue label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="blue-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Blue label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="blue-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="blue-outline-truncated-with-icon-button blue-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-blue pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="blue-outline-link-removable-disabled-text"
    >Blue link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="blue-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="blue-outline-link-removable-disabled-button blue-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-blue pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="blue-outline-button-removable-disabled-text"
    >Blue button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="blue-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="blue-outline-button-removable-disabled-button blue-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Green</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Green icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="green-outline-removable-text"
    >Green removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="green-outline-removable-button green-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="green-outline-icon-removable-text"
    >Green icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="green-outline-icon-removable-button green-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Green link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Green button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="green-outline-link-removable-text"
    >Green link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="green-outline-link-removable-button green-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="green-outline-button-removable-text"
    >Green button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="green-outline-button-removable-button green-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Green label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-green">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="green-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Green label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="green-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="green-outline-truncated-with-icon-button green-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-green pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="green-outline-link-removable-disabled-text"
    >Green link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="green-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="green-outline-link-removable-disabled-button green-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-green pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="green-outline-button-removable-disabled-text"
    >Green button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="green-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="green-outline-button-removable-disabled-button green-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Orange</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Orange icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="orange-outline-removable-text"
    >Orange removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="orange-outline-removable-button orange-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orange-outline-icon-removable-text"
    >Orange icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="orange-outline-icon-removable-button orange-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Orange link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Orange button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="orange-outline-link-removable-text"
    >Orange link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="orange-outline-link-removable-button orange-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="orange-outline-button-removable-text"
    >Orange button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="orange-outline-button-removable-button orange-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Orange label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orange">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orange-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Orange label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orange-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="orange-outline-truncated-with-icon-button orange-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-orange pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orange-outline-link-removable-disabled-text"
    >Orange link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="orange-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="orange-outline-link-removable-disabled-button orange-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-orange pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orange-outline-button-removable-disabled-text"
    >Orange button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="orange-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="orange-outline-button-removable-disabled-button orange-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Red</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Red icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="red-outline-removable-text"
    >Red removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="red-outline-removable-button red-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="red-outline-icon-removable-text"
    >Red icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="red-outline-icon-removable-button red-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Red link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Red button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="red-outline-link-removable-text"
    >Red link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="red-outline-link-removable-button red-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="red-outline-button-removable-text"
    >Red button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="red-outline-button-removable-button red-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Red label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-red">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="red-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Red label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="red-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="red-outline-truncated-with-icon-button red-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-red pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="red-outline-link-removable-disabled-text"
    >Red link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="red-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="red-outline-link-removable-disabled-button red-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-red pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="red-outline-button-removable-disabled-text"
    >Red button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="red-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="red-outline-button-removable-disabled-button red-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Orange red</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Orange red icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="orangered-outline-removable-text"
    >Orange red removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="orangered-outline-removable-button orangered-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orangered-outline-icon-removable-text"
    >Orange red icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="orangered-outline-icon-removable-button orangered-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Orange red link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Orange red button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="orangered-outline-link-removable-text"
    >Orange red link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="orangered-outline-link-removable-button orangered-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="orangered-outline-button-removable-text"
    >Orange red button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="orangered-outline-button-removable-button orangered-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Orange red label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-orangered">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orangered-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Orange red label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="orangered-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="orangered-outline-truncated-with-icon-button orangered-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-orangered pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orangered-outline-link-removable-disabled-text"
    >Orange red link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="orangered-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="orangered-outline-link-removable-disabled-button orangered-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-orangered pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="orangered-outline-button-removable-disabled-text"
    >Orange red button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="orangered-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="orangered-outline-button-removable-disabled-button orangered-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Purple</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Purple icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="purple-outline-removable-text"
    >Purple removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="purple-outline-removable-button purple-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="purple-outline-icon-removable-text"
    >Purple icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="purple-outline-icon-removable-button purple-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Purple link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Purple button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="purple-outline-link-removable-text"
    >Purple link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="purple-outline-link-removable-button purple-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="purple-outline-button-removable-text"
    >Purple button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="purple-outline-button-removable-button purple-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Purple label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-purple">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="purple-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Purple label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="purple-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="purple-outline-truncated-with-icon-button purple-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-purple pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="purple-outline-link-removable-disabled-text"
    >Purple link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="purple-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="purple-outline-link-removable-disabled-button purple-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-purple pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="purple-outline-button-removable-disabled-text"
    >Purple button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="purple-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="purple-outline-button-removable-disabled-button purple-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Teal</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Teal icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="teal-outline-removable-text"
    >Teal removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="teal-outline-removable-button teal-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="teal-outline-icon-removable-text"
    >Teal icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="teal-outline-icon-removable-button teal-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Teal link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Teal button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="teal-outline-link-removable-text"
    >Teal link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="teal-outline-link-removable-button teal-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="teal-outline-button-removable-text"
    >Teal button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="teal-outline-button-removable-button teal-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Teal label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-teal">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="teal-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Teal label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="teal-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="teal-outline-truncated-with-icon-button teal-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-teal pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="teal-outline-link-removable-disabled-text"
    >Teal link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="teal-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="teal-outline-link-removable-disabled-button teal-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-teal pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="teal-outline-button-removable-disabled-text"
    >Teal button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="teal-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="teal-outline-button-removable-disabled-button teal-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Yellow</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Yellow icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="yellow-outline-removable-text"
    >Yellow removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="yellow-outline-removable-button yellow-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="yellow-outline-icon-removable-text"
    >Yellow icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="yellow-outline-icon-removable-button yellow-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Yellow link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Yellow button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="yellow-outline-link-removable-text"
    >Yellow link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="yellow-outline-link-removable-button yellow-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="yellow-outline-button-removable-text"
    >Yellow button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="yellow-outline-button-removable-button yellow-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Yellow label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-yellow">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="yellow-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Yellow label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="yellow-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="yellow-outline-truncated-with-icon-button yellow-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-yellow pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="yellow-outline-link-removable-disabled-text"
    >Yellow link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="yellow-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="yellow-outline-link-removable-disabled-button yellow-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-yellow pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="yellow-outline-button-removable-disabled-text"
    >Yellow button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="yellow-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="yellow-outline-button-removable-disabled-button yellow-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<strong>Status:</strong>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-success">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Success</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-success">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-outline-status-removable-text"
    >Success removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="success-outline-status-removable-button"
      aria-label="Remove"
      aria-labelledby="success-outline-status-removable-button success-outline-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-success pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Success link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-success pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Success button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-success pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-outline-status-link-removable-text"
    >Success link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="success-outline-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="success-outline-status-link-removable-button success-outline-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-success pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-outline-status-button-removable-text"
    >Success button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="success-outline-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="success-outline-status-button-removable-button success-outline-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-success">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Success, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-success">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-outline-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Success removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="success-outline-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="success-outline-status-truncated-removable-button success-outline-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-success pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-outline-status-link-removable-disabled-text"
    >Success link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="success-outline-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="success-outline-status-link-removable-disabled-button success-outline-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-success pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="success-outline-status-button-removable-disabled-text"
    >Success button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="success-outline-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="success-outline-status-button-removable-disabled-button success-outline-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-warning">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Warning</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-warning">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-outline-status-removable-text"
    >Warning removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="warning-outline-status-removable-button"
      aria-label="Remove"
      aria-labelledby="warning-outline-status-removable-button warning-outline-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-warning pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Warning link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-warning pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Warning button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-warning pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-outline-status-link-removable-text"
    >Warning link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="warning-outline-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="warning-outline-status-link-removable-button warning-outline-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-warning pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-outline-status-button-removable-text"
    >Warning button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="warning-outline-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="warning-outline-status-button-removable-button warning-outline-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-warning">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Warning, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-warning">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-outline-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Warning removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="warning-outline-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="warning-outline-status-truncated-removable-button warning-outline-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-warning pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-outline-status-link-removable-disabled-text"
    >Warning link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="warning-outline-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="warning-outline-status-link-removable-disabled-button warning-outline-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-warning pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="warning-outline-status-button-removable-disabled-text"
    >Warning button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="warning-outline-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="warning-outline-status-button-removable-disabled-button warning-outline-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-danger">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Danger</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-danger">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-outline-status-removable-text"
    >Danger removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="danger-outline-status-removable-button"
      aria-label="Remove"
      aria-labelledby="danger-outline-status-removable-button danger-outline-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-danger pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Danger link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-danger pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Danger button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-danger pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-outline-status-link-removable-text"
    >Danger link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="danger-outline-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="danger-outline-status-link-removable-button danger-outline-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-danger pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-outline-status-button-removable-text"
    >Danger button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="danger-outline-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="danger-outline-status-button-removable-button danger-outline-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-danger">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Danger, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-danger">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-outline-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Danger removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="danger-outline-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="danger-outline-status-truncated-removable-button danger-outline-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-danger pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-outline-status-link-removable-disabled-text"
    >Danger link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="danger-outline-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="danger-outline-status-link-removable-disabled-button danger-outline-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-danger pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="danger-outline-status-button-removable-disabled-text"
    >Danger button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="danger-outline-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="danger-outline-status-button-removable-disabled-button danger-outline-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-info">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Info</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-info">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-outline-status-removable-text"
    >Info removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="info-outline-status-removable-button"
      aria-label="Remove"
      aria-labelledby="info-outline-status-removable-button info-outline-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-info pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Info link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-info pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Info button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-info pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-outline-status-link-removable-text"
    >Info link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="info-outline-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="info-outline-status-link-removable-button info-outline-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-info pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-outline-status-button-removable-text"
    >Info button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="info-outline-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="info-outline-status-button-removable-button info-outline-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-info">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Info, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-info">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-outline-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Info removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="info-outline-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="info-outline-status-truncated-removable-button info-outline-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-info pf-m-clickable">
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-outline-status-link-removable-disabled-text"
    >Info link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="info-outline-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="info-outline-status-link-removable-disabled-button info-outline-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-info pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="info-outline-status-button-removable-disabled-text"
    >Info button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="info-outline-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="info-outline-status-button-removable-disabled-button info-outline-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-custom">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Custom</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-custom">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-outline-status-removable-text"
    >Custom removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="custom-outline-status-removable-button"
      aria-label="Remove"
      aria-labelledby="custom-outline-status-removable-button custom-outline-status-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-custom pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Custom link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-custom pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Custom button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-custom pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-outline-status-link-removable-text"
    >Custom link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="custom-outline-status-link-removable-button"
      aria-label="Remove"
      aria-labelledby="custom-outline-status-link-removable-button custom-outline-status-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-custom pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-outline-status-button-removable-text"
    >Custom button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="custom-outline-status-button-removable-button"
      aria-label="Remove"
      aria-labelledby="custom-outline-status-button-removable-button custom-outline-status-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-custom">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Custom, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-custom">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-outline-status-truncated-removable-text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Custom removable, max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="custom-outline-status-truncated-removable-button"
      aria-label="Remove"
      aria-labelledby="custom-outline-status-truncated-removable-button custom-outline-status-truncated-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-custom pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-outline-status-link-removable-disabled-text"
    >Custom link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="custom-outline-status-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="custom-outline-status-link-removable-disabled-button custom-outline-status-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-disabled pf-m-custom pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="custom-outline-status-button-removable-disabled-text"
    >Custom button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="custom-outline-status-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="custom-outline-status-button-removable-disabled-button custom-outline-status-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

```

### Compact

```html
<span class="pf-v6-c-label pf-m-filled pf-m-compact">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Compact</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Compact icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="compact-removable-text"
    >Compact removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-removable-button"
      aria-label="Remove"
      aria-labelledby="compact-removable-button compact-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="compact-icon-removable-text"
    >Compact icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="compact-icon-removable-button compact-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Compact link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Compact button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="compact-link-removable-text"
    >Compact link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-link-removable-button"
      aria-label="Remove"
      aria-labelledby="compact-link-removable-button compact-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="compact-button-removable-text"
    >Compact button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-button-removable-button"
      aria-label="Remove"
      aria-labelledby="compact-button-removable-button compact-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Compact label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-filled pf-m-compact">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="compact-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Compact label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="compact-truncated-with-icon-button compact-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-compact pf-m-disabled pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="compact-link-removable-disabled-text"
    >Compact link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="compact-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="compact-link-removable-disabled-button compact-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-compact pf-m-disabled pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="compact-button-removable-disabled-text"
    >Compact button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="compact-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="compact-button-removable-disabled-button compact-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<br />
<br />

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Compact</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-label__text">Compact icon</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span
      class="pf-v6-c-label__text"
      id="compact-outline-removable-text"
    >Compact removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-outline-removable-button"
      aria-label="Remove"
      aria-labelledby="compact-outline-removable-button compact-outline-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="compact-outline-icon-removable-text"
    >Compact icon removable</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-outline-icon-removable-button"
      aria-label="Remove"
      aria-labelledby="compact-outline-icon-removable-button compact-outline-icon-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span class="pf-v6-c-label__text">Compact link</span>
  </a>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span class="pf-v6-c-label__text">Compact button</span>
  </button>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue pf-m-clickable">
  <a class="pf-v6-c-label__content pf-m-clickable" href="#">
    <span
      class="pf-v6-c-label__text"
      id="compact-outline-link-removable-text"
    >Compact link removable</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-outline-link-removable-button"
      aria-label="Remove"
      aria-labelledby="compact-outline-link-removable-button compact-outline-link-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue pf-m-clickable">
  <button class="pf-v6-c-label__content pf-m-clickable" type="button">
    <span
      class="pf-v6-c-label__text"
      id="compact-outline-button-removable-text"
    >Compact button removable</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-outline-button-removable-button"
      aria-label="Remove"
      aria-labelledby="compact-outline-button-removable-button compact-outline-button-removable-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      style="--pf-v6-c-label__text--MaxWidth: 28ch"
    >Compact label, max-width truncation customization</span>
  </span>
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-blue">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="compact-outline-truncated-with-icon-text"
      style="--pf-v6-c-label__text--MaxWidth: 38ch"
    >Compact label with icon and set max-width truncation customization</span>
  </span>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-outline-truncated-with-icon-button"
      aria-label="Remove"
      aria-labelledby="compact-outline-truncated-with-icon-button compact-outline-truncated-with-icon-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-disabled pf-m-blue pf-m-clickable"
>
  <a
    class="pf-v6-c-label__content pf-m-clickable"
    href="#"
    tabindex="-1"
    aria-disabled="true"
  >
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="compact-outline-link-removable-disabled-text"
    >Compact link removable (disabled)</span>
  </a>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="compact-outline-link-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="compact-outline-link-removable-disabled-button compact-outline-link-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-disabled pf-m-blue pf-m-clickable"
>
  <button class="pf-v6-c-label__content pf-m-clickable" type="button" disabled>
    <span class="pf-v6-c-label__icon">
      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
    </span>
    <span
      class="pf-v6-c-label__text"
      id="compact-outline-button-removable-disabled-text"
    >Compact button removable (disabled)</span>
  </button>
  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      disabled
      id="compact-outline-button-removable-disabled-button"
      aria-label="Remove"
      aria-labelledby="compact-outline-button-removable-disabled-button compact-outline-button-removable-disabled-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

```

### Overflow

This style of label is used to indicate overflow within a label group.

```html
<button class="pf-v6-c-label pf-m-overflow" type="button">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Overflow</span>
  </span>
</button>

```

### Editable

**Note: Editable label behavior must be handled with JavaScript.**

```html
<span class="pf-v6-c-label pf-m-filled pf-m-editable pf-m-blue">
  <button
    class="pf-v6-c-label__content"
    id="editable-label-editable-content"
    aria-label="Editable text"
  >
    <span class="pf-v6-c-label__text" id="editable-label-text">Editable label</span>
  </button>

  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="editable-label-button"
      aria-label="Remove"
      aria-labelledby="editable-label-button editable-label-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-filled pf-m-editable pf-m-editable-active pf-m-blue"
>
  <input
    class="pf-v6-c-label__content"
    id="editable-label-active-editable-content"
    type="text"
    value="Editable active"
    aria-label="Editable text"
  />
</span>

<span class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-editable pf-m-blue">
  <button
    class="pf-v6-c-label__content"
    id="compact-editable-label-editable-content"
    aria-label="Editable text"
  >
    <span
      class="pf-v6-c-label__text"
      id="compact-editable-label-text"
    >Compact editable label</span>
  </button>

  <span class="pf-v6-c-label__actions">
    <button
      class="pf-v6-c-button pf-m-no-padding pf-m-plain"
      type="button"
      id="compact-editable-label-button"
      aria-label="Remove"
      aria-labelledby="compact-editable-label-button compact-editable-label-text"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </span>
    </button>
  </span>
</span>

<span
  class="pf-v6-c-label pf-m-outline pf-m-compact pf-m-editable pf-m-editable-active pf-m-blue"
>
  <input
    class="pf-v6-c-label__content"
    id="compact-editable-label-active-editable-content"
    type="text"
    value="Compact editable active"
    aria-label="Editable text"
  />
</span>

```

### Add label

This style of label is used to add new labels to a label group.

```html
<button class="pf-v6-c-label pf-m-add" type="button">
  <span class="pf-v6-c-label__content">
    <span class="pf-v6-c-label__text">Add Label</span>
  </span>
</button>

```

### Basic label group

Use a label group to display multiple labels at once.

```html
<div class="pf-v6-c-label-group">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>

<br />
<br />

<div class="pf-v6-c-label-group">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">A</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">T</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">I</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>

```

### Label group with overflow

```html
<div class="pf-v6-c-label-group">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <button class="pf-v6-c-label pf-m-overflow pf-m-blue" type="button">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">3 more</span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</div>

```

### Label group with overflow expanded

```html
<div class="pf-v6-c-label-group">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-teal">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 4</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-purple">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 5</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <button class="pf-v6-c-label pf-m-overflow" type="button">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">3 less</span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</div>

```

### Editable label group with add button

The contents of a label group can be modified by removing labels or adding new ones using the Add button.

```html
<div class="pf-v6-c-label-group">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <button class="pf-v6-c-label pf-m-add" type="button">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">Add label</span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</div>

```

### Label group with category label

```html
<div class="pf-v6-c-label-group pf-m-category">
  <div class="pf-v6-c-label-group__main">
    <span
      class="pf-v6-c-label-group__label"
      aria-hidden="true"
      id="label-group-category-label"
    >Group label</span>
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-labelledby="label-group-category-label"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>

```

### Label group with removable categories

```html
<div class="pf-v6-c-label-group pf-m-category">
  <div class="pf-v6-c-label-group__main">
    <span
      class="pf-v6-c-label-group__label"
      aria-hidden="true"
      id="label-group-category-removable-label"
    >Group label</span>
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-labelledby="label-group-category-removable-label"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-teal">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 4</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-orange">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 5</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-red">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 6</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
  <div class="pf-v6-c-label-group__close">
    <button
      class="pf-v6-c-button pf-m-small pf-m-plain"
      type="button"
      aria-labelledby="label-group-category-removable-button label-group-category-removable-label"
      aria-label="Close label group"
      id="label-group-category-removable-button"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

```

### Vertical label group

```html
<div class="pf-v6-c-label-group pf-m-vertical">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>

```

### Vertical label group with overflow

```html
<div class="pf-v6-c-label-group pf-m-vertical">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <button class="pf-v6-c-label pf-m-overflow" type="button">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">3 more</span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</div>

```

### Vertical label group with overflow expanded

```html
<div class="pf-v6-c-label-group pf-m-vertical">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-teal">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 4</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-purple">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 5</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <button class="pf-v6-c-label pf-m-overflow" type="button">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">3 less</span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</div>

```

### Vertical label group with category

```html
<div class="pf-v6-c-label-group pf-m-vertical pf-m-category">
  <div class="pf-v6-c-label-group__main">
    <span
      class="pf-v6-c-label-group__label"
      aria-hidden="true"
      id="label-group-vertical-category-label"
    >Group label</span>
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-labelledby="label-group-vertical-category-label"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>

```

### Vertical label group with removable category

```html
<div class="pf-v6-c-label-group pf-m-vertical pf-m-category">
  <div class="pf-v6-c-label-group__main">
    <span
      class="pf-v6-c-label-group__label"
      aria-hidden="true"
      id="label-group-vertical-category-removable-label"
    >Group label</span>
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-labelledby="label-group-vertical-category-removable-label"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
  <div class="pf-v6-c-label-group__close">
    <button
      class="pf-v6-c-button pf-m-small pf-m-plain"
      type="button"
      aria-labelledby="label-group-vertical-category-removable-button label-group-vertical-category-removable-label"
      aria-label="Close label group"
      id="label-group-vertical-category-removable-button"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

```

In addition to the JavaScript management of [editable labels](/components/label#editable), dynamic label groups also need:

* `.pf-v6-c-label-group.pf-m-editable` onClick event should (excluding labels within) set focus on `.pf-v6-c-label-group__textarea`

### Editable labels, dynamic label group

```html
<div class="pf-v6-c-label-group pf-m-editable">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-editable pf-m-blue">
          <button
            class="pf-v6-c-label__content"
            id="editable-labels-editable-group-example-editable-label-editable-1-editable-content"
            aria-label="Editable text"
          >
            <span
              class="pf-v6-c-label__text"
              id="editable-labels-editable-group-example-editable-label-editable-1-text"
            >Editable label 1</span>
          </button>

          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="editable-labels-editable-group-example-editable-label-editable-1-button"
              aria-label="Remove"
              aria-labelledby="editable-labels-editable-group-example-editable-label-editable-1-button editable-labels-editable-group-example-editable-label-editable-1-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-editable pf-m-blue">
          <button
            class="pf-v6-c-label__content"
            id="editable-labels-editable-group-example-editable-label-editable-2-editable-content"
            aria-label="Editable text"
          >
            <span
              class="pf-v6-c-label__text"
              id="editable-labels-editable-group-example-editable-label-editable-2-text"
            >Editable label 2</span>
          </button>

          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="editable-labels-editable-group-example-editable-label-editable-2-button"
              aria-label="Remove"
              aria-labelledby="editable-labels-editable-group-example-editable-label-editable-2-button editable-labels-editable-group-example-editable-label-editable-2-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-editable pf-m-blue">
          <button
            class="pf-v6-c-label__content"
            id="editable-labels-editable-group-example-editable-label-editable-3-editable-content"
            aria-label="Editable text"
          >
            <span
              class="pf-v6-c-label__text"
              id="editable-labels-editable-group-example-editable-label-editable-3-text"
            >Editable label 3</span>
          </button>

          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="editable-labels-editable-group-example-editable-label-editable-3-button"
              aria-label="Remove"
              aria-labelledby="editable-labels-editable-group-example-editable-label-editable-3-button editable-labels-editable-group-example-editable-label-editable-3-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item pf-m-textarea">
        <textarea
          class="pf-v6-c-label-group__textarea"
          rows="1"
          tabindex="0"
          aria-label="New label"
        ></textarea>
      </li>
    </ul>
  </div>
</div>

```

### Editable labels, label active, dynamic label group

```html
<div class="pf-v6-c-label-group pf-m-editable">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-editable pf-m-blue">
          <button
            class="pf-v6-c-label__content"
            id="editable-labels-label-active-editable-group-example-editable-label-editable-1-editable-content"
            aria-label="Editable text"
          >
            <span
              class="pf-v6-c-label__text"
              id="editable-labels-label-active-editable-group-example-editable-label-editable-1-text"
            >Editable label 1</span>
          </button>

          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="editable-labels-label-active-editable-group-example-editable-label-editable-1-button"
              aria-label="Remove"
              aria-labelledby="editable-labels-label-active-editable-group-example-editable-label-editable-1-button editable-labels-label-active-editable-group-example-editable-label-editable-1-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-editable pf-m-blue">
          <button
            class="pf-v6-c-label__content"
            id="editable-labels-label-active-editable-group-example-editable-label-editable-2-editable-content"
            aria-label="Editable text"
          >
            <span
              class="pf-v6-c-label__text"
              id="editable-labels-label-active-editable-group-example-editable-label-editable-2-text"
            >Editable label 2</span>
          </button>

          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="editable-labels-label-active-editable-group-example-editable-label-editable-2-button"
              aria-label="Remove"
              aria-labelledby="editable-labels-label-active-editable-group-example-editable-label-editable-2-button editable-labels-label-active-editable-group-example-editable-label-editable-2-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span
          class="pf-v6-c-label pf-m-editable pf-m-editable-active pf-m-blue"
        >
          <input
            class="pf-v6-c-label__content"
            id="editable-labels-label-active-editable-group-example-editable-label-editable-3-editable-content"
            type="text"
            value="Editable label 3, active"
            aria-label="Editable text"
          />
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item pf-m-textarea">
        <textarea
          class="pf-v6-c-label-group__textarea"
          rows="1"
          tabindex="0"
          aria-label="New label"
        ></textarea>
      </li>
    </ul>
  </div>
</div>

```

### Static labels, dynamic label group

```html
<div class="pf-v6-c-label-group pf-m-editable">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span
              class="pf-v6-c-label__text"
              id="static-labels-dynamic-label-group-example-editable-label-static-1-text"
            >Static label 1</span>
          </span>
          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="static-labels-dynamic-label-group-example-editable-label-static-1-button"
              aria-label="Remove"
              aria-labelledby="static-labels-dynamic-label-group-example-editable-label-static-1-button static-labels-dynamic-label-group-example-editable-label-static-1-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span
              class="pf-v6-c-label__text"
              id="static-labels-dynamic-label-group-example-editable-label-static-2-text"
            >Static label 2</span>
          </span>
          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="static-labels-dynamic-label-group-example-editable-label-static-2-button"
              aria-label="Remove"
              aria-labelledby="static-labels-dynamic-label-group-example-editable-label-static-2-button static-labels-dynamic-label-group-example-editable-label-static-2-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span
              class="pf-v6-c-label__text"
              id="static-labels-dynamic-label-group-example-editable-label-static-3-text"
            >Static label 3</span>
          </span>
          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="static-labels-dynamic-label-group-example-editable-label-static-3-button"
              aria-label="Remove"
              aria-labelledby="static-labels-dynamic-label-group-example-editable-label-static-3-button static-labels-dynamic-label-group-example-editable-label-static-3-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item pf-m-textarea">
        <textarea
          class="pf-v6-c-label-group__textarea"
          rows="1"
          tabindex="0"
          aria-label="New label"
        ></textarea>
      </li>
    </ul>
  </div>
</div>

```

### Mixed labels (static / editable), dynamic label group

```html
<div class="pf-v6-c-label-group pf-m-editable">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span
              class="pf-v6-c-label__text"
              id="mixed-labels-dynamic-label-group-example-editable-label-static-1-text"
            >Static label 1</span>
          </span>
          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="mixed-labels-dynamic-label-group-example-editable-label-static-1-button"
              aria-label="Remove"
              aria-labelledby="mixed-labels-dynamic-label-group-example-editable-label-static-1-button mixed-labels-dynamic-label-group-example-editable-label-static-1-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-green">
          <span class="pf-v6-c-label__content">
            <span
              class="pf-v6-c-label__text"
              id="mixed-labels-dynamic-label-group-example-editable-label-static-2-text"
            >Static label 2</span>
          </span>
          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="mixed-labels-dynamic-label-group-example-editable-label-static-2-button"
              aria-label="Remove"
              aria-labelledby="mixed-labels-dynamic-label-group-example-editable-label-static-2-button mixed-labels-dynamic-label-group-example-editable-label-static-2-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-editable pf-m-blue">
          <button
            class="pf-v6-c-label__content"
            id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-1-editable-content"
            aria-label="Editable text"
          >
            <span
              class="pf-v6-c-label__text"
              id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-1-text"
            >Dynamic, editable label 1</span>
          </button>

          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-1-button"
              aria-label="Remove"
              aria-labelledby="mixed-labels-dynamic-label-group-example-editable-label-dynamic-1-button mixed-labels-dynamic-label-group-example-editable-label-dynamic-1-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-editable pf-m-blue">
          <button
            class="pf-v6-c-label__content"
            id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-2-editable-content"
            aria-label="Editable text"
          >
            <span
              class="pf-v6-c-label__text"
              id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-2-text"
            >Dynamic, editable label 2</span>
          </button>

          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-2-button"
              aria-label="Remove"
              aria-labelledby="mixed-labels-dynamic-label-group-example-editable-label-dynamic-2-button mixed-labels-dynamic-label-group-example-editable-label-dynamic-2-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-editable pf-m-blue">
          <button
            class="pf-v6-c-label__content"
            id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-3-editable-content"
            aria-label="Editable text"
          >
            <span
              class="pf-v6-c-label__text"
              id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-3-text"
            >Dynamic, editable label 3</span>
          </button>

          <span class="pf-v6-c-label__actions">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              id="mixed-labels-dynamic-label-group-example-editable-label-dynamic-3-button"
              aria-label="Remove"
              aria-labelledby="mixed-labels-dynamic-label-group-example-editable-label-dynamic-3-button mixed-labels-dynamic-label-group-example-editable-label-dynamic-3-text"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times fa-fw" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item pf-m-textarea">
        <textarea
          class="pf-v6-c-label-group__textarea"
          rows="1"
          tabindex="0"
          aria-label="New label"
        ></textarea>
      </li>
    </ul>
  </div>
</div>

```

### Label group with compact labels

```html
<div class="pf-v6-c-label-group">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>

```

### Label group with compact labels and overflow

```html
<div class="pf-v6-c-label-group">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <button class="pf-v6-c-label pf-m-compact pf-m-overflow" type="button">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__text">3 more</span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</div>

```

### Vertical label group with compact labels

```html
<div class="pf-v6-c-label-group pf-m-vertical">
  <div class="pf-v6-c-label-group__main">
    <ul
      class="pf-v6-c-label-group__list"
      role="list"
      aria-label="Group of labels"
    >
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 1</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact pf-m-blue">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 2</span>
          </span>
        </span>
      </li>
      <li class="pf-v6-c-label-group__list-item">
        <span class="pf-v6-c-label pf-m-compact pf-m-green">
          <span class="pf-v6-c-label__content">
            <span class="pf-v6-c-label__icon">
              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-label__text">Label 3</span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>

```

### Labels with truncation

```html
<div class="pf-v6-c-label-truncate--example">
  <strong>Label</strong>
  <br />
  <br />
  <span class="pf-v6-c-label">
    <span class="pf-v6-c-label__content">
      <span
        class="pf-v6-c-label__text"
        id="-truncated-with-icon-text"
        style="--pf-v6-c-label__text--MaxWidth: 38ch"
      >Label with set max-width truncation</span>
    </span>
    <span class="pf-v6-c-label__actions">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        id="-truncated-with-icon-button"
        aria-label="Remove"
        aria-labelledby="-truncated-with-icon-button -truncated-with-icon-text"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times fa-fw" aria-hidden="true"></i>
        </span>
      </button>
    </span>
  </span>
  <br />
  <br />
  <strong>Label group</strong>
  <br />
  <br />
  <div class="pf-v6-c-label-group">
    <div class="pf-v6-c-label-group__main">
      <ul
        class="pf-v6-c-label-group__list"
        role="list"
        aria-label="Group of labels"
      >
        <li class="pf-v6-c-label-group__list-item">
          <span class="pf-v6-c-label pf-m-blue">
            <span class="pf-v6-c-label__content">
              <span class="pf-v6-c-label__icon">
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-label__text">Label 1</span>
            </span>
          </span>
        </li>
        <li class="pf-v6-c-label-group__list-item">
          <span class="pf-v6-c-label pf-m-green">
            <span class="pf-v6-c-label__content">
              <span class="pf-v6-c-label__icon">
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-label__text">Label 2</span>
            </span>
          </span>
        </li>
        <li class="pf-v6-c-label-group__list-item">
          <span class="pf-v6-c-label">
            <span class="pf-v6-c-label__content">
              <span class="pf-v6-c-label__icon">
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              </span>
              <span
                class="pf-v6-c-label__text"
              >Label 3 has a lot of text lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula</span>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <br />
  <br />
  <strong>Label group vertical</strong>
  <br />
  <br />
  <div class="pf-v6-c-label-group pf-m-vertical">
    <div class="pf-v6-c-label-group__main">
      <ul
        class="pf-v6-c-label-group__list"
        role="list"
        aria-label="Group of labels"
      >
        <li class="pf-v6-c-label-group__list-item">
          <span class="pf-v6-c-label">
            <span class="pf-v6-c-label__content">
              <span class="pf-v6-c-label__icon">
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-label__text">Label 1</span>
            </span>
          </span>
        </li>
        <li class="pf-v6-c-label-group__list-item">
          <span class="pf-v6-c-label pf-m-blue">
            <span class="pf-v6-c-label__content">
              <span class="pf-v6-c-label__icon">
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-label__text">Label 2</span>
            </span>
          </span>
        </li>
        <li class="pf-v6-c-label-group__list-item">
          <span class="pf-v6-c-label pf-m-green">
            <span class="pf-v6-c-label__content">
              <span class="pf-v6-c-label__icon">
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              </span>
              <span
                class="pf-v6-c-label__text"
              >Label 3 has a lot of text lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula</span>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</div>

```

## Documentation

### Label usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-label` | `<span>`, `<button>` | Initiates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. Use a `<button>` if the label is an overflow label used in the label group. **Required. Note: always use with either `.pf-m-filled` or `.pf-m-outline`.** |
| `.pf-v6-c-label__content` | `<span>`, `<a>`, `<button>` | Creates a content wrapper. Use as an `<a>` element if the label serves as a link. Use a `<button>` if the label serves as an action. **Required** |
| `.pf-v6-c-label__icon` | `<span>` | Initiates a label icon. |
| `.pf-v6-c-label__text` | `<span>` | Initiates label text. **Required** |
| `.pf-v6-c-label__editable-text` | `<button>`, `<input>` | Initiates editable label text. See the [editable](#editable) example for details about handling behavior in Javascript.|
| `.pf-v6-c-label__actions` | `<span>` | Creates a wrapper for label actions. **Required for removable labels** |
| `.pf-m-filled` | `.pf-v6-c-label` | Modifies label for filled styles. |
| `.pf-m-outline` | `.pf-v6-c-label` | Modifies label for outline styles. |
| `.pf-m-compact` | `.pf-v6-c-label` | Modifies label for compact styles. |
| `.pf-m-overflow` | `.pf-v6-c-label` | Modifies label for overflow styles for use in a label group. |
| `.pf-m-add` | `.pf-v6-c-label` | Modifies label for add styles for use in a label group. |
| `.pf-m-blue` | `.pf-v6-c-label` | Modifies the label to have blue colored styling. |
| `.pf-m-green` | `.pf-v6-c-label` | Modifies the label to have green colored styling. |
| `.pf-m-orange` | `.pf-v6-c-label` | Modifies the label to have orange colored styling. |
| `.pf-m-red` | `.pf-v6-c-label` | Modifies the label to have red colored styling. |
| `.pf-m-purple` | `.pf-v6-c-label` | Modifies the label to have purple colored styling. |
| `.pf-m-teal` | `.pf-v6-c-label` | Modifies the label to have teal colored styling. |
| `.pf-m-yellow` | `.pf-v6-c-label` | Modifies the label to have yellow colored styling. |
| `.pf-m-success` | `.pf-v6-c-label` | Modifies the label to have success colored styling. |
| `.pf-m-warning` | `.pf-v6-c-label` | Modifies the label to have warning colored styling. |
| `.pf-m-danger` | `.pf-v6-c-label` | Modifies the label to have danger colored styling. |
| `.pf-m-info` | `.pf-v6-c-label` | Modifies the label to have info colored styling. |
| `.pf-m-custom` | `.pf-v6-c-label` | Modifies the label to have custom colored styling. |
| `.pf-m-disabled` | `.pf-v6-c-label` | Modifies label for disabled styles. |
| `.pf-m-editable` | `.pf-v6-c-label` | Modifies label for editable styles. |
| `.pf-m-editable-active` | `.pf-v6-c-label.pf-m-editable` | Modifies editable label for active styles. |
| `--pf-v6-c-label__text--MaxWidth` | `.pf-v6-c-label` | Modifiex the max width of the text before text will truncate. |

### Label group accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="list"` | `.pf-v6-c-label-group__list` | Indicates that the label group list is a list element. This role is redundant since `.pf-v6-c-label-group__list` is a `<ul>` but is required for screen readers to announce the list properly. **Required** |
| `aria-label="[button label text]"` | `.pf-v6-c-label-group__close > button` |  Provides an accessible name for a label group close button when an icon is used instead of text. Required when an icon is used with no supporting text. **Required** |
| `aria-labelledby="[id value of .pf-v6-c-label-group__close > button] [id value of .pf-v6-c-label-group__label]"` | `.pf-v6-c-label-group__close > button` | Provides an accessible name for the button. **Required** |
| `aria-label="[label text]"` | `.pf-v6-c-label-group__textarea` | Provides an accessible name for the textarea. **Required** |
| `row="1"` | `.pf-v6-c-label-group__textarea` | Indicates that the label group textarea is one row. **Required** |
| `tabindex="0"` | `.pf-v6-c-label-group__textarea` | Inserts the label group textarea into the tab order of the page so that it is focusable. **Required** |

### Label group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-label-group` | `<div>` | Initiates the label group component. **Required.** |
| `.pf-v6-c-label-group__list` | `<ul>` | Initiates the container for a list of labels. **Required.** |
| `.pf-v6-c-label-group__list-item` | `<li>` | Initiates the list item inside of the label group. **Required.** |
| `.pf-v6-c-label-group__main` | `<div>` | Initiates the main element in the label group. **Required when label and list are present** |
| `.pf-v6-c-label-group__textarea` | `<textarea>` | Initiates the textarea element in the label group. **Required when label group is editable** |
| `.pf-v6-c-label-group__label` | `<span>` | Initiates the label to be used in the label group. |
| `.pf-v6-c-label-group__close` | `<div>` | Initiates the container used for the button to remove the label group. |
| `.pf-v6-c-button` | `.pf-v6-c-label-group__close <button>` | Initiates the button used to remove the label group. |
| `.pf-m-editable` | `.pf-v6-c-label-group` | Modifies the label group to support editable styling. |
| `.pf-m-category` | `.pf-v6-c-label-group` | Modifies the label group to support category styling. |
| `.pf-m-textarea` | `.pf-v6-c-label-group__list-item` | Modifies the label group list item to support textarea. |
