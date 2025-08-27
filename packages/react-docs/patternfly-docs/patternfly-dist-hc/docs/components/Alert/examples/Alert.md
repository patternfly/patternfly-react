---
id: Alert
section: components
cssPrefix: ['pf-v6-c-alert','pf-v6-c-alert-group']
---## Alert examples

### Types

```html
<div class="pf-v6-c-alert pf-m-custom" aria-label="Custom alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Custom alert:</span>
    Custom alert title
  </p>
</div>
<br />
<div class="pf-v6-c-alert pf-m-info" aria-label="Information alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Info alert:</span>
    Info alert title
  </p>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
</div>
<br />
<div class="pf-v6-c-alert pf-m-warning" aria-label="Warning alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Warning alert:</span>
    Warning alert title
  </p>
</div>
<br />
<div class="pf-v6-c-alert pf-m-danger" aria-label="Danger alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Danger alert:</span>
    Danger alert title
  </p>
</div>

```

### Variations

```html
<div class="pf-v6-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__description">
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </div>
  <div class="pf-v6-c-alert__action-group">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">View details</span>
    </button>
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Ignore</span>
    </button>
  </div>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__description">
    <p>
      Success alert description. This should tell the user more information about the alert.
      <a href="#">This is a link.</a>
    </p>
  </div>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__action-group">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">View details</span>
    </button>
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Ignore</span>
    </button>
  </div>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-success"
  aria-label="Success alert with title truncation"
>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title pf-m-truncate">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.
  </p>
  <div class="pf-v6-c-alert__description">
    <p>This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</p>
  </div>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-success"
  aria-label="Success alert with title truncation at 2 lines"
>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p
    class="pf-v6-c-alert__title pf-m-truncate"
    style="--pf-v6-c-alert__title--max-lines: 2"
  >
    <span class="pf-v6-screen-reader">Success alert:</span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.
  </p>
  <div class="pf-v6-c-alert__description">
    <p>This example uses ".pf-m-truncate" and sets "--pf-v6-c-alert__title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</p>
  </div>
</div>

```

### Inline types

```html
<div
  class="pf-v6-c-alert pf-m-custom pf-m-inline"
  aria-label="Inline custom alert"
>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Custom inline alert:</span>
    Custom inline alert title
  </p>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-info pf-m-inline"
  aria-label="Inline information alert"
>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Info alert:</span>
    Info inline alert title
  </p>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-success pf-m-inline"
  aria-label="Inline success alert"
>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success inline alert title
  </p>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-warning pf-m-inline"
  aria-label="Inline warning alert"
>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Warning alert:</span>
    Warning inline alert title
  </p>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-danger pf-m-inline"
  aria-label="Inline danger alert"
>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Danger alert:</span>
    Danger inline alert title
  </p>
</div>

```

### Inline variations

```html
<div class="pf-v6-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__description">
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </div>
  <div class="pf-v6-c-alert__action-group">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">View details</span>
    </button>
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Ignore</span>
    </button>
  </div>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__description">
    <p>
      Success alert description. This should tell the user more information about the alert.
      <a href="#">This is a link.</a>
    </p>
  </div>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__action-group">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">View details</span>
    </button>
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Ignore</span>
    </button>
  </div>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
</div>

```

### Custom icon

```html
<div class="pf-v6-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-cog" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
</div>
<br />
<div class="pf-v6-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-cog" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title (inline)
  </p>
</div>

```

### Inline plain

```html
<div
  class="pf-v6-c-alert pf-m-success pf-m-plain pf-m-inline"
  aria-label="Success alert"
>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
</div>

```

### Expandable

```html
<div
  class="pf-v6-c-alert pf-m-expandable pf-m-success"
  aria-label="Success alert"
>
  <div class="pf-v6-c-alert__toggle">
    <button
      class="pf-v6-c-button pf-m-plain"
      id="alert-expandable-example-1-toggle"
      type="button"
      aria-labelledby="alert-expandable-example-1-title alert-expandable-example-1-toggle"
      aria-label="Details"
    >
      <span class="pf-v6-c-button__icon">
        <span class="pf-v6-c-alert__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title" id="alert-expandable-example-1-title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__description" hidden>
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </div>
  <div class="pf-v6-c-alert__action-group">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">View details</span>
    </button>
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Ignore</span>
    </button>
  </div>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-expandable pf-m-expanded pf-m-success"
  aria-label="Success alert"
>
  <div class="pf-v6-c-alert__toggle">
    <button
      class="pf-v6-c-button pf-m-expanded pf-m-plain"
      id="alert-expandable-example-2-toggle"
      type="button"
      aria-expanded="true"
      aria-labelledby="alert-expandable-example-2-title alert-expandable-example-2-toggle"
      aria-label="Details"
    >
      <span class="pf-v6-c-button__icon">
        <span class="pf-v6-c-alert__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title" id="alert-expandable-example-2-title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title (expanded)
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__description">
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </div>
  <div class="pf-v6-c-alert__action-group">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">View details</span>
    </button>
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Ignore</span>
    </button>
  </div>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-expandable pf-m-success pf-m-inline"
  aria-label="Success alert"
>
  <div class="pf-v6-c-alert__toggle">
    <button
      class="pf-v6-c-button pf-m-plain"
      id="alert-expandable-example-3-toggle"
      type="button"
      aria-labelledby="alert-expandable-example-3-title alert-expandable-example-3-toggle"
      aria-label="Details"
    >
      <span class="pf-v6-c-button__icon">
        <span class="pf-v6-c-alert__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title" id="alert-expandable-example-3-title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__description" hidden>
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </div>
  <div class="pf-v6-c-alert__action-group">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">View details</span>
    </button>
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Ignore</span>
    </button>
  </div>
</div>
<br />
<div
  class="pf-v6-c-alert pf-m-expandable pf-m-expanded pf-m-success pf-m-inline"
  aria-label="Success alert"
>
  <div class="pf-v6-c-alert__toggle">
    <button
      class="pf-v6-c-button pf-m-expanded pf-m-plain"
      id="alert-expandable-example-4-toggle"
      type="button"
      aria-expanded="true"
      aria-labelledby="alert-expandable-example-4-title alert-expandable-example-4-toggle"
      aria-label="Details"
    >
      <span class="pf-v6-c-button__icon">
        <span class="pf-v6-c-alert__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-v6-c-alert__title" id="alert-expandable-example-4-title">
    <span class="pf-v6-screen-reader">Success alert:</span>
    Success alert title (expanded)
  </p>
  <div class="pf-v6-c-alert__action">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close success alert: Success alert title"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-times" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-alert__description">
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </div>
  <div class="pf-v6-c-alert__action-group">
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">View details</span>
    </button>
    <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
      <span class="pf-v6-c-button__text">Ignore</span>
    </button>
  </div>
</div>

```

## Alert group examples

### Static alert group

An alert group is optional when only one static alert is needed. It becomes required when more than one alert is used in a list.

```html
<ul class="pf-v6-c-alert-group" role="list">
  <li class="pf-v6-c-alert-group__item">
    <div
      class="pf-v6-c-alert pf-m-inline pf-m-success"
      aria-label="Success alert"
    >
      <div class="pf-v6-c-alert__icon">
        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-v6-c-alert__title">
        <span class="pf-v6-screen-reader">Success alert:</span>
        Success alert title
      </p>
    </div>
  </li>

  <li class="pf-v6-c-alert-group__item">
    <div
      class="pf-v6-c-alert pf-m-inline pf-m-danger"
      aria-label="Danger alert"
    >
      <div class="pf-v6-c-alert__icon">
        <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-v6-c-alert__title">
        <span class="pf-v6-screen-reader">Danger alert:</span>
        Danger alert title
      </p>
    </div>
  </li>

  <li class="pf-v6-c-alert-group__item">
    <div
      class="pf-v6-c-alert pf-m-inline pf-m-info"
      aria-label="Information alert"
    >
      <div class="pf-v6-c-alert__icon">
        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-v6-c-alert__title">
        <span class="pf-v6-screen-reader">Info alert:</span>
        Info alert title
      </p>
      <div class="pf-v6-c-alert__description">
        <p>
          Info alert description.
          <a href="#">This is a link.</a>
        </p>
      </div>
    </div>
  </li>
</ul>

```

### Toast alert group

An alert group is required to display toast alerts. An alert group that includes the `.pf-m-toast` modifier becomes a toast alert group with unique positioning in the top-right corner of the window.

Every toast alert must include a close button to dismiss the alert.

When toast alerts include a link or action, these elements are not announced as interactive elements by screen readers. Whenever you include a link or button, incorporate it into the message so that it’s clear to the user how to access the same contents or action without clicking the link or button directly in the toast. For example, if your toast alert displays a message “The build is complete. Go to the Builds page to download,” the screen reader user is given instructions on how to find their build for download.

For sighted users, interactive elements can be included in this message in one of the following ways:

* Using a link to the Builds page: "The build is complete. Go to the [Builds](#) page to download" using `<a href="#">Builds</a>`
* Using a button to download: "The build is complete. Go to the Builds page to <button class="pf-v6-c-button pf-m-link pf-m-inline" type="button">download</button>" using `<button class="pf-v6-c-button pf-m-link pf-m-inline type="button">download</button>`

```html isFullscreen
<ul class="pf-v6-c-alert-group pf-m-toast" role="list">
  <li class="pf-v6-c-alert-group__item">
    <div class="pf-v6-c-alert pf-m-success" aria-label="Success toast alert">
      <div class="pf-v6-c-alert__icon">
        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-v6-c-alert__title" id="alert_one_title">
        <span class="pf-v6-screen-reader">Success alert:</span>
        Success toast alert title
      </p>
      <div class="pf-v6-c-alert__description">
        <p>
          Info toast alert description. From the settings tab, click
          <a href="#">View logs</a>&nbsp;to review the details.
        </p>
      </div>
      <div class="pf-v6-c-alert__action">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Close success alert: Success alert title"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </li>

  <li class="pf-v6-c-alert-group__item">
    <div class="pf-v6-c-alert pf-m-danger" aria-label="Danger toast alert">
      <div class="pf-v6-c-alert__icon">
        <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-v6-c-alert__title" id="alert_two_title">
        <span class="pf-v6-screen-reader">Danger alert:</span>
        Danger toast alert title
      </p>
      <div class="pf-v6-c-alert__action">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Close success alert: Success alert title"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </li>

  <li class="pf-v6-c-alert-group__item">
    <div class="pf-v6-c-alert pf-m-info" aria-label="Information toast alert">
      <div class="pf-v6-c-alert__icon">
        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-v6-c-alert__title" id="alert_three_title">
        <span class="pf-v6-screen-reader">Info alert:</span>
        Info toast alert title
      </p>
      <div class="pf-v6-c-alert__description">
        <p>
          Info toast alert description. From the settings tab, click
          <a href="#">View logs</a>&nbsp;to review the details.
        </p>
      </div>
      <div class="pf-v6-c-alert__action">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Close success alert: Success alert title"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </li>

  <li class="pf-v6-c-alert-group__item">
    <button
      class="pf-v6-c-alert-group__overflow-button"
    >View 3 more notifications</button>
  </li>
</ul>

```

## Documentation

### Alert overview

Add a modifier class to the default alert to change the color: `.pf-m-success`, `.pf-m-danger`, `.pf-m-warning`, or `.pf-m-info`.

### Alert usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-alert` | `<div>` | Initiates the alert component. Always use with a status modifier class. **Required** |
| `.pf-v6-c-alert__toggle` | `<div>` | Defines the expandable alert toggle icon. **Required for expandable alerts** |
| `.pf-v6-c-alert__toggle-icon` | `<span>` | Defines the expandable alert toggle icon. **Required for expandable alerts** |
| `.pf-v6-c-alert__icon` | `<div>` | Defines the alert icon. **Required** |
| `.pf-v6-c-alert__title` | `<p>, <h1-h6>` | Defines the alert title. **Required** |
| `.pf-v6-c-alert__description` | `<div>` | Defines the alert description area. |
| `.pf-v6-c-alert__action` | `<div>` | Defines the action button wrapper. Should contain `.pf-v6-c-button.pf-m-plain` for close action or `.pf-v6-c-button.pf-m-link` for link text. It should only include one action. |
| `.pf-v6-c-alert__action-group` | `<div>` | Defines the action button group. Should contain `.pf-v6-c-button.pf-m-link.pf-m-inline` for inline link text. **Note:** only inline link buttons are supported in the alert action group. |
| `.pf-m-custom` | `.pf-v6-c-alert` | Applies custom status styling. |
| `.pf-m-success` | `.pf-v6-c-alert` | Applies success status styling. |
| `.pf-m-danger` | `.pf-v6-c-alert` | Applies danger status styling. |
| `.pf-m-warning` | `.pf-v6-c-alert` | Applies warning status styling. |
| `.pf-m-info` | `.pf-v6-c-alert` | Applies info status styling. |
| `.pf-m-inline` | `.pf-v6-c-alert` | Applies inline styling. |
| `.pf-m-plain` | `.pf-v6-c-alert.pf-m-inline` | Applies plain styling to an inline alert. |
| `.pf-m-expandable` | `.pf-v6-c-alert` | Applies expandable styles to the alert. |
| `.pf-m-expanded` | `.pf-v6-c-alert.pf-m-expandable` | Applies expanded styles to an expandable alert. |
| `.pf-m-truncate` | `.pf-v6-c-alert__title` | Modifies the title to display a single line and truncate any overflow text with ellipses. **Note:** you can specify the max number of lines to show by setting the `--pf-v6-c-alert__title--max-lines` (the default value is `1`). |

### Alert group overview

The alert component is used to contain and align consecutive alerts.  Alert groups can either be embedded alongside a page's content or in the top-right corner as a toast group using the `.pf-m-toast` modifier.

### Alert group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-alert-group` | `<ul>` | Creates an alert group component. **Required** |
| `.pf-v6-c-alert-group__item` | `<li>` | Creates an alert group item. **Required** |
| `.pf-v6-c-alert-group__overflow-button` | `<button>` | Applies overflow button styling to an alert group overflow button. |
| `.pf-m-toast`| `.pf-v6-c-alert-group` | Applies toast alert styling to an alert group. |
