---
id: 'Truncate'
section: components
cssPrefix: pf-v6-c-truncate
---import './Truncate.css'

## Examples

The default behavior of the truncate component is to truncate based on whether the content can fit within the width of its parent container, and to prevent text from wrapping. The following examples that use this default behavior render the truncate component inside a resizable container, allowing you to see how the parent container width affects the truncation.

### Default

When only the `.pf-v6-c-truncate__start` element is used, truncation will occur at the end of the string.

```html
<div class="pf-v6-c-truncate--example">
  <span class="pf-v6-c-truncate">
    <span
      class="pf-v6-c-truncate__start"
    >redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip</span>
  </span>
</div>

```

### Middle

When both `.pf-v6-c-truncate__start` and `.pf-v6-c-truncate__end` elements are used, truncation will occur between the strings that are in each respective element. As the parent container width changes, the point at which content within the `.pf-v6-c-truncate__start` element is truncated will also change.

```html
<div class="pf-v6-c-truncate--example">
  <span class="pf-v6-c-truncate">
    <span
      class="pf-v6-c-truncate__start"
    >redhat_logo_black_and_white_reversed_simple_</span>
    <span class="pf-v6-c-truncate__end">with_fedora_container.zip</span>
  </span>
</div>

```

### Start

When only the `.pf-v6-c-truncate__end` element is used, truncation will occur at the start of the string. `&lrm;` **must** be included at the end of a string to denote the ending punctuation mark, otherwise it will render at the start of the truncated content.

```html
<div class="pf-v6-c-truncate--example">
  <span class="pf-v6-c-truncate">
    <span
      class="pf-v6-c-truncate__end"
    >redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip</span>
  </span>
</div>

```

### Based on max characters

Apply the `.pf-m-fixed` class to the `.pf-v6-c-truncate` element to implement truncation based on a fixed amount of characters rather than a parent container width.

```html
<div>Truncated at end position:</div>
<span class="pf-v6-c-truncate pf-m-fixed">
  <span
    class="pf-v6-c-truncate__text"
  >redhat_logo_black_and_white_reversed_simple_with_</span>
  <span class="pf-v6-c-truncate__omission" aria-hidden="true">&hellip;</span>
  <span class="pf-v6-screen-reader">fedora_container.zip</span>
</span>
<br />
<br />
<div>Truncated at middle position:</div>
<span class="pf-v6-c-truncate pf-m-fixed">
  <span class="pf-v6-c-truncate__text">redhat_logo_black_and_</span>
  <span class="pf-v6-screen-reader">white_reversed_simple_with_</span>

  <span class="pf-v6-c-truncate__omission" aria-hidden="true">&hellip;</span>
  <span class="pf-v6-c-truncate__text">fedora_container.zip</span>
</span>
<br />
<br />
<div>Truncated at start position:</div>
<span class="pf-v6-c-truncate pf-m-fixed">
  <span class="pf-v6-screen-reader">redhat_logo_black_</span>

  <span class="pf-v6-c-truncate__omission" aria-hidden="true">&hellip;</span>
  <span
    class="pf-v6-c-truncate__text"
  >and_white_reversed_simple_with_fedora_container.zip</span>
</span>

```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-truncate` | `<span>` | Initiates the truncate component. **Required** |
| `.pf-v6-c-truncate__start` | `<span>` | Defines the truncate component starting text. **Required** when using default/end or middle truncation, **except** for when the `.pf-m-fixed` class is applied to the `.pf-v6-c-truncate` element. |
| `.pf-v6-c-truncate__end` | `<span>` | Defines the truncate component ending text. **Required** when using start or middle truncation, **except** for when the `.pf-m-fixed` class is applied to the `.pf-v6-c-truncate` element.  |
| `.pf-v6-c-truncate__text` | `<span>` | Defines the visible truncate component text. **Required** and should only be used when the `.pf-m-fixed` class is applied to the `.pf-v6-c-truncate` element. |
| `.pf-m-fixed` | `.pf-v6-c-truncate` | Modifies the truncate component to base truncation on a fixed amount of characters rather than container width. |
