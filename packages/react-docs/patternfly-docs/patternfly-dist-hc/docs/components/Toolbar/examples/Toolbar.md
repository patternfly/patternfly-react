---
id: Toolbar
section: components
cssPrefix: pf-v6-c-toolbar
---import './Toolbar.css'

<!-- TODO: add documentation for resize observer/responsive variable usage -->

Toolbar relies on groups (`.pf-v6-c-toolbar__group`) and items (`.pf-v6-c-toolbar__item`), with default col/row gap values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. The default `column-gap` value for items and groups is set to `--pf-v6-c--ColumnGap`, whose value is `--pf-t--global--spacer--md` or 16px. The default `row-gap` value for items and groups is set to `--pf-v6-c--RowGap`, whose value is `--pf-t--global--spacer--sm` or 8px.

### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-v6-c-toolbar__group` | `--pf-v6-c-toolbar__group--ColumnGap` | `16px` |
| `.pf-v6-c-toolbar__item` | `--pf-v6-c-toolbar__item--ColumnGap` | `16px` |
| `.pf-m-[column/row]-gap-[none/sm/md/lg/xl/2xl]{-on-[breakpoint]}` |  `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-gap-[none/sm/md/lg/xl/2xl]{-on-[breakpoint]}` |  `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies both column gap and row gap for toolbar group or item spacing at optional [breakpoint](/tokens/all-patternfly-tokens). |

### Toolbar item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-pagination` | `.pf-v6-c-toolbar__item` | Initiates pagination and margin. |

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-[hidden/visible]` | `.pf-v6-c-toolbar > *` | Modifies toolbar element to be hidden/visible. |
| `.pf-m-flex-grow` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element to `flex-grow: 1`, allowing it to consume available main-axis space. |
| `.pf-m-align-[start/end]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar [main axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) element alignment. |
| `.pf-m-align-items-[stretch/baseline/start/center/end]` | `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) child alignment. |
| `.pf-m-align-self-[stretch/baseline/start/center/end]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) self alignment. |

### Special notes

Several components in the following examples do not include functional and/or accessibility specifications (for example `.pf-v6-c-select`, `.pf-v6-c-options-menu`). Rather, `.pf-v6-c-toolbar` focuses on functionality and accessibility specifications that apply to it only.

**Available [breakpoints](/tokens/all-patternfly-tokens) are: `-on-sm`, `-on-md`, `-on-lg`, `-on-xl`, and `-on-2xl`.**

## Examples

### Simple

```html
<div class="pf-v6-c-toolbar" id="toolbar-simple-example">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <hr class="pf-v6-c-divider pf-m-vertical" />

      <div class="pf-v6-c-toolbar__group">
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-toolbar__item` | `<div>` | Initiates the toolbar component item. **Required** |
| `.pf-v6-c-toolbar__group` | `<div>` | Initiates the toolbar component group. |

### No padding

```html
<div class="pf-v6-c-toolbar pf-m-no-padding" id="toolbar-simple-example">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <hr class="pf-v6-c-divider pf-m-vertical" />

      <div class="pf-v6-c-toolbar__group">
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Adjusted group column gap

```html
<div class="pf-v6-c-toolbar" id="toolbar-group-spacer-example">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__group pf-m-column-gap-lg">
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />

      <div
        class="pf-v6-c-toolbar__group pf-m-column-gap-none pf-m-column-gap-sm"
      >
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>
    </div>
  </div>
</div>

```

### Insets

```html
<div class="pf-v6-c-toolbar pf-m-inset-xl" id="toolbar-inset-example">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__group">
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Toolbar spacers and insets

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-column-gap-[none/sm/md/lg]` | `.pf-v6-c-toolbar__group` | Modifies toolbar group child spacing. |
| `.pf-m-inset-[none/sm/md/lg/xl/2xl]` | `.pf-v6-c-toolbar` | Modifies toolbar horizontal. |

### Width control

```html
<div class="pf-v6-c-toolbar" id="toolbar-width-control">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__group">
        <div
          class="pf-v6-c-toolbar__item"
          style="--pf-v6-c-toolbar__item--Width: 80px; --pf-v6-c-toolbar__item--Width-on-xl: 10rem"
        >Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Width control usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `--pf-v6-c-toolbar__item--Width: {width}` | `.pf-v6-c-toolbar__item` |  Modifies the width value of a toolbar item at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `--pf-v6-c-toolbar__item--MinWidth: {width}` | `.pf-v6-c-toolbar__item` |  Modifies the min width value of a toolbar item at optional [breakpoint](/tokens/all-patternfly-tokens). |

## Group types

### Filter group

```html
<h4 class="pf-v6-c-content--h4">Standard filters</h4>
<div class="pf-v6-c-toolbar" id="toolbar-group-types-standard-filter">
  <div class="pf-v6-c-toolbar__group pf-m-filter-group">
    <div class="pf-v6-c-toolbar__item">
      <button
        class="pf-v6-c-menu-toggle"
        type="button"
        aria-expanded="false"
        id="toolbar-group-types-standard-filter-menu-toggle-checkbox-status"
      >
        <span class="pf-v6-c-menu-toggle__text">Status</span>
        <span class="pf-v6-c-menu-toggle__controls">
          <span class="pf-v6-c-menu-toggle__toggle-icon">
            <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-toolbar__item">
      <button
        class="pf-v6-c-menu-toggle"
        type="button"
        aria-expanded="false"
        id="toolbar-group-types-standard-filter-menu-toggle-checkbox-risk"
      >
        <span class="pf-v6-c-menu-toggle__text">Risk</span>
        <span class="pf-v6-c-menu-toggle__controls">
          <span class="pf-v6-c-menu-toggle__toggle-icon">
            <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>
<hr class="pf-v6-c-divider" />
<h4 class="pf-v6-c-content--h4">Input groups and filters</h4>
<div class="pf-v6-c-toolbar" id="toolbar-group-types-input-group-filter">
  <div class="pf-v6-c-toolbar__group">
    <div class="pf-v6-c-toolbar__item">
      <div class="pf-v6-c-toolbar__item">
        <div
          class="pf-v6-c-input-group"
          aria-label="search filter"
          role="group"
        >
          <div class="pf-v6-c-input-group__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-group-types-input-group-filter-search-filter-menu"
            >
              <span class="pf-v6-c-menu-toggle__text">Name</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-input-group__item pf-m-fill">
            <div class="pf-v6-c-text-input-group">
              <div class="pf-v6-c-text-input-group__main pf-m-icon">
                <span class="pf-v6-c-text-input-group__text">
                  <span class="pf-v6-c-text-input-group__icon">
                    <i class="fas fa-fw fa-search"></i>
                  </span>
                  <input
                    class="pf-v6-c-text-input-group__text-input"
                    type="text"
                    placeholder="Find by name"
                    value
                    aria-label="Search input"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-toolbar__item">
      <button
        class="pf-v6-c-menu-toggle"
        type="button"
        aria-expanded="false"
        id="toolbar-group-types-input-group-filter-menu-toggle-checkbox-status"
      >
        <span class="pf-v6-c-menu-toggle__text">Status</span>
        <span class="pf-v6-c-menu-toggle__controls">
          <span class="pf-v6-c-menu-toggle__toggle-icon">
            <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
  </div>
</div>

```

### Action group

```html
<div class="pf-v6-c-toolbar" id="toolbar-group-types-action">
  <div class="pf-v6-c-toolbar__group pf-m-action-group">
    <div class="pf-v6-c-toolbar__item">
      <button class="pf-v6-c-button pf-m-primary" type="button">
        <span class="pf-v6-c-button__text">Primary</span>
      </button>
    </div>
    <div class="pf-v6-c-toolbar__item">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Secondary</span>
      </button>
    </div>
    <div class="pf-v6-c-toolbar__item">
      <button class="pf-v6-c-button pf-m-tertiary" type="button">
        <span class="pf-v6-c-button__text">Tertiary</span>
      </button>
    </div>
  </div>
</div>

```

### Action group plain

```html
<div class="pf-v6-c-toolbar" id="toolbar-group-types-plain">
  <div class="pf-v6-c-toolbar__group pf-m-action-group-plain">
    <div class="pf-v6-c-toolbar__item">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Column view"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-columns" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-toolbar__item">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Expand"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-expand" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-toolbar__item">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Settings"
      >
        <span class="pf-v6-c-button__icon">
          <i class="fas fa-cog" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  </div>
</div>

```

### Action group inline

```html
<div class="pf-v6-c-toolbar" id="toolbar-group-types-inline">
  <div class="pf-v6-c-toolbar__group pf-m-action-group-inline">
    <div class="pf-v6-c-toolbar__item">6 filters applied</div>
    <div class="pf-v6-c-toolbar__item">
      <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
        <span class="pf-v6-c-button__text">Clear all filters</span>
      </button>
    </div>
    <div class="pf-v6-c-toolbar__item">
      <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
        <span class="pf-v6-c-button__text">Save all filters</span>
      </button>
    </div>
  </div>
</div>

```

### Label group

```html
<div class="pf-v6-c-toolbar" id="toolbar-group-label-group">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__group pf-m-label-group">
        <div class="pf-v6-c-toolbar__group pf-m-grow pf-m-label-group">
          <div class="pf-v6-c-toolbar__item">
            <div class="pf-v6-c-label-group pf-m-category">
              <div class="pf-v6-c-label-group__main">
                <span
                  class="pf-v6-c-label-group__label"
                  aria-hidden="true"
                  id="toolbar-group-label-group-label-group-status-label-group-label"
                >Status</span>
                <ul
                  class="pf-v6-c-label-group__list"
                  role="list"
                  aria-labelledby="toolbar-group-label-group-label-group-status-label-group-label"
                >
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-group-label-group-label-group-statuslabel-one"
                          >Label one</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-group-label-group-label-group-statusremove-label-one toolbar-group-label-group-label-group-statuslabel-one"
                            aria-label="Remove"
                            id="toolbar-group-label-group-label-group-statusremove-label-one"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-group-label-group-label-group-statuslabel-two"
                          >Label two</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-group-label-group-label-group-statusremove-label-two toolbar-group-label-group-label-group-statuslabel-two"
                            aria-label="Remove"
                            id="toolbar-group-label-group-label-group-statusremove-label-two"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-group-label-group-label-group-statuslabel-three"
                          >Label three</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-group-label-group-label-group-statusremove-label-three toolbar-group-label-group-label-group-statuslabel-three"
                            aria-label="Remove"
                            id="toolbar-group-label-group-label-group-statusremove-label-three"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-toolbar__item">
            <div class="pf-v6-c-label-group pf-m-category">
              <div class="pf-v6-c-label-group__main">
                <span
                  class="pf-v6-c-label-group__label"
                  aria-hidden="true"
                  id="toolbar-group-label-group-label-group-risk-label-group-label"
                >Risk</span>
                <ul
                  class="pf-v6-c-label-group__list"
                  role="list"
                  aria-labelledby="toolbar-group-label-group-label-group-risk-label-group-label"
                >
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-group-label-group-label-group-risklabel-one"
                          >Label one</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-group-label-group-label-group-riskremove-label-one toolbar-group-label-group-label-group-risklabel-one"
                            aria-label="Remove"
                            id="toolbar-group-label-group-label-group-riskremove-label-one"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-group-label-group-label-group-risklabel-two"
                          >Label two</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-group-label-group-label-group-riskremove-label-two toolbar-group-label-group-label-group-risklabel-two"
                            aria-label="Remove"
                            id="toolbar-group-label-group-label-group-riskremove-label-two"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-group-label-group-label-group-risklabel-three"
                          >Label three</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-group-label-group-label-group-riskremove-label-three toolbar-group-label-group-label-group-risklabel-three"
                            aria-label="Remove"
                            id="toolbar-group-label-group-label-group-riskremove-label-three"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Toggle group on mobile (filters collapsed, expandable content expanded)

```html
<div class="pf-v6-c-toolbar" id="toolbar-toggle-group-on-mobile">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__group pf-m-toggle-group">
        <div class="pf-v6-c-toolbar__toggle">
          <button
            class="pf-v6-c-menu-toggle pf-m-expanded pf-m-plain"
            type="button"
            aria-expanded="true"
            aria-label="Show filters"
            aria-controls="toolbar-toggle-group-on-mobile-expandable-content"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-filter" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <div
            class="pf-v6-c-input-group"
            aria-label="search filter"
            role="group"
          >
            <div class="pf-v6-c-input-group__item">
              <button
                class="pf-v6-c-menu-toggle"
                type="button"
                aria-expanded="false"
                id="toolbar-toggle-group-on-mobile-search-filter-menu"
              >
                <span class="pf-v6-c-menu-toggle__text">Name</span>
                <span class="pf-v6-c-menu-toggle__controls">
                  <span class="pf-v6-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
            <div class="pf-v6-c-input-group__item pf-m-fill">
              <div class="pf-v6-c-text-input-group">
                <div class="pf-v6-c-text-input-group__main pf-m-icon">
                  <span class="pf-v6-c-text-input-group__text">
                    <span class="pf-v6-c-text-input-group__icon">
                      <i class="fas fa-fw fa-search"></i>
                    </span>
                    <input
                      class="pf-v6-c-text-input-group__text-input"
                      type="text"
                      placeholder="Find by name"
                      value
                      aria-label="Search input"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pf-v6-c-toolbar__group pf-m-filter-group pf-m-toggle-group">
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-on-mobile-menu-toggle-checkbox-status"
            >
              <span class="pf-v6-c-menu-toggle__text">Status</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-on-mobile-menu-toggle-checkbox-risk"
            >
              <span class="pf-v6-c-menu-toggle__text">Risk</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pf-v6-c-toolbar__expandable-content pf-m-expanded"
      id="toolbar-toggle-group-on-mobile-expandable-content"
    >
      <div class="pf-v6-c-toolbar__item">
        <div
          class="pf-v6-c-input-group"
          aria-label="search filter"
          role="group"
        >
          <div class="pf-v6-c-input-group__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-on-mobile-expandable-search-filter-menu"
            >
              <span class="pf-v6-c-menu-toggle__text">Name</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-input-group__item pf-m-fill">
            <div class="pf-v6-c-text-input-group">
              <div class="pf-v6-c-text-input-group__main pf-m-icon">
                <span class="pf-v6-c-text-input-group__text">
                  <span class="pf-v6-c-text-input-group__icon">
                    <i class="fas fa-fw fa-search"></i>
                  </span>
                  <input
                    class="pf-v6-c-text-input-group__text-input"
                    type="text"
                    placeholder="Find by name"
                    value
                    aria-label="Search input"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__group pf-m-filter-group">
        <div class="pf-v6-c-toolbar__item">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-toggle-group-on-mobile-menu-toggle-checkbox-status-expandable"
          >
            <span class="pf-v6-c-menu-toggle__text">Status</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-toggle-group-on-mobile-menu-toggle-checkbox-risk-expandable"
          >
            <span class="pf-v6-c-menu-toggle__text">Risk</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Toggle group on desktop

```html
<div class="pf-v6-c-toolbar" id="toolbar-toggle-group-desktop">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__group pf-m-show pf-m-toggle-group">
        <div class="pf-v6-c-toolbar__toggle">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Show filters"
            aria-controls="toolbar-toggle-group-desktop-expandable-content"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-filter" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <div
            class="pf-v6-c-input-group"
            aria-label="search filter"
            role="group"
          >
            <div class="pf-v6-c-input-group__item">
              <button
                class="pf-v6-c-menu-toggle"
                type="button"
                aria-expanded="false"
                id="toolbar-toggle-group-desktop-search-filter-menu"
              >
                <span class="pf-v6-c-menu-toggle__text">Name</span>
                <span class="pf-v6-c-menu-toggle__controls">
                  <span class="pf-v6-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
            <div class="pf-v6-c-input-group__item pf-m-fill">
              <div class="pf-v6-c-text-input-group">
                <div class="pf-v6-c-text-input-group__main pf-m-icon">
                  <span class="pf-v6-c-text-input-group__text">
                    <span class="pf-v6-c-text-input-group__icon">
                      <i class="fas fa-fw fa-search"></i>
                    </span>
                    <input
                      class="pf-v6-c-text-input-group__text-input"
                      type="text"
                      placeholder="Find by name"
                      value
                      aria-label="Search input"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="pf-v6-c-toolbar__group pf-m-show pf-m-filter-group pf-m-toggle-group"
        >
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-desktop-menu-toggle-checkbox-status"
            >
              <span class="pf-v6-c-menu-toggle__text">Status</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-desktop-menu-toggle-checkbox-risk"
            >
              <span class="pf-v6-c-menu-toggle__text">Risk</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
      id="toolbar-toggle-group-desktop-expandable-content"
      hidden
    >
      <div class="pf-v6-c-toolbar__item">
        <div
          class="pf-v6-c-input-group"
          aria-label="search filter"
          role="group"
        >
          <div class="pf-v6-c-input-group__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-toggle-group-desktop-expandable-search-filter-menu"
            >
              <span class="pf-v6-c-menu-toggle__text">Name</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-input-group__item pf-m-fill">
            <div class="pf-v6-c-text-input-group">
              <div class="pf-v6-c-text-input-group__main pf-m-icon">
                <span class="pf-v6-c-text-input-group__text">
                  <span class="pf-v6-c-text-input-group__icon">
                    <i class="fas fa-fw fa-search"></i>
                  </span>
                  <input
                    class="pf-v6-c-text-input-group__text-input"
                    type="text"
                    placeholder="Find by name"
                    value
                    aria-label="Search input"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__group pf-m-filter-group">
        <div class="pf-v6-c-toolbar__item">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-toggle-group-desktop-menu-toggle-checkbox-status-expandable"
          >
            <span class="pf-v6-c-menu-toggle__text">Status</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-toggle-group-desktop-menu-toggle-checkbox-risk-expandable"
          >
            <span class="pf-v6-c-menu-toggle__text">Risk</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Toolbar group types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-filter-group` | `.pf-v6-c-toolbar__group` | Modifies toolbar group column gap. |
| `.pf-m-action-group` | `.pf-v6-c-toolbar__group` | Modifies toolbar group column gap for action group. |
| `.pf-m-action-group-plain` | `.pf-v6-c-toolbar__group` | Modifies toolbar group column gap for action plain group. |
| `.pf-m-action-group-inline` | `.pf-v6-c-toolbar__group` | Modifies toolbar group column gap for action inline group. |
| `.pf-m-toggle-group` | `.pf-v6-c-toolbar__group` | The `.pf-m-toggle-group` controls when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. `.pf-m-show-on-{md, lg, xl}` controls when filters are shown and when the toggle button is hidden. |

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v6-c-toolbar__item`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__toggle`, `.pf-v6-c-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="[true/false]"` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` |  Indicates that the expandable content is visible/hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v6-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

### Responsive attributes

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-haspopup=true` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` | When expandable content appears above content (mobile viewport), `aria-haspopup=true` should be applied to indicate that focus should be trapped. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-[show/hide][-on-[sm/md/lg/xl/2xl]]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item`, `.pf-v6-c-toolbar__expandable-content` | Modifies toolbar element visibility. |
| `.pf-m-expanded` | `.pf-v6-c-toolbar__expandable-content`, `.pf-v6-c-toolbar__toggle` | Modifies the component for the expanded state. |

### Selected

### Selected filters on mobile (filters collapsed, selected filters summary visible)

```html
<div
  class="pf-v6-c-toolbar"
  id="toolbar-selected-filters-toggle-group-collapsed-example"
>
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v6-c-menu-toggle pf-m-split-button"
          id="toolbar-selected-filters-toggle-group-collapsed-example-check"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="toolbar-selected-filters-toggle-group-collapsed-example-check-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="toolbar-selected-filters-toggle-group-collapsed-example-check-check-input"
              name="toolbar-selected-filters-toggle-group-collapsed-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v6-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-toggle-group-collapsed-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__group pf-m-toggle-group">
        <div class="pf-v6-c-toolbar__toggle">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Show filters"
            aria-controls="toolbar-selected-filters-toggle-group-collapsed-example-expandable-content"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-filter" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <div
            class="pf-v6-c-input-group"
            aria-label="search filter"
            role="group"
          >
            <div class="pf-v6-c-input-group__item">
              <button
                class="pf-v6-c-menu-toggle"
                type="button"
                aria-expanded="false"
                id="toolbar-selected-filters-toggle-group-collapsed-example-search-filter-menu"
              >
                <span class="pf-v6-c-menu-toggle__text">Name</span>
                <span class="pf-v6-c-menu-toggle__controls">
                  <span class="pf-v6-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
            <div class="pf-v6-c-input-group__item pf-m-fill">
              <div class="pf-v6-c-text-input-group">
                <div class="pf-v6-c-text-input-group__main pf-m-icon">
                  <span class="pf-v6-c-text-input-group__text">
                    <span class="pf-v6-c-text-input-group__icon">
                      <i class="fas fa-fw fa-search"></i>
                    </span>
                    <input
                      class="pf-v6-c-text-input-group__text-input"
                      type="text"
                      placeholder="Find by name"
                      value
                      aria-label="Search input"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pf-v6-c-toolbar__group pf-m-filter-group pf-m-toggle-group">
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-toggle-group-collapsed-example-menu-toggle-checkbox-status"
            >
              <span class="pf-v6-c-menu-toggle__text">Status</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-toggle-group-collapsed-example-menu-toggle-checkbox-risk"
            >
              <span class="pf-v6-c-menu-toggle__text">Risk</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pf-v6-c-toolbar__expandable-content pf-m-hidden"
      id="toolbar-selected-filters-toggle-group-collapsed-example-expandable-content"
      hidden
    >
      <div class="pf-v6-c-toolbar__group pf-m-action-group-inline">
        <div class="pf-v6-c-toolbar__item">6 filters applied</div>
        <div class="pf-v6-c-toolbar__item">
          <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
            <span class="pf-v6-c-button__text">Clear all filters</span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
            <span class="pf-v6-c-button__text">Save all filters</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__group pf-m-action-group-inline">
      <div class="pf-v6-c-toolbar__item">6 filters applied</div>
      <div class="pf-v6-c-toolbar__item">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Clear all filters</span>
        </button>
      </div>
      <div class="pf-v6-c-toolbar__item">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Save all filters</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Selected filters on mobile (filters collapsed, expandable content expanded)

```html
<div
  class="pf-v6-c-toolbar"
  id="toolbar-selected-filters-toggle-group-expanded-example"
>
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v6-c-menu-toggle pf-m-split-button"
          id="toolbar-selected-filters-toggle-group-expanded-example-check"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="toolbar-selected-filters-toggle-group-expanded-example-check-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="toolbar-selected-filters-toggle-group-expanded-example-check-check-input"
              name="toolbar-selected-filters-toggle-group-expanded-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v6-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-toggle-group-expanded-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__group pf-m-toggle-group">
        <div class="pf-v6-c-toolbar__toggle">
          <button
            class="pf-v6-c-menu-toggle pf-m-expanded pf-m-plain"
            type="button"
            aria-expanded="true"
            aria-label="Show filters"
            aria-controls="toolbar-selected-filters-toggle-group-expanded-example-expandable-content"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-filter" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <div
            class="pf-v6-c-input-group"
            aria-label="search filter"
            role="group"
          >
            <div class="pf-v6-c-input-group__item">
              <button
                class="pf-v6-c-menu-toggle"
                type="button"
                aria-expanded="false"
                id="toolbar-selected-filters-toggle-group-expanded-example-search-filter-menu"
              >
                <span class="pf-v6-c-menu-toggle__text">Name</span>
                <span class="pf-v6-c-menu-toggle__controls">
                  <span class="pf-v6-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
            <div class="pf-v6-c-input-group__item pf-m-fill">
              <div class="pf-v6-c-text-input-group">
                <div class="pf-v6-c-text-input-group__main pf-m-icon">
                  <span class="pf-v6-c-text-input-group__text">
                    <span class="pf-v6-c-text-input-group__icon">
                      <i class="fas fa-fw fa-search"></i>
                    </span>
                    <input
                      class="pf-v6-c-text-input-group__text-input"
                      type="text"
                      placeholder="Find by name"
                      value
                      aria-label="Search input"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pf-v6-c-toolbar__group pf-m-filter-group pf-m-toggle-group">
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-toggle-group-expanded-example-menu-toggle-checkbox-status"
            >
              <span class="pf-v6-c-menu-toggle__text">Status</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-toggle-group-expanded-example-menu-toggle-checkbox-risk"
            >
              <span class="pf-v6-c-menu-toggle__text">Risk</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pf-v6-c-toolbar__expandable-content pf-m-expanded"
      id="toolbar-selected-filters-toggle-group-expanded-example-expandable-content"
    >
      <div class="pf-v6-c-toolbar__item">
        <div
          class="pf-v6-c-input-group"
          aria-label="search filter"
          role="group"
        >
          <div class="pf-v6-c-input-group__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-selected-filters-toggle-group-expanded-example-expandable-search-filter-menu"
            >
              <span class="pf-v6-c-menu-toggle__text">Name</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-input-group__item pf-m-fill">
            <div class="pf-v6-c-text-input-group">
              <div class="pf-v6-c-text-input-group__main pf-m-icon">
                <span class="pf-v6-c-text-input-group__text">
                  <span class="pf-v6-c-text-input-group__icon">
                    <i class="fas fa-fw fa-search"></i>
                  </span>
                  <input
                    class="pf-v6-c-text-input-group__text-input"
                    type="text"
                    placeholder="Find by name"
                    value
                    aria-label="Search input"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__group pf-m-filter-group">
        <div class="pf-v6-c-toolbar__item">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-toggle-group-expanded-example-menu-toggle-checkbox-status-expandable"
          >
            <span class="pf-v6-c-menu-toggle__text">Status</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-toggle-group-expanded-example-menu-toggle-checkbox-risk-expandable"
          >
            <span class="pf-v6-c-menu-toggle__text">Risk</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__group pf-m-label-group">
        <div class="pf-v6-c-toolbar__group pf-m-grow pf-m-label-group">
          <div class="pf-v6-c-toolbar__item">
            <div class="pf-v6-c-label-group pf-m-category">
              <div class="pf-v6-c-label-group__main">
                <span
                  class="pf-v6-c-label-group__label"
                  aria-hidden="true"
                  id="toolbar-selected-filters-toggle-group-expanded-example-label-group-status-label-group-label"
                >Status</span>
                <ul
                  class="pf-v6-c-label-group__list"
                  role="list"
                  aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-label-group-status-label-group-label"
                >
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-statuslabel-one"
                          >Label one</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-label-group-statusremove-label-one toolbar-selected-filters-toggle-group-expanded-example-label-group-statuslabel-one"
                            aria-label="Remove"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-statusremove-label-one"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-statuslabel-two"
                          >Label two</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-label-group-statusremove-label-two toolbar-selected-filters-toggle-group-expanded-example-label-group-statuslabel-two"
                            aria-label="Remove"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-statusremove-label-two"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-statuslabel-three"
                          >Label three</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-label-group-statusremove-label-three toolbar-selected-filters-toggle-group-expanded-example-label-group-statuslabel-three"
                            aria-label="Remove"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-statusremove-label-three"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-toolbar__item">
            <div class="pf-v6-c-label-group pf-m-category">
              <div class="pf-v6-c-label-group__main">
                <span
                  class="pf-v6-c-label-group__label"
                  aria-hidden="true"
                  id="toolbar-selected-filters-toggle-group-expanded-example-label-group-risk-label-group-label"
                >Risk</span>
                <ul
                  class="pf-v6-c-label-group__list"
                  role="list"
                  aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-label-group-risk-label-group-label"
                >
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-risklabel-one"
                          >Label one</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-label-group-riskremove-label-one toolbar-selected-filters-toggle-group-expanded-example-label-group-risklabel-one"
                            aria-label="Remove"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-riskremove-label-one"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-risklabel-two"
                          >Label two</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-label-group-riskremove-label-two toolbar-selected-filters-toggle-group-expanded-example-label-group-risklabel-two"
                            aria-label="Remove"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-riskremove-label-two"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-risklabel-three"
                          >Label three</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-label-group-riskremove-label-three toolbar-selected-filters-toggle-group-expanded-example-label-group-risklabel-three"
                            aria-label="Remove"
                            id="toolbar-selected-filters-toggle-group-expanded-example-label-group-riskremove-label-three"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__group pf-m-action-group-inline">
        <div class="pf-v6-c-toolbar__item">6 filters applied</div>
        <div class="pf-v6-c-toolbar__item">
          <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
            <span class="pf-v6-c-button__text">Clear all filters</span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
            <span class="pf-v6-c-button__text">Save all filters</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Selected filters on desktop (not responsive)

```html
<div class="pf-v6-c-toolbar" id="toolbar-selected-filters-example">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v6-c-menu-toggle pf-m-split-button"
          id="toolbar-selected-filters-example-check"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="toolbar-selected-filters-example-check-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="toolbar-selected-filters-example-check-check-input"
              name="toolbar-selected-filters-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v6-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__group pf-m-filter-group">
        <div class="pf-v6-c-toolbar__item">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-example-menu-toggle-checkbox-status"
          >
            <span class="pf-v6-c-menu-toggle__text">Status</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="toolbar-selected-filters-example-menu-toggle-checkbox-risk"
          >
            <span class="pf-v6-c-menu-toggle__text">Risk</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>

      <div class="pf-v6-c-toolbar__item">
        <div
          class="pf-v6-c-overflow-menu"
          id="toolbar-selected-filters-example--overflow-menu"
        >
          <div class="pf-v6-c-overflow-menu__content">
            <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
              <div class="pf-v6-c-overflow-menu__item">
                <button class="pf-v6-c-button pf-m-primary" type="button">
                  <span class="pf-v6-c-button__text">Primary</span>
                </button>
              </div>
              <div class="pf-v6-c-overflow-menu__item">
                <button class="pf-v6-c-button pf-m-secondary" type="button">
                  <span class="pf-v6-c-button__text">Secondary</span>
                </button>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-overflow-menu__control">
            <button
              class="pf-v6-c-menu-toggle pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Toggle options"
              id="toolbar-selected-filters-example-overflow-toggle"
            >
              <span class="pf-v6-c-menu-toggle__icon">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__group pf-m-label-group">
      <div class="pf-v6-c-toolbar__group pf-m-grow pf-m-label-group">
        <div class="pf-v6-c-toolbar__item">
          <div class="pf-v6-c-label-group pf-m-category">
            <div class="pf-v6-c-label-group__main">
              <span
                class="pf-v6-c-label-group__label"
                aria-hidden="true"
                id="toolbar-selected-filters-example-label-group-status-label-group-label"
              >Status</span>
              <ul
                class="pf-v6-c-label-group__list"
                role="list"
                aria-labelledby="toolbar-selected-filters-example-label-group-status-label-group-label"
              >
                <li class="pf-v6-c-label-group__list-item">
                  <span class="pf-v6-c-label pf-m-outline">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__content">
                        <span
                          class="pf-v6-c-label__text"
                          id="toolbar-selected-filters-example-label-group-statuslabel-one"
                        >Label one</span>
                      </span>
                      <span class="pf-v6-c-label__actions">
                        <button
                          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-example-label-group-statusremove-label-one toolbar-selected-filters-example-label-group-statuslabel-one"
                          aria-label="Remove"
                          id="toolbar-selected-filters-example-label-group-statusremove-label-one"
                        >
                          <span class="pf-v6-c-button__icon">
                            <i class="fas fa-times" aria-hidden="true"></i>
                          </span>
                        </button>
                      </span>
                    </span>
                  </span>
                </li>
                <li class="pf-v6-c-label-group__list-item">
                  <span class="pf-v6-c-label pf-m-outline">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__content">
                        <span
                          class="pf-v6-c-label__text"
                          id="toolbar-selected-filters-example-label-group-statuslabel-two"
                        >Label two</span>
                      </span>
                      <span class="pf-v6-c-label__actions">
                        <button
                          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-example-label-group-statusremove-label-two toolbar-selected-filters-example-label-group-statuslabel-two"
                          aria-label="Remove"
                          id="toolbar-selected-filters-example-label-group-statusremove-label-two"
                        >
                          <span class="pf-v6-c-button__icon">
                            <i class="fas fa-times" aria-hidden="true"></i>
                          </span>
                        </button>
                      </span>
                    </span>
                  </span>
                </li>
                <li class="pf-v6-c-label-group__list-item">
                  <span class="pf-v6-c-label pf-m-outline">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__content">
                        <span
                          class="pf-v6-c-label__text"
                          id="toolbar-selected-filters-example-label-group-statuslabel-three"
                        >Label three</span>
                      </span>
                      <span class="pf-v6-c-label__actions">
                        <button
                          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-example-label-group-statusremove-label-three toolbar-selected-filters-example-label-group-statuslabel-three"
                          aria-label="Remove"
                          id="toolbar-selected-filters-example-label-group-statusremove-label-three"
                        >
                          <span class="pf-v6-c-button__icon">
                            <i class="fas fa-times" aria-hidden="true"></i>
                          </span>
                        </button>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <div class="pf-v6-c-label-group pf-m-category">
            <div class="pf-v6-c-label-group__main">
              <span
                class="pf-v6-c-label-group__label"
                aria-hidden="true"
                id="toolbar-selected-filters-example-label-group-risk-label-group-label"
              >Risk</span>
              <ul
                class="pf-v6-c-label-group__list"
                role="list"
                aria-labelledby="toolbar-selected-filters-example-label-group-risk-label-group-label"
              >
                <li class="pf-v6-c-label-group__list-item">
                  <span class="pf-v6-c-label pf-m-outline">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__content">
                        <span
                          class="pf-v6-c-label__text"
                          id="toolbar-selected-filters-example-label-group-risklabel-one"
                        >Label one</span>
                      </span>
                      <span class="pf-v6-c-label__actions">
                        <button
                          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-example-label-group-riskremove-label-one toolbar-selected-filters-example-label-group-risklabel-one"
                          aria-label="Remove"
                          id="toolbar-selected-filters-example-label-group-riskremove-label-one"
                        >
                          <span class="pf-v6-c-button__icon">
                            <i class="fas fa-times" aria-hidden="true"></i>
                          </span>
                        </button>
                      </span>
                    </span>
                  </span>
                </li>
                <li class="pf-v6-c-label-group__list-item">
                  <span class="pf-v6-c-label pf-m-outline">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__content">
                        <span
                          class="pf-v6-c-label__text"
                          id="toolbar-selected-filters-example-label-group-risklabel-two"
                        >Label two</span>
                      </span>
                      <span class="pf-v6-c-label__actions">
                        <button
                          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-example-label-group-riskremove-label-two toolbar-selected-filters-example-label-group-risklabel-two"
                          aria-label="Remove"
                          id="toolbar-selected-filters-example-label-group-riskremove-label-two"
                        >
                          <span class="pf-v6-c-button__icon">
                            <i class="fas fa-times" aria-hidden="true"></i>
                          </span>
                        </button>
                      </span>
                    </span>
                  </span>
                </li>
                <li class="pf-v6-c-label-group__list-item">
                  <span class="pf-v6-c-label pf-m-outline">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__content">
                        <span
                          class="pf-v6-c-label__text"
                          id="toolbar-selected-filters-example-label-group-risklabel-three"
                        >Label three</span>
                      </span>
                      <span class="pf-v6-c-label__actions">
                        <button
                          class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                          type="button"
                          aria-labelledby="toolbar-selected-filters-example-label-group-riskremove-label-three toolbar-selected-filters-example-label-group-risklabel-three"
                          aria-label="Remove"
                          id="toolbar-selected-filters-example-label-group-riskremove-label-three"
                        >
                          <span class="pf-v6-c-button__icon">
                            <i class="fas fa-times" aria-hidden="true"></i>
                          </span>
                        </button>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pf-v6-c-toolbar__group pf-m-action-group-inline">
      <div class="pf-v6-c-toolbar__item">6 filters applied</div>
      <div class="pf-v6-c-toolbar__item">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Clear all filters</span>
        </button>
      </div>
      <div class="pf-v6-c-toolbar__item">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Save all filters</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Stacked

### Stacked on desktop

```html
<div class="pf-v6-c-toolbar" id="toolbar-stacked-example">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item">
        <div
          class="pf-v6-c-overflow-menu"
          id="toolbar-stacked-example--overflow-menu"
        >
          <div class="pf-v6-c-overflow-menu__content">
            <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
              <div class="pf-v6-c-overflow-menu__item">
                <button class="pf-v6-c-button pf-m-primary" type="button">
                  <span class="pf-v6-c-button__text">Primary</span>
                </button>
              </div>
              <div class="pf-v6-c-overflow-menu__item">
                <button class="pf-v6-c-button pf-m-secondary" type="button">
                  <span class="pf-v6-c-button__text">Secondary</span>
                </button>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-overflow-menu__control">
            <button
              class="pf-v6-c-menu-toggle pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Toggle options"
              id="toolbar-stacked-example-overflow-toggle"
            >
              <span class="pf-v6-c-menu-toggle__icon">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="pf-v6-c-divider" />

  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v6-c-menu-toggle pf-m-split-button"
          id="toolbar-stacked-example-check"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="toolbar-stacked-example-check-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="toolbar-stacked-example-check-check-input"
              name="toolbar-stacked-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v6-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-stacked-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-toolbar__item pf-m-pagination">
        <div class="pf-v6-c-pagination" aria-label="Element pagination">
          <div class="pf-v6-c-pagination__total-items">37 items</div>
          <div class="pf-v6-c-pagination__page-menu">
            <button
              class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Menu toggle"
              id="toolbar-stacked-example-pagination-menu-toggle"
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

          <nav class="pf-v6-c-pagination__nav" aria-label="Pagination">
            <div class="pf-v6-c-pagination__nav-control pf-m-first">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Go to first page"
                disabled
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
                aria-label="Go to previous page"
                disabled
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-angle-left" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div
              class="pf-v6-c-pagination__nav-page-select"
              aria-label="Current page 1 of 4"
            >
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
                aria-label="Go to last page"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-angle-double-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Stacked on mobile (filters collapsed, expandable content expanded)

```html
<div class="pf-v6-c-toolbar" id="toolbar-stacked-collapsed-example">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__group pf-m-toggle-group">
        <div class="pf-v6-c-toolbar__toggle">
          <button
            class="pf-v6-c-menu-toggle pf-m-expanded pf-m-plain"
            type="button"
            aria-expanded="true"
            aria-label="Show filters"
            aria-controls="toolbar-stacked-collapsed-example-expandable-content"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-filter" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="pf-v6-c-toolbar__item">
          <div
            class="pf-v6-c-input-group"
            aria-label="search filter"
            role="group"
          >
            <div class="pf-v6-c-input-group__item">
              <button
                class="pf-v6-c-menu-toggle"
                type="button"
                aria-expanded="false"
                id="toolbar-stacked-collapsed-example-search-filter-menu"
              >
                <span class="pf-v6-c-menu-toggle__text">Name</span>
                <span class="pf-v6-c-menu-toggle__controls">
                  <span class="pf-v6-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
            <div class="pf-v6-c-input-group__item pf-m-fill">
              <div class="pf-v6-c-text-input-group">
                <div class="pf-v6-c-text-input-group__main pf-m-icon">
                  <span class="pf-v6-c-text-input-group__text">
                    <span class="pf-v6-c-text-input-group__icon">
                      <i class="fas fa-fw fa-search"></i>
                    </span>
                    <input
                      class="pf-v6-c-text-input-group__text-input"
                      type="text"
                      placeholder="Find by name"
                      value
                      aria-label="Search input"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pf-v6-c-toolbar__group pf-m-filter-group pf-m-toggle-group">
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-stacked-collapsed-example-menu-toggle-checkbox-status"
            >
              <span class="pf-v6-c-menu-toggle__text">Status</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-toolbar__item">
            <button
              class="pf-v6-c-menu-toggle"
              type="button"
              aria-expanded="false"
              id="toolbar-stacked-collapsed-example-menu-toggle-checkbox-risk"
            >
              <span class="pf-v6-c-menu-toggle__text">Risk</span>
              <span class="pf-v6-c-menu-toggle__controls">
                <span class="pf-v6-c-menu-toggle__toggle-icon">
                  <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pf-v6-c-toolbar__expandable-content pf-m-expanded"
      id="toolbar-stacked-collapsed-example-expandable-content"
    >
      <div class="pf-v6-c-toolbar__group pf-m-label-group">
        <div class="pf-v6-c-toolbar__group pf-m-grow pf-m-label-group">
          <div class="pf-v6-c-toolbar__item">
            <div class="pf-v6-c-label-group pf-m-category">
              <div class="pf-v6-c-label-group__main">
                <span
                  class="pf-v6-c-label-group__label"
                  aria-hidden="true"
                  id="toolbar-stacked-collapsed-example-label-group-status-label-group-label"
                >Status</span>
                <ul
                  class="pf-v6-c-label-group__list"
                  role="list"
                  aria-labelledby="toolbar-stacked-collapsed-example-label-group-status-label-group-label"
                >
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-stacked-collapsed-example-label-group-statuslabel-one"
                          >Label one</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-stacked-collapsed-example-label-group-statusremove-label-one toolbar-stacked-collapsed-example-label-group-statuslabel-one"
                            aria-label="Remove"
                            id="toolbar-stacked-collapsed-example-label-group-statusremove-label-one"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-stacked-collapsed-example-label-group-statuslabel-two"
                          >Label two</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-stacked-collapsed-example-label-group-statusremove-label-two toolbar-stacked-collapsed-example-label-group-statuslabel-two"
                            aria-label="Remove"
                            id="toolbar-stacked-collapsed-example-label-group-statusremove-label-two"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-stacked-collapsed-example-label-group-statuslabel-three"
                          >Label three</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-stacked-collapsed-example-label-group-statusremove-label-three toolbar-stacked-collapsed-example-label-group-statuslabel-three"
                            aria-label="Remove"
                            id="toolbar-stacked-collapsed-example-label-group-statusremove-label-three"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-toolbar__item">
            <div class="pf-v6-c-label-group pf-m-category">
              <div class="pf-v6-c-label-group__main">
                <span
                  class="pf-v6-c-label-group__label"
                  aria-hidden="true"
                  id="toolbar-stacked-collapsed-example-label-group-risk-label-group-label"
                >Risk</span>
                <ul
                  class="pf-v6-c-label-group__list"
                  role="list"
                  aria-labelledby="toolbar-stacked-collapsed-example-label-group-risk-label-group-label"
                >
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-stacked-collapsed-example-label-group-risklabel-one"
                          >Label one</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-stacked-collapsed-example-label-group-riskremove-label-one toolbar-stacked-collapsed-example-label-group-risklabel-one"
                            aria-label="Remove"
                            id="toolbar-stacked-collapsed-example-label-group-riskremove-label-one"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-stacked-collapsed-example-label-group-risklabel-two"
                          >Label two</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-stacked-collapsed-example-label-group-riskremove-label-two toolbar-stacked-collapsed-example-label-group-risklabel-two"
                            aria-label="Remove"
                            id="toolbar-stacked-collapsed-example-label-group-riskremove-label-two"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="pf-v6-c-label-group__list-item">
                    <span class="pf-v6-c-label pf-m-outline">
                      <span class="pf-v6-c-label__content">
                        <span class="pf-v6-c-label__content">
                          <span
                            class="pf-v6-c-label__text"
                            id="toolbar-stacked-collapsed-example-label-group-risklabel-three"
                          >Label three</span>
                        </span>
                        <span class="pf-v6-c-label__actions">
                          <button
                            class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                            type="button"
                            aria-labelledby="toolbar-stacked-collapsed-example-label-group-riskremove-label-three toolbar-stacked-collapsed-example-label-group-risklabel-three"
                            aria-label="Remove"
                            id="toolbar-stacked-collapsed-example-label-group-riskremove-label-three"
                          >
                            <span class="pf-v6-c-button__icon">
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item pf-m-bulk-select">
        <div
          class="pf-v6-c-menu-toggle pf-m-split-button"
          id="toolbar-stacked-collapsed-example-check"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="toolbar-stacked-collapsed-example-check-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="toolbar-stacked-collapsed-example-check-check-input"
              name="toolbar-stacked-collapsed-example-check-check-input"
              aria-label="Standalone check"
            />
          </label>
          <button
            class="pf-v6-c-menu-toggle__button"
            type="button"
            aria-expanded="false"
            id="toolbar-stacked-collapsed-example-menu-toggle-toggle-button"
            aria-label="Menu toggle"
          >
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-toolbar__item pf-m-pagination">
        <div class="pf-v6-c-pagination" aria-label="Element pagination">
          <div class="pf-v6-c-pagination__total-items">37 items</div>
          <div class="pf-v6-c-pagination__page-menu">
            <button
              class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Menu toggle"
              id="toolbar-stacked-collapsed-example-pagination-menu-toggle"
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

          <nav class="pf-v6-c-pagination__nav" aria-label="Pagination">
            <div class="pf-v6-c-pagination__nav-control pf-m-first">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Go to first page"
                disabled
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
                aria-label="Go to previous page"
                disabled
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-angle-left" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div
              class="pf-v6-c-pagination__nav-page-select"
              aria-label="Current page 1 of 4"
            >
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
                aria-label="Go to last page"
              >
                <span class="pf-v6-c-button__icon">
                  <i class="fas fa-angle-double-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Primary background

```html
<div
  class="pf-v6-c-toolbar pf-m-primary"
  id="toolbar-primary-background-example"
>
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <hr class="pf-v6-c-divider pf-m-vertical" />

      <div class="pf-v6-c-toolbar__group">
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Secondary background

```html
<div
  class="pf-v6-c-toolbar pf-m-secondary"
  id="toolbar-secondary-background-example"
>
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <hr class="pf-v6-c-divider pf-m-vertical" />

      <div class="pf-v6-c-toolbar__group">
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### No background

```html
<div
  class="pf-v6-c-toolbar pf-m-no-background"
  id="toolbar-no-background-example"
>
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <hr class="pf-v6-c-divider pf-m-vertical" />

      <div class="pf-v6-c-toolbar__group">
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
    </div>
  </div>
</div>

```

### Sticky toolbar

```html
<div class="pf-v6-c-toolbar pf-m-sticky" id="toolbar-sticky-example">
  <div class="pf-v6-c-toolbar__content">
    <div class="pf-v6-c-toolbar__content-section">
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <hr class="pf-v6-c-divider pf-m-vertical" />

      <div class="pf-v6-c-toolbar__group">
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
        <div class="pf-v6-c-toolbar__item">Item</div>
      </div>

      <hr class="pf-v6-c-divider pf-m-vertical" />
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
      <div class="pf-v6-c-toolbar__item">Item</div>
    </div>
  </div>
</div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor mattis massa dignissim blandit. Mauris pellentesque nisi a erat ultricies, mollis auctor nulla volutpat. Donec eu nisl magna. Donec nisi nulla, blandit et mauris in, lobortis elementum neque. Nunc pharetra eleifend purus, in commodo nisl accumsan in. Vestibulum feugiat nisl eu venenatis feugiat. Morbi ornare velit vitae tellus sollicitudin, sed ornare neque sagittis. Proin sodales, libero et vestibulum luctus, nunc mi euismod dui, vel accumsan lacus odio vel nibh. Etiam at mattis purus, sit amet vestibulum metus. Maecenas feugiat condimentum ligula eget hendrerit. Nullam eleifend convallis sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam rhoncus consectetur enim, at interdum mi tincidunt eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br />
<br />
Maecenas vel sollicitudin ipsum, pulvinar pharetra magna. Aenean vel ipsum vel purus malesuada sagittis eget ac odio. Nullam vitae diam mollis, consectetur est vitae, sodales diam. Vivamus eu lectus quis mi maximus porta. Praesent erat sapien, vestibulum nec libero non, tincidunt congue mauris. Pellentesque vitae imperdiet mi. Nulla in ipsum neque. Cras a quam ut sem venenatis euismod non at tortor. Mauris porta purus augue, ut pharetra elit varius at. Vestibulum fringilla ligula ac leo tristique, porta venenatis nibh convallis.
<br />
<br />
Vestibulum vel orci mattis magna tristique suscipit. In vel tellus tempor, consectetur mi at, pellentesque enim. Cras venenatis tellus eget velit porttitor, sit amet malesuada tortor venenatis. Maecenas vitae augue ac orci volutpat gravida. In fermentum, orci eget tincidunt lobortis, turpis orci porta nibh, cursus dignissim lectus sapien at felis. Nulla facilisi. Aenean lectus justo, pellentesque sed nulla ut, pulvinar pellentesque tortor. Ut tempus euismod dolor gravida rhoncus. Quisque sed lorem sit amet erat tincidunt aliquet quis in nulla. Maecenas arcu erat, hendrerit a dui eget, convallis pharetra sapien. Nunc tellus enim, dictum eu egestas vel, ultrices eget est. Etiam quis vehicula sem. Nulla facilisi. Donec ante ipsum, fringilla iaculis ex a, tincidunt lobortis mi.
<br />
<br />
Etiam nulla lacus, porttitor vel volutpat et, malesuada id nunc. Suspendisse porttitor sem quis ante consequat, vitae commodo nulla ultricies. Nulla fermentum ipsum ac dolor elementum, eu luctus ex condimentum. Sed sed arcu aliquam, porta metus in, sollicitudin felis. Sed faucibus lacus consectetur orci ultricies laoreet. Morbi sed lectus dictum sem tempor porta. Donec ut diam tempor, venenatis erat vitae, accumsan diam. Etiam sed purus eget lacus vehicula iaculis non euismod dolor. Quisque ultricies eget est in semper.
<br />
<br />Fusce tristique nulla id vestibulum maximus. Morbi sit amet nisi nec orci pulvinar interdum. Duis convallis, nunc vel pharetra blandit, urna neque eleifend nunc, maximus faucibus tellus nisl a velit. Aliquam quis turpis tempor nisi ultricies fermentum at et ipsum. Pellentesque vel tincidunt nisl. Donec elit ante, sodales ac ultrices vitae, egestas ut magna. Nulla sollicitudin ornare mi, a porttitor sem fermentum vitae. Praesent maximus fringilla gravida. Sed ultricies turpis ut lacus sodales, et aliquet risus accumsan. Pellentesque lacus sapien, cursus vitae nulla vel, bibendum tristique risus.

```

## Documentation

### Overview

As the toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-toolbar` | `<div>` | Initiates the toolbar component. **Required** |
| `.pf-v6-c-toolbar__item` | `<div>` | Initiates a toolbar item. **Required** |
| `.pf-v6-c-toolbar__group` | `<div>` | Initiates a toolbar group. |
| `.pf-v6-c-toolbar__content` | `<div>` | Initiates a toolbar content container. **Required** |
| `.pf-v6-c-toolbar__content-section` | `<div>` | Initiates a toolbar content section. This is used to separate static elements from dynamic elements within a content container. There should be no more than one `.pf-v6-c-toolbar__content-section` per `.pf-v6-c-toolbar__content` **Required** |
| `.pf-v6-c-toolbar__expandable-content` | `<div>` | Initiates a toolbar expandable content section. |
| `.pf-v6-c-toolbar__expand-all-icon` | `<div>` | Initiates a toolbar expand all icon. |
| `.pf-m-sticky` | `.pf-v6-c-toolbar` | Modifies toolbar component to be sticky to the top of its container. |
| `.pf-m-full-height` | `.pf-v6-c-toolbar`, `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group` | Modifies toolbar component to full height of its container and removes vertical padding. |
| `.pf-m-static` | `.pf-v6-c-toolbar` | Modifies expandable content section to position itself to the nearest absolutely positioned parent outside of the toolbar component. This is used primarily for masthead toolbar. |
| `.pf-m-primary` | `.pf-v6-c-toolbar` | Modifies toolbar to have primary background color. |
| `.pf-m-secondary` | `.pf-v6-c-toolbar` | Modifies toolbar to have secondary background color. |
| `.pf-m-no-padding` | `.pf-v6-c-toolbar` | Modifies toolbar to have no padding. |
| `.pf-m-no-background` | `.pf-v6-c-toolbar` | Modifies toolbar to have no background color. |
| `.pf-m-expanded` | `.pf-v6-c-toolbar__expandable-content` | Modifies expandable content section for the expanded state. |
| `.pf-m-expanded` | `.pf-v6-c-toolbar__item.pf-m-expand-all` | Modifies an expand all button for the expanded state. |
| `.pf-m-action-group` | `.pf-v6-c-toolbar__group` | Initiates action group spacing. |
| `.pf-m-action-group-inline` | `.pf-v6-c-toolbar__group` | Initiates inline action group spacing. |
| `.pf-m-action-group-plain` | `.pf-v6-c-toolbar__group` | Initiates plain action group spacing. |
| `.pf-m-filter-group` | `.pf-v6-c-toolbar__group` | Initiates filter group spacing. |
| `.pf-m-label` | `.pf-v6-c-toolbar__item` | Initiates label item presenatation. |
| `.pf-m-label-group` | `.pf-v6-c-toolbar__group` | Initiates label group spacing. |
| `.pf-m-overflow-container` | `.pf-v6-c-toolbar__item`, `.pf-v6-c-toolbar__group` | Modifies the toolbar element to hide overflow and respond to available space. Used for horizontal navigation. |
| `.pf-m-expanded` | `.pf-v6-c-toolbar__expandable-content`, `.pf-v6-c-toolbar__toggle` | Modifies the component for the expanded state. |
| `.pf-m-[wrap/nowrap]` | `.pf-v6-c-toolbar__content`, `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies the toolbar element to wrap/not wrap. |
| `.pf-m-align-[start/center/end]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar [main axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) element alignment. |
| `.pf-m-align-items-[stretch/baseline/start/center/end]` | `.pf-v6-c-toolbar__content`, `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) child alignment. |
| `.pf-m-align-self-[stretch/baseline/start/center/end]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) self alignment. |
| `.pf-m-inset-[none/sm/md/lg/xl/2xl]` | `.pf-v6-c-toolbar` | Modifies toolbar horizontal. |

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v6-c-toolbar__item`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__toggle`, `.pf-v6-c-toolbar__expandable-content` |  Indicates that the toolbar element is hidden. **Required** |
| `aria-expanded="[true/false]"` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` |  Indicates the the expandable content is hidden/visible. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v6-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |
| `aria-label="Expand all"` | `.pf-v6-c-toolbar__item.pf-m-expand-all` | Provides an accessible label for the expand all item button. **Required** |
| `aria-label="Collapse all"` | `.pf-v6-c-toolbar__item.pf-m-expand-all.pf-m-expanded` | Provides an accessible label for the expand all item button. **Required** |

### Toggle group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toggle-group` | `.pf-v6-c-toolbar__group` | Modifies toolbar group to control when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. |
| `.pf-m-[show/hide]` | `.pf-v6-c-toolbar__group.pf-m-toggle-group`, `.pf-v6-c-toolbar__expandable-content` | Modifies toolbar element to hidden. |

### Spacer system

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-[column/row]-gap-[none/sm/md/lg/xl/2xl]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-gap-[none/sm/md/lg/xl/2xl]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies both column and row gap for toolbar group or item spacing at optional [breakpoint](/tokens/all-patternfly-tokens). |
