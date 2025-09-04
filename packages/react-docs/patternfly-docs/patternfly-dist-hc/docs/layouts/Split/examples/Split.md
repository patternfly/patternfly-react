---
id: Split
section: layouts
cssPrefix: pf-v6-l-split
---import './Split.css'

## Examples

### Basic

```html
<div class="pf-v6-l-split">
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item pf-m-fill">pf-m-fill</div>
  <div class="pf-v6-l-split__item">content</div>
</div>

```

### With gutter

```html
<div class="pf-v6-l-split pf-m-gutter">
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item pf-m-fill">pf-m-fill</div>
  <div class="pf-v6-l-split__item">content</div>
</div>

```

### Wrappable

```html
<div class="pf-v6-l-split pf-m-gutter pf-m-wrap">
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
  <div class="pf-v6-l-split__item">content</div>
</div>

```

## Documentation

### Overview

The split layout is designed to position items horizontally.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-l-split` | `*` | Initiates the split layout. |
| `.pf-v6-l-split__item` | `*` | Initiates a split item. |
| `.pf-m-gutter` | `.pf-v6-l-split` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-wrap` | `.pf-v6-l-split` | Sets the split layout to wrap. |
| `.pf-m-fill` | `.pf-v6-l-split > *`, `.pf-v6-l-split__item` | Specifies which item(s) should fill the avaiable horizontal space. |
