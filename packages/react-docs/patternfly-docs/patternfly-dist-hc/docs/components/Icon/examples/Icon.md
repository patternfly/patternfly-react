---
id: 'Icon'
section: components
cssPrefix: pf-v6-c-icon
---## Examples

### Basic

```html
<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
  </span>
</span>

<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </span>
</span>

<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-angle-down" aria-hidden="true"></i>
  </span>
</span>

<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
</span>

```

### Standalone icon sizes

```html
<span class="pf-v6-c-icon pf-m-sm">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-md">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-lg">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-xl">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-2xl">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-3xl">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>

```

### Body sizes

```html
<span class="pf-v6-c-icon pf-m-body-sm">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-body-default">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-body-lg">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>

```

### Heading sizes

```html
<span class="pf-v6-c-icon pf-m-heading-sm">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-heading-md">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-heading-lg">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-heading-xl">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-heading-2xl">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-heading-3xl">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>

```

### Status colors

```html
<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content pf-m-danger">
    <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content pf-m-warning">
    <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content pf-m-success">
    <i class="fas fa-check-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content pf-m-info">
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon">
  <span class="pf-v6-c-icon__content pf-m-custom">
    <i class="fas fa-bell" aria-hidden="true"></i>
  </span>
</span>

```

### Sizing content within the icon container

Use a size modifier on the icon container to maintain a consistent size, even if the contents change in size.

```html
<span class="pf-v6-c-icon pf-m-3xl pf-m-inline">
  <span class="pf-v6-c-icon__content pf-m-lg">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-3xl pf-m-inline">
  <span class="pf-v6-c-icon__content pf-m-xl">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-3xl pf-m-inline">
  <span class="pf-v6-c-icon__content pf-m-2xl">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
<span class="pf-v6-c-icon pf-m-3xl pf-m-inline">
  <span class="pf-v6-c-icon__content pf-m-3xl">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>

```

### Inline

```html
<div class="pf-v6-c-content">
  <h1>
    Heading
    <span class="pf-v6-c-icon pf-m-inline">
      <span class="pf-v6-c-icon__content">
        <i class="fas fa-plus-circle" aria-hidden="true"></i>
      </span>
    </span>
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
    Sed hendrerit nisi in cursus maximus.
  </p>
  <h2>
    Second level
    <span class="pf-v6-c-icon pf-m-inline">
      <span class="pf-v6-c-icon__content">
        <i class="fas fa-plus-circle" aria-hidden="true"></i>
      </span>
    </span>
  </h2>
  <p>
    <span class="pf-v6-c-icon pf-m-inline">
      <span class="pf-v6-c-icon__content">
        <i class="fas fa-plus-circle" aria-hidden="true"></i>
      </span>
    </span>
    Curabitur accumsan turpis pharetra
    <strong>
      augue tincidunt
      <span class="pf-v6-c-icon pf-m-inline">
        <span class="pf-v6-c-icon__content">
          <i class="fas fa-plus-circle" aria-hidden="true"></i>
        </span>
      </span>
    </strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel
    cursus venenatis. Suspendisse potenti.
  </p>
  <small>
    Sometimes you need small text
    <span class="pf-v6-c-icon pf-m-inline">
      <span class="pf-v6-c-icon__content">
        <i class="fas fa-plus-circle" aria-hidden="true"></i>
      </span>
    </span>
  </small>
</div>Inline with size specified:
<span class="pf-v6-c-icon pf-m-sm pf-m-inline">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
small,
<span class="pf-v6-c-icon pf-m-md pf-m-inline">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
medium,
<span class="pf-v6-c-icon pf-m-lg pf-m-inline">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
large,
<span class="pf-v6-c-icon pf-m-xl pf-m-inline">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</span>
extra large

```

### In progress

```html
<span class="pf-v6-c-icon pf-m-md pf-m-in-progress">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-check-circle" aria-hidden="true"></i>
  </span>
  <span class="pf-v6-c-icon__progress">
    <svg
      class="pf-v6-c-spinner pf-m-md"
      role="progressbar"
      viewBox="0 0 100 100"
      aria-label="Loading..."
    >
      <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
    </svg>
  </span>
</span>

<span class="pf-v6-c-icon pf-m-md">
  <span class="pf-v6-c-icon__content">
    <i class="fas fa-check-circle" aria-hidden="true"></i>
  </span>
  <span class="pf-v6-c-icon__progress">
    <svg
      class="pf-v6-c-spinner pf-m-md"
      role="progressbar"
      viewBox="0 0 100 100"
      aria-label="Loading..."
    >
      <circle class="pf-v6-c-spinner__path" cx="50" cy="50" r="45" fill="none" />
    </svg>
  </span>
</span>

```

## Documentation

### Overview

The icon element is a container used to maintain a stable space for an icon or spinner, regardless of size or aspect ratio of the contents.

Refer to the [icons](/design-foundations/icons) page for information about the PatternFly icon set and guidelines for use.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-icon` | `<span>`, `<div>` | Initiates an icon component. **Required**  |
| `.pf-v6-c-icon__content` | `<span>`, `<div>` | Initiates the icon content. **Required**  |
| `.pf-v6-c-icon__progress` | `<span>`, `<div>` | Initiates a container for a progress spinner.  |
| `.pf-m-inline` | `.pf-v6-c-icon` | Displays the icon inline with text, and allows the icon to inherit the size and color of the parent. |
| `.pf-m-[sm,md,lg,xl,2xl,3xl]` | `.pf-v6-c-icon` | Modifies the icon container to be small, medium, large, extra large, double extra large, or triple extra large. |
| `.pf-m-body-[sm,default,lg]` | `.pf-v6-c-icon` | Modifies the icon container to be a size matching small, default, or large body text. |
| `.pf-m-heading-[sm,md,lg,xl,2xl,3xl]` | `.pf-v6-c-icon` | Modifies the icon container to be a size matching small, medium, large, extra large, double extra large, or triple extra large (h6-h1) heading text. |
| `.pf-m-[sm,md,lg,xl,2xl,3xl]` | `.pf-v6-c-icon__content`, `pf-v6-c-icon__progress` | Modifies the icon content or progress element to be small, medium, large, or extra large. |
| `.pf-m-body-[sm,default,lg]` | `.pf-v6-c-icon__content` | Modifies the icon content or progress element to be a size matching small, default, or large body text. |
| `.pf-m-heading-[sm,md,lg,xl,2xl,3xl]` | `.pf-v6-c-icon__content` | Modifies the icon content or progress element to be a size matching small, medium, large, extra large, double extra large, or triple extra large (h6-h1) heading text. |
| `.pf-m-in-progress` | `.pf-v6-c-icon` | Shows the progress element in place of the icon content.  |
| `.pf-m-danger`, `.pf-m-warning`, `.pf-m-success`, `.pf-m-info`, `.pf-m-custom`  | `.pf-v6-c-icon__content` | Modifies the icon content to use a status color.  |
