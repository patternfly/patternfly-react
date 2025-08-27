---
id: Brand
section: components
---import './Brand.css'

## Examples

### Basic

```html
<div class="show-light">
  <img
    class="pf-v6-c-brand"
    src="/assets/images/PF-HorizontalLogo-Color.svg"
    alt="PatternFly logo"
  />
</div>

<div class="show-dark">
  <img
    class="pf-v6-c-brand"
    src="/assets/images/PF-HorizontalLogo-Reverse.svg"
    alt="PatternFly logo"
  />
</div>

```

### Responsive

```html
<div class="show-light">
  <picture
    class="pf-v6-c-brand pf-m-picture"
    style="--pf-v6-c-brand--Width: 37px; --pf-v6-c-brand--Width-on-md: 220px;"
  >
    <source
      media="(min-width: 768px)"
      srcset="/assets/images/PF-HorizontalLogo-Color.svg"
    />
    <source srcset="/assets/images/PF-IconLogo-color.svg" />
    <img
      src="/assets/images/PF-HorizontalLogo-Color.svg"
      alt="Fallback patternFly default logo"
    />
  </picture>
</div>

<div class="show-dark">
  <picture
    class="pf-v6-c-brand pf-m-picture"
    style="--pf-v6-c-brand--Width: 37px; --pf-v6-c-brand--Width-on-md: 220px;"
  >
    <source
      media="(min-width: 768px)"
      srcset="/assets/images/PF-HorizontalLogo-Reverse.svg"
    />
    <source srcset="/assets/images/PF-IconLogo-Reverse.svg" />
    <img
      src="/assets/images/PF-HorizontalLogo-Color.svg"
      alt="Fallback patternFly default logo"
    />
  </picture>
</div>

```

## Documentation

### Overview

Simple brand component.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-v6-c-brand` | The alt attribute specifies an alternate text for an image, if the image cannot be displayed. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-brand` | `<img>, <picture>` |  Initiates a brand image. **Required** |
| `.pf-m-picture` | `.pf-v6-c-brand` |  Modifies a brand image to a picture. |
| `--pf-v6-c-brand--Width{-on-[breakpoint]}: {width}` | `.pf-v6-c-brand` |  Modifies the width value of a picture on optional [breakpoint](/tokens/all-patternfly-tokens). |
| `--pf-v6-c-brand--Height{-on-[breakpoint]}: {height}` | `.pf-v6-c-brand` |  Modifies the height value of a picture on optional [breakpoint](/tokens/all-patternfly-tokens). |
