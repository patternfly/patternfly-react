---
id: Avatar
section: components
cssPrefix: pf-v6-c-avatar
---## Examples

### Basic

```html
<img
  class="pf-v6-c-avatar"
  alt="Avatar image"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Bordered

```html
<img
  class="pf-v6-c-avatar pf-m-bordered"
  alt="Avatar image bordered"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Small

```html
<img
  class="pf-v6-c-avatar pf-m-sm"
  alt="Avatar image small"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Medium

```html
<img
  class="pf-v6-c-avatar pf-m-md"
  alt="Avatar image medium"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Large

```html
<img
  class="pf-v6-c-avatar pf-m-lg"
  alt="Avatar image large"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Extra large

```html
<img
  class="pf-v6-c-avatar pf-m-xl"
  alt="Avatar image extra large"
  src="/assets/images/img_avatar-light.svg"
/>

```

## Documentation

### Overview

The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-v6-c-avatar` | The alt attribute describes the appearance and function of the avatar image. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-avatar` | `<img>` |  Initiates an avatar image. **Required** |
| `.pf-m-bordered` | `.pf-v6-c-avatar` | Modifies an avatar to have a border. |
| `.pf-m-sm{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be small on an optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-md{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be medium on an optional [breakpoint](/tokens/all-patternfly-tokens). **Note:** This is the default size. |
| `.pf-m-lg{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be large on an optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-xl{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be extra large on an optional [breakpoint](/tokens/all-patternfly-tokens). |
