---
id: Stack
section: layouts
cssPrefix: pf-v6-l-stack
---import './Stack.css'

## Examples

### Basic

```html
<div class="pf-v6-l-stack">
  <div class="pf-v6-l-stack__item">content</div>
  <div class="pf-v6-l-stack__item pf-m-fill">pf-m-fill</div>
  <div class="pf-v6-l-stack__item">content</div>
</div>

```

### With gutter

```html
<div class="pf-v6-l-stack pf-m-gutter">
  <div class="pf-v6-l-stack__item">content</div>
  <div class="pf-v6-l-stack__item pf-m-fill">pf-m-fill</div>
  <div class="pf-v6-l-stack__item">content</div>
</div>

```

## Documentation

### Overview

The stack layout is designed to position items vertically.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-l-stack` | `*` | Initiates the stack layout.  |
| `.pf-v6-l-stack__item` | `*` | Initiates a stack item.  |
| `.pf-m-gutter` | `.pf-v6-l-stack` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-fill` | `.pf-v6-l-stack > *`, `.pf-v6-l-stack__item` | Specifies which item(s) should fill the avaiable vertical space. |
