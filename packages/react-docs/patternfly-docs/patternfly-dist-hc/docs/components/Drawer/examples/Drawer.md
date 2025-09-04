---
id: Drawer
section: components
cssPrefix: pf-v6-c-drawer
---import './Drawer.css'

## Examples

### Closed panel on right (default)

```html
<div class="pf-v6-c-drawer">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel" hidden>
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Expanded panel on right

```html
<div class="pf-v6-c-drawer pf-m-expanded">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Closed panel on left

```html
<div class="pf-v6-c-drawer pf-m-panel-left">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel" hidden>
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Expanded panel on left

```html
<div class="pf-v6-c-drawer pf-m-expanded pf-m-panel-left">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Closed panel on bottom

```html
<div class="pf-v6-c-drawer pf-m-panel-bottom">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div class="pf-v6-c-drawer__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
        <br />
        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
      </div>
    </div>
    <div class="pf-v6-c-drawer__panel" hidden>
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Expanded panel on bottom

```html
<div class="pf-v6-c-drawer pf-m-expanded pf-m-panel-bottom">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div class="pf-v6-c-drawer__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
        <br />
        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
      </div>
    </div>

    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Expanded inline panel

```html
<div class="pf-v6-c-drawer pf-m-expanded pf-m-inline">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Expanded inline panel on left

```html
<div class="pf-v6-c-drawer pf-m-expanded pf-m-inline pf-m-panel-left">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Static

```html
<div class="pf-v6-c-drawer pf-m-expanded pf-m-static">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Static drawers don't have interactive elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Stacked content body elements

```html
<div class="pf-v6-c-drawer pf-m-expanded">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div class="pf-v6-c-drawer__body">content-body</div>
      <div class="pf-v6-c-drawer__body pf-m-padding">content-body with padding</div>
      <div class="pf-v6-c-drawer__body">content-body</div>
    </div>

    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
      <div
        class="pf-v6-c-drawer__body pf-m-no-padding"
      >Drawer panel body content with no padding</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Modified content body padding

```html
<div class="pf-v6-c-drawer pf-m-expanded">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div class="pf-v6-c-drawer__body pf-m-padding">
        <b>Drawer content padding.</b>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
      </div>
    </div>
    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Modified panel body padding

```html
<div class="pf-v6-c-drawer pf-m-expanded">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
      <div
        class="pf-v6-c-drawer__body pf-m-paddinng"
        style="--pf-v6-c-drawer__panel__body--PaddingInlineStart: 48px;"
      >Drawer panel body content with modified inline start padding</div>
    </div>
  </div>
</div>

```

### Modified panel width

```html
<div class="pf-v6-c-drawer pf-m-expanded">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div
      class="pf-v6-c-drawer__panel pf-m-width-75 pf-m-width-33-on-lg pf-m-width-25-on-2xl"
    >
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Additional section above main

```html
<div class="pf-v6-c-drawer pf-m-expanded">
  <div class="pf-v6-c-drawer__section">drawer-section</div>
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Resizable panel

```html
<div class="pf-v6-c-drawer pf-m-expanded">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel pf-m-resizable">
      <div
        class="pf-v6-c-drawer__splitter pf-m-vertical"
        role="separator"
        tabindex="0"
        aria-valuenow="50"
        aria-orientation="vertical"
      >
        <div class="pf-v6-c-drawer__splitter-handle"></div>
      </div>
      <div class="pf-v6-c-drawer__panel-main">
        <div class="pf-v6-c-drawer__head">
          <span>Drawer panel header content</span>
          <div class="pf-v6-c-drawer__actions">
            <div class="pf-v6-c-drawer__close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Close drawer panel"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          class="pf-v6-c-drawer__description"
        >This is a helpful description of the drawer panel.</div>
        <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
      </div>
    </div>
  </div>
</div>

```

### Resizable left panel

```html
<div class="pf-v6-c-drawer pf-m-expanded pf-m-panel-left">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel pf-m-resizable">
      <div
        class="pf-v6-c-drawer__splitter pf-m-vertical"
        role="separator"
        tabindex="0"
        aria-valuenow="50"
        aria-orientation="vertical"
      >
        <div class="pf-v6-c-drawer__splitter-handle"></div>
      </div>
      <div class="pf-v6-c-drawer__panel-main">
        <div class="pf-v6-c-drawer__head">
          <span>Drawer panel header content</span>
          <div class="pf-v6-c-drawer__actions">
            <div class="pf-v6-c-drawer__close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Close drawer panel"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          class="pf-v6-c-drawer__description"
        >This is a helpful description of the drawer panel.</div>
        <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
      </div>
    </div>
  </div>
</div>

```

### Resizable bottom panel

```html
<div class="pf-v6-c-drawer pf-m-expanded pf-m-panel-bottom">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div class="pf-v6-c-drawer__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
        <br />
        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
      </div>
    </div>

    <div class="pf-v6-c-drawer__panel pf-m-resizable">
      <div
        class="pf-v6-c-drawer__splitter"
        role="separator"
        tabindex="0"
        aria-valuenow="50"
        aria-orientation="horizontal"
      >
        <div class="pf-v6-c-drawer__splitter-handle"></div>
      </div>
      <div class="pf-v6-c-drawer__panel-main">
        <div class="pf-v6-c-drawer__head">
          <span>Drawer panel header content</span>
          <div class="pf-v6-c-drawer__actions">
            <div class="pf-v6-c-drawer__close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Close drawer panel"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          class="pf-v6-c-drawer__description"
        >This is a helpful description of the drawer panel.</div>
        <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
      </div>
    </div>
  </div>
</div>

```

### Resizable inline panel

```html
<div class="pf-v6-c-drawer pf-m-expanded pf-m-inline">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel pf-m-resizable">
      <div
        class="pf-v6-c-drawer__splitter pf-m-vertical"
        role="separator"
        tabindex="0"
        aria-valuenow="50"
        aria-orientation="vertical"
      >
        <div class="pf-v6-c-drawer__splitter-handle"></div>
      </div>
      <div class="pf-v6-c-drawer__panel-main">
        <div class="pf-v6-c-drawer__head">
          <span>Drawer panel header content</span>
          <div class="pf-v6-c-drawer__actions">
            <div class="pf-v6-c-drawer__close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Close drawer panel"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          class="pf-v6-c-drawer__description"
        >This is a helpful description of the drawer panel.</div>
        <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
      </div>
    </div>
  </div>
</div>

```

### Panel with secondary background

```html
<div class="pf-v6-c-drawer pf-m-expanded">
  <div class="pf-v6-c-drawer__main">
    <div class="pf-v6-c-drawer__content">
      <div
        class="pf-v6-c-drawer__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-v6-c-drawer__panel pf-m-secondary">
      <div class="pf-v6-c-drawer__head">
        <span>Drawer panel header content</span>
        <div class="pf-v6-c-drawer__actions">
          <div class="pf-v6-c-drawer__close">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Close drawer panel"
            >
              <span class="pf-v6-c-button__icon">
                <i class="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="pf-v6-c-drawer__description"
      >This is a helpful description of the drawer panel.</div>
      <div class="pf-v6-c-drawer__body">Drawer panel body content</div>
    </div>
  </div>
</div>

```

### Accessibility

| Class | Applied to | Outcome |
| -- | -- | -- |
| `role="separator"` | `.pf-v6-c-drawer__splitter` | Indicates that the splitter is a separator. **Required** |
| `tabindex="0"` | `.pf-v6-c-drawer__splitter` | Inserts the splitter into the tab order of the page so that it is focusable. **Required** |
| `aria-orientation="horizontal"` | `.pf-v6-c-drawer__splitter` | Indicates that the splitter is oriented horizontally. |
| `aria-orientation="vertical"` | `.pf-v6-c-drawer__splitter.pf-m-vertical` | Indicates that the splitter is oriented vertically. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-drawer__splitter` | `<div>` | Initiates the splitter. |
| `.pf-v6-c-drawer__splitter-handle` | `<div>` | Initiates the splitter handle element. |
| `.pf-m-vertical` |  `.pf-v6-c-drawer__splitter` | Modifies the splitter to be vertical. |

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `action that opens drawer` | Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `action that opens drawer` | Indicates that the expandable content is hidden. **Required** |
| `hidden` | `.pf-v6-c-drawer__panel` | Hides the drawer panel from assistive technologies. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-drawer` | `<div>` | Initiates the drawer container. **Required** |
| `.pf-v6-c-drawer__section` | `<div>` | Initiates a drawer section area. This element can be used above or below `.pf-v6-c-drawer__main` for titles, toolbars, footers, etc. |
| `.pf-v6-c-drawer__main` | `<div>` | Initiates the drawer main area. **Required** |
| `.pf-v6-c-drawer__content` | `<div>` | Initiates the drawer content container. **Required** |
| `.pf-v6-c-drawer__panel` | `<aside>` | Initiates the drawer panel container. **Required** |
| `.pf-v6-c-drawer__panel-main` | `<div>` | Initiates the drawer panel main container for resizable drawers only. |
| `.pf-v6-c-drawer__body` | `<div>` | Initiates a drawer body container and is the child of `.pf-v6-c-drawer__content`, `.pf-v6-c-drawer__panel` and `.pf-v6-c-drawer__panel-main`. **Required** |
| `.pf-v6-c-drawer__head` | `<div>` | Initiates a drawer head container. This container positions `.pf-v6-c-drawer__actions`, if present. |
| `.pf-v6-c-drawer__actions` | `<div>` | Initiates an actions container within `.pf-v6--drawer__head`. |
| `.pf-v6-c-drawer__close` | `<div>` | Identifies the drawer close button within `.pf-v6-c-drawer__actions`. |
| `.pf-v6-c-drawer__description` | `<div>` | Initiates a drawer panel description. |
| `.pf-m-panel-left` | `.pf-v6-c-drawer` | Modifies the drawer panel to expand from the left. |
| `.pf-m-panel-bottom` | `.pf-v6-c-drawer` | Modifies the drawer panel to expand from the bottom. **Note:** percentage based panel sizes require the drawer component's parent element have an implicit or explicit height. |
| `.pf-m-expanded` | `.pf-v6-c-drawer` | Modifies the drawer panel for the expanded state. |
| `.pf-m-static{-on-[lg, xl, 2xl]}` | `.pf-v6-c-drawer` | Modifies the drawer panel state to always show both content and panel at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-inline{-on-[lg, xl, 2xl]}` | `.pf-v6-c-drawer` | Modifies the drawer so the content element and panel element are displayed side by side. `.pf-m-inline` used without a [breakpoint](/tokens/all-patternfly-tokens) will default to the `md` breakpoint. |
| `.pf-m-no-border` | `.pf-v6-c-drawer__panel` | Modifies the drawer panel border treatment to disable all border treatment. |
| `.pf-m-padding` | `.pf-v6-c-drawer__body` | Modifies the element to add padding. |
| `.pf-m-no-padding` | `.pf-v6-c-drawer__body` | Modifies the element to remove padding. |
| `.pf-m-no-background` | `.pf-v6-c-drawer__section`, `.pf-v6-c-drawer__panel` | Modifies the drawer element background color to transparent. |
| `.pf-m-primary` | `.pf-v6-c-drawer__content` | Modifies the drawer content to use the primary background color. |
| `.pf-m-secondary` | `.pf-v6-c-drawer__section`, `.pf-v6-c-drawer__content`, `.pf-v6-c-drawer__panel` | Modifies the drawer element to use the secondary background color. |
| `.pf-m-width-{25, 33, 50, 66, 75, 100}{-on-[breakpoint]}` | `.pf-v6-c-drawer__panel` | Modifies the drawer panel width at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-resizable` | `.pf-v6-c-drawer__panel` | Modifies the drawer panel to be resizable. Intended for use with the `.pf-v6-c-drawer__splitter` element. |
| `--pf-v6-c-drawer__panel--md--FlexBasis--min` | `.pf-v6-c-drawer__panel` | Defines the drawer panel minimum size. |
| `--pf-v6-c-drawer__panel--md--FlexBasis` | `.pf-v6-c-drawer__panel` | Defines the drawer panel size. |
| `--pf-v6-c-drawer__panel--md--FlexBasis--max` | `.pf-v6-c-drawer__panel` | Defines the drawer panel maximum size. |
