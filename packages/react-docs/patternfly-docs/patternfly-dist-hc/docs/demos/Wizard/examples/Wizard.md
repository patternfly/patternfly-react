---
id: Wizard
section: components
wrapperTag: div
---## Demos

### Basic

```html isFullscreen
<div class="pf-v6-c-page" id="wizard-basic-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-wizard-basic-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="wizard-basic-example-masthead">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-wizard-basic-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-wizard-basic-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-wizard-basic-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="wizard-basic-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="wizard-basic-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-wizard-basic-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>
<div class="pf-v6-c-backdrop">
  <div class="pf-v6-l-bullseye">
    <div
      class="pf-v6-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Basic wizard"
    >
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
          <div
            class="pf-v6-c-wizard__description"
          >Here is where the description goes</div>
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
                <li
                  class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                >
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
                  <button
                    class="pf-v6-c-wizard__nav-link pf-m-disabled"
                    type="button"
                    aria-disabled="true"
                    tabindex="-1"
                  >
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
                        for="-wizard-form-field1"
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
                          id="-wizard-form-field1"
                          name="-wizard-form-field1"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="-wizard-form-field2"
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
                          id="-wizard-form-field2"
                          name="-wizard-form-field2"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="-wizard-form-field3"
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
                          id="-wizard-form-field3"
                          name="-wizard-form-field3"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="-wizard-form-field4"
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
                          id="-wizard-form-field4"
                          name="-wizard-form-field4"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="-wizard-form-field5"
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
                          id="-wizard-form-field5"
                          name="-wizard-form-field5"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="-wizard-form-field6"
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
                          id="-wizard-form-field6"
                          name="-wizard-form-field6"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label
                        class="pf-v6-c-form__label"
                        for="-wizard-form-field7"
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
                          id="-wizard-form-field7"
                          name="-wizard-form-field7"
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
    </div>
  </div>
</div>

```

### Nav expanded (mobile)

```html isFullscreen
<div class="pf-v6-c-page" id="wizard-nav-expanded-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-wizard-nav-expanded-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="wizard-nav-expanded-example-masthead">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-wizard-nav-expanded-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-wizard-nav-expanded-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-wizard-nav-expanded-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="wizard-nav-expanded-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="wizard-nav-expanded-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-wizard-nav-expanded-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>
<div class="pf-v6-c-backdrop">
  <div class="pf-v6-l-bullseye">
    <div
      class="pf-v6-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Wizard with expanded mobile nav"
    >
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
          <div
            class="pf-v6-c-wizard__description"
          >Here is where the description goes</div>
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
                <li
                  class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                >
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
                  <button
                    class="pf-v6-c-wizard__nav-link pf-m-disabled"
                    type="button"
                    aria-disabled="true"
                    tabindex="-1"
                  >
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
                    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field1">
                        <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="-form-field1"
                          name="-form-field1"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field2">
                        <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="-form-field2"
                          name="-form-field2"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field3">
                        <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="-form-field3"
                          name="-form-field3"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field4">
                        <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="-form-field4"
                          name="-form-field4"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field5">
                        <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="-form-field5"
                          name="-form-field5"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field6">
                        <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="-form-field6"
                          name="-form-field6"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="pf-v6-c-form__group">
                    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field7">
                        <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                          class="pf-v6-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v6-c-form__group-control">
                      <span class="pf-v6-c-form-control">
                        <input
                          type="text"
                          id="-form-field7"
                          name="-form-field7"
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
    </div>
  </div>
</div>

```

### With drawer, closed

```html isFullscreen
<div class="pf-v6-c-page" id="wizard-with-drawer-closed-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-closed-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead"
    id="wizard-with-drawer-closed-example-masthead"
  >
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-wizard-with-drawer-closed-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-wizard-with-drawer-closed-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-wizard-with-drawer-closed-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="wizard-with-drawer-closed-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="wizard-with-drawer-closed-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-wizard-with-drawer-closed-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>
<div class="pf-v6-c-backdrop">
  <div class="pf-v6-l-bullseye">
    <div
      class="pf-v6-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Basic wizard"
    >
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
          <div
            class="pf-v6-c-wizard__description"
          >Here is where the description goes</div>
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
                <li
                  class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                >
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
                  <button
                    class="pf-v6-c-wizard__nav-link"
                    type="button"
                    disabled
                  >
                    <span class="pf-v6-c-wizard__nav-link-main">
                      <span class="pf-v6-c-wizard__nav-link-text">Review</span>
                    </span>
                  </button>
                </li>
              </ol>
            </nav>
            <main class="pf-v6-c-wizard__main" tabindex="0">
              <div class="pf-v6-c-drawer pf-m-inline">
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
                              for="-wizard-form-field1"
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
                                id="-wizard-form-field1"
                                name="-wizard-form-field1"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field2"
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
                                id="-wizard-form-field2"
                                name="-wizard-form-field2"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field3"
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
                                id="-wizard-form-field3"
                                name="-wizard-form-field3"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field4"
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
                                id="-wizard-form-field4"
                                name="-wizard-form-field4"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field5"
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
                                id="-wizard-form-field5"
                                name="-wizard-form-field5"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field6"
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
                                id="-wizard-form-field6"
                                name="-wizard-form-field6"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field7"
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
                                id="-wizard-form-field7"
                                name="-wizard-form-field7"
                              />
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="pf-v6-c-drawer__panel pf-m-width-33" hidden>
                    <div class="pf-v6-c-drawer__body">
                      <div class="pf-v6-c-drawer__head">
                        <h2
                          class="pf-v6-c-title pf-m-xl"
                        >Register with Red Hat connector</h2>
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
                        </div>
                      </div>
                    </div>
                    <div class="pf-v6-c-drawer__body">
                      <div class="pf-v6-c-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>

                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>

                        <p>
                          Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                          <a
                            href="#"
                          >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                        </p>
                        <a href="#">
                          <span
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <span>Learn about Red Hat connector</span>
                            <i
                              class="fas fa-external-link-alt"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <footer class="pf-v6-c-wizard__footer">
                  <div class="pf-v6-c-action-list">
                    <div class="pf-v6-c-action-list__group">
                      <div class="pf-v6-c-action-list__item">
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Back</span>
                        </button>
                      </div>
                      <div class="pf-v6-c-action-list__item">
                        <button
                          class="pf-v6-c-button pf-m-primary"
                          type="button"
                        >
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
    </div>
  </div>
</div>

```

### With drawer, expanded

```html isFullscreen
<div class="pf-v6-c-page" id="wizard-with-drawer-expanded-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-expanded-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead"
    id="wizard-with-drawer-expanded-example-masthead"
  >
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-wizard-with-drawer-expanded-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-wizard-with-drawer-expanded-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-wizard-with-drawer-expanded-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="wizard-with-drawer-expanded-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="wizard-with-drawer-expanded-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-wizard-with-drawer-expanded-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>
<div class="pf-v6-c-backdrop">
  <div class="pf-v6-l-bullseye">
    <div
      class="pf-v6-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Basic wizard"
    >
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
          <div
            class="pf-v6-c-wizard__description"
          >Here is where the description goes</div>
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
                <li
                  class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                >
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
                  <button
                    class="pf-v6-c-wizard__nav-link"
                    type="button"
                    disabled
                  >
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
                              for="-wizard-form-field1"
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
                                id="-wizard-form-field1"
                                name="-wizard-form-field1"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field2"
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
                                id="-wizard-form-field2"
                                name="-wizard-form-field2"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field3"
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
                                id="-wizard-form-field3"
                                name="-wizard-form-field3"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field4"
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
                                id="-wizard-form-field4"
                                name="-wizard-form-field4"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field5"
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
                                id="-wizard-form-field5"
                                name="-wizard-form-field5"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field6"
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
                                id="-wizard-form-field6"
                                name="-wizard-form-field6"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="pf-v6-c-form__group">
                          <div class="pf-v6-c-form__group-label"><label
                              class="pf-v6-c-form__label"
                              for="-wizard-form-field7"
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
                                id="-wizard-form-field7"
                                name="-wizard-form-field7"
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
                        <h2
                          class="pf-v6-c-title pf-m-xl"
                        >Register with Red Hat connector</h2>
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
                        </div>
                      </div>
                    </div>
                    <div class="pf-v6-c-drawer__body">
                      <div class="pf-v6-c-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>

                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>

                        <p>
                          Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                          <a
                            href="#"
                          >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                        </p>
                        <a href="#">
                          <span
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <span>Learn about Red Hat connector</span>
                            <i
                              class="fas fa-external-link-alt"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <footer class="pf-v6-c-wizard__footer">
                  <div class="pf-v6-c-action-list">
                    <div class="pf-v6-c-action-list__group">
                      <div class="pf-v6-c-action-list__item">
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Back</span>
                        </button>
                      </div>
                      <div class="pf-v6-c-action-list__item">
                        <button
                          class="pf-v6-c-button pf-m-primary"
                          type="button"
                        >
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
    </div>
  </div>
</div>

```

### With drawer and informational step

```html isFullscreen
<div class="pf-v6-c-page" id="wizard-with-drawer-info-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-info-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead"
    id="wizard-with-drawer-info-example-masthead"
  >
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-wizard-with-drawer-info-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-wizard-with-drawer-info-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-wizard-with-drawer-info-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="wizard-with-drawer-info-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="wizard-with-drawer-info-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-wizard-with-drawer-info-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>
<div class="pf-v6-c-backdrop">
  <div class="pf-v6-l-bullseye">
    <div
      class="pf-v6-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Basic wizard"
    >
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
          <div
            class="pf-v6-c-wizard__description"
          >Here is where the description goes</div>
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
                <li
                  class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                >
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
                  <button
                    class="pf-v6-c-wizard__nav-link"
                    type="button"
                    disabled
                  >
                    <span class="pf-v6-c-wizard__nav-link-main">
                      <span class="pf-v6-c-wizard__nav-link-text">Review</span>
                    </span>
                  </button>
                </li>
              </ol>
            </nav>
            <main class="pf-v6-c-wizard__main" tabindex="0">
              <div class="pf-v6-c-drawer pf-m-inline">
                <div class="pf-v6-c-drawer__main">
                  <div class="pf-v6-c-drawer__content">
                    <div class="pf-v6-c-wizard__main-body">
                      <button
                        class="pf-v6-c-button pf-v6-u-hidden pf-v6-u-float-right pf-v6-u-ml-md pf-m-inline pf-m-link"
                        type="button"
                      >
                        <span class="pf-v6-c-button__text">Open drawer</span>
                      </button>
                      <div class="pf-v6-c-content">
                        <h1>Information step content</h1>
                        <p>
                          Wizard description goes here. If you need more assistance,
                          <button
                            class="pf-v6-c-button pf-m-inline pf-m-link"
                            type="button"
                          >
                            <span
                              class="pf-v6-c-button__text"
                            >see more information</span>
                          </button>
                          in the side drawer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="pf-v6-c-drawer__panel pf-m-width-33" hidden>
                    <div class="pf-v6-c-drawer__body">
                      <div class="pf-v6-c-drawer__head">
                        <h2
                          class="pf-v6-c-title pf-m-xl"
                        >Register with Red Hat connector</h2>
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
                        </div>
                      </div>
                    </div>
                    <div class="pf-v6-c-drawer__body">
                      <div class="pf-v6-c-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>

                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>

                        <p>
                          Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                          <a
                            href="#"
                          >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                        </p>
                        <a href="#">
                          <span
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <span>Learn about Red Hat connector</span>
                            <i
                              class="fas fa-external-link-alt"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <footer class="pf-v6-c-wizard__footer">
                  <div class="pf-v6-c-action-list">
                    <div class="pf-v6-c-action-list__group">
                      <div class="pf-v6-c-action-list__item">
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Back</span>
                        </button>
                      </div>
                      <div class="pf-v6-c-action-list__item">
                        <button
                          class="pf-v6-c-button pf-m-primary"
                          type="button"
                        >
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
    </div>
  </div>
</div>

```

### In page

```html isFullscreen
<div class="pf-v6-c-page" id="wizard-in-page-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-wizard-in-page-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="wizard-in-page-example-masthead">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-wizard-in-page-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-wizard-in-page-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-wizard-in-page-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="wizard-in-page-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="wizard-in-page-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-wizard-in-page-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-wizard">
        <div class="pf-v6-c-wizard">
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
                  <li
                    class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                  >
                    <button
                      class="pf-v6-c-wizard__nav-link pf-m-current"
                      type="button"
                      aria-expanded="true"
                    >
                      <span class="pf-v6-c-wizard__nav-link-main">
                        <span
                          class="pf-v6-c-wizard__nav-link-text"
                        >Configuration</span>
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
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep A</span>
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
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep B</span>
                          </span>
                        </button>
                      </li>
                      <li class="pf-v6-c-wizard__nav-item">
                        <button class="pf-v6-c-wizard__nav-link" type="button">
                          <span class="pf-v6-c-wizard__nav-link-main">
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep C</span>
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
                    <button
                      class="pf-v6-c-wizard__nav-link pf-m-disabled"
                      type="button"
                      aria-disabled="true"
                      tabindex="-1"
                    >
                      <span class="pf-v6-c-wizard__nav-link-main">
                        <span class="pf-v6-c-wizard__nav-link-text">Review</span>
                      </span>
                    </button>
                  </li>
                </ol>
              </nav>
              <div class="pf-v6-c-wizard__main" tabindex="0">
                <div class="pf-v6-c-wizard__main-body">
                  <form class="pf-v6-c-form pf-m-limit-width" novalidate>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label
                          class="pf-v6-c-form__label"
                          for="wizard-in-page-example-wizard-form-field1"
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
                            id="wizard-in-page-example-wizard-form-field1"
                            name="wizard-in-page-example-wizard-form-field1"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label
                          class="pf-v6-c-form__label"
                          for="wizard-in-page-example-wizard-form-field2"
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
                            id="wizard-in-page-example-wizard-form-field2"
                            name="wizard-in-page-example-wizard-form-field2"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label
                          class="pf-v6-c-form__label"
                          for="wizard-in-page-example-wizard-form-field3"
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
                            id="wizard-in-page-example-wizard-form-field3"
                            name="wizard-in-page-example-wizard-form-field3"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label
                          class="pf-v6-c-form__label"
                          for="wizard-in-page-example-wizard-form-field4"
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
                            id="wizard-in-page-example-wizard-form-field4"
                            name="wizard-in-page-example-wizard-form-field4"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label
                          class="pf-v6-c-form__label"
                          for="wizard-in-page-example-wizard-form-field5"
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
                            id="wizard-in-page-example-wizard-form-field5"
                            name="wizard-in-page-example-wizard-form-field5"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label
                          class="pf-v6-c-form__label"
                          for="wizard-in-page-example-wizard-form-field6"
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
                            id="wizard-in-page-example-wizard-form-field6"
                            name="wizard-in-page-example-wizard-form-field6"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label
                          class="pf-v6-c-form__label"
                          for="wizard-in-page-example-wizard-form-field7"
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
                            id="wizard-in-page-example-wizard-form-field7"
                            name="wizard-in-page-example-wizard-form-field7"
                          />
                        </span>
                      </div>
                    </div>
                  </form>
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
        </div>
      </section>
    </main>
  </div>
</div>

```

### In page nav expanded (mobile)

```html isFullscreen
<div class="pf-v6-c-page" id="in-page-nav-expanded-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-in-page-nav-expanded-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="in-page-nav-expanded-example-masthead">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-in-page-nav-expanded-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-in-page-nav-expanded-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-in-page-nav-expanded-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="in-page-nav-expanded-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="in-page-nav-expanded-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-in-page-nav-expanded-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-wizard">
        <div class="pf-v6-c-wizard">
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
                  <li
                    class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                  >
                    <button
                      class="pf-v6-c-wizard__nav-link pf-m-current"
                      type="button"
                      aria-expanded="true"
                    >
                      <span class="pf-v6-c-wizard__nav-link-main">
                        <span
                          class="pf-v6-c-wizard__nav-link-text"
                        >Configuration</span>
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
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep A</span>
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
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep B</span>
                          </span>
                        </button>
                      </li>
                      <li class="pf-v6-c-wizard__nav-item">
                        <button class="pf-v6-c-wizard__nav-link" type="button">
                          <span class="pf-v6-c-wizard__nav-link-main">
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep C</span>
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
                    <button
                      class="pf-v6-c-wizard__nav-link pf-m-disabled"
                      type="button"
                      aria-disabled="true"
                      tabindex="-1"
                    >
                      <span class="pf-v6-c-wizard__nav-link-main">
                        <span class="pf-v6-c-wizard__nav-link-text">Review</span>
                      </span>
                    </button>
                  </li>
                </ol>
              </nav>
              <div class="pf-v6-c-wizard__main" tabindex="0">
                <div class="pf-v6-c-wizard__main-body">
                  <form class="pf-v6-c-form pf-m-limit-width" novalidate>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field1">
                          <span class="pf-v6-c-form__label-text">Field 1</span>&nbsp;<span
                            class="pf-v6-c-form__label-required"
                            aria-hidden="true"
                          >&#42;</span></label>
                      </div>
                      <div class="pf-v6-c-form__group-control">
                        <span class="pf-v6-c-form-control">
                          <input
                            type="text"
                            id="-form-field1"
                            name="-form-field1"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field2">
                          <span class="pf-v6-c-form__label-text">Field 2</span>&nbsp;<span
                            class="pf-v6-c-form__label-required"
                            aria-hidden="true"
                          >&#42;</span></label>
                      </div>
                      <div class="pf-v6-c-form__group-control">
                        <span class="pf-v6-c-form-control">
                          <input
                            type="text"
                            id="-form-field2"
                            name="-form-field2"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field3">
                          <span class="pf-v6-c-form__label-text">Field 3</span>&nbsp;<span
                            class="pf-v6-c-form__label-required"
                            aria-hidden="true"
                          >&#42;</span></label>
                      </div>
                      <div class="pf-v6-c-form__group-control">
                        <span class="pf-v6-c-form-control">
                          <input
                            type="text"
                            id="-form-field3"
                            name="-form-field3"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field4">
                          <span class="pf-v6-c-form__label-text">Field 4</span>&nbsp;<span
                            class="pf-v6-c-form__label-required"
                            aria-hidden="true"
                          >&#42;</span></label>
                      </div>
                      <div class="pf-v6-c-form__group-control">
                        <span class="pf-v6-c-form-control">
                          <input
                            type="text"
                            id="-form-field4"
                            name="-form-field4"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field5">
                          <span class="pf-v6-c-form__label-text">Field 5</span>&nbsp;<span
                            class="pf-v6-c-form__label-required"
                            aria-hidden="true"
                          >&#42;</span></label>
                      </div>
                      <div class="pf-v6-c-form__group-control">
                        <span class="pf-v6-c-form-control">
                          <input
                            type="text"
                            id="-form-field5"
                            name="-form-field5"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field6">
                          <span class="pf-v6-c-form__label-text">Field 6</span>&nbsp;<span
                            class="pf-v6-c-form__label-required"
                            aria-hidden="true"
                          >&#42;</span></label>
                      </div>
                      <div class="pf-v6-c-form__group-control">
                        <span class="pf-v6-c-form-control">
                          <input
                            type="text"
                            id="-form-field6"
                            name="-form-field6"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="pf-v6-c-form__group">
                      <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="-form-field7">
                          <span class="pf-v6-c-form__label-text">Field 7</span>&nbsp;<span
                            class="pf-v6-c-form__label-required"
                            aria-hidden="true"
                          >&#42;</span></label>
                      </div>
                      <div class="pf-v6-c-form__group-control">
                        <span class="pf-v6-c-form-control">
                          <input
                            type="text"
                            id="-form-field7"
                            name="-form-field7"
                          />
                        </span>
                      </div>
                    </div>
                  </form>
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
        </div>
      </section>
    </main>
  </div>
</div>

```

### With drawer, in page

```html isFullscreen
<div class="pf-v6-c-page" id="wizard-with-drawer-in-page-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-in-page-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead"
    id="wizard-with-drawer-in-page-example-masthead"
  >
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-wizard-with-drawer-in-page-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-wizard-with-drawer-in-page-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-wizard-with-drawer-in-page-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="wizard-with-drawer-in-page-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="wizard-with-drawer-in-page-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-wizard-with-drawer-in-page-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-wizard">
        <div class="pf-v6-c-wizard">
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
                  <li
                    class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                  >
                    <button
                      class="pf-v6-c-wizard__nav-link pf-m-current"
                      type="button"
                      aria-expanded="true"
                    >
                      <span class="pf-v6-c-wizard__nav-link-main">
                        <span
                          class="pf-v6-c-wizard__nav-link-text"
                        >Configuration</span>
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
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep A</span>
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
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep B</span>
                          </span>
                        </button>
                      </li>
                      <li class="pf-v6-c-wizard__nav-item">
                        <button class="pf-v6-c-wizard__nav-link" type="button">
                          <span class="pf-v6-c-wizard__nav-link-main">
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep C</span>
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
                    <button
                      class="pf-v6-c-wizard__nav-link"
                      type="button"
                      disabled
                    >
                      <span class="pf-v6-c-wizard__nav-link-main">
                        <span class="pf-v6-c-wizard__nav-link-text">Review</span>
                      </span>
                    </button>
                  </li>
                </ol>
              </nav>
              <main class="pf-v6-c-wizard__main" tabindex="0">
                <div class="pf-v6-c-drawer pf-m-inline">
                  <div class="pf-v6-c-drawer__main">
                    <div class="pf-v6-c-drawer__content">
                      <div class="pf-v6-c-wizard__main-body">
                        <form class="pf-v6-c-form pf-m-limit-width" novalidate>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-example-wizard-form-field1"
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
                                  id="wizard-with-drawer-in-page-example-wizard-form-field1"
                                  name="wizard-with-drawer-in-page-example-wizard-form-field1"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-example-wizard-form-field2"
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
                                  id="wizard-with-drawer-in-page-example-wizard-form-field2"
                                  name="wizard-with-drawer-in-page-example-wizard-form-field2"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-example-wizard-form-field3"
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
                                  id="wizard-with-drawer-in-page-example-wizard-form-field3"
                                  name="wizard-with-drawer-in-page-example-wizard-form-field3"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-example-wizard-form-field4"
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
                                  id="wizard-with-drawer-in-page-example-wizard-form-field4"
                                  name="wizard-with-drawer-in-page-example-wizard-form-field4"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-example-wizard-form-field5"
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
                                  id="wizard-with-drawer-in-page-example-wizard-form-field5"
                                  name="wizard-with-drawer-in-page-example-wizard-form-field5"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-example-wizard-form-field6"
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
                                  id="wizard-with-drawer-in-page-example-wizard-form-field6"
                                  name="wizard-with-drawer-in-page-example-wizard-form-field6"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-example-wizard-form-field7"
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
                                  id="wizard-with-drawer-in-page-example-wizard-form-field7"
                                  name="wizard-with-drawer-in-page-example-wizard-form-field7"
                                />
                              </span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="pf-v6-c-drawer__panel pf-m-width-33" hidden>
                      <div class="pf-v6-c-drawer__body">
                        <div class="pf-v6-c-drawer__head">
                          <h2
                            class="pf-v6-c-title pf-m-xl"
                          >Register with Red Hat connector</h2>
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
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-drawer__body">
                        <div class="pf-v6-c-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>
                          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>
                          <p>
                            Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                            <a
                              href="#"
                            >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                          </p>
                          <a href="#">
                            <span
                              class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                            >
                              <span>Learn about Red Hat connector</span>
                              <i
                                class="fas fa-external-link-alt"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                        </div>
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
      </section>
    </main>
  </div>
</div>

```

### With drawer, in page, expanded

```html isFullscreen
<div class="pf-v6-c-page" id="wizard-with-drawer-in-page-expanded-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-in-page-expanded-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead"
    id="wizard-with-drawer-in-page-expanded-example-masthead"
  >
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PF-HorizontalLogo-Color</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-wizard-with-drawer-in-page-expanded-example-masthead"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-wizard-with-drawer-in-page-expanded-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-wizard-with-drawer-in-page-expanded-example-masthead)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="wizard-with-drawer-in-page-expanded-example-masthead-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-body">
      <nav
        class="pf-v6-c-nav"
        id="wizard-with-drawer-in-page-expanded-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">System panel</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Policy</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Authentication</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Network services</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Server</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-wizard-with-drawer-in-page-expanded-example"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <h1 class="pf-v6-c-content--h1 pf-m-page-title">Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-wizard">
        <div class="pf-v6-c-wizard">
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
                  <li
                    class="pf-v6-c-wizard__nav-item pf-m-expandable pf-m-expanded"
                  >
                    <button
                      class="pf-v6-c-wizard__nav-link pf-m-current"
                      type="button"
                      aria-expanded="true"
                    >
                      <span class="pf-v6-c-wizard__nav-link-main">
                        <span
                          class="pf-v6-c-wizard__nav-link-text"
                        >Configuration</span>
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
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep A</span>
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
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep B</span>
                          </span>
                        </button>
                      </li>
                      <li class="pf-v6-c-wizard__nav-item">
                        <button class="pf-v6-c-wizard__nav-link" type="button">
                          <span class="pf-v6-c-wizard__nav-link-main">
                            <span
                              class="pf-v6-c-wizard__nav-link-text"
                            >Substep C</span>
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
                    <button
                      class="pf-v6-c-wizard__nav-link"
                      type="button"
                      disabled
                    >
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
                        <form class="pf-v6-c-form pf-m-limit-width" novalidate>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-expanded-example-wizard-form-field1"
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
                                  id="wizard-with-drawer-in-page-expanded-example-wizard-form-field1"
                                  name="wizard-with-drawer-in-page-expanded-example-wizard-form-field1"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-expanded-example-wizard-form-field2"
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
                                  id="wizard-with-drawer-in-page-expanded-example-wizard-form-field2"
                                  name="wizard-with-drawer-in-page-expanded-example-wizard-form-field2"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-expanded-example-wizard-form-field3"
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
                                  id="wizard-with-drawer-in-page-expanded-example-wizard-form-field3"
                                  name="wizard-with-drawer-in-page-expanded-example-wizard-form-field3"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-expanded-example-wizard-form-field4"
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
                                  id="wizard-with-drawer-in-page-expanded-example-wizard-form-field4"
                                  name="wizard-with-drawer-in-page-expanded-example-wizard-form-field4"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-expanded-example-wizard-form-field5"
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
                                  id="wizard-with-drawer-in-page-expanded-example-wizard-form-field5"
                                  name="wizard-with-drawer-in-page-expanded-example-wizard-form-field5"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-expanded-example-wizard-form-field6"
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
                                  id="wizard-with-drawer-in-page-expanded-example-wizard-form-field6"
                                  name="wizard-with-drawer-in-page-expanded-example-wizard-form-field6"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="pf-v6-c-form__group">
                            <div class="pf-v6-c-form__group-label"><label
                                class="pf-v6-c-form__label"
                                for="wizard-with-drawer-in-page-expanded-example-wizard-form-field7"
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
                                  id="wizard-with-drawer-in-page-expanded-example-wizard-form-field7"
                                  name="wizard-with-drawer-in-page-expanded-example-wizard-form-field7"
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
                          <h2
                            class="pf-v6-c-title pf-m-xl"
                          >Register with Red Hat connector</h2>
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
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-drawer__body">
                        <div class="pf-v6-c-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>
                          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>
                          <p>
                            Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                            <a
                              href="#"
                            >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                          </p>
                          <a href="#">
                            <span
                              class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                            >
                              <span>Learn about Red Hat connector</span>
                              <i
                                class="fas fa-external-link-alt"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                        </div>
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
      </section>
    </main>
  </div>
</div>

```
