---
id: Flex
section: layouts
cssPrefix: pf-v6-l-flex
---import './Flex.css'

## Introduction

The flex layout is based on the CSS Flex properties where the layout determines how a flex item will grow or shrink to fit the space available in its container. By default, a flex layout uses the [spacing system](#spacing-system) to space children along the main axis and [gap spacing](#gap-spacing) to space any wrapping children along the cross axis, `flex-wrap` is set to `wrap`, and `align-items` is set to `baseline`. The flex layout is infinitely nestable and can be nested to group items within.

### Spacing

The flex layout provides two ways of spacing its direct children.

* [Spacing system](#spacing-system)
  * The spacing system applies a margin between the flex layout's direct children to create space between items along the main axis only. The benefit of the spacing system is that it allows for variable spacing between direct children. Use the spacing system when individual flex items along the main axis require a different spacer than sibling items.
* [Gap spacing](#gap-spacing)
  * Gap spacing uses flex `gap` to space the flex layout's direct children, and can be applied to space rows (`row-gap`), columns (`column-gap`), or both (`gap`). The benefit of gap spacing is that item wrapping is improved and improved item spacing that works better with CSS flex's logical layout properties. E.g., spacing in RTL layouts that rely on logical properties is improved. Use the gap system when all direct children should use the same spacer for rows, columns, or both.
  * **Note** using `gap` along the main axis will override any other spacing applied using the spacing system.

### Breakpoints

[Breakpoints](/tokens/all-patternfly-tokens) `-on-sm`, `-on-md`, `-on-lg`, `-on-xl`, and `-on-2xl` are provided.

### Usefulness

* Use when content dictates layout and elements wrap when necessary.
* Use when a rigid grid is not necessary/wanted.

### Differences from utility class

* It contains multiple css declarations and does not use the `!important` tag.
* It does not require wrapping elements in columns or rows.
* It breaks the dependency upon adding utility classes to each child.
* It can be applied to container elements or components.

# Examples

## Basic flex layout

### Basic flex example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Nested flex example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Nested flex and items example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>

  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>

  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Basic flex layout overview

The CSS approach, by keeping specificity low on base class properties and resetting css variable values at higher specificities, allows any spacer property to be overwritten with a single selector (specificity of 10 or greater).

### Basic flex layout usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-l-flex` | `*` | Initiates the flex layout. **Required** |
| `.pf-v6-l-flex__item` | `.pf-v6-l-flex > *` | Initiates a flex item. **Required** |

## Spacing system

### Spacing system on parent example

```html
<div class="pf-v6-l-flex pf-m-space-items-2xl">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Spacing system on children example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex__item pf-m-spacer-none">Item - none</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-xs">Item - xs</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-sm">Item - sm</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-md">Item - md</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-lg">Item - lg</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-xl">Item - xl</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-2xl">Item - 2xl</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-3xl">Item - 3xl</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-4xl">Item - 4xl</div>
</div>

```

### Spacing system on parent and children example

```html
<div class="pf-v6-l-flex pf-m-space-items-2xl">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item pf-m-spacer-md">Flex item - md</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Spacing system usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-space-items-{none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl}{-on-[breakpoint]}` | `.pf-v6-l-flex` |  Modifies the spacer between direct children along the main axis of a flex layout. |
| `.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl}{-on-[breakpoint]}` | `.pf-v6-l-flex > *` |  Modifies the spacer for any individual direct child along the main axis of a flex layout. |

## Gap spacing

### Row gap example

```html
<div class="pf-v6-l-flex pf-m-row-gap-2xl">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Column gap example

```html
<div class="pf-v6-l-flex pf-m-column-gap-2xl">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Gap example

```html
<div class="pf-v6-l-flex pf-m-gap-2xl">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Gap spacing usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-gap{-[none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl]}{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the space between columns and rows. |
| `.pf-m-row-gap{-[none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl]}{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the space between rows. |
| `.pf-m-column-gap{-[none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl]}{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the space between columns. |

## Layout modifiers

### Default layout example

```html
<div class="pf-v6-l-flex ws-example-flex-border">
  <div class="pf-v6-l-flex__item">Flex item</div>

  <div class="pf-v6-l-flex__item">Flex item</div>

  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Inline flex layout example

```html
<div class="pf-v6-l-flex pf-m-inline-flex ws-example-flex-border">
  <div class="pf-v6-l-flex__item">Flex item</div>

  <div class="pf-v6-l-flex__item">Flex item</div>

  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Basic flex grow example

Adjusting width with `.pf-m-grow`, which sets `flex-grow: 1`. In this example, the first group is set to `.pf-m-grow`, will occupy the remaining available space.

```html
<div class="pf-v6-l-flex">
  <div
    class="pf-v6-l-flex pf-m-grow ws-example-flex-border"
    data-label=".pf-m-grow"
  >
    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex ws-example-flex-border">
    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex ws-example-flex-border">
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Flex grow 1 example

Adjusting width with `.pf-m-flex-1`. In this example, all groups are set to `.pf-m-flex-1`. They will share available space equally.

```html
<div class="pf-v6-l-flex">
  <div
    class="pf-v6-l-flex pf-m-flex-1 ws-example-flex-border"
    data-label=".pf-m-flex-1"
  >
    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div
    class="pf-v6-l-flex pf-m-flex-1 ws-example-flex-border"
    data-label=".pf-m-flex-1"
  >
    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div
    class="pf-v6-l-flex pf-m-flex-1 ws-example-flex-border"
    data-label=".pf-m-flex-1"
  >
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Flex grow 1-4 example

```html
<div class="pf-v6-l-flex">
  <div
    class="pf-v6-l-flex pf-m-flex-1 ws-example-flex-border"
    data-label=".pf-m-flex-1"
  >
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div
    class="pf-v6-l-flex pf-m-flex-2 ws-example-flex-border"
    data-label=".pf-m-flex-2"
  >
    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div
    class="pf-v6-l-flex pf-m-flex-3 ws-example-flex-border"
    data-label=".pf-m-flex-3"
  >
    <div class="pf-v6-l-flex__item">Flex item</div>

    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div
    class="pf-v6-l-flex pf-m-flex-4 ws-example-flex-border"
    data-label=".pf-m-flex-4"
  >
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Layout modifiers usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-inline-flex{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout display property to inline-flex. |
| `.pf-m-grow{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex-grow property to 1. |
| `.pf-m-shrink{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex-shrink property to 1. |
| `.pf-m-full-width{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex item to full width of parent. |
| `.pf-m-flex-1{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 1 0 0. |
| `.pf-m-flex-2{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 2 0 0. |
| `.pf-m-flex-3{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 3 0 0. |
| `.pf-m-flex-4{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 4 0 0. |
| `.pf-m-flex-default{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Resets a nested flex layout or flex item flex shorthand property to 0 1 auto. |
| `.pf-m-flex-none{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to none. |

## Column layout modifiers

### Basic column example

```html
<div class="pf-v6-l-flex pf-m-column">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Nested column example

```html
<div class="pf-v6-l-flex pf-m-column">
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>
<br />
<br />
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex pf-m-column">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex pf-m-column">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-column{-on-[breakpoint]}` | `.pf-v6-l-flex` |  Modifies flex-direction property to column. |

## Responsive layouts

### Flex direction responsive example

```html
<div class="pf-v6-l-flex pf-m-column pf-m-row-on-lg">
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>

  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>
<br />
<br />
<div class="pf-v6-l-flex pf-m-column pf-m-row-on-lg">
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">
      <b>Because this text is long enough to wrap, this item's width will force the adjacent item to wrap. If content is likely to wrap, modifiers will need to be used to control width.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.
    </div>
  </div>

  <div class="pf-v6-l-flex pf-m-column">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>
<br />
<br />
<div class="pf-v6-l-flex pf-m-column pf-m-row-on-lg">
  <div class="pf-v6-l-flex pf-m-flex-1">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item pf-m-flex-1">
      <b>
        To control the width of the flex item, set
        <code>.pf-m-flex-1</code>.
      </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.
    </div>
  </div>

  <div class="pf-v6-l-flex pf-m-column">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Responsive layouts usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-column{-on-[breakpoint]}` | `.pf-v6-l-flex`  |  Modifies flex-direction property to column. |
| `.pf-m-row{-on-[breakpoint]}` | `.pf-v6-l-flex`  |  Modifies flex-direction property to row. |

## Alignment

### Basic align right example

Aligning right with `.pf-m-align-right`. This solution will always align element right by setting margin-inline-start: auto, including when wrapped.

```html
<div class="pf-v6-l-flex ws-example-flex-border">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item pf-m-align-right">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Align right on single item example

```html
<div class="pf-v6-l-flex ws-example-flex-border">
  <div class="pf-v6-l-flex__item pf-m-align-right">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Align right on multiple groups example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex pf-m-align-right">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex pf-m-align-right">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

#### Alignment using .pf-m-flex-1 example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex pf-m-flex-1">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Alignment using .pf-m-align-self-flex-end example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex pf-m-column">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex pf-m-column pf-m-align-self-flex-end">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Aligning nested columns with .pf-m-align-self-center example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex pf-m-column">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex pf-m-column pf-m-align-self-center">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Aligning nested columns with .pf-m-align-self-baseline example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex pf-m-column">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex pf-m-column pf-m-align-self-baseline">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Aligning nested columns with .pf-m-align-self-stretch example

```html
<div class="pf-v6-l-flex">
  <div class="pf-v6-l-flex pf-m-column">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
  <div class="pf-v6-l-flex pf-m-column pf-m-align-self-stretch">
    <div class="pf-v6-l-flex__item">Flex item</div>
    <div class="pf-v6-l-flex__item">Flex item</div>
  </div>
</div>

```

### Alignment usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies margin-inline-start property to auto. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Resets margin-inline-start property 0. |
| `.pf-m-align-self-flex-start{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies align-self property to flex-start. |
| `.pf-m-align-self-flex-end{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies align-self property to flex-end. |
| `.pf-m-align-self-flex-center{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies align-self property to center. |
| `.pf-m-align-self-flex-baseline{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies align-self property to baseline. |
| `.pf-m-align-self-flex-stretch{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies align-self property to stretch. |

## Justification

### Justify content flex end example

```html
<div class="pf-v6-l-flex pf-m-justify-content-flex-end ws-example-flex-border">
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Justify content space between example

```html
<div
  class="pf-v6-l-flex pf-m-justify-content-space-between ws-example-flex-border"
>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

### Justify content flex start example

```html
<div
  class="pf-v6-l-flex pf-m-justify-content-flex-start ws-example-flex-border"
>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
  <div class="pf-v6-l-flex__item">Flex item</div>
</div>

```

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-justify-content-flex-end{-on-[breakpoint]}` | `.pf-v6-l-flex` |  Modifies justification property and descendant spacing. |
| `.pf-m-justify-content-flex-space-between{-on-[breakpoint]}` | `.pf-v6-l-flex` |  Modifies justification property and descendant spacing. |
| `.pf-m-justify-content-flex-start{-on-[breakpoint]}` | `.pf-v6-l-flex` |  Modifies justification property and descendant spacing, used primarily to reset spacing to default. |

## Ordering

Ordering - Ordering can be applied to nested `.pf-v6-l-flex` and `.pf-v6-l-flex__item`s. Spacing may need to be managed based on how items are ordered. Because order could apply to an innumerable number of elements, order is set inline as `--pf-v6-l-flex--item--Order{-on-[breakpoint]}: {order}`.

### Basic ordering example

```html
<div class="pf-v6-l-flex">
  <div
    class="pf-v6-l-flex pf-m-spacer-none"
    style="--pf-v6-l-flex--item--Order: 1;"
  >
    <div
      class="pf-v6-l-flex__item pf-m-spacer-none"
      style="--pf-v6-l-flex--item--Order: 3;"
    >Set 1, Item A</div>
    <div
      class="pf-v6-l-flex__item"
      style="--pf-v6-l-flex--item--Order: 1;"
    >Set 1, Item B</div>
    <div class="pf-v6-l-flex__item">Set 1, Item C</div>
    <div class="pf-v6-l-flex__item pf-m-order-2 pf-m-spacer-md">Set 1, Item D</div>
  </div>
  <div class="pf-v6-l-flex pf-m-spacer-md">
    <div
      class="pf-v6-l-flex__item pf-m-spacer-none"
      style="--pf-v6-l-flex--item--Order: 3;"
    >Set 2, Item A</div>
    <div
      class="pf-v6-l-flex__item"
      style="--pf-v6-l-flex--item--Order-on-lg: 1;"
    >Set 2, Item B</div>
    <div class="pf-v6-l-flex__item">Set 2, Item C</div>
    <div
      class="pf-v6-l-flex__item pf-m-spacer-md"
      style="--pf-v6-l-flex--item--Order: 2;"
    >Set 2, Item D</div>
  </div>
</div>

```

### First and last ordering example

```html
<div class="pf-v6-l-flex">
  <div
    class="pf-v6-l-flex__item pf-m-spacer-none"
    style="--pf-v6-l-flex--item--Order: 2;"
  >Item A</div>
  <div class="pf-v6-l-flex__item">Item B</div>
  <div
    class="pf-v6-l-flex__item pf-m-spacer-md"
    style="--pf-v6-l-flex--item--Order: -1;"
  >Item C</div>
</div>

```

### Responsive first last ordering example

```html
<div class="pf-v6-l-flex">
  <div
    class="pf-v6-l-flex__item pf-m-spacer-none-on-lg"
    style="--pf-v6-l-flex--item--Order-on-lg: 2;"
  >Item A</div>
  <div
    class="pf-v6-l-flex__item pf-m-spacer-none-on-md pf-m-spacer-md-on-lg"
    style="--pf-v6-l-flex--item--Order: -1; --pf-v6-l-flex--item--Order-on-md: 1;"
  >Item B</div>
  <div
    class="pf-v6-l-flex__item pf-m-spacer-md"
    style="--pf-v6-l-flex--item--Order-on-md: -1;"
  >Item C</div>
</div>

```

### Responsive ordering example

```html
<div class="pf-v6-l-flex">
  <div
    class="pf-v6-l-flex pf-m-spacer-none"
    style="--pf-v6-l-flex--item--Order-on-lg: 1;"
  >
    <div
      class="pf-v6-l-flex__item"
      style="--pf-v6-l-flex--item--Order-on-md: 2;"
    >Set 1, Item A</div>
    <div
      class="pf-v6-l-flex__item"
      style="--pf-v6-l-flex--item--Order-on-md: -1;"
    >Set 1, Item B</div>
    <div
      class="pf-v6-l-flex__item"
      style="--pf-v6-l-flex--item--Order-on-xl: 1;"
    >Set 1, Item C</div>
    <div
      class="pf-v6-l-flex__item pf-m-spacer-none-on-xl"
      style="--pf-v6-l-flex--item--Order-on-xl: 2;"
    >Set 1, Item D</div>
  </div>
  <div class="pf-v6-l-flex pf-m-spacer-md-on-lg">
    <div
      class="pf-v6-l-flex__item pf-m-spacer-none"
      style="--pf-v6-l-flex--item--Order: 3;"
    >Set 2, Item A</div>
    <div
      class="pf-v6-l-flex__item"
      style="--pf-v6-l-flex--item--Order: 1;"
    >Set 2, Item B</div>
    <div class="pf-v6-l-flex__item">Set 2, Item C</div>
    <div
      class="pf-v6-l-flex__item pf-m-spacer-md"
      style="--pf-v6-l-flex--item--Order: 2;"
    >Set 2, Item D</div>
  </div>
</div>

```

### Ordering usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `--pf-v6-l-flex--item--Order{-on-[breakpoint]}: {order}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies the flex layout element order property. |

## Flex layout as list

```html
<ul class="pf-v6-l-flex">
  <li class="pf-v6-l-flex__item">Flex item</li>
  <li class="pf-v6-l-flex__item">Flex item</li>
  <li class="pf-v6-l-flex__item">Flex item</li>
  <li class="pf-v6-l-flex__item">Flex item</li>
</ul>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-l-flex` | `*` | Initiates the flex layout. **Required** |
| `.pf-v6-l-flex__item` | `.pf-v6-l-flex > *` | Initiates a flex item. **Required** |
| `.pf-m-flex{-on-[breakpoint]}` | `.pf-v6-l-flex` | Initializes or resets the flex layout display property to flex. |
| `.pf-m-inline-flex{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout display property to inline-flex. |
| `.pf-m-grow{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex-grow property to 1. |
| `.pf-m-shrink{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex-shrink property to 1. |
| `.pf-m-full-width{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex item to full width of parent. |
| `.pf-m-flex-1{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 1 0 0. |
| `.pf-m-flex-2{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 2 0 0. |
| `.pf-m-flex-3{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 3 0 0. |
| `.pf-m-flex-4{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 4 0 0. |
| `.pf-m-flex-default{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Resets a nested flex layout or flex item flex shorthand property to 0 1 auto. |
| `.pf-m-flex-none{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to none. |
| `.pf-m-column-reverse{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout flex-direction property to column-reverse. |
| `.pf-m-row-reverse{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout flex-direction property to row-reverse. |
| `.pf-m-wrap{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout flex-wrap property to wrap. |
| `.pf-m-wrap-reverse{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout flex-wrap property to wrap-reverse. |
| `.pf-m-nowrap{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout flex-wrap property to nowrap. |
| `.pf-m-justify-content-flex-start{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout justify-content property to flex-start. |
| `.pf-m-justify-content-flex-end{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout justify-content property to flex-end. |
| `.pf-m-justify-content-center{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout justify-content property to center. |
| `.pf-m-justify-content-space-between{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout justify-content property to space-between. |
| `.pf-m-justify-content-space-around{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout justify-content property to space-around. |
| `.pf-m-justify-content-space-evenly{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout justify-content property to space-evenly. |
| `.pf-m-align-items-flex-start{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-items property to flex-start. |
| `.pf-m-align-items-flex-end{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-items property to flex-end. |
| `.pf-m-align-items-center{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-items property to center. |
| `.pf-m-align-items-stretch{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-items property to stretch. |
| `.pf-m-align-items-baseline{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-items property to baseline. |
| `.pf-m-align-content-flex-start{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-content property to flex-start. |
| `.pf-m-align-content-flex-end{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-content property to flex-end. |
| `.pf-m-align-content-center{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-content property to center. |
| `.pf-m-align-content-stretch{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-content property to stretch. |
| `.pf-m-align-content-space-between{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-content property to space-between. |
| `.pf-m-align-content-space-around{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the flex layout align-content property to space-around. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Resets the flex layout element margin-inline-start property to 0. |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies the flex layout element margin-inline-start property to auto. |
| `--pf-v6-l-flex--item--Order{-on-[breakpoint]}: {order}` | `.pf-v6-l-flex > .pf-v6-l-flex`, `.pf-v6-l-flex__item` | Modifies the flex layout element order property. |

### Spacer system usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-space-items-{none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl}{-on-[breakpoint]}` | `.pf-v6-l-flex` |  Modifies the flex layout to add space between items on the main axis. |
| `.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl}{-on-[breakpoint]}` | `.pf-v6-l-flex`, `.pf-v6-l-flex > .pf-v6-l-flex__item` |  Modifies the spacer for any direct child along the main axis of a flex layout. |

### Gap spacing usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-gap{-[none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl]}{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the space between columns and rows. |
| `.pf-m-row-gap{-[none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl]}{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the space between rows. |
| `.pf-m-column-gap{-[none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl]}{-on-[breakpoint]}` | `.pf-v6-l-flex` | Modifies the space between columns. |
