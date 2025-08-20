---
id: Number input
section: components
cssPrefix: pf-v6-c-number-input
---## Examples

### Default

```html
<div class="pf-v6-c-number-input">
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="90"
          name="number-input-default-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>

```

### With unit

```html
<div class="pf-v6-c-number-input">
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="90"
          name="number-input-unit-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
  <span class="pf-v6-c-number-input__unit">%</span>
</div>
<br />
<br />
<div class="pf-v6-c-number-input">
  <span class="pf-v6-c-number-input__unit">$</span>

  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="1.00"
          name="number-input-unit2-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>

```

### With unit and lower threshold reached

```html
<div class="pf-v6-c-number-input">
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
        disabled
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="0"
          min="0"
          name="number-input-unit-lower-threshold-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
  <span class="pf-v6-c-number-input__unit">%</span>
</div>

```

### With unit and upper threshold reached

```html
<div class="pf-v6-c-number-input">
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="100"
          max="100"
          name="number-input-unit-upper-threshold-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
        disabled
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
  <span class="pf-v6-c-number-input__unit">%</span>
</div>

```

### Disabled

```html
<div class="pf-v6-c-number-input">
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
        disabled
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control pf-m-disabled">
        <input
          disabled
          type="number"
          value="100"
          name="number-input-disabled-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
        disabled
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
  <span class="pf-v6-c-number-input__unit">%</span>
</div>

```

### With status

```html
<div class="pf-v6-c-number-input pf-m-status">
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="90"
          name="number-input-status-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>
<br />
<br />
<div class="pf-v6-c-number-input pf-m-status">
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control pf-m-warning">
        <input
          type="number"
          value="90"
          name="number-input-status-warning-name"
          aria-label="Number input"
        />
        <span class="pf-v6-c-form-control__utilities">
          <span class="pf-v6-c-form-control__icon pf-m-status">
            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
          </span>
        </span>
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>

```

### Varying sizes

```html
<div
  class="pf-v6-c-number-input"
  style="--pf-v6-c-number-input--c-form-control--width-chars: 1;"
>
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="1"
          name="number-input-sizes-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>
<br />
<br />
<div
  class="pf-v6-c-number-input"
  style="--pf-v6-c-number-input--c-form-control--width-chars: 10;"
>
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="1234567890"
          name="number-input-sizes2-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>
<br />
<br />
<div
  class="pf-v6-c-number-input"
  style="--pf-v6-c-number-input--c-form-control--width-chars: 5;"
>
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="5"
          name="number-input-sizes3-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>
<br />
<br />
<div
  class="pf-v6-c-number-input"
  style="--pf-v6-c-number-input--c-form-control--width-chars: 5;"
>
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Minus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <span class="pf-v6-c-form-control">
        <input
          type="number"
          value="12345"
          name="number-input-sizes4-name"
          aria-label="Number input"
        />
      </span>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="button"
        aria-label="Plus"
      >
        <span class="pf-v6-c-button__icon">
          <span class="pf-v6-c-number-input__icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Plus"`, `aria-label="Minus"` | `.pf-v6-c-button.pf-m-control` | Provides an accessible name for the outer plus/minus buttons. **Required** |
| `min` | `input[type="number"].pf-v6-c-form-control` | Provides an optional minimum value for the input. |
| `max` | `input[type="number"].pf-v6-c-form-control` | Provides an optional maximum value for the input. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-number-input` | `<div>` | Initiates the number input component. |
| `.pf-v6-c-number-input__icon` | `<span>` | Initiates the number input icon. |
| `.pf-v6-c-number-input__unit` | `<span>` | Initiates the number input unit. |
| `.pf-m-status` | `.pf-v6-c-number-input` | Modifies the width to create enough space for a status icon to be included in the form control portion of the number input. **Required** if a status icon may be shown, even if the icon is not currently shown. |
| `--pf-v6-c-number-input--c-form-control--width-chars` | `.pf-v6-c-number-input` | Specifies the number of characters to show in the input. |
