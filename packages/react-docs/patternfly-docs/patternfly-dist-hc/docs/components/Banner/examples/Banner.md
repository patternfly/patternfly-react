---
id: 'Banner'
section: components
cssPrefix: pf-v6-c-banner
---## Examples

### Basic

Banners can be styled with one of 9 different nonstatus colors. A nonstatus banner should only be used when the banner color does not represent status or severity.

```html
<div class="pf-v6-c-banner">Default banner</div>

<br />

<div class="pf-v6-c-banner pf-m-red">Red banner</div>

<br />

<div class="pf-v6-c-banner pf-m-orangered">Orangered banner</div>

<br />

<div class="pf-v6-c-banner pf-m-orange">Orange banner</div>

<br />

<div class="pf-v6-c-banner pf-m-yellow">Yellow banner</div>

<br />

<div class="pf-v6-c-banner pf-m-green">Green banner</div>

<br />

<div class="pf-v6-c-banner pf-m-teal">Teal banner</div>

<br />

<div class="pf-v6-c-banner pf-m-blue">Blue banner</div>

<br />

<div class="pf-v6-c-banner pf-m-purple">Purple banner</div>

```

### Banner with links

```html
<div class="pf-v6-c-banner">
  Default banner with a
  <a
    href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples"
  >link</a>
</div>
<br />
<div class="pf-v6-c-banner">
  Default banner with a
  <a
    class="pf-m-disabled"
    role="link"
    aria-disabled="true"
  >disabled link</a>
</div>
<br />
<div class="pf-v6-c-banner pf-m-blue">
  Blue banner with an
  <button
    class="pf-v6-c-button pf-m-inline pf-m-link"
    type="button"
  >
    <span class="pf-v6-c-button__text">inline link button</span>
  </button>
</div>
<br />
<div class="pf-v6-c-banner pf-m-yellow">
  Yellow banner with an
  <a
    class="pf-v6-c-button pf-m-inline pf-m-link"
    href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples"
  >
    <span class="pf-v6-c-button__text">inline link button (anchor)</span>
  </a>
</div>
<br />
<div class="pf-v6-c-banner pf-m-red">
  Red banner with a
  <button
    class="pf-v6-c-button pf-m-inline pf-m-link"
    type="button"
    disabled
  >
    <span class="pf-v6-c-button__text">disabled inline link button</span>
  </button>
</div>

```

### Status

When a banner is used to convey status, it is advised to add an icon that also conveys status visually, and to provide screen reader text using `.pf-v6-screen-reader` or an equivalent.

```html
<div class="pf-v6-c-banner pf-m-success">
  <div class="pf-v6-l-flex pf-m-space-items-sm">
    <div class="pf-v6-l-flex__item">
      <span class="pf-v6-screen-reader">Success banner:</span>

      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </div>
    <div class="pf-v6-l-flex__item">Success banner</div>
  </div>
</div>

<br />

<div class="pf-v6-c-banner pf-m-warning">
  <div class="pf-v6-l-flex pf-m-space-items-sm">
    <div class="pf-v6-l-flex__item">
      <span class="pf-v6-screen-reader">Warning banner:</span>

      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    </div>
    <div class="pf-v6-l-flex__item">Warning banner</div>
  </div>
</div>

<br />

<div class="pf-v6-c-banner pf-m-danger">
  <div class="pf-v6-l-flex pf-m-space-items-sm">
    <div class="pf-v6-l-flex__item">
      <span class="pf-v6-screen-reader">Danger banner:</span>

      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </div>
    <div class="pf-v6-l-flex__item">Danger banner</div>
  </div>
</div>

<br />

<div class="pf-v6-c-banner pf-m-info">
  <div class="pf-v6-l-flex pf-m-space-items-sm">
    <div class="pf-v6-l-flex__item">
      <span class="pf-v6-screen-reader">Custom status banner:</span>

      <i class="fas fa-info-circle" aria-hidden="true"></i>
    </div>
    <div class="pf-v6-l-flex__item">Info banner</div>
  </div>
</div>

<br />

<div class="pf-v6-c-banner pf-m-custom">
  <div class="pf-v6-l-flex pf-m-space-items-sm">
    <div class="pf-v6-l-flex__item">
      <span class="pf-v6-screen-reader">Custom status banner:</span>

      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-v6-l-flex__item">Custom banner</div>
  </div>
</div>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-banner` | `<div>` |  Initiates a banner. **Required** |
| `.pf-m-red` | `.pf-v6-c-banner` |  Modifies banner for red styling. |
| `.pf-m-orangered` | `.pf-v6-c-banner` |  Modifies banner for orangered styling. |
| `.pf-m-orange` | `.pf-v6-c-banner` |  Modifies banner for orange styling. |
| `.pf-m-yellow` | `.pf-v6-c-banner` |  Modifies banner for yellow styling. |
| `.pf-m-green` | `.pf-v6-c-banner` |  Modifies banner for green styling. |
| `.pf-m-teal` | `.pf-v6-c-banner` |  Modifies banner for teal styling. |
| `.pf-m-blue` | `.pf-v6-c-banner` |  Modifies banner for blue styling. |
| `.pf-m-purple` | `.pf-v6-c-banner` |  Modifies banner for purple styling. |
| `.pf-m-success` | `.pf-v6-c-banner` |  Modifies banner for success status styling. |
| `.pf-m-warning` | `.pf-v6-c-banner` |  Modifies banner for warning status styling. |
| `.pf-m-danger` | `.pf-v6-c-banner` |  Modifies banner for danger status styling. |
| `.pf-m-info` | `.pf-v6-c-banner` |  Modifies banner for info status styling. |
| `.pf-m-custom` | `.pf-v6-c-banner` |  Modifies banner for custom status styling. |
| `.pf-m-sticky` | `.pf-v6-c-banner` |  Modifies banner to be sticky to the top of its container. |
