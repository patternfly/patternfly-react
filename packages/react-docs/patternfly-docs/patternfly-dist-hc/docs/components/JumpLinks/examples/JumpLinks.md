---
id: Jump links
section: components
cssPrefix: pf-v6-c-jump-links
---## Examples

### Horizontal default

```html
<nav class="pf-v6-c-jump-links">
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Horizontal with centered list

```html
<nav class="pf-v6-c-jump-links pf-m-center">
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Horizontal with label

```html
<nav class="pf-v6-c-jump-links" aria-label="Jump to section">
  <div class="pf-v6-c-jump-links__main">
    <div class="pf-v6-c-jump-links__header">
      <div class="pf-v6-c-jump-links__label">Jump to section</div>
    </div>
    <ul class="pf-v6-c-jump-links__list" role="list">
      <li class="pf-v6-c-jump-links__item">
        <span class="pf-v6-c-jump-links__link">
          <a class="pf-v6-c-button pf-m-link" href="#">
            <span class="pf-v6-c-button__text">
              <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
            </span>
          </a>
        </span>
      </li>
      <li class="pf-v6-c-jump-links__item pf-m-current">
        <span class="pf-v6-c-jump-links__link">
          <a class="pf-v6-c-button pf-m-link" href="#">
            <span class="pf-v6-c-button__text">
              <span class="pf-v6-c-jump-links__link-text">Active section</span>
            </span>
          </a>
        </span>
      </li>
      <li class="pf-v6-c-jump-links__item">
        <span class="pf-v6-c-jump-links__link">
          <a class="pf-v6-c-button pf-m-link" href="#">
            <span class="pf-v6-c-button__text">
              <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
            </span>
          </a>
        </span>
      </li>
    </ul>
  </div>
</nav>
<br />
<nav class="pf-v6-c-jump-links pf-m-center" aria-label="Jump to section">
  <div class="pf-v6-c-jump-links__main">
    <div class="pf-v6-c-jump-links__header">
      <div class="pf-v6-c-jump-links__label">Jump to section</div>
    </div>
    <ul class="pf-v6-c-jump-links__list" role="list">
      <li class="pf-v6-c-jump-links__item">
        <span class="pf-v6-c-jump-links__link">
          <a class="pf-v6-c-button pf-m-link" href="#">
            <span class="pf-v6-c-button__text">
              <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
            </span>
          </a>
        </span>
      </li>
      <li class="pf-v6-c-jump-links__item pf-m-current">
        <span class="pf-v6-c-jump-links__link">
          <a class="pf-v6-c-button pf-m-link" href="#">
            <span class="pf-v6-c-button__text">
              <span class="pf-v6-c-jump-links__link-text">Active section</span>
            </span>
          </a>
        </span>
      </li>
      <li class="pf-v6-c-jump-links__item">
        <span class="pf-v6-c-jump-links__link">
          <a class="pf-v6-c-button pf-m-link" href="#">
            <span class="pf-v6-c-button__text">
              <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
            </span>
          </a>
        </span>
      </li>
    </ul>
  </div>
</nav>

```

### Vertical default

```html
<nav class="pf-v6-c-jump-links pf-m-vertical">
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Vertical with label

```html
<nav class="pf-v6-c-jump-links pf-m-vertical" aria-label="Jump to section">
  <div class="pf-v6-c-jump-links__header">
    <div class="pf-v6-c-jump-links__label">Jump to section</div>
  </div>
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Vertical with inactive subsections

```html
<nav class="pf-v6-c-jump-links pf-m-vertical" aria-label="Jump to section">
  <div class="pf-v6-c-jump-links__header">
    <div class="pf-v6-c-jump-links__label">Jump to section</div>
  </div>
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
      <ul class="pf-v6-c-jump-links__list" role="list">
        <li class="pf-v6-c-jump-links__item">
          <span class="pf-v6-c-jump-links__link">
            <a class="pf-v6-c-button pf-m-link" href="#">
              <span class="pf-v6-c-button__text">
                <span class="pf-v6-c-jump-links__link-text">Inactive subsection</span>
              </span>
            </a>
          </span>
        </li>
        <li class="pf-v6-c-jump-links__item">
          <span class="pf-v6-c-jump-links__link">
            <a class="pf-v6-c-button pf-m-link" href="#">
              <span class="pf-v6-c-button__text">
                <span class="pf-v6-c-jump-links__link-text">Inactive subsection</span>
              </span>
            </a>
          </span>
        </li>
      </ul>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Vertical with active subsections

```html
<nav class="pf-v6-c-jump-links pf-m-vertical" aria-label="Jump to section">
  <div class="pf-v6-c-jump-links__header">
    <div class="pf-v6-c-jump-links__label">Jump to section</div>
  </div>
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
      <ul class="pf-v6-c-jump-links__list" role="list">
        <li class="pf-v6-c-jump-links__item pf-m-current">
          <span class="pf-v6-c-jump-links__link">
            <a class="pf-v6-c-button pf-m-link" href="#">
              <span class="pf-v6-c-button__text">
                <span class="pf-v6-c-jump-links__link-text">Active subsection</span>
              </span>
            </a>
          </span>
        </li>
        <li class="pf-v6-c-jump-links__item">
          <span class="pf-v6-c-jump-links__link">
            <a class="pf-v6-c-button pf-m-link" href="#">
              <span class="pf-v6-c-button__text">
                <span class="pf-v6-c-jump-links__link-text">Inactive subsection</span>
              </span>
            </a>
          </span>
        </li>
      </ul>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Expandable

```html
<nav
  class="pf-v6-c-jump-links pf-m-vertical pf-m-expandable"
  aria-label="Jump to section"
>
  <div class="pf-v6-c-jump-links__header">
    <div class="pf-v6-c-jump-links__toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Toggle jump links"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-jump-links__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
        <span class="pf-v6-c-button__text">Jump to section</span>
      </button>
    </div>
    <div class="pf-v6-c-jump-links__label">Jump to section</div>
  </div>
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Expanded

```html
<nav
  class="pf-v6-c-jump-links pf-m-vertical pf-m-expandable pf-m-expanded"
  aria-label="Jump to section"
>
  <div class="pf-v6-c-jump-links__header">
    <div class="pf-v6-c-jump-links__toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-expanded
        aria-label="Toggle jump links"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-jump-links__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
        <span class="pf-v6-c-button__text">Jump to section</span>
      </button>
    </div>
    <div class="pf-v6-c-jump-links__label">Jump to section</div>
  </div>
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Expandable (responsive)

```html
<nav
  class="pf-v6-c-jump-links pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl pf-m-expandable"
  aria-label="Jump to section"
>
  <div class="pf-v6-c-jump-links__header">
    <div class="pf-v6-c-jump-links__toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Toggle jump links"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-jump-links__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
        <span class="pf-v6-c-button__text">Jump to section</span>
      </button>
    </div>
    <div class="pf-v6-c-jump-links__label">Jump to section</div>
  </div>
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

### Expandable (responsive) with no label

```html
<nav
  class="pf-v6-c-jump-links pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl pf-m-expandable"
>
  <div class="pf-v6-c-jump-links__header">
    <div class="pf-v6-c-jump-links__toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Toggle jump links"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-jump-links__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
        <span class="pf-v6-c-button__text">Jump to section</span>
      </button>
    </div>
  </div>
  <ul class="pf-v6-c-jump-links__list" role="list">
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item pf-m-current">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Active section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
    <li class="pf-v6-c-jump-links__item">
      <span class="pf-v6-c-jump-links__link">
        <a class="pf-v6-c-button pf-m-link" href="#">
          <span class="pf-v6-c-button__text">
            <span class="pf-v6-c-jump-links__link-text">Inactive section</span>
          </span>
        </a>
      </span>
    </li>
  </ul>
</nav>

```

## Documentation

### Overview

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label` | `.pf-v6-c-jump-links` | Provides an accessible name for the jump links. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-jump-links` | `<div>` | Initiates the jump links container. |
| `.pf-v6-c-jump-links__header` | `<div>` | Initiates the jump links header. |
| `.pf-v6-c-jump-links__toggle` | `<div>` | Initiates the jump links expandable toggle. |
| `.pf-v6-c-jump-links__toggle-text` | `<span>` | Initiates the jump links expandable toggle text. |
| `.pf-v6-c-jump-links__toggle-icon` | `<span>` | Initiates the jump links expandable toggle icon. |
| `.pf-v6-c-jump-links__label` | `<div>` | Initiates the jump links label. |
| `.pf-v6-c-jump-links__main` | `<div>` | Initiates the jump links main container for when a label and list is used in the horizontal variation. |
| `.pf-v6-c-jump-links__list` | `<ul>` | Initiates the jump links list. |
| `.pf-v6-c-jump-links__item` | `<li>` | Initiates the jump links list item. |
| `.pf-v6-c-jump-links__link` | `<button>` | Initiates the jump links link. |
| `.pf-v6-c-jump-links__link-text` | `<div>` | Initiates the jump links link text. |
| `.pf-m-vertical` | `.pf-v6-c-jump-links` | Modifies the jump links component to be vertical. |
| `.pf-m-center` | `.pf-v6-c-jump-links` | Modifies the jump links component to center its list and label. |
| `.pf-m-expandable{-on-[breakpoint]}` | `.pf-v6-c-jump-links` | Modifies the jump links component to be expandable via a toggle at optional [breakpoint](/tokens/all-patternfly-tokens). **Note:** works with vertical jump links only. |
| `.pf-m-non-expandable{-on-[breakpoint]}` | `.pf-v6-c-jump-links` | Modifies the jump links component to be non-expandable at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-expanded` | `.pf-v6-c-jump-links` | Modifies the expandable jump links component for the expanded state. |
| `.pf-m-current` | `.pf-v6-c-jump-links__item`| Modifies the jump links item to be current. |
