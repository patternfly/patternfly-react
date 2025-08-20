---
id: Form
section: components
subsection: forms
cssPrefix: pf-v6-c-form
---## Examples

### Vertically aligned labels

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="form-vertical-name">
        <span class="pf-v6-c-form__label-text">Name</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
        <span
          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
          type="button"
          role="button"
          tabindex="0"
          aria-label="More information for name field"
          aria-describedby="form-vertical-name"
        >
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
        </span></span>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-vertical-name"
          name="form-vertical-name"
        />
      </span>
    </div>
  </div>
</form>

```

### Horizontally aligned labels

```html
<form class="pf-v6-c-form pf-m-horizontal" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="form-horizontal-name">
        <span class="pf-v6-c-form__label-text">Name</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-horizontal-name"
          name="form-horizontal-name"
        />
      </span>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="form-horizontal-info">
        <span class="pf-v6-c-form__label-text">Information</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
        <span
          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
          type="button"
          role="button"
          tabindex="0"
          aria-label="More information for information field"
          aria-describedby="form-horizontal-info"
        >
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
        </span></span>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-textarea">
        <textarea
          type="text"
          id="form-horizontal-info"
          name="form-horizontal-info"
          aria-label="Textarea example"
        ></textarea>
      </span>
    </div>
  </div>
  <div
    class="pf-v6-c-form__group"
    role="group"
    aria-labelledby="form-horizontalform-horizontal-checkbox-legend"
  >
    <div
      class="pf-v6-c-form__group-label pf-m-no-padding-top"
      id="form-horizontalform-horizontal-checkbox-legend"
    ><span class="pf-v6-c-form__label">
        <span class="pf-v6-c-form__label-text">Label (no top padding)</span></span>&nbsp;<span class="pf-v6-c-form__group-label-help">
        <span
          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
          type="button"
          role="button"
          tabindex="0"
          aria-label="More information for label field"
          aria-describedby="form-horizontal-checkbox-legend"
        >
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
        </span></span>
    </div>
    <div class="pf-v6-c-form__group-control pf-m-stack">
      <div class="pf-v6-c-check">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          id="form-horizontal-checkbox"
          name="form-horizontal-checkbox"
        />

        <label
          class="pf-v6-c-check__label"
          for="form-horizontal-checkbox"
        >Option 1</label>
      </div>
      <div class="pf-v6-c-check">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          id="form-horizontal-checkbox2"
          name="form-horizontal-checkbox2"
        />

        <label
          class="pf-v6-c-check__label"
          for="form-horizontal-checkbox2"
        >Option 2</label>
      </div>
    </div>
  </div>
</form>

```

### Horizontal layout at a custom breakpoint

```html
<form class="pf-v6-c-form pf-m-horizontal-on-sm" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="form-horizontal-custom-breakpoint-name"
      >
        <span class="pf-v6-c-form__label-text">Name</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
        <span
          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
          type="button"
          role="button"
          tabindex="0"
          aria-label="More information for name field"
          aria-describedby="form-horizontal-custom-breakpoint-name"
        >
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
        </span></span>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-horizontal-custom-breakpoint-name"
          name="form-horizontal-custom-breakpoint-name"
        />
      </span>
    </div>
  </div>
</form>

```

### Form sections

```html
<form class="pf-v6-c-form" novalidate>
  <section class="pf-v6-c-form__section" role="group">
    <div class="pf-v6-c-form__group">
      <div class="pf-v6-c-form__group-label"><label
          class="pf-v6-c-form__label"
          for="form-section-example-section-1-input"
        >
          <span class="pf-v6-c-form__label-text">Form section 1 inputs</span></label>
      </div>
      <div class="pf-v6-c-form__group-control">
        <span class="pf-v6-c-form-control pf-m-required">
          <input
            required
            type="text"
            id="form-section-example-section-1-input"
            name="form-section-example-section-1-input"
          />
        </span>
      </div>
    </div>
    <div class="pf-v6-c-form__group">
      <div class="pf-v6-c-form__group-label"><label
          class="pf-v6-c-form__label"
          for="form-section-example-section-1-input-2"
        >
          <span class="pf-v6-c-form__label-text">Form section 1 inputs</span></label>
      </div>
      <div class="pf-v6-c-form__group-control">
        <span class="pf-v6-c-form-control pf-m-required">
          <input
            required
            type="text"
            id="form-section-example-section-1-input-2"
            name="form-section-example-section-1-input-2"
          />
        </span>
      </div>
    </div>
  </section>
  <section
    class="pf-v6-c-form__section"
    role="group"
    aria-labelledby="form-section-example-section-2-title"
  >
    <div
      class="pf-v6-c-form__section-title"
      id="form-section-example-section-2-title"
      aria-hidden="true"
    >Section 2 title (optional)</div>
    <div class="pf-v6-c-form__group">
      <div class="pf-v6-c-form__group-label"><label
          class="pf-v6-c-form__label"
          for="form-section-example-section-2-input"
        >
          <span class="pf-v6-c-form__label-text">Form section 2 inputs</span></label>
      </div>
      <div class="pf-v6-c-form__group-control">
        <span class="pf-v6-c-form-control pf-m-required">
          <input
            required
            type="text"
            id="form-section-example-section-2-input"
            name="form-section-example-section-2-input"
          />
        </span>
      </div>
    </div>
    <div class="pf-v6-c-form__group">
      <div class="pf-v6-c-form__group-label"><label
          class="pf-v6-c-form__label"
          for="form-section-example-section-2-input-2"
        >
          <span class="pf-v6-c-form__label-text">Form section 2 inputs</span></label>
      </div>
      <div class="pf-v6-c-form__group-control">
        <span class="pf-v6-c-form-control pf-m-required">
          <input
            required
            type="text"
            id="form-section-example-section-2-input-2"
            name="form-section-example-section-2-input-2"
          />
        </span>
      </div>
    </div>
  </section>
</form>

```

### Help text

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="form-help-text-name">
        <span class="pf-v6-c-form__label-text">Name</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-help-text-name"
          name="form-help-text-name"
          aria-describedby="form-help-text-name-helper"
        />
      </span>
      <div class="pf-v6-c-form__helper-text" aria-live="polite">
        <div class="pf-v6-c-helper-text">
          <div
            class="pf-v6-c-helper-text__item"
            id="form-help-text-name-helper"
          >
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-minus" aria-hidden="true"></i>
            </span>
            <span class="pf-v6-c-helper-text__item-text">This is helper text.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="form-help-text-email">
        <span class="pf-v6-c-form__label-text">E-mail</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-warning">
        <input
          required
          type="text"
          id="form-help-text-email"
          name="form-help-text-email"
          aria-describedby="form-help-text-email-helper"
        />
        <span class="pf-v6-c-form-control__utilities">
          <span class="pf-v6-c-form-control__icon pf-m-status">
            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
          </span>
        </span>
      </span>
      <div class="pf-v6-c-form__helper-text" aria-live="polite">
        <div class="pf-v6-c-helper-text">
          <div
            class="pf-v6-c-helper-text__item pf-m-warning"
            id="form-help-text-email-helper"
          >
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-helper-text__item-text"
            >This is helper text for a warning input.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-address">
        <span class="pf-v6-c-form__label-text">Address</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required pf-m-error">
        <input
          required
          type="text"
          id="-address"
          name="-address"
          aria-invalid="true"
          aria-describedby="-address-helper"
        />
        <span class="pf-v6-c-form-control__utilities">
          <span class="pf-v6-c-form-control__icon pf-m-status">
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
          </span>
        </span>
      </span>
      <div class="pf-v6-c-form__helper-text" aria-live="polite">
        <div class="pf-v6-c-helper-text">
          <div
            class="pf-v6-c-helper-text__item pf-m-error"
            id="-address-helper"
          >
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-helper-text__item-text"
            >This is helper text for an invalid input.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="form-help-text-comment">
        <span class="pf-v6-c-form__label-text">Comment</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-success">
        <input
          value="This is a valid comment"
          type="text"
          id="form-help-text-comment"
          name="form-help-text-comment"
          aria-describedby="form-help-text-comment-helper"
        />
        <span class="pf-v6-c-form-control__utilities">
          <span class="pf-v6-c-form-control__icon pf-m-status">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
        </span>
      </span>
      <div class="pf-v6-c-form__helper-text" aria-live="polite">
        <div class="pf-v6-c-helper-text">
          <div
            class="pf-v6-c-helper-text__item pf-m-success"
            id="form-help-text-comment-helper"
          >
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-helper-text__item-text"
            >This is helper text for success input.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="form-help-text-info">
        <span class="pf-v6-c-form__label-text">Information</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span
        class="pf-v6-c-form-control pf-m-error pf-m-textarea pf-m-resize-both"
      >
        <textarea
          id="form-help-text-info"
          name="form-help-text-info"
          aria-invalid="true"
          aria-describedby="form-help-text-info-helper"
        ></textarea>
        <span class="pf-v6-c-form-control__utilities">
          <span class="pf-v6-c-form-control__icon pf-m-status">
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
          </span>
        </span>
      </span>
      <div class="pf-v6-c-form__helper-text" aria-live="polite">
        <div class="pf-v6-c-helper-text">
          <div
            class="pf-v6-c-helper-text__item pf-m-error"
            id="form-help-text-info-helper"
          >
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-helper-text__item-text"
            >This is helper text with an icon.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

```

### Label with additional info

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label pf-m-info">
      <div class="pf-v6-c-form__group-label-main"><label class="pf-v6-c-form__label" for="form-additional-info-name">
          <span class="pf-v6-c-form__label-text">Name</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
          <span
            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
            type="button"
            role="button"
            tabindex="0"
            aria-label="More information for name field"
            aria-describedby="form-additional-infoform-additional-info-name"
          >
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
          </span></span>
      </div>
      <div class="pf-v6-c-form__group-label-info">More info about the name field</div>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-additional-info-name"
          name="form-additional-info-name"
        />
      </span>
    </div>
  </div>
</form>

```

### Label with additional info (horizontal form)

```html
<form class="pf-v6-c-form pf-m-horizontal" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label pf-m-info">
      <div class="pf-v6-c-form__group-label-main"><label
          class="pf-v6-c-form__label"
          for="form-additional-info-horizontal-name"
        >
          <span class="pf-v6-c-form__label-text">Name</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
          <span
            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
            type="button"
            role="button"
            tabindex="0"
            aria-label="More information for name field"
            aria-describedby="form-additional-info-horizontalform-additional-info-horizontal-name"
          >
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
          </span></span>
      </div>
      <div class="pf-v6-c-form__group-label-info">More info about the name field</div>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-additional-info-horizontal-name"
          name="form-additional-info-horizontal-name"
        />
      </span>
    </div>
  </div>
</form>

```

### Action group

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group pf-m-action">
    <div class="pf-v6-c-form__actions">
      <button class="pf-v6-c-button pf-m-primary" type="submit">
        <span class="pf-v6-c-button__text">Submit form</span>
      </button>
      <button class="pf-v6-c-button pf-m-link" type="reset">
        <span class="pf-v6-c-button__text">Reset form</span>
      </button>
    </div>
  </div>
</form>

```

### Field group (non-expandable)

```html
<form class="pf-v6-c-form" novalidate>
  <div
    class="pf-v6-c-form__field-group"
    role="group"
    aria-labelledby="form-field-group-field-group-title"
  >
    <div class="pf-v6-c-form__field-group-header">
      <div class="pf-v6-c-form__field-group-header-main">
        <div class="pf-v6-c-form__field-group-header-title">
          <div
            class="pf-v6-c-form__field-group-header-title-text"
            id="form-field-group-field-group-title"
          >Field group Title</div>
        </div>
        <div
          class="pf-v6-c-form__field-group-header-description"
        >Field group description text</div>
      </div>
      <div class="pf-v6-c-form__field-group-header-actions">
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Action</span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-form__field-group-body" inert>
      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-field-group-field-group-label1"
          >
            <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
            <span
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              role="button"
              tabindex="0"
              aria-label="More information for label 1 field"
              aria-describedby="form-field-group-field-group-label1"
            >
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
            </span></span>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-field-group-field-group-label1"
              name="form-field-group-field-group-label1"
            />
          </span>
        </div>
      </div>
      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-field-group-field-group-label2"
          >
            <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
            <span
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              role="button"
              tabindex="0"
              aria-label="More information for label 2 field"
              aria-describedby="form-field-group-field-group-label2"
            >
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
            </span></span>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-field-group-field-group-label2"
              name="form-field-group-field-group-label2"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</form>

```

### Expandable and nested field groups

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="form-expandable-field-groups-field1"
      >
        <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-expandable-field-groups-field1"
          name="form-expandable-field-groups-field1"
        />
      </span>
    </div>
  </div>

  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="form-expandable-field-groups-field2"
      >
        <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-expandable-field-groups-field2"
          name="form-expandable-field-groups-field2"
        />
      </span>
    </div>
  </div>

  <div
    class="pf-v6-c-form__field-group pf-m-expandable pf-m-expanded"
    role="group"
    aria-labelledby="form-expandable-field-groups-field-group-1-title"
  >
    <div class="pf-v6-c-form__field-group-toggle">
      <div class="pf-v6-c-form__field-group-toggle-button">
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="form-expandable-field-groups-field-group-1-toggle"
          type="button"
          aria-expanded="true"
          aria-labelledby="form-expandable-field-groups-field-group-1-title form-expandable-field-groups-field-group-1-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-form__field-group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-form__field-group-header">
      <div class="pf-v6-c-form__field-group-header-main">
        <div class="pf-v6-c-form__field-group-header-title">
          <div
            class="pf-v6-c-form__field-group-header-title-text"
            id="form-expandable-field-groups-field-group-1-title"
          >Field group 1</div>
        </div>
        <div
          class="pf-v6-c-form__field-group-header-description"
        >Field group 1 description text</div>
      </div>
      <div class="pf-v6-c-form__field-group-header-actions">
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Action</span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-form__field-group-body">
      <div
        class="pf-v6-c-form__field-group pf-m-expandable pf-m-expanded"
        role="group"
        aria-labelledby="form-expandable-field-groups-nested-field-group-1-title"
      >
        <div class="pf-v6-c-form__field-group-toggle">
          <div class="pf-v6-c-form__field-group-toggle-button">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="form-expandable-field-groups-nested-field-group-1-toggle"
              type="button"
              aria-expanded="true"
              aria-labelledby="form-expandable-field-groups-nested-field-group-1-title form-expandable-field-groups-nested-field-group-1-toggle"
              aria-label="Details"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-form__field-group-toggle-icon">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-header">
          <div class="pf-v6-c-form__field-group-header-main">
            <div class="pf-v6-c-form__field-group-header-title">
              <div
                class="pf-v6-c-form__field-group-header-title-text"
                id="form-expandable-field-groups-nested-field-group-1-title"
              >Nested field group 1</div>
            </div>
            <div
              class="pf-v6-c-form__field-group-header-description"
            >Nested field group 1 description text</div>
          </div>
          <div class="pf-v6-c-form__field-group-header-actions">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Action</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-body">
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-1-label1"
              >
                <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 1 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-1-label1"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-1-label1"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-1-label1"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-1-label2"
              >
                <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 2 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-1-label2"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-1-label2"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-1-label2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pf-v6-c-form__field-group pf-m-expandable"
        role="group"
        aria-labelledby="form-expandable-field-groups-nested-field-group-2-title"
      >
        <div class="pf-v6-c-form__field-group-toggle">
          <div class="pf-v6-c-form__field-group-toggle-button">
            <button
              class="pf-v6-c-button pf-m-plain"
              id="form-expandable-field-groups-nested-field-group-2-toggle"
              type="button"
              aria-labelledby="form-expandable-field-groups-nested-field-group-2-title form-expandable-field-groups-nested-field-group-2-toggle"
              aria-label="Details"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-form__field-group-toggle-icon">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-header">
          <div class="pf-v6-c-form__field-group-header-main">
            <div class="pf-v6-c-form__field-group-header-title">
              <div
                class="pf-v6-c-form__field-group-header-title-text"
                id="form-expandable-field-groups-nested-field-group-2-title"
              >Nested field group 2</div>
            </div>
          </div>
          <div class="pf-v6-c-form__field-group-header-actions">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Action</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-body" inert>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-2-label1"
              >
                <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 1 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-2-label1"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-2-label1"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-2-label1"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-2-label2"
              >
                <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 2 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-2-label2"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-2-label2"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-2-label2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pf-v6-c-form__field-group pf-m-expandable"
        role="group"
        aria-labelledby="form-expandable-field-groups-nested-field-group-3-title"
      >
        <div class="pf-v6-c-form__field-group-toggle">
          <div class="pf-v6-c-form__field-group-toggle-button">
            <button
              class="pf-v6-c-button pf-m-plain"
              id="form-expandable-field-groups-nested-field-group-3-toggle"
              type="button"
              aria-labelledby="form-expandable-field-groups-nested-field-group-3-title form-expandable-field-groups-nested-field-group-3-toggle"
              aria-label="Details"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-form__field-group-toggle-icon">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-header">
          <div class="pf-v6-c-form__field-group-header-main">
            <div class="pf-v6-c-form__field-group-header-title">
              <div
                class="pf-v6-c-form__field-group-header-title-text"
                id="form-expandable-field-groups-nested-field-group-3-title"
              >Nested field group 3</div>
            </div>
            <div
              class="pf-v6-c-form__field-group-header-description"
            >Nested field group 3 description text</div>
          </div>
          <div class="pf-v6-c-form__field-group-header-actions">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Action</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-body" inert>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-3-label1"
              >
                <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 1 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-3-label1"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-3-label1"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-3-label1"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-3-label2"
              >
                <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 2 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-3-label2"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-3-label2"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-3-label2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-expandable-field-groups-nested-field1"
          >
            <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-expandable-field-groups-nested-field1"
              name="form-expandable-field-groups-nested-field1"
            />
          </span>
        </div>
      </div>

      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-expandable-field-groups-nested-field2"
          >
            <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-expandable-field-groups-nested-field2"
              name="form-expandable-field-groups-nested-field2"
            />
          </span>
        </div>
      </div>
    </div>
  </div>

  <div
    class="pf-v6-c-form__field-group pf-m-expandable"
    role="group"
    aria-labelledby="form-expandable-field-groups-field-group-2-title"
  >
    <div class="pf-v6-c-form__field-group-toggle">
      <div class="pf-v6-c-form__field-group-toggle-button">
        <button
          class="pf-v6-c-button pf-m-plain"
          id="form-expandable-field-groups-field-group-2-toggle"
          type="button"
          aria-labelledby="form-expandable-field-groups-field-group-2-title form-expandable-field-groups-field-group-2-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-form__field-group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-form__field-group-header">
      <div class="pf-v6-c-form__field-group-header-main">
        <div class="pf-v6-c-form__field-group-header-title">
          <div
            class="pf-v6-c-form__field-group-header-title-text"
            id="form-expandable-field-groups-field-group-2-title"
          >Field group 2</div>
        </div>
        <div
          class="pf-v6-c-form__field-group-header-description"
        >Field group 2 description text</div>
      </div>
    </div>
    <div class="pf-v6-c-form__field-group-body" inert>
      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-expandable-field-groupsform-expandable-field-groups-field-group-2-label1"
          >
            <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
            <span
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              role="button"
              tabindex="0"
              aria-label="More information for label 1 field"
              aria-describedby="form-expandable-field-groupsform-expandable-field-groups-field-group-2-label1"
            >
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
            </span></span>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-expandable-field-groupsform-expandable-field-groups-field-group-2-label1"
              name="form-expandable-field-groupsform-expandable-field-groups-field-group-2-label1"
            />
          </span>
        </div>
      </div>
      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-expandable-field-groupsform-expandable-field-groups-field-group-2-label2"
          >
            <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
            <span
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              role="button"
              tabindex="0"
              aria-label="More information for label 2 field"
              aria-describedby="form-expandable-field-groupsform-expandable-field-groups-field-group-2-label2"
            >
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
            </span></span>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-expandable-field-groupsform-expandable-field-groups-field-group-2-label2"
              name="form-expandable-field-groupsform-expandable-field-groups-field-group-2-label2"
            />
          </span>
        </div>
      </div>
      <div
        class="pf-v6-c-form__field-group"
        role="group"
        aria-labelledby="form-expandable-field-groups-field-group-3-title"
      >
        <div class="pf-v6-c-form__field-group-header">
          <div class="pf-v6-c-form__field-group-header-main">
            <div class="pf-v6-c-form__field-group-header-title">
              <div
                class="pf-v6-c-form__field-group-header-title-text"
                id="form-expandable-field-groups-field-group-3-title"
              >Nested field group 3</div>
            </div>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-body" inert>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-field-group-3-label1"
              >
                <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 1 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-field-group-3-label1"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-field-group-3-label1"
                  name="form-expandable-field-groupsform-expandable-field-groups-field-group-3-label1"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-field-group-3-label2"
              >
                <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 2 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-field-group-3-label2"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-field-group-3-label2"
                  name="form-expandable-field-groupsform-expandable-field-groups-field-group-3-label2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="pf-v6-c-form__field-group pf-m-expandable pf-m-expanded"
    role="group"
    aria-labelledby="form-expandable-field-groups-field-group-4-title"
  >
    <div class="pf-v6-c-form__field-group-toggle">
      <div class="pf-v6-c-form__field-group-toggle-button">
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="form-expandable-field-groups-field-group-4-toggle"
          type="button"
          aria-expanded="true"
          aria-labelledby="form-expandable-field-groups-field-group-4-title form-expandable-field-groups-field-group-4-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-form__field-group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-form__field-group-header">
      <div class="pf-v6-c-form__field-group-header-main">
        <div class="pf-v6-c-form__field-group-header-title">
          <div
            class="pf-v6-c-form__field-group-header-title-text"
            id="form-expandable-field-groups-field-group-4-title"
          >Field group 3</div>
        </div>
        <div
          class="pf-v6-c-form__field-group-header-description"
        >Field group 3 description text</div>
      </div>
    </div>
    <div class="pf-v6-c-form__field-group-body">
      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-expandable-field-groups-form-expandable-field-groups-field-group-4-field1"
          >
            <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-expandable-field-groups-form-expandable-field-groups-field-group-4-field1"
              name="form-expandable-field-groups-form-expandable-field-groups-field-group-4-field1"
            />
          </span>
        </div>
      </div>

      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-expandable-field-groups-form-expandable-field-groups-field-group-4-field2"
          >
            <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-expandable-field-groups-form-expandable-field-groups-field-group-4-field2"
              name="form-expandable-field-groups-form-expandable-field-groups-field-group-4-field2"
            />
          </span>
        </div>
      </div>

      <div
        class="pf-v6-c-form__field-group"
        role="group"
        aria-labelledby="form-expandable-field-groups-nested-field-group-4-title"
      >
        <div class="pf-v6-c-form__field-group-header">
          <div class="pf-v6-c-form__field-group-header-main">
            <div class="pf-v6-c-form__field-group-header-title">
              <div
                class="pf-v6-c-form__field-group-header-title-text"
                id="form-expandable-field-groups-nested-field-group-4-title"
              >Nested field group 1 (non-expandable)</div>
            </div>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-body" inert>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-4-label1"
              >
                <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 1 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-4-label1"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-4-label1"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-4-label1"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-4-label2"
              >
                <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 2 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-4-label2"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-4-label2"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-4-label2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pf-v6-c-form__field-group"
        role="group"
        aria-labelledby="form-expandable-field-groups-nested-field-group-5-title"
      >
        <div class="pf-v6-c-form__field-group-header">
          <div class="pf-v6-c-form__field-group-header-main">
            <div class="pf-v6-c-form__field-group-header-title">
              <div
                class="pf-v6-c-form__field-group-header-title-text"
                id="form-expandable-field-groups-nested-field-group-5-title"
              >Nested field group 2 (non-expandable)</div>
            </div>
            <div
              class="pf-v6-c-form__field-group-header-description"
            >Field group 2 description text</div>
          </div>
        </div>
        <div class="pf-v6-c-form__field-group-body" inert>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label1"
              >
                <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 1 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label1"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label1"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label1"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label2"
              >
                <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span
                  class="pf-v6-c-form__label-required"
                  aria-hidden="true"
                >&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
                <span
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  type="button"
                  role="button"
                  tabindex="0"
                  aria-label="More information for label 2 field"
                  aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label2"
                >
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
                </span></span>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label2"
                  name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="pf-v6-c-form__field-group"
    role="group"
    aria-labelledby="form-expandable-field-groups-nested-field-group-5-title"
  >
    <div class="pf-v6-c-form__field-group-header">
      <div class="pf-v6-c-form__field-group-header-main">
        <div class="pf-v6-c-form__field-group-header-title">
          <div
            class="pf-v6-c-form__field-group-header-title-text"
            id="form-expandable-field-groups-nested-field-group-5-title"
          >Field group 4 (non-expandable)</div>
        </div>
        <div
          class="pf-v6-c-form__field-group-header-description"
        >Field group 4 description text</div>
      </div>
    </div>
    <div class="pf-v6-c-form__field-group-body" inert>
      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label1"
          >
            <span class="pf-v6-c-form__label-text">Label 1</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
            <span
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              role="button"
              tabindex="0"
              aria-label="More information for label 1 field"
              aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label1"
            >
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
            </span></span>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label1"
              name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label1"
            />
          </span>
        </div>
      </div>
      <div class="pf-v6-c-form__group">
        <div class="pf-v6-c-form__group-label"><label
            class="pf-v6-c-form__label"
            for="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label2"
          >
            <span class="pf-v6-c-form__label-text">Label 2</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
            <span
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              role="button"
              tabindex="0"
              aria-label="More information for label 2 field"
              aria-describedby="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label2"
            >
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
            </span></span>
        </div>
        <div class="pf-v6-c-form__group-control">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="text"
              id="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label2"
              name="form-expandable-field-groupsform-expandable-field-groups-nested-field-group-5-label2"
            />
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="form-expandable-field-groups-field3"
      >
        <span class="pf-v6-c-form__label-text">Label 3</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-expandable-field-groups-field3"
          name="form-expandable-field-groups-field3"
        />
      </span>
    </div>
  </div>

  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="form-expandable-field-groups-field4"
      >
        <span class="pf-v6-c-form__label-text">Label 4</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="form-expandable-field-groups-field4"
          name="form-expandable-field-groups-field4"
        />
      </span>
    </div>
  </div>
</form>

```

## Documentation

To avoid the form label's required indicator or help tooltip icon from wrapping separately from the form label text, all whitespace characters between the last word of the label text, the required indicator (`.pf-v6-c-form__label-required`), and help tooltip icon (`.pf-v6-c-form__label-help`) must be removed, and `&nbsp;` characters added in between to maintain spacing. Also the help tooltip icon's `.pf-v6-c-form__label-required` element must be a `<span>` instead of a `<button>` due to layout limitations of the `<button>` element imposed by user agent styles.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `for` | `<label>` |  Each `<label>` must have a `for` attribute that matches its form field id. **Required** |
| `id` | `<input type="radio/checkbox/text">`, `<select>`, `<textarea>` |  Each `<form>` field must have an `id` attribute that matches its label's `for` value. **Required** |
| `required` | `<input>`, `<select>`, `<textarea>` | Required fields must include these attributes. |
| `aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` | Form fields with related `.pf-v6-c-helper-text` require this attribute. Usage `<input aria-describedby="{helper_text_id}">`.  |
| `aria-invalid="true" aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` |  When form validation fails `aria-describedby` is used to communicate the error to the user. These attributes need to be handled with Javascript so that `aria-describedby` only references help text that explains the error, and so that `aria-invalid="true"` is only present when validation fails. For proper styling of errors `aria-invalid="true"` is required. |
| `aria-hidden="true"` | `.pf-v6-c-form__label-required` |  Hides the required indicator from assistive technologies. |
| `role="group"` | `.pf-v6-c-form__group`, `.pf-v6-c-form__section`, `.pf-v6-c-form__field-group` | Provides group role for form groups, form sections, and form field groups. **Required for checkbox groups, form groups, form sections, and form field groups.** |
| `role="radiogroup"` | `.pf-v6-c-form__group` | Provides group role for radio input groups. **Required for radio input groups** |
| `role="button"` | `.pf-v6-c-form__group-label-help` | Provides button role for group label help spans. **Required for group label help.** |
| `id` | `.pf-v6-c-form__group-label` | Generates an `id` for use in the `aria-labelledby` attribute in a checkbox or radio form group. |
| `id` | `.pf-v6-c-form__field-group-title-text` | Generates an `id` for use in the `aria-labelledby` attribute in an expandable field group's toggle button. |
| `id` | `.pf-v6-c-form__field-group-toggle-button > button` | Generates an `id` for use in the `aria-labelledby` attribute in an expandable field group's toggle button. |
| `aria-labelledby="{label id}"` | `.pf-v6-c-form__group`, `.pf-v6-c-form__section`, `.pf-v6-c-form__field-group` | Provides an accessible label for form groups, form sections, and form field groups. **Required for form groups, form sections, and form field groups that contain labels.** |
| `aria-label` | `.pf-v6-c-form__field-group-toggle-button > button` | Provides an accessible label for the field group toggle button. |
| `aria-labelledby="{title id} {toggle button id}"` | `.pf-v6-c-form__field-group-toggle-button > button` | Provides an accessible label for the field group toggle button. |
| `aria-expanded="true/false"` | `.pf-v6-c-form__field-group-toggle-button > button` | Indicates whether the field group body is visible or hidden. |
| `id="{form_label_id}"` | `.pf-v6-c-form__label` |  Generates an `id` for use in the `aria-describedby` attribute in a `.pf-v6-c-form__group-label-help`. |
| `aria-label="{descriptive text}" aria-describedby="{form_label_id}"` | `.pf-v6-c-form__group-label-help` |  Provides an accessible label on a button that provides additional information for a form element. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-form` | `<form>` |  Initiates a standard form. **Required** |
| `.pf-v6-c-form__section` | `<div>, <section>` |  Initiates a form section. |
| `.pf-v6-c-form__section-title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`, `<div>` |  Initiates a form section title. |
| `.pf-v6-c-form__group` | `<div>` |  Initiates a form group. |
| `.pf-v6-c-form__group-label` | `<div>` |  Initiates a form group label. |
| `.pf-v6-c-form__label` | `<label>`, `<span>` |  Initiates a form label. **Required** |
| `.pf-v6-c-form__label-text` | `<span>` |  Initiates a form label text. **Required** |
| `.pf-v6-c-form__label-required` | `<span>` |  Initiates a form label required indicator. |
| `.pf-v6-c-form__group-label-main` | `<div>` |  Initiates a form group label main container. |
| `.pf-v6-c-form__group-label-info` | `<div>` |  Initiates a form group info label. |
| `.pf-v6-c-form__group-label-help` | `<span>` | Initiates field level help. |
| `.pf-v6-c-form__group-control` | `<div>` |  Initiates a form group control section. |
| `.pf-v6-c-form__actions` | `<div>` | Iniates a row of actions. |
| `.pf-v6-c-form__helper-text` | `<p>`, `<div>` |  Initiates a form helper text block. |
| `.pf-v6-c-form__alert` | `<div>` | Initiates the form alert container for inline alerts. |
| `.pf-v6-c-form__field-group` | `<div>` | Initiates a form field group. |
| `.pf-v6-c-form__field-group-toggle` | `<div>` | Initiates the form field group toggle. |
| `.pf-v6-c-form__field-group-toggle-button` | `<div>` | Initiates the form field group toggle button. |
| `.pf-v6-c-form__field-group-toggle-icon` | `<span>` | Initiates the form field group toggle icon. |
| `.pf-v6-c-form__field-group-header` | `<div>` | Initiates the form field group header. |
| `.pf-v6-c-form__field-group-header-main` | `<div>` | Initiates the form field group main section. |
| `.pf-v6-c-form__field-group-header-title` | `<div>` | Initiates the form field group title. |
| `.pf-v6-c-form__field-group-header-title-text` | `<div>` | Initiates the form field group title text. |
| `.pf-v6-c-form__field-group-header-description` | `<div>` | Initiates the form field group description. |
| `.pf-v6-c-form__field-group-header-actions` | `<div>` | Initiates the form field group actions container. |
| `.pf-v6-c-form__field-group-body` | `<div>` | Initiates the form field group body. |
| `.pf-m-horizontal{-on-[xs, sm, md, lg, xl, 2xl]}` | `.pf-v6-c-form` | Modifies the form for a horizontal layout at an optional breakpoint. The default breakpoint is `-md`. |
| `.pf-m-limit-width` | `.pf-v6-c-form` | Limits the overall max-width of the form. Configurable by defining `--pf-v6-c-form--m-limit-width--MaxWidth`. |
| `.pf-m-info` | `.pf-v6-c-form__group-label` | Modifies the form group label to contain form group label info. |
| `.pf-m-action` | `.pf-v6-c-form__group` | Modifies form group margin-top. |
| `.pf-m-disabled` | `.pf-v6-c-form__label` | Modifies form label to show disabled state. |
| `.pf-m-no-padding-top` | `.pf-v6-c-form__group-label` | Removes top padding from the label element for labels adjacent to an element that isn't a form control. |
| `.pf-m-inline` | `.pf-v6-c-form__group-control` | Modifies form group children to be inline (this is primarily for radio buttons and checkboxes). |
| `.pf-m-stack` | `.pf-v6-c-form__group-control` | Modifies form group children to be stacked with space between children. |
| `.pf-m-expandable` | `.pf-v6-c-form__field-group` | Modifies a field group to be expandable. Currently used as the opt-in for animating the expanded state. |
| `.pf-m-expanded` | `.pf-v6-c-form__field-group` | Modifies an expandable field group for the expanded state. |
| `--pf-v6-c-form--m-limit-width--MaxWidth` | `.pf-v6-c-form.pf-m-limit-width` | Sets a custom `max-width` for a width limited form. |
