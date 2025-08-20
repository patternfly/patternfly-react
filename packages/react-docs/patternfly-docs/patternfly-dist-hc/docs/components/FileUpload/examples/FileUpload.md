---
id: Simple file upload
section: components
subsection: file-upload
cssPrefix: pf-v6-c-file-upload
---## Examples

### Basic file upload

```html
<div class="pf-v6-c-file-upload">
  <div class="pf-v6-c-file-upload__file-select">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control pf-m-readonly">
          <input
            readonly
            id="basic-file-upload-text-input"
            name="basic-file-upload-text-input"
            aria-label="Drag and drop a file or upload one"
            placeholder="Drag and drop a file or upload one"
            aria-describedby="basic-file-upload-browse"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          id="basic-file-upload-browse"
        >
          <span class="pf-v6-c-button__text">Upload</span>
        </button>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button class="pf-v6-c-button pf-m-control" type="button" disabled>
          <span class="pf-v6-c-button__text">Clear</span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-file-upload__file-details">
    <span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-vertical">
      <textarea
        id="basic-file-upload-file-details"
        name="basic-file-upload-file-details"
        aria-label="Empty text area"
      ></textarea>
    </span>
  </div>
</div>

```

### With helper text

```html
<div class="pf-v6-c-file-upload">
  <div class="pf-v6-c-file-upload__file-select">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control pf-m-readonly">
          <input
            readonly
            id="file-upload-helper-text-text-input"
            name="file-upload-helper-text-text-input"
            aria-label="Drag and drop a file or upload one"
            placeholder="Drag and drop a file or upload one"
            aria-describedby="file-upload-helper-text-browse"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          id="file-upload-helper-text-browse"
          aria-describedby="helper-text-example"
        >
          <span class="pf-v6-c-button__text">Upload</span>
        </button>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button class="pf-v6-c-button pf-m-control" type="button" disabled>
          <span class="pf-v6-c-button__text">Clear</span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-file-upload__file-details">
    <span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-vertical">
      <textarea
        id="file-upload-helper-text-file-details"
        name="file-upload-helper-text-file-details"
        aria-label="Uploaded file content"
      ></textarea>
    </span>
  </div>
  <div class="pf-v6-c-file-upload__helper-text">
    <div class="pf-v6-c-helper-text">
      <div class="pf-v6-c-helper-text__item" id="helper-text-example">
        <span class="pf-v6-c-helper-text__item-text">Upload a CSV file</span>
      </div>
    </div>
  </div>
</div>

```

### Upload complete non editable

```html
<div class="pf-v6-c-file-upload">
  <div class="pf-v6-c-file-upload__file-select">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control pf-m-readonly">
          <input
            readonly
            id="browsed-file-upload-complete-text-input"
            name="browsed-file-upload-complete-text-input"
            aria-label="Read only filename"
            value="Read only filename"
            aria-describedby="browsed-file-upload-complete-browse"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          id="browsed-file-upload-complete-browse"
        >
          <span class="pf-v6-c-button__text">Upload</span>
        </button>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button class="pf-v6-c-button pf-m-control" type="button">
          <span class="pf-v6-c-button__text">Clear</span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-file-upload__file-details">
    <span
      class="pf-v6-c-form-control pf-m-readonly pf-m-textarea pf-m-resize-vertical"
    >
      <textarea
        readonly
        id="browsed-file-upload-complete-file-details"
        name="browsed-file-upload-complete-file-details"
        aria-label="Text area"
      >Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  
  </textarea>
    </span>
  </div>
</div>

```

### Upload complete editable

```html
<div class="pf-v6-c-file-upload">
  <div class="pf-v6-c-file-upload__file-select">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control pf-m-readonly">
          <input
            readonly
            id="drop-file-text-input"
            name="drop-file-text-input"
            aria-label="Read only filename"
            value="Sample.txt"
            aria-describedby="drop-file-browse"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          id="drop-file-browse"
        >
          <span class="pf-v6-c-button__text">Upload</span>
        </button>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button class="pf-v6-c-button pf-m-control" type="button">
          <span class="pf-v6-c-button__text">Clear</span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-file-upload__file-details">
    <span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-vertical">
      <textarea
        id="drop-file-file-details"
        name="drop-file-file-details"
        aria-label="Text area"
      >Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  
  </textarea>
    </span>
  </div>
</div>

```

### Drag file hover component

```html
<div class="pf-v6-c-file-upload pf-m-drag-hover">
  <div class="pf-v6-c-file-upload__file-select">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control pf-m-readonly">
          <input
            readonly
            id="drag-file-hover-component-text-input"
            name="drag-file-hover-component-text-input"
            aria-label="Drag and drop a file or upload one"
            placeholder="Drag and drop a file or upload one"
            aria-describedby="drag-file-hover-component-browse"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          id="drag-file-hover-component-browse"
        >
          <span class="pf-v6-c-button__text">Upload</span>
        </button>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button class="pf-v6-c-button pf-m-control" type="button" disabled>
          <span class="pf-v6-c-button__text">Clear</span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-file-upload__file-details">
    <span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-vertical">
      <textarea
        id="drag-file-hover-component-file-details"
        name="drag-file-hover-component-file-details"
        aria-label="Empty text area"
      ></textarea>
    </span>
  </div>
</div>

```

### File upload in form with error

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-control">
      <div class="pf-v6-c-file-upload">
        <div class="pf-v6-c-file-upload__file-select">
          <div class="pf-v6-c-input-group">
            <div class="pf-v6-c-input-group__item pf-m-fill">
              <span class="pf-v6-c-form-control pf-m-readonly">
                <input
                  readonly
                  id="file-upload-error-text-input"
                  name="file-upload-error-text-input"
                  aria-label="File upload error"
                  value="Sample.png"
                  aria-describedby="file-upload-error-browse"
                />
              </span>
            </div>
            <div class="pf-v6-c-input-group__item">
              <button
                class="pf-v6-c-button pf-m-control"
                type="button"
                id="file-upload-error-browse"
                aria-describedby="with-error-example-helper-text"
              >
                <span class="pf-v6-c-button__text">Upload</span>
              </button>
            </div>
            <div class="pf-v6-c-input-group__item">
              <button class="pf-v6-c-button pf-m-control" type="button">
                <span class="pf-v6-c-button__text">Clear</span>
              </button>
            </div>
          </div>
        </div>
        <div
          class="pf-v6-c-file-upload__file-details"
          aria-describedby="with-error-example-helper-text"
          aria-invalid="true"
        >
          <span
            class="pf-v6-c-form-control pf-m-error pf-m-textarea pf-m-resize-vertical"
          >
            <textarea
              id="file-upload-error-file-details"
              name="file-upload-error-file-details"
              aria-label="Empty text area"
              aria-describedby="with-error-example-helper-text"
              aria-invalid="true"
            ></textarea>
            <span class="pf-v6-c-form-control__utilities">
              <span class="pf-v6-c-form-control__icon pf-m-status">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
            </span>
          </span>
        </div>

        <div class="pf-v6-c-file-upload__helper-text">
          <div class="pf-v6-c-helper-text">
            <div
              class="pf-v6-c-helper-text__item pf-m-error"
              id="with-error-example-helper-text"
            >
              <span class="pf-v6-c-helper-text__item-icon">
                <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <span
                class="pf-v6-c-helper-text__item-text"
              >Must be a CSV file no larger than 1 KB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

```

### File upload loading

```html
<div class="pf-v6-c-file-upload pf-m-loading">
  <div class="pf-v6-c-file-upload__file-select">
    <div class="pf-v6-c-input-group">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <span class="pf-v6-c-form-control pf-m-readonly">
          <input
            readonly
            id="file-upload-loading-text-input"
            name="file-upload-loading"
            aria-label="Read only filename"
            value="Sample.png"
            aria-describedby="file-upload-loading-browse"
          />
        </span>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button
          class="pf-v6-c-button pf-m-control"
          type="button"
          disabled
          id="file-upload-loading-browse"
        >
          <span class="pf-v6-c-button__text">Upload</span>
        </button>
      </div>
      <div class="pf-v6-c-input-group__item">
        <button class="pf-v6-c-button pf-m-control" type="button">
          <span class="pf-v6-c-button__text">Clear</span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-file-upload__file-details">
    <span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-vertical">
      <textarea
        id="file-upload-loading-file-details"
        name="file-upload-loading-file-details"
        aria-label="Text area"
      >Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  
  </textarea>
    </span>

    <div class="pf-v6-c-file-upload__file-details-spinner">
      <svg
        class="pf-v6-c-spinner pf-m-lg"
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
    </div>
  </div>
</div>

```

## Documentation

### Overview

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-file-upload` | `<div>`, `<form>` | Initiates the file upload component. **Required**. |
| `.pf-v6-c-file-upload__file-select` | `<div>` | Initiates the file select element. **Required** |
| `.pf-v6-c-file-upload__file-details` | `<div>` | Initiates the file details element. **Required** |
| `.pf-v6-c-file-upload__file-details-spinner` | `<div>` | Initiates the file details element. **Required** |
| `.pf-v6-c-file-upload__helper-text` | `<div>` | Initiates a container for [helper text](/components/helper-text) |
| `.pf-m-drag-hover` | `.pf-v6-c-file-upload` | Modifies file upload for when an element is dragged or dropped inside of its container. |
| `.pf-m-loading` | `.pf-v6-c-file-upload` | Modifies file upload for the loading state. |
