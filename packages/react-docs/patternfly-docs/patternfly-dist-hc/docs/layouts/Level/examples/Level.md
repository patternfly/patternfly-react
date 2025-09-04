---
id: Level
section: layouts
cssPrefix: pf-v6-l-level
---import './Level.css'

## Examples

### Two items

```html
<div class="pf-v6-l-level">
  <div class="pf-v6-l-level__item">
    content
    <br />content
    <br />content
  </div>
  <div class="pf-v6-l-level__item">content</div>
</div>

```

### Three items

```html
<div class="pf-v6-l-level">
  <div class="pf-v6-l-level__item">content</div>
  <div class="pf-v6-l-level__item">
    content
    <br />content
    <br />content
  </div>
  <div class="pf-v6-l-level__item">content</div>
</div>

```

### With gutters

```html
<div class="pf-v6-l-level pf-m-gutter">
  <div class="pf-v6-l-level__item">content with gutter</div>
  <div class="pf-v6-l-level__item">content with gutter</div>
  <div class="pf-v6-l-level__item">
    content
    <br />content
    <br />content
  </div>
</div>

```

## Documentation

### Overview

The level layout is designed to distribute space between children evenly and center them on the x-axis. By default the children are placed horizontally and wrap responsively.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-l-level` | `<div>`, `<section>`, or `<article>` | Initializes the level layout |
| `.pf-v6-l-level__item` | `<div>` | Explicitly sets a child of the level. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
| `.pf-m-gutter` | `.pf-v6-l-level` | Adds space between children by using the globally defined gutter value. |
