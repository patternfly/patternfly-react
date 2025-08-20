---
id: Clipboard copy
section: components
cssPrefix: pf-v6-c-clipboard-copy
---## Examples

### Basic

```html
<div class="pf-v6-c-clipboard-copy">
  <div class="pf-v6-c-clipboard-copy__group">
    <span class="pf-v6-c-form-control">
      <input
        type="text"
        value="This is editable"
        id="basic-editable-text-input"
        aria-label="Copyable input"
      />
    </span>
    <button
      class="pf-v6-c-button pf-m-control"
      id="basic-editable-copy-button"
      type="button"
      aria-labelledby="basic-editable-copy-button basic-editable-text-input"
      aria-label="Copy to clipboard"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-copy" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>
<br />
<div class="pf-v6-c-clipboard-copy">
  <div class="pf-v6-c-clipboard-copy__group">
    <span class="pf-v6-c-form-control pf-m-readonly">
      <input
        readonly
        type="text"
        value="This is read-only"
        id="basic-readonly-text-input"
        aria-label="Copyable input"
      />
    </span>
    <button
      class="pf-v6-c-button pf-m-control"
      id="basic-readonly-copy-button"
      type="button"
      aria-labelledby="basic-readonly-copy-button basic-readonly-text-input"
      aria-label="Copy to clipboard"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-copy" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

```

### Expandable

```html
<h4>Editable</h4>
<div class="pf-v6-c-clipboard-copy">
  <div class="pf-v6-c-clipboard-copy__group">
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      id="expandable-not-expanded-editable-toggle"
      aria-labelledby="expandable-not-expanded-editable-toggle expandable-not-expanded-editable-text-input"
      aria-controls="expandable-not-expanded-editable-content"
    >
      <span class="pf-v6-c-button__icon">
        <div class="pf-v6-c-clipboard-copy__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </div>
      </span>
    </button>
    <span class="pf-v6-c-form-control">
      <input
        type="text"
        value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion."
        id="expandable-not-expanded-editable-text-input"
        aria-label="Copyable input"
      />
    </span>
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      aria-label="Copy to clipboard"
      id="expandable-not-expanded-editable-copy-button"
      aria-labelledby="expandable-not-expanded-editable-copy-button expandable-not-expanded-editable-text-input"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-copy" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div
    class="pf-v6-c-clipboard-copy__expandable-content"
    hidden
    id="expandable-not-expanded-editable-content"
  >This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>
</div>
<br />
<div class="pf-v6-c-clipboard-copy pf-m-expanded">
  <div class="pf-v6-c-clipboard-copy__group">
    <button
      class="pf-v6-c-button pf-m-expanded pf-m-control"
      type="button"
      aria-expanded="true"
      id="expandable-expanded-editable-toggle"
      aria-labelledby="expandable-expanded-editable-toggle expandable-expanded-editable-text-input"
      aria-controls="expandable-expanded-editable-content"
    >
      <span class="pf-v6-c-button__icon">
        <div class="pf-v6-c-clipboard-copy__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </div>
      </span>
    </button>
    <span class="pf-v6-c-form-control pf-m-readonly">
      <input
        readonly
        type="text"
        value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion."
        id="expandable-expanded-editable-text-input"
        aria-label="Copyable input"
      />
    </span>
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      aria-label="Copy to clipboard"
      id="expandable-expanded-editable-copy-button"
      aria-labelledby="expandable-expanded-editable-copy-button expandable-expanded-editable-text-input"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-copy" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div
    class="pf-v6-c-clipboard-copy__expandable-content"
    contenteditable="true"
    id="expandable-expanded-editable-content"
  >This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>
</div>
<br />
<h4>Read-only</h4>
<div class="pf-v6-c-clipboard-copy">
  <div class="pf-v6-c-clipboard-copy__group">
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      id="expandable-not-expanded-readonly-toggle"
      aria-labelledby="expandable-not-expanded-readonly-toggle expandable-not-expanded-readonly-text-input"
      aria-controls="expandable-not-expanded-readonly-content"
    >
      <span class="pf-v6-c-button__icon">
        <div class="pf-v6-c-clipboard-copy__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </div>
      </span>
    </button>
    <span class="pf-v6-c-form-control pf-m-readonly">
      <input
        readonly
        type="text"
        value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion."
        id="expandable-not-expanded-readonly-text-input"
        aria-label="Copyable input"
      />
    </span>
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      aria-label="Copy to clipboard"
      id="expandable-not-expanded-readonly-copy-button"
      aria-labelledby="expandable-not-expanded-readonly-copy-button expandable-not-expanded-readonly-text-input"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-copy" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div
    class="pf-v6-c-clipboard-copy__expandable-content"
    hidden
    id="expandable-not-expanded-readonly-content"
  >This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>
</div>
<br />
<div class="pf-v6-c-clipboard-copy pf-m-expanded">
  <div class="pf-v6-c-clipboard-copy__group">
    <button
      class="pf-v6-c-button pf-m-expanded pf-m-control"
      type="button"
      aria-expanded="true"
      id="expandable-expanded-readonly-toggle"
      aria-labelledby="expandable-expanded-readonly-toggle expandable-expanded-readonly-text-input"
      aria-controls="expandable-expanded-readonly-content"
    >
      <span class="pf-v6-c-button__icon">
        <div class="pf-v6-c-clipboard-copy__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </div>
      </span>
    </button>
    <span class="pf-v6-c-form-control pf-m-readonly">
      <input
        readonly
        type="text"
        value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion."
        id="expandable-expanded-readonly-text-input"
        aria-label="Copyable input"
      />
    </span>
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      aria-label="Copy to clipboard"
      id="expandable-expanded-readonly-copy-button"
      aria-labelledby="expandable-expanded-readonly-copy-button expandable-expanded-readonly-text-input"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-copy" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div
    class="pf-v6-c-clipboard-copy__expandable-content"
    id="expandable-expanded-readonly-content"
  >This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>
</div>
<br />
<h4>Code</h4>
<div class="pf-v6-c-clipboard-copy">
  <div class="pf-v6-c-clipboard-copy__group">
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      id="expandable-not-expanded-code-toggle"
      aria-labelledby="expandable-not-expanded-code-toggle expandable-not-expanded-code-text-input"
      aria-controls="expandable-not-expanded-code-content"
    >
      <span class="pf-v6-c-button__icon">
        <div class="pf-v6-c-clipboard-copy__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </div>
      </span>
    </button>
    <span class="pf-v6-c-form-control">
      <input
        dir="ltr"
        type="text"
        value="{ &quot;menu&quot;: {     &quot;id&quot;: &quot;file&quot;,     &quot;value&quot;: &quot;File&quot;,     &quot;popup&quot;: {       &quot;menuitem&quot;: [         {&quot;value&quot;: &quot;New&quot;, &quot;onclick&quot;: &quot;CreateNewDoc()&quot;},         {&quot;value&quot;: &quot;Open&quot;, &quot;onclick&quot;: &quot;OpenDoc()&quot;},         {&quot;value&quot;: &quot;Close&quot;, &quot;onclick&quot;: &quot;CloseDoc()&quot;}       ]     }   }} "
        id="expandable-not-expanded-code-text-input"
        aria-label="Copyable input"
      />
    </span>
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      aria-label="Copy to clipboard"
      id="expandable-not-expanded-code-copy-button"
      aria-labelledby="expandable-not-expanded-code-copy-button expandable-not-expanded-code-text-input"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-copy" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div
    class="pf-v6-c-clipboard-copy__expandable-content"
    hidden
    id="expandable-not-expanded-code-content"
  >
    <pre dir="ltr">{ "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }}
  </pre>
  </div>
</div>
<br />
<div class="pf-v6-c-clipboard-copy pf-m-expanded">
  <div class="pf-v6-c-clipboard-copy__group">
    <button
      class="pf-v6-c-button pf-m-expanded pf-m-control"
      type="button"
      aria-expanded="true"
      id="expandable-expanded-code-toggle"
      aria-labelledby="expandable-expanded-code-toggle expandable-expanded-code-text-input"
      aria-controls="expandable-expanded-code-content"
    >
      <span class="pf-v6-c-button__icon">
        <div class="pf-v6-c-clipboard-copy__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </div>
      </span>
    </button>
    <span class="pf-v6-c-form-control pf-m-readonly">
      <input
        readonly
        dir="ltr"
        type="text"
        value="{ &quot;menu&quot;: {     &quot;id&quot;: &quot;file&quot;,     &quot;value&quot;: &quot;File&quot;,     &quot;popup&quot;: {       &quot;menuitem&quot;: [         {&quot;value&quot;: &quot;New&quot;, &quot;onclick&quot;: &quot;CreateNewDoc()&quot;},         {&quot;value&quot;: &quot;Open&quot;, &quot;onclick&quot;: &quot;OpenDoc()&quot;},         {&quot;value&quot;: &quot;Close&quot;, &quot;onclick&quot;: &quot;CloseDoc()&quot;}       ]     }   }} "
        id="expandable-expanded-code-text-input"
        aria-label="Copyable input"
      />
    </span>
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      aria-label="Copy to clipboard"
      id="expandable-expanded-code-copy-button"
      aria-labelledby="expandable-expanded-code-copy-button expandable-expanded-code-text-input"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-copy" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div
    class="pf-v6-c-clipboard-copy__expandable-content"
    contenteditable="true"
    id="expandable-expanded-code-content"
  >
    <pre dir="ltr">{ "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }}
  </pre>
  </div>
</div>

```

### Inline compact

```html
<div class="pf-v6-c-clipboard-copy pf-m-inline">
  <span class="pf-v6-c-clipboard-copy__text">2.3.4-2-redhat</span>
  <span class="pf-v6-c-clipboard-copy__actions">
    <span class="pf-v6-c-clipboard-copy__actions-item">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        aria-label="Copy to clipboard"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-copy" aria-hidden="true"></i>
        </span>
      </button>
    </span>
  </span>
</div>

```

### Inline compact code

```html
<div class="pf-v6-c-clipboard-copy pf-m-inline">
  <code class="pf-v6-c-clipboard-copy__text pf-m-code">2.3.4-2-redhat</code>
  <span class="pf-v6-c-clipboard-copy__actions">
    <span class="pf-v6-c-clipboard-copy__actions-item">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        aria-label="Copy to clipboard"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-copy" aria-hidden="true"></i>
        </span>
      </button>
    </span>
  </span>
</div>

```

### Inline compact with additional action

```html
<div class="pf-v6-c-clipboard-copy pf-m-inline">
  <span class="pf-v6-c-clipboard-copy__text">2.3.4-2-redhat</span>
  <span class="pf-v6-c-clipboard-copy__actions">
    <span class="pf-v6-c-clipboard-copy__actions-item">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        aria-label="Copy to clipboard"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-copy" aria-hidden="true"></i>
        </span>
      </button>
    </span>
    <span class="pf-v6-c-clipboard-copy__actions-item">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        aria-label="Run in web terminal"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-copy" aria-hidden="true"></i>
        </span>
      </button>
    </span>
  </span>
</div>

```

### Inline compact in sentence

```html
<h4>
  <strong>Basic</strong>
</h4>Lorem ipsum&nbsp;
<div class="pf-v6-c-clipboard-copy pf-m-inline">
  <span class="pf-v6-c-clipboard-copy__text">2.3.4-2-redhat</span>
  <span class="pf-v6-c-clipboard-copy__actions">
    <span class="pf-v6-c-clipboard-copy__actions-item">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        aria-label="Copy to clipboard"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-copy" aria-hidden="true"></i>
        </span>
      </button>
    </span>
  </span>
</div>
&nbsp;dolor sit amet.
<br />
<br />

<h4>
  <strong>Long copy string</strong>
</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;
<div class="pf-v6-c-clipboard-copy pf-m-inline">
  <span
    class="pf-v6-c-clipboard-copy__text"
  >https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890</span>
  <span class="pf-v6-c-clipboard-copy__actions">
    <span class="pf-v6-c-clipboard-copy__actions-item">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        aria-label="Copy to clipboard"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-copy" aria-hidden="true"></i>
        </span>
      </button>
    </span>
  </span>
</div>&nbsp;Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.
<br />
<br />

<h4>
  <strong>Long copy string in block</strong>
</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;
<div class="pf-v6-c-clipboard-copy pf-m-inline pf-m-block">
  <span
    class="pf-v6-c-clipboard-copy__text"
  >https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890</span>
  <span class="pf-v6-c-clipboard-copy__actions">
    <span class="pf-v6-c-clipboard-copy__actions-item">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        aria-label="Copy to clipboard"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-copy" aria-hidden="true"></i>
        </span>
      </button>
    </span>
  </span>
</div>&nbsp;Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.

```

### Inline compact with truncation

```html
<div class="pf-v6-c-clipboard-copy pf-m-inline pf-m-truncate">
  <span class="pf-v6-c-clipboard-copy__text">
    <span class="pf-v6-c-truncate">
      <span
        class="pf-v6-c-truncate__start"
      >This lengthy, copyable content will be truncated with default settings when the truncation prop is simply set to true. This is useful for quickly applying truncation without needing to worry about any other properties to set.</span>
    </span>
  </span>
  <span class="pf-v6-c-clipboard-copy__actions">
    <span class="pf-v6-c-clipboard-copy__actions-item">
      <button
        class="pf-v6-c-button pf-m-no-padding pf-m-plain"
        type="button"
        aria-label="Copy to clipboard"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-copy" aria-hidden="true"></i>
        </span>
      </button>
    </span>
  </span>
</div>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Copy to clipboard"`, `aria-label="Show content"` | `.pf-v6-c-button.pf-m-control` | Provides an accessible name for the button when an icon is used instead of text. **Required when an icon is used with no supporting text.** |
| `aria-label="[input label text]"` | `.pf-v6-c-form-control` | Provides an accessible label for the input. Provide a label that describes the contents in the input. **Required** |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. |
| `aria-controls="[id of expandable element]"` | `.pf-v6-c-button.pf-m-control` | Identifies the element controlled by the toggle button. **Required** |
| `hidden` | `.pf-v6-c-clipboard-copy__expandable-content` | Indicates that the expandable content is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-labelledby="[id of button] [id of input label]"` | `.pf-v6-c-button.pf-m-control` | Provides an accessible name that is unique and communicates context of the button. Required when more than one ClipboardCopy component exists on the page. **Important:** If the label is defined on the `<input>` using `aria-label`, then use the `id` of the `<input>`. If the label is defined in a `<label>`, then use the `id` of the `<label>`. **Alternatively** this attribute can be ignored if the text input label is defined as part of the value in `aria-label`. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-clipboard-copy` | `<div>` | Initiates a clipboard copy component. **Required** |
| `.pf-v6-c-clipboard-copy__group` | `<div>` | Initiates a wrapper for the clipboard copy group. **Required** |
| `.pf-v6-c-clipboard-copy__toggle-icon` | `<div>` | Initiates a toggle button icon. |
| `.pf-v6-c-clipboard-copy__expandable-content` | `<div>` | Initiates an expandable element. |
| `.pf-v6-c-clipboard-copy__text` | `<span>` | Initiates the inline copy clipboard text element. **Required** |
| `.pf-v6-c-clipboard-copy__actions` | `<span>` | Initiates the inline copy clipboard actions element. **Required** |
| `.pf-v6-c-clipboard-copy__actions-item` | `<span>` | Initiates the inline copy clipboard actions item element. **Required** |
| `.pf-m-inline` | `.pf-v6-c-clipboard-copy` | Modifies the clipboard copy component for inline styles. |
| `.pf-m-block` | `.pf-v6-c-clipboard-copy.pf-m-inline` | Modifies the inline copy clipboard component to have block formatting. |
| `.pf-m-truncate` | `.pf-v6-c-clipboard-copy.pf-m-truncate` | Modifies the inline copy clipboard component for use with text used in trucate component. |
| `.pf-m-expanded` | `.pf-v6-c-clipboard-copy` | Modifies the clipboard copy component for the expanded state. |
| `.pf-m-expanded` | `.pf-v6-c-button.pf-m-control` | Modifies the control toggle button for the expanded state. |
| `.pf-m-code` | `code.pf-v6-c-clipboard-copy__text` | Modifies the inline copy clipboard text styles for use with the `<code>` element. |
