---
id: Primary-detail
section: patterns
wrapperTag: div
---## Demos

### Primary-detail expanded

```html isFullscreen
<div class="pf-v6-c-page" id="primary-detail-expanded-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-primary-detail-expanded-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead pf-m-display-stack pf-m-display-inline-on-lg"
    id="primary-detail-expanded-example-masthead"
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
                id="linearGradient-primary-detail-expanded-example-masthead"
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
                  fill="url(#linearGradient-primary-detail-expanded-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-primary-detail-expanded-example-masthead)"
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
        id="primary-detail-expanded-example-masthead-toolbar"
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
        id="primary-detail-expanded-example-primary-nav"
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
      id="main-content-primary-detail-expanded-example"
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
          <!-- Drawer -->
          <div class="pf-v6-c-drawer pf-m-expanded pf-m-inline-on-2xl">
            <div class="pf-v6-c-drawer__main">
              <!-- Content -->
              <div class="pf-v6-c-drawer__content">
                <div class="pf-v6-c-drawer__body">
                  <div
                    class="pf-v6-c-toolbar"
                    id="primary-detail-expanded-example-drawer-toolbar"
                  >
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
                              aria-controls="primary-detail-expanded-example-drawer-toolbar-expandable-content"
                            >
                              <span class="pf-v6-c-menu-toggle__icon">
                                <i class="fas fa-filter" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>

                          <div class="pf-v6-c-toolbar__item pf-m-search-filter">
                            <div
                              class="pf-v6-c-input-group"
                              aria-label="search filter"
                              role="group"
                            >
                              <div class="pf-v6-c-input-group__item">
                                <button
                                  class="pf-v6-c-menu-toggle"
                                  type="button"
                                  aria-expanded="false"
                                  id="primary-detail-expanded-example-drawer-toolbar-search-filter-menu"
                                >
                                  <span class="pf-v6-c-menu-toggle__icon">
                                    <i class="fas fa-filter" aria-hidden="true"></i>
                                  </span>
                                  <span class="pf-v6-c-menu-toggle__text">Name</span>
                                  <span class="pf-v6-c-menu-toggle__controls">
                                    <span
                                      class="pf-v6-c-menu-toggle__toggle-icon"
                                    >
                                      <i
                                        class="fas fa-caret-down fa-fw"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v6-c-input-group__item pf-m-fill">
                                <div class="pf-v6-c-text-input-group">
                                  <div
                                    class="pf-v6-c-text-input-group__main pf-m-icon"
                                  >
                                    <span
                                      class="pf-v6-c-text-input-group__text"
                                    >
                                      <span
                                        class="pf-v6-c-text-input-group__icon"
                                      >
                                        <i class="fas fa-fw fa-search"></i>
                                      </span>
                                      <input
                                        class="pf-v6-c-text-input-group__text-input"
                                        type="text"
                                        placeholder="Filter by name"
                                        value
                                        aria-label="Search input"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="pf-v6-c-toolbar__group pf-m-show-on-xl pf-m-filter-group pf-m-toggle-group"
                          >
                            <div class="pf-v6-c-toolbar__item">
                              <button
                                class="pf-v6-c-menu-toggle"
                                type="button"
                                aria-expanded="false"
                                id="primary-detail-expanded-example-drawer-toolbar-select-checkbox-status"
                              >
                                <span class="pf-v6-c-menu-toggle__text">Status</span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
                            <div class="pf-v6-c-toolbar__item">
                              <button
                                class="pf-v6-c-menu-toggle"
                                type="button"
                                aria-expanded="false"
                                id="primary-detail-expanded-example-drawer-toolbar-select-checkbox-risk"
                              >
                                <span class="pf-v6-c-menu-toggle__text">Risk</span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
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
                          id="primary-detail-expanded-example-drawer-toolbar-overflow-menu"
                        >
                          <div
                            class="pf-v6-c-overflow-menu__content pf-v6-u-display-none pf-v6-u-display-flex-on-lg"
                          >
                            <div
                              class="pf-v6-c-overflow-menu__group pf-m-button-group"
                            >
                              <div class="pf-v6-c-overflow-menu__item">
                                <button
                                  class="pf-v6-c-button pf-m-primary"
                                  type="button"
                                >
                                  <span
                                    class="pf-v6-c-button__text"
                                  >Create instance</span>
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
                              id="primary-detail-expanded-example-drawer-toolbar-overflow-menu-toggle"
                            >
                              <span class="pf-v6-c-menu-toggle__icon">
                                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                        </div>

                        <div class="pf-v6-c-toolbar__item pf-m-pagination">
                          <div class="pf-v6-c-pagination pf-m-compact">
                            <div class="pf-v6-c-pagination__page-menu">
                              <button
                                class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
                                type="button"
                                aria-expanded="false"
                                aria-label="Menu toggle"
                                id="primary-detail-expanded-example-drawer-toolbar-top-pagination"
                              >
                                <span class="pf-v6-c-menu-toggle__text">
                                  <b>1 - 10</b>&nbsp;of&nbsp;
                                  <b>36</b>
                                </span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
                            <nav
                              class="pf-v6-c-pagination__nav"
                              aria-label="Toolbar top pagination"
                            >
                              <div
                                class="pf-v6-c-pagination__nav-control pf-m-prev"
                              >
                                <button
                                  class="pf-v6-c-button pf-m-plain"
                                  type="button"
                                  disabled
                                  aria-label="Go to previous page"
                                >
                                  <span class="pf-v6-c-button__icon">
                                    <i
                                      class="fas fa-angle-left"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </button>
                              </div>
                              <div
                                class="pf-v6-c-pagination__nav-control pf-m-next"
                              >
                                <button
                                  class="pf-v6-c-button pf-m-plain"
                                  type="button"
                                  aria-label="Go to next page"
                                >
                                  <span class="pf-v6-c-button__icon">
                                    <i
                                      class="fas fa-angle-right"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </button>
                              </div>
                            </nav>
                          </div>
                        </div>
                      </div>

                      <div
                        class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
                        id="primary-detail-expanded-example-drawer-toolbar-expandable-content"
                        hidden
                      ></div>
                    </div>
                  </div>
                  <ul
                    class="pf-v6-c-data-list"
                    role="list"
                    aria-label="Simple data list example"
                    id="primary-detail-expanded-example-data-list"
                  >
                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-expanded-example-data-list-item-1"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-expanded-example-data-list-item-1"
                                  >patternfly</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>
                                    Working repo for PatternFly 4
                                    <a href>https://pf4.patternfly.org/</a>
                                  </small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>10</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-expanded-example-data-list-item-2"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-expanded-example-data-list-item-2"
                                  >patternfly-elements</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>PatternFly elements</small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>9</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>2</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-check-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>11</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-exclamation-triangle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-times-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>1</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-expanded-example-data-list-item-3"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <p
                              id="primary-detail-expanded-example-data-list-item-3"
                            >patternfly-unified-design-kit</p>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-expanded-example-data-list-item-4"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-expanded-example-data-list-item-4"
                                  >patternfly</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>
                                    Working repo for PatternFly 4
                                    <a href>https://pf4.patternfly.org/</a>
                                  </small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>10</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-expanded-example-data-list-item-5"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-expanded-example-data-list-item-5"
                                  >patternfly-elements</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>PatternFly elements</small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>9</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>2</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-check-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>11</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-exclamation-triangle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-times-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>1</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Panel -->
              <div class="pf-v6-c-drawer__panel">
                <!-- Panel header -->
                <div class="pf-v6-c-drawer__body">
                  <div class="pf-v6-l-flex pf-m-column">
                    <div class="pf-v6-l-flex__item">
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
                        <h2
                          class="pf-v6-c-title pf-m-lg"
                          id="primary-detail-expanded-example-drawer-drawer-label"
                        >Node 2</h2>
                      </div>
                    </div>
                    <div class="pf-v6-l-flex__item">
                      <a href="#">siemur/test-space</a>
                    </div>
                  </div>
                </div>

                <!-- Tabs -->
                <div class="pf-v6-c-drawer__body pf-m-no-padding">
                  <div
                    class="pf-v6-c-tabs pf-m-box pf-m-fill"
                    role="region"
                    id="primary-detail-expanded-example-drawer-tabs"
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
                          aria-controls="primary-detail-expanded-example-drawer-tabs-tab1-panel"
                          id="primary-detail-expanded-example-drawer-tabs-tab1-link"
                        >
                          <span class="pf-v6-c-tabs__item-text">Overview</span>
                        </button>
                      </li>
                      <li class="pf-v6-c-tabs__item" role="presentation">
                        <button
                          type="button"
                          class="pf-v6-c-tabs__link"
                          role="tab"
                          aria-controls="primary-detail-expanded-example-drawer-tabs-tab2-panel"
                          id="primary-detail-expanded-example-drawer-tabs-tab2-link"
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

                <!-- Tab content -->
                <div class="pf-v6-c-drawer__body">
                  <section
                    class="pf-v6-c-tab-content"
                    id="primary-detail-expanded-example-drawer-tabs-tab1-panel"
                    aria-labelledby="primary-detail-expanded-example-drawer-tabs-tab1-link"
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
                            id="primary-detail-expanded-example-drawer-progress-example1"
                          >
                            <div
                              class="pf-v6-c-progress__description"
                              id="primary-detail-expanded-example-drawer-progress-example1-description"
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
                              aria-labelledby="primary-detail-expanded-example-drawer-progress-example1-description"
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
                            id="primary-detail-expanded-example-drawer-progress-example2"
                          >
                            <div
                              class="pf-v6-c-progress__description"
                              id="primary-detail-expanded-example-drawer-progress-example2-description"
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
                              aria-labelledby="primary-detail-expanded-example-drawer-progress-example2-description"
                              aria-label="Progress 2"
                            >
                              <div
                                class="pf-v6-c-progress__indicator"
                                style="width:66%;"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    class="pf-v6-c-tab-content"
                    id="primary-detail-expanded-example-drawer-tabs-tab2-panel"
                    aria-labelledby="primary-detail-expanded-example-drawer-tabs-tab2-link"
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

### Primary-detail collapsed

```html isFullscreen
<div class="pf-v6-c-page" id="primary-detail-collapsed-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-primary-detail-collapsed-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead pf-m-display-stack pf-m-display-inline-on-lg"
    id="primary-detail-collapsed-example-masthead"
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
                id="linearGradient-primary-detail-collapsed-example-masthead"
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
                  fill="url(#linearGradient-primary-detail-collapsed-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-primary-detail-collapsed-example-masthead)"
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
        id="primary-detail-collapsed-example-masthead-toolbar"
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
        id="primary-detail-collapsed-example-primary-nav"
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
      id="main-content-primary-detail-collapsed-example"
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
      <div class="pf-v6-c-divider" role="separator"></div>
      <section class="pf-v6-c-page__main-section">
        <div class="pf-v6-c-page__main-body">
          <!-- Drawer -->
          <div class="pf-v6-c-drawer pf-m-inline-on-2xl">
            <div class="pf-v6-c-drawer__main">
              <!-- Content -->
              <div class="pf-v6-c-drawer__content">
                <div class="pf-v6-c-drawer__body">
                  <div
                    class="pf-v6-c-toolbar"
                    id="primary-detail-collapsed-example-drawer-toolbar"
                  >
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
                              aria-controls="primary-detail-collapsed-example-drawer-toolbar-expandable-content"
                            >
                              <span class="pf-v6-c-menu-toggle__icon">
                                <i class="fas fa-filter" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>

                          <div class="pf-v6-c-toolbar__item pf-m-search-filter">
                            <div
                              class="pf-v6-c-input-group"
                              aria-label="search filter"
                              role="group"
                            >
                              <div class="pf-v6-c-input-group__item">
                                <button
                                  class="pf-v6-c-menu-toggle"
                                  type="button"
                                  aria-expanded="false"
                                  id="primary-detail-collapsed-example-drawer-toolbar-search-filter-menu"
                                >
                                  <span class="pf-v6-c-menu-toggle__icon">
                                    <i class="fas fa-filter" aria-hidden="true"></i>
                                  </span>
                                  <span class="pf-v6-c-menu-toggle__text">Name</span>
                                  <span class="pf-v6-c-menu-toggle__controls">
                                    <span
                                      class="pf-v6-c-menu-toggle__toggle-icon"
                                    >
                                      <i
                                        class="fas fa-caret-down fa-fw"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v6-c-input-group__item pf-m-fill">
                                <div class="pf-v6-c-text-input-group">
                                  <div
                                    class="pf-v6-c-text-input-group__main pf-m-icon"
                                  >
                                    <span
                                      class="pf-v6-c-text-input-group__text"
                                    >
                                      <span
                                        class="pf-v6-c-text-input-group__icon"
                                      >
                                        <i class="fas fa-fw fa-search"></i>
                                      </span>
                                      <input
                                        class="pf-v6-c-text-input-group__text-input"
                                        type="text"
                                        placeholder="Filter by name"
                                        value
                                        aria-label="Search input"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="pf-v6-c-toolbar__group pf-m-show-on-xl pf-m-filter-group pf-m-toggle-group"
                          >
                            <div class="pf-v6-c-toolbar__item">
                              <button
                                class="pf-v6-c-menu-toggle"
                                type="button"
                                aria-expanded="false"
                                id="primary-detail-collapsed-example-drawer-toolbar-select-checkbox-status"
                              >
                                <span class="pf-v6-c-menu-toggle__text">Status</span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
                            <div class="pf-v6-c-toolbar__item">
                              <button
                                class="pf-v6-c-menu-toggle"
                                type="button"
                                aria-expanded="false"
                                id="primary-detail-collapsed-example-drawer-toolbar-select-checkbox-risk"
                              >
                                <span class="pf-v6-c-menu-toggle__text">Risk</span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
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
                          id="primary-detail-collapsed-example-drawer-toolbar-overflow-menu"
                        >
                          <div
                            class="pf-v6-c-overflow-menu__content pf-v6-u-display-none pf-v6-u-display-flex-on-lg"
                          >
                            <div
                              class="pf-v6-c-overflow-menu__group pf-m-button-group"
                            >
                              <div class="pf-v6-c-overflow-menu__item">
                                <button
                                  class="pf-v6-c-button pf-m-primary"
                                  type="button"
                                >
                                  <span
                                    class="pf-v6-c-button__text"
                                  >Create instance</span>
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
                              id="primary-detail-collapsed-example-drawer-toolbar-overflow-menu-toggle"
                            >
                              <span class="pf-v6-c-menu-toggle__icon">
                                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                        </div>

                        <div class="pf-v6-c-toolbar__item pf-m-pagination">
                          <div class="pf-v6-c-pagination pf-m-compact">
                            <div class="pf-v6-c-pagination__page-menu">
                              <button
                                class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
                                type="button"
                                aria-expanded="false"
                                aria-label="Menu toggle"
                                id="primary-detail-collapsed-example-drawer-toolbar-top-pagination"
                              >
                                <span class="pf-v6-c-menu-toggle__text">
                                  <b>1 - 10</b>&nbsp;of&nbsp;
                                  <b>36</b>
                                </span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
                            <nav
                              class="pf-v6-c-pagination__nav"
                              aria-label="Toolbar top pagination"
                            >
                              <div
                                class="pf-v6-c-pagination__nav-control pf-m-prev"
                              >
                                <button
                                  class="pf-v6-c-button pf-m-plain"
                                  type="button"
                                  disabled
                                  aria-label="Go to previous page"
                                >
                                  <span class="pf-v6-c-button__icon">
                                    <i
                                      class="fas fa-angle-left"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </button>
                              </div>
                              <div
                                class="pf-v6-c-pagination__nav-control pf-m-next"
                              >
                                <button
                                  class="pf-v6-c-button pf-m-plain"
                                  type="button"
                                  aria-label="Go to next page"
                                >
                                  <span class="pf-v6-c-button__icon">
                                    <i
                                      class="fas fa-angle-right"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </button>
                              </div>
                            </nav>
                          </div>
                        </div>
                      </div>

                      <div
                        class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
                        id="primary-detail-collapsed-example-drawer-toolbar-expandable-content"
                        hidden
                      ></div>
                    </div>
                  </div>
                  <ul
                    class="pf-v6-c-data-list"
                    role="list"
                    aria-label="Simple data list example"
                    id="primary-detail-collapsed-example-data-list"
                  >
                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-collapsed-example-data-list-item-1"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-collapsed-example-data-list-item-1"
                                  >patternfly</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>
                                    Working repo for PatternFly 4
                                    <a href>https://pf4.patternfly.org/</a>
                                  </small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>10</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-collapsed-example-data-list-item-2"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-collapsed-example-data-list-item-2"
                                  >patternfly-elements</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>PatternFly elements</small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>9</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>2</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-check-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>11</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-exclamation-triangle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-times-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>1</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-collapsed-example-data-list-item-3"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <p
                              id="primary-detail-collapsed-example-data-list-item-3"
                            >patternfly-unified-design-kit</p>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-collapsed-example-data-list-item-4"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-collapsed-example-data-list-item-4"
                                  >patternfly</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>
                                    Working repo for PatternFly 4
                                    <a href>https://pf4.patternfly.org/</a>
                                  </small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>10</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-collapsed-example-data-list-item-5"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-collapsed-example-data-list-item-5"
                                  >patternfly-elements</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>PatternFly elements</small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>9</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>2</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-check-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>11</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-exclamation-triangle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-times-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>1</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Panel -->
              <div class="pf-v6-c-drawer__panel" hidden>
                <!-- Panel header -->
                <div class="pf-v6-c-drawer__body">
                  <div class="pf-v6-l-flex pf-m-column">
                    <div class="pf-v6-l-flex__item">
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
                        <h2
                          class="pf-v6-c-title pf-m-lg"
                          id="primary-detail-collapsed-example-drawer-drawer-label"
                        >Patternfly-elements</h2>
                      </div>
                    </div>
                    <div class="pf-v6-l-flex__item">PatternFly elements</div>
                  </div>
                </div>

                <!-- Tab content -->
                <div class="pf-v6-c-drawer__body">
                  <div class="pf-v6-l-flex pf-m-column pf-m-space-items-lg">
                    <div class="pf-v6-l-flex__item">
                      <p>The content of the drawer really is up to you. It could have form fields, definition lists, text lists, labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and can also make the drawer scrollable.</p>
                    </div>
                    <div class="pf-v6-l-flex__item">
                      <div
                        class="pf-v6-c-progress pf-m-sm"
                        id="primary-detail-collapsed-example-drawer-progress-example1"
                      >
                        <div
                          class="pf-v6-c-progress__description"
                          id="primary-detail-collapsed-example-drawer-progress-example1-description"
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
                          aria-labelledby="primary-detail-collapsed-example-drawer-progress-example1-description"
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
                        id="primary-detail-collapsed-example-drawer-progress-example2"
                      >
                        <div
                          class="pf-v6-c-progress__description"
                          id="primary-detail-collapsed-example-drawer-progress-example2-description"
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
                          aria-labelledby="primary-detail-collapsed-example-drawer-progress-example2-description"
                          aria-label="Progress 2"
                        >
                          <div
                            class="pf-v6-c-progress__indicator"
                            style="width:66%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
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

### Primary-detail content body padding

```html isFullscreen
<div class="pf-v6-c-page" id="primary-detail-content-body-padding-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-primary-detail-content-body-padding-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead pf-m-display-stack pf-m-display-inline-on-lg"
    id="primary-detail-content-body-padding-example-masthead"
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
                id="linearGradient-primary-detail-content-body-padding-example-masthead"
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
                  fill="url(#linearGradient-primary-detail-content-body-padding-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-primary-detail-content-body-padding-example-masthead)"
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
        id="primary-detail-content-body-padding-example-masthead-toolbar"
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
        id="primary-detail-content-body-padding-example-primary-nav"
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
      id="main-content-primary-detail-content-body-padding-example"
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
      <div class="pf-v6-c-divider" role="separator"></div>
      <section class="pf-v6-c-page__main-section pf-m-no-padding">
        <div class="pf-v6-c-page__main-body">
          <!-- Drawer -->
          <div class="pf-v6-c-drawer pf-m-expanded pf-m-inline-on-2xl">
            <div class="pf-v6-c-drawer__main">
              <!-- Content -->
              <div class="pf-v6-c-drawer__content pf-m-no-background">
                <div class="pf-v6-c-drawer__body pf-m-padding">
                  <div
                    class="pf-v6-c-toolbar"
                    id="primary-detail-content-body-padding-example-drawer-toolbar"
                  >
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
                              aria-controls="primary-detail-content-body-padding-example-drawer-toolbar-expandable-content"
                            >
                              <span class="pf-v6-c-menu-toggle__icon">
                                <i class="fas fa-filter" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>

                          <div
                            class="pf-v6-c-toolbar__group pf-m-show-on-xl pf-m-filter-group pf-m-toggle-group"
                          >
                            <div class="pf-v6-c-toolbar__item">
                              <button
                                class="pf-v6-c-menu-toggle"
                                type="button"
                                aria-expanded="false"
                                id="primary-detail-content-body-padding-example-drawer-toolbar-select-checkbox-status"
                              >
                                <span class="pf-v6-c-menu-toggle__text">Status</span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
                            <div class="pf-v6-c-toolbar__item">
                              <button
                                class="pf-v6-c-menu-toggle"
                                type="button"
                                aria-expanded="false"
                                id="primary-detail-content-body-padding-example-drawer-toolbar-select-checkbox-risk"
                              >
                                <span class="pf-v6-c-menu-toggle__text">Risk</span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
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
                          id="primary-detail-content-body-padding-example-drawer-toolbar-overflow-menu"
                        >
                          <div
                            class="pf-v6-c-overflow-menu__content pf-v6-u-display-none pf-v6-u-display-flex-on-lg"
                          >
                            <div
                              class="pf-v6-c-overflow-menu__group pf-m-button-group"
                            >
                              <div class="pf-v6-c-overflow-menu__item">
                                <button
                                  class="pf-v6-c-button pf-m-primary"
                                  type="button"
                                >
                                  <span
                                    class="pf-v6-c-button__text"
                                  >Create instance</span>
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
                              id="primary-detail-content-body-padding-example-drawer-toolbar-overflow-menu-toggle"
                            >
                              <span class="pf-v6-c-menu-toggle__icon">
                                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                        </div>

                        <div class="pf-v6-c-toolbar__item pf-m-pagination">
                          <div class="pf-v6-c-pagination pf-m-compact">
                            <div class="pf-v6-c-pagination__page-menu">
                              <button
                                class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
                                type="button"
                                aria-expanded="false"
                                aria-label="Menu toggle"
                                id="primary-detail-content-body-padding-example-drawer-toolbar-top-pagination"
                              >
                                <span class="pf-v6-c-menu-toggle__text">
                                  <b>1 - 10</b>&nbsp;of&nbsp;
                                  <b>36</b>
                                </span>
                                <span class="pf-v6-c-menu-toggle__controls">
                                  <span
                                    class="pf-v6-c-menu-toggle__toggle-icon"
                                  >
                                    <i
                                      class="fas fa-caret-down fa-fw"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              </button>
                            </div>
                            <nav
                              class="pf-v6-c-pagination__nav"
                              aria-label="Toolbar top pagination"
                            >
                              <div
                                class="pf-v6-c-pagination__nav-control pf-m-prev"
                              >
                                <button
                                  class="pf-v6-c-button pf-m-plain"
                                  type="button"
                                  disabled
                                  aria-label="Go to previous page"
                                >
                                  <span class="pf-v6-c-button__icon">
                                    <i
                                      class="fas fa-angle-left"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </button>
                              </div>
                              <div
                                class="pf-v6-c-pagination__nav-control pf-m-next"
                              >
                                <button
                                  class="pf-v6-c-button pf-m-plain"
                                  type="button"
                                  aria-label="Go to next page"
                                >
                                  <span class="pf-v6-c-button__icon">
                                    <i
                                      class="fas fa-angle-right"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </button>
                              </div>
                            </nav>
                          </div>
                        </div>
                      </div>

                      <div
                        class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
                        id="primary-detail-content-body-padding-example-drawer-toolbar-expandable-content"
                        hidden
                      ></div>
                    </div>
                  </div>
                  <ul
                    class="pf-v6-c-data-list"
                    role="list"
                    aria-label="Simple data list example"
                    id="primary-detail-content-body-padding-example-data-list"
                  >
                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-content-body-padding-example-data-list-item-1"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-content-body-padding-example-data-list-item-1"
                                  >patternfly</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>
                                    Working repo for PatternFly 4
                                    <a href>https://pf4.patternfly.org/</a>
                                  </small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>10</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-content-body-padding-example-data-list-item-2"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-content-body-padding-example-data-list-item-2"
                                  >patternfly-elements</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>PatternFly elements</small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>9</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>2</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-check-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>11</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-exclamation-triangle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-times-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>1</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-content-body-padding-example-data-list-item-3"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <p
                              id="primary-detail-content-body-padding-example-data-list-item-3"
                            >patternfly-unified-design-kit</p>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-content-body-padding-example-data-list-item-4"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-content-body-padding-example-data-list-item-4"
                                  >patternfly</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>
                                    Working repo for PatternFly 4
                                    <a href>https://pf4.patternfly.org/</a>
                                  </small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>10</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      class="pf-v6-c-data-list__item"
                      aria-labelledby="primary-detail-content-body-padding-example-data-list-item-5"
                    >
                      <div class="pf-v6-c-data-list__item-row">
                        <div class="pf-v6-c-data-list__item-content">
                          <div class="pf-v6-c-data-list__cell pf-m-align-left">
                            <div
                              class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                            >
                              <div
                                class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                              >
                                <div class="pf-v6-l-flex__item">
                                  <p
                                    id="primary-detail-content-body-padding-example-data-list-item-5"
                                  >patternfly-elements</p>
                                </div>
                                <div class="pf-v6-l-flex__item">
                                  <small>PatternFly elements</small>
                                </div>
                              </div>
                              <div class="pf-v6-l-flex pf-m-wrap">
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-code-branch"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>5</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>9</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i class="fas fa-cube" aria-hidden="true"></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>2</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-check-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>11</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-exclamation-triangle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>4</span>
                                  </div>
                                </div>
                                <div class="pf-v6-l-flex pf-m-space-items-xs">
                                  <div class="pf-v6-l-flex__item">
                                    <i
                                      class="fas fa-times-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <div class="pf-v6-l-flex__item">
                                    <span>1</span>
                                  </div>
                                </div>
                                <div
                                  class="pf-v6-l-flex__item"
                                >Updated 2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                          >
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
                            </button>
                            <button
                              class="pf-v6-c-button pf-m-link"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Link</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Panel -->
              <div class="pf-v6-c-drawer__panel">
                <!-- Panel header -->
                <div class="pf-v6-c-drawer__body">
                  <div class="pf-v6-l-flex pf-m-column">
                    <div class="pf-v6-l-flex__item">
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
                        <h2
                          class="pf-v6-c-title pf-m-lg"
                          id="primary-detail-content-body-padding-example-drawer-drawer-label"
                        >Patternfly-elements</h2>
                      </div>
                    </div>
                    <div class="pf-v6-l-flex__item">PatternFly elements</div>
                  </div>
                </div>

                <!-- Tab content -->
                <div class="pf-v6-c-drawer__body">
                  <div class="pf-v6-l-flex pf-m-column pf-m-space-items-lg">
                    <div class="pf-v6-l-flex__item">
                      <p>The content of the drawer really is up to you. It could have form fields, definition lists, text lists, labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and can also make the drawer scrollable.</p>
                    </div>
                    <div class="pf-v6-l-flex__item">
                      <div
                        class="pf-v6-c-progress pf-m-sm"
                        id="primary-detail-content-body-padding-example-drawer-progress-example1"
                      >
                        <div
                          class="pf-v6-c-progress__description"
                          id="primary-detail-content-body-padding-example-drawer-progress-example1-description"
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
                          aria-labelledby="primary-detail-content-body-padding-example-drawer-progress-example1-description"
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
                        id="primary-detail-content-body-padding-example-drawer-progress-example2"
                      >
                        <div
                          class="pf-v6-c-progress__description"
                          id="primary-detail-content-body-padding-example-drawer-progress-example2-description"
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
                          aria-labelledby="primary-detail-content-body-padding-example-drawer-progress-example2-description"
                          aria-label="Progress 2"
                        >
                          <div
                            class="pf-v6-c-progress__indicator"
                            style="width:66%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
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

### Primary-detail card view expanded

```html isFullscreen
<div class="pf-v6-c-page" id="primary-detail-card-view-expanded-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-primary-detail-card-view-expanded-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead pf-m-display-stack pf-m-display-inline-on-lg"
    id="primary-detail-card-view-expanded-example-masthead"
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
                id="linearGradient-primary-detail-card-view-expanded-example-masthead"
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
                  fill="url(#linearGradient-primary-detail-card-view-expanded-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-primary-detail-card-view-expanded-example-masthead)"
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
        id="primary-detail-card-view-expanded-example-masthead-toolbar"
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
        id="primary-detail-card-view-expanded-example-primary-nav"
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
      id="main-content-primary-detail-card-view-expanded-example"
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
      <section class="pf-v6-c-page__main-section pf-m-no-padding">
        <div class="pf-v6-c-page__main-body">
          <!-- Drawer -->
          <div class="pf-v6-c-drawer pf-m-expanded pf-m-inline-on-2xl">
            <div class="pf-v6-c-drawer__section">
              <div
                class="pf-v6-c-toolbar"
                id="primary-detail-card-view-expanded-example-drawer-toolbar"
              >
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
                          aria-controls="primary-detail-card-view-expanded-example-drawer-toolbar-expandable-content"
                        >
                          <span class="pf-v6-c-menu-toggle__icon">
                            <i class="fas fa-filter" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                      <div class="pf-v6-c-toolbar__item pf-m-bulk-select">
                        <div
                          class="pf-v6-c-menu-toggle pf-m-split-button"
                          id="primary-detail-card-view-expanded-example-drawer-toolbar-check"
                        >
                          <label
                            class="pf-v6-c-check pf-m-standalone"
                            for="primary-detail-card-view-expanded-example-drawer-toolbar-check-check-input"
                          >
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-toolbar-check-check-input"
                              name="primary-detail-card-view-expanded-example-drawer-toolbar-check-check-input"
                              aria-label="Standalone check"
                            />
                          </label>
                          <button
                            class="pf-v6-c-menu-toggle__button"
                            type="button"
                            aria-expanded="false"
                            id="primary-detail-card-view-expanded-example-drawer-toolbar-menu-toggle-toggle-button"
                            aria-label="Menu toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__controls">
                              <span class="pf-v6-c-menu-toggle__toggle-icon">
                                <i
                                  class="fas fa-caret-down fa-fw"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>

                      <div class="pf-v6-c-toolbar__item pf-m-search-filter">
                        <div
                          class="pf-v6-c-input-group"
                          aria-label="search filter"
                          role="group"
                        >
                          <div class="pf-v6-c-input-group__item">
                            <button
                              class="pf-v6-c-menu-toggle"
                              type="button"
                              aria-expanded="false"
                              id="primary-detail-card-view-expanded-example-drawer-toolbar-search-filter-menu"
                            >
                              <span class="pf-v6-c-menu-toggle__icon">
                                <i class="fas fa-filter" aria-hidden="true"></i>
                              </span>
                              <span class="pf-v6-c-menu-toggle__text">Name</span>
                              <span class="pf-v6-c-menu-toggle__controls">
                                <span class="pf-v6-c-menu-toggle__toggle-icon">
                                  <i
                                    class="fas fa-caret-down fa-fw"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </span>
                            </button>
                          </div>
                          <div class="pf-v6-c-input-group__item pf-m-fill">
                            <div class="pf-v6-c-text-input-group">
                              <div
                                class="pf-v6-c-text-input-group__main pf-m-icon"
                              >
                                <span class="pf-v6-c-text-input-group__text">
                                  <span class="pf-v6-c-text-input-group__icon">
                                    <i class="fas fa-fw fa-search"></i>
                                  </span>
                                  <input
                                    class="pf-v6-c-text-input-group__text-input"
                                    type="text"
                                    placeholder="Filter by name"
                                    value
                                    aria-label="Search input"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
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
                      id="primary-detail-card-view-expanded-example-drawer-toolbar-overflow-menu"
                    >
                      <div
                        class="pf-v6-c-overflow-menu__content pf-v6-u-display-none pf-v6-u-display-flex-on-lg"
                      >
                        <div
                          class="pf-v6-c-overflow-menu__group pf-m-button-group"
                        >
                          <div class="pf-v6-c-overflow-menu__item">
                            <button
                              class="pf-v6-c-button pf-m-primary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Create instance</span>
                            </button>
                          </div>

                          <div class="pf-v6-c-overflow-menu__item">
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
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
                          id="primary-detail-card-view-expanded-example-drawer-toolbar-overflow-menu-toggle"
                        >
                          <span class="pf-v6-c-menu-toggle__icon">
                            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div
                      class="pf-v6-c-toolbar__group pf-m-align-end pf-m-action-group-plain"
                    >
                      <div class="pf-v6-c-toolbar__item">
                        <button
                          class="pf-v6-c-button pf-m-plain"
                          type="button"
                          aria-label="Grid view"
                        >
                          <span class="pf-v6-c-button__icon">
                            <i class="fas fa-th" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                      <div class="pf-v6-c-toolbar__item">
                        <button
                          class="pf-v6-c-button pf-m-plain"
                          type="button"
                          aria-label="List view"
                        >
                          <span class="pf-v6-c-button__icon">
                            <i class="fas fa-list-ul" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="pf-v6-c-toolbar__item pf-m-pagination">
                      <div class="pf-v6-c-pagination pf-m-compact">
                        <div class="pf-v6-c-pagination__page-menu">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-toolbar-top-pagination"
                          >
                            <span class="pf-v6-c-menu-toggle__text">
                              <b>1 - 10</b>&nbsp;of&nbsp;
                              <b>36</b>
                            </span>
                            <span class="pf-v6-c-menu-toggle__controls">
                              <span class="pf-v6-c-menu-toggle__toggle-icon">
                                <i
                                  class="fas fa-caret-down fa-fw"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </span>
                          </button>
                        </div>
                        <nav
                          class="pf-v6-c-pagination__nav"
                          aria-label="Toolbar top pagination"
                        >
                          <div
                            class="pf-v6-c-pagination__nav-control pf-m-prev"
                          >
                            <button
                              class="pf-v6-c-button pf-m-plain"
                              type="button"
                              disabled
                              aria-label="Go to previous page"
                            >
                              <span class="pf-v6-c-button__icon">
                                <i class="fas fa-angle-left" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                          <div
                            class="pf-v6-c-pagination__nav-control pf-m-next"
                          >
                            <button
                              class="pf-v6-c-button pf-m-plain"
                              type="button"
                              aria-label="Go to next page"
                            >
                              <span class="pf-v6-c-button__icon">
                                <i
                                  class="fas fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div
                    class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
                    id="primary-detail-card-view-expanded-example-drawer-toolbar-expandable-content"
                    hidden
                  ></div>
                </div>
              </div>
              <div class="pf-v6-c-divider" role="separator"></div>
            </div>

            <div class="pf-v6-c-drawer__main">
              <!-- Content -->
              <div class="pf-v6-c-drawer__content pf-m-no-background">
                <div class="pf-v6-c-drawer__body pf-m-padding">
                  <div class="pf-v6-l-gallery pf-m-gutter">
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised pf-m-selected-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-1"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/PF-IconLogo.svg"
                          alt="PatternFly logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-1-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-1-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-1-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-1-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-1-check-label"
                        >Patternfly</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >PatternFly is a community project that promotes design commonality and improves user experience.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-2"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/activemq-core_200x150.png"
                          width="60px"
                          alt="Logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-2-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-2-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-2-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-2-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-2-check-label"
                        >ActiveQ</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-3"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/camel-spark_200x150.png"
                          width="60px"
                          alt="Logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-3-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-3-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-3-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-3-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-3-check-label"
                        >Apache Spark</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >This documentation page covers the Apache Spark component for the Apache Camel.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-4"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/camel-avro_200x150.png"
                          width="60px"
                          alt="Logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-4-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-4-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-4-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-4-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-4-check-label"
                        >Avro</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >This component provides a dataformat for avro, which allows serialization and deserialization of messages using Apache Avro’s binary dataformat. Moreover, it provides support for Apache Avro’s rpc, by providing producers and consumers endpoint for using avro over netty or http.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-5"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/FuseConnector_Icons_AzureServices.png"
                          width="60px"
                          alt="Logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-5-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-5-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-5-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-5-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-5-check-label"
                        >Azure Services</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >The Camel Components for Windows Azure Services provide connectivity to Azure services from Camel.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-6"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/camel-saxon_200x150.png"
                          width="60px"
                          alt="Logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-6-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-6-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-6-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-6-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-6-check-label"
                        >Crypto</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >For providing flexible endpoints to sign and verify exchanges using the Signature Service of the Java Cryptographic Extension.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-7"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/PF-IconLogo.svg"
                          alt="PatternFly logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-7-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-7-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-7-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-7-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-7-check-label"
                        >Patternfly</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >PatternFly is a community project that promotes design commonality and improves user experience.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-8"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/PF-IconLogo.svg"
                          alt="PatternFly logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-8-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-8-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-8-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-8-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-8-check-label"
                        >Patternfly</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >PatternFly is a community project that promotes design commonality and improves user experience.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-9"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/PF-IconLogo.svg"
                          alt="PatternFly logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-9-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-9-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-9-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-9-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-9-check-label"
                        >Patternfly</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >PatternFly is a community project that promotes design commonality and improves user experience.</div>
                    </div>
                    <div
                      class="pf-v6-c-card pf-m-selectable-raised"
                      id="primary-detail-card-view-expanded-example-drawer-card-10"
                    >
                      <div class="pf-v6-c-card__header">
                        <img
                          src="/assets/images/PF-IconLogo.svg"
                          alt="PatternFly logo"
                        />
                        <div class="pf-v6-c-card__actions">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-card-view-expanded-example-drawer-card-10-toggle"
                          >
                            <span class="pf-v6-c-menu-toggle__icon">
                              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </span>
                          </button>
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="primary-detail-card-view-expanded-example-drawer-card-10-check"
                              name="primary-detail-card-view-expanded-example-drawer-card-10-check"
                              aria-labelledby="primary-detail-card-view-expanded-example-drawer-card-10-check-label"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="pf-v6-c-card__title">
                        <h2
                          class="pf-v6-c-card__title-text"
                          id="primary-detail-card-view-expanded-example-drawer-card-10-check-label"
                        >Patternfly</h2>
                        <div class="pf-v6-c-content">
                          <small>Provided by Red Hat</small>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-card__body"
                      >PatternFly is a community project that promotes design commonality and improves user experience.</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Panel -->
              <div class="pf-v6-c-drawer__panel">
                <!-- Panel header -->
                <div class="pf-v6-c-drawer__body">
                  <div class="pf-v6-l-flex pf-m-column">
                    <div class="pf-v6-l-flex__item">
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
                        <h2
                          class="pf-v6-c-title pf-m-lg"
                          id="primary-detail-card-view-expanded-example-drawer-drawer-label"
                        >Patternfly</h2>
                      </div>
                    </div>
                    <div class="pf-v6-l-flex__item">PatternFly elements</div>
                  </div>
                </div>

                <div class="pf-v6-c-drawer__body">
                  <div class="pf-v6-l-flex pf-m-column pf-m-space-items-lg">
                    <div class="pf-v6-l-flex__item">
                      <p>The content of the drawer really is up to you. It could have form fields, definition lists, text lists, labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and can also make the drawer scrollable.</p>
                    </div>
                    <div class="pf-v6-l-flex__item">
                      <div
                        class="pf-v6-c-progress"
                        id="primary-detail-card-view-expanded-example-drawer-progress-example1"
                      >
                        <div
                          class="pf-v6-c-progress__description"
                          id="primary-detail-card-view-expanded-example-drawer-progress-example1-description"
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
                          aria-labelledby="primary-detail-card-view-expanded-example-drawer-progress-example1-description"
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
                        class="pf-v6-c-progress"
                        id="primary-detail-card-view-expanded-example-drawer-progress-example2"
                      >
                        <div
                          class="pf-v6-c-progress__description"
                          id="primary-detail-card-view-expanded-example-drawer-progress-example2-description"
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
                          aria-labelledby="primary-detail-card-view-expanded-example-drawer-progress-example2-description"
                          aria-label="Progress 2"
                        >
                          <div
                            class="pf-v6-c-progress__indicator"
                            style="width:66%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
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

### Primary-detail card simple list expanded on mobile

```html isFullscreen
<div
  class="pf-v6-c-page"
  id="primary-detail-card-simple-list-on-mobile-example"
>
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-primary-detail-card-simple-list-on-mobile-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead"
    id="primary-detail-card-simple-list-on-mobile-example-masthead"
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
                id="linearGradient-primary-detail-card-simple-list-on-mobile-example-masthead"
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
                  fill="url(#linearGradient-primary-detail-card-simple-list-on-mobile-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-primary-detail-card-simple-list-on-mobile-example-masthead)"
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
        id="primary-detail-card-simple-list-on-mobile-example-masthead-toolbar"
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
        id="primary-detail-card-simple-list-on-mobile-example-primary-nav"
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
      id="main-content-primary-detail-card-simple-list-on-mobile-example"
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
      <div class="pf-v6-c-divider" role="separator"></div>
      <section class="pf-v6-c-page__main-section">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-c-card">
            <!-- Drawer -->
            <div class="pf-v6-c-drawer pf-m-expanded pf-m-static">
              <div class="pf-v6-c-drawer__main">
                <!-- Content -->
                <div class="pf-v6-c-drawer__content">
                  <div class="pf-v6-c-simple-list">
                    <section class="pf-v6-c-simple-list__section">
                      <h2 class="pf-v6-c-simple-list__title">Section title</h2>
                      <ul class="pf-v6-c-simple-list__list" role="list">
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link pf-m-current"
                            type="button"
                          >List item 1</button>
                        </li>
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 2</button>
                        </li>
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 3</button>
                        </li>
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 4</button>
                        </li>
                      </ul>
                    </section>
                    <section class="pf-v6-c-simple-list__section">
                      <h2 class="pf-v6-c-simple-list__title">Section title</h2>
                      <ul class="pf-v6-c-simple-list__list" role="list">
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 5</button>
                        </li>
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 6</button>
                        </li>
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 7</button>
                        </li>
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 8</button>
                        </li>
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 9</button>
                        </li>
                        <li class="pf-v6-c-simple-list__item">
                          <button
                            class="pf-v6-c-simple-list__item-link"
                            type="button"
                          >List item 10</button>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>

                <!-- Panel -->
                <div
                  class="pf-v6-c-drawer__panel pf-m-width-75-on-xl"
                  id="primary-detail-card-simple-list-on-mobile-example-drawer-panel"
                  aria-label="Panel"
                >
                  <!-- Panel header -->
                  <div class="pf-v6-c-drawer__body">
                    <div class="pf-v6-l-flex pf-m-column">
                      <div class="pf-v6-l-flex__item">
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
                          <h2
                            class="pf-v6-c-title pf-m-lg"
                            id="primary-detail-card-simple-list-on-mobile-example-drawer-drawer-label"
                          >Patternfly-elements</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pf-v6-c-drawer__body">
                    <div class="pf-v6-l-flex pf-m-column pf-m-space-items-lg">
                      <div class="pf-v6-l-flex__item">
                        <p>The content of the drawer really is up to you. It could have form fields, definition lists, text lists, labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and can also make the drawer scrollable.</p>
                      </div>
                      <div class="pf-v6-l-flex__item">
                        <div
                          class="pf-v6-c-progress"
                          id="primary-detail-card-simple-list-on-mobile-example-drawer-progress-example1"
                        >
                          <div
                            class="pf-v6-c-progress__description"
                            id="primary-detail-card-simple-list-on-mobile-example-drawer-progress-example1-description"
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
                            aria-labelledby="primary-detail-card-simple-list-on-mobile-example-drawer-progress-example1-description"
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
                          class="pf-v6-c-progress"
                          id="primary-detail-card-simple-list-on-mobile-example-drawer-progress-example2"
                        >
                          <div
                            class="pf-v6-c-progress__description"
                            id="primary-detail-card-simple-list-on-mobile-example-drawer-progress-example2-description"
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
                            aria-labelledby="primary-detail-card-simple-list-on-mobile-example-drawer-progress-example2-description"
                            aria-label="Progress 2"
                          >
                            <div
                              class="pf-v6-c-progress__indicator"
                              style="width:66%;"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

### Primary-detail card data list expanded on mobile

```html isFullscreen
<div class="pf-v6-c-page" id="primary-detail-card-data-list-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-primary-detail-card-data-list-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead"
    id="primary-detail-card-data-list-example-masthead"
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
                id="linearGradient-primary-detail-card-data-list-example-masthead"
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
                  fill="url(#linearGradient-primary-detail-card-data-list-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-primary-detail-card-data-list-example-masthead)"
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
        id="primary-detail-card-data-list-example-masthead-toolbar"
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
        id="primary-detail-card-data-list-example-primary-nav"
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
      id="main-content-primary-detail-card-data-list-example"
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
      <div class="pf-v6-c-divider" role="separator"></div>
      <section class="pf-v6-c-page__main-section">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-c-card">
            <!-- Drawer -->
            <div class="pf-v6-c-drawer pf-m-expanded pf-m-static">
              <div class="pf-v6-c-drawer__main">
                <!-- Content -->
                <div class="pf-v6-c-drawer__content">
                  <div class="pf-v6-c-drawer__body">
                    <div
                      class="pf-v6-c-toolbar"
                      id="primary-detail-card-data-list-example-drawer-toolbar-card-toolbar"
                    >
                      <div class="pf-v6-c-toolbar__content">
                        <div class="pf-v6-c-toolbar__content-section">
                          <div class="pf-v6-c-toolbar__item">
                            <button
                              class="pf-v6-c-menu-toggle"
                              type="button"
                              aria-expanded="false"
                              id="primary-detail-card-data-list-example-drawer-toolbar-card-toolbar-select-dropdown"
                              style="width: 150px"
                            >
                              <span class="pf-v6-c-menu-toggle__text">Dropdown</span>
                              <span class="pf-v6-c-menu-toggle__controls">
                                <span class="pf-v6-c-menu-toggle__toggle-icon">
                                  <i
                                    class="fas fa-caret-down fa-fw"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </span>
                            </button>
                          </div>
                          <div class="pf-v6-c-toolbar__item pf-m-pagination">
                            <div class="pf-v6-c-pagination">
                              <div class="pf-v6-c-pagination__total-items">
                                <b>1 - 10</b> of
                                <b>37</b>
                              </div>
                              <div class="pf-v6-c-pagination__page-menu">
                                <button
                                  class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
                                  type="button"
                                  aria-expanded="false"
                                  aria-label="Menu toggle"
                                  id="primary-detail-card-data-list-example-drawer-toolbar-card-toolbar-pagination-menu-toggle"
                                >
                                  <span class="pf-v6-c-menu-toggle__text">
                                    <b>1 - 10</b>&nbsp;of&nbsp;
                                    <b>36</b>
                                  </span>
                                  <span class="pf-v6-c-menu-toggle__controls">
                                    <span
                                      class="pf-v6-c-menu-toggle__toggle-icon"
                                    >
                                      <i
                                        class="fas fa-caret-down fa-fw"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
                          id="primary-detail-card-data-list-example-drawer-toolbar-card-toolbar-expandable-content"
                          hidden
                        ></div>
                      </div>
                    </div>
                    <ul
                      class="pf-v6-c-data-list"
                      role="list"
                      aria-label="Selectable rows data list example"
                      id="primary-detail-card-data-list-example-drawer-card-data-list"
                    >
                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-1"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-1"
                              >Node 1</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item pf-m-selected"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-2"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-2"
                              >Node 2</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-3"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-3"
                              >Node 3</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-4"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-4"
                              >Node 4</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-5"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-5"
                              >Node 5</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-6"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-6"
                              >Node 6</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-7"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-7"
                              >Node 7</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-8"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-8"
                              >Node 8</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-9"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-9"
                              >Node 9</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="pf-v6-c-data-list__item"
                        aria-labelledby="primary-detail-card-data-list-example-drawer-card-data-list-item-10"
                      >
                        <div class="pf-v6-c-data-list__item-row">
                          <div class="pf-v6-c-data-list__item-content">
                            <div class="pf-v6-c-data-list__cell">
                              <div
                                id="primary-detail-card-data-list-example-drawer-card-data-list-item-10"
                              >Node 10</div>
                              <a href="#">siemur/test-space</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Panel -->
                <div
                  class="pf-v6-c-drawer__panel pf-m-width-75-on-2xl"
                  id="primary-detail-card-data-list-example-drawer-panel"
                  aria-label="Panel"
                >
                  <!-- Panel header -->
                  <div class="pf-v6-c-drawer__body">
                    <div class="pf-v6-l-flex pf-m-column">
                      <div class="pf-v6-l-flex__item">
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
                          <h2
                            class="pf-v6-c-title pf-m-lg"
                            id="primary-detail-card-data-list-example-drawer-drawer-label"
                          >Patternfly-elements</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pf-v6-c-drawer__body">
                    <div class="pf-v6-l-flex pf-m-column pf-m-space-items-lg">
                      <div class="pf-v6-l-flex__item">
                        <p>The content of the drawer really is up to you. It could have form fields, definition lists, text lists, labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and can also make the drawer scrollable.</p>
                      </div>
                      <div class="pf-v6-l-flex__item">
                        <div
                          class="pf-v6-c-progress"
                          id="primary-detail-card-data-list-example-drawer-progress-example1"
                        >
                          <div
                            class="pf-v6-c-progress__description"
                            id="primary-detail-card-data-list-example-drawer-progress-example1-description"
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
                            aria-labelledby="primary-detail-card-data-list-example-drawer-progress-example1-description"
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
                          class="pf-v6-c-progress"
                          id="primary-detail-card-data-list-example-drawer-progress-example2"
                        >
                          <div
                            class="pf-v6-c-progress__description"
                            id="primary-detail-card-data-list-example-drawer-progress-example2-description"
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
                            aria-labelledby="primary-detail-card-data-list-example-drawer-progress-example2-description"
                            aria-label="Progress 2"
                          >
                            <div
                              class="pf-v6-c-progress__indicator"
                              style="width:66%;"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

### Inline modifier

```html isFullscreen
<div class="pf-v6-c-page" id="primary-detail-inline-modifier-example">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-primary-detail-inline-modifier-example"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>
  <header
    class="pf-v6-c-masthead"
    id="primary-detail-inline-modifier-example-masthead"
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
                id="linearGradient-primary-detail-inline-modifier-example-masthead"
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
                  fill="url(#linearGradient-primary-detail-inline-modifier-example-masthead)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-primary-detail-inline-modifier-example-masthead)"
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
        id="primary-detail-inline-modifier-example-masthead-toolbar"
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
        id="primary-detail-inline-modifier-example-primary-nav"
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
      id="main-content-primary-detail-inline-modifier-example"
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
      <div class="pf-v6-c-divider" role="separator"></div>
      <div class="pf-v6-c-drawer pf-m-expanded pf-m-inline-on-2xl">
        <div class="pf-v6-c-drawer__main">
          <!-- Content -->
          <div class="pf-v6-c-drawer__content">
            <div class="pf-v6-c-drawer__body">
              <div
                class="pf-v6-c-toolbar"
                id="primary-detail-inline-modifier-example-drawer-toolbar"
              >
                <div class="pf-v6-c-toolbar__content">
                  <div class="pf-v6-c-toolbar__content-section pf-m-nowrap">
                    <div class="pf-v6-c-toolbar__item">
                      <button
                        class="pf-v6-c-menu-toggle"
                        type="button"
                        aria-expanded="false"
                        id="primary-detail-inline-modifier-example-drawer-toolbar-select-status"
                        style="width: 150px"
                      >
                        <span class="pf-v6-c-menu-toggle__icon">
                          <i class="fas fa-bookmark" aria-hidden="true"></i>
                        </span>
                        <span class="pf-v6-c-menu-toggle__text">Status</span>
                        <span class="pf-v6-c-menu-toggle__controls">
                          <span class="pf-v6-c-menu-toggle__toggle-icon">
                            <i
                              class="fas fa-caret-down fa-fw"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </button>
                    </div>

                    <div
                      class="pf-v6-c-overflow-menu"
                      id="primary-detail-inline-modifier-example-drawer-toolbar-overflow-menu"
                    >
                      <div
                        class="pf-v6-c-overflow-menu__content pf-v6-u-display-none pf-v6-u-display-flex-on-lg"
                      >
                        <div
                          class="pf-v6-c-overflow-menu__group pf-m-button-group"
                        >
                          <div class="pf-v6-c-overflow-menu__item">
                            <button
                              class="pf-v6-c-button pf-m-primary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Create instance</span>
                            </button>
                          </div>

                          <div class="pf-v6-c-overflow-menu__item">
                            <button
                              class="pf-v6-c-button pf-m-secondary"
                              type="button"
                            >
                              <span class="pf-v6-c-button__text">Action</span>
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
                          id="primary-detail-inline-modifier-example-drawer-toolbar-overflow-menu-toggle"
                        >
                          <span class="pf-v6-c-menu-toggle__icon">
                            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="pf-v6-c-toolbar__item pf-m-pagination">
                      <div class="pf-v6-c-pagination pf-m-compact">
                        <div class="pf-v6-c-pagination__page-menu">
                          <button
                            class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
                            type="button"
                            aria-expanded="false"
                            aria-label="Menu toggle"
                            id="primary-detail-inline-modifier-example-drawer-toolbar-top-pagination"
                          >
                            <span class="pf-v6-c-menu-toggle__text">
                              <b>1 - 10</b>&nbsp;of&nbsp;
                              <b>36</b>
                            </span>
                            <span class="pf-v6-c-menu-toggle__controls">
                              <span class="pf-v6-c-menu-toggle__toggle-icon">
                                <i
                                  class="fas fa-caret-down fa-fw"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </span>
                          </button>
                        </div>
                        <nav
                          class="pf-v6-c-pagination__nav"
                          aria-label="Toolbar top pagination"
                        >
                          <div
                            class="pf-v6-c-pagination__nav-control pf-m-prev"
                          >
                            <button
                              class="pf-v6-c-button pf-m-plain"
                              type="button"
                              disabled
                              aria-label="Go to previous page"
                            >
                              <span class="pf-v6-c-button__icon">
                                <i class="fas fa-angle-left" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                          <div
                            class="pf-v6-c-pagination__nav-control pf-m-next"
                          >
                            <button
                              class="pf-v6-c-button pf-m-plain"
                              type="button"
                              aria-label="Go to next page"
                            >
                              <span class="pf-v6-c-button__icon">
                                <i
                                  class="fas fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div
                    class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
                    id="primary-detail-inline-modifier-example-drawer-toolbar-expandable-content"
                    hidden
                  ></div>
                </div>
              </div>
              <ul
                class="pf-v6-c-data-list"
                role="list"
                aria-label="Simple data list example"
                id="primary-detail-inline-modifier-example-data-list"
              >
                <li
                  class="pf-v6-c-data-list__item"
                  aria-labelledby="primary-detail-inline-modifier-example-data-list-item-1"
                >
                  <div class="pf-v6-c-data-list__item-row">
                    <div class="pf-v6-c-data-list__item-content">
                      <div class="pf-v6-c-data-list__cell pf-m-align-left">
                        <div
                          class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                          >
                            <div class="pf-v6-l-flex__item">
                              <p
                                id="primary-detail-inline-modifier-example-data-list-item-1"
                              >patternfly</p>
                            </div>
                            <div class="pf-v6-l-flex__item">
                              <small>
                                Working repo for PatternFly 4
                                <a href>https://pf4.patternfly.org/</a>
                              </small>
                            </div>
                          </div>
                          <div class="pf-v6-l-flex pf-m-wrap">
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-code-branch"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>10</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i class="fas fa-code" aria-hidden="true"></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>4</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i class="fas fa-cube" aria-hidden="true"></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>5</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex__item">Updated 2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                      >
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Action</span>
                        </button>
                        <button class="pf-v6-c-button pf-m-link" type="button">
                          <span class="pf-v6-c-button__text">Link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  class="pf-v6-c-data-list__item"
                  aria-labelledby="primary-detail-inline-modifier-example-data-list-item-2"
                >
                  <div class="pf-v6-c-data-list__item-row">
                    <div class="pf-v6-c-data-list__item-content">
                      <div class="pf-v6-c-data-list__cell pf-m-align-left">
                        <div
                          class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                          >
                            <div class="pf-v6-l-flex__item">
                              <p
                                id="primary-detail-inline-modifier-example-data-list-item-2"
                              >patternfly-elements</p>
                            </div>
                            <div class="pf-v6-l-flex__item">
                              <small>PatternFly elements</small>
                            </div>
                          </div>
                          <div class="pf-v6-l-flex pf-m-wrap">
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-code-branch"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>5</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i class="fas fa-code" aria-hidden="true"></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>9</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i class="fas fa-cube" aria-hidden="true"></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>2</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-check-circle"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>11</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>4</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-times-circle"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>1</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex__item">Updated 2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                      >
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Action</span>
                        </button>
                        <button class="pf-v6-c-button pf-m-link" type="button">
                          <span class="pf-v6-c-button__text">Link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  class="pf-v6-c-data-list__item"
                  aria-labelledby="primary-detail-inline-modifier-example-data-list-item-3"
                >
                  <div class="pf-v6-c-data-list__item-row">
                    <div class="pf-v6-c-data-list__item-content">
                      <div class="pf-v6-c-data-list__cell pf-m-align-left">
                        <p
                          id="primary-detail-inline-modifier-example-data-list-item-3"
                        >patternfly-unified-design-kit</p>
                      </div>
                      <div
                        class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                      >
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Action</span>
                        </button>
                        <button class="pf-v6-c-button pf-m-link" type="button">
                          <span class="pf-v6-c-button__text">Link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  class="pf-v6-c-data-list__item"
                  aria-labelledby="primary-detail-inline-modifier-example-data-list-item-4"
                >
                  <div class="pf-v6-c-data-list__item-row">
                    <div class="pf-v6-c-data-list__item-content">
                      <div class="pf-v6-c-data-list__cell pf-m-align-left">
                        <div
                          class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                          >
                            <div class="pf-v6-l-flex__item">
                              <p
                                id="primary-detail-inline-modifier-example-data-list-item-4"
                              >patternfly</p>
                            </div>
                            <div class="pf-v6-l-flex__item">
                              <small>
                                Working repo for PatternFly 4
                                <a href>https://pf4.patternfly.org/</a>
                              </small>
                            </div>
                          </div>
                          <div class="pf-v6-l-flex pf-m-wrap">
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-code-branch"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>10</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i class="fas fa-code" aria-hidden="true"></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>4</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i class="fas fa-cube" aria-hidden="true"></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>5</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex__item">Updated 2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                      >
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Action</span>
                        </button>
                        <button class="pf-v6-c-button pf-m-link" type="button">
                          <span class="pf-v6-c-button__text">Link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  class="pf-v6-c-data-list__item"
                  aria-labelledby="primary-detail-inline-modifier-example-data-list-item-5"
                >
                  <div class="pf-v6-c-data-list__item-row">
                    <div class="pf-v6-c-data-list__item-content">
                      <div class="pf-v6-c-data-list__cell pf-m-align-left">
                        <div
                          class="pf-v6-l-flex pf-m-column pf-m-space-items-md"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-column pf-m-space-items-none"
                          >
                            <div class="pf-v6-l-flex__item">
                              <p
                                id="primary-detail-inline-modifier-example-data-list-item-5"
                              >patternfly-elements</p>
                            </div>
                            <div class="pf-v6-l-flex__item">
                              <small>PatternFly elements</small>
                            </div>
                          </div>
                          <div class="pf-v6-l-flex pf-m-wrap">
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-code-branch"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>5</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i class="fas fa-code" aria-hidden="true"></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>9</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i class="fas fa-cube" aria-hidden="true"></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>2</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-check-circle"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>11</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-exclamation-triangle"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>4</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex pf-m-space-items-xs">
                              <div class="pf-v6-l-flex__item">
                                <i
                                  class="fas fa-times-circle"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="pf-v6-l-flex__item">
                                <span>1</span>
                              </div>
                            </div>
                            <div class="pf-v6-l-flex__item">Updated 2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="pf-v6-c-data-list__cell pf-m-align-right pf-m-no-fill"
                      >
                        <button
                          class="pf-v6-c-button pf-m-secondary"
                          type="button"
                        >
                          <span class="pf-v6-c-button__text">Action</span>
                        </button>
                        <button class="pf-v6-c-button pf-m-link" type="button">
                          <span class="pf-v6-c-button__text">Link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Panel -->
          <div class="pf-v6-c-drawer__panel">
            <!-- Panel header -->
            <div class="pf-v6-c-drawer__body">
              <div class="pf-v6-l-flex pf-m-column">
                <div class="pf-v6-l-flex__item">
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
                    <h2
                      class="pf-v6-c-title pf-m-lg"
                      id="primary-detail-inline-modifier-example-drawer-drawer-label"
                    >Node 2</h2>
                  </div>
                </div>
                <div class="pf-v6-l-flex__item">
                  <a href="#">siemur/test-space</a>
                </div>
              </div>
            </div>

            <!-- Tabs -->
            <div class="pf-v6-c-drawer__body pf-m-no-padding">
              <div
                class="pf-v6-c-tabs pf-m-box pf-m-fill"
                role="region"
                id="primary-detail-inline-modifier-example-drawer-tabs"
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
                      aria-controls="primary-detail-inline-modifier-example-drawer-tabs-tab1-panel"
                      id="primary-detail-inline-modifier-example-drawer-tabs-tab1-link"
                    >
                      <span class="pf-v6-c-tabs__item-text">Overview</span>
                    </button>
                  </li>
                  <li class="pf-v6-c-tabs__item" role="presentation">
                    <button
                      type="button"
                      class="pf-v6-c-tabs__link"
                      role="tab"
                      aria-controls="primary-detail-inline-modifier-example-drawer-tabs-tab2-panel"
                      id="primary-detail-inline-modifier-example-drawer-tabs-tab2-link"
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

            <!-- Tab content -->
            <div class="pf-v6-c-drawer__body">
              <section
                class="pf-v6-c-tab-content"
                id="primary-detail-inline-modifier-example-drawer-tabs-tab1-panel"
                aria-labelledby="primary-detail-inline-modifier-example-drawer-tabs-tab1-link"
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
                        id="primary-detail-inline-modifier-example-drawer-progress-example1"
                      >
                        <div
                          class="pf-v6-c-progress__description"
                          id="primary-detail-inline-modifier-example-drawer-progress-example1-description"
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
                          aria-labelledby="primary-detail-inline-modifier-example-drawer-progress-example1-description"
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
                        id="primary-detail-inline-modifier-example-drawer-progress-example2"
                      >
                        <div
                          class="pf-v6-c-progress__description"
                          id="primary-detail-inline-modifier-example-drawer-progress-example2-description"
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
                          aria-labelledby="primary-detail-inline-modifier-example-drawer-progress-example2-description"
                          aria-label="Progress 2"
                        >
                          <div
                            class="pf-v6-c-progress__indicator"
                            style="width:66%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                class="pf-v6-c-tab-content"
                id="primary-detail-inline-modifier-example-drawer-tabs-tab2-panel"
                aria-labelledby="primary-detail-inline-modifier-example-drawer-tabs-tab2-link"
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
    </main>
  </div>
</div>

```

## Documentation

This demo implements the drawer in context of the page component.
