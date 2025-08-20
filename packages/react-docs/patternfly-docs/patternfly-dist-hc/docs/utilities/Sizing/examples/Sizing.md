---
id: Sizing
section: utility-classes
---import './Sizing.css'

## Examples

### Width base and percentage units

```html
<div class="ws-example-u-sizing-item pf-v6-u-w-0">.pf-v6-u-w-0</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-25">.pf-v6-u-w-25</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-50">.pf-v6-u-w-50</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-75">.pf-v6-u-w-75</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-100">.pf-v6-u-w-100</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-w-initial"
>.pf-v6-u-w-initial (auto)</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-inherit">.pf-v6-u-w-inherit</div>

```

### Usage

[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-w-initial-on-lg`

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-w-initial{-on-[breakpoint]}` | `*` | Sets width: initial (auto) |
| `.pf-v6-u-w-inherit{-on-[breakpoint]}` | `*` | Sets width: inherit |
| `.pf-v6-u-w-0{-on-[breakpoint]}`  | `*` | Sets width: 0% |
| `.pf-v6-u-w-25{-on-[breakpoint]}` | `*` | Sets width: 25% |
| `.pf-v6-u-w-33{-on-[breakpoint]}` | `*` | Sets width: calc(100% / 3) |
| `.pf-v6-u-w-50{-on-[breakpoint]}` | `*` | Sets width: 50% |
| `.pf-v6-u-w-66{-on-[breakpoint]}` | `*` | Sets width: calc(100% / 3 \* 2) |
| `.pf-v6-u-w-75{-on-[breakpoint]}` | `*` | Sets width: 75% |
| `.pf-v6-u-w-100{-on-[breakpoint]}` | `*` | Sets width: 100% |

### Width viewport units

```html isFullscreen
<div class="ws-example-u-sizing-item pf-v6-u-w-25vw">.pf-v6-u-w-25vw</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-33vw">.pf-v6-u-w-33vw</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-50vw">.pf-v6-u-w-50vw</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-66vw">.pf-v6-u-w-66vw</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-75vw">.pf-v6-u-w-75vw</div>
<div class="ws-example-u-sizing-item pf-v6-u-w-100vw">.pf-v6-u-w-100vw</div>

```

### Usage

[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-w-25vw-on-lg`

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-w-25vw{-on-[breakpoint]}` | `*` | Sets width: 25vw |
| `.pf-v6-u-w-33vw{-on-[breakpoint]}` | `*` | Sets width: calc(100vw / 3) |
| `.pf-v6-u-w-50vw{-on-[breakpoint]}` | `*` | Sets width: 50vw |
| `.pf-v6-u-w-66vw{-on-[breakpoint]}` | `*` | Sets width: calc(100vw / 3 \* 2) |
| `.pf-v6-u-w-75vw{-on-[breakpoint]}` | `*` | Sets width: 75vw |
| `.pf-v6-u-w-100vw{-on-[breakpoint]}` | `*` | Sets width: 100vw |

### Height base and percentage units

```html
<div
  class="ws-example-u-sizing-item pf-v6-u-h-0 pf-v6-u-display-inline-block"
>.pf-v6-u-h-0</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-25 pf-v6-u-display-inline-block"
>.pf-v6-u-h-25</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-50 pf-v6-u-display-inline-block"
>.pf-v6-u-h-50</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-75 pf-v6-u-display-inline-block"
>.pf-v6-u-h-75</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-100 pf-v6-u-display-inline-block"
>.pf-v6-u-h-100</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-initial pf-v6-u-display-inline-block"
>.pf-v6-u-h-initial</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-inherit pf-v6-u-display-inline-block"
>.pf-v6-u-h-inherit</div>

```

### Usage

[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-h-initial-on-lg`

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-h-initial{-on-[breakpoint]}` | `*` | Sets height: initial (auto) |
| `.pf-v6-u-h-inherit{-on-[breakpoint]}` | `*` | Sets height: inherit |
| `.pf-v6-u-h-0{-on-[breakpoint]}` | `*` | Sets height: 0% |
| `.pf-v6-u-h-25{-on-[breakpoint]}`| `*` | Sets height: 25% |
| `.pf-v6-u-h-33{-on-[breakpoint]}`| `*` | Sets height: calc(100% / 3) |
| `.pf-v6-u-h-50{-on-[breakpoint]}`| `*` | Sets height: 50% |
| `.pf-v6-u-h-66{-on-[breakpoint]}`| `*` | Sets height: calc(100% / 3 \* 2) |
| `.pf-v6-u-h-75{-on-[breakpoint]}`| `*` | Sets height: 75% |
| `.pf-v6-u-h-100{-on-[breakpoint]}` | `*` | Sets height: 100% |

### Height viewport units

```html isFullscreen
<div
  class="ws-example-u-sizing-item pf-v6-u-h-25vh pf-v6-u-display-inline-block"
>.pf-v6-u-h-25vh</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-33vh pf-v6-u-display-inline-block"
>.pf-v6-u-h-33vh</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-50vh pf-v6-u-display-inline-block"
>.pf-v6-u-h-50vh</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-66vh pf-v6-u-display-inline-block"
>.pf-v6-u-h-66vh</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-75vh pf-v6-u-display-inline-block"
>.pf-v6-u-h-75vh</div>
<div
  class="ws-example-u-sizing-item pf-v6-u-h-100vh pf-v6-u-display-inline-block"
>.pf-v6-u-h-100vh</div>

```

### Usage

[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-h-25vh-on-lg`

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-h-25vh{-on-[breakpoint]}` | `*` | Sets height: 25vh |
| `.pf-v6-u-h-33vh{-on-[breakpoint]}` | `*` | Sets height: calc(100vh / 3) |
| `.pf-v6-u-h-50vh{-on-[breakpoint]}` | `*` | Sets height: 50vh |
| `.pf-v6-u-h-66vh{-on-[breakpoint]}` | `*` | Sets height: calc(100vh / 3 \* 2) |
| `.pf-v6-u-h-75vh{-on-[breakpoint]}` | `*` | Sets height: 75vh |
| `.pf-v6-u-h-100vh{-on-[breakpoint]}` | `*` | Sets height: 100vh |

### Min width

```html
<div
  class="pf-v6-u-min-width"
  style="--pf-v6-u-min-width--MinWidth: 50ch;"
>Min-width 50ch example</div>

```

### Max width

```html
<div
  class="pf-v6-u-max-width"
  style="--pf-v6-u-max-width--MaxWidth: 50ch;"
>Max-width 50ch example</div>

```

### Min and max width

```html
<div
  class="pf-v6-u-min-width pf-v6-u-max-width"
  style="--pf-v6-u-min-width--MinWidth: 30ch; --pf-v6-u-max-width--MaxWidth: 50ch;"
>Min-width 30ch, max-width 50ch example</div>

```

### Responsive width control

```html
<div
  class="pf-v6-u-min-width pf-v6-u-max-width"
  style="--pf-v6-u-min-width--MinWidth: 20ch; --pf-v6-u-max-width--MaxWidth: 30ch; --pf-v6-u-max-width--MaxWidth-on-md: 50ch; --pf-v6-u-max-width--MaxWidth-on-xl: 70ch;"
>Min-width 20ch, max-width 30ch, max-width-on-md 50ch, max-width-on-xl 70ch example</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-min-width` | `*` | Sets min-width: `var(--pf-v6-u-min-width--MinWidth{-on-[breakpoint]})`. |
| `.pf-v6-u-max-width` | `*` | Sets min-width: `var(--pf-v6-u-max-width--MaxWidth{-on-[breakpoint]})`. |

[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.--pf-v6-u-min-width--MinWidth-on-lg`

| Custom property | Applied to | Outcome |
| -- | -- | -- |
| `--pf-v6-u-min-width--MinWidth{-on-[breakpoint]}: {width}` | `.pf-v6-u-min-width` | Modifies the min width custom property. |
| `--pf-v6-u-max-width--MaxWidth{-on-[breakpoint]}: {width}` | `.pf-v6-u-max-width` | Modifies the max width custom property. |

### Min height

```html
<div
  class="pf-v6-u-min-height"
  style="--pf-v6-u-min-height--MinHeight: 50ch;"
>Min-height 50ch example</div>

```

### Max height

```html
<div
  class="pf-v6-u-max-height"
  style="--pf-v6-u-max-height--MaxHeight: 50ch;"
>Max-height 50ch example</div>

```

### Min and max height

```html
<div
  class="pf-v6-u-min-height pf-v6-u-max-height"
  style="--pf-v6-u-min-height--MinHeight: 30ch; --pf-v6-u-max-height--MaxHeight: 50ch;"
>Min-height 30ch, max-height 50ch example</div>

```

### Responsive height control

```html
<div
  class="pf-v6-u-min-height pf-v6-u-max-height"
  style="--pf-v6-u-min-height--MinHeight: 20ch; --pf-v6-u-max-height--MaxHeight: 30ch; --pf-v6-u-max-height--MaxHeight-on-md: 50ch; --pf-v6-u-max-height--MaxHeight-on-xl: 70ch;"
>Min-height 20ch, max-height 30ch, max-height-on-md 50ch, max-height-on-xl 70ch example</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-min-height` | `*` | Sets min-height: `var(--pf-v6-u-min-height--MinHeight{-on-[breakpoint]})`. |
| `.pf-v6-u-max-height` | `*` | Sets max-height: `var(--pf-v6-u-max-height--MaxHeight{-on-[breakpoint]})`. |

[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.--pf-v6-u-min-height--MinHeight-on-lg`

| Custom property | Applied to | Outcome |
| -- | -- | -- |
| `--pf-v6-u-min-height--MinHeight{-on-[breakpoint]}: {height}` | `.pf-v6-u-min-height` | Modifies the min height custom property. |
| `--pf-v6-u-max-height--MaxHeight{-on-[breakpoint]}: {height}` | `.pf-v6-u-max-height` | Modifies the max height custom property. |
