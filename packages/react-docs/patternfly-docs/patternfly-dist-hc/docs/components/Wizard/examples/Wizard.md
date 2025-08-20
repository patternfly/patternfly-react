---
id: Wizard
section: components
cssPrefix: pf-v6-c-wizard
wrapperTag: div
---import './Wizard.css'

## Examples

### Basic

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item">
        <span class="pf-v6-c-wizard__toggle-num">2</span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-basic-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-basic-form-field1"
                    name="wizard-basic-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-basic-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-basic-form-field2"
                    name="wizard-basic-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-basic-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-basic-form-field3"
                    name="wizard-basic-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-basic-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-basic-form-field4"
                    name="wizard-basic-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-basic-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-basic-form-field5"
                    name="wizard-basic-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-basic-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-basic-form-field6"
                    name="wizard-basic-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-basic-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-basic-form-field7"
                    name="wizard-basic-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Nav expanded (mobile)

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle pf-m-expanded"
    aria-expanded="true"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item">
        <span class="pf-v6-c-wizard__toggle-num">2</span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav pf-m-expanded" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-nav-expanded-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-nav-expanded-form-field1"
                    name="wizard-nav-expanded-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-nav-expanded-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-nav-expanded-form-field2"
                    name="wizard-nav-expanded-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-nav-expanded-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-nav-expanded-form-field3"
                    name="wizard-nav-expanded-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-nav-expanded-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-nav-expanded-form-field4"
                    name="wizard-nav-expanded-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-nav-expanded-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-nav-expanded-form-field5"
                    name="wizard-nav-expanded-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-nav-expanded-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-nav-expanded-form-field6"
                    name="wizard-nav-expanded-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-nav-expanded-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-nav-expanded-form-field7"
                    name="wizard-nav-expanded-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### With drawer

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item">
        <span class="pf-v6-c-wizard__toggle-num">2</span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-drawer pf-m-expanded pf-m-inline">
          <div class="pf-v6-c-drawer__main">
            <div class="pf-v6-c-drawer__content">
              <div class="pf-v6-c-wizard__main-body">
                <button
                  class="pf-v6-c-button pf-v6-u-hidden pf-v6-u-float-right pf-v6-u-ml-md pf-m-inline pf-m-link"
                  type="button"
                >
                  <span class="pf-v6-c-button__text">Open drawer</span>
                </button>
                <form class="pf-v6-c-form pf-m-limit-width" novalidate>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="wizard-with-drawer-example-form-field1"
                      >
                        <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="wizard-with-drawer-example-form-field1"
                          name="wizard-with-drawer-example-form-field1"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="wizard-with-drawer-example-form-field2"
                      >
                        <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="wizard-with-drawer-example-form-field2"
                          name="wizard-with-drawer-example-form-field2"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="wizard-with-drawer-example-form-field3"
                      >
                        <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="wizard-with-drawer-example-form-field3"
                          name="wizard-with-drawer-example-form-field3"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="wizard-with-drawer-example-form-field4"
                      >
                        <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="wizard-with-drawer-example-form-field4"
                          name="wizard-with-drawer-example-form-field4"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="wizard-with-drawer-example-form-field5"
                      >
                        <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="wizard-with-drawer-example-form-field5"
                          name="wizard-with-drawer-example-form-field5"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="wizard-with-drawer-example-form-field6"
                      >
                        <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="wizard-with-drawer-example-form-field6"
                          name="wizard-with-drawer-example-form-field6"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="wizard-with-drawer-example-form-field7"
                      >
                        <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="wizard-with-drawer-example-form-field7"
                          name="wizard-with-drawer-example-form-field7"
                        />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="pf-v6-c-drawer__panel pf-m-width-33">
              <div class="pf-v6-c-drawer__body">
                <div class="pf-v6-c-drawer__head">
                  <div class="pf-v6-c-drawer__actions">
                    <div class="pf-v6-c-drawer__close">
                      <button
                        class="pf-v6-c-button pf-m-plain"
                        type="button"
                        aria-label="Close drawer panel"
                      >
                        <span class="pf-v6-c-button__icon">
                          <i class="fas fa-times" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                  </div>drawer-panel
                </div>
              </div>
            </div>
          </div>
          <footer class="pf-v6-c-wizard__footer">
            <div class="pf-v6-c-action-list">
              <div class="pf-v6-c-action-list__group">
                <div class="pf-v6-c-action-list__item">
                  <button class="pf-v6-c-button pf-m-secondary" type="button">
                    <span class="pf-v6-c-button__text">Back</span>
                  </button>
                </div>
                <div class="pf-v6-c-action-list__item">
                  <button class="pf-v6-c-button pf-m-primary" type="button">
                    <span class="pf-v6-c-button__text">Next</span>
                  </button>
                </div>
              </div>
              <div class="pf-v6-c-action-list__group">
                <div class="pf-v6-c-action-list__item">
                  <button class="pf-v6-c-button pf-m-link" type="button">
                    <span class="pf-v6-c-button__text">Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  </div>
</div>

```

### Expandable collapsed

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item">
        <span class="pf-v6-c-wizard__toggle-num">2</span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-current"
              type="button"
              aria-current="page"
            >
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable">
            <button
              class="pf-v6-c-wizard__nav-link"
              type="button"
              aria-expanded="false"
            >
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-collapsed-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field1"
                    name="wizard-expandable-collapsed-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-collapsed-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field2"
                    name="wizard-expandable-collapsed-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-collapsed-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field3"
                    name="wizard-expandable-collapsed-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-collapsed-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field4"
                    name="wizard-expandable-collapsed-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-collapsed-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field5"
                    name="wizard-expandable-collapsed-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-collapsed-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field6"
                    name="wizard-expandable-collapsed-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-collapsed-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field7"
                    name="wizard-expandable-collapsed-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Expandable expanded

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item">
        <span class="pf-v6-c-wizard__toggle-num">2</span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-expanded-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-expanded-form-field1"
                    name="wizard-expandable-expanded-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-expanded-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-expanded-form-field2"
                    name="wizard-expandable-expanded-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-expanded-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-expanded-form-field3"
                    name="wizard-expandable-expanded-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-expanded-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-expanded-form-field4"
                    name="wizard-expandable-expanded-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-expanded-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-expanded-form-field5"
                    name="wizard-expandable-expanded-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-expanded-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-expanded-form-field6"
                    name="wizard-expandable-expanded-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-expandable-expanded-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-expanded-form-field7"
                    name="wizard-expandable-expanded-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Finished

```html isFullscreen
<div class="pf-v6-c-wizard pf-m-finished">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item">
        <span class="pf-v6-c-wizard__toggle-num">2</span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <div class="pf-v6-l-bullseye">
            <div class="pf-v6-c-empty-state pf-m-lg">
              <div class="pf-v6-c-empty-state__content">
                <div class="pf-v6-c-empty-state__icon">
                  <i class="fas fa- fa-cogs" aria-hidden="true"></i>
                </div>

                <div
                  class="pf-v6-c-empty-state__title"
                  id="wizard-finished-empty-state-title"
                >
                  <h1
                    class="pf-v6-c-empty-state__title-text"
                  >Validating credentials</h1>
                </div>
                <div class="pf-v6-c-empty-state__body">
                  <div
                    class="pf-v6-c-progress pf-m-singleline"
                    id="progress-singleline-example"
                  >
                    <div class="pf-v6-c-progress__status" aria-hidden="true">
                      <span class="pf-v6-c-progress__measure">33%</span>
                    </div>
                    <div
                      class="pf-v6-c-progress__bar"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="33"
                      aria-labelledby="wizard-finished-empty-state-title"
                      aria-label="Progress status"
                    >
                      <div
                        class="pf-v6-c-progress__indicator"
                        style="width:33%;"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  class="pf-v6-c-empty-state__body"
                >Description can be used to further elaborate on the validation step, or give the user a better idea of how long the process will take.</div>
                <button class="pf-v6-c-button pf-m-link" type="button">
                  <span class="pf-v6-c-button__text">Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Error on step

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item pf-m-danger">
        <span class="pf-v6-c-wizard__toggle-status-icon">
          <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
        </span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-danger pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-status-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-example-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-example-form-field1"
                    name="wizard-error-on-step-example-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-example-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-example-form-field2"
                    name="wizard-error-on-step-example-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-example-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-example-form-field3"
                    name="wizard-error-on-step-example-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-example-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-example-form-field4"
                    name="wizard-error-on-step-example-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-example-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-example-form-field5"
                    name="wizard-error-on-step-example-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-example-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-example-form-field6"
                    name="wizard-error-on-step-example-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-example-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-example-form-field7"
                    name="wizard-error-on-step-example-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Nav expanded with error (mobile)

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle pf-m-expanded"
    aria-expanded="true"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item pf-m-danger">
        <span class="pf-v6-c-wizard__toggle-status-icon">
          <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
        </span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav pf-m-expanded" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-danger pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-status-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-nav-expanded-example-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-nav-expanded-example-form-field1"
                    name="wizard-error-on-step-nav-expanded-example-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-nav-expanded-example-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-nav-expanded-example-form-field2"
                    name="wizard-error-on-step-nav-expanded-example-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-nav-expanded-example-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-nav-expanded-example-form-field3"
                    name="wizard-error-on-step-nav-expanded-example-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-nav-expanded-example-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-nav-expanded-example-form-field4"
                    name="wizard-error-on-step-nav-expanded-example-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-nav-expanded-example-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-nav-expanded-example-form-field5"
                    name="wizard-error-on-step-nav-expanded-example-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-nav-expanded-example-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-nav-expanded-example-form-field6"
                    name="wizard-error-on-step-nav-expanded-example-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-error-on-step-nav-expanded-example-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-error-on-step-nav-expanded-example-form-field7"
                    name="wizard-error-on-step-nav-expanded-example-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Success on step

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item pf-m-success">
        <span class="pf-v6-c-wizard__toggle-status-icon">
          <i class="fas fa-check-circle" aria-hidden="true"></i>
        </span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-success pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-status-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-example-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-example-form-field1"
                    name="wizard-success-on-step-example-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-example-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-example-form-field2"
                    name="wizard-success-on-step-example-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-example-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-example-form-field3"
                    name="wizard-success-on-step-example-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-example-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-example-form-field4"
                    name="wizard-success-on-step-example-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-example-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-example-form-field5"
                    name="wizard-success-on-step-example-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-example-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-example-form-field6"
                    name="wizard-success-on-step-example-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-example-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-example-form-field7"
                    name="wizard-success-on-step-example-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Nav expanded with success (mobile)

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle pf-m-expanded"
    aria-expanded="true"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item pf-m-success">
        <span class="pf-v6-c-wizard__toggle-status-icon">
          <i class="fas fa-check-circle" aria-hidden="true"></i>
        </span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav pf-m-expanded" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-success pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-status-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-nav-expanded-example-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-nav-expanded-example-form-field1"
                    name="wizard-success-on-step-nav-expanded-example-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-nav-expanded-example-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-nav-expanded-example-form-field2"
                    name="wizard-success-on-step-nav-expanded-example-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-nav-expanded-example-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-nav-expanded-example-form-field3"
                    name="wizard-success-on-step-nav-expanded-example-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-nav-expanded-example-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-nav-expanded-example-form-field4"
                    name="wizard-success-on-step-nav-expanded-example-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-nav-expanded-example-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-nav-expanded-example-form-field5"
                    name="wizard-success-on-step-nav-expanded-example-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-nav-expanded-example-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-nav-expanded-example-form-field6"
                    name="wizard-success-on-step-nav-expanded-example-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-success-on-step-nav-expanded-example-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-success-on-step-nav-expanded-example-form-field7"
                    name="wizard-success-on-step-nav-expanded-example-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Warning on step

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item pf-m-warning">
        <span class="pf-v6-c-wizard__toggle-status-icon">
          <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
        </span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-warning pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-status-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-example-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-example-form-field1"
                    name="wizard-warning-on-step-example-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-example-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-example-form-field2"
                    name="wizard-warning-on-step-example-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-example-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-example-form-field3"
                    name="wizard-warning-on-step-example-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-example-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-example-form-field4"
                    name="wizard-warning-on-step-example-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-example-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-example-form-field5"
                    name="wizard-warning-on-step-example-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-example-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-example-form-field6"
                    name="wizard-warning-on-step-example-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-example-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-example-form-field7"
                    name="wizard-warning-on-step-example-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

### Nav expanded with warning (mobile)

```html isFullscreen
<div class="pf-v6-c-wizard">
  <div class="pf-v6-c-wizard__header">
    <div class="pf-v6-c-wizard__close">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Close"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-wizard__title">
      <h1 class="pf-v6-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v6-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v6-c-wizard__toggle pf-m-expanded"
    aria-expanded="true"
  >
    <span class="pf-v6-c-wizard__toggle-list">
      <span class="pf-v6-c-wizard__toggle-list-item pf-m-warning">
        <span class="pf-v6-c-wizard__toggle-status-icon">
          <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
        </span>
        Configuration
        <i
          class="fas fa-angle-right pf-v6-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v6-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v6-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v6-c-wizard__outer-wrap">
    <div class="pf-v6-c-wizard__inner-wrap">
      <nav class="pf-v6-c-wizard__nav pf-m-expanded" aria-label="Steps">
        <ol class="pf-v6-c-wizard__nav-list" role="list">
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Information</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded">
            <button
              class="pf-v6-c-wizard__nav-link pf-m-warning pf-m-current"
              type="button"
              aria-expanded="true"
            >
              <span class="pf-v6-c-wizard__nav-link-status-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Configuration</span>
                <span class="pf-v6-c-wizard__nav-link-toggle">
                  <span class="pf-v6-c-wizard__nav-link-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </span>
              </span>
            </button>
            <ol class="pf-v6-c-wizard__nav-list" role="list">
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep A</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button
                  class="pf-v6-c-wizard__nav-link pf-m-current"
                  type="button"
                  aria-current="page"
                >
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep B</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-wizard__nav-item">
                <button class="pf-v6-c-wizard__nav-link" type="button">
                  <span class="pf-v6-c-wizard__nav-link-main">
                    <span class="pf-v6-c-wizard__nav-link-text">Substep C</span>
                  </span>
                </button>
              </li>
            </ol>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button">
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Additional</span>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-wizard__nav-item">
            <button class="pf-v6-c-wizard__nav-link" type="button" disabled>
              <span class="pf-v6-c-wizard__nav-link-main">
                <span class="pf-v6-c-wizard__nav-link-text">Review</span>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <main class="pf-v6-c-wizard__main" tabindex="0">
        <div class="pf-v6-c-wizard__main-body">
          <form class="pf-v6-c-form pf-m-limit-width" novalidate>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-nav-expanded-example-form-field1"
                >
                  <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-nav-expanded-example-form-field1"
                    name="wizard-warning-on-step-nav-expanded-example-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-nav-expanded-example-form-field2"
                >
                  <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-nav-expanded-example-form-field2"
                    name="wizard-warning-on-step-nav-expanded-example-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-nav-expanded-example-form-field3"
                >
                  <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-nav-expanded-example-form-field3"
                    name="wizard-warning-on-step-nav-expanded-example-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-nav-expanded-example-form-field4"
                >
                  <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-nav-expanded-example-form-field4"
                    name="wizard-warning-on-step-nav-expanded-example-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-nav-expanded-example-form-field5"
                >
                  <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-nav-expanded-example-form-field5"
                    name="wizard-warning-on-step-nav-expanded-example-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-nav-expanded-example-form-field6"
                >
                  <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-nav-expanded-example-form-field6"
                    name="wizard-warning-on-step-nav-expanded-example-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v6-c-form__group">
              <div class="pf-v6-c-form__group-label"><label
                  class="pf-v6-c-form__label"
                  for="wizard-warning-on-step-nav-expanded-example-form-field7"
                >
                  <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v6-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v6-c-form__group-control">
                <span class="pf-v6-c-form-control">
                  <input
                    type="text"
                    id="wizard-warning-on-step-nav-expanded-example-form-field7"
                    name="wizard-warning-on-step-nav-expanded-example-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v6-c-wizard__footer">
      <div class="pf-v6-c-action-list">
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-secondary" type="button">
              <span class="pf-v6-c-button__text">Back</span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-primary" type="button">
              <span class="pf-v6-c-button__text">Next</span>
            </button>
          </div>
        </div>
        <div class="pf-v6-c-action-list__group">
          <div class="pf-v6-c-action-list__item">
            <button class="pf-v6-c-button pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-v6-c-wizard__toggle` | Indicates that the steps menu is visible. **Required** |
| `aria-expanded="false"` | `.pf-v6-c-wizard__toggle` | Indicates that the steps menu is hidden. **Required** |
| `aria-label="close"` | `.pf-v6-c-wizard__toggle-icon` | Gives the close button an accessible name. **Required** |
| `aria-hidden="true"` | `.pf-v6-c-wizard__toggle-icon`, `.pf-v6-c-wizard__toggle-divider` | Hides the icon from assistive technologies. **Required** |
| `aria-label="Steps"` | `.pf-v6-c-wizard__nav` | Gives the steps nav element an accessible name. **Required** |
| `disabled` | `button.pf-v6-c-wizard__nav-link` | Indicates that the element is disabled. **Required when a nav item is disabled** |
| `aria-disabled="true"` | `a.pf-v6-c-wizard__nav-link` | Indicates that the element is disabled. **Required for disabled links with `.pf-m-disabled`** |
| `aria-current="page"` | `.pf-v6-c-wizard__nav-link` | Indicates the current page link. Can only occur once on page. **Required for the current link** |
| `aria-expanded="true"` | `.pf-v6-c-wizard__nav-link` | Indicates that the link subnav is visible. **Required** |
| `aria-expanded="false"` | `.pf-v6-c-wizard__nav-link` | Indicates that the link subnav is hidden. **Required** |
| `tabindex="-1"` | `a.pf-v6-c-wizard__nav-link` | Removes a link from keyboard focus. **Required for disabled links with `.pf-m-disabled`** |
| `tabindex="0"` | `.pf-v6-c-wizard__main` | If the wizard main section has overflow content that triggers a scrollbar, to ensure that the content is keyboard accessible, the section must include either a focusable element within the scrollable region or the section itself must be focusable by adding `tabindex="0"`. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-wizard` | `<div>` | Initiates the wizard component. **Required** |
| `.pf-v6-c-wizard__header` | `<header>` | Initiates the header. **Required** when the wizard is in a modal. Not recommended to use when the wizard is placed on a page. |
| `.pf-v6-c-wizard__close` | `<div>` | Initiates the close button. **Required** |
| `.pf-v6-c-wizard__title` | `<div>` | Initiates the title container. **Required** |
| `.pf-v6-c-wizard__title-text` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<div>` | Initiates the wizard title text. |
| `.pf-v6-c-wizard__description` | `<div>`, `<p>` | Initiates the description. |
| `.pf-v6-c-wizard__toggle` | `<button>` | Initiates the mobile steps menu toggle button. **Required** |
| `.pf-v6-c-wizard__toggle-list` | `<span>` | Initiates the toggle list. **Required** |
| `.pf-v6-c-wizard__toggle-list-item` | `<span>` | Initiates a toggle list item. **Required** |
| `.pf-v6-c-wizard__toggle-num` | `<span>` | Initiates the step number. **Required** |
| `.pf-v6-c-wizard__toggle-separator` | `<i>` | Initiates the separator between steps. |
| `.pf-v6-c-wizard__toggle-icon` | `<span>` | Initiates the toggle icon wrapper. **Required** |
| `.pf-v6-c-wizard__outer-wrap` | `<div>` | Initiates the outer wrapper. **Required** |
| `.pf-v6-c-wizard__inner-wrap` | `<div>` | Initiates the inner wrapper. **Required** |
| `.pf-v6-c-wizard__nav` | `<nav>` | Initiates the steps nav. **Required** |
| `.pf-v6-c-wizard__nav-list` | `<ol>` | Initiates a list of steps. **Required** |
| `.pf-v6-c-wizard__nav-item` | `<li>` | Initiates a step list item. **Required** |
| `.pf-v6-c-wizard__nav-link` | `<a>`, `<button>` | Initiates a step link. **Required** |
| `.pf-v6-c-wizard__nav-link-main` | `<span>` | Initiates main link container. **Required** |
| `.pf-v6-c-wizard__nav-link-text` | `<span>` | Initiates the link text container. **Required when nav item is expandable** |
| `.pf-v6-c-wizard__nav-link-status-icon` | `<span>` | Initiates the status icon container. |
| `.pf-v6-c-wizard__nav-link-toggle` | `<span>` | Initiates the toggle container. **Required when nav item is expandable** |
| `.pf-v6-c-wizard__nav-link-toggle-icon` | `<span>` | Initiates the toggle icon container. **Required when nav item is expandable** |
| `.pf-v6-c-wizard__main` | `<main>`, `<div>` | Initiates the main container. **Required** Note: use the `<main>` element when when there are no other `<main>` elements on the page.|
| `.pf-v6-c-wizard__main-body` | `<div>` | Initiates the main container body section. **Required** |
| `.pf-v6-c-wizard__footer` | `<footer>` | Initiates the footer. **Required** |
| `.pf-v6-c-wizard__footer-cancel` | `<div>` | Initiates the cancel button. **Required** |
| `.pf-m-expanded` | `.pf-v6-c-wizard__toggle`, `.pf-v6-c-wizard__nav` | Modifies the mobile steps toggle and steps menu for the expanded state. |
| `.pf-m-finished` | `.pf-v6-c-wizard` | Modifies the wizard for the finished state. |
| `.pf-m-expandable` | `.pf-v6-c-wizard__nav-item` | Modifies a nav item for the expandable state. |
| `.pf-m-expanded` | `.pf-v6-c-wizard__nav-item` | Modifies a nav item for the expanded state. |
| `.pf-m-current` | `.pf-v6-c-wizard__nav-link` | Modifies a step link for the current state. **Required** |
| `.pf-m-disabled` | `.pf-v6-c-wizard__nav-link` | Modifies a step link for the disabled state. |
| `.pf-m-success` | `.pf-v6-c-wizard__nav-link`, `.pf-v6-c-wizard__toggle-list-item` | Modifies a step link to indicate success status. |
| `.pf-m-warning` | `.pf-v6-c-wizard__nav-link`, `.pf-v6-c-wizard__toggle-list-item` | Modifies a step link to indicate warning status. |
| `.pf-m-danger` | `.pf-v6-c-wizard__nav-link`, `.pf-v6-c-wizard__toggle-list-item` | Modifies a step link to indicate danger status. |
| `.pf-m-no-padding` | `.pf-v6-c-wizard__main-body` | Modifies the main container body to remove the padding. |
