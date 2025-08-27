---
id: 'Button'
section: components
cssPrefix: pf-d-button
---## Examples

### Progress button - initial

```html
<form class="pf-v6-c-form pf-m-limit-width" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="progress-button-example-login">
        <span class="pf-v6-c-form__label-text">Username</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="progress-button-example-login"
          name="progress-button-example-login"
          value="johndoe"
        />
      </span>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="progress-button-example-password">
        <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="password"
          value="p@ssw0rd"
          id="progress-button-example-password"
          name="progress-button-example-password"
        />
      </span>
    </div>
  </div>
  <div class="pf-v6-c-form__group pf-m-action">
    <div class="pf-v6-c-form__actions">
      <button class="pf-v6-c-button pf-m-primary" type="submit">
        <span class="pf-v6-c-button__text">Link account and log in</span>
      </button>
    </div>
  </div>
</form>

```

### Progress button - loading

```html
<form class="pf-v6-c-form pf-m-limit-width" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="progress-button-loading-example-login"
      >
        <span class="pf-v6-c-form__label-text">Username</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="progress-button-loading-example-login"
          name="progress-button-loading-example-login"
          value="johndoe"
        />
      </span>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="progress-button-loading-example-password"
      >
        <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="password"
          value="p@ssw0rd"
          id="progress-button-loading-example-password"
          name="progress-button-loading-example-password"
        />
      </span>
    </div>
  </div>
  <div class="pf-v6-c-form__group pf-m-action">
    <div class="pf-v6-c-form__actions">
      <button
        class="pf-v6-c-button pf-m-in-progress pf-m-progress pf-m-primary"
        type="submit"
      >
        <span class="pf-v6-c-button__progress">
          <svg
            class="pf-v6-c-spinner pf-m-md"
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

        <span class="pf-v6-c-button__text">Linking account</span>
      </button>
    </div>
  </div>
</form>

```

### Progress button - complete

```html
<form class="pf-v6-c-form pf-m-limit-width" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="progress-button-complete-example-login"
      >
        <span class="pf-v6-c-form__label-text">Username</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="progress-button-complete-example-login"
          name="progress-button-complete-example-login"
          value="johndoe"
        />
      </span>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label
        class="pf-v6-c-form__label"
        for="progress-button-complete-example-password"
      >
        <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="password"
          value="p@ssw0rd"
          id="progress-button-complete-example-password"
          name="progress-button-complete-example-password"
        />
      </span>
    </div>
  </div>
  <div class="pf-v6-c-form__group pf-m-action">
    <div class="pf-v6-c-form__actions">
      <button class="pf-v6-c-button pf-m-primary" type="submit">
        <span class="pf-v6-c-button__icon pf-m-start">
          <i class="fas fa-check-circle" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-button__text">Logged in</span>
      </button>
    </div>
  </div>
</form>

```
