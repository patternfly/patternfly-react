---
id: 'Progress stepper'
section: components
cssPrefix: pf-v6-c-progress-stepper
---## Examples

### Basic

```html
<ol class="pf-v6-c-progress-stepper" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
    </div>
  </li>
</ol>

```

### Basic with descriptions

```html
<ol class="pf-v6-c-progress-stepper" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Vertical, horizontal responsive

```html
<ol
  class="pf-v6-c-progress-stepper pf-m-vertical-on-lg pf-m-horizontal-on-2xl"
  role="list"
>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Center aligned with descriptions

```html
<ol class="pf-v6-c-progress-stepper pf-m-center" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Center aligned, vertical

```html
<ol class="pf-v6-c-progress-stepper pf-m-center pf-m-vertical" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Vertical with descriptions

```html
<ol class="pf-v6-c-progress-stepper pf-m-vertical" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Compact

```html
<ol class="pf-v6-c-progress-stepper pf-m-compact" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <svg
          class="pf-v6-c-spinner pf-m-xs"
          role="progressbar"
          viewBox="0 0 100 100"
          aria-label="Loading..."
        >
          <circle
            class="pf-v6-c-spinner__path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
          />
        </svg>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">In process</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Compact, vertical

```html
<ol class="pf-v6-c-progress-stepper pf-m-vertical pf-m-compact" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Compact, vertical responsive

```html
<ol
  class="pf-v6-c-progress-stepper pf-m-vertical-on-lg pf-m-horizontal-on-xl pf-m-compact"
  role="list"
>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Compact, vertical, centered

```html
<ol
  class="pf-v6-c-progress-stepper pf-m-center pf-m-vertical pf-m-compact"
  role="list"
>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Compact, centered

```html
<ol class="pf-v6-c-progress-stepper pf-m-center pf-m-compact" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the first thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the second thing to happen</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
      <div
        class="pf-v6-c-progress-stepper__step-description"
      >This is the last thing to happen</div>
    </div>
  </li>
</ol>

```

### Basic with an issue

```html
<ol class="pf-v6-c-progress-stepper" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-warning"
    role="listitem"
    aria-label="step with issue,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Fourth step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Fifth step</div>
    </div>
  </li>
</ol>

```

### Basic with a failure

```html
<ol class="pf-v6-c-progress-stepper" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">First step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Second step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Third step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current pf-m-danger"
    role="listitem"
    aria-label="current step,step with failure,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Fourth step</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Fifth step</div>
    </div>
  </li>
</ol>

```

### Basic in process

```html
<ol class="pf-v6-c-progress-stepper" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Successful completion</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <svg
          class="pf-v6-c-spinner pf-m-xs"
          role="progressbar"
          viewBox="0 0 100 100"
          aria-label="Loading..."
        >
          <circle
            class="pf-v6-c-spinner__path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
          />
        </svg>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">In process</div>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-pending" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Pending</div>
    </div>
  </li>
</ol>

```

### With help text

```html
<ol class="pf-v6-c-progress-stepper" role="list">
  <li
    class="pf-v6-c-progress-stepper__step pf-m-success"
    role="listitem"
    aria-label="completed step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <button
        class="pf-v6-c-progress-stepper__step-title pf-m-help-text"
        type="button"
      >First step</button>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-danger"
    role="listitem"
    aria-label="step with failure,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <button
        class="pf-v6-c-progress-stepper__step-title pf-m-help-text"
        type="button"
      >Second step</button>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-current"
    role="listitem"
    aria-label="current step,in process step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon">
        <i class="pf-v6-pficon pf-v6-pficon-resources-full" aria-hidden="true"></i>
      </span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <button
        class="pf-v6-c-progress-stepper__step-title pf-m-help-text"
        type="button"
      >Third step</button>
    </div>
  </li>
  <li
    class="pf-v6-c-progress-stepper__step pf-m-pending"
    role="listitem"
    aria-label="pending step,"
  >
    <div class="pf-v6-c-progress-stepper__step-connector">
      <span class="pf-v6-c-progress-stepper__step-icon"></span>
    </div>
    <div class="pf-v6-c-progress-stepper__step-main">
      <div class="pf-v6-c-progress-stepper__step-title">Fourth step</div>
    </div>
  </li>
</ol>

```

## Documentation

### Overview

The progress stepper is intended to show progress through a finite number of discrete steps.

Add a modifier class to the progress stepper to change the orientation or alignment: `.pf-m-center`, `.pf-m-vertical`, or `.pf-m-compact`.

Steps can be modified with `.pf-m-success`, `.pf-m-warning`, `.pf-m-danger`, `.pf-m-info`, `.pf-m-custom`, and `.pf-m-in-progress-alt` to change their color. Use modifiers `.pf-m-pending` and `.pf-m-current` to indicate progress through the steps.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[State of the step]"` | `.pf-v6-c-progress-stepper__step` |  Provides an accessible label for the step. |
| `aria-hidden="true"` | `.pf-v6-c-progress-stepper__step-icon <i>` |  Hides icon for assistive technologies. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-progress-stepper` | `<ol>` | Applies default progress stepper styling. **Required** |
| `.pf-v6-c-progress-stepper__step` | `<li>` | Defines each step of the progress stepper. **Required** |
| `.progress-stepper__step-connector` | `<div>` | Creates the connecting line between steps **Required** |
| `.progress-stepper__step-icon` | `<span>` | Creates the step node and contains the icon designating the type of step. This element is required, but may be empty if no icon is used for the step. **Required** |
| `.progress-stepper__step-main` | `<div>` | Contains the main text content of the step. This element is required, but may be empty if title and description are not used. **Required** |
| `.progress-stepper__step-title` | `<div>`, `<button>` | Contains the title of the step. **Note:** the step title is a `<button>` when it has `.pf-m-help-text` and is used to trigger a popover with help text. |
| `.progress-stepper__step-description` | `<div>` | Contains the description of the step. |
| `.pf-m-center`| `.pf-v6-c-progress-stepper` | Modifies to center each step. |
| `.pf-m-vertical{-on-[breakpoint]}`| `.pf-v6-c-progress-stepper` | Modifies progress stepper vertical layout at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-horizontal{-on-[breakpoint]}`| `.pf-v6-c-progress-stepper` | Modifies progress stepper horizontal layout at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-compact`| `.pf-v6-c-progress-stepper` | Modifies for compact styling. |
| `.pf-m-success`| `.pf-v6-c-progress-stepper__step` | Modifies for success styling. |
| `.pf-m-warning`| `.pf-v6-c-progress-stepper__step` | Modifies for warning styling. |
| `.pf-m-danger`| `.pf-v6-c-progress-stepper__step` | Modifies for danger styling. |
| `.pf-m-info`| `.pf-v6-c-progress-stepper__step` | Modifies for info styling. |
| `.pf-m-custom`| `.pf-v6-c-progress-stepper__step` | Modifies for custom styling. |
| `.pf-m-current`| `.pf-v6-c-progress-stepper__step` | Modifies styling for the current step. |
| `.pf-m-pending`| `.pf-v6-c-progress-stepper__step` | Modifies styling for pending steps. |
| `.pf-m-help-text`| `.pf-v6-c-progress-stepper__step-title` | Modifies styling for steps that have help text. |
