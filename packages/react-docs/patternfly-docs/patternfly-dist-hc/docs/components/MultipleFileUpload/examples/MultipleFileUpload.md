---
id: 'Multiple file upload'
section: components
subsection: file-upload
cssPrefix: pf-v6-c-multiple-file-upload
---## Examples

### Basic

```html
<div class="pf-v6-c-multiple-file-upload">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
        <i class="fas fa-upload" aria-hidden="true"></i>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
</div>

```

### Drag over

```html
<div class="pf-v6-c-multiple-file-upload pf-m-drag-over">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
        <i class="fas fa-upload" aria-hidden="true"></i>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
</div>

```

### Horizontal

```html
<div class="pf-v6-c-multiple-file-upload pf-m-horizontal">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
        <i class="fas fa-upload" aria-hidden="true"></i>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
</div>

```

### Horizontal drag over

```html
<div class="pf-v6-c-multiple-file-upload pf-m-horizontal pf-m-drag-over">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
        <i class="fas fa-upload" aria-hidden="true"></i>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
</div>

```

### File upload status

```html
<div class="pf-v6-c-multiple-file-upload">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
        <i class="fas fa-upload" aria-hidden="true"></i>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
  <div class="pf-v6-c-multiple-file-upload__status">
    <div class="pf-v6-c-expandable-section">
      <div class="pf-v6-c-expandable-section__toggle">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-expandable-section__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
          <span class="pf-v6-c-button__text">
            <div class="pf-v6-c-multiple-file-upload__status-progress">
              <div class="pf-v6-c-multiple-file-upload__status-progress-icon">
                <i class="fas fa-spinner" aria-hidden="true"></i>
              </div>
              <div
                class="pf-v6-c-multiple-file-upload__status-progress-text"
              >0 of 3 files uploaded</div>
            </div>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-expandable-section__content" hidden>
        <ul class="pf-v6-c-multiple-file-upload__status-list" role="list">
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-progress-png"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-progress-png-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.png</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >40 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">35%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="35"
                  aria-labelledby="multiple-file-upload-status-progress-png-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:35%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-progress-doc"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-progress-doc-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.doc</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >30 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">70%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="70"
                  aria-labelledby="multiple-file-upload-status-progress-doc-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:70%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-progress-pdf"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-progress-pdf-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.pdf</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >25 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">50%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="50"
                  aria-labelledby="multiple-file-upload-status-progress-pdf-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:50%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```

### File upload status expanded

```html
<div class="pf-v6-c-multiple-file-upload">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
        <i class="fas fa-upload" aria-hidden="true"></i>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
  <div class="pf-v6-c-multiple-file-upload__status">
    <div class="pf-v6-c-expandable-section pf-m-expanded">
      <div class="pf-v6-c-expandable-section__toggle">
        <button class="pf-v6-c-button pf-m-link" type="button" aria-expanded>
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-expandable-section__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
          <span class="pf-v6-c-button__text">
            <div class="pf-v6-c-multiple-file-upload__status-progress">
              <div class="pf-v6-c-multiple-file-upload__status-progress-icon">
                <i class="fas fa-spinner" aria-hidden="true"></i>
              </div>
              <div
                class="pf-v6-c-multiple-file-upload__status-progress-text"
              >0 of 3 files uploaded</div>
            </div>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-expandable-section__content">
        <ul class="pf-v6-c-multiple-file-upload__status-list" role="list">
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-expanded-progress-png"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-expanded-progress-png-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.png</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >40 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">35%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="35"
                  aria-labelledby="multiple-file-upload-status-expanded-progress-png-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:35%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-expanded-progress-doc"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-expanded-progress-doc-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.doc</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >30 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">70%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="70"
                  aria-labelledby="multiple-file-upload-status-expanded-progress-doc-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:70%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-expanded-progress-pdf"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-expanded-progress-pdf-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.pdf</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >25 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">50%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="50"
                  aria-labelledby="multiple-file-upload-status-expanded-progress-pdf-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:50%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```

### Horizontal file upload status expanded

```html
<div class="pf-v6-c-multiple-file-upload pf-m-horizontal">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
        <i class="fas fa-upload" aria-hidden="true"></i>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
  <div class="pf-v6-c-multiple-file-upload__status">
    <div class="pf-v6-c-expandable-section pf-m-expanded">
      <div class="pf-v6-c-expandable-section__toggle">
        <button class="pf-v6-c-button pf-m-link" type="button" aria-expanded>
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-expandable-section__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
          <span class="pf-v6-c-button__text">
            <div class="pf-v6-c-multiple-file-upload__status-progress">
              <div class="pf-v6-c-multiple-file-upload__status-progress-icon">
                <i class="fas fa-spinner" aria-hidden="true"></i>
              </div>
              <div
                class="pf-v6-c-multiple-file-upload__status-progress-text"
              >0 of 3 files uploaded</div>
            </div>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-expandable-section__content">
        <ul class="pf-v6-c-multiple-file-upload__status-list" role="list">
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-horizontal-expanded-progress-png"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-horizontal-expanded-progress-png-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.png</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >40 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">35%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="35"
                  aria-labelledby="multiple-file-upload-status-horizontal-expanded-progress-png-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:35%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-horizontal-expanded-progress-doc"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-horizontal-expanded-progress-doc-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.doc</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >30 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">70%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="70"
                  aria-labelledby="multiple-file-upload-status-horizontal-expanded-progress-doc-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:70%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
              <i class="fas fa-file" aria-hidden="true"></i>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-horizontal-expanded-progress-pdf"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-horizontal-expanded-progress-pdf-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.pdf</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >25 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">50%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="50"
                  aria-labelledby="multiple-file-upload-status-horizontal-expanded-progress-pdf-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:50%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-multiple-file-upload` | `<div>` | Initiates the multiple file upload component. **Required** |
| `.pf-v6-c-multiple-file-upload__main` | `<div>` | Defines the main section. |
| `.pf-v6-c-multiple-file-upload__title` | `<div>` | Defines the title. |
| `.pf-v6-c-multiple-file-upload__title-icon` | `<div>` | Defines the title icon. |
| `.pf-v6-c-multiple-file-upload__title-text` | `<div>` | Defines the title text. |
| `.pf-v6-c-multiple-file-upload__title-text-separator` | `<div>` | Defines the title text separator. |
| `.pf-v6-c-multiple-file-upload__upload` | `<div>` | Defines the upload button. |
| `.pf-v6-c-multiple-file-upload__info` | `<div>` | Defines the info section. |
| `.pf-v6-c-multiple-file-upload__status` | `<div>` | Defines the status section. |
| `.pf-v6-c-multiple-file-upload__status-progress` | `<div>` | Defines the status toggle progress. |
| `.pf-v6-c-multiple-file-upload__status-progress-icon` | `<div>` | Defines the status toggle progress icon. |
| `.pf-v6-c-multiple-file-upload__status-progress-text` | `<div>` | Defines the status toggle progress text. |
| `.pf-v6-c-multiple-file-upload__status-list` | `<div>` | Defines the status item list. |
| `.pf-v6-c-multiple-file-upload__status-item` | `<div>` | Defines a status item. |
| `.pf-v6-c-multiple-file-upload__status-item-icon` | `<div>` | Defines the status item icon. |
| `.pf-v6-c-multiple-file-upload__status-item-main` | `<div>` | Defines the status item main progress section. |
| `.pf-v6-c-multiple-file-upload__status-item-close` | `<div>` | Defines the status item close button. |
| `.pf-v6-c-multiple-file-upload__status-item-progress` | `<div>` | Defines the status item progress description. |
| `.pf-v6-c-multiple-file-upload__status-item-progress-text` | `<div>` | Defines the status item progress description text. |
| `.pf-v6-c-multiple-file-upload__status-item-progress-size` | `<div>` | Defines the status item progress description size. |
