---
id: Display
section: utility-classes
---import './Display.css'

## Examples

### Inline

```html
<div class="pf-v6-u-display-inline">.pf-v6-u-display-inline</div>

```

### Block

```html
<div class="pf-v6-u-display-block">.pf-v6-u-display-block</div>

```

### Inline block

```html
<div class="pf-v6-u-display-inline-block">.pf-v6-u-display-inline-block</div>

```

### Flex

```html
<div class="pf-v6-u-display-flex">.pf-v6-u-display-flex</div>

```

### Inline flex

```html
<div class="pf-v6-u-display-inline-flex">.pf-v6-u-display-inline-flex</div>

```

### Grid

```html
<div class="pf-v6-u-display-grid">.pf-v6-u-display-grid</div>

```

### Inline grid

```html
<div class="pf-v6-u-display-inline-grid">.pf-v6-u-display-inline-grid</div>

```

### Table, table row, table cell

```html
<div class="pf-v6-u-display-table">
  <div class="pf-v6-u-display-table-row">
    <div class="pf-v6-u-display-table-cell">table-cell</div>
    <div class="pf-v6-u-display-table-cell">table-cell</div>
    <div class="pf-v6-u-display-table-cell">table-cell</div>
  </div>
  <div class="pf-v6-u-display-table-row">
    <div class="pf-v6-u-display-table-cell">table-cell</div>
    <div class="pf-v6-u-display-table-cell">table-cell</div>
    <div class="pf-v6-u-display-table-cell">table-cell</div>
  </div>
</div>

```

### None

```html
<div class="pf-v6-u-display-none-on-sm">Hidden on sm breakpoint</div>

```

## Documentation

### Overview

[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-display-inline-block-on-lg`

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-display-inline{-on-[breakpoint]}` | `*` |  Sets display: inline |
| `.pf-v6-u-display-block{-on-[breakpoint]}` | `*` |  Sets display: block |
| `.pf-v6-u-display-inline-block{-on-[breakpoint]}` | `*` |  Sets display: inline-block |
| `.pf-v6-u-display-flex{-on-[breakpoint]}` | `*` |  Sets display: flex |
| `.pf-v6-u-display-inline-flex{-on-[breakpoint]}` | `*` |  Sets display: inline-flex |
| `.pf-v6-u-display-grid{-on-[breakpoint]}` | `*` |  Sets display: grid |
| `.pf-v6-u-display-inline-grid{-on-[breakpoint]}` | `*` |  Sets display: inline-grid |
| `.pf-v6-u-display-table{-on-[breakpoint]}` | `*` |  Sets display: table |
| `.pf-v6-u-display-table-row{-on-[breakpoint]}` | `*` |  Sets display: table-row |
| `.pf-v6-u-display-table-cell{-on-[breakpoint]}` | `*` |  Sets display: table-cell |
| `.pf-v6-u-display-none{-on-[breakpoint]}` | `*` |  Sets display: none |
