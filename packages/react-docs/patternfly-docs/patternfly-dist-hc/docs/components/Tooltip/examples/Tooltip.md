---
id: Tooltip
section: components
cssPrefix: pf-v6-c-tooltip
---import "./Tooltip.css"

## Examples

### Top

```html
<div class="pf-v6-c-tooltip pf-m-top" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content"
    id="tooltip-top-content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>

```

### Right

```html
<div class="pf-v6-c-tooltip pf-m-right" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content"
    id="tooltip-right-content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>

```

### Bottom

```html
<div class="pf-v6-c-tooltip pf-m-bottom" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content"
    id="tooltip-bottom-content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>

```

### Left

```html
<div class="pf-v6-c-tooltip pf-m-left" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content"
    id="tooltip-left-content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>

```

### Left with top and bottom positions

```html
<div class="pf-v6-c-tooltip pf-m-left-top" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content"
    id="tooltip-left-top-content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>
<br />
<div class="pf-v6-c-tooltip pf-m-left-bottom" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content"
    id="tooltip-left-bottom-content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>

```

### Bottom with left and right positions

```html
<div class="pf-v6-c-tooltip pf-m-bottom-left" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content"
    id="tooltip-bottom-left-content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>
<br />
<div class="pf-v6-c-tooltip pf-m-bottom-right" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content"
    id="tooltip-bottom-right-content"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>

```

### Left aligned text

```html
<div class="pf-v6-c-tooltip pf-m-top" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div
    class="pf-v6-c-tooltip__content pf-m-text-align-left"
    id="tooltip-text-align-left-example"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>

```

## Documentation

### Overview

A tooltip is used to provide contextual information for another component on hover.  The tooltip itself is made up of two elements: arrow and content. One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the tooltip component.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-tooltip` | `<div>` |  Creates a tooltip. Always use with a modifier class that positions the tooltip relative to the element it describes. **Required**|
| `.pf-v6-c-tooltip__arrow` | `<div>` |  Creates an arrow pointing towards the element the tooltip describes. **Required** |
| `.pf-v6-c-tooltip__content` | `<div>` |  Creates the body of the tooltip. **Required** |
| `.pf-m-left{-top/bottom}` | `.pf-v6-c-tooltip` | Positions the tooltip to the left (or left top/left bottom) of the element. |
| `.pf-m-right{-top/bottom}` | `.pf-v6-c-tooltip` | Positions the tooltip to the right (or right top/right bottom) of the element. |
| `.pf-m-top{-left/right}` | `.pf-v6-c-tooltip` | Positions the tooltip to the top (or top left/top right) of the element. |
| `.pf-m-bottom{-left/right}` | `.pf-v6-c-tooltip` | Positions the tooltip to the bottom (or bottom left/bottom right) of the element. |
| `.pf-m-text-align-left` | `.pf-v6-c-tooltip__content` | Modifies tooltip content to text align left. |
