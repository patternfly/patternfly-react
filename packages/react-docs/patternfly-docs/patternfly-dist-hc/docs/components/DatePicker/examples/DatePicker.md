---
id: 'Date picker'
section: components
subsection: date-and-time
cssPrefix: pf-v6-c-date-picker
---import './DatePicker.css'

## Examples

### Basic

```html
<div class="pf-v6-c-date-picker">
  <div class="pf-v6-c-date-picker__input">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control">
          <input
            type="text"
            value="2020-03-05"
            id="basic-input"
            name="basic-input"
            aria-label="Date picker"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          aria-label="Toggle date picker"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-calendar-alt" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Helper text

```html
<div class="pf-v6-c-date-picker">
  <div class="pf-v6-c-date-picker__input">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control">
          <input
            type="text"
            value="2020-03-05"
            id="helper-text-input"
            name="helper-text-input"
            aria-label="Date picker"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          aria-label="Toggle date picker"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-calendar-alt" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-date-picker__helper-text">
    <div class="pf-v6-c-helper-text">
      <div class="pf-v6-c-helper-text__item">
        <span class="pf-v6-c-helper-text__item-text">Select a date</span>
      </div>
    </div>
  </div>
</div>

```

### Invalid

```html
<div class="pf-v6-c-date-picker">
  <div class="pf-v6-c-date-picker__input">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control pf-m-error">
          <input
            aria-invalid="true"
            type="text"
            value="2020-03-05"
            id="invalid-input"
            name="invalid-input"
            aria-label="Date picker"
          />
          <span class="pf-v6-c-form-control__utilities">
            <span class="pf-v6-c-form-control__icon pf-m-status">
              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            </span>
          </span>
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          aria-label="Toggle date picker"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-calendar-alt" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-date-picker__helper-text">
    <div class="pf-v6-c-helper-text">
      <div class="pf-v6-c-helper-text__item pf-m-error">
        <span class="pf-v6-c-helper-text__item-icon">
          <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-helper-text__item-text">Invalid date</span>
      </div>
    </div>
  </div>
</div>

```

### Expanded

```html
<div class="pf-v6-c-date-picker">
  <div class="pf-v6-c-date-picker__input">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control">
          <input
            type="text"
            value="2020-03-05"
            id="expanded-input"
            name="expanded-input"
            aria-label="Date picker"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          aria-label="Toggle date picker"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-calendar-alt" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-date-picker__calendar">Calendar</div>
</div>

```

### Custom width input

```html
<div
  class="pf-v6-c-date-picker"
  style="--pf-v6-c-date-picker__input--c-form-control--Width: 220px;"
>
  <div class="pf-v6-c-date-picker__input">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control">
          <input
            type="text"
            value="November 20, 2020"
            id="custom-width-input-input"
            name="custom-width-input-input"
            aria-label="Date picker"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          aria-label="Toggle date picker"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-calendar-alt" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Custom width input based on number of characters

```html
<div
  class="pf-v6-c-date-picker"
  style="--pf-v6-c-date-picker__input--c-form-control--width-chars: 18;"
>
  <div class="pf-v6-c-date-picker__input">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control">
          <input
            type="text"
            value="November 20, 2020"
            id="custom-width-input-based-on-number-of-characters-input"
            name="custom-width-input-based-on-number-of-characters-input"
            aria-label="Date picker"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          aria-label="Toggle date picker"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-calendar-alt" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-date-picker` | `<div>` | Initiates the date picker component. **Required** |
| `.pf-v6-c-date-picker__input` | `<div>` | Initiates the date picker input container. **Required** |
| `.pf-v6-c-date-picker__helper-text` | `<div>` | Initiates the date picker helper text. |
| `.pf-v6-c-date-picker__calendar` | `<div>` | Initiates an optional date picker calendar container. **Note:** Required in the react date picker component. |
| `.pf-m-top` | `.pf-v6-c-date-picker` | Modifies to display the calendar above the date picker. |
| `.pf-m-align-right` | `.pf-v6-c-date-picker__calendar` | Modifies the calendar to align the calendar to the right edge of the date picker. |
| `.pf-m-static` | `.pf-v6-c-date-picker__calendar` | Modifies the calendar to be statically positioned to support custom positioning. |
