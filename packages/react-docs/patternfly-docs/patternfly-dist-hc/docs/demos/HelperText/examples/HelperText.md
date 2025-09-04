---
id: 'Helper text'
section: components
---## Examples

### Helper text on a form

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="helper-text-form-name">
        <span class="pf-v6-c-form__label-text">Name</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="helper-text-form-name"
          name="helper-text-form-name"
          aria-describedby="helper-text-form-name-helper"
        />
      </span>
      <div
        class="pf-v6-c-form__helper-text"
        aria-live="polite"
        id="helper-text-form-name-helper"
      >
        <div class="pf-v6-c-helper-text">
          <div class="pf-v6-c-helper-text__item">
            <span
              class="pf-v6-c-helper-text__item-text"
            >This is helper text on a form field.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="helper-text-form-email">
        <span class="pf-v6-c-form__label-text">E-mail</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required pf-m-warning">
        <input
          required
          type="text"
          id="helper-text-form-email"
          name="helper-text-form-email"
          aria-describedby="helper-text-form-email-helper"
        />
        <span class="pf-v6-c-form-control__utilities">
          <span class="pf-v6-c-form-control__icon pf-m-status">
            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
          </span>
        </span>
      </span>

      <div
        class="pf-v6-c-form__helper-text"
        aria-live="polite"
        id="helper-text-form-email-helper"
      >
        <div class="pf-v6-c-helper-text">
          <div class="pf-v6-c-helper-text__item pf-m-warning">
            <span
              class="pf-v6-c-helper-text__item-text"
            >This is helper text for a warning.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="helper-text-form-address">
        <span class="pf-v6-c-form__label-text">Address</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required pf-m-error">
        <input
          required
          type="text"
          id="helper-text-form-address"
          name="helper-text-form-address"
          aria-invalid="true"
          aria-describedby="helper-text-form-address-helper"
        />
        <span class="pf-v6-c-form-control__utilities">
          <span class="pf-v6-c-form-control__icon pf-m-status">
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
          </span>
        </span>
      </span>

      <div
        class="pf-v6-c-form__helper-text"
        aria-live="polite"
        id="helper-text-form-address-helper"
      >
        <div class="pf-v6-c-helper-text">
          <div class="pf-v6-c-helper-text__item pf-m-success pf-m-dynamic">
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-helper-text__item-text"
            >This criteria has been met.</span>
          </div>
          <div class="pf-v6-c-helper-text__item pf-m-error pf-m-dynamic">
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-helper-text__item-text"
            >This criteria has not been met.</span>
          </div>
          <div class="pf-v6-c-helper-text__item pf-m-success pf-m-dynamic">
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-helper-text__item-text"
            >This criteria has been met.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="helper-text-form-comment">
        <span class="pf-v6-c-form__label-text">Comment</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-success">
        <input
          value="This is a valid comment"
          type="text"
          id="helper-text-form-comment"
          name="helper-text-form-comment"
          aria-describedby="helper-text-form-comment-helper"
        />
        <span class="pf-v6-c-form-control__utilities">
          <span class="pf-v6-c-form-control__icon pf-m-status">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
        </span>
      </span>

      <div
        class="pf-v6-c-form__helper-text"
        aria-live="polite"
        id="helper-text-form-comment-helper"
      >
        <div class="pf-v6-c-helper-text">
          <div class="pf-v6-c-helper-text__item pf-m-success pf-m-dynamic">
            <span class="pf-v6-c-helper-text__item-icon">
              <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-helper-text__item-text"
            >This is dynamic helper text with an icon showing success.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

```

## Documentation

When adding helper text to a form field, place it within the form helper text element.
