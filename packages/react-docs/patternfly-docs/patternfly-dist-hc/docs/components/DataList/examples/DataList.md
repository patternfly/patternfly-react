---
id: Data list
section: components
cssPrefix: pf-v6-c-data-list
---## Examples

### Basic

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Basic data list example"
  id="data-list-basic"
>
  <li class="pf-v6-c-data-list__item" aria-labelledby="data-list-basic-item-1">
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-basic-item-1">Primary content</span>
        </div>
        <div class="pf-v6-c-data-list__cell">Secondary content</div>
      </div>
    </div>
  </li>

  <li class="pf-v6-c-data-list__item" aria-labelledby="data-list-basic-item-2">
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-no-fill">
          <span id="data-list-basic-item-2">Secondary content (pf-m-no-fill)</span>
        </div>
        <div
          class="pf-v6-c-data-list__cell pf-m-no-fill pf-m-align-right"
        >Secondary content (pf-m-align-right pf-m-no-fill)</div>
      </div>
    </div>
  </li>
</ul>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="list"`       | `.pf-v6-c-data-list` | Indicates that the data list is a list. **Required** |
| `aria-label`        | `.pf-v6-c-data-list`       | Provides an accessible name for the data list. **Required** |
| `aria-labelledby`   | `.pf-v6-c-data-list__item` | Provides an accessible description for data list item. **Required** |
| `id`                | `.pf-v6-c-data-list__cell`, `.pf-v6-c-data-list__cell *`  | Provides a reference for data list item description. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list` | `<ul>` | Initiates a data list. **Required** |
| `.pf-v6-c-data-list__item` | `<li>` | Initiates a data list item. **Required** |
| `.pf-v6-c-data-list__item-row` | `<div>` | Initiates a data list item row. **Required** |
| `.pf-v6-c-data-list__item-content` | `<div>` | Initiates a container for data list content. **Required**|
| `.pf-v6-c-data-list__cell` | `*` | Initiates a data list content cell. **Required** |
| `.pf-v6-c-data-list__cell-text` | `<span>` | Initiates a data list content cell text element. |
| `.pf-m-align-left` | `.pf-v6-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list\_\_cell element. |
| `.pf-m-no-fill` | `.pf-v6-c-data-list__cell` | Modifies a data list cell to not fill the available horizontal space. |
| `.pf-m-align-right` | `.pf-v6-c-data-list__cell` | Modifies a data list cell to align-right. |

### With headings

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="With headings data list example"
  id="data-list-with-headings"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-with-headings-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <h2 id="data-list-with-headings-item-1">Primary content</h2>
        </div>
        <div class="pf-v6-c-data-list__cell">Secondary content</div>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-with-headings-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-no-fill">
          <h2
            id="data-list-with-headings-item-2"
          >Secondary content (pf-m-no-fill)</h2>
        </div>
        <div
          class="pf-v6-c-data-list__cell pf-m-no-fill pf-m-align-right"
        >Secondary content (pf-m-align-right pf-m-no-fill)</div>
      </div>
    </div>
  </li>
</ul>

```

### Usage

When a list item includes more than one block of content, it can be difficult for some screen reader users to discern where one list item ends and the next one begins. A simple way to provide better separation of list items is to define the primary content section as a heading. Headings are useful for indicating a new section of contents, but also provide an easy way for screen reader users to navigate to specific sections on the page. The heading level should be based on the context in which the DataList component is being used. For example, if the heading for the section that contains the DataList is a level 3, then `h4` elements should be used in the DataList list items.

### Checkboxes, actions, and additional cells

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Checkbox and action data list example"
  id="data-list-checkboxes-actions-addl-cells"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-checkboxes-actions-addl-cells-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-checkboxes-actions-addl-cells-item-1&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-checkboxes-actions-addl-cells-item-1&quot;-input"
              name="data-list-checkboxes-actions-addl-cells-item-1&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-checkboxes-actions-addl-cells-item-1"
          >Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div
          class="pf-v6-c-data-list__cell"
        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-v6-c-data-list__cell">
          <span>Tertiary Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-checkboxes-actions-addl-cells-item-1-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-checkboxes-actions-addl-cells-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-checkboxes-actions-addl-cells-item-2&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-checkboxes-actions-addl-cells-item-2&quot;-input"
              name="data-list-checkboxes-actions-addl-cells-item-2&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-checkboxes-actions-addl-cells-item-2"
          >Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div
          class="pf-v6-c-data-list__cell"
        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-v6-c-data-list__item-action pf-m-hidden-on-lg">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-checkboxes-actions-addl-cells-item-2-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        class="pf-v6-c-data-list__item-action pf-m-hidden pf-m-visible-on-lg"
      >
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary</span>
        </button>
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-checkboxes-actions-addl-cells-item-3"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-checkboxes-actions-addl-cells-item-3&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-checkboxes-actions-addl-cells-item-3&quot;-input"
              name="data-list-checkboxes-actions-addl-cells-item-3&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-checkboxes-actions-addl-cells-item-3"
          >Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div
          class="pf-v6-c-data-list__cell"
        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-v6-c-data-list__item-action pf-m-hidden-on-lg">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-checkboxes-actions-addl-cells-item-3-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        class="pf-v6-c-data-list__item-action pf-m-hidden pf-m-visible-on-xl"
      >
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary</span>
        </button>
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
        <button class="pf-v6-c-button pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
      </div>
    </div>
  </li>
</ul>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"`  | `.pf-v6-c-data-list__action` > `.pf-v6-c-button`  | Provides an accessible label buttons. **Required** |
| `aria-labelledby="{title_cell_id}"`  | `.pf-v6-c-data-list__check` > `.pf-v6-c-check__input`   | Creates an accessible label for the checkbox based on the title cell. **Required** |
| `aria-labelledby="{title_cell_id} {data_list_action_id}"`  | `.pf-v6-c-data-list__action` > `.pf-v6-c-button`   | Creates an accessible label for the action button using the title cell and button label **Required** |
| `id`  | `.pf-v6-c-data-list__cell > *`, `.pf-v6-c-data-list__check` > `.pf-v6-c-check__input`, `.pf-v6-c-data-list__action` > `.pf-v6-c-button` | Provides a reference for interactive elements. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-v6-c-data-list__check` here. **Required** |
| `.pf-v6-c-data-list__item-action` | `<div>` | Initiates a container for the data list actions. For example, add `.pf-v6-c-data-list__action` here. **Required** |
| `.pf-v6-c-data-list__check`  | `<div>` | Initiates a data list check cell. **Required** |
| `.pf-v6-c-data-list__action` | `<div>` | Initiates a data list action button cell. **Required** |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v6-c-data-list__item-action` | Hides an actions container at optional [breakpoint](/tokens/all-patternfly-tokens), or hides it at all breakpoints with `.pf-m-hidden`. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v6-c-data-list__item-action` | Shows an actions container at optional [breakpoint](/tokens/all-patternfly-tokens). |

### Expandable

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Expandable data list example"
  id="data-list-expandable"
>
  <li
    class="pf-v6-c-data-list__item pf-m-expanded"
    aria-labelledby="data-list-expandable-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-toggle1 data-list-expandable-item1"
            id="data-list-expandable-toggle1"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-expandable-content1"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-expandable-item-1">Primary content</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#">link</a>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-item-1-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-content1"
      aria-label="Expandable primary content details"
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-expandable-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-toggle2 data-list-expandable-item2"
            id="data-list-expandable-toggle2"
            aria-label="Toggle details for"
            aria-expanded="false"
            aria-controls="data-list-expandable-content2"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <div id="data-list-expandable-item-2">Secondary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-item-2-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-content2"
      aria-label="Expandable secondary content details"
      hidden
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-expanded"
    aria-labelledby="data-list-expandable-item-3"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-toggle3 data-list-expandable-item3"
            id="data-list-expandable-toggle3"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-expandable-content3"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <div id="data-list-expandable-item-3">Tertiary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-item-3-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-content3"
      aria-label="Expandable tertiary content details"
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body pf-m-no-padding"
      >This expanded section has no padding.</div>
    </section>
  </li>
</ul>

```

### Expandable compact

```html
<ul
  class="pf-v6-c-data-list pf-m-compact"
  role="list"
  aria-label="Expandable data list example"
  id="data-list-expandable-compact"
>
  <li
    class="pf-v6-c-data-list__item pf-m-expanded"
    aria-labelledby="data-list-expandable-compact-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-compact-toggle1 data-list-expandable-compact-item1"
            id="data-list-expandable-compact-toggle1"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-expandable-compact-content1"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <div id="data-list-expandable-compact-item-1">Primary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#">link</a>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-compact-item-1-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-compact-content1"
      aria-label="Expandable compact primary content details"
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-expandable-compact-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-compact-toggle2 data-list-expandable-compact-item2"
            id="data-list-expandable-compact-toggle2"
            aria-label="Toggle details for"
            aria-expanded="false"
            aria-controls="data-list-expandable-compact-content2"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-expandable-compact-item-2">Secondary content</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-compact-item-2-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-compact-content2"
      aria-label="Expandable compact secondary content details"
      hidden
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-expanded"
    aria-labelledby="data-list-expandable-compact-item-3"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-compact-toggle3 data-list-expandable-compact-item3"
            id="data-list-expandable-compact-toggle3"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-expandable-compact-content3"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-expandable-compact-item-3">Tertiary content</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-compact-item-3-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-compact-content3"
      aria-label="Expandable compact tertiary content details"
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body pf-m-no-padding"
      >This expanded section has no padding.</div>
    </section>
  </li>
</ul>

```

### Expandable nested

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Expandable nested data list example"
  id="data-list-expandable-nested"
>
  <li
    class="pf-v6-c-data-list__item pf-m-expanded"
    aria-labelledby="data-list-expandable-nested-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-nested-toggle1 data-list-expandable-nested-item1"
            id="data-list-expandable-nested-toggle1"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-expandable-nested-content1"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-expandable-nested-item-1">Primary content</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#">link</a>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-nested-item-1-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-nested-content1"
      aria-label="Expandable nested primary content details"
    >
      <div class="pf-v6-c-data-list__expandable-content-body">
        <ul
          class="pf-v6-c-data-list"
          role="list"
          aria-label="Expandable nested nested data list example"
          id="data-list-expandable-nested-nested"
        >
          <li
            class="pf-v6-c-data-list__item pf-m-expanded"
            aria-labelledby="data-list-expandable-nested-nested-item-1"
          >
            <div class="pf-v6-c-data-list__item-row">
              <div class="pf-v6-c-data-list__item-control">
                <div class="pf-v6-c-data-list__toggle">
                  <button
                    class="pf-v6-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="data-list-expandable-nested-nested-toggle1 data-list-expandable-nested-nested-item1"
                    id="data-list-expandable-nested-nested-toggle1"
                    aria-label="Toggle details for"
                    aria-expanded="true"
                    aria-controls="data-list-expandable-nested-nested-content1"
                  >
                    <span class="pf-v6-c-button__icon pf-m-start">
                      <div class="pf-v6-c-data-list__toggle-icon">
                        <i class="fas fa-angle-right" aria-hidden="true"></i>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div class="pf-v6-c-data-list__item-content">
                <div class="pf-v6-c-data-list__cell">
                  <span
                    id="data-list-expandable-nested-nested-item-1"
                  >Nested row 1</span>
                </div>
              </div>
            </div>
            <section
              class="pf-v6-c-data-list__expandable-content"
              id="data-list-expandable-nested-nested-content1"
              aria-label="Nested row 1 details"
            >
              <div
                class="pf-v6-c-data-list__expandable-content-body"
              >Nested row 1 expanded content.</div>
            </section>
          </li>

          <li
            class="pf-v6-c-data-list__item"
            aria-labelledby="data-list-expandable-nested-nested-item-2"
          >
            <div class="pf-v6-c-data-list__item-row">
              <div class="pf-v6-c-data-list__item-control">
                <div class="pf-v6-c-data-list__toggle">
                  <button
                    class="pf-v6-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="data-list-expandable-nested-nested-toggle2 data-list-expandable-nested-nested-item2"
                    id="data-list-expandable-nested-nested-toggle2"
                    aria-label="Toggle details for"
                    aria-expanded="false"
                    aria-controls="data-list-expandable-nested-nested-content2"
                  >
                    <span class="pf-v6-c-button__icon pf-m-start">
                      <div class="pf-v6-c-data-list__toggle-icon">
                        <i class="fas fa-angle-right" aria-hidden="true"></i>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div class="pf-v6-c-data-list__item-content">
                <div class="pf-v6-c-data-list__cell">
                  <div
                    id="data-list-expandable-nested-nested-item-2"
                  >Nested row 2</div>
                </div>
              </div>
            </div>
            <section
              class="pf-v6-c-data-list__expandable-content"
              id="data-list-expandable-nested-nested-content2"
              aria-label="Nested row 2 details"
              hidden
            >
              <div
                class="pf-v6-c-data-list__expandable-content-body"
              >Nested row 2 expanded content.</div>
            </section>
          </li>

          <li
            class="pf-v6-c-data-list__item pf-m-expanded"
            aria-labelledby="data-list-expandable-nested-nested-item-3"
          >
            <div class="pf-v6-c-data-list__item-row">
              <div class="pf-v6-c-data-list__item-control">
                <div class="pf-v6-c-data-list__toggle">
                  <button
                    class="pf-v6-c-button pf-m-plain"
                    type="button"
                    aria-labelledby="data-list-expandable-nested-nested-toggle3 data-list-expandable-nested-nested-item3"
                    id="data-list-expandable-nested-nested-toggle3"
                    aria-label="Toggle details for"
                    aria-expanded="true"
                    aria-controls="data-list-expandable-nested-nested-content3"
                  >
                    <span class="pf-v6-c-button__icon pf-m-start">
                      <div class="pf-v6-c-data-list__toggle-icon">
                        <i class="fas fa-angle-right" aria-hidden="true"></i>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div class="pf-v6-c-data-list__item-content">
                <div class="pf-v6-c-data-list__cell">
                  <div
                    id="data-list-expandable-nested-nested-item-3"
                  >Nested row 3</div>
                </div>
              </div>
            </div>
            <section
              class="pf-v6-c-data-list__expandable-content"
              id="data-list-expandable-nested-nested-content3"
              aria-label="Nested row 3 details"
            >
              <div
                class="pf-v6-c-data-list__expandable-content-body"
              >Nested row 3 expanded content.</div>
            </section>
          </li>
        </ul>
      </div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-expandable-nested-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-nested-toggle2 data-list-expandable-nested-item2"
            id="data-list-expandable-nested-toggle2"
            aria-label="Toggle details for"
            aria-expanded="false"
            aria-controls="data-list-expandable-nested-content2"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <div id="data-list-expandable-nested-item-2">Secondary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-nested-item-2-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-nested-content2"
      aria-label="Expandable nested secondary content details"
      hidden
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-expanded"
    aria-labelledby="data-list-expandable-nested-item-3"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-expandable-nested-toggle3 data-list-expandable-nested-item3"
            id="data-list-expandable-nested-toggle3"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-expandable-nested-content3"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <div id="data-list-expandable-nested-item-3">Tertiary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-expandable-nested-item-3-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-expandable-nested-content3"
      aria-label="Expandable nested tertiary content details"
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body pf-m-no-padding"
      >This expanded section has no padding.</div>
    </section>
  </li>
</ul>

```

### Compact

```html
<ul
  class="pf-v6-c-data-list pf-m-compact pf-m-grid-sm"
  role="list"
  aria-label="Compact data list example"
  id="data-list-compact"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-compact-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-compact-item-1&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-compact-item-1&quot;-input"
              name="data-list-compact-item-1&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-compact-item-1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div
          class="pf-v6-c-data-list__cell"
        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-v6-c-data-list__cell">
          <span>Tertiary Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div class="pf-v6-c-data-list__cell">
          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-compact-item-1-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-compact-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-compact-item-2&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-compact-item-2&quot;-input"
              name="data-list-compact-item-2&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-compact-item-2">Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div
          class="pf-v6-c-data-list__cell"
        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-v6-c-data-list__item-action pf-m-hidden-on-lg">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-compact-item-2-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        class="pf-v6-c-data-list__item-action pf-m-hidden pf-m-visible-on-lg"
      >
        <button class="pf-v6-c-button pf-m-small pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-compact-item-3"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-compact-item-3&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-compact-item-3&quot;-input"
              name="data-list-compact-item-3&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-compact-item-3">Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div
          class="pf-v6-c-data-list__cell"
        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-v6-c-data-list__item-action pf-m-hidden-on-xl">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-compact-item-3-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        class="pf-v6-c-data-list__item-action pf-m-hidden pf-m-visible-on-xl"
      >
        <button class="pf-v6-c-button pf-m-small pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-secondary" type="button">
          <span class="pf-v6-c-button__text">Secondary</span>
        </button>
      </div>
    </div>
  </li>
</ul>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button` | Indicates that the expandable content is visible. **Required**|
| `hidden` | `.pf-v6-c-data-list__expandable-content` | Indicates that the expandable content is hidden. **Required**|
| `aria-label="[descriptive text]"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="{title_cell_id} {button_id}"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button` | Establishes relationship between aria-label text and toggle button. **Required**
| `id="{button_id}"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element controlled]"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-v6-c-data-list__toggle` here. **Required** |
| `.pf-v6-c-data-list__toggle` | `<div>` | Initiates a toggle button. |
| `.pf-v6-c-data-list__toggle-icon` | `<span>` | Initiates a toggle icon. |
| `.pf-v6-c-data-list__expandable-content` | `<div>` | Initiates an expandable content container. |
| `.pf-v6-c-data-list__expandable-content-body` | `<div>` | Initiates an expandable content container body. **Required** when `.pf-v6-c-data-list__expandable-content` is used. |
| `.pf-m-expanded` | `.pf-v6-c-data-list__item` | Modifies for expanded state. |
| `.pf-m-compact` | `.pf-v6-c-data-list` | Modifies for compact variation. |
| `.pf-m-no-padding` | `.pf-v6-c-data-list__expandable-content-body` | Removes padding for the expandable content body. |
| `.pf-m-icon` | `.pf-v6-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list\_\_cell element. |

### Modifiers

```html
<h2 class="Preview__section-title">Default fitting - example 1</h2>
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Width modifier data list example 1"
  id="data-list-default-fitting"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-default-fitting-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-default-fitting-item-1&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-default-fitting-item-1&quot;-input"
              name="data-list-default-fitting-item-1&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <div class="Preview__placeholder">
            <b id="data-list-default-fitting-item-1">default</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pf-v6-c-data-list__cell">
          <div class="Preview__placeholder">
            <b>default</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>

<h2 class="Preview__section-title">Flex modifiers - example 2</h2>
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Width modifier data list example 2"
  id="data-list-flex-modifiers"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-flex-modifiers-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-flex-modifiers-item-1&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-flex-modifiers-item-1&quot;-input"
              name="data-list-flex-modifiers-item-1&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-flex-2">
          <div class="Preview__placeholder">
            <b id="data-list-flex-modifiers-item-1">.pf-m-flex-2</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div class="pf-v6-c-data-list__cell pf-m-flex-4">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-4</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-flex-modifiers-item-1-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </li>
</ul>

<h2 class="Preview__section-title">Flex modifiers - example 3</h2>
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Width modifier data list example 3"
  id="data-list-flex-modifiers-2"
>
  <li
    class="pf-v6-c-data-list__item pf-m-expanded"
    aria-labelledby="data-list-flex-modifiers-2-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-flex-modifiers-2-toggle1 data-list-flex-modifiers-2-item1"
            id="data-list-flex-modifiers-2-toggle1"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-flex-modifiers-2-content1"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>

        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-flex-modifiers-2-item-1&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-flex-modifiers-2-item-1&quot;-input"
              name="data-list-flex-modifiers-2-item-1&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell pf-m-flex-5">
          <div class="Preview__placeholder">
            <b id="data-list-flex-modifiers-2-item-1">.pf-m-flex-5</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pf-v6-c-data-list__cell pf-m-flex-2">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-2</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pf-v6-c-data-list__cell pf-m-flex-3">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-3</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pf-v6-c-data-list__cell pf-m-flex-3">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-3</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Data list item menu toggle"
          id="data-list-flex-modifiers-2-item-1-menu-toggle"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-flex-modifiers-2-content1"
      aria-label="Flex modifier expandable primary content details"
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>
</ul>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-controls="[id of element controlled]"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-flex-{1, 2, 3, 4, 5}` | `.pf-v6-c-data-list__cell` | Percentage based modifier for `.pf-v6-c-data-list__cell` widths. |

### Clickable rows

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Clickable rows data list example"
  id="data-list-clickable-rows"
>
  <li
    class="pf-v6-c-data-list__item pf-m-clickable pf-m-selected"
    aria-labelledby="data-list-clickable-rows-item-1"
    tabindex="0"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-clickable-rows-item-1">Primary content (clicked)</span>
        </div>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-clickable"
    aria-labelledby="data-list-clickable-rows-item-2"
    tabindex="0"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-clickable-rows-item-2">Secondary content</span>
        </div>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-clickable"
    aria-labelledby="data-list-clickable-rows-item-3"
    tabindex="0"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-clickable-rows-item-3">Tertiary content</span>
        </div>
      </div>
    </div>
  </li>
</ul>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `tabindex="0"` | `.pf-v6-c-data-list__item.pf-m-clickable` | Inserts the clickable row into the tab order of the page so that it is focusable. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-clickable` | `.pf-v6-c-data-list__item` | Modifies a data list item so that it is clickable. |
| `.pf-m-selected` | `.pf-v6-c-data-list__item` | Modifies a data list item for the selected state. |

### Clickable expandable rows

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Clickable, expandable data list example"
  id="data-list-clickable-expandable-rows"
>
  <li
    class="pf-v6-c-data-list__item pf-m-expanded pf-m-clickable pf-m-selected"
    aria-labelledby="data-list-clickable-expandable-rows-item-1"
    tabindex="0"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-clickable-expandable-rows-toggle1 data-list-clickable-expandable-rows-item1"
            id="data-list-clickable-expandable-rows-toggle1"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-clickable-expandable-rows-content1"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-clickable-expandable-rows-item-1"
          >Primary content (clicked and expanded)</span>
        </div>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-clickable-expandable-rows-content1"
      aria-label="Clickable expandable row primary content details"
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-clickable"
    aria-labelledby="data-list-clickable-expandable-rows-item-2"
    tabindex="0"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-clickable-expandable-rows-toggle2 data-list-clickable-expandable-rows-item2"
            id="data-list-clickable-expandable-rows-toggle2"
            aria-label="Toggle details for"
            aria-expanded="false"
            aria-controls="data-list-clickable-expandable-rows-content2"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-clickable-expandable-rows-item-2"
          >Secondary content</span>
        </div>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-clickable-expandable-rows-content2"
      aria-label="Clickable expandable row secondary content details"
      hidden
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-expanded pf-m-clickable"
    aria-labelledby="data-list-clickable-expandable-rows-item-3"
    tabindex="0"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-clickable-expandable-rows-toggle3 data-list-clickable-expandable-rows-item3"
            id="data-list-clickable-expandable-rows-toggle3"
            aria-label="Toggle details for"
            aria-expanded="true"
            aria-controls="data-list-clickable-expandable-rows-content3"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-clickable-expandable-rows-item-3"
          >Tertiary content (expanded)</span>
        </div>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-clickable-expandable-rows-content3"
      aria-label="Clickable expandable row tertiary content details"
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body pf-m-no-padding"
      >This expanded section has no padding.</div>
    </section>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-clickable"
    aria-labelledby="data-list-clickable-expandable-rows-item-4"
    tabindex="0"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <div class="pf-v6-c-data-list__toggle">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-labelledby="data-list-clickable-expandable-rows-toggle4 data-list-clickable-expandable-rows-item4"
            id="data-list-clickable-expandable-rows-toggle4"
            aria-label="Toggle details for"
            aria-expanded="false"
            aria-controls="data-list-clickable-expandable-rows-content4"
          >
            <span class="pf-v6-c-button__icon pf-m-start">
              <div class="pf-v6-c-data-list__toggle-icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-clickable-expandable-rows-item-4"
          >Quaternary content</span>
        </div>
      </div>
    </div>
    <section
      class="pf-v6-c-data-list__expandable-content"
      id="data-list-clickable-expandable-rows-content4"
      aria-label="Clickable expandable row quaternary content details"
      hidden
    >
      <div
        class="pf-v6-c-data-list__expandable-content-body"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>
</ul>

```

### Draggable

```html
<div
  id="draggable-help"
>Activate the reorder button and use the arrow keys to reorder the list or use your mouse to drag/reorder. Press escape to cancel the reordering.</div>
<ul
  class="pf-v6-c-data-list pf-m-compact"
  role="list"
  aria-label="Draggable data list rows"
  id="data-list-draggable"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-draggable-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <button
          class="pf-v6-c-data-list__item-draggable-button pf-m-disabled"
          type="button"
          aria-label="Reorder"
          aria-pressed="false"
          id="data-list-draggable-draggable-button-1"
          aria-describedby="draggable-help"
          aria-labelledby="data-list-draggable-draggable-button-1 data-list-draggable-item-1"
          disabled
        >
          <span class="pf-v6-c-data-list__item-draggable-icon">
            <i class="fas fa-grip-vertical"></i>
          </span>
        </button>
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-draggable-item-1&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-draggable-item-1&quot;-input"
              name="data-list-draggable-item-1&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            class="pf-v6-c-data-list__cell-text"
            id="data-list-draggable-item-1"
          >Draggable icon disabled</span>
        </div>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-draggable-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <button
          class="pf-v6-c-data-list__item-draggable-button"
          type="button"
          aria-label="Reorder"
          aria-pressed="false"
          id="data-list-draggable-draggable-button-2"
          aria-describedby="draggable-help"
          aria-labelledby="data-list-draggable-draggable-button-2 data-list-draggable-item-2"
        >
          <span class="pf-v6-c-data-list__item-draggable-icon">
            <i class="fas fa-grip-vertical"></i>
          </span>
        </button>
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-draggable-item-2&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-draggable-item-2&quot;-input"
              name="data-list-draggable-item-2&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            class="pf-v6-c-data-list__cell-text"
            id="data-list-draggable-item-2"
          >List item</span>
        </div>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item pf-m-ghost-row"
    aria-labelledby="data-list-draggable-item-3"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <button
          class="pf-v6-c-data-list__item-draggable-button"
          type="button"
          aria-label="Reorder"
          aria-pressed="false"
          id="data-list-draggable-draggable-button-3"
          aria-describedby="draggable-help"
          aria-labelledby="data-list-draggable-draggable-button-3 data-list-draggable-item-3"
          disabled
        >
          <span class="pf-v6-c-data-list__item-draggable-icon">
            <i class="fas fa-grip-vertical"></i>
          </span>
        </button>
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-draggable-item-3&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-draggable-item-3&quot;-input"
              name="data-list-draggable-item-3&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            class="pf-v6-c-data-list__cell-text"
            id="data-list-draggable-item-3"
          >Ghost row</span>
        </div>
      </div>
    </div>
  </li>

  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-draggable-item-4"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-control">
        <button
          class="pf-v6-c-data-list__item-draggable-button"
          type="button"
          aria-label="Reorder"
          aria-pressed="false"
          id="data-list-draggable-draggable-button-4"
          aria-describedby="draggable-help"
          aria-labelledby="data-list-draggable-draggable-button-4 data-list-draggable-item-4"
        >
          <span class="pf-v6-c-data-list__item-draggable-icon">
            <i class="fas fa-grip-vertical"></i>
          </span>
        </button>
        <div class="pf-v6-c-data-list__check">
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="data-list-draggable-item-4&quot;-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="data-list-draggable-item-4&quot;-input"
              name="data-list-draggable-item-4&quot;-input"
              aria-label="Standalone check"
            />
          </label>
        </div>
      </div>
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            class="pf-v6-c-data-list__cell-text"
            id="data-list-draggable-item-4"
          >List item</span>
        </div>
      </div>
    </div>
  </li>
</ul>
<div
  class="pf-v6-screen-reader"
  aria-live="assertive"
>This is the aria-live section that provides real-time feedback to the user.</div>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-pressed="true or false"` | `.pf-v6-c-data-list__item-draggable-button` | Indicates that the button is a toggle. When set to "true", `pf-m-active` should also be set so that the button displays in an active state. |
| `aria-live` | `[element with live text]` | Gives screen reader users live feedback about what's happening during interaction with the data list, both during drag and drop interactions and keyboard interactions. **Highly Recommended** |
| `aria-describedby="[id value of applicable content]"` | `.pf-v6-c-data-list__item-draggable-button` | Gives the draggable button an accessible description by referring to the textual content that describes how to use the button to drag elements. The example here uses a `<div id="draggable-help"></div>`. **Highly recommended** |
| `aria-labelledby="[id value of .pf-v6-c-data-list__item-draggable-button] [id value of .pf-v6-c-data-list__cell-text]"` | `.pf-v6-c-data-list__item-draggable-button` | Provides an accessible name for the draggable button. |
| `id="[]"` | `.pf-v6-c-data-list__item-draggable-button`, `.pf-v6-c-data-list__cell-text` | Gives the button and the text element accessible IDs |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list__item-draggable-button` | `<button>` | Initiates the draggable button. Use for drag and drop. |
| `.pf-v6-c-data-list__item-draggable-icon` | `<span>` | Initiates the draggable button icon. |
| `.pf-m-draggable` | `.pf-v6-c-data-list__item` | Modifies a data list item so that it is draggable. |
| `.pf-m-ghost-row` | `.pf-v6-c-data-list__item.pf-m-draggable` | Modifies a draggable data list item to be the ghost row. |
| `.pf-m-disabled` | `.pf-v6-c-data-list__item.pf-m-draggable` | Modifies a data list draggable item for the disabled state. |
| `.pf-m-drag-over` | `.pf-v6-c-data-list` | Modifies the data list to indicate that a draggable item is being dragged over the data list. |

### Text modifiers

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Data list with text modifiers"
  id="data-list-with-text-modifiers"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-with-text-modifiers-item"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-with-text-modifiers-item"
          >This text will wrap to the next line because it has the default behavior of the data list cell.</span>
        </div>
        <div
          class="pf-v6-c-data-list__cell pf-m-truncate"
        >This text will truncate because it is very very long.</div>
        <div
          class="pf-v6-c-data-list__cell pf-m-break-word"
        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>
        <div
          class="pf-v6-c-data-list__cell pf-m-nowrap"
        >This text will not break or wrap.</div>
      </div>
    </div>
    <div class="pf-v6-c-data-list__item-row pf-m-truncate">
      <div class="pf-v6-c-data-list__item-content">
        <div
          class="pf-v6-c-data-list__cell"
        >This text will truncate because it is very very long. This text will truncate because it is very very long.</div>
        <div
          class="pf-v6-c-data-list__cell"
        >This text will truncate because it is very very long. This text will truncate because it is very very long.</div>
        <div
          class="pf-v6-c-data-list__cell"
        >This text will truncate because it is very very long. This text will truncate because it is very very long.</div>
        <div
          class="pf-v6-c-data-list__cell"
        >This text will truncate because it is very very long. This text will truncate because it is very very long.</div>
      </div>
    </div>
    <div class="pf-v6-c-data-list__item-row pf-m-break-word">
      <div class="pf-v6-c-data-list__item-content">
        <div
          class="pf-v6-c-data-list__cell"
        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>
        <div
          class="pf-v6-c-data-list__cell"
        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>
        <div
          class="pf-v6-c-data-list__cell"
        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>
        <div
          class="pf-v6-c-data-list__cell"
        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>
      </div>
    </div>
    <div class="pf-v6-c-data-list__item-row pf-m-nowrap">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">This text will not break or wrap.</div>
        <div class="pf-v6-c-data-list__cell">This text will not break or wrap.</div>
        <div class="pf-v6-c-data-list__cell">This text will not break or wrap.</div>
        <div class="pf-v6-c-data-list__cell">This text will not break or wrap.</div>
      </div>
    </div>
  </li>
</ul>

```

### Text-modifiers-data-list-text

```html
<ul
  class="pf-v6-c-data-list"
  role="list"
  aria-label="Data list with modifiers and text"
  id="data-list-with-text-modifiers-and-text"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-with-text-modifiers-and-text-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span
            id="data-list-with-text-modifiers-and-text-item-1"
          >This text will wrap to the next line because it has the default behavior of the data list cell.</span>
          <span
            class="pf-v6-c-data-list__text pf-m-truncate"
          >This is data list text, you can apply `pf-m-truncate` directly to the text. This is data list text, you can apply `pf-m-truncate` directly to the text.</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          This text will wrap to the next line because it has the default behavior of the data list cell.
          <span
            class="pf-v6-c-data-list__text pf-m-break-word"
          >http://thisisaverylongdatalisttextthatneedstobreakusethebreakwordmodifier.org</span>
        </div>
        <div class="pf-v6-c-data-list__cell">
          This text will wrap to the next line because it has the default behavior of the data list cell.
          <span
            class="pf-v6-c-data-list__text pf-m-nowrap"
          >This is data list text, you can apply `pf-m-nowrap` directly to the text.</span>
        </div>
      </div>
    </div>
  </li>
</ul>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list__text` | `*` | Inserts the data list text element. Use this class to modify specific text directly. |
| `.pf-m-truncate` | `.pf-v6-c-data-list`, `.pf-v6-c-data-list__item-row`, `.pf-v6-c-data-list__cell`, `.pf-v6-c-data-list__text` | Modifies the data list element so that text is truncated. |
| `.pf-m-break-word` | `.pf-v6-c-data-list`, `.pf-v6-c-data-list__item-row`, `.pf-v6-c-data-list__cell`, `.pf-v6-c-data-list__text` | Modifies the data list element so that text breaks to the next line. |
| `.pf-m-nowrap` | `.pf-v6-c-data-list`, `.pf-v6-c-data-list__item-row`, `.pf-v6-c-data-list__cell`, `.pf-v6-c-data-list__text` | Modifies the data list element so that text does not wrap to the next line. |

## Documentation

### Overview

The DataList component provides a flexible alternative to the Table component, wherein individual data points may or may not exist within each row. DataList relies upon PatternFly layouts to achieve desired presentation within `pf-v6-c-data-list__cell`s. DataLists do not have headers. If headers are required, use the [table component](/components/table).

### Grid

```html
<ul
  class="pf-v6-c-data-list pf-m-grid"
  role="list"
  aria-label="Grid data list example"
  id="data-list-grid"
>
  <li class="pf-v6-c-data-list__item" aria-labelledby="data-list-grid-item-1">
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-grid-item-1">Cell 1</span>
        </div>
        <div class="pf-v6-c-data-list__cell">Cell 2</div>
        <div class="pf-v6-c-data-list__cell">Cell 3</div>
        <div class="pf-v6-c-data-list__cell">Cell 4</div>
        <div class="pf-v6-c-data-list__cell">Cell 5</div>
        <div class="pf-v6-c-data-list__cell">Cell 6</div>
      </div>
    </div>
  </li>
  <li class="pf-v6-c-data-list__item" aria-labelledby="data-list-grid-item-2">
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-grid-item-2">Cell 1</span>
        </div>
        <div class="pf-v6-c-data-list__cell">Cell 2</div>
        <div class="pf-v6-c-data-list__cell">Cell 3</div>
        <div class="pf-v6-c-data-list__cell">Cell 4</div>
        <div class="pf-v6-c-data-list__cell">Cell 5</div>
        <div class="pf-v6-c-data-list__cell">Cell 6</div>
      </div>
    </div>
  </li>
</ul>

```

### Grid (small breakpoint)

```html
<ul
  class="pf-v6-c-data-list pf-m-grid-sm"
  role="list"
  aria-label="Grid small data list example"
  id="data-list-grid-small"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-grid-small-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-grid-small-item-1">Cell 1</span>
        </div>
        <div class="pf-v6-c-data-list__cell">Cell 2</div>
        <div class="pf-v6-c-data-list__cell">Cell 3</div>
        <div class="pf-v6-c-data-list__cell">Cell 4</div>
        <div class="pf-v6-c-data-list__cell">Cell 5</div>
        <div class="pf-v6-c-data-list__cell">Cell 6</div>
      </div>
    </div>
  </li>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-grid-small-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-grid-small-item-2">Cell 1</span>
        </div>
        <div class="pf-v6-c-data-list__cell">Cell 2</div>
        <div class="pf-v6-c-data-list__cell">Cell 3</div>
        <div class="pf-v6-c-data-list__cell">Cell 4</div>
        <div class="pf-v6-c-data-list__cell">Cell 5</div>
        <div class="pf-v6-c-data-list__cell">Cell 6</div>
      </div>
    </div>
  </li>
</ul>

```

### Grid none

```html
<ul
  class="pf-v6-c-data-list pf-m-grid-none"
  role="list"
  aria-label="Grid none data list example"
  id="data-list-grid-none"
>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-grid-none-item-1"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-grid-none-item-1">Cell 1</span>
        </div>
        <div class="pf-v6-c-data-list__cell">Cell 2</div>
        <div class="pf-v6-c-data-list__cell">Cell 3</div>
        <div class="pf-v6-c-data-list__cell">Cell 4</div>
        <div class="pf-v6-c-data-list__cell">Cell 5</div>
        <div class="pf-v6-c-data-list__cell">Cell 6</div>
      </div>
    </div>
  </li>
  <li
    class="pf-v6-c-data-list__item"
    aria-labelledby="data-list-grid-none-item-2"
  >
    <div class="pf-v6-c-data-list__item-row">
      <div class="pf-v6-c-data-list__item-content">
        <div class="pf-v6-c-data-list__cell">
          <span id="data-list-grid-none-item-2">Cell 1</span>
        </div>
        <div class="pf-v6-c-data-list__cell">Cell 2</div>
        <div class="pf-v6-c-data-list__cell">Cell 3</div>
        <div class="pf-v6-c-data-list__cell">Cell 4</div>
        <div class="pf-v6-c-data-list__cell">Cell 5</div>
        <div class="pf-v6-c-data-list__cell">Cell 6</div>
      </div>
    </div>
  </li>
</ul>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-grid{-[none, sm, md, lg, xl, 2xl]}` | `.pf-v6-c-data-list` | Modifies the data list to switch to a grid layout at a specified [breakpoint](/tokens/all-patternfly-tokens). `.pf-m-grid` will display the grid layout at all breakpoints. `.pf-m-grid-none` will display the desktop layout at all breakpoints. **Note:** Without a grid modifier, the data list will display the grid layout by default and switch to the desktop layout at a medium breakpoint. |
