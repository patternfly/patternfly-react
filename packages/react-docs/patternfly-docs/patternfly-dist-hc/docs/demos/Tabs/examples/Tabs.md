---
id: 'Tabs'
section: components
---## Examples

### Open tabs

```html isFullscreen
<div class="pf-v6-c-page" id="tabs-tables-and-tabs-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-tabs-tables-and-tabs-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="tabs-tables-and-tabs-example-masthead">
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
                id="linearGradient-tabs-tables-and-tabs-example-masthead"
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
                  fill="url(#linearGradient-tabs-tables-and-tabs-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-tabs-tables-and-tabs-example-masthead)"
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
        id="tabs-tables-and-tabs-example-masthead-toolbar"
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
        id="tabs-tables-and-tabs-example-primary-nav"
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
      id="main-content-tabs-tables-and-tabs-example"
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

      <section class="pf-v6-c-page__main-tabs pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div
            class="pf-v6-c-tabs pf-m-page-insets"
            role="region"
            id="tabs-tables-and-tabs-example-tabs"
          >
            <ul class="pf-v6-c-tabs__list" role="tablist">
              <li class="pf-v6-c-tabs__item pf-m-current" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-details-panel"
                  id="tabs-tables-and-tabs-example-tabs-details-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Details</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-yaml-panel"
                  id="tabs-tables-and-tabs-example-tabs-yaml-link"
                >
                  <span class="pf-v6-c-tabs__item-text">YAML</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-environment-panel"
                  id="tabs-tables-and-tabs-example-tabs-environment-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Environment</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-logs-panel"
                  id="tabs-tables-and-tabs-example-tabs-logs-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Logs</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-events-panel"
                  id="tabs-tables-and-tabs-example-tabs-events-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Events</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-terminal-panel"
                  id="tabs-tables-and-tabs-example-tabs-terminal-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Terminal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-details-link"
            id="tabs-tables-and-tabs-example-tabs-details-panel"
            role="tabpanel"
            tabindex="0"
          >
            <div class="pf-v6-c-tab-content__body">
              <div class="pf-v6-l-flex pf-m-column">
                <div class="pf-v6-l-flex__item pf-m-spacer-lg">
                  <h2
                    class="pf-v6-c-title pf-m-lg pf-v6-u-mt-sm"
                    id="-details-title"
                  >Pod details</h2>
                </div>
                <div class="pf-v6-l-flex__item">
                  <dl
                    class="pf-v6-c-description-list pf-m-2-col-on-lg"
                    aria-label="API 1"
                    aria-labelledby="-details-title"
                  >
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Name</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div
                          class="pf-v6-c-description-list__text"
                        >3scale-control-fccb6ddb9-phyqv9</div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Status</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div class="pf-v6-c-description-list__text">
                          <div class="pf-v6-l-flex pf-m-space-items-sm">
                            <div class="pf-v6-l-flex__item">
                              <i
                                class="fas fa-fw fa-check-circle"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div class="pf-v6-l-flex__item">Running</div>
                          </div>
                        </div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Namespace</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div class="pf-v6-c-description-list__text">
                          <div class="pf-v6-l-flex pf-m-space-items-sm">
                            <div class="pf-v6-l-flex__item">
                              <span class="pf-v6-c-label pf-m-teal">
                                <span class="pf-v6-c-label__content">
                                  <span class="pf-v6-c-label__text">NS</span>
                                </span>
                              </span>
                            </div>
                            <div class="pf-v6-l-flex__item">
                              <a href="#">knative-serving-ingress</a>
                            </div>
                          </div>
                        </div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Restart policy</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div
                          class="pf-v6-c-description-list__text"
                        >Always restart</div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Labels</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div class="pf-v6-c-description-list__text">
                          <div class="pf-v6-c-label-group">
                            <div class="pf-v6-c-label-group__main">
                              <ul
                                class="pf-v6-c-label-group__list"
                                role="list"
                                aria-label="Group of labels"
                              >
                                <li class="pf-v6-c-label-group__list-item">
                                  <span class="pf-v6-c-label pf-m-outline">
                                    <span class="pf-v6-c-label__content">
                                      <span
                                        class="pf-v6-c-label__text"
                                      >app=3scale-gateway</span>
                                    </span>
                                  </span>
                                </li>
                                <li class="pf-v6-c-label-group__list-item">
                                  <span class="pf-v6-c-label pf-m-outline">
                                    <span class="pf-v6-c-label__content">
                                      <span
                                        class="pf-v6-c-label__text"
                                      >pod-template-has=6747686899</span>
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt
                        class="pf-v6-c-description-list__term"
                      >Active deadline seconds</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div
                          class="pf-v6-c-description-list__text"
                        >Not configured</div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Tolerations</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div class="pf-v6-c-description-list__text">stuff</div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Pod IP</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div class="pf-v6-c-description-list__text">10.345.2.197</div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Annotations</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div class="pf-v6-c-description-list__text">stuff</div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Node</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div class="pf-v6-c-description-list__text">
                          <div class="pf-v6-l-flex pf-m-space-items-sm">
                            <div class="pf-v6-l-flex__item">
                              <span class="pf-v6-c-label pf-m-purple">
                                <span class="pf-v6-c-label__content">
                                  <span class="pf-v6-c-label__text">N</span>
                                </span>
                              </span>
                            </div>
                            <div
                              class="pf-v6-l-flex__item"
                            >ip-10-0-233-118.us-east-2.computer.external</div>
                          </div>
                        </div>
                      </dd>
                    </div>
                    <div class="pf-v6-c-description-list__group">
                      <dt class="pf-v6-c-description-list__term">Created at</dt>
                      <dd class="pf-v6-c-description-list__description">
                        <div class="pf-v6-c-description-list__text">
                          <time>Oct 15, 1:51 pm</time>
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-yaml-link"
            id="tabs-tables-and-tabs-example-tabs-yaml-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">YAML panel</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-environment-link"
            id="tabs-tables-and-tabs-example-tabs-environment-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">Environment panel</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-logs-link"
            id="tabs-tables-and-tabs-example-tabs-logs-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">Logs panel</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-events-link"
            id="tabs-tables-and-tabs-example-tabs-events-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">Events panel</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-terminal-link"
            id="tabs-tables-and-tabs-example-tabs-terminal-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">Terminal panel</div>
          </section>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Open tabs with secondary tabs

```html isFullscreen
<div class="pf-v6-c-page" id="tabs-tables-and-tabs-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-tabs-tables-and-tabs-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="tabs-tables-and-tabs-example-masthead">
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
                id="linearGradient-tabs-tables-and-tabs-example-masthead"
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
                  fill="url(#linearGradient-tabs-tables-and-tabs-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-tabs-tables-and-tabs-example-masthead)"
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
        id="tabs-tables-and-tabs-example-masthead-toolbar"
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
        id="tabs-tables-and-tabs-example-primary-nav"
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
      id="main-content-tabs-tables-and-tabs-example"
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
      <section class="pf-v6-c-page__main-tabs pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div
            class="pf-v6-c-tabs pf-m-page-insets"
            role="region"
            id="tabs-tables-and-tabs-example-tabs"
          >
            <ul class="pf-v6-c-tabs__list" role="tablist">
              <li class="pf-v6-c-tabs__item pf-m-current" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-details-panel"
                  id="tabs-tables-and-tabs-example-tabs-details-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Details</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-yaml-panel"
                  id="tabs-tables-and-tabs-example-tabs-yaml-link"
                >
                  <span class="pf-v6-c-tabs__item-text">YAML</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-environment-panel"
                  id="tabs-tables-and-tabs-example-tabs-environment-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Environment</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-logs-panel"
                  id="tabs-tables-and-tabs-example-tabs-logs-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Logs</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-events-panel"
                  id="tabs-tables-and-tabs-example-tabs-events-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Events</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-terminal-panel"
                  id="tabs-tables-and-tabs-example-tabs-terminal-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Terminal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div
            class="pf-v6-c-tabs pf-m-secondary pf-m-page-insets"
            role="region"
            id="tabs-tables-and-tabs-example-tabs-secondary"
          >
            <ul class="pf-v6-c-tabs__list" role="tablist">
              <li class="pf-v6-c-tabs__item pf-m-current" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-secondary-pod-info-panel"
                  id="tabs-tables-and-tabs-example-tabs-secondary-pod-info-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Pod information</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="tabs-tables-and-tabs-example-tabs-secondary-editable-aspects-panel"
                  id="tabs-tables-and-tabs-example-tabs-secondary-editable-aspects-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Editable Aspects</span>
                </button>
              </li>
            </ul>
          </div>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-details-link"
            id="tabs-tables-and-tabs-example-tabs-details-panel"
            role="tabpanel"
            tabindex="0"
          >
            <div class="pf-v6-c-tab-content__body pf-m-padding">
              <section
                class="pf-v6-c-tab-content"
                aria-labelledby="tabs-tables-and-tabs-example-tabs-secondary-pod-info-link"
                id="tabs-tables-and-tabs-example-tabs-secondary-pod-info-panel"
                role="tabpanel"
                tabindex="0"
              >
                <div class="pf-v6-c-tab-content__body">
                  <div class="pf-v6-l-flex pf-m-column">
                    <div class="pf-v6-l-flex__item">
                      <dl
                        class="pf-v6-c-description-list pf-m-2-col-on-lg"
                        aria-label="API 2"
                      >
                        <div class="pf-v6-c-description-list__group">
                          <dt class="pf-v6-c-description-list__term">Name</dt>
                          <dd class="pf-v6-c-description-list__description">
                            <div
                              class="pf-v6-c-description-list__text"
                            >3scale-control-fccb6ddb9-phyqv9</div>
                          </dd>
                        </div>
                        <div class="pf-v6-c-description-list__group">
                          <dt class="pf-v6-c-description-list__term">Status</dt>
                          <dd class="pf-v6-c-description-list__description">
                            <div class="pf-v6-c-description-list__text">
                              <div class="pf-v6-l-flex pf-m-space-items-sm">
                                <div class="pf-v6-l-flex__item">
                                  <i
                                    class="fas fa-fw fa-check-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <div class="pf-v6-l-flex__item">Running</div>
                              </div>
                            </div>
                          </dd>
                        </div>
                        <div class="pf-v6-c-description-list__group">
                          <dt class="pf-v6-c-description-list__term">Namespace</dt>
                          <dd class="pf-v6-c-description-list__description">
                            <div class="pf-v6-c-description-list__text">
                              <div class="pf-v6-l-flex pf-m-space-items-sm">
                                <div class="pf-v6-l-flex__item">
                                  <span class="pf-v6-c-label pf-m-teal">
                                    <span class="pf-v6-c-label__content">
                                      <span class="pf-v6-c-label__text">NS</span>
                                    </span>
                                  </span>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <a href="#">knative-serving-ingress</a>
                                </div>
                              </div>
                            </div>
                          </dd>
                        </div>
                        <div class="pf-v6-c-description-list__group">
                          <dt
                            class="pf-v6-c-description-list__term"
                          >Restart policy</dt>
                          <dd class="pf-v6-c-description-list__description">
                            <div
                              class="pf-v6-c-description-list__text"
                            >Always restart</div>
                          </dd>
                        </div>
                        <div class="pf-v6-c-description-list__group">
                          <dt class="pf-v6-c-description-list__term">Pod IP</dt>
                          <dd class="pf-v6-c-description-list__description">
                            <div
                              class="pf-v6-c-description-list__text"
                            >10.345.2.197</div>
                          </dd>
                        </div>
                        <div class="pf-v6-c-description-list__group">
                          <dt
                            class="pf-v6-c-description-list__term"
                          >Active deadline seconds</dt>
                          <dd class="pf-v6-c-description-list__description">
                            <div
                              class="pf-v6-c-description-list__text"
                            >Not configured</div>
                          </dd>
                        </div>
                        <div class="pf-v6-c-description-list__group">
                          <dt class="pf-v6-c-description-list__term">Created at</dt>
                          <dd class="pf-v6-c-description-list__description">
                            <div class="pf-v6-c-description-list__text">
                              <time>Oct 15, 1:51 pm</time>
                            </div>
                          </dd>
                        </div>
                        <div class="pf-v6-c-description-list__group">
                          <dt class="pf-v6-c-description-list__term">Node</dt>
                          <dd class="pf-v6-c-description-list__description">
                            <div class="pf-v6-c-description-list__text">
                              <div class="pf-v6-l-flex pf-m-space-items-sm">
                                <div class="pf-v6-l-flex__item">
                                  <span class="pf-v6-c-label pf-m-purple">
                                    <span class="pf-v6-c-label__content">
                                      <span class="pf-v6-c-label__text">N</span>
                                    </span>
                                  </span>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >ip-10-0-233-118.us-east-2.computer.external</div>
                              </div>
                            </div>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
              <section
                class="pf-v6-c-tab-content"
                aria-labelledby="tabs-tables-and-tabs-example-tabs-secondary-editable-aspects-link"
                id="tabs-tables-and-tabs-example-tabs-secondary-editable-aspects-panel"
                role="tabpanel"
                tabindex="0"
                hidden
              >
                <div class="pf-v6-c-tab-content__body">Editable aspects panel</div>
              </section>
            </div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-yaml-link"
            id="tabs-tables-and-tabs-example-tabs-yaml-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body pf-m-padding">YAML panel</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-environment-link"
            id="tabs-tables-and-tabs-example-tabs-environment-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div
              class="pf-v6-c-tab-content__body pf-m-padding"
            >Environment panel</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-logs-link"
            id="tabs-tables-and-tabs-example-tabs-logs-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body pf-m-padding">Logs panel</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-events-link"
            id="tabs-tables-and-tabs-example-tabs-events-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body pf-m-padding">Events panel</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="tabs-tables-and-tabs-example-tabs-terminal-link"
            id="tabs-tables-and-tabs-example-tabs-terminal-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body pf-m-padding">Terminal panel</div>
          </section>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Nested tabs

```html isFullscreen
<div class="pf-v6-c-page" id="nested-tabs-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-nested-tabs-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="nested-tabs-example-masthead">
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
                id="linearGradient-nested-tabs-example-masthead"
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
                  fill="url(#linearGradient-nested-tabs-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-nested-tabs-example-masthead)"
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
        id="nested-tabs-example-masthead-toolbar"
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
        id="nested-tabs-example-primary-nav"
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
      id="main-content-nested-tabs-example"
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
      <section class="pf-v6-c-page__main-tabs pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div
            class="pf-v6-c-tabs pf-m-page-insets"
            role="region"
            id="nested-tabs-example-tabs-tabs"
          >
            <ul class="pf-v6-c-tabs__list" role="tablist">
              <li class="pf-v6-c-tabs__item pf-m-current" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="nested-tabs-example-tabs-tabs-cluster-1-panel"
                  id="nested-tabs-example-tabs-tabs-cluster-1-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Cluster 1</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="nested-tabs-example-tabs-tabs-cluster-2-panel"
                  id="nested-tabs-example-tabs-tabs-cluster-2-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Cluster 2</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="nested-tabs-example-tabs-tabs-cluster-1-link"
            id="nested-tabs-example-tabs-tabs-cluster-1-panel"
            role="tabpanel"
            tabindex="0"
          >
            <div class="pf-v6-c-tab-content__body">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div
                  class="pf-v6-l-grid__item pf-m-6-col-on-md pf-m-8-col-on-xl"
                >
                  <div class="pf-v6-c-card pf-m-full-height">
                    <div class="pf-v6-c-card__header">
                      <h2 class="pf-v6-c-title pf-m-lg">Status</h2>
                    </div>
                    <div class="pf-v6-c-card__body">
                      <div class="pf-v6-l-flex pf-m-column">
                        <div class="pf-v6-l-flex__item">
                          <div
                            class="pf-v6-c-tabs"
                            role="region"
                            id="nested-tabs-example-tabs-tabs-subtabs"
                          >
                            <ul class="pf-v6-c-tabs__list" role="tablist">
                              <li
                                class="pf-v6-c-tabs__item pf-m-current"
                                role="presentation"
                              >
                                <button
                                  type="button"
                                  class="pf-v6-c-tabs__link"
                                  role="tab"
                                  aria-controls="nested-tabs-example-tabs-tabs-subtabs-cluster-panel"
                                  id="nested-tabs-example-tabs-tabs-subtabs-cluster-link"
                                >
                                  <span class="pf-v6-c-tabs__item-text">Cluster</span>
                                </button>
                              </li>
                              <li
                                class="pf-v6-c-tabs__item"
                                role="presentation"
                              >
                                <button
                                  type="button"
                                  class="pf-v6-c-tabs__link"
                                  role="tab"
                                  aria-controls="nested-tabs-example-tabs-tabs-subtabs-control-plane-panel"
                                  id="nested-tabs-example-tabs-tabs-subtabs-control-plane-link"
                                >
                                  <span
                                    class="pf-v6-c-tabs__item-text"
                                  >Control plane</span>
                                </button>
                              </li>
                              <li
                                class="pf-v6-c-tabs__item"
                                role="presentation"
                              >
                                <button
                                  type="button"
                                  class="pf-v6-c-tabs__link"
                                  role="tab"
                                  aria-controls="nested-tabs-example-tabs-tabs-subtabs-operators-panel"
                                  id="nested-tabs-example-tabs-tabs-subtabs-operators-link"
                                >
                                  <span
                                    class="pf-v6-c-tabs__item-text"
                                  >Operators</span>
                                </button>
                              </li>
                              <li
                                class="pf-v6-c-tabs__item"
                                role="presentation"
                              >
                                <button
                                  type="button"
                                  class="pf-v6-c-tabs__link"
                                  role="tab"
                                  aria-controls="nested-tabs-example-tabs-tabs-subtabs-virtualization-panel"
                                  id="nested-tabs-example-tabs-tabs-subtabs-virtualization-link"
                                >
                                  <span
                                    class="pf-v6-c-tabs__item-text"
                                  >Virtualization</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pf-v6-l-flex__item">
                          <section
                            class="pf-v6-c-tab-content"
                            aria-labelledby="nested-tabs-example-tabs-tabs-subtabs-cluster-link"
                            id="nested-tabs-example-tabs-tabs-subtabs-cluster-panel"
                            role="tabpanel"
                            tabindex="0"
                          >
                            <div class="pf-v6-c-tab-content__body">
                              <div class="pf-v6-c-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in odio porttitor, feugiat risus in, feugiat arcu. Nullam euismod enim eget fringilla condimentum. Maecenas tincidunt et metus id aliquet. Integer et fermentum purus. Nulla tempor velit arcu, vitae semper purus iaculis at. Sed malesuada auctor luctus. Pellentesque et leo urna. Aliquam vitae felis congue lacus mattis fringilla. Nullam et ultricies erat, sed dignissim elit. Cras mattis pulvinar aliquam. In ac est nulla. Pellentesque fermentum nibh ac sapien porta, ut congue orci aliquam. Sed nisl est, tempor eu pharetra eget, ullamcorper ut augue. Vestibulum eleifend libero eu nulla cursus lacinia.</p>
                              </div>
                            </div>
                          </section>
                          <section
                            class="pf-v6-c-tab-content"
                            aria-labelledby="nested-tabs-example-tabs-tabs-subtabs-control-plane-link"
                            id="nested-tabs-example-tabs-tabs-subtabs-control-plane-panel"
                            role="tabpanel"
                            tabindex="0"
                            hidden
                          >
                            <div
                              class="pf-v6-c-tab-content__body"
                            >Control plane content</div>
                          </section>
                          <section
                            class="pf-v6-c-tab-content"
                            aria-labelledby="nested-tabs-example-tabs-tabs-subtabs-operators-link"
                            id="nested-tabs-example-tabs-tabs-subtabs-operators-panel"
                            role="tabpanel"
                            tabindex="0"
                            hidden
                          >
                            <div
                              class="pf-v6-c-tab-content__body"
                            >Operators content</div>
                          </section>
                          <section
                            class="pf-v6-c-tab-content"
                            aria-labelledby="nested-tabs-example-tabs-tabs-subtabs-virtualization-link"
                            id="nested-tabs-example-tabs-tabs-subtabs-virtualization-panel"
                            role="tabpanel"
                            tabindex="0"
                            hidden
                          >
                            <div
                              class="pf-v6-c-tab-content__body"
                            >Virtualization content</div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="pf-v6-l-grid__item pf-m-6-col-on-md pf-m-4-col-on-xl"
                >
                  <div class="pf-v6-l-flex pf-m-column pf-v6-u-h-100">
                    <div class="pf-v6-l-flex__item pf-m-flex-1">
                      <div class="pf-v6-c-card pf-m-full-height">
                        <div class="pf-v6-c-card__header">
                          <h2 class="pf-v6-c-title pf-m-lg">Title of card</h2>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v6-l-flex__item pf-m-flex-1">
                      <div class="pf-v6-c-card pf-m-full-height">
                        <div class="pf-v6-c-card__header">
                          <h2 class="pf-v6-c-title pf-m-lg">Title of card</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="nested-tabs-example-tabs-tabs-cluster-2-link"
            id="nested-tabs-example-tabs-tabs-cluster-2-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">
              <div class="pf-v6-c-content">
                <p>Cluster 2 content</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Tables and tabs

```html isFullscreen
<div class="pf-v6-c-page" id="table-tabs-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-table-tabs-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="table-tabs-example-masthead">
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
                id="linearGradient-table-tabs-example-masthead"
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
                  fill="url(#linearGradient-table-tabs-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-table-tabs-example-masthead)"
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
        id="table-tabs-example-masthead-toolbar"
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
        id="table-tabs-example-primary-nav"
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
      id="main-content-table-tabs-example"
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
      <section class="pf-v6-c-page__main-section">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-c-toolbar" id="table-tabs-example-tabs-toolbar">
            <div class="pf-v6-c-toolbar__content">
              <div class="pf-v6-c-toolbar__content-section pf-m-nowrap">
                <div
                  class="pf-v6-c-toolbar__group pf-m-show-on-xl pf-m-toggle-group"
                >
                  <div class="pf-v6-c-toolbar__toggle">
                    <button
                      class="pf-v6-c-menu-toggle pf-m-plain"
                      type="button"
                      aria-expanded="false"
                      aria-label="Show filters"
                      aria-controls="table-tabs-example-tabs-toolbar-expandable-content"
                    >
                      <span class="pf-v6-c-menu-toggle__icon">
                        <i class="fas fa-filter" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>

                  <div class="pf-v6-c-toolbar__item">
                    <button
                      class="pf-v6-c-menu-toggle"
                      type="button"
                      aria-expanded="false"
                      id="table-tabs-example-tabs-toolbar-select-checkbox-status"
                    >
                      <span class="pf-v6-c-menu-toggle__text">Name</span>
                      <span class="pf-v6-c-menu-toggle__controls">
                        <span class="pf-v6-c-menu-toggle__toggle-icon">
                          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-button pf-m-plain"
                    type="button"
                    aria-label="Sort"
                  >
                    <span class="pf-v6-c-button__icon">
                      <i
                        class="fas fa-sort-amount-down pf-v6-m-mirror-inline-rtl"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>

                <div
                  class="pf-v6-c-overflow-menu"
                  id="table-tabs-example-tabs-toolbar-overflow-menu"
                >
                  <div
                    class="pf-v6-c-overflow-menu__content pf-v6-u-display-none pf-v6-u-display-flex-on-lg"
                  >
                    <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
                      <div class="pf-v6-c-overflow-menu__item">
                        <button
                          class="pf-v6-c-button pf-m-primary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Generate</span>
                        </button>
                      </div>

                      <div class="pf-v6-c-overflow-menu__item">
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Deploy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="pf-v6-c-overflow-menu__control">
                    <button
                      class="pf-v6-c-menu-toggle pf-m-plain"
                      type="button"
                      aria-expanded="false"
                      aria-label="Menu toggle"
                      id="table-tabs-example-tabs-toolbar-overflow-menu-toggle"
                    >
                      <span class="pf-v6-c-menu-toggle__icon">
                        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
                id="table-tabs-example-tabs-toolbar-expandable-content"
                hidden
              ></div>
            </div>
          </div>
          <hr class="pf-v6-c-divider" />
          <div class="pf-v6-c-drawer pf-m-expanded pf-m-inline">
            <div class="pf-v6-c-drawer__main">
              <!-- Content -->
              <div class="pf-v6-c-drawer__content">
                <div class="pf-v6-c-drawer__body">
                  <table
                    class="pf-v6-c-table pf-m-grid-md"
                    role="grid"
                    aria-label="This is a table with checkboxes"
                    id="table-tabs-example-table"
                  >
                    <thead class="pf-v6-c-table__thead">
                      <tr class="pf-v6-c-table__tr" role="row">
                        <th
                          class="pf-v6-c-table__th pf-v6-c-table__check"
                          aria-label="Row select"
                          role="columnheader"
                          scope="col"
                        >
                          <label
                            class="pf-v6-c-check pf-m-standalone"
                            for="table-tabs-example-table-checkrow-check-input"
                          >
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="table-tabs-example-table-checkrow-check-input"
                              name="table-tabs-example-table-checkrow-check-input"
                              aria-label="Select all rows"
                            />
                          </label>
                        </th>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          scope="col"
                        >Repositories</th>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          scope="col"
                        >Branches</th>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          scope="col"
                        >Pull requests</th>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          scope="col"
                        >Workspaces</th>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          scope="col"
                        >Last commit</th>

                        <th
                          class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                          role="columnheader"
                          scope="col"
                        >
                          <span class="pf-v6-screen-reader">Actions</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
                      <tr class="pf-v6-c-table__tr" role="row">
                        <td
                          class="pf-v6-c-table__td pf-v6-c-table__check"
                          aria-label="Check row"
                        >
                          <label
                            class="pf-v6-c-check pf-m-standalone"
                            for="table-tabs-example-table-checkrow-1-check-input"
                          >
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="table-tabs-example-table-checkrow-1-check-input"
                              name="table-tabs-example-table-checkrow-1-check-input"
                              aria-label="Select row"
                            />
                          </label>
                        </td>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          data-label="Repository name"
                        >
                          <div>
                            <div id="table-tabs-example-table-node1">Node 1</div>
                            <a href="#">siemur/test-space</a>
                          </div>
                        </th>

                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Branches"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">10</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code-branch"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Pull requests"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">25</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Workspaces"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">5</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-cube"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Last commit"
                        >2 days ago</td>

                        <td class="pf-v6-c-table__td pf-v6-c-table__action">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Table actions"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                        </td>
                      </tr>

                      <tr class="pf-v6-c-table__tr pf-m-selected" role="row">
                        <td
                          class="pf-v6-c-table__td pf-v6-c-table__check"
                          aria-label="Check row"
                        >
                          <label
                            class="pf-v6-c-check pf-m-standalone"
                            for="table-tabs-example-table-checkrow-2-check-input"
                          >
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="table-tabs-example-table-checkrow-2-check-input"
                              name="table-tabs-example-table-checkrow-2-check-input"
                              aria-label="Select row"
                            />
                          </label>
                        </td>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          data-label="Repository name"
                        >
                          <div>
                            <div id="table-tabs-example-table-node2">Node 2</div>
                            <a href="#">siemur/test-space</a>
                          </div>
                        </th>

                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Branches"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">8</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code-branch"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Pull requests"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">30</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Workspaces"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">2</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-cube"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Last commit"
                        >2 days ago</td>

                        <td class="pf-v6-c-table__td pf-v6-c-table__action">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Table actions"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                        </td>
                      </tr>

                      <tr class="pf-v6-c-table__tr" role="row">
                        <td
                          class="pf-v6-c-table__td pf-v6-c-table__check"
                          aria-label="Check row"
                        >
                          <label
                            class="pf-v6-c-check pf-m-standalone"
                            for="table-tabs-example-table-checkrow-3-check-input"
                          >
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="table-tabs-example-table-checkrow-3-check-input"
                              name="table-tabs-example-table-checkrow-3-check-input"
                              aria-label="Select row"
                            />
                          </label>
                        </td>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          data-label="Repository name"
                        >
                          <div>
                            <div id="table-tabs-example-table-node3">Node 3</div>
                            <a href="#">siemur/test-space</a>
                          </div>
                        </th>

                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Branches"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">12</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code-branch"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Pull requests"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">48</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Workspaces"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">13</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-cube"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Last commit"
                        >30 days ago</td>

                        <td class="pf-v6-c-table__td pf-v6-c-table__action">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Table actions"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                        </td>
                      </tr>

                      <tr class="pf-v6-c-table__tr" role="row">
                        <td
                          class="pf-v6-c-table__td pf-v6-c-table__check"
                          aria-label="Check row"
                        >
                          <label
                            class="pf-v6-c-check pf-m-standalone"
                            for="table-tabs-example-table-checkrow-4-check-input"
                          >
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="table-tabs-example-table-checkrow-4-check-input"
                              name="table-tabs-example-table-checkrow-4-check-input"
                              aria-label="Select row"
                            />
                          </label>
                        </td>

                        <th
                          class="pf-v6-c-table__th"
                          role="columnheader"
                          data-label="Repository name"
                        >
                          <div>
                            <div id="table-tabs-example-table-node4">Node 4</div>
                            <a href="#">siemur/test-space</a>
                          </div>
                        </th>

                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Branches"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">3</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code-branch"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Pull requests"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">8</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Workspaces"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">20</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-cube"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Last commit"
                        >8 days ago</td>

                        <td class="pf-v6-c-table__td pf-v6-c-table__action">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Table actions"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                        </td>
                      </tr>

                      <tr class="pf-v6-c-table__tr" role="row">
                        <td
                          class="pf-v6-c-table__td pf-v6-c-table__check"
                          aria-label="Check row"
                        >
                          <label
                            class="pf-v6-c-check pf-m-standalone"
                            for="table-tabs-example-table-checkrow-5-check-input"
                          >
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="table-tabs-example-table-checkrow-5-check-input"
                              name="table-tabs-example-table-checkrow-5-check-input"
                              aria-label="Select row"
                            />
                          </label>
                        </td>

                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Repository name"
                        >
                          <div>
                            <div id="table-tabs-example-table-node5">Node 5</div>
                            <a href="#">siemur/test-space</a>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Branches"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">34</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code-branch"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Pull requests"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">21</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-code"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Workspaces"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <div class="pf-v6-l-flex__item">26</div>
                            <div class="pf-v6-l-flex__item">
                              <i class="fas fa-cube"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          class="pf-v6-c-table__td"
                          role="cell"
                          data-label="Last commit"
                        >2 days ago</td>

                        <td class="pf-v6-c-table__td pf-v6-c-table__action">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Table actions"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Panel -->
              <div
                class="pf-v6-c-drawer__panel pf-m-width-33 pf-m-width-33-on-xl"
              >
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
                    </div>
                    <div class="pf-v6-l-flex pf-m-column pf-m-space-items-sm">
                      <div class="pf-v6-l-flex__item">
                        <h2
                          class="pf-v6-c-title pf-m-lg"
                          id="-drawer-label"
                        >Node 2</h2>
                      </div>
                      <div class="pf-v6-l-flex__item">
                        <a href="#">siemur/test-space</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pf-v6-c-drawer__body pf-m-no-padding">
                  <div
                    class="pf-v6-c-tabs pf-m-box pf-m-fill"
                    role="region"
                    id="-tabs"
                  >
                    <div class="pf-v6-c-tabs__scroll-button">
                      <button
                        class="pf-v6-c-button pf-m-plain"
                        type="button"
                        aria-label="Scroll left"
                      >
                        <span class="pf-v6-c-button__icon">
                          <i class="fas fa-angle-left" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <ul class="pf-v6-c-tabs__list" role="tablist">
                      <li
                        class="pf-v6-c-tabs__item pf-m-current"
                        role="presentation"
                      >
                        <button
                          type="button"
                          class="pf-v6-c-tabs__link"
                          role="tab"
                          aria-controls="-tabs-tab1-panel"
                          id="-tabs-tab1-link"
                        >
                          <span class="pf-v6-c-tabs__item-text">Overview</span>
                        </button>
                      </li>
                      <li class="pf-v6-c-tabs__item" role="presentation">
                        <button
                          type="button"
                          class="pf-v6-c-tabs__link"
                          role="tab"
                          aria-controls="-tabs-tab2-panel"
                          id="-tabs-tab2-link"
                        >
                          <span class="pf-v6-c-tabs__item-text">Activity</span>
                        </button>
                      </li>
                    </ul>
                    <div class="pf-v6-c-tabs__scroll-button">
                      <button
                        class="pf-v6-c-button pf-m-plain"
                        type="button"
                        aria-label="Scroll right"
                      >
                        <span class="pf-v6-c-button__icon">
                          <i class="fas fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pf-v6-c-drawer__body">
                  <section
                    class="pf-v6-c-tab-content"
                    id="-tabs-tab1-panel"
                    aria-labelledby="-tabs-tab1-link"
                    role="tabpanel"
                    tabindex="0"
                  >
                    <div class="pf-v6-c-tab-content__body">
                      <div class="pf-v6-l-flex pf-m-column pf-m-space-items-lg">
                        <div class="pf-v6-l-flex__item">
                          <p>The content of the drawer really is up to you. It could have form fields, definition lists, text lists, labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and can also make the drawer scrollable.</p>
                        </div>
                        <div class="pf-v6-l-flex__item">
                          <div
                            class="pf-v6-c-progress pf-m-sm"
                            id="-progress-example1"
                          >
                            <div
                              class="pf-v6-c-progress__description"
                              id="-progress-example1-description"
                            >Capacity</div>
                            <div
                              class="pf-v6-c-progress__status"
                              aria-hidden="true"
                            >
                              <span class="pf-v6-c-progress__measure">33%</span>
                            </div>
                            <div
                              class="pf-v6-c-progress__bar"
                              role="progressbar"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-valuenow="33"
                              aria-labelledby="-progress-example1-description"
                              aria-label="Progress 1"
                            >
                              <div
                                class="pf-v6-c-progress__indicator"
                                style="width:33%;"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div class="pf-v6-l-flex__item">
                          <div
                            class="pf-v6-c-progress pf-m-sm"
                            id="-progress-example2"
                          >
                            <div
                              class="pf-v6-c-progress__description"
                              id="-progress-example2-description"
                            >Modules</div>
                            <div
                              class="pf-v6-c-progress__status"
                              aria-hidden="true"
                            >
                              <span class="pf-v6-c-progress__measure">66%</span>
                            </div>
                            <div
                              class="pf-v6-c-progress__bar"
                              role="progressbar"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-valuenow="66"
                              aria-labelledby="-progress-example2-description"
                              aria-label="Progress 2"
                            >
                              <div
                                class="pf-v6-c-progress__indicator"
                                style="width:66%;"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div class="pf-v6-l-flex pf-m-column">
                          <div class="pf-v6-l-flex__item">
                            <h3 class="pf-v6-c-title" id="-title">Tags</h3>
                          </div>
                          <div class="pf-v6-l-flex__item">
                            <div class="pf-v6-c-label-group">
                              <div class="pf-v6-c-label-group__main">
                                <ul
                                  class="pf-v6-c-label-group__list"
                                  role="list"
                                  aria-label="Group of labels"
                                >
                                  <li class="pf-v6-c-label-group__list-item">
                                    <span class="pf-v6-c-label pf-m-outline">
                                      <span class="pf-v6-c-label__content">
                                        <span class="pf-v6-c-label__text">Tag 1</span>
                                      </span>
                                    </span>
                                  </li>
                                  <li class="pf-v6-c-label-group__list-item">
                                    <span class="pf-v6-c-label pf-m-outline">
                                      <span class="pf-v6-c-label__content">
                                        <span class="pf-v6-c-label__text">Tag 2</span>
                                      </span>
                                    </span>
                                  </li>
                                  <li class="pf-v6-c-label-group__list-item">
                                    <span class="pf-v6-c-label pf-m-outline">
                                      <span class="pf-v6-c-label__content">
                                        <span class="pf-v6-c-label__text">Tag 3</span>
                                      </span>
                                    </span>
                                  </li>
                                  <li class="pf-v6-c-label-group__list-item">
                                    <button
                                      class="pf-v6-c-label pf-m-overflow"
                                      type="button"
                                    >
                                      <span class="pf-v6-c-label__content">
                                        <span class="pf-v6-c-label__text">2 more</span>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    class="pf-v6-c-tab-content"
                    id="-tabs-tab2-panel"
                    aria-labelledby="-tabs-tab2-link"
                    role="tabpanel"
                    tabindex="0"
                    hidden
                  >
                    <div class="pf-v6-c-tab-content__body">Panel 2</div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Modal tabs

```html isFullscreen
<div class="pf-v6-c-backdrop">
  <div class="pf-v6-l-bullseye">
    <div
      class="pf-v6-c-modal-box pf-m-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-tabs-example-modal-title"
      aria-describedby="modal-tabs-example-modal-description"
    >
      <div class="pf-v6-c-modal-box__close">
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
      <header class="pf-v6-c-modal-box__header">
        <div class="pf-v6-c-modal-box__header-main">
          <h1
            class="pf-v6-c-modal-box__title"
            id="modal-tabs-example-modal-title"
          >PatternFly</h1>
        </div>
      </header>
      <div
        class="pf-v6-c-modal-box__body"
        id="modal-tabs-example-modal-description"
      >
        <div class="pf-v6-l-grid pf-m-gutter">
          <div class="pf-v6-l-grid__item">
            <div
              class="pf-v6-c-tabs pf-m-inset-none"
              role="region"
              id="modal-tabs-example-tabs"
            >
              <ul class="pf-v6-c-tabs__list" role="tablist">
                <li class="pf-v6-c-tabs__item pf-m-current" role="presentation">
                  <button
                    type="button"
                    class="pf-v6-c-tabs__link"
                    role="tab"
                    aria-controls="modal-tabs-example-tabs-details-panel"
                    id="modal-tabs-example-tabs-details-link"
                  >
                    <span class="pf-v6-c-tabs__item-text">Details</span>
                  </button>
                </li>
                <li class="pf-v6-c-tabs__item" role="presentation">
                  <button
                    type="button"
                    class="pf-v6-c-tabs__link"
                    role="tab"
                    aria-controls="modal-tabs-example-tabs-documentation-panel"
                    id="modal-tabs-example-tabs-documentation-link"
                  >
                    <span class="pf-v6-c-tabs__item-text">Documentation</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="pf-v6-l-grid__item">
            <section
              class="pf-v6-c-tab-content"
              aria-labelledby="modal-tabs-example-tabs-details-link"
              id="modal-tabs-example-tabs-details-panel"
              role="tabpanel"
              tabindex="0"
            >
              <div class="pf-v6-c-tab-content__body">
                <p>PatternFly is a community project that promotes design commonality and improves user experience.</p>
              </div>
            </section>
            <section
              class="pf-v6-c-tab-content"
              aria-labelledby="modal-tabs-example-tabs-documentation-link"
              id="modal-tabs-example-tabs-documentation-panel"
              role="tabpanel"
              tabindex="0"
              hidden
            >
              <div class="pf-v6-c-tab-content__body">
                <ul class="pf-v6-c-list" role="list">
                  <li>
                    <a>Doc link 1</a>
                  </li>
                  <li>
                    <a>Doc link 2</a>
                  </li>
                  <li>
                    <a>Doc link 3</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="pf-v6-c-page" id="modal-tabs-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-modal-tabs-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="modal-tabs-example-masthead">
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
                id="linearGradient-modal-tabs-example-masthead"
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
                  fill="url(#linearGradient-modal-tabs-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-modal-tabs-example-masthead)"
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
        id="modal-tabs-example-masthead-toolbar"
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
        id="modal-tabs-example-primary-nav"
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
      id="main-content-modal-tabs-example"
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
      <section class="pf-v6-c-page__main-section">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div
              class="pf-v6-c-card pf-m-selectable-raised pf-m-compact"
              id="modal-tabs-example-card-1"
            >
              <div class="pf-v6-c-card__title">
                <h2 class="pf-v6-c-card__title-text">PatternFly</h2>
              </div>
              <div
                class="pf-v6-c-card__body"
              >PatternFly is a community project that promotes design commonality and improves user experience.</div>
            </div>
            <div
              class="pf-v6-c-card pf-m-selectable-raised pf-m-compact"
              id="modal-tabs-example-card-2"
            >
              <div class="pf-v6-c-card__title">
                <h2 class="pf-v6-c-card__title-text">ActiveMQ</h2>
              </div>
              <div
                class="pf-v6-c-card__body"
              >The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.</div>
            </div>
            <div
              class="pf-v6-c-card pf-m-selectable-raised pf-m-compact"
              id="modal-tabs-example-card-3"
            >
              <div class="pf-v6-c-card__title">
                <h2 class="pf-v6-c-card__title-text">Apache Spark</h2>
              </div>
              <div
                class="pf-v6-c-card__body"
              >This documentation page covers the Apache Spark component for the Apache Camel.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Nested, unindented tabs

```html isFullscreen
<div class="pf-v6-c-page" id="gray-tabs-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-gray-tabs-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header class="pf-v6-c-masthead" id="gray-tabs-example-masthead">
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
                id="linearGradient-gray-tabs-example-masthead"
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
                  fill="url(#linearGradient-gray-tabs-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-gray-tabs-example-masthead)"
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
        id="gray-tabs-example-masthead-toolbar"
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
        id="gray-tabs-example-primary-nav"
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
      id="main-content-gray-tabs-example"
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
      <section class="pf-v6-c-page__main-tabs pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div
            class="pf-v6-c-tabs pf-m-page-insets"
            role="region"
            id="gray-tabs-example-tabs-tabs"
          >
            <ul class="pf-v6-c-tabs__list" role="tablist">
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="gray-tabs-example-tabs-tabs-new-panel"
                  id="gray-tabs-example-tabs-tabs-new-link"
                >
                  <span class="pf-v6-c-tabs__item-text">What's new</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item pf-m-current" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="gray-tabs-example-tabs-tabs-get-started-panel"
                  id="gray-tabs-example-tabs-tabs-get-started-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Get started</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="gray-tabs-example-tabs-tabs-knowledge-panel"
                  id="gray-tabs-example-tabs-tabs-knowledge-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Knowledge</span>
                </button>
              </li>
              <li class="pf-v6-c-tabs__item" role="presentation">
                <button
                  type="button"
                  class="pf-v6-c-tabs__link"
                  role="tab"
                  aria-controls="gray-tabs-example-tabs-tabs-support-panel"
                  id="gray-tabs-example-tabs-tabs-support-link"
                >
                  <span class="pf-v6-c-tabs__item-text">Support</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="gray-tabs-example-tabs-tabs-new-link"
            id="gray-tabs-example-tabs-tabs-new-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">What's new content</div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="gray-tabs-example-tabs-tabs-get-started-link"
            id="gray-tabs-example-tabs-tabs-get-started-panel"
            role="tabpanel"
            tabindex="0"
          >
            <div class="pf-v6-c-tab-content__body">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item">
                  <h1
                    class="pf-v6-c-title pf-m-lg"
                  >Get started with Red Hat Enterprise Linux</h1>
                </div>
                <div class="pf-v6-l-grid__item">
                  <div
                    class="pf-v6-c-tabs pf-m-inset-none"
                    role="region"
                    id="gray-tabs-example-tabs-subtabs"
                  >
                    <ul class="pf-v6-c-tabs__list" role="tablist">
                      <li
                        class="pf-v6-c-tabs__item pf-m-current"
                        role="presentation"
                      >
                        <button
                          type="button"
                          class="pf-v6-c-tabs__link"
                          role="tab"
                          aria-controls="gray-tabs-example-tabs-subtabs-x86-panel"
                          id="gray-tabs-example-tabs-subtabs-x86-link"
                        >
                          <span class="pf-v6-c-tabs__item-text">x86 architecture</span>
                        </button>
                      </li>
                      <li class="pf-v6-c-tabs__item" role="presentation">
                        <button
                          type="button"
                          class="pf-v6-c-tabs__link"
                          role="tab"
                          aria-controls="gray-tabs-example-tabs-subtabs-additional-architectures-panel"
                          id="gray-tabs-example-tabs-subtabs-additional-architectures-link"
                        >
                          <span
                            class="pf-v6-c-tabs__item-text"
                          >Additional Architectures</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item">
                  <section
                    class="pf-v6-c-tab-content"
                    aria-labelledby="gray-tabs-example-tabs-subtabs-x86-link"
                    id="gray-tabs-example-tabs-subtabs-x86-panel"
                    role="tabpanel"
                    tabindex="0"
                  >
                    <div class="pf-v6-c-tab-content__body">
                      <div class="pf-v6-l-grid pf-m-gutter">
                        <div class="pf-v6-l-grid__item">
                          <div class="pf-v6-c-content">
                            <p>To perform a standard x86_64 installation using the GUI, you'll need to:</p>
                          </div>
                        </div>
                        <div
                          class="pf-v6-l-grid pf-m-all-6-col-on-md pf-m-all-3-col-on-2xl pf-m-gutter"
                        >
                          <div class="pf-v6-c-card pf-m-flat">
                            <div class="pf-v6-c-card__title">
                              <h2
                                class="pf-v6-c-card__title-text"
                              >Check system requirements</h2>
                            </div>
                            <div class="pf-v6-c-card__body">
                              <p>
                                Your physical or virtual machine should meet the
                                <a href="#">system requirement</a>.
                              </p>
                            </div>
                          </div>
                          <div class="pf-v6-c-card pf-m-flat">
                            <div class="pf-v6-c-card__title">
                              <h2
                                class="pf-v6-c-card__title-text"
                              >Download an installation ISO image</h2>
                            </div>
                            <div class="pf-v6-c-card__body">
                              <p>
                                <a href="#">Download</a>&nbsp;the binary DVD ISO.
                              </p>
                            </div>
                          </div>
                          <div class="pf-v6-c-card pf-m-flat">
                            <div class="pf-v6-c-card__title">
                              <h2
                                class="pf-v6-c-card__title-text"
                              >Create a bootable installation media</h2>
                            </div>
                            <div class="pf-v6-c-card__body">
                              <p>
                                <a href="#">Create</a>&nbsp;a bootable installation media, for example a USB flash drive.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    class="pf-v6-c-tab-content"
                    aria-labelledby="gray-tabs-example-tabs-subtabs-additional-architectures-link"
                    id="gray-tabs-example-tabs-subtabs-additional-architectures-panel"
                    role="tabpanel"
                    tabindex="0"
                    hidden
                  >
                    <div class="pf-v6-c-tab-content__body">
                      <p>Additional architectural content</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="gray-tabs-example-tabs-tabs-knowledge-link"
            id="gray-tabs-example-tabs-tabs-knowledge-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">
              <div class="pf-v6-c-content">
                <p>Knowledge content</p>
              </div>
            </div>
          </section>
          <section
            class="pf-v6-c-tab-content"
            aria-labelledby="gray-tabs-example-tabs-tabs-support-link"
            id="gray-tabs-example-tabs-tabs-support-panel"
            role="tabpanel"
            tabindex="0"
            hidden
          >
            <div class="pf-v6-c-tab-content__body">
              <div class="pf-v6-c-content">
                <p>Support content</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</div>

```
