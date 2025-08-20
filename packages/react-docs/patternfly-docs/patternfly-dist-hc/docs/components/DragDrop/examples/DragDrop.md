---
id: 'Drag and drop'
section: components
cssPrefix: pf-v6-c-drag-drop
---import './DragDrop.css'

## Examples

### Basic

```html
<div class="pf-v6-c-droppable">
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
</div>

```

### Dragging

```html
<div class="pf-v6-c-droppable pf-m-dragging">
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable pf-m-dragging">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
</div>

```

### Drag outside

```html
<div class="pf-v6-c-droppable pf-m-dragging pf-m-drag-outside">
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable pf-m-dragging pf-m-drag-outside">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
  <div class="pf-v6-c-draggable">Item</div>
</div>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-draggable` | `*` | Initiates a draggable element. |
| `.pf-v6-c-droppable` | `*` | Initiates a droppable element. |
| `.pf-m-dragging` | `.pf-v6-c-draggable`, `.pf-v6-c-droppable` | Indicates a draggable and droppable element are in the dragging state. |
| `.pf-m-drag-outside` | `.pf-v6-c-draggable`, `.pf-v6-c-droppable` | Indicates a draggable element is dragged outside of a droppable element. |
