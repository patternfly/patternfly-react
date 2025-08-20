---
id: Background image
section: components
cssPrefix: pf-v6-c-background-image
---## Examples

### Basic

```html isFullscreen
<div
  class="pf-v6-c-background-image"
  style="--pf-v6-c-background-image--BackgroundImage: url(/assets/images/pf-background.svg)"
></div>

```

## Documentation

### Overview

In order to set the background image to be used, set the `--pf-v6-c-background-image--BackgroundImage` CSS variable to the path of the image. For example: `--pf-v6-c-background-image--BackgroundImage: url(custom/path/image.jpg);`

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-background-image` | `*` | A fixed background image is applied to the background of the page. |
| `--pf-v6-c-background-image--BackgroundImage` | `.pf-v6-c-background-image` | Sets the background image to be used. **Required** |
