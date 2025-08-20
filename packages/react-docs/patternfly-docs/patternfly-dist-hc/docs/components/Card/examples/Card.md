---
id: Card
section: components
cssPrefix: pf-v6-c-card
---import './Card.css'

## Examples

### Basic

```html
<div class="pf-v6-c-card" id="card-basic-example">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### With image and action

```html
<div class="pf-v6-c-card" id="card-action-example-1">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-main">
      <svg height="70px" viewBox="0 0 679 158">
        <title>PF-HorizontalLogo-Color</title>
        <defs>
          <linearGradient
            x1="68%"
            y1="2.25860997e-13%"
            x2="32%"
            y2="100%"
            id="linearGradient-card-action-example-1"
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
            <polygon points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25" />
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
              fill="url(#linearGradient-card-action-example-1)"
            />
            <path
              d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
              fill="url(#linearGradient-card-action-example-1)"
              transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Card menu toggle"
        id="card-action-example-1-menu-toggle-kebab"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-check pf-m-standalone">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-action-example-1-check"
          name="card-action-example-1-check"
          aria-labelledby="card-action-example-1"
        />
      </div>
    </div>
  </div>
  <div class="pf-v6-c-card__title">
    <h2
      class="pf-v6-c-card__title-text"
      id="card-action-example-1-check-label"
    >Title</h2>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### With title in head

```html
<div class="pf-v6-c-card" id="card-action-example-2">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Card menu toggle"
        id="card-action-example-2-menu-toggle-kebab"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-check pf-m-standalone">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-action-example-2-check"
          name="card-action-example-2-check"
          aria-labelledby="card-action-example-2"
        />
      </div>
    </div>
    <div class="pf-v6-c-card__header-main">
      <div class="pf-v6-c-card__title">
        <h2
          class="pf-v6-c-card__title-text"
          id="card-action-example-2-check-label"
        >This is a really really really really really really really really really really long title</h2>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### With only actions in head (no title/footer)

```html
<div class="pf-v6-c-card" id="card-action-example-3">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Card menu toggle"
        id="card-action-example-3-menu-toggle-kebab"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-check pf-m-standalone">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-action-example-3-check"
          name="card-action-example-3-check"
          aria-labelledby="card-action-example-3"
        />
      </div>
    </div>
  </div>
  <div
    class="pf-v6-c-card__body"
    id="card-action-example-3-check-label"
  >This is the card body. There are only actions in the card head.</div>
</div>

```

### Card with header that wraps

```html
<div class="pf-v6-c-card">
  <div class="pf-v6-c-card__header pf-m-wrap">
    <div class="pf-v6-c-card__actions pf-m-no-offset">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Primary action</span>
      </button>

      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Secondary action</span>
      </button>

      <button class="pf-v6-c-button pf-m-tertiary" type="button">
        <span class="pf-v6-c-button__text">Tertiary action</span>
      </button>
    </div>
    <div class="pf-v6-c-card__title">
      <h2
        class="pf-v6-c-card__title-text"
      >This is a longer card title that takes up more space</h2>
    </div>
  </div>
  <div class="pf-v6-c-card__body">This is the card body</div>
</div>

```

### Actions with no offset

```html
<div class="pf-v6-c-card" id="card-action-no-offset">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__actions pf-m-no-offset">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Action</span>
      </button>
    </div>
    <div class="pf-v6-c-card__header-main">
      <h1
        class="pf-v6-c-title pf-m-2xl"
        id="card-action-no-offset-check-label"
      >This is a card title</h1>
    </div>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### With only image in head

```html
<div class="pf-v6-c-card" id="card-image-head-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-main">
      <svg height="70px" viewBox="0 0 679 158">
        <title>PF-HorizontalLogo-Color</title>
        <defs>
          <linearGradient
            x1="68%"
            y1="2.25860997e-13%"
            x2="32%"
            y2="100%"
            id="linearGradient-card-image-head-example"
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
            <polygon points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25" />
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
              fill="url(#linearGradient-card-image-head-example)"
            />
            <path
              d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
              fill="url(#linearGradient-card-image-head-example)"
              transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
            />
          </g>
        </g>
      </svg>
    </div>
  </div>
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### With no footer

```html
<div class="pf-v6-c-card" id="card-no-footer-example">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body">This card has no footer</div>
</div>

```

### With no title

```html
<div class="pf-v6-c-card" id="card-no-title-example">
  <div class="pf-v6-c-card__body">This card has no title</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### With only a content section

```html
<div class="pf-v6-c-card" id="card-body-example">
  <div class="pf-v6-c-card__body">Body</div>
</div>

```

### With multiple body sections

```html
<div class="pf-v6-c-card" id="card-multiple-body-example">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### With only one body that fills

```html
<div class="pf-v6-c-card" id="card-body-fill-example">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body pf-m-no-fill">Body pf-m-no-fill</div>
  <div class="pf-v6-c-card__body pf-m-no-fill">Body pf-m-no-fill</div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### Compact

```html
<div class="pf-v6-c-card pf-m-compact" id="card-compact-example">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### Large

```html
<div class="pf-v6-c-card pf-m-display-lg" id="card-display-lg-example">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### Selectable

```html
<div class="pf-v6-l-gallery pf-m-gutter">
  <div class="pf-v6-c-card pf-m-selectable" id="card-selectable-example">
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="card-selectable-example-check"
              name="card-selectable-example-check"
              aria-labelledby="card-selectable-example"
            />
            <label
              class="pf-v6-c-check__label"
              for="card-selectable-example-check"
              id="card-selectable-example-check-label"
              name="card-selectable-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-selectable pf-m-disabled"
    id="card-selectable-example-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              disabled
              id="card-selectable-example-disabled-check"
              name="card-selectable-example-disabled-check"
              aria-labelledby="card-selectable-example-disabled"
            />
            <label
              class="pf-v6-c-check__label pf-m-disabled"
              for="card-selectable-example-disabled-check"
              id="card-selectable-example-disabled-check-label"
              name="card-selectable-example-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-selectable-example-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-selectable pf-m-selected pf-m-disabled"
    id="card-selectable-example-selected-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              checked
              disabled
              id="card-selectable-example-selected-disabled-check"
              name="card-selectable-example-selected-disabled-check"
              aria-labelledby="card-selectable-example-selected-disabled"
            />
            <label
              class="pf-v6-c-check__label pf-m-disabled"
              for="card-selectable-example-selected-disabled-check"
              id="card-selectable-example-selected-disabled-check-label"
              name="card-selectable-example-selected-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-selectable-example-selected-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Selected but disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Selectable secondary style

```html
<div class="pf-v6-l-gallery pf-m-gutter">
  <div
    class="pf-v6-c-card pf-m-selectable pf-m-secondary"
    id="card-selectable-secondary-example"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="card-selectable-secondary-example-check"
              name="card-selectable-secondary-example-check"
              aria-labelledby="card-selectable-secondary-example"
            />
            <label
              class="pf-v6-c-check__label"
              for="card-selectable-secondary-example-check"
              id="card-selectable-secondary-example-check-label"
              name="card-selectable-secondary-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-selectable pf-m-disabled pf-m-secondary"
    id="card-selectable-secondary-example-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              disabled
              id="card-selectable-secondary-example-disabled-check"
              name="card-selectable-secondary-example-disabled-check"
              aria-labelledby="card-selectable-secondary-example-disabled"
            />
            <label
              class="pf-v6-c-check__label pf-m-disabled"
              for="card-selectable-secondary-example-disabled-check"
              id="card-selectable-secondary-example-disabled-check-label"
              name="card-selectable-secondary-example-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-selectable-secondary-example-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-selectable pf-m-selected pf-m-disabled pf-m-secondary"
    id="card-selectable-secondary-example-selected-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              checked
              disabled
              id="card-selectable-secondary-example-selected-disabled-check"
              name="card-selectable-secondary-example-selected-disabled-check"
              aria-labelledby="card-selectable-secondary-example-selected-disabled"
            />
            <label
              class="pf-v6-c-check__label pf-m-disabled"
              for="card-selectable-secondary-example-selected-disabled-check"
              id="card-selectable-secondary-example-selected-disabled-check-label"
              name="card-selectable-secondary-example-selected-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-selectable-secondary-example-selected-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Selected but disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Single selectable

```html
<div class="pf-v6-l-gallery pf-m-gutter">
  <div class="pf-v6-c-card pf-m-selectable" id="card-single-selectable-example">
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-radio">
            <input
              class="pf-v6-c-radio__input"
              type="radio"
              id="card-single-selectable-example-radio"
              name="card-single-selectable-example-radio"
              aria-labelledby="card-single-selectable-example"
            />
            <label
              class="pf-v6-c-radio__label"
              for="card-single-selectable-example-radio"
              id="card-single-selectable-example-radio-label"
              name="card-single-selectable-example-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-single-selectable-example-title"
        >
          <h2 class="pf-v6-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-selectable pf-m-disabled"
    id="card-single-selectable-example-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-radio">
            <input
              class="pf-v6-c-radio__input"
              type="radio"
              id="card-single-selectable-example-disabled-radio"
              name="card-single-selectable-example-disabled-radio"
              aria-labelledby="card-single-selectable-example-disabled"
              disabled
            />
            <label
              class="pf-v6-c-radio__label pf-m-disabled"
              for="card-single-selectable-example-disabled-radio"
              id="card-single-selectable-example-disabled-radio-label"
              name="card-single-selectable-example-disabled-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-single-selectable-example-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-selectable pf-m-selected pf-m-disabled"
    id="card-single-selectable-example-selected-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-radio">
            <input
              class="pf-v6-c-radio__input"
              type="radio"
              id="card-single-selectable-example-selected-disabled-radio"
              name="card-single-selectable-example-selected-disabled-radio"
              aria-labelledby="card-single-selectable-example-selected-disabled"
              disabled
              checked
            />
            <label
              class="pf-v6-c-radio__label pf-m-disabled"
              for="card-single-selectable-example-selected-disabled-radio"
              id="card-single-selectable-example-selected-disabled-radio-label"
              name="card-single-selectable-example-selected-disabled-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-single-selectable-example-selected-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Selected but disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Actionable (button)

```html
<div class="pf-v6-l-gallery pf-m-gutter">
  <div class="pf-v6-c-card pf-m-clickable" id="card-actionable-button-example">
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <button
            class="pf-v6-c-card__clickable-action"
            type="button"
            aria-labelledby="card-actionable-button-example"
          ></button>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-actionable-button-example-title"
        >
          <h2 class="pf-v6-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-current"
    id="card-actionable-button-example-clicked"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <button
            class="pf-v6-c-card__clickable-action"
            type="button"
            aria-labelledby="card-actionable-button-example-clicked"
          ></button>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-actionable-button-example-clicked-title"
        >
          <h2 class="pf-v6-c-card__title-text">Title (clicked)</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-disabled"
    id="card-actionable-button-example-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <button
            class="pf-v6-c-card__clickable-action"
            type="button"
            aria-labelledby="card-actionable-button-example-disabled"
            disabled
          ></button>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-actionable-button-example-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Actionable (link)

```html
<div class="pf-v6-l-gallery pf-m-gutter">
  <div class="pf-v6-c-card pf-m-clickable" id="card-actionable-link-example">
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <a
            class="pf-v6-c-card__clickable-action"
            aria-labelledby="card-actionable-link-example"
            href="#"
          ></a>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-actionable-link-example-title"
        >
          <h2 class="pf-v6-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-disabled"
    id="card-actionable-link-example-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <a
            class="pf-v6-c-card__clickable-action pf-m-disabled"
            tabindex="-1"
            aria-disabled="true"
            aria-labelledby="card-actionable-link-example-disabled"
            href="#"
          ></a>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-actionable-link-example-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Actionable secondary style

```html
<div class="pf-v6-l-gallery pf-m-gutter">
  <div
    class="pf-v6-c-card pf-m-clickable pf-m-secondary"
    id="card-clickable-secondary-example"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-radio pf-m-standalone">
            <input
              class="pf-v6-c-radio__input pf-v6-screen-reader"
              type="radio"
              id="card-clickable-secondary-example-sr-only-radio"
              name="card-clickable-secondary-example-sr-only-radio"
              aria-labelledby="card-clickable-secondary-example"
            />

            <label
              class="pf-v6-c-radio__label"
              for="card-clickable-secondary-example-sr-only-radio"
              id="card-clickable-secondary-example-sr-only-radio-label"
              name="card-clickable-secondary-example-sr-only-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-secondary-example-title"
        >
          <h2 class="pf-v6-c-card__title-text">Title</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-disabled pf-m-secondary"
    id="card-clickable-secondary-example-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-radio pf-m-standalone">
            <input
              class="pf-v6-c-radio__input pf-v6-screen-reader"
              type="radio"
              id="card-clickable-secondary-example-disabled-sr-only-radio"
              name="card-clickable-secondary-example-disabled-sr-only-radio"
              aria-labelledby="card-clickable-secondary-example-disabled"
              disabled
            />

            <label
              class="pf-v6-c-radio__label pf-m-disabled"
              for="card-clickable-secondary-example-disabled-sr-only-radio"
              id="card-clickable-secondary-example-disabled-sr-only-radio-label"
              name="card-clickable-secondary-example-disabled-sr-only-radio"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-secondary-example-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">Disabled card</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Actionable and selectable

```html
<div class="pf-v6-l-gallery pf-m-gutter">
  <div
    class="pf-v6-c-card pf-m-clickable pf-m-selectable"
    id="card-clickable-selectable-example"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="card-clickable-selectable-example-check"
              name="card-clickable-selectable-example-check"
              aria-labelledby="card-clickable-selectable-example"
            />
            <label
              class="pf-v6-c-check__label"
              for="card-clickable-selectable-example-check"
              id="card-clickable-selectable-example-check-label"
              name="card-clickable-selectable-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-selectable-example-title"
        >
          <h2 class="pf-v6-c-card__title-text">
            <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Title</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-selectable pf-m-current"
    id="card-clickable-selectable-current-example"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="card-clickable-selectable-current-example-check"
              name="card-clickable-selectable-current-example-check"
              aria-labelledby="card-clickable-selectable-current-example"
            />
            <label
              class="pf-v6-c-check__label"
              for="card-clickable-selectable-current-example-check"
              id="card-clickable-selectable-current-example-check-label"
              name="card-clickable-selectable-current-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-selectable-current-example-title"
        >
          <h2 class="pf-v6-c-card__title-text">
            <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Current card (clicked)</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-selectable pf-m-disabled"
    id="card-clickable-selectable-example-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              disabled
              id="card-clickable-selectable-example-disabled-check"
              name="card-clickable-selectable-example-disabled-check"
              aria-labelledby="card-clickable-selectable-example-disabled"
            />
            <label
              class="pf-v6-c-check__label pf-m-disabled"
              for="card-clickable-selectable-example-disabled-check"
              id="card-clickable-selectable-example-disabled-check-label"
              name="card-clickable-selectable-example-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-selectable-example-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">
            <button
              class="pf-v6-c-button pf-m-inline pf-m-link"
              type="button"
              disabled
            >
              <span class="pf-v6-c-button__text">Disabled card</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-selectable pf-m-selected pf-m-disabled"
    id="card-clickable-selectable-example-selected-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              checked
              disabled
              id="card-clickable-selectable-example-selected-disabled-check"
              name="card-clickable-selectable-example-selected-disabled-check"
              aria-labelledby="card-clickable-selectable-example-selected-disabled"
            />
            <label
              class="pf-v6-c-check__label pf-m-disabled"
              for="card-clickable-selectable-example-selected-disabled-check"
              id="card-clickable-selectable-example-selected-disabled-check-label"
              name="card-clickable-selectable-example-selected-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-selectable-example-selected-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">
            <button
              class="pf-v6-c-button pf-m-inline pf-m-link"
              type="button"
              disabled
            >
              <span class="pf-v6-c-button__text">Selected but disabled card</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Actionable and selectable secondary style

```html
<div class="pf-v6-l-gallery pf-m-gutter">
  <div
    class="pf-v6-c-card pf-m-clickable pf-m-selectable pf-m-secondary"
    id="card-clickable-selectable-secondary-example"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="card-clickable-selectable-secondary-example-check"
              name="card-clickable-selectable-secondary-example-check"
              aria-labelledby="card-clickable-selectable-secondary-example"
            />
            <label
              class="pf-v6-c-check__label"
              for="card-clickable-selectable-secondary-example-check"
              id="card-clickable-selectable-secondary-example-check-label"
              name="card-clickable-selectable-secondary-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-selectable-secondary-example-title"
        >
          <h2 class="pf-v6-c-card__title-text">
            <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Title</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-selectable pf-m-current pf-m-secondary"
    id="card-clickable-selectable-secondary-current-example"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="card-clickable-selectable-secondary-current-example-check"
              name="card-clickable-selectable-secondary-current-example-check"
              aria-labelledby="card-clickable-selectable-secondary-current-example"
            />
            <label
              class="pf-v6-c-check__label"
              for="card-clickable-selectable-secondary-current-example-check"
              id="card-clickable-selectable-secondary-current-example-check-label"
              name="card-clickable-selectable-secondary-current-example-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-selectable-secondary-current-example-title"
        >
          <h2 class="pf-v6-c-card__title-text">
            <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
              <span class="pf-v6-c-button__text">Current card (clicked)</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-selectable pf-m-disabled pf-m-secondary"
    id="card-clickable-selectable-secondary-example-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              disabled
              id="card-clickable-selectable-secondary-example-disabled-check"
              name="card-clickable-selectable-secondary-example-disabled-check"
              aria-labelledby="card-clickable-selectable-secondary-example-disabled"
            />
            <label
              class="pf-v6-c-check__label pf-m-disabled"
              for="card-clickable-selectable-secondary-example-disabled-check"
              id="card-clickable-selectable-secondary-example-disabled-check-label"
              name="card-clickable-selectable-secondary-example-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-selectable-secondary-example-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">
            <button
              class="pf-v6-c-button pf-m-inline pf-m-link"
              type="button"
              disabled
            >
              <span class="pf-v6-c-button__text">Disabled card</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>

  <div
    class="pf-v6-c-card pf-m-clickable pf-m-selectable pf-m-selected pf-m-disabled pf-m-secondary"
    id="card-clickable-selectable-secondary-example-selected-disabled"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <div class="pf-v6-c-card__selectable-actions">
          <div class="pf-v6-c-check">
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              checked
              disabled
              id="card-clickable-selectable-secondary-example-selected-disabled-check"
              name="card-clickable-selectable-secondary-example-selected-disabled-check"
              aria-labelledby="card-clickable-selectable-secondary-example-selected-disabled"
            />
            <label
              class="pf-v6-c-check__label pf-m-disabled"
              for="card-clickable-selectable-secondary-example-selected-disabled-check"
              id="card-clickable-selectable-secondary-example-selected-disabled-check-label"
              name="card-clickable-selectable-secondary-example-selected-disabled-check"
            ></label>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-clickable-selectable-secondary-example-selected-disabled-title"
        >
          <h2 class="pf-v6-c-card__title-text">
            <button
              class="pf-v6-c-button pf-m-inline pf-m-link"
              type="button"
              disabled
            >
              <span class="pf-v6-c-button__text">Selected but disabled card</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Secondary

```html
<div class="pf-v6-c-card pf-m-secondary" id="card-secondary-example">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### Plain

```html
<div class="pf-v6-c-card pf-m-plain" id="card-plain-example">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### Expandable

```html
<div class="pf-v6-c-card" id="card-expandable-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        id="card-expandable-example-toggle"
        type="button"
        aria-labelledby="card-expandable-example-title card-expandable-example-toggle"
        aria-label="Details"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-card__header-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Card menu toggle"
        id="card-expandable-example-menu-toggle-kebab"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-check pf-m-standalone">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-expandable-example-check"
          name="card-expandable-example-check"
          aria-labelledby="card-expandable-example"
        />
      </div>
    </div>
    <div class="pf-v6-c-card__header-main">
      <div class="pf-v6-c-card__title">
        <h2
          class="pf-v6-c-card__title-text"
          id="card-expandable-example-title"
        >Title</h2>
      </div>
    </div>
  </div>
</div>

```

### Expandable with image

```html
<div class="pf-v6-c-card" id="card-expandable-image-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        id="card-expandable-image-example-toggle"
        type="button"
        aria-labelledby="card-expandable-image-example-title card-expandable-image-example-toggle"
        aria-label="Details"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-card__header-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-card__header-main">
      <img
        src="/assets/images/PF-IconLogo.svg"
        alt="PatternFly logo"
        width="27px"
      />
    </div>
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Card menu toggle"
        id="card-expandable-image-example-menu-toggle-kebab"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-check pf-m-standalone">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-expandable-image-example-check"
          name="card-expandable-image-example-check"
          aria-labelledby="card-expandable-image-example"
        />
      </div>
    </div>
  </div>
</div>

```

### Expanded

```html
<div class="pf-v6-c-card pf-m-expanded" id="card-expanded-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        id="card-expanded-example-toggle"
        type="button"
        aria-labelledby="card-expanded-example-title card-expanded-example-toggle"
        aria-label="Details"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-card__header-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Card menu toggle"
        id="card-expanded-example-menu-toggle-kebab"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-check pf-m-standalone">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-expanded-example-check"
          name="card-expanded-example-check"
          aria-labelledby="card-expanded-example"
        />
      </div>
    </div>
    <div class="pf-v6-c-card__header-main">
      <h2
        class="pf-v6-c-card__title-text"
        id="card-expanded-example-title"
      >Title</h2>
    </div>
  </div>
  <div class="pf-v6-c-card__expandable-content">
    <div class="pf-v6-c-card__body">Body</div>
    <div class="pf-v6-c-card__footer">Footer</div>
  </div>
</div>

```

### Full height card

```html
<div class="pf-v6-c-card pf-m-full-height" id="card-full-height-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Card menu toggle"
        id="card-full-height-example-menu-toggle-kebab"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-check pf-m-standalone">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-full-height-example-check"
          name="card-full-height-example-check"
          aria-labelledby="card-full-height-example"
        />
      </div>
    </div>
    <div class="pf-v6-c-card__header-main">
      <div class="pf-v6-c-card__title">
        <h2
          class="pf-v6-c-card__title-text"
          id="card-full-height-example-title&quot;"
        >Title</h2>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-card__body">Body</div>
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

### Expandable toggle on right

```html
<div class="pf-v6-c-card" id="card-toggle-on-right-example">
  <div class="pf-v6-c-card__header pf-m-toggle-right">
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Card menu toggle"
        id="card-toggle-on-right-example-menu-toggle-kebab"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-check pf-m-standalone">
        <input
          class="pf-v6-c-check__input"
          type="checkbox"
          aria-label="Standalone check"
          id="card-toggle-on-right-example-check"
          name="card-toggle-on-right-example-check"
          aria-labelledby="card-toggle-on-right-example"
        />
      </div>
    </div>
    <div class="pf-v6-c-card__header-main">
      <div class="pf-v6-c-card__title">
        <h2
          class="pf-v6-c-card__title-text"
          id="card-toggle-on-right-example-title"
        >Title</h2>
      </div>
    </div>
    <div class="pf-v6-c-card__header-toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        id="card-toggle-on-right-example-toggle"
        type="button"
        aria-labelledby="card-toggle-on-right-example-title card-toggle-on-right-example-toggle"
        aria-label="Details"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-card__header-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>

```

### Card with dividers between sections

```html
<div class="pf-v6-c-card">
  <div class="pf-v6-c-card__title">
    <h2 class="pf-v6-c-card__title-text">Title</h2>
  </div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-card__body">Body</div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-card__body">Body</div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-card__footer">Footer</div>
</div>

```

## Documentation

### Overview

A card is a generic rectangular container that can be used to build other components. Use a default card for regular page content and the compact variation for dashboard or small cards.

### Usage

| Class | Applied | Outcome |
| ---- | ---- | ---- |
| `.pf-v6-c-card` | `<div>` | Creates a card component.  **Required** |
| `.pf-v6-c-card__title` | `<div>` | Creates a card title container. |
| `.pf-v6-c-card__title-text` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<div>` | Creates a card title text element. |
| `.pf-v6-c-card__body` | `<div>` | Creates the body of a card. By default, the body element fills the available space in the card. You can use multiple `.pf-v6-c-card__body` elements. |
| `.pf-v6-c-card__footer` | `<div>` | Creates the footer of a card. |
| `.pf-v6-c-card__header` | `<div>` | Creates the header of the card where images, actions, and/or the card title can go. |
| `.pf-v6-c-card__header-toggle` | `<div>` | Creates the expandable card toggle. |
| `.pf-v6-c-card__header-toggle-icon` | `<span>` | Creates the expandable card toggle icon. |
| `.pf-v6-c-card__actions` | `<div>` | Creates an actions element to be used in the card header. |
| `.pf-v6-c-card__selectable-actions` | `<div>` | Creates an element to hold a checkbox or radio and the related label used to make a card selectable or clickable. |
| `.pf-v6-c-card__header-main` | `<div>` | Creates a wrapper element to be used in the card header when using an image, logo, or text. **Required if `.pf-v6-c-card__header` has content outside of a card header toggle or card header actions** |
| `.pf-v6-c-card__expandable-content` | `<div>` | Creates the expandable card's expandable content. |
| `.pf-v6-c-card__sr-input` | `<input>` | Creates an input which, when focused, makes a following `.pf-v6-c-card` appear focused. |
| `.pf-m-compact` | `.pf-v6-c-card` | Creates a compact variation of the card component that involves smaller font sizes and spacing. This variation is for use on dashboards and where a smaller card is preferred. |
| `.pf-m-display-lg` | `.pf-v6-c-card` | Creates a large variation of the card component that involves larger font sizes and spacing. This variation is for marketing use cases. |
| `.pf-m-wrap` | `.pf-v6-c-card__header` | Modifies the card header to wrap its children. |
| `.pf-m-no-fill` | `.pf-v6-c-card__body` | Sets a `.pf-v6-c-card__body` not to fill the available space in `.pf-v6-c-card`. `.pf-m-no-fill` can be added to multiple card bodies. |
| `.pf-m-selectable` | `.pf-v6-c-card` | Modifies a card to be selectable.  |
| `.pf-m-clickable` | `.pf-v6-c-card` | Modifies a card to be clickable. |
| `.pf-m-selected` | `.pf-v6-c-card` | Modifies a selectable card for selected state styling. Can be used in addition to indicating selection via the `.pf-v6-c-card__input`. |
| `.pf-m-current` | `.pf-v6-c-card` | Modifies a card that is both clickable and selectable for clicked state styling. |
| `.pf-m-disabled` | `.pf-v6-c-card` | Modifies a card so it is not selectable or clickable.  |
| `.pf-m-secondary` | `.pf-v6-c-card` | Modifies the card to have secondary styling. |
| `.pf-m-flat` | `.pf-v6-c-card` | Modifies the card to have a border instead of a shadow. `.pf-m-flat` is for use in layouts where cards are against a white background. |
| `.pf-m-rounded` | `.pf-v6-c-card` | Modifies the card to have rounded corners. |
| `.pf-m-plain` | `.pf-v6-c-card` | Modifies the card to have no box shadow and no background color. |
| `.pf-m-expanded` | `.pf-v6-c-card` | Modifies the card for the expanded state. |
| `.pf-m-toggle-right` | `.pf-v6-c-card__header` | Modifies the expandable card header toggle to be positioned at flex-end. |
| `.pf-m-full-height` | `.pf-v6-c-card` | Modifies the card to full height of its parent. |
| `.pf-m-no-offset` | `.pf-v6-c-card__actions` | Removes the negative vertical margins on the actions element intended to align the action content with the card title. |
