---
id: Navigation
section: components
cssPrefix: pf-v6-c-nav
---import './Navigation.css'

## Examples

### Default

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Link 1</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link pf-m-current" aria-current="page">
        <span class="pf-v6-c-nav__link-text">Current link</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Link 3</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Link 4</span>
      </a>
    </li>
  </ul>
</nav>

```

### Grouped nav

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <section class="pf-v6-c-nav__section" aria-labelledby="grouped-title1">
    <h2 class="pf-v6-c-nav__section-title" id="grouped-title1">Section title 1</h2>
    <ul class="pf-v6-c-nav__list" role="list">
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 1</span>
        </a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 2</span>
        </a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 3</span>
        </a>
      </li>
    </ul>
  </section>

  <section class="pf-v6-c-nav__section" aria-labelledby="grouped-title2">
    <h2 class="pf-v6-c-nav__section-title" id="grouped-title2">Section title 2</h2>
    <ul class="pf-v6-c-nav__list" role="list">
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 1</span>
        </a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link pf-m-current" aria-current="page">
          <span class="pf-v6-c-nav__link-text">Current link</span>
        </a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 3</span>
        </a>
      </li>
    </ul>
  </section>
</nav>

```

### Grouped nav, no titles

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <section class="pf-v6-c-nav__section" aria-label="Section one">
    <ul class="pf-v6-c-nav__list" role="list">
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 1</span>
        </a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 2</span>
        </a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 3</span>
        </a>
      </li>
    </ul>
  </section>
  <hr class="pf-v6-c-divider" />

  <section class="pf-v6-c-nav__section" aria-label="Section two">
    <ul class="pf-v6-c-nav__list" role="list">
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Section 2, link 1</span>
        </a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link pf-m-current" aria-current="page">
          <span class="pf-v6-c-nav__link-text">Current link</span>
        </a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href="#" class="pf-v6-c-nav__link">
          <span class="pf-v6-c-nav__link-text">Link 3</span>
        </a>
      </li>
    </ul>
  </section>
</nav>

```

### Expanded

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item pf-m-expanded">
      <button
        class="pf-v6-c-nav__link"
        aria-expanded="true"
        id="expandable-example1"
      >
        <span
          class="pf-v6-c-nav__link-text"
        >Link 1 (current and expanded example)</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section
        class="pf-v6-c-nav__subnav"
        aria-labelledby="expandable-example1"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Current link</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 2</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Subnav link 3</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-v6-c-nav__item pf-m-expanded">
      <button
        class="pf-v6-c-nav__link"
        aria-expanded="true"
        id="expandable-example2"
      >
        <span
          class="pf-v6-c-nav__link-text"
        >Link 2 (expanded, but not current example)</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section
        class="pf-v6-c-nav__subnav"
        aria-labelledby="expandable-example2"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 1</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 2</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-v6-c-nav__item">
      <button
        class="pf-v6-c-nav__link"
        aria-expanded="false"
        id="expandable-example3"
      >
        <span class="pf-v6-c-nav__link-text">Link 3</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section
        class="pf-v6-c-nav__subnav"
        aria-labelledby="expandable-example3"
        hidden
        inert
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 1</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 2</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
  </ul>
</nav>

```

### Expanded with subnav titles

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item pf-m-expanded">
      <button class="pf-v6-c-nav__link" aria-expanded="true">
        <span class="pf-v6-c-nav__link-text">Link 1</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-v6-c-nav__subnav" aria-labelledby="subnav-title1">
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Current link</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Subnav link 2</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 3</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-v6-c-nav__item pf-m-expanded">
      <button class="pf-v6-c-nav__link" aria-expanded="true">
        <span class="pf-v6-c-nav__link-text">Link 2</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-v6-c-nav__subnav" aria-labelledby="subnav-title2">
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 1</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 2</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
  </ul>
</nav>

```

### Mixed

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Link 1 (not expandable)</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item pf-m-expanded">
      <button
        class="pf-v6-c-nav__link"
        aria-expanded="true"
        id="nav-mixed-link2"
      >
        <span
          class="pf-v6-c-nav__link-text"
        >Link 2 (expanded, but not current example)</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-v6-c-nav__subnav" aria-labelledby="nav-mixed-link2">
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 1</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 2</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-v6-c-nav__item">
      <button
        class="pf-v6-c-nav__link"
        aria-expanded="false"
        id="nav-mixed-link4"
      >
        <span
          class="pf-v6-c-nav__link-text"
        >Link 3 (current, but not expanded example)</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section
        class="pf-v6-c-nav__subnav"
        aria-labelledby="nav-mixed-link4"
        hidden
        inert
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 1</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a
              href="#"
              class="pf-v6-c-nav__link pf-m-current"
              aria-current="page"
            >
              <span class="pf-v6-c-nav__link-text">Subnav link 2</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 3</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
  </ul>
</nav>

```

### Expandable, third level

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Clusters</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Overview</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Releases</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <button
        class="pf-v6-c-nav__link"
        aria-expanded="false"
        id="expandable-third-level-example-example-1"
      >
        <span class="pf-v6-c-nav__link-text">Subscriptions</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section
        class="pf-v6-c-nav__subnav"
        aria-labelledby="expandable-third-level-example-example-1"
        hidden
        inert
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 1</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Subnav link 2</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-v6-c-nav__item pf-m-expanded">
      <button
        class="pf-v6-c-nav__link"
        aria-expanded="true"
        id="expandable-third-level-example-example-2"
      >
        <span class="pf-v6-c-nav__link-text">Cost management</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section
        class="pf-v6-c-nav__subnav"
        aria-labelledby="expandable-third-level-example-example-2"
      >
        <ul class="pf-v6-c-nav__list" role="list">
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Overview</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Openshift</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item pf-m-expanded">
            <button
              class="pf-v6-c-nav__link"
              aria-expanded="true"
              id="-sub-example-1"
            >
              <span class="pf-v6-c-nav__link-text">Public clouds</span>
              <span class="pf-v6-c-nav__toggle">
                <span class="pf-v6-c-nav__toggle-icon">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>
              </span>
            </button>
            <section
              class="pf-v6-c-nav__subnav"
              aria-labelledby="-sub-example-1"
            >
              <ul class="pf-v6-c-nav__list" role="list">
                <li class="pf-v6-c-nav__item">
                  <a href="#" class="pf-v6-c-nav__link">
                    <span class="pf-v6-c-nav__link-text">Amazon Web Services</span>
                  </a>
                </li>
                <li class="pf-v6-c-nav__item">
                  <a href="#" class="pf-v6-c-nav__link">
                    <span class="pf-v6-c-nav__link-text">Microsoft Azure</span>
                  </a>
                </li>
                <li class="pf-v6-c-nav__item">
                  <a href="#" class="pf-v6-c-nav__link">
                    <span class="pf-v6-c-nav__link-text">Google Cloud Services</span>
                  </a>
                </li>
              </ul>
            </section>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Cost Models</span>
            </a>
          </li>
          <li class="pf-v6-c-nav__item">
            <a href="#" class="pf-v6-c-nav__link">
              <span class="pf-v6-c-nav__link-text">Cost Explorer</span>
            </a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Support Cases</span>
      </a>
    </li>
  </ul>
</nav>

```

### Horizontal

```html
<nav class="pf-v6-c-nav pf-m-horizontal" aria-label="Global">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link pf-m-current" aria-current="page">
        <span class="pf-v6-c-nav__link-text">Item 1</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Item 2</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Item 3</span>
      </a>
    </li>
  </ul>
</nav>

```

### Horizontal overflow

```html
<nav class="pf-v6-c-nav pf-m-scrollable pf-m-horizontal" aria-label="Global">
  <div class="pf-v6-c-nav__scroll-button">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Scroll start"
      disabled
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 1</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 2</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 3</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 4</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link pf-m-current" aria-current="page">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 5</span>
      </a>
    </li>
  </ul>
  <div class="pf-v6-c-nav__scroll-button">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Scroll end"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</nav>

```

### Horizontal subnav

```html
<nav class="pf-v6-c-nav pf-m-horizontal pf-m-subnav" aria-label="Local">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link pf-m-current" aria-current="page">
        <span class="pf-v6-c-nav__link-text">Item 1</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Item 2</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Item 3</span>
      </a>
    </li>
  </ul>
</nav>

```

### Horizontal subnav overflow

```html
<nav
  class="pf-v6-c-nav pf-m-scrollable pf-m-horizontal pf-m-subnav"
  aria-label="Global"
>
  <div class="pf-v6-c-nav__scroll-button">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Scroll start"
      disabled
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 1</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 2</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 3</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 4</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link pf-m-current" aria-current="page">
        <span class="pf-v6-c-nav__link-text">Horizontal nav item 5</span>
      </a>
    </li>
  </ul>
  <div class="pf-v6-c-nav__scroll-button">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Scroll end"
    >
      <span class="pf-v6-c-button__icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</nav>

```

### Nav with flyout

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Clusters</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Overview</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Releases</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item pf-m-flyout">
      <a
        href="#"
        class="pf-v6-c-nav__link pf-m-current"
        aria-current="page"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <span class="pf-v6-c-nav__link-text">Subscriptions</span>
        <span class="pf-v6-c-nav__toggle">
          <span class="pf-v6-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Support cases</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Cluster manager feedback</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Red Hat Marketplace</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-text">Documentation</span>
      </a>
    </li>
  </ul>
  <div class="pf-v6-c-menu pf-m-flyout pf-m-nav">
    <div class="pf-v6-c-menu__content">
      <ul class="pf-v6-c-menu__list" role="menu">
        <li class="pf-v6-c-menu__list-item" role="none">
          <a class="pf-v6-c-menu__item" href="#" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Container platform</span>
            </span>
          </a>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button
            class="pf-v6-c-menu__item"
            type="button"
            role="menuitem"
            aria-expanded="true"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Dedicated</span>
              <span class="pf-v6-c-menu__item-toggle-icon">
                <i class="fas fa-angle-right"></i>
              </span>
            </span>
          </button>
          <div class="pf-v6-c-menu">
            <div class="pf-v6-c-menu__content">
              <ul class="pf-v6-c-menu__list" role="menu">
                <li class="pf-v6-c-menu__list-item" role="none">
                  <a class="pf-v6-c-menu__item" href="#" role="menuitem">
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Dedicated (Annual)</span>
                    </span>
                  </a>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <a class="pf-v6-c-menu__item" href="#" role="menuitem">
                    <span class="pf-v6-c-menu__item-main">
                      <span
                        class="pf-v6-c-menu__item-text"
                      >Dedicated (On-Demand)</span>
                    </span>
                  </a>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <a class="pf-v6-c-menu__item" href="#" role="menuitem">
                    <span class="pf-v6-c-menu__item-main">
                      <span
                        class="pf-v6-c-menu__item-text"
                      >Dedicated (On-Demand limits)</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

```

### Nav with drilldown menu

```html
<nav class="pf-v6-c-nav" aria-label="Drilldown menu example">
  <div class="pf-v6-c-menu pf-m-drilldown">
    <div class="pf-v6-c-menu__content">
      <ul class="pf-v6-c-menu__list" role="menu">
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Start rollout</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Pause rollout</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button
            class="pf-v6-c-menu__item pf-m-current"
            type="button"
            role="menuitem"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Current link</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Add storage</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button
            class="pf-v6-c-menu__item"
            type="button"
            role="menuitem"
            aria-expanded="false"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Edit</span>
              <span class="pf-v6-c-menu__item-toggle-icon">
                <i class="fas fa-angle-right"></i>
              </span>
            </span>
          </button>
          <div class="pf-v6-c-menu">
            <div class="pf-v6-c-menu__content">
              <ul class="pf-v6-c-menu__list" role="menu">
                <li class="pf-v6-c-menu__list-item pf-m-drill-up" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    tabindex="0"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-left"></i>
                      </span>
                      <span class="pf-v6-c-menu__item-text">Edit</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Deployment</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                            tabindex="0"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">Deployment</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Routes</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Nodes</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">URLs</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                            aria-expanded="false"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Advanced settings</span>
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-right"></i>
                              </span>
                            </span>
                          </button>
                          <div class="pf-v6-c-menu">
                            <div class="pf-v6-c-menu__content">
                              <ul class="pf-v6-c-menu__list" role="menu">
                                <li
                                  class="pf-v6-c-menu__list-item pf-m-drill-up"
                                  role="none"
                                >
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                    tabindex="0"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-toggle-icon"
                                      >
                                        <i class="fas fa-angle-left"></i>
                                      </span>
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Advanced settings</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Reports</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Policies</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Systems</span>
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">RBAC</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">RBAC</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Reports</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Policies</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Systems</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span
                        class="pf-v6-c-menu__item-text"
                      >Thing with a longer label</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button
            class="pf-v6-c-menu__item"
            type="button"
            role="menuitem"
            aria-expanded="false"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Configuration</span>
              <span class="pf-v6-c-menu__item-toggle-icon">
                <i class="fas fa-angle-right"></i>
              </span>
            </span>
          </button>
          <div class="pf-v6-c-menu">
            <div class="pf-v6-c-menu__content">
              <ul class="pf-v6-c-menu__list" role="menu">
                <li class="pf-v6-c-menu__list-item pf-m-drill-up" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-left"></i>
                      </span>
                      <span class="pf-v6-c-menu__item-text">Configuration</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Profile</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">Profile</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Avatar</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Name</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Title</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Time zone</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Account settings</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span
                        class="pf-v6-c-menu__item-text"
                      >Thing with a longer label</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Edit access settings</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Edit access settings</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Global access</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Account access</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

```

### Nav with drilldown menu level two

```html
<nav class="pf-v6-c-nav" aria-label="Drilldown menu example">
  <div class="pf-v6-c-menu pf-m-drilldown pf-m-drilled-in">
    <div
      class="pf-v6-c-menu__content"
      style="--pf-v6-c-menu__content--Height: 228px;"
    >
      <ul class="pf-v6-c-menu__list" role="menu">
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Start rollout</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Pause rollout</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button
            class="pf-v6-c-menu__item pf-m-current"
            type="button"
            role="menuitem"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Current link</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Add storage</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item pf-m-current-path" role="none">
          <button
            class="pf-v6-c-menu__item"
            type="button"
            role="menuitem"
            aria-expanded="true"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Edit</span>
              <span class="pf-v6-c-menu__item-toggle-icon">
                <i class="fas fa-angle-right"></i>
              </span>
            </span>
          </button>
          <div class="pf-v6-c-menu">
            <div class="pf-v6-c-menu__content">
              <ul class="pf-v6-c-menu__list" role="menu">
                <li class="pf-v6-c-menu__list-item pf-m-drill-up" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    tabindex="0"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-left"></i>
                      </span>
                      <span class="pf-v6-c-menu__item-text">Edit</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Deployment</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                            tabindex="0"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">Deployment</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Routes</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Nodes</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">URLs</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                            aria-expanded="false"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Advanced settings</span>
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-right"></i>
                              </span>
                            </span>
                          </button>
                          <div class="pf-v6-c-menu">
                            <div class="pf-v6-c-menu__content">
                              <ul class="pf-v6-c-menu__list" role="menu">
                                <li
                                  class="pf-v6-c-menu__list-item pf-m-drill-up"
                                  role="none"
                                >
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                    tabindex="0"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-toggle-icon"
                                      >
                                        <i class="fas fa-angle-left"></i>
                                      </span>
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Advanced settings</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Reports</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Policies</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Systems</span>
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">RBAC</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">RBAC</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Reports</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Policies</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Systems</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span
                        class="pf-v6-c-menu__item-text"
                      >Thing with a longer label</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button
            class="pf-v6-c-menu__item"
            type="button"
            role="menuitem"
            aria-expanded="false"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Configuration</span>
              <span class="pf-v6-c-menu__item-toggle-icon">
                <i class="fas fa-angle-right"></i>
              </span>
            </span>
          </button>
          <div class="pf-v6-c-menu">
            <div class="pf-v6-c-menu__content">
              <ul class="pf-v6-c-menu__list" role="menu">
                <li class="pf-v6-c-menu__list-item pf-m-drill-up" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-left"></i>
                      </span>
                      <span class="pf-v6-c-menu__item-text">Configuration</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Profile</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">Profile</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Avatar</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Name</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Title</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Time zone</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Account settings</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span
                        class="pf-v6-c-menu__item-text"
                      >Thing with a longer label</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Edit access settings</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Edit access settings</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Global access</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Account access</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

```

### Nav with drilldown menu level three

```html
<nav class="pf-v6-c-nav" aria-label="Drilldown menu example">
  <div class="pf-v6-c-menu pf-m-drilldown pf-m-drilled-in">
    <div
      class="pf-v6-c-menu__content"
      style="--pf-v6-c-menu__content--Height: 284px;"
    >
      <ul class="pf-v6-c-menu__list" role="menu">
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Start rollout</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Pause rollout</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button
            class="pf-v6-c-menu__item pf-m-current"
            type="button"
            role="menuitem"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Current link</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Add storage</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item pf-m-current-path" role="none">
          <button
            class="pf-v6-c-menu__item"
            type="button"
            role="menuitem"
            aria-expanded="true"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Edit</span>
              <span class="pf-v6-c-menu__item-toggle-icon">
                <i class="fas fa-angle-right"></i>
              </span>
            </span>
          </button>
          <div class="pf-v6-c-menu pf-m-drilled-in">
            <div class="pf-v6-c-menu__content">
              <ul class="pf-v6-c-menu__list" role="menu">
                <li class="pf-v6-c-menu__list-item pf-m-drill-up" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    tabindex="0"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-left"></i>
                      </span>
                      <span class="pf-v6-c-menu__item-text">Edit</span>
                    </span>
                  </button>
                </li>
                <li
                  class="pf-v6-c-menu__list-item pf-m-current-path"
                  role="none"
                >
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="true"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Deployment</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                            tabindex="0"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">Deployment</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Routes</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Nodes</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">URLs</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                            aria-expanded="false"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Advanced settings</span>
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-right"></i>
                              </span>
                            </span>
                          </button>
                          <div class="pf-v6-c-menu">
                            <div class="pf-v6-c-menu__content">
                              <ul class="pf-v6-c-menu__list" role="menu">
                                <li
                                  class="pf-v6-c-menu__list-item pf-m-drill-up"
                                  role="none"
                                >
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                    tabindex="0"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-toggle-icon"
                                      >
                                        <i class="fas fa-angle-left"></i>
                                      </span>
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Advanced settings</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Reports</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Policies</span>
                                    </span>
                                  </button>
                                </li>
                                <li class="pf-v6-c-menu__list-item" role="none">
                                  <button
                                    class="pf-v6-c-menu__item"
                                    type="button"
                                    role="menuitem"
                                  >
                                    <span class="pf-v6-c-menu__item-main">
                                      <span
                                        class="pf-v6-c-menu__item-text"
                                      >Systems</span>
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">RBAC</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">RBAC</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Reports</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Policies</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Systems</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span
                        class="pf-v6-c-menu__item-text"
                      >Thing with a longer label</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button
            class="pf-v6-c-menu__item"
            type="button"
            role="menuitem"
            aria-expanded="false"
          >
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">Configuration</span>
              <span class="pf-v6-c-menu__item-toggle-icon">
                <i class="fas fa-angle-right"></i>
              </span>
            </span>
          </button>
          <div class="pf-v6-c-menu">
            <div class="pf-v6-c-menu__content">
              <ul class="pf-v6-c-menu__list" role="menu">
                <li class="pf-v6-c-menu__list-item pf-m-drill-up" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-left"></i>
                      </span>
                      <span class="pf-v6-c-menu__item-text">Configuration</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Profile</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span class="pf-v6-c-menu__item-text">Profile</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Avatar</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Name</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-text">Title</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Time zone</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Account settings</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span
                        class="pf-v6-c-menu__item-text"
                      >Thing with a longer label</span>
                    </span>
                  </button>
                </li>
                <li class="pf-v6-c-menu__list-item" role="none">
                  <button
                    class="pf-v6-c-menu__item"
                    type="button"
                    role="menuitem"
                    aria-expanded="false"
                  >
                    <span class="pf-v6-c-menu__item-main">
                      <span class="pf-v6-c-menu__item-text">Edit access settings</span>
                      <span class="pf-v6-c-menu__item-toggle-icon">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </span>
                  </button>
                  <div class="pf-v6-c-menu">
                    <div class="pf-v6-c-menu__content">
                      <ul class="pf-v6-c-menu__list" role="menu">
                        <li
                          class="pf-v6-c-menu__list-item pf-m-drill-up"
                          role="none"
                        >
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span class="pf-v6-c-menu__item-toggle-icon">
                                <i class="fas fa-angle-left"></i>
                              </span>
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Edit access settings</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Global access</span>
                            </span>
                          </button>
                        </li>
                        <li class="pf-v6-c-menu__list-item" role="none">
                          <button
                            class="pf-v6-c-menu__item"
                            type="button"
                            role="menuitem"
                          >
                            <span class="pf-v6-c-menu__item-main">
                              <span
                                class="pf-v6-c-menu__item-text"
                              >Account access</span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

```

### Nav item icons

```html
<nav class="pf-v6-c-nav" aria-label="Global">
  <ul class="pf-v6-c-nav__list" role="list">
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-icon">
          <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-nav__link-text">Link 1</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link pf-m-current" aria-current="page">
        <span class="pf-v6-c-nav__link-icon">
          <i class="fas fa-fw fa-folder" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-nav__link-text">Current link</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-icon">
          <i class="fas fa-fw fa-cloud" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-nav__link-text">Link 3</span>
      </a>
    </li>
    <li class="pf-v6-c-nav__item">
      <a href="#" class="pf-v6-c-nav__link">
        <span class="pf-v6-c-nav__link-icon">
          <i class="fas fa-fw fa-code" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-nav__link-text">Link 4</span>
      </a>
    </li>
  </ul>
</nav>

```

## Documentation

### Overview

The navigation system relies on several different sub-components:

* `.pf-v6-c-nav__list` - default navigation list. It is the basis for both default and expandable, vertical navigation.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-v6-c-nav` |  Describes `<nav>` landmark. |
| `aria-label="[section title]"` | `.pf-v6-c-nav__section` |  Describes a nav `<section>`, where a `.pf-v6-c-nav__section-title` is not present. |
| `aria-labelledby="[id value of link describing subnav]"` | `.pf-v6-c-nav__subnav` |  Gives the subnav `<section>` landmark an accessible name by referring to the element that provides the subnav `<section>` landmark title. |
| `aria-expanded="false"` | `.pf-v6-c-nav__link` |  Indicates that subnav section is hidden. |
| `aria-expanded="true"` | `.pf-v6-c-nav__link` |  Indicates that subnav section is visible. |
| `hidden` | `.pf-v6-c-nav__subnav` |  Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `disabled` | `.pf-v6-c-nav__scroll-button` | Indicates that a scroll button is disabled, when at the first or last item of a list. **Required when disabled** |
| `aria-current="page"` | `.pf-v6-c-nav__link` |  Indicates the current page link. Can only occur once on page. |
| `aria-haspopup="true"` | `.pf-v6-c-nav__link` | Declares that a nav item has a submenu. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-nav` | `<nav>` | Initiates a primary nav element. |
| `.pf-v6-c-nav__subnav` | `<section>` | Initiates a subnav section. |
| `.pf-v6-c-nav__list` | `<ul>` | Initiates nav list. |
| `.pf-v6-c-nav__item` | `<li>` | Initiates nav list item. |
| `.pf-v6-c-nav__link` | `<a>` | Initiates nav list link. |
| `.pf-v6-c-nav__link-icon` | `<span>` | Initiates nav list link icon. |
| `.pf-v6-c-nav__link-text` | `<span>` | Initiates nav list link text. |
| `.pf-v6-c-nav__section` | `<section>` | Initiates a nav section element. |
| `.pf-v6-c-nav__section-title` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` | Initiates a nav section title. |
| `.pf-v6-c-nav__toggle` | `<span>` | Initiates the nav toggle wrapper. |
| `.pf-v6-c-nav__toggle-icon` | `<span>` | Initiates a nav toggle icon wrapper. |
| `.pf-v6-c-nav__scroll-button` | `<button>` | Initiates a nav scroll button. **Required for horizontal navs** |
| `.pf-m-horizontal` | `.pf-v6-c-nav` | Modifies nav for the horizontal variation. |
| `.pf-m-horizontal-subnav` | `.pf-v6-c-nav` | Modifies nav for the horizontal subnav variation. |
| `.pf-m-flyout` | `.pf-v6-c-nav__item` | Modifies nav item for the flyout variation. |
| `.pf-m-scrollable` | `.pf-v6-c-nav` | Modifies nav for the scrollable state. |
| `.pf-m-expanded` | `.pf-v6-c-nav__item` | Modifies for the expanded state. |
| `.pf-m-current` | `.pf-v6-c-nav__link` | Modifies for the current state. |
| `.pf-m-hover` | `.pf-v6-c-nav__link` | Modifies for the hover state. |
