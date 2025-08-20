---
id: Title
section: components
cssPrefix: pf-v6-c-title
---## Examples

### Size modifiers

```html
<h1 class="pf-v6-c-title pf-m-4xl">4xl title</h1>
<h1 class="pf-v6-c-title pf-m-3xl">3xl title</h1>
<h1 class="pf-v6-c-title pf-m-2xl">2xl title</h1>
<h1 class="pf-v6-c-title pf-m-xl">xl title</h1>
<h1 class="pf-v6-c-title pf-m-lg">lg title</h1>
<h1 class="pf-v6-c-title pf-m-md">md title</h1>

```

### Heading level modifiers

```html
<h1 class="pf-v6-c-title pf-m-h1">H1-styled title</h1>
<h2 class="pf-v6-c-title pf-m-h2">H2-styled title</h2>
<h3 class="pf-v6-c-title pf-m-h3">H3-styled title</h3>
<h4 class="pf-v6-c-title pf-m-h4">H4-styled title</h4>
<h5 class="pf-v6-c-title pf-m-h5">H5-styled title</h5>
<h6 class="pf-v6-c-title pf-m-h6">H6-styled title</h6>

```

### Page title

```html
<h1 class="pf-v6-c-title pf-m-2xl pf-m-page-title">2xl page title</h1>

<h1 class="pf-v6-c-title pf-m-h1 pf-m-page-title">H1 page title</h1>

```

## Documentation

### Overview

The title component styles font-size, font-weight, and line-height to titles.

The content component defines margin on headers. To regain the same spacing use, spacer utility classes:

| Title | Margin top | Margin bottom |
| -- | -- | -- |
| 4xl | `.pf-v6-u-mt-lg` | `.pf-v6-u-mb-sm` |
| 3xl | `.pf-v6-u-mt-lg` | `.pf-v6-u-mb-sm` |
| 2xl | `.pf-v6-u-mt-lg` | `.pf-v6-u-mb-sm` |
| xl | `.pf-v6-u-mt-lg` | `.pf-v6-u-mb-sm` |
| lg | `.pf-v6-u-mt-lg` | `.pf-v6-u-mb-sm` |
| md | `.pf-v6-u-mt-lg` | `.pf-v6-u-mb-sm` |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-title` | `h1-h6` |  Initiates a title. Always use it with a modifier class. |
| `.pf-m-4xl` | `.pf-v6-c-title` | Modifies for 4xl size |
| `.pf-m-3xl` | `.pf-v6-c-title` | Modifies for 3xl size |
| `.pf-m-2xl` | `.pf-v6-c-title` | Modifies for 2xl size |
| `.pf-m-xl` | `.pf-v6-c-title` | Modifies for xl size |
| `.pf-m-lg` | `.pf-v6-c-title` | Modifies for lg size |
| `.pf-m-md` | `.pf-v6-c-title` | Modifies for md size |
| `.pf-m-h1` | `.pf-v6-c-title` | Modifies for default h1 size |
| `.pf-m-h2` | `.pf-v6-c-title` | Modifies for default h2 size |
| `.pf-m-h3` | `.pf-v6-c-title` | Modifies for default h3 size |
| `.pf-m-h4` | `.pf-v6-c-title` | Modifies for default h4 size |
| `.pf-m-h5` | `.pf-v6-c-title` | Modifies for default h5 size |
| `.pf-m-h6` | `.pf-v6-c-title` | Modifies for default h6 size |
| `.pf-m-page-title` | `.pf-v6-c-title` | Applies page title styles. **Note:** `.pf-m-page-title` should only apply to the heading that serves as the title for the current page. |
