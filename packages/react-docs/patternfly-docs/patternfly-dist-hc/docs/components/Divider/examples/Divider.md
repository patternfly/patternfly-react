---
id: Divider
section: components
cssPrefix: pf-v6-c-divider
---import './Divider.css'

## Examples

### hr

```html
<hr class="pf-v6-c-divider" />

```

### li

```html
<ul role="list">
  <li>List item one</li>
  <li class="pf-v6-c-divider" role="presentation"></li>
  <li>List item two</li>
</ul>

```

### div

```html
<div class="pf-v6-c-divider" role="separator"></div>

```

### Inset medium

```html
<hr class="pf-v6-c-divider pf-m-inset-md" />

```

### Md inset, no inset on md, 3xl inset on lg, lg inset on xl

```html
<hr
  class="pf-v6-c-divider pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-3xl-on-lg pf-m-inset-lg-on-xl"
/>

```

### Vertical

```html
<div class="pf-v6-c-divider pf-m-vertical" role="separator"></div>

```

### Vertical, inset medium

```html
<div class="pf-v6-c-divider pf-m-vertical pf-m-inset-md" role="separator"></div>

```

### Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl

```html
<div
  class="pf-v6-c-divider pf-m-vertical pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-lg-on-lg pf-m-inset-sm-on-xl"
  role="separator"
></div>

```

### Vertical on lg

```html
<div
  class="pf-v6-c-divider pf-m-horizontal pf-m-vertical-on-lg"
  role="separator"
></div>

```

### Horizontal on lg

```html
<div
  class="pf-v6-c-divider pf-m-horizontal-on-lg pf-m-vertical"
  role="separator"
></div>

```

### In flex layout

```html
<strong>Horizontal</strong>
<br />
<br />
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex__item">item 1</div>

  <div class="pf-v6-c-divider pf-m-vertical" role="separator"></div>
  <div class="pf-v6-l-flex__item">item 1</div>
</div>
<br />
<br />
<strong>Vertical</strong>
<br />
<br />
<div class="pf-v6-l-flex pf-m-column">
  <div class="pf-v6-l-flex__item">item 1</div>

  <div class="pf-v6-c-divider" role="separator"></div>
  <div class="pf-v6-l-flex__item">item 1</div>
</div>

```

## Documentation

### Overview

The divider renders as an `<hr>` by default. It is possible to make the divider render as an `li` or a `div` to match the HTML5 specification and context of the divider.

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="separator"` | `li.pf-v6-c-divider`, `div.pf-v6-c-divider` | Indicates that the separator is a separator. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-divider` | `<hr>`, `<li>`, `<div>` | Defines the divider component. |
| `.pf-m-vertical` | `.pf-v6-c-divider` | Modifies the divider component from horizontal to vertical. This modifier requires that the parent has an explicit or implicit height, or has a flex or grid based layout parent. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-divider` | Modifies divider padding/inset to visually match padding of other adjacent components. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v6-c-divider` | Modifies a divider to be hidden, at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v6-c-divider` | Modifies a divider to be shown, at optional [breakpoint](/tokens/all-patternfly-tokens). |
