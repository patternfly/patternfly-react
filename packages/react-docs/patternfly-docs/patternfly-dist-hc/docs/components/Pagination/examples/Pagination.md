---
id: Pagination
section: components
cssPrefix: pf-v6-c-pagination
---## Examples

### Top

```html
<div class="pf-v6-c-pagination">
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-menu-toggle-top-example"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - top example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Top sticky

```html
<div class="pf-v6-c-pagination pf-m-sticky">
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-menu-toggle-top-sticky-example"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - top sticky example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br />
<br />
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br />
<br />
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br />
<br />
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>

```

### Indeterminate (item count is not known)

```html
<div class="pf-v6-c-pagination">
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>many</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-menu-toggle-top-indeterminate-example"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>many</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - indeterminate item count example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Bottom

```html
<div class="pf-v6-c-pagination pf-m-bottom">
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-top pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-menu-toggle-bottom-example"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - bottom example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Bottom sticky

```html
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br />
<br />
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br />
<br />
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br />
<br />
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<div class="pf-v6-c-pagination pf-m-bottom pf-m-sticky">
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-top pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-menu-toggle-bottom-sticky-example"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - bottom sticky example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Top disabled

```html
<div class="pf-v6-c-pagination">
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain pf-m-disabled"
      type="button"
      aria-expanded="false"
      disabled
      aria-label="Menu toggle"
      id="pagination-menu-toggle-top-disabled-example"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - top disabled example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control pf-m-disabled">
        <input
          disabled
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Compact

```html
<div class="pf-v6-c-pagination pf-m-compact">
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-menu-toggle-compact-example"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - compact example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Top with display summary modifier

```html
<div class="pf-v6-c-pagination pf-m-display-summary">
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-top-with-summary-modifier-menu-toggle"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - top with display summary modifier example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Top with display full modifier

```html
<div class="pf-v6-c-pagination pf-m-display-full">
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-top-with-full-modifier-menu-toggle"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - top with display full modifier example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Top with responsive display summary and display full modifiers

```html
<div
  class="pf-v6-c-pagination pf-m-display-summary pf-m-display-full-on-lg pf-m-display-summary-on-xl pf-m-display-full-on-2xl"
>
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-top-with-responsive-summary-navigation-modifiers-menu-toggle"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - top with responsive display summary and display full modifiers example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Compact display full modifier

```html
<div class="pf-v6-c-pagination pf-m-compact pf-m-display-full">
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-compact-with-full-modifier-menu-toggle"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - compact display full modifier example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

### Inset

```html
<div
  class="pf-v6-c-pagination pf-m-inset-none pf-m-inset-md-on-md pf-m-inset-2xl-on-lg"
>
  <div class="pf-v6-c-pagination__total-items">
    <b>1 - 10</b>&nbsp;of&nbsp;
    <b>36</b>
  </div>
  <div class="pf-v6-c-pagination__page-menu">
    <button
      class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
      type="button"
      aria-expanded="false"
      aria-label="Menu toggle"
      id="pagination-inset-menu-toggle"
    >
      <span class="pf-v6-c-menu-toggle__text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
      <span class="pf-v6-c-menu-toggle__controls">
        <span class="pf-v6-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
        </span>
      </span>
    </button>
  </div>
  <nav
    class="pf-v6-c-pagination__nav"
    aria-label="Pagination nav - inset example"
  >
    <div class="pf-v6-c-pagination__nav-control pf-m-first">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to first page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-prev">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to previous page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-page-select">
      <span class="pf-v6-c-form-control">
        <input
          aria-label="Current page"
          type="number"
          min="1"
          max="4"
          value="1"
        />
      </span>
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-next">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Go to next page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-pagination__nav-control pf-m-last">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        disabled
        aria-label="Go to last page"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </nav>
</div>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label`  | `.pf-v6-c-pagination__nav` |  Provides an accessible name for pagination navigation element. **Required** |
| `type="number"` | `.pf-v6-c-pagination__nav-page-select` > `.pf-v6-c-form-control` | Defines a field as a number. **Required** |
| `value` | `.pf-v6-c-pagination__nav-page-select` > `.pf-v6-c-form-control` | Provides initial integer value. **Required** |
| `min` | `.pf-v6-c-pagination__nav-page-select` > `.pf-v6-c-form-control` | Provides minimum integer value. **Required** |
| `max` | `.pf-v6-c-pagination__nav-page-select` > `.pf-v6-c-form-control` | Provides max integer value. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-pagination` | `<div>` |  Initiates pagination. |
| `.pf-v6-c-pagination__current` | `<div>` |  Initiates element to display currently displayed items for use in responsive view. Only needed for default pagination, not `.pf-m-bottom`. |
| `.pf-v6-c-pagination__total-items` | `<div>` | Initiates element to replace the menu toggle on summary. |
| `.pf-v6-c-pagination__page-menu` | `<div>` | Initiates wrapper element for the pagination menu toggle. **Required** when a menu toggle is intended or expected to be rendered. |
| `.pf-v6-c-pagination__nav` | `<nav>` |  Initiates pagination nav. |
| `.pf-v6-c-pagination__nav-control` | `<div>` |  Initiates pagination nav control. |
| `.pf-v6-c-pagination__nav-page-select` | `<div>` |  Initiates pagination nav page select. |
| `.pf-m-display-summary{-on-[breakpoint]}` | `.pf-v6-c-pagination` | Modifies for summary display pagination component styles at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-display-full{-on-[breakpoint]}` | `.pf-v6-c-pagination` | Modifies for full display pagination component styles at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-bottom` | `.pf-v6-c-pagination` | Modifies for bottom pagination component styles. |
| `.pf-m-compact` | `.pf-v6-c-pagination` | Modifies for compact pagination component styles. |
| `.pf-m-static` | `.pf-v6-c-pagination.pf-m-bottom` | Modifies bottom pagination to not be positioned sticky on summary. |
| `.pf-m-sticky` | `.pf-v6-c-pagination` | Modifies the pagination to be sticky to its container. It will be sticky to the top of the container by default, and sticky to the bottom of the container when applied to `.pf-v6-c-pagination.pf-m-bottom`. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-v6-c-pagination` | Modifies pagination horizontal padding at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-page-insets` | `.pf-v6-c-pagination` |  Modifies the pagination component padding/inset to visually match padding of page elements. |
| `.pf-m-first` | `.pf-v6-c-pagination__nav-control` | Indicates the control is for the first page button. |
| `.pf-m-prev` | `.pf-v6-c-pagination__nav-control` | Indicates the control is for the previous page button. |
| `.pf-m-next` | `.pf-v6-c-pagination__nav-control` | Indicates the control is for the next page button. |
| `.pf-m-last` | `.pf-v6-c-pagination__nav-control` | Indicates the control is for the last page button. |
