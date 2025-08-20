---
id: Skeleton
section: components
cssPrefix: pf-v6-c-skeleton
---import './Skeleton.css'

## Examples

### Default

```html
<div class="pf-v6-c-skeleton">
  <span class="pf-v6-screen-reader">Loading default content</span>
</div>

```

### Percentage width modifiers

```html
<div class="pf-v6-c-skeleton pf-m-width-25">
  <span class="pf-v6-screen-reader">Loading percentage with modifiers content</span>
</div>
<br />
<div class="pf-v6-c-skeleton pf-m-width-33"></div>
<br />
<div class="pf-v6-c-skeleton pf-m-width-50"></div>
<br />
<div class="pf-v6-c-skeleton pf-m-width-66"></div>
<br />
<div class="pf-v6-c-skeleton pf-m-width-75"></div>
<br />
<div class="pf-v6-c-skeleton"></div>

```

### Percentage height modifiers

```html
<div class="pf-v6-c-skeleton pf-m-height-25">
  <span class="pf-v6-screen-reader">Loading percentage height modifiers content</span>
</div>
<div class="pf-v6-c-skeleton pf-m-height-33"></div>
<div class="pf-v6-c-skeleton pf-m-height-50"></div>
<div class="pf-v6-c-skeleton pf-m-height-66"></div>
<div class="pf-v6-c-skeleton pf-m-height-75"></div>
<div class="pf-v6-c-skeleton pf-m-height-100"></div>

```

### Text modifiers

```html
--pf-v6-global--FontSize--4xl
<div class="pf-v6-c-skeleton pf-m-text-4xl">
  <span class="pf-v6-screen-reader">Loading text modifiers content</span>
</div>
<br />--pf-v6-global--FontSize--3xl
<div class="pf-v6-c-skeleton pf-m-text-3xl"></div>
<br />--pf-v6-global--FontSize--2xl
<div class="pf-v6-c-skeleton pf-m-text-2xl"></div>
<br />--pf-v6-global--FontSize--xl
<div class="pf-v6-c-skeleton pf-m-text-xl"></div>
<br />--pf-v6-global--FontSize--lg
<div class="pf-v6-c-skeleton pf-m-text-lg"></div>
<br />--pf-v6-global--FontSize--md
<div class="pf-v6-c-skeleton pf-m-text-md"></div>
<br />--pf-v6-global--FontSize--sm
<div class="pf-v6-c-skeleton pf-m-text-sm"></div>

```

### Static height width and shape modifiers

```html
Small circle
<div class="pf-v6-c-skeleton pf-m-circle pf-m-width-sm">
  <span class="pf-v6-screen-reader">Loading circle content</span>
</div>
<br />Medium circle
<div class="pf-v6-c-skeleton pf-m-circle pf-m-width-md"></div>
<br />Large circle
<div class="pf-v6-c-skeleton pf-m-circle pf-m-width-lg"></div>
<br />Small square
<div class="pf-v6-c-skeleton pf-m-square pf-m-width-sm">
  <span class="pf-v6-screen-reader">Loading square content</span>
</div>
<br />Medium square
<div class="pf-v6-c-skeleton pf-m-square pf-m-width-md"></div>
<br />Large square
<div class="pf-v6-c-skeleton pf-m-square pf-m-width-lg"></div>
<br />Small rectangle
<div class="pf-v6-c-skeleton pf-m-height-sm pf-m-width-md">
  <span class="pf-v6-screen-reader">Loading rectangle content</span>
</div>
<br />Medium rectangle
<div class="pf-v6-c-skeleton pf-m-height-md pf-m-width-lg"></div>
<br />Large rectangle
<div class="pf-v6-c-skeleton pf-m-height-lg"></div>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-skeleton` | `<div>` | Initiates the skeleton component. **Required** |
| `.pf-m-width-[sm, md, lg, 25, 33, 50, 66, 75]` | `.pf-v6-c-skeleton` | Modifies the width of the skeleton. The default is 100%. |
| `.pf-m-height-[sm, md, lg, 25, 33, 50, 66, 75, 100]` | `.pf-v6-c-skeleton` | Modifies the height of the skeleton. The default is the inherited font size. |
| `.pf-m-text-[sm, md, lg, xl, 2xl, 3xl, 4xl]` | `.pf-v6-c-skeleton` | Modifies the skeleton height to match the height of PatternFly's text elements. |
| `.pf-m-circle` | `.pf-v6-c-skeleton` | Modifies the border radius of the skeleton to be a circle. Use a width modifier to specify the size. |
| `.pf-m-square` | `.pf-v6-c-skeleton` | Modifies the border radius of the skeleton to be a square. Use a width modifier to specify the size. |
