---
id: 'Panel'
section: components
cssPrefix: pf-v6-c-panel
---## Examples

### Basic

```html
<div class="pf-v6-c-panel">
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__main-body">Main content</div>
  </div>
</div>

```

### Secondary

```html
<div class="pf-v6-c-panel pf-m-secondary">
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__main-body">Main content with secondary styling</div>
  </div>
</div>

```

### Header

```html
<div class="pf-v6-c-panel">
  <div class="pf-v6-c-panel__header">Header content</div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__main-body">Main content</div>
  </div>
</div>

```

### Footer

```html
<div class="pf-v6-c-panel">
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__main-body">Main content</div>
  </div>
  <div class="pf-v6-c-panel__footer">Footer content</div>
</div>

```

### Header and footer

```html
<div class="pf-v6-c-panel">
  <div class="pf-v6-c-panel__header">Header content</div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__main-body">Main content</div>
  </div>
  <div class="pf-v6-c-panel__footer">Footer content</div>
</div>

```

### No body

```html
<div class="pf-v6-c-panel">
  <div class="pf-v6-c-panel__main">Main content</div>
</div>

```

### Raised

```html
<div class="pf-v6-c-panel pf-m-raised">
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__main-body">Main content</div>
  </div>
</div>

```

### Bordered

```html
<div class="pf-v6-c-panel pf-m-bordered">
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__main-body">Main content</div>
  </div>
</div>

```

### Scrollable

```html
<div class="pf-v6-c-panel pf-m-scrollable">
  <div class="pf-v6-c-panel__main" tabindex="0">
    <div class="pf-v6-c-panel__main-body">
      Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
    </div>
  </div>
</div>

```

### Scrollable with header and footer

```html
<div class="pf-v6-c-panel pf-m-scrollable">
  <div class="pf-v6-c-panel__header">Header content</div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-panel__main" tabindex="0">
    <div class="pf-v6-c-panel__main-body">
      Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
      <br />
      <br />Main content
    </div>
  </div>
  <div class="pf-v6-c-panel__footer">Footer content</div>
</div>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-panel` | `<div>` | Initiates the panel. **Required** |
| `.pf-v6-c-panel__header` | `<div>` | Initiates the panel header. |
| `.pf-v6-c-panel__main` | `<div>` | Initiates the panel main content. |
| `.pf-v6-c-panel__main-body` | `<div>` | Initiates a panel content body container. |
| `.pf-v6-c-panel__menu` | `<div>` | Initiates a panel menu container. |
| `.pf-v6-c-panel__footer` | `<div>` | Initiates the panel footer. |
| `.pf-m-bordered` | `.pf-v6-c-panel` | Modifies the panel for bordered styles. |
| `.pf-m-raised` | `.pf-v6-c-panel` | Modifies the panel for raised styles. |
| `.pf-m-scrollable` | `.pf-v6-c-panel` | Modifies the panel for scrollable styles. |
| `.pf-m-secondary` | `.pf-v6-c-panel` | Modifies the panel for secondary styles. |
