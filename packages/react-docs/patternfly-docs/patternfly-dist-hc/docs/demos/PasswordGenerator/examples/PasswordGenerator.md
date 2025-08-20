---
id: 'Password generator'
section: components
---## Examples

### Provide a generated password

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label pf-m-info">
      <div class="pf-v6-c-form__group-label-main"><label
          class="pf-v6-c-form__label"
          for="password-generator-demo--initial-password"
        >
          <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>&nbsp;<span class="pf-v6-c-form__group-label-help">
          <span
            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
            type="button"
            role="button"
            tabindex="0"
            aria-label="More information for password field"
            aria-describedby="password-generator-demo--initial-password"
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
      <div class="pf-v6-c-form__group-label-info"></div>
    </div>
    <div class="pf-v6-c-form__group-control">
      <div class="pf-v6-c-input-group">
        <div class="pf-v6-c-input-group__item pf-m-fill">
          <span class="pf-v6-c-form-control pf-m-required">
            <input
              required
              type="password"
              id="password-generator-demo--initial-password"
              name="password-generator-demo--initial-password"
              aria-label="Password input"
              value
              placeholder="Password"
            />
          </span>
        </div>
        <div class="pf-v6-c-input-group__item">
          <button
            class="pf-v6-c-button pf-m-control"
            type="button"
            aria-label="Show password"
          >
            <span class="pf-v6-c-button__icon">
              <i class="fas fa-eye" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-menu">
        <div class="pf-v6-c-menu__content">
          <ul class="pf-v6-c-menu__list" role="menu">
            <li class="pf-v6-c-menu__list-item" role="none">
              <button class="pf-v6-c-menu__item" type="button" role="menuitem">
                <span class="pf-v6-c-menu__item-main">
                  <span
                    class="pf-v6-c-menu__item-text"
                  >Use suggested password: fqu9kKe676JmKt2</span>
                </span>
              </button>
              <div class="pf-v6-c-menu__item-action">
                <button
                  class="pf-v6-c-button pf-m-plain"
                  type="button"
                  role="menuitem"
                  aria-label="Generate a new suggested password"
                >
                  <span class="pf-v6-c-button__icon">
                    <i class="fas fa-fw fa-redo" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</form>

```

## Documentation

This demo shows how to use a menu in conjunction with a form input to provide a generated password and an associated button for refresh.
