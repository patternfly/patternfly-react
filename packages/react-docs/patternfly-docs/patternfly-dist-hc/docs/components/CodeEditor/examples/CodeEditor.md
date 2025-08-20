---
id: Code editor
section: components
cssPrefix: pf-v6-c-code-editor
---import './CodeEditor.css';

## Examples

### Default

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-content">
      <div class="pf-v6-c-code-editor__controls">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Copy to clipboard"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-copy" aria-hidden="true"></i>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Download code"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-download" aria-hidden="true"></i>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Upload code"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-upload" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-code-editor__header-main"></div>
    </div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
        <i class="fas fa-code"></i>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">HTML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

### Read-only

```html
<div class="pf-v6-c-code-editor pf-m-read-only">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-content">
      <div class="pf-v6-c-code-editor__controls">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Copy to clipboard"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-copy" aria-hidden="true"></i>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Download code"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-download" aria-hidden="true"></i>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Upload code"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-upload" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-code-editor__header-main"></div>
    </div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
        <i class="fas fa-code"></i>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">HTML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

### Without actions

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-main"></div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
        <i class="fas fa-code" aria-hidden="true"></i>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">YAML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div class="pf-v6-c-code-editor__upload">
      <div class="pf-v6-c-empty-state">
        <div class="pf-v6-c-empty-state__content">
          <div class="pf-v6-c-empty-state__header">
            <div class="pf-v6-c-empty-state__icon">
              <i class="fas fa- fa-code" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-empty-state__title">
              <h4 class="pf-v6-c-empty-state__title-text">Start editing</h4>
            </div>
          </div>

          <div
            class="pf-v6-c-empty-state__body"
          >Drag a file here or browse to upload.</div>

          <div class="pf-v6-c-empty-state__footer">
            <div class="pf-v6-c-empty-state__actions">
              <button class="pf-v6-c-button pf-m-primary" type="button">
                <span class="pf-v6-c-button__text">Browse</span>
              </button>
            </div>
            <div class="pf-v6-c-empty-state__actions">
              <button class="pf-v6-c-button pf-m-link" type="button">
                <span class="pf-v6-c-button__text">Start from scratch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Drag file and hover over component

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-main"></div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
        <i class="fas fa-code" aria-hidden="true"></i>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">YAML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main pf-m-drag-hover">
    <div class="pf-v6-c-code-editor__upload">
      <div class="pf-v6-c-empty-state">
        <div class="pf-v6-c-empty-state__content">
          <div class="pf-v6-c-empty-state__header">
            <div class="pf-v6-c-empty-state__icon">
              <i class="fas fa- fa-code" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-empty-state__title">
              <h4 class="pf-v6-c-empty-state__title-text">Start editing</h4>
            </div>
          </div>

          <div
            class="pf-v6-c-empty-state__body"
          >Drag a file here or browse to upload.</div>

          <div class="pf-v6-c-empty-state__footer">
            <div class="pf-v6-c-empty-state__actions">
              <button class="pf-v6-c-button pf-m-primary" type="button">
                <span class="pf-v6-c-button__text">Browse</span>
              </button>
            </div>
            <div class="pf-v6-c-empty-state__actions">
              <button class="pf-v6-c-button pf-m-link" type="button">
                <span class="pf-v6-c-button__text">Start from scratch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### With optional header content and keyboard shortcuts

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-content">
      <div class="pf-v6-c-code-editor__controls">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Copy to clipboard"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-copy" aria-hidden="true"></i>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Download code"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-download" aria-hidden="true"></i>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Upload code"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-upload" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-code-editor__header-main">Header main content</div>
      <div class="pf-v6-c-code-editor__keyboard-shortcuts">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
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
          <span class="pf-v6-c-button__text">View shortcuts</span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
        <i class="fas fa-code"></i>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">HTML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

### With optional code editor container

This is an extra container used in React to prevent event propagation if upload is enabled or there is a provided empty state.

```html
<div class="pf-v6-c-code-editor">
  <div role="presentation" tabindex="0" class="pf-v6-c-code-editor__container">
    <div class="pf-v6-c-code-editor__header">
      <div class="pf-v6-c-code-editor__header-content">
        <div class="pf-v6-c-code-editor__controls">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Copy to clipboard"
          >
            <span class="pf-v6-c-button__icon">
              <i class="fas fa-copy" aria-hidden="true"></i>
            </span>
          </button>
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Download code"
          >
            <span class="pf-v6-c-button__icon">
              <i class="fas fa-download" aria-hidden="true"></i>
            </span>
          </button>
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Upload code"
          >
            <span class="pf-v6-c-button__icon">
              <i class="fas fa-upload" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-code-editor__tab">
        <span class="pf-v6-c-code-editor__tab-icon">
          <i class="fas fa-code"></i>
        </span>
        <span class="pf-v6-c-code-editor__tab-text">HTML</span>
      </div>
    </div>
    <div class="pf-v6-c-code-editor__main">
      <div class="pf-v6-c-code-editor__upload">
        <div class="pf-v6-c-empty-state">
          <div class="pf-v6-c-empty-state__content">
            <div class="pf-v6-c-empty-state__header">
              <div class="pf-v6-c-empty-state__icon">
                <i class="fas fa- fa-code" aria-hidden="true"></i>
              </div>
              <div class="pf-v6-c-empty-state__title">
                <h4 class="pf-v6-c-empty-state__title-text">Start editing</h4>
              </div>
            </div>

            <div
              class="pf-v6-c-empty-state__body"
            >Drag a file here or browse to upload.</div>

            <div class="pf-v6-c-empty-state__footer">
              <div class="pf-v6-c-empty-state__actions">
                <button class="pf-v6-c-button pf-m-primary" type="button">
                  <span class="pf-v6-c-button__text">Browse</span>
                </button>
              </div>
              <div class="pf-v6-c-empty-state__actions">
                <button class="pf-v6-c-button pf-m-link" type="button">
                  <span class="pf-v6-c-button__text">Start from scratch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### With full height modifier

```html
<div class="pf-v6-c-code-editor pf-m-full-height">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-content">
      <div class="pf-v6-c-code-editor__controls">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Copy to clipboard"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-copy" aria-hidden="true"></i>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Download code"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-download" aria-hidden="true"></i>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Upload code"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-upload" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-code-editor__header-main">Header main content</div>
      <div class="pf-v6-c-code-editor__keyboard-shortcuts">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
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
          <span class="pf-v6-c-button__text">View shortcuts</span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
        <i class="fas fa-code"></i>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">HTML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

## Documentation

### Usage

| Class                                      | Applied to | Outcome                                                                                       |
| ------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------- |
| `.pf-v6-c-code-editor`                     | `<div>`    | Initiates the code editor component. **Required**                                             |
| `.pf-v6-c-code-editor__header`             | `<div>`    | Initiates the code editor header used for the controls and tab elements. **Required**         |
| `.pf-v6-c-code-editor__header-content`     | `<div>`    | Initiates the code editor header content used for the controls and tab elements. **Required** |
| `.pf-v6-c-code-editor__main`               | `<div>`    | Initiates the main container for a code editor e.g. Monaco **Required**                       |
| `.pf-v6-c-code-editor__code`               | `<div>`    | Initiates the container for code without a JS code editor. Comes with PatternFly styling.     |
| `.pf-v6-c-code-editor__controls`           | `<div>`    | Initiates the code editor controls.                                                           |
| `.pf-v6-c-code-editor__header-main`        | `<div>`    | Initiates the code editor header content area.                                                |
| `.pf-v6-c-code-editor__keyboard-shortcuts` | `<div>`    | Initiates the code editor header keyboard shortcuts area.                                     |
| `.pf-v6-c-code-editor__tab`                | `<div>`    | Initiates the code editor tab.                                                                |
| `.pf-v6-c-code-editor__tab-text`           | `<span>`   | Initiates the code editor tab text.                                                           |
| `.pf-v6-c-code-editor__tab-icon`           | `<span>`   | Initiates the code editor tab icon.                                                           |
| `.pf-v6-c-code-editor__upload`             | `<div>`    | Initiates the code editor upload border.                                                      |
| `.pf-v6-c-code-editor__container`             | `<div>`    | Initiates the container used inside `.pf-v6-c-code-editor` in PatternFly React. This is used in PatternFly React to prevent event propagation if upload is enabled or there is a provided empty state.                                                      |
| `.pf-m-full-height`             | `.pf-v6-c-code-editor`    | Modifies for full-height style.                                                   |
