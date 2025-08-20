---
id: Flex
section: utility-classes
---import './Flex.css'

## Examples

### Basic

```html
<div class="pf-v6-u-display-flex">Display flex</div>
<div class="pf-v6-u-display-inline-flex">Display inline flex</div>

```

### Direction

```html
<h2 class="pf-v6-c-title pf-m-lg">Flex row</h2>
<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Flex row-reverse</h2>
<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row-reverse">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Flex column</h2>
<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Flex column-reverse</h2>
<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column-reverse">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>

```

### Justified content

```html
<h2 class="pf-v6-c-title pf-m-lg">Justify content flex-start</h2>
<div class="pf-v6-u-display-flex pf-v6-u-justify-content-flex-start">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Justify content flex-end</h2>
<div class="pf-v6-u-display-flex pf-v6-u-justify-content-flex-end">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Justify content center</h2>
<div class="pf-v6-u-display-flex pf-v6-u-justify-content-center">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Justify content space-around</h2>
<div class="pf-v6-u-display-flex pf-v6-u-justify-content-space-around">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Justify content space-between</h2>
<div class="pf-v6-u-display-flex pf-v6-u-justify-content-space-between">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>

```

### Aligned items

```html
<h2 class="pf-v6-c-title pf-m-lg">Align items flex-start</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-items-flex-start">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item ws-example-u-flex-md">Flex item 2</div>

  <div class="ws-example-flex-item ws-example-u-flex-lg">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align items flex-end</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-items-flex-end">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item ws-example-u-flex-md">Flex item 2</div>

  <div class="ws-example-flex-item ws-example-u-flex-lg">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align items center</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-items-center">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item ws-example-u-flex-md">Flex item 2</div>

  <div class="ws-example-flex-item ws-example-u-flex-lg">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align items baseline</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-items-baseline">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item ws-example-u-flex-md">Flex item 2</div>

  <div class="ws-example-flex-item ws-example-u-flex-lg">Flex item 3</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align items stretch</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-items-stretch">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>
</div>

```

### Aligned self

```html
<div class="pf-v6-u-display-flex">
  <div class="ws-example-flex-item pf-v6-u-align-self-flex-start">flex-start</div>
  <div class="ws-example-flex-item pf-v6-u-align-self-center">center</div>
  <div class="ws-example-flex-item pf-v6-u-align-self-flex-end">flex end</div>
  <div class="ws-example-flex-item pf-v6-u-align-self-baseline">baseline</div>
  <div class="ws-example-flex-item pf-v6-u-align-self-stretch">stretch</div>
</div>

```

### Aligned content

```html
<h2 class="pf-v6-c-title pf-m-lg">Align content flex-start</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-content-flex-start">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align content flex-end</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-content-flex-end">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align content center</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-content-center">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align content space-around</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-content-space-around">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align content space-between</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-content-space-between">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Align content stretch</h2>
<div class="pf-v6-u-display-flex pf-v6-u-align-content-stretch">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>
</div>

```

### Shrink

```html
<div class="pf-v6-u-display-flex">
  <div class="ws-example-flex-item pf-v6-u-flex-shrink-0">Flex shrink 0</div>
  <div class="ws-example-flex-item pf-v6-u-flex-shrink-1">Flex shrink 1</div>
</div>

```

### Grow

```html
<div class="pf-v6-u-display-flex">
  <div class="ws-example-flex-item pf-v6-u-flex-grow-0">Flex grow 0</div>
  <div class="ws-example-flex-item pf-v6-u-flex-grow-1">Flex grow 1</div>
</div>

```

### Basis and none

```html
<div class="pf-v6-u-display-flex">
  <div class="ws-example-flex-item pf-v6-u-flex-basis-0">Flex basis 0</div>
  <div class="ws-example-flex-item pf-v6-u-flex-basis-auto">Flex basis auto</div>
  <div class="ws-example-flex-item pf-v6-u-flex-basis-none">Flex basis none</div>
  <div class="ws-example-flex-item pf-v6-u-flex-1">Flex 1</div>
</div>

```

### Fill

```html
<div class="pf-v6-u-display-flex">
  <div class="ws-example-flex-item pf-v6-u-flex-none">Flex none</div>
  <div class="ws-example-flex-item pf-v6-u-flex-fill">Flex fill</div>
</div>

```

### Wrap

```html
<h2 class="pf-v6-c-title pf-m-lg">Flex wrap</h2>
<div class="pf-v6-u-display-flex pf-v6-u-flex-wrap">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>

  <div class="ws-example-flex-item">Flex item 6</div>

  <div class="ws-example-flex-item">Flex item 7</div>

  <div class="ws-example-flex-item">Flex item 8</div>

  <div class="ws-example-flex-item">Flex item 9</div>

  <div class="ws-example-flex-item">Flex item 10</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Flex no wrap</h2>
<div class="pf-v6-u-display-flex pf-v6-u-flex-nowrap">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>

  <div class="ws-example-flex-item">Flex item 6</div>

  <div class="ws-example-flex-item">Flex item 7</div>

  <div class="ws-example-flex-item">Flex item 8</div>

  <div class="ws-example-flex-item">Flex item 9</div>

  <div class="ws-example-flex-item">Flex item 10</div>
</div>
<br />
<h2 class="pf-v6-c-title pf-m-lg">Flex wrap reverse</h2>
<div class="pf-v6-u-display-flex pf-v6-u-flex-wrap-reverse">
  <div class="ws-example-flex-item">Flex item 1</div>

  <div class="ws-example-flex-item">Flex item 2</div>

  <div class="ws-example-flex-item">Flex item 3</div>

  <div class="ws-example-flex-item">Flex item 4</div>

  <div class="ws-example-flex-item">Flex item 5</div>

  <div class="ws-example-flex-item">Flex item 6</div>

  <div class="ws-example-flex-item">Flex item 7</div>

  <div class="ws-example-flex-item">Flex item 8</div>

  <div class="ws-example-flex-item">Flex item 9</div>

  <div class="ws-example-flex-item">Flex item 10</div>
</div>

```

## Documentation

### Overview

For these utilities to have effect, the parent element must be set to `display: flex` or `display: inline-flex`. [Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-flex-row-on-lg`

<!-- ## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-v6-u-flex` |  accessibility notes. |
 -->

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-flex-direction-row{-on-[breakpoint]}`            | `*` |  Sets flex-direction: row |
| `.pf-v6-u-flex-direction-row-reverse{-on-[breakpoint]}`    | `*` |  Sets flex-direction: row-reverse |
| `.pf-v6-u-flex-direction-column{-on-[breakpoint]}`         | `*` |  Sets flex-direction: column |
| `.pf-v6-u-flex-direction-column-reverse{-on-[breakpoint]}` | `*` |  Sets flex-direction: column-reverse |
| `.pf-v6-u-justify-content-flex-start{-on-[breakpoint]}`    | `*` |  Sets justify-content: flex-start |
| `.pf-v6-u-justify-content-flex-end{-on-[breakpoint]}`      | `*` |  Sets justify-content: flex-end |
| `.pf-v6-u-justify-content-center{-on-[breakpoint]}`        | `*` |  Sets justify-content: center |
| `.pf-v6-u-justify-content-space-around{-on-[breakpoint]}`  | `*` |  Sets justify-content: space-around |
| `.pf-v6-u-justify-content-space-between{-on-[breakpoint]}` | `*` |  Sets justify-content: space-between |
| `.pf-v6-u-align-items-flex-start{-on-[breakpoint]}`        | `*` |  Sets align-items: flex-start |
| `.pf-v6-u-align-items-flex-end{-on-[breakpoint]}`          | `*` |  Sets align-items: flex-start |
| `.pf-v6-u-align-items-center{-on-[breakpoint]}`            | `*` |  Sets align-items: center |
| `.pf-v6-u-align-items-baseline{-on-[breakpoint]}`          | `*` |  Sets align-items: baseline |
| `.pf-v6-u-align-items-stretch{-on-[breakpoint]}`           | `*` |  Sets align-items: stretch |
| `.pf-v6-u-align-self-flex-start{-on-[breakpoint]}`         | `*` |  Sets align-self: flex-start |
| `.pf-v6-u-align-self-flex-end{-on-[breakpoint]}`           | `*` |  Sets align-self: flex-end |
| `.pf-v6-u-align-self-center{-on-[breakpoint]}`             | `*` |  Sets align-self: center |
| `.pf-v6-u-align-self-baseline{-on-[breakpoint]}`           | `*` |  Sets align-self: baseline |
| `.pf-v6-u-align-self-stretch{-on-[breakpoint]}`            | `*` |  Sets align-self: stretch |
| `.pf-v6-u-align-content-flex-start{-on-[breakpoint]}`      | `*` |  Sets align-content: flex-start |
| `.pf-v6-u-align-content-flex-end{-on-[breakpoint]}`        | `*` |  Sets align-content: flex-end |
| `.pf-v6-u-align-content-center{-on-[breakpoint]}`          | `*` |  Sets align-content: center |
| `.pf-v6-u-align-content-space-between{-on-[breakpoint]}`   | `*` |  Sets align-content: space-between |
| `.pf-v6-u-align-content-space-around{-on-[breakpoint]}`    | `*` |  Sets align-content: space-around |
| `.pf-v6-u-align-content-stretch{-on-[breakpoint]}`         | `*` |  Sets align-content: stretch |
| `.pf-v6-u-flex-shrink{1 or 0}{-on-[breakpoint]}`           | `*` |  Sets flex-shrink to 1 or 0 |
| `.pf-v6-u-flex-grow{1 or 0}{-on-[breakpoint]}`             | `*` |  Sets flex-grow to 1 or 0 |
| `.pf-v6-u-flex-basis{0 or auto}{-on-[breakpoint]}`         | `*` |  Sets flex-basis to 0 auto |
| `.pf-v6-u-flex-fill{-on-[breakpoint]}`                     | `*` |  Sets flex to 1 1 auto |
| `.pf-v6-u-flex-wrap{-on-[breakpoint]}`                     | `*` |  sets flex-wrap: wrap |
| `.pf-v6-u-flex-nowrap{-on-[breakpoint]}`                   | `*` |  sets flex-wrap: nowrap |
| `.pf-v6-u-flex-wrap-reverse{-on-[breakpoint]}`             | `*` |  sets flex-wrap: wrap-reverse |
