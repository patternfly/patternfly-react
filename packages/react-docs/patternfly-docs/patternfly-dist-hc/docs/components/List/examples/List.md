---
id: List
section: components
cssPrefix: pf-v6-c-list
---## Examples

### Unordered

```html
<ul class="pf-v6-c-list" role="list">
  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li>
    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
    <ul class="pf-v6-c-list" role="list">
      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li>
        Ut venenatis, nisl scelerisque.
        <ol class="pf-v6-c-list" role="list">
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
          <li>Integer in volutpat libero.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Ut non enim metus.</li>
</ul>

```

### Ordered

```html
<ol class="pf-v6-c-list" role="list">
  <li>Donec blandit a lorem id convallis.</li>
  <li>Cras gravida arcu at diam gravida gravida.</li>
  <li>Integer in volutpat libero.</li>
  <li>Donec a diam tellus.</li>
  <li>
    Etiam auctor nisl et.
    <ul class="pf-v6-c-list" role="list">
      <li>Donec blandit a lorem id convallis.</li>
      <li>Cras gravida arcu at diam gravida gravida.</li>
      <li>
        Integer in volutpat libero.
        <ol class="pf-v6-c-list" role="list">
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Aenean nec tortor orci.</li>
  <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
  <li>Vivamus maximus ultricies pulvinar.</li>
</ol>

```

### Inline

```html
<ul class="pf-v6-c-list pf-m-inline" role="list">
  <li>Inline list item 1</li>
  <li>Inline list item 2</li>
  <li>Inline list item 3</li>
</ul>

```

### Plain

```html
<ul class="pf-v6-c-list pf-m-plain" role="list">
  <li>Donec blandit a lorem id convallis.</li>
  <li>Integer in volutpat libero.</li>
  <li>
    Donec a diam tellus.
    <ul class="pf-v6-c-list" role="list">
      <li>Donec blandit a lorem id convallis.</li>
      <li>Cras gravida arcu at diam gravida gravida.</li>
      <li>Integer in volutpat libero.</li>
    </ul>
  </li>
  <li>Aenean nec tortor orci.</li>
  <li>Vivamus maximus ultricies pulvinar.</li>
</ul>

```

### With horizontal rules

```html
<ul class="pf-v6-c-list pf-m-plain pf-m-bordered" role="list">
  <li>Donec blandit a lorem id convallis.</li>
  <li>Integer in volutpat libero.</li>
  <li>Donec a diam tellus.</li>
  <li>Aenean nec tortor orci.</li>
  <li>Vivamus maximus ultricies pulvinar.</li>
</ul>

```

### With small icons

```html
<ul class="pf-v6-c-list pf-m-plain" role="list">
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
      <i class="fas fa-book-open fa-fw" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-list__item-text">List item one</span>
  </li>
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
      <i class="fas fa-key fa-fw" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-list__item-text">List item two</span>
  </li>
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
      <i class="fas fa-desktop fa-fw" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-list__item-text">List item three</span>
  </li>
</ul>

```

### With large icons

```html
<ul class="pf-v6-c-list pf-m-plain pf-m-icon-lg" role="list">
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
      <i class="fas fa-book-open fa-fw" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-list__item-text">List item one</span>
  </li>
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
      <i class="fas fa-key fa-fw" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-list__item-text">List item two</span>
  </li>
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
      <i class="fas fa-desktop fa-fw" aria-hidden="true"></i>
    </span>
    <span class="pf-v6-c-list__item-text">List item three</span>
  </li>
</ul>

```

## Documentation

### Overview

Non-inline lists can be nested up to any level.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-list` | `<ul>, <ol>` | Initiates a list. **Required**  |
| `.pf-m-inline` | `.pf-v6-c-list` | Displays list items inline. |
| `.pf-m-plain` | `.pf-v6-c-list` |  Removes the list marker and base indentation. |
| `.pf-m-bordered` | `.pf-v6-c-list` | Add horizontal divider between items in a list. |
| `.pf-m-icon-lg` | `.pf-v6-c-list` | Show all the icons or logos in the list large. |
