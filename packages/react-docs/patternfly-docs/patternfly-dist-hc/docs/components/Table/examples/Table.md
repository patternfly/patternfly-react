---
id: Table
section: components
cssPrefix: pf-v6-c-table
---import './Table.css'

# Examples

## Basic table

### Basic table example

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a simple table example"
  id="table-basic"
>
  <caption class="pf-v6-c-table__caption">This is the table caption</caption>

  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 1</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 3</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 4</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Basic table accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="grid"` | `.pf-v6-c-table` | Identifies the element that serves as the grid widget container. **Required** |
| `aria-label` | `.pf-v6-c-table` | Provides an accessible name for the table when a descriptive `<caption>` or `<h*>` is not available. **Required in the absence of `<caption>` or `<h*>`** |
| `data-label="[td description]"` | `<td>` | This attribute replaces table header in mobile viewport. It is rendered by `::before` pseudo element. |

### Basic table usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table` | `<table>` | Initiates a table element. **Required** |
| `.pf-v6-c-table__thead` | `<tr>` | Initiates a table header. **Required** |
| `.pf-v6-c-table__tbody` | `<tr>` | Initiates a table body. **Required** |
| `.pf-v6-c-table__tfoot` | `<tr>` | Initiates a table footer. |
| `.pf-v6-c-table__tr` | `<tr>` | Initiates a table row. **Required** |
| `.pf-v6-c-table__th` | `<th>` | Initiates a table header cell. **Required** |
| `.pf-v6-c-table__td` | `<td>` | Initiates a table data cell. **Required** |
| `.pf-v6-c-table__caption` | `<caption>` | Initiates a table caption. |
| `.pf-m-center` | `<th>`, `<td>` | Modifies cell to center its contents. |

## Responsive table behavior

### Responsive layout modifier usage

These classes can be used to ensure that the table changes between the tabular and grid-based layout at an appropriate screen width.

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-grid-md`, `.pf-m-grid-lg`, `.pf-m-grid-xl`, `.pf-m-grid-2xl` | `.pf-v6-c-table` | Changes tabular layout to responsive, grid based layout at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-grid` | `.pf-v6-c-table` | Changes tabular layout to responsive, grid based layout. This approach requires JavaScript to set this class at some prescribed viewport width value. |

## Sortable

### Sortable example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg"
  role="grid"
  aria-label="This is a sortable table example"
  id="table-sortable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort pf-m-help"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <div class="pf-v6-c-table__column-help">
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Branches</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
          <span class="pf-v6-c-table__column-help-action">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              aria-label="aria-label&#x3D;&quot;More info&quot;"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  class="pf-v6-svg"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                >
                  <path
                    d="M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0"
                  />
                </svg>
              </span>
            </button>
          </span>
        </div>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th pf-m-help" role="columnheader" scope="col">
        <div class="pf-v6-c-table__column-help">
          <span class="pf-v6-c-table__text">Last commit</span>
          <span class="pf-v6-c-table__column-help-action">
            <button
              class="pf-v6-c-button pf-m-no-padding pf-m-plain"
              type="button"
              aria-label="aria-label&#x3D;&quot;More info&quot;"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  class="pf-v6-svg"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                >
                  <path
                    d="M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0"
                  />
                </svg>
              </span>
            </button>
          </span>
        </div>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 1</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 3</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 4</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Sortable accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-sort=[ascending or descending]` | `.pf-v6-c-table__sort` | Indicates if columns in a table are sorted in ascending or descending order. For each table, authors **SHOULD** apply aria-sort to only one header at a time. **Required** |

### Sortable usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__sort` | `<th>` | Initiates a table header sort cell. **Required for sortable table columns** |
| `.pf-v6-c-table__button` | `<button>`, `<a>` | Initiates a table header sort cell button. If sorting a table row generates a unique URL that can be used as the `href` value for this element, use an `<a>`. Otherwise, use a `<button>`. **Required for sortable table columns** |
| `.pf-v6-c-table__button-content` | `<div>` | Initiates a table header sort cell button content container. **Required for sortable table columns** Note: this is only necessary because `<button>` does not support`display: grid`. |
| `.pf-v6-c-table__sort-indicator` | `.pf-v6-c-table__sort > .pf-v6-c-table__button > span` | Initiates a sort indicator. **Required for sortable table columns** |
| `.pf-m-selected` | `.pf-v6-c-table__sort` | Modifies for sort selected state. **Required for sortable table columns** |
| `.pf-m-help` | `.pf-v6-c-table__sort`, `.pf-v6-c-table th` | Modifies a sortable table header to accommodate a help tooltip. **Required for sortable table columns with help tooltips** |
| `.fa-arrows-alt-v` | `.pf-v6-c-table__sort > .pf-v6-c-table__button > .pf-v6-c-table__sort-indicator > .fas` | Initiates icon within unsorted, sortable table header. **Required for sortable table columns** |
| `.fa-long-arrow-alt-up` | `.pf-v6-c-table__sort > .pf-v6-c-table__button > .pf-v6-c-table__sort-indicator > .fas` | Initiates icon within ascending sorted and selected, sortable table header. **Required for sortable table columns** |
| `.fa-long-arrow-alt-down` | `.pf-v6-c-table__sort > .pf-v6-c-table__button > .pf-v6-c-table__sort-indicator > .fas` | Initiates icon within descending sorted and selected, sortable table header. **Required for sortable table columns** |

### Overflow menu usage, desktop

```html
<table
  class="pf-v6-c-table"
  aria-label="This is a simple table example"
  id="table-with-expanded-overflow-menu"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" scope="col">Branches</th>

      <th class="pf-v6-c-table__th" scope="col">Pull requests</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 1</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <div
          class="pf-v6-c-overflow-menu"
          id="table-with-expanded-overflow-menu-overflow-menu-1"
        >
          <div class="pf-v6-c-overflow-menu__content">
            <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
              <div class="pf-v6-c-overflow-menu__item">
                <button class="pf-v6-c-button pf-m-primary" type="button">
                  <span class="pf-v6-c-button__text">Start</span>
                </button>
              </div>
              <div class="pf-v6-c-overflow-menu__item">
                <button class="pf-v6-c-button pf-m-secondary" type="button">
                  <span class="pf-v6-c-button__text">Stop</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <div
          class="pf-v6-c-overflow-menu"
          id="table-with-expanded-overflow-menu-overflow-menu-2"
        >
          <div class="pf-v6-c-overflow-menu__content">
            <div class="pf-v6-c-overflow-menu__group pf-m-button-group">
              <div class="pf-v6-c-overflow-menu__item">
                <button class="pf-v6-c-button pf-m-primary" type="button">
                  <span class="pf-v6-c-button__text">Start</span>
                </button>
              </div>
              <div class="pf-v6-c-overflow-menu__item">
                <button class="pf-v6-c-button pf-m-secondary" type="button">
                  <span class="pf-v6-c-button__text">Stop</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

```

### Overflow menu usage, overflow menu collapsed

```html
<table
  class="pf-v6-c-table"
  role="grid"
  aria-label="This is a simple table example"
  id="table-with-overflow-menu-collapsed"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 1</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <div
          class="pf-v6-c-overflow-menu"
          id="table-with-overflow-menu-collapsed-overflow-menu-1"
        >
          <div class="pf-v6-c-overflow-menu__control">
            <button
              class="pf-v6-c-menu-toggle pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Menu toggle"
            >
              <span class="pf-v6-c-menu-toggle__icon">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <div
          class="pf-v6-c-overflow-menu"
          id="table-with-overflow-menu-collapsed-overflow-menu-2"
        >
          <div class="pf-v6-c-overflow-menu__control">
            <button
              class="pf-v6-c-menu-toggle pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Menu toggle"
            >
              <span class="pf-v6-c-menu-toggle__icon">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

```

### Overflow menu usage, mobile

```html
<table
  class="pf-v6-c-table pf-m-grid"
  role="grid"
  aria-label="This is a simple table example"
  id="table-with-overflow-menu-collapsed-mobile"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 1</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <div
          class="pf-v6-c-overflow-menu"
          id="table-with-overflow-menu-collapsed-mobile-overflow-menu-1"
        >
          <div class="pf-v6-c-overflow-menu__control">
            <button
              class="pf-v6-c-menu-toggle pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Menu toggle"
            >
              <span class="pf-v6-c-menu-toggle__icon">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <div
          class="pf-v6-c-overflow-menu"
          id="table-with-overflow-menu-collapsed-mobile-overflow-menu-2"
        >
          <div class="pf-v6-c-overflow-menu__control">
            <button
              class="pf-v6-c-menu-toggle pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Menu toggle"
            >
              <span class="pf-v6-c-menu-toggle__icon">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

```

## With checkboxes, radio select, and actions

### Checkboxes and actions example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg"
  role="grid"
  aria-label="This is a table with checkboxes"
  id="table-checkboxes-and-actions"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-checkboxes-and-actions-checkrow-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-checkboxes-and-actions-checkrow-check-input"
            name="table-checkboxes-and-actions-checkrow-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-checkboxes-and-actions-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-checkboxes-and-actions-checkrow-1-check-input"
            name="table-checkboxes-and-actions-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-checkboxes-and-actions-node1">Node 1</div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-checkboxes-and-actions-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-checkboxes-and-actions-checkrow-2-check-input"
            name="table-checkboxes-and-actions-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-checkboxes-and-actions-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-checkboxes-and-actions-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-checkboxes-and-actions-checkrow-3-check-input"
            name="table-checkboxes-and-actions-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-checkboxes-and-actions-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-checkboxes-and-actions-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-checkboxes-and-actions-checkrow-4-check-input"
            name="table-checkboxes-and-actions-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-checkboxes-and-actions-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Single select radio example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg"
  role="grid"
  aria-label="This is single select table with radio inputs"
  id="table-single-select-radio"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Row select</span>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check">
        <label
          class="pf-v6-c-radio pf-m-standalone"
          id="table-single-select-radio-node1-radio"
          for="table-single-select-radio-node1-radio-input"
        >
          <input
            class="pf-v6-c-radio__input"
            type="radio"
            id="table-single-select-radio-node1-radio-input"
            name="table-single-select-radio-node1-radio-input"
            aria-label="Standalone radio"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-single-select-radio-node1">Node 1</div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check">
        <label
          class="pf-v6-c-radio pf-m-standalone"
          id="table-single-select-radio-node2-radio"
          for="table-single-select-radio-node2-radio-input"
        >
          <input
            class="pf-v6-c-radio__input"
            type="radio"
            id="table-single-select-radio-node2-radio-input"
            name="table-single-select-radio-node2-radio-input"
            aria-label="Standalone radio"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-single-select-radio-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check">
        <label
          class="pf-v6-c-radio pf-m-standalone"
          id="table-single-select-radio-node3-radio"
          for="table-single-select-radio-node3-radio-input"
        >
          <input
            class="pf-v6-c-radio__input"
            type="radio"
            id="table-single-select-radio-node3-radio-input"
            name="table-single-select-radio-node3-radio-input"
            aria-label="Standalone radio"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-single-select-radio-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check">
        <label
          class="pf-v6-c-radio pf-m-standalone"
          id="table-single-select-radio-node4-radio"
          for="table-single-select-radio-node4-radio-input"
        >
          <input
            class="pf-v6-c-radio__input"
            type="radio"
            id="table-single-select-radio-node4-radio-input"
            name="table-single-select-radio-node4-radio-input"
            aria-label="Standalone radio"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-single-select-radio-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Table with buttons and actions

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a table with buttons and actions"
  id="table-buttons-and-actions"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Deployment</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Status</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Builds</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Start New Build</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__action"
        role="columnheader"
        scope="col"
      >
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Deployment"
      >Deployment 1</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Status">Success</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Builds">6</td>
      <td
        class="pf-v6-c-table__td pf-m-action"
        role="cell"
        data-label="Start Build"
      >
        <span>
          <button class="pf-v6-c-button pf-m-tertiary" type="button">
            <span class="pf-v6-c-button__text">Start</span>
          </button>
        </span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Deployment"
      >Deployment 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Status">Failed</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Builds">2</td>
      <td
        class="pf-v6-c-table__td pf-m-action"
        role="cell"
        data-label="Start Build"
      >
        <span>
          <button class="pf-v6-c-button pf-m-tertiary" type="button">
            <span class="pf-v6-c-button__text">Start</span>
          </button>
        </span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Deployment"
      >Deployment 3</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Status">Success</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Builds">7</td>
      <td
        class="pf-v6-c-table__td pf-m-action"
        role="cell"
        data-label="Start Build"
      >
        <span>
          <button class="pf-v6-c-button pf-m-tertiary" type="button">
            <span class="pf-v6-c-button__text">Start</span>
          </button>
        </span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

When including interactive elements in a table, the primary, descriptive cell in the corresponding row is a `<th>`, rather than a `<td>`. In this example, 'Node 1' and 'Node 2 siemur/test-space' are `<th>`s.

When header cells are empty or they contain interactive elements, `<th>` should be replaced with `<td>`.

### Checkboxes, radio select, and actions accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-labelledby="[row_header_id]"` or `aria-label="[descriptive text]` | `.pf-v6-c-table__check input` | Provides an accessible name for the checkbox or radio input. **Required** |
| `id` | row header `<th> > *` | Provides an accessible description for the checkbox or radio. **Required if using `aria-labelledby` for `.pf-v6-c-table__check input`** |

### Checkboxes, radio select, and actions usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__check` | `<th>`, `<td>` | Initiates a checkbox or radio input table cell. |
| `.pf-v6-c-table__action` | `<th>`, `<td>` | Initiates an action table cell. |
| `.pf-v6-c-table__inline-edit-action` | `<th>`, `<td>` | Initiates an inline edit action table cell. |
| `.pf-m-action` | `<td>` | Initiates an table cell with button. |

## Expandable

Note: Table column widths will respond automatically when toggling expanded rows. To retain column widths between expanded and collapsed states, column header and/or data cell widths must be set.

### Expandable example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg pf-m-expandable"
  role="grid"
  aria-label="Expandable table example"
  id="table-expandable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__toggle"
        aria-label="Row expansion"
        role="columnheader"
        scope="col"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-expandable-expandable-toggle-thead"
          type="button"
          aria-controls="table-expandable-content-1 table-expandable-content-2 table-expandable-content-3 table-expandable-content-4"
          aria-labelledby="table-expandable-node-thead"
          aria-label="Toggle all rows"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-checkrow-thead-check-input"
            name="table-expandable-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-expandable-expandable-toggle-1"
          type="button"
          aria-expanded="true"
          aria-controls="table-expandable-content-1"
          aria-labelledby="table-expandable-node-1"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-checkrow-1-check-input"
            name="table-expandable-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-expandable-node1">Node 1</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 1</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="4"
        id="table-expandable-content-1"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-expandable-expandable-toggle-2"
          type="button"
          aria-controls="table-expandable-content-2"
          aria-labelledby="table-expandable-node-2"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-checkrow-2-check-input"
            name="table-expandable-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-expandable-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 2</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-expandable-content-2"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-expandable-expandable-toggle-3"
          type="button"
          aria-expanded="true"
          aria-controls="table-expandable-content-3"
          aria-labelledby="table-expandable-node-3"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-checkrow-3-check-input"
            name="table-expandable-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-expandable-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 3</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-expandable-content-3"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-expandable-expandable-toggle-4"
          type="button"
          aria-expanded="true"
          aria-controls="table-expandable-content-4"
          aria-labelledby="table-expandable-node-4"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-checkrow-4-check-input"
            name="table-expandable-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-expandable-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 4</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-m-no-padding"
        role="cell"
        colspan="7"
        id="table-expandable-content-4"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Expandable row content has no padding.</div>
      </td>
    </tr>
  </tbody>
</table>

```

### Animated expandable

```html isBeta
<table
  class="pf-v6-c-table pf-m-grid-lg pf-m-animate-expand pf-m-expandable"
  role="grid"
  aria-label="Animated expandable table example"
  id="table-animated-expandable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__toggle"
        aria-label="Row expansion"
        role="columnheader"
        scope="col"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-animated-expandable-expandable-toggle-thead"
          type="button"
          aria-controls="table-animated-expandable-content-1 table-animated-expandable-content-2 table-animated-expandable-content-3 table-animated-expandable-content-4"
          aria-labelledby="table-animated-expandable-node-thead"
          aria-label="Toggle all rows"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-animated-expandable-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-animated-expandable-checkrow-thead-check-input"
            name="table-animated-expandable-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-animated-expandable-expandable-toggle-1"
          type="button"
          aria-expanded="true"
          aria-controls="table-animated-expandable-content-1"
          aria-labelledby="table-animated-expandable-node-1"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-animated-expandable-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-animated-expandable-checkrow-1-check-input"
            name="table-animated-expandable-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-animated-expandable-node1">Node 1</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 1</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="4"
        id="table-animated-expandable-content-1"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-animated-expandable-expandable-toggle-2"
          type="button"
          aria-controls="table-animated-expandable-content-2"
          aria-labelledby="table-animated-expandable-node-2"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-animated-expandable-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-animated-expandable-checkrow-2-check-input"
            name="table-animated-expandable-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-animated-expandable-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 2</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-animated-expandable-content-2"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-animated-expandable-expandable-toggle-3"
          type="button"
          aria-expanded="true"
          aria-controls="table-animated-expandable-content-3"
          aria-labelledby="table-animated-expandable-node-3"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-animated-expandable-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-animated-expandable-checkrow-3-check-input"
            name="table-animated-expandable-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-animated-expandable-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 3</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-animated-expandable-content-3"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-animated-expandable-expandable-toggle-4"
          type="button"
          aria-expanded="true"
          aria-controls="table-animated-expandable-content-4"
          aria-labelledby="table-animated-expandable-node-4"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-animated-expandable-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-animated-expandable-checkrow-4-check-input"
            name="table-animated-expandable-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-animated-expandable-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 4</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-m-no-padding"
        role="cell"
        colspan="7"
        id="table-animated-expandable-content-4"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Expandable row content has no padding.</div>
      </td>
    </tr>
  </tbody>
</table>

```

### Expandable with set width columns example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg pf-m-expandable"
  role="grid"
  aria-label="Expandable table, set column widths example"
  id="expandable-set-width-columns-example"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__toggle"
        aria-label="Row expansion"
        role="columnheader"
        scope="col"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="expandable-set-width-columns-example-expandable-toggle-thead"
          type="button"
          aria-expanded="true"
          aria-controls="expandable-set-width-columns-example-content-1 expandable-set-width-columns-example-content-2 expandable-set-width-columns-example-content-3 expandable-set-width-columns-example-content-4"
          aria-labelledby="expandable-set-width-columns-example-node-thead"
          aria-label="Toggle all rows"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="expandable-set-width-columns-example-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="expandable-set-width-columns-example-checkrow-thead-check-input"
            name="expandable-set-width-columns-example-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-20 pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-20 pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-10"
        role="columnheader"
        scope="col"
      >Links</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="expandable-set-width-columns-example-expandable-toggle-1"
          type="button"
          aria-expanded="true"
          aria-controls="expandable-set-width-columns-example-content-1"
          aria-labelledby="expandable-set-width-columns-example-node-1"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="expandable-set-width-columns-example-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="expandable-set-width-columns-example-checkrow-1-check-input"
            name="expandable-set-width-columns-example-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="expandable-set-width-columns-example-node1">Node 1</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 1</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
      id="expandable-set-width-columns-example-content-1"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td" role="cell" colspan="4">
        <div class="pf-v6-c-table__expandable-row-content">
          <b>Span four</b>&nbsp;lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="expandable-set-width-columns-example-expandable-toggle-2"
          type="button"
          aria-expanded="true"
          aria-controls="expandable-set-width-columns-example-content-2"
          aria-labelledby="expandable-set-width-columns-example-node-2"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="expandable-set-width-columns-example-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="expandable-set-width-columns-example-checkrow-2-check-input"
            name="expandable-set-width-columns-example-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="expandable-set-width-columns-example-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 2</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
      id="expandable-set-width-columns-example-content-2"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td" role="cell" colspan="2">
        <div class="pf-v6-c-table__expandable-row-content">Span three and four</div>
      </td>
      <td class="pf-v6-c-table__td" role="cell" colspan="2">
        <div class="pf-v6-c-table__expandable-row-content">Span five and six</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="expandable-set-width-columns-example-expandable-toggle-3"
          type="button"
          aria-expanded="true"
          aria-controls="expandable-set-width-columns-example-content-3"
          aria-labelledby="expandable-set-width-columns-example-node-3"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="expandable-set-width-columns-example-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="expandable-set-width-columns-example-checkrow-3-check-input"
            name="expandable-set-width-columns-example-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="expandable-set-width-columns-example-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 3</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
      id="expandable-set-width-columns-example-content-3"
    >
      <td class="pf-v6-c-table__td" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content">
          <b>Span all</b>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="expandable-set-width-columns-example-expandable-toggle-4"
          type="button"
          aria-expanded="true"
          aria-controls="expandable-set-width-columns-example-content-4"
          aria-labelledby="expandable-set-width-columns-example-node-4"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="expandable-set-width-columns-example-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="expandable-set-width-columns-example-checkrow-4-check-input"
            name="expandable-set-width-columns-example-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="expandable-set-width-columns-example-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 4</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
      id="expandable-set-width-columns-example-content-4"
    >
      <td class="pf-v6-c-table__td" role="cell" colspan="3">
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Span one, two, and three</div>
      </td>
      <td class="pf-v6-c-table__td" role="cell" colspan="2">
        <div class="pf-v6-c-table__expandable-row-content">Span four and five</div>
      </td>
      <td class="pf-v6-c-table__td" role="cell" colspan="2">
        <div class="pf-v6-c-table__expandable-row-content">Span six and seven</div>
      </td>
    </tr>
  </tbody>
</table>

```

### Expandable with nested table example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg pf-m-expandable"
  role="grid"
  aria-label="Expandable with nested table example"
  id="table-expandable-nested-table"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__toggle"
        aria-label="Row expansion"
        role="columnheader"
        scope="col"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-expandable-nested-table-expandable-toggle-thead"
          type="button"
          aria-controls="table-expandable-nested-table-content-1 table-expandable-nested-table-content-2 table-expandable-nested-table-content-3 table-expandable-nested-table-content-4"
          aria-labelledby="table-expandable-nested-table-node-thead"
          aria-label="Toggle all rows"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-nested-table-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-nested-table-checkrow-thead-check-input"
            name="table-expandable-nested-table-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-expandable-nested-table-expandable-toggle-1"
          type="button"
          aria-expanded="true"
          aria-controls="table-expandable-nested-table-content-1"
          aria-labelledby="table-expandable-nested-table-node-1"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-nested-table-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-nested-table-checkrow-1-check-input"
            name="table-expandable-nested-table-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-expandable-nested-table-node1">Node 1</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 1</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-expandable-nested-table-content-1"
      >
        <div class="pf-v6-c-table__expandable-row-content">
          <table
            class="pf-v6-c-table pf-m-grid-md pf-m-compact"
            role="grid"
            aria-label="This is a simple table"
            id="table-expandable-nested-table-table-basic"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Repositories</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Branches</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Pull requests</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Workspaces</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Last commit</th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Repository name"
                >Repository 1</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Branches"
                >10</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Pull requests"
                >25</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Workspaces"
                >5</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Last commit"
                >2 days ago</td>
              </tr>

              <tr class="pf-v6-c-table__tr" role="row">
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Repository name"
                >Repository 2</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Branches"
                >10</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Pull requests"
                >25</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Workspaces"
                >5</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Last commit"
                >2 days ago</td>
              </tr>

              <tr class="pf-v6-c-table__tr" role="row">
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Repository name"
                >Repository 3</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Branches"
                >10</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Pull requests"
                >25</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Workspaces"
                >5</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Last commit"
                >2 days ago</td>
              </tr>

              <tr class="pf-v6-c-table__tr" role="row">
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Repository name"
                >Repository 4</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Branches"
                >10</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Pull requests"
                >25</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Workspaces"
                >5</td>
                <td
                  class="pf-v6-c-table__td pf-m-compact"
                  role="cell"
                  data-label="Last commit"
                >2 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-expandable-nested-table-expandable-toggle-2"
          type="button"
          aria-controls="table-expandable-nested-table-content-2"
          aria-labelledby="table-expandable-nested-table-node-2"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-nested-table-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-nested-table-checkrow-2-check-input"
            name="table-expandable-nested-table-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-expandable-nested-table-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 2</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-expandable-nested-table-content-2"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-expandable-nested-table-expandable-toggle-3"
          type="button"
          aria-expanded="true"
          aria-controls="table-expandable-nested-table-content-3"
          aria-labelledby="table-expandable-nested-table-node-3"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-nested-table-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-nested-table-checkrow-3-check-input"
            name="table-expandable-nested-table-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-expandable-nested-table-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 3</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-expandable-nested-table-content-3"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-expandable-nested-table-expandable-toggle-4"
          type="button"
          aria-expanded="true"
          aria-controls="table-expandable-nested-table-content-4"
          aria-labelledby="table-expandable-nested-table-node-4"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-nested-table-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-nested-table-checkrow-4-check-input"
            name="table-expandable-nested-table-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-expandable-nested-table-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 4</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-m-no-padding"
        role="cell"
        colspan="7"
        id="table-expandable-nested-table-content-4"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Expandable row content has no padding.</div>
      </td>
    </tr>
  </tbody>
</table>

```

Note: To apply padding to `.pf-v6-c-table__expandable-row`, wrap the content in `.pf-v6-c-table__expandable-row-content`. For no padding add `.pf-m-no-padding` to `.pf-v6-c-table__expandable-row` > `<td>`

### Expandable accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v6-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Indicates that the row is visible. **Required**|
| `aria-label="[descriptive text]"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="[title_cell_id] [button_id]"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Provides an accessible description for toggle button. **Required** |
| `id="[button_id]"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element the button controls]"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |

### Expandable usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__toggle-icon` | `<span>` | Initiates the table toggle icon wrapper. |
| `.pf-v6-c-table__expandable-row` | `<tr>` | Initiates an expandable row. |
| `.pf-v6-c-table__expandable-row-content` | `.pf-v6-c-table__expandable-row` > `<td>` > `<div>` | Initiates an expandable row content wrapper. |
| `.pf-m-animate-expand` | `.pf-v6-c-table` | Modifies the table to animate expansion. |
| `.pf-m-expanded` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button`, `.pf-v6-c-table__expandable-row` | Modifies for expanded state. |
| `.pf-m-no-padding` | `.pf-v6-c-table__expandable-row` > `<td>` | Modifies the expandable row to have no padding. |

## Compound expansion

### Compound expansion example

```html
<table
  class="pf-v6-c-table pf-m-grid-md pf-m-expandable"
  role="grid"
  aria-label="Compound expandable table example"
  id="table-compound-expansion"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__control-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle pf-m-expanded"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;10
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            234
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>20 minutes</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-1-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-2-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-3-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-v6-c-table__control-row" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
            2
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            82
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            1
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>1 day ago</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-4-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-5-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-6-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-v6-c-table__control-row" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            1
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>2 days ago</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-7-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-8-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-compound-expansion-nested-table-9-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>
</table>

```

### Animated compound expansion example

```html isBeta
<table
  class="pf-v6-c-table pf-m-grid-md pf-m-animate-expand pf-m-expandable"
  role="grid"
  aria-label="Animated compound expandable table example"
  id="table-animate-compound-expansion"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__control-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle pf-m-expanded"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;10
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            234
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>20 minutes</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-1-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-2-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-3-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-v6-c-table__control-row" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
            2
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            82
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            1
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>1 day ago</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-4-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-5-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-6-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-v6-c-table__control-row" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            1
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>2 days ago</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-7-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-8-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="table-animate-compound-expansion-nested-table-9-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>
</table>

```

### Compound expansion accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v6-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"` | `.pf-v6-c-table__compound-expansion-toggle` > `.pf-v6-c-button` | Indicates that the row is visible. **Required**|
| `aria-controls="[id of element the button controls]"` | `.pf-v6-c-table__compound-expansion-toggle` > `.pf-v6-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |

### Compound expansion usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__control-row` | `.pf-v6-c-table__expandable > <tr>` | Modifies a compound expandable table control row. |
| `.pf-m-expanded` | `<tbody>`, `.pf-v6-c-table__compound-expansion-toggle` > `.pf-v6-c-button` | Modifies a tbody with a row and an expandable row. |
| `.pf-v6-c-table__compound-expansion-toggle` | `<td>` | Modifies a `<td>` on active/focus. |
| `.pf-m-animate-expand` | `.pf-v6-c-table` | Modifies the table to animate expansion. |
| `.pf-m-expanded` | `.pf-v6-c-table__tbody`, `.pf-v6-c-table__control-row`, `.pf-v6-c-table__compound-expansion-toggle` | Modifies a `<tbody>`, control row, and item in a control row for the expanded state. |
| `.pf-m-no-background` | `.pf-v6-c-table__expandable-row-content` | Modifies the expandable row content to have a transparent background. For in compound expandable when the parent expandable row has no padding with `.pf-m-no-padding`. |
| `.pf-m-no-animate-expand` | `.pf-v6-c-table__control-row.pf-m-expanded` | Disables animation on a compound expandable row. **Note:** Used to disable the animation when clicking between compound expandable items. |

## Compact variant

### Compact example

```html
<table
  class="pf-v6-c-table pf-m-grid-md pf-m-compact"
  role="grid"
  aria-label="This is a compact table example"
  id="table-compact"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-checkrow-thead-check-input"
            name="table-compact-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Contributor</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Position</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Location</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last seen</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Numbers</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__icon"
        role="columnheader"
        scope="col"
      >Icons</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-checkrow-1-check-input"
            name="table-compact-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-node1">Sam Jones</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Position"
      >CSS guru</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Location"
      >Not too sure</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Numbers"
      >0556</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon pf-m-compact"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-checkrow-2-check-input"
            name="table-compact-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-node2">Amy Wilson</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Position"
      >Visual design</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Location"
      >Raleigh</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Numbers"
      >9492</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon pf-m-compact"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-checkrow-3-check-input"
            name="table-compact-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-node3">Steve Wilson</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Position"
      >Visual design lead</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Location"
      >Westford</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Numbers"
      >9929</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon pf-m-compact"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-checkrow-4-check-input"
            name="table-compact-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-node4">Emma Jackson</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Position"
      >Interaction design</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Location"
      >Westford</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Workspaces"
      >May 9, 2018</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Last commit"
      >2217</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon pf-m-compact"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Compact expandable example

```html
<table
  class="pf-v6-c-table pf-m-grid-md pf-m-compact pf-m-expandable"
  role="grid"
  aria-label="Compact expandable table example"
  id="table-compact-expandable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__toggle"
        aria-label="Row expansion"
        role="columnheader"
        scope="col"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-plain"
          id="table-compact-expandable-expandable-toggle-thead"
          type="button"
          aria-controls="table-compact-expandable-content-1 table-compact-expandable-content-2 table-compact-expandable-content-3 table-compact-expandable-content-4"
          aria-labelledby="table-compact-expandable-node-thead"
          aria-label="Toggle all rows"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-thead-check-input"
            name="table-compact-expandable-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30"
        role="columnheader"
        scope="col"
      >Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-expanded pf-m-plain"
          id="table-compact-expandable-expandable-toggle-1"
          type="button"
          aria-expanded="true"
          aria-controls="table-compact-expandable-content-1"
          aria-labelledby="table-compact-expandable-node-1"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-1-check-input"
            name="table-compact-expandable-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node1">Node 1</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        colspan="4"
        id="table-compact-expandable-content-1"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-plain"
          id="table-compact-expandable-expandable-toggle-2"
          type="button"
          aria-controls="table-compact-expandable-content-2"
          aria-labelledby="table-compact-expandable-node-2"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-2-check-input"
            name="table-compact-expandable-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node2">Node 2</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td pf-m-compact pf-m-no-padding"
        role="cell"
        colspan="7"
        id="table-compact-expandable-content-2"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-expanded pf-m-plain"
          id="table-compact-expandable-expandable-toggle-3"
          type="button"
          aria-expanded="true"
          aria-controls="table-compact-expandable-content-3"
          aria-labelledby="table-compact-expandable-node-3"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-3-check-input"
            name="table-compact-expandable-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node3">Node 3</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        colspan="7"
        id="table-compact-expandable-content-3"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-expanded pf-m-plain"
          id="table-compact-expandable-expandable-toggle-4"
          type="button"
          aria-expanded="true"
          aria-controls="table-compact-expandable-content-4"
          aria-labelledby="table-compact-expandable-node-4"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-4-check-input"
            name="table-compact-expandable-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node4">Node 4</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-m-compact pf-m-no-padding"
        role="cell"
        colspan="7"
        id="table-compact-expandable-content-4"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >This content has no padding.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-plain"
          id="table-compact-expandable-expandable-toggle-5"
          type="button"
          aria-controls="table-compact-expandable-content-5"
          aria-labelledby="table-compact-expandable-node-5"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-5-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-5-check-input"
            name="table-compact-expandable-checkrow-5-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node5">Node 5</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        colspan="7"
        id="table-compact-expandable-content-5"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-expanded pf-m-plain"
          id="table-compact-expandable-expandable-toggle-6"
          type="button"
          aria-expanded="true"
          aria-controls="table-compact-expandable-content-6"
          aria-labelledby="table-compact-expandable-node-6"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-6-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-6-check-input"
            name="table-compact-expandable-checkrow-6-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node6">Node 6</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
      id="table-compact-expandable-content-6"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-m-compact" role="cell" colspan="2">
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </td>

      <td class="pf-v6-c-table__td pf-m-compact" role="cell" colspan="2">
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-plain"
          id="table-compact-expandable-expandable-toggle-7"
          type="button"
          aria-controls="table-compact-expandable-content-7"
          aria-labelledby="table-compact-expandable-node-7"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-7-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-7-check-input"
            name="table-compact-expandable-checkrow-7-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node7">Node 7</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        colspan="7"
        id="table-compact-expandable-content-7"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-expanded pf-m-plain"
          id="table-compact-expandable-expandable-toggle-8"
          type="button"
          aria-expanded="true"
          aria-controls="table-compact-expandable-content-8"
          aria-labelledby="table-compact-expandable-node-8"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-8-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-8-check-input"
            name="table-compact-expandable-checkrow-8-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node8">Node 8</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
      id="table-compact-expandable-content-8"
    >
      <td class="pf-v6-c-table__td pf-m-compact" role="cell" colspan="4">
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </td>

      <td class="pf-v6-c-table__td pf-m-compact" role="cell" colspan="3">
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-small pf-m-plain"
          id="table-compact-expandable-expandable-toggle-9"
          type="button"
          aria-controls="table-compact-expandable-content-9"
          aria-labelledby="table-compact-expandable-node-9"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-compact-expandable-checkrow-9-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-compact-expandable-checkrow-9-check-input"
            name="table-compact-expandable-checkrow-9-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-compact-expandable-node9">Node 9</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Branches"
      >10</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        colspan="7"
        id="table-compact-expandable-content-9"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>
</table>

```

### Compact Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-compact` | `.pf-v6-c-table` | Modifies for a compact table. |

## Clickable

### Clickable example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg"
  role="grid"
  aria-label="Clickable and selectable table example"
  id="table-clickable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-clickable-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-clickable-checkrow-thead-check-input"
            name="table-clickable-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">State</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr
      class="pf-v6-c-table__tr pf-m-clickable"
      role="row"
      tabindex&#x26;#x3D;&#x26;quot;0&#x26;quot;
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-clickable-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-clickable-checkrow-1-check-input"
            name="table-clickable-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Repository name"
      >
        <div id="table-clickable-node1">Clickable</div>
      </th>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-clickable pf-m-selected"
      role="row"
      tabindex&#x26;#x3D;&#x26;quot;0&#x26;quot;
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-clickable-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-clickable-checkrow-2-check-input"
            name="table-clickable-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Repository name"
      >
        <div id="table-clickable-node2">
          <b>Clicked</b>
        </div>
      </th>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-clickable"
      role="row"
      tabindex&#x26;#x3D;&#x26;quot;0&#x26;quot;
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-clickable-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-clickable-checkrow-3-check-input"
            name="table-clickable-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Repository name"
      >
        <div id="table-clickable-node3">Clickable</div>
      </th>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Clickable and expandable example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg pf-m-expandable"
  role="grid"
  aria-label="Expandable and clickable table example"
  id="table-expandable-clickable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-clickable-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-clickable-checkrow-thead-check-input"
            name="table-expandable-clickable-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody
    class="pf-v6-c-table__tbody pf-m-clickable"
    role="rowgroup"
    tabindex="0"
  >
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-expandable-clickable-expandable-toggle-1"
          type="button"
          aria-controls="table-expandable-clickable-content-1"
          aria-labelledby="table-expandable-clickable-node-1"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-clickable-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-clickable-checkrow-1-check-input"
            name="table-expandable-clickable-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Repository name"
      >
        <div>
          <div id="table-expandable-clickable-node1">Clickable and not expanded</div>
        </div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 1</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="4"
        id="table-expandable-clickable-content-1"
      >
        <div class="pf-v6-c-table__expandable-row-content">Expandable content</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody
    class="pf-v6-c-table__tbody pf-m-clickable pf-m-selected"
    role="rowgroup"
    tabindex="0"
  >
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-expandable-clickable-expandable-toggle-2"
          type="button"
          aria-expanded="true"
          aria-controls="table-expandable-clickable-content-2"
          aria-labelledby="table-expandable-clickable-node-2"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-clickable-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-clickable-checkrow-2-check-input"
            name="table-expandable-clickable-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Repository name"
      >
        <div>
          <div id="table-expandable-clickable-node2">
            <b>Clicked and expanded</b>
          </div>
        </div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 2</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="4"
        id="table-expandable-clickable-content-2"
      >
        <div class="pf-v6-c-table__expandable-row-content">Expandable content</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody
    class="pf-v6-c-table__tbody pf-m-clickable"
    role="rowgroup"
    tabindex="0"
  >
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-expandable-clickable-expandable-toggle-3"
          type="button"
          aria-controls="table-expandable-clickable-content-3"
          aria-labelledby="table-expandable-clickable-node-3"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-clickable-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-clickable-checkrow-3-check-input"
            name="table-expandable-clickable-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Repository name"
      >
        <div>
          <div id="table-expandable-clickable-node3">Clickable and not expanded</div>
        </div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 3</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="4"
        id="table-expandable-clickable-content-3"
      >
        <div class="pf-v6-c-table__expandable-row-content">Expandable content</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody
    class="pf-v6-c-table__tbody pf-m-clickable"
    role="rowgroup"
    tabindex="0"
  >
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-expandable-clickable-expandable-toggle-4"
          type="button"
          aria-expanded="true"
          aria-controls="table-expandable-clickable-content-4"
          aria-labelledby="table-expandable-clickable-node-4"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-expandable-clickable-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-expandable-clickable-checkrow-4-check-input"
            name="table-expandable-clickable-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Repository name"
      >
        <div>
          <div id="table-expandable-clickable-node4">Clickable and expanded</div>
        </div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 4</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="4"
        id="table-expandable-clickable-content-4"
      >
        <div class="pf-v6-c-table__expandable-row-content">Expandable content</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>
</table>

```

### Clickable accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `tabindex="0"` | `.pf-v6-c-table tbody.pf-m-clickable` | Inserts the clickable table element into the tab order of the page so that it is focusable. **Required** |

### Clickable and selected usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-clickable` | `.pf-v6-c-table tbody`, `.pf-v6-c-table tr` | Modifies a tbody or tr table element to be clickable. |
| `.pf-m-selected` | `.pf-v6-c-table tbody`, `.pf-v6-c-table tr` | Modifies a selectable tbody or tr table element to be selected. |

## Tree table

### Tree table basic

```html
<table
  class="pf-v6-c-table pf-m-tree-view-grid-lg pf-m-tree-view"
  aria-label="This is a simple tree table example"
  role="treegrid"
  id="tree-table-basic-example"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"
        scope="col"
      >Name</th>

      <th class="pf-v6-c-table__th" scope="col">Count</th>

      <th class="pf-v6-c-table__th" scope="col">Size</th>

      <th class="pf-v6-c-table__th" scope="col">Data Stores</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody">
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="1"
      aria-setsize="1"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-basic-example-expandable-toggle-1"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-basic-example-node-1 tree-table-basic-example-expandable-toggle-1"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-1
            >Level 1 all folders</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-1--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-1"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-tree-view-details-expanded"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="false"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              id="tree-table-basic-example-expandable-toggle-2"
              type="button"
              aria-labelledby="tree-table-basic-example-node-2 tree-table-basic-example-expandable-toggle-2"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-2
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              type="button"
              aria-expanded="true"
              aria-label="tree-table-basic-example-2--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-2"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-3
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-3--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-3"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-4
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-4--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-4"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-5
            >Level 2 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-5--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-5"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="3"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-6
            >Level 2 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-6--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-6"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="4"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-basic-example-expandable-toggle-7"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-basic-example-node-7 tree-table-basic-example-expandable-toggle-7"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-7
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-7--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-7"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="3"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-8
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-8--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-8"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-basic-example-expandable-toggle-9"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-basic-example-node-9 tree-table-basic-example-expandable-toggle-9"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-9
            >Level 3 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-9--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-9"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-tree-view-details-expanded"
      aria-level="4"
      aria-setsize="1"
      aria-posinset="1"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-10
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              type="button"
              aria-expanded="true"
              aria-label="tree-table-basic-example-10--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-10"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-11
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-11--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-11"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="5"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-basic-example-expandable-toggle-12"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-basic-example-node-12 tree-table-basic-example-expandable-toggle-12"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-12
            >Level 3 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-12--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-12"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="4"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-13
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-13--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-13"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="4"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-14
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-14--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-14"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="6"
      tabindex="0"
      aria-expanded="false"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              id="tree-table-basic-example-expandable-toggle-15"
              type="button"
              aria-labelledby="tree-table-basic-example-node-15 tree-table-basic-example-expandable-toggle-15"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-15
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-15--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-15"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-16
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-16--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-16"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-basic-example-node-17
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-basic-example-17--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-basic-example-actions-17"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Tree table with checkboxes

```html
<table
  class="pf-v6-c-table pf-m-tree-view-grid-lg pf-m-tree-view"
  aria-label="This is a simple tree table, with checkboxes example"
  role="treegrid"
  id="tree-table-with-checkboxes-example"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"
        scope="col"
      >Name</th>

      <th class="pf-v6-c-table__th" scope="col">Count</th>

      <th class="pf-v6-c-table__th" scope="col">Size</th>

      <th class="pf-v6-c-table__th" scope="col">Data Stores</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody">
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="1"
      aria-setsize="1"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-with-checkboxes-example-expandable-toggle-1"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-with-checkboxes-example-node-1 tree-table-with-checkboxes-example-expandable-toggle-1"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-1-level-1-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-1-level-1-check-input"
                name="tree-table-with-checkboxes-example-level-1-level-1-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-1
            >Level 1 all folders</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-1--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-1"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-tree-view-details-expanded"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="false"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              id="tree-table-with-checkboxes-example-expandable-toggle-2"
              type="button"
              aria-labelledby="tree-table-with-checkboxes-example-node-2 tree-table-with-checkboxes-example-expandable-toggle-2"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-2-level-2-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-2-level-2-check-input"
                name="tree-table-with-checkboxes-example-level-2-level-2-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-2
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              type="button"
              aria-expanded="true"
              aria-label="tree-table-with-checkboxes-example-2--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-2"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-3-level-3-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-3-level-3-check-input"
                name="tree-table-with-checkboxes-example-level-3-level-3-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-3
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-3--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-3"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-3-level-4-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-3-level-4-check-input"
                name="tree-table-with-checkboxes-example-level-3-level-4-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-4
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-4--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-4"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-2-level-5-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-2-level-5-check-input"
                name="tree-table-with-checkboxes-example-level-2-level-5-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-5
            >Level 2 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-5--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-5"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="3"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-2-level-6-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-2-level-6-check-input"
                name="tree-table-with-checkboxes-example-level-2-level-6-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-6
            >Level 2 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-6--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-6"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="4"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-with-checkboxes-example-expandable-toggle-7"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-with-checkboxes-example-node-7 tree-table-with-checkboxes-example-expandable-toggle-7"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-2-level-7-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-2-level-7-check-input"
                name="tree-table-with-checkboxes-example-level-2-level-7-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-7
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-7--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-7"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="3"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-3-level-8-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-3-level-8-check-input"
                name="tree-table-with-checkboxes-example-level-3-level-8-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-8
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-8--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-8"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-with-checkboxes-example-expandable-toggle-9"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-with-checkboxes-example-node-9 tree-table-with-checkboxes-example-expandable-toggle-9"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-3-level-9-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-3-level-9-check-input"
                name="tree-table-with-checkboxes-example-level-3-level-9-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-9
            >Level 3 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-9--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-9"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-tree-view-details-expanded"
      aria-level="4"
      aria-setsize="1"
      aria-posinset="1"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-4-level-10-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-4-level-10-check-input"
                name="tree-table-with-checkboxes-example-level-4-level-10-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-10
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              type="button"
              aria-expanded="true"
              aria-label="tree-table-with-checkboxes-example-10--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-10"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-3-level-11-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-3-level-11-check-input"
                name="tree-table-with-checkboxes-example-level-3-level-11-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-11
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-11--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-11"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="5"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-with-checkboxes-example-expandable-toggle-12"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-with-checkboxes-example-node-12 tree-table-with-checkboxes-example-expandable-toggle-12"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-3-level-12-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-3-level-12-check-input"
                name="tree-table-with-checkboxes-example-level-3-level-12-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-12
            >Level 3 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-12--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-12"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="4"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-4-level-13-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-4-level-13-check-input"
                name="tree-table-with-checkboxes-example-level-4-level-13-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-13
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-13--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-13"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="4"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-4-level-14-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-4-level-14-check-input"
                name="tree-table-with-checkboxes-example-level-4-level-14-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-14
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-14--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-14"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="6"
      tabindex="0"
      aria-expanded="false"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              id="tree-table-with-checkboxes-example-expandable-toggle-15"
              type="button"
              aria-labelledby="tree-table-with-checkboxes-example-node-15 tree-table-with-checkboxes-example-expandable-toggle-15"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-2-level-15-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-2-level-15-check-input"
                name="tree-table-with-checkboxes-example-level-2-level-15-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-15
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-15--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-15"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-3-level-16-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-3-level-16-check-input"
                name="tree-table-with-checkboxes-example-level-3-level-16-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-16
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-16--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-16"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-example-level-3-level-17-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-example-level-3-level-17-check-input"
                name="tree-table-with-checkboxes-example-level-3-level-17-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-example-node-17
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-example-17--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-example-actions-17"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Tree table with checkboxes and icons

```html
<table
  class="pf-v6-c-table pf-m-tree-view-grid-lg pf-m-tree-view"
  role="treegrid"
  id="tree-table-with-checkboxes-icons-example"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"
        scope="col"
      >Name</th>

      <th class="pf-v6-c-table__th" scope="col">Count</th>

      <th class="pf-v6-c-table__th" scope="col">Size</th>

      <th class="pf-v6-c-table__th" scope="col">Data Stores</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody">
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="1"
      aria-setsize="1"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-with-checkboxes-icons-example-expandable-toggle-1"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-with-checkboxes-icons-example-node-1 tree-table-with-checkboxes-icons-example-expandable-toggle-1"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-1-level-1-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-1-level-1-check-input"
                name="tree-table-with-checkboxes-icons-example-level-1-level-1-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-folder" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-1
            >Level 1 all folders</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-1--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-1"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-tree-view-details-expanded"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="false"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              id="tree-table-with-checkboxes-icons-example-expandable-toggle-2"
              type="button"
              aria-labelledby="tree-table-with-checkboxes-icons-example-node-2 tree-table-with-checkboxes-icons-example-expandable-toggle-2"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-2-level-2-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-2-level-2-check-input"
                name="tree-table-with-checkboxes-icons-example-level-2-level-2-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-folder" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-2
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              type="button"
              aria-expanded="true"
              aria-label="tree-table-with-checkboxes-icons-example-2--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-2"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-3-level-3-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-3-level-3-check-input"
                name="tree-table-with-checkboxes-icons-example-level-3-level-3-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-3
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-3--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-3"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-3-level-4-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-3-level-4-check-input"
                name="tree-table-with-checkboxes-icons-example-level-3-level-4-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-4
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-4--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-4"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-2-level-5-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-2-level-5-check-input"
                name="tree-table-with-checkboxes-icons-example-level-2-level-5-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-5
            >Level 2 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-5--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-5"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="3"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-2-level-6-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-2-level-6-check-input"
                name="tree-table-with-checkboxes-icons-example-level-2-level-6-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-6
            >Level 2 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-6--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-6"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="4"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-with-checkboxes-icons-example-expandable-toggle-7"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-with-checkboxes-icons-example-node-7 tree-table-with-checkboxes-icons-example-expandable-toggle-7"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-2-level-7-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-2-level-7-check-input"
                name="tree-table-with-checkboxes-icons-example-level-2-level-7-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-folder" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-7
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-7--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-7"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="3"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-3-level-8-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-3-level-8-check-input"
                name="tree-table-with-checkboxes-icons-example-level-3-level-8-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-8
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-8--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-8"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-with-checkboxes-icons-example-expandable-toggle-9"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-with-checkboxes-icons-example-node-9 tree-table-with-checkboxes-icons-example-expandable-toggle-9"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-3-level-9-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-3-level-9-check-input"
                name="tree-table-with-checkboxes-icons-example-level-3-level-9-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-folder" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-9
            >Level 3 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-9--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-9"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr pf-m-tree-view-details-expanded"
      aria-level="4"
      aria-setsize="1"
      aria-posinset="1"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-4-level-10-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-4-level-10-check-input"
                name="tree-table-with-checkboxes-icons-example-level-4-level-10-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-10
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              type="button"
              aria-expanded="true"
              aria-label="tree-table-with-checkboxes-icons-example-10--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-10"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-3-level-11-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-3-level-11-check-input"
                name="tree-table-with-checkboxes-icons-example-level-3-level-11-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-11
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-11--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-11"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-m-expanded"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="5"
      tabindex="0"
      aria-expanded="true"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-expanded pf-m-plain"
              id="tree-table-with-checkboxes-icons-example-expandable-toggle-12"
              type="button"
              aria-expanded="true"
              aria-labelledby="tree-table-with-checkboxes-icons-example-node-12 tree-table-with-checkboxes-icons-example-expandable-toggle-12"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-3-level-12-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-3-level-12-check-input"
                name="tree-table-with-checkboxes-icons-example-level-3-level-12-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-folder" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-12
            >Level 3 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-12--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-12"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="4"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-4-level-13-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-4-level-13-check-input"
                name="tree-table-with-checkboxes-icons-example-level-4-level-13-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-13
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-13--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-13"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="4"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-4-level-14-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-4-level-14-check-input"
                name="tree-table-with-checkboxes-icons-example-level-4-level-14-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-14
            >Level 4 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-14--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-14"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr"
      aria-level="2"
      aria-setsize="5"
      aria-posinset="6"
      tabindex="0"
      aria-expanded="false"
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              id="tree-table-with-checkboxes-icons-example-expandable-toggle-15"
              type="button"
              aria-labelledby="tree-table-with-checkboxes-icons-example-node-15 tree-table-with-checkboxes-icons-example-expandable-toggle-15"
              aria-label="Toggle row"
            >
              <span class="pf-v6-c-button__icon">
                <div class="pf-v6-c-table__toggle-icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </span>
            </button>
          </span>
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-2-level-15-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-2-level-15-check-input"
                name="tree-table-with-checkboxes-icons-example-level-2-level-15-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-folder" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-15
            >Level 2 node</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-15--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-15"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="1"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-3-level-16-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-3-level-16-check-input"
                name="tree-table-with-checkboxes-icons-example-level-3-level-16-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-16
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-16--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-16"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
    <tr
      class="pf-v6-c-table__tr"
      aria-level="3"
      aria-setsize="2"
      aria-posinset="2"
      tabindex="-1"
      hidden
      role="row"
    >
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <span class="pf-v6-c-table__td pf-v6-c-table__check">
            <label
              class="pf-v6-c-check pf-m-standalone"
              for="tree-table-with-checkboxes-icons-example-level-3-level-17-check-input"
            >
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="tree-table-with-checkboxes-icons-example-level-3-level-17-check-input"
                name="tree-table-with-checkboxes-icons-example-level-3-level-17-check-input"
                aria-label="Standalone check"
              />
            </label>
          </span>

          <div class="pf-v6-c-table__tree-view-text">
            <span class="pf-v6-c-table__tree-view-icon">
              <i class="fas fa-fw fa-leaf" aria-hidden="true"></i>
            </span>
            <span
              class="pf-v6-c-table__text"
              tree-table-with-checkboxes-icons-example-node-17
            >Level 3 leaf</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-with-checkboxes-icons-example-17--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
      <td class="pf-v6-c-table__td pf-v6-c-table__action" role="gridcell">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
          id="tree-table-with-checkboxes-icons-example-actions-17"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Tree with no children or indentation

```html
<table
  class="pf-v6-c-table pf-m-tree-view-grid-lg pf-m-no-inset pf-m-tree-view"
  role="treegrid"
  aria-label="This is a simple tree table with no indentation"
  id="tree-table-indent-example"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"
        scope="col"
      >Name</th>

      <th class="pf-v6-c-table__th" scope="col">Count</th>

      <th class="pf-v6-c-table__th" scope="col">Size</th>

      <th class="pf-v6-c-table__th" scope="col">Data Stores</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-indent-example-node-1
            >Level 1, leaf 1</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-indent-example-1--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-indent-example-node-2
            >Level 1, leaf 2</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-indent-example-2--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-indent-example-node-3
            >Level 1, leaf 3</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-indent-example-3--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-indent-example-node-4
            >Level 1, leaf 4</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-indent-example-4--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-indent-example-node-5
            >Level 1, leaf 5</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-indent-example-5--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell">
        <div class="pf-v6-c-table__tree-view-main">
          <div class="pf-v6-c-table__tree-view-text">
            <span
              class="pf-v6-c-table__text"
              tree-table-indent-example-node-6
            >Level 1, leaf 6</span>
          </div>
          <span class="pf-v6-c-table__tree-view-details-toggle">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="tree-table-indent-example-6--tree-table--details-toggle"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__details-toggle-icon">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          </span>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Migration assessment"
      >10</td>
      <td class="pf-v6-c-table__td" role="gridcell" data-label="Size of VM">25</td>
      <td
        class="pf-v6-c-table__td"
        role="gridcell"
        data-label="Number of Data Stores"
      >5</td>
    </tr>
  </tbody>
</table>

```

### Tree table accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="treegrid"` | `.pf-v6-c-table.pf-m-tree-view` | Identifies the `table` as a treegrid. **Place on the outermost `table` only** |
| `role="row"` | `.pf-v6-c-table.pf-m-tree-view tr` | Identifies the `tr` element as a `row`. The row role is not an implicit semantic for the tr element when in a treegrid. |
| `role="gridcell"` | `.pf-v6-c-table.pf-m-tree-view tr` | Identifies the `td` as a gridcell. The `gridcell` role is not an implicit semantic for the td element when in a treegrid. |
| `tabindex="-1"` | `.pf-v6-c-table.pf-m-tree-view tr` | Makes the element with the treeitem role focusable without including it in the tab sequence of the page. |
| `tabindex="0"` | `.pf-v6-c-table.pf-m-tree-view tr` | Includes the element with the treeitem role in the tab sequence. Only one treeitem in the tree has tabindex="0". When the user moves focus in the tree, the element included in the tab sequence changes to the element with focus. |
| `aria-expanded="false"` | `.pf-v6-c-table.pf-m-tree-view tr` | For an expandable item, indicates the parent node is closed, i.e., the descendant elements are not visible. |
| `aria-expanded="true"` | `.pf-v6-c-table.pf-m-tree-view tr.pf-m-expanded` | Indicates the parent node is open, i.e., the descendant elements are visible. |
| `aria-level="number"` | `.pf-v6-c-table.pf-m-tree-view tr` | Defines the level of the row in the hierarchical treegrid structure. Counting is one-based. Root rows have aria-level=“1”. |
| `aria-setsize="number"` | `.pf-v6-c-table.pf-m-tree-view tr` | Defines the number of rows in the set of rows that are in the same branch and at the same level within the hierarchy. |
| `aria-posinset="number"` | `.pf-v6-c-table.pf-m-tree-view tr` | Defines the position of the row within the set of other rows that are in the same branch and at the same level within the hierarchy. Counting is one-based, not zero-based. |

### Tree table usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__tree-view-main` | `<div>` | Initiates a tree view table main container. **Required with tree view** |
| `.pf-v6-c-table__tree-view-text` | `<div>` | Initiates a tree view table text element. **Required with tree view** |
| `.pf-v6-c-table__tree-view-icon` | `<span>` | Initiates a tree view icon wrapper. **Required with tree view** |
| `.pf-v6-c-table__tree-view-title-header-cell` | `<th>` | Initiates a tree view title header cell. **Required with tree view** |
| `.pf-v6-c-table__tree-view-details-toggle` | `<span>` | Initiates a tree view details toggle container. |
| `.pf-v6-c-table__tree-view-details-toggle-icon` | `<span>` | Initiates a tree view details toggle icon. |
| `.pf-m-treeview-details-expanded` | `<tr>` | Modifies a tbody with a row and an expandable row. |
| `.pf-m-no-inset` | `.pf-v6-c-table.pf-m-tree-view` , `.pf-v6-c-table.pf-m-tree-view <tr>` | Modifies a tree view `.pf-v6-c-table__tree-view-main` indentation. |

## Borderless variant

### Borderless example

```html
<table
  class="pf-v6-c-table pf-m-grid-md pf-m-no-border-rows"
  role="grid"
  aria-label="This is a compact table with border rows example"
  id="borderless-table"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-checkrow-thead-check-input"
            name="borderless-table-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Contributor</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Position</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Location</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last seen</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Numbers</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__icon"
        role="columnheader"
        scope="col"
      >Icons</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-checkrow-1-check-input"
            name="borderless-table-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-table-node1">Sam Jones</div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Position">CSS guru</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Location"
      >Not too sure</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Numbers">0556</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-checkrow-2-check-input"
            name="borderless-table-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-table-node2">Amy Wilson</div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Position"
      >Visual design</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Location">Raleigh</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Numbers">9492</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-checkrow-3-check-input"
            name="borderless-table-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-table-node3">Steve Wilson</div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Position"
      >Visual design lead</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Location">Westford</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Numbers">9929</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-checkrow-4-check-input"
            name="borderless-table-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-table-node4">Emma Jackson</div>
      </th>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Position"
      >Interaction design</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Location">Westford</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Workspaces"
      >May 9, 2018</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">2217</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Borderless compact example

```html
<table
  class="pf-v6-c-table pf-m-grid-md pf-m-no-border-rows pf-m-compact"
  role="grid"
  aria-label="This is a compact table with border rows example"
  id="borderless-compact-table"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-compact-table-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-compact-table-checkrow-thead-check-input"
            name="borderless-compact-table-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Contributor</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Position</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Location</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last seen</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Numbers</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__icon"
        role="columnheader"
        scope="col"
      >Icons</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-compact-table-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-compact-table-checkrow-1-check-input"
            name="borderless-compact-table-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-compact-table-node1">Sam Jones</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Position"
      >CSS guru</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Location"
      >Not too sure</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Numbers"
      >0556</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon pf-m-compact"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-compact-table-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-compact-table-checkrow-2-check-input"
            name="borderless-compact-table-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-compact-table-node2">Amy Wilson</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Position"
      >Visual design</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Location"
      >Raleigh</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Numbers"
      >9492</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon pf-m-compact"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-compact-table-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-compact-table-checkrow-3-check-input"
            name="borderless-compact-table-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-compact-table-node3">Steve Wilson</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Position"
      >Visual design lead</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Location"
      >Westford</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Last seen"
      >May 9, 2018</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Numbers"
      >9929</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon pf-m-compact"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-compact-table-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-compact-table-checkrow-4-check-input"
            name="borderless-compact-table-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-compact-table-node4">Emma Jackson</div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Position"
      >Interaction design</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Location"
      >Westford</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Workspaces"
      >May 9, 2018</td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Last commit"
      >2217</td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__icon pf-m-compact"
        role="cell"
        data-label="Icon"
      >
        <i class="fas fa-check"></i>
      </td>
      <td
        class="pf-v6-c-table__td pf-m-compact"
        role="cell"
        data-label="Action"
      >
        <a href="#">Action link</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-small pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Borderless expandable example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg pf-m-no-border-rows pf-m-expandable"
  role="grid"
  aria-label="Expandable table example"
  id="borderless-table-expandable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Expand rows</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-expandable-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-expandable-checkrow-thead-check-input"
            name="borderless-table-expandable-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="borderless-table-expandable-expandable-toggle-1"
          type="button"
          aria-expanded="true"
          aria-controls="borderless-table-expandable-content-1"
          aria-labelledby="borderless-table-expandable-node-1"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-expandable-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-expandable-checkrow-1-check-input"
            name="borderless-table-expandable-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-table-expandable-node1">Node 1</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 1</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="4"
        id="borderless-table-expandable-content-1"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="borderless-table-expandable-expandable-toggle-2"
          type="button"
          aria-controls="borderless-table-expandable-content-2"
          aria-labelledby="borderless-table-expandable-node-2"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-expandable-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-expandable-checkrow-2-check-input"
            name="borderless-table-expandable-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-table-expandable-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 2</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="borderless-table-expandable-content-2"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="borderless-table-expandable-expandable-toggle-3"
          type="button"
          aria-expanded="true"
          aria-controls="borderless-table-expandable-content-3"
          aria-labelledby="borderless-table-expandable-node-3"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-expandable-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-expandable-checkrow-3-check-input"
            name="borderless-table-expandable-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-table-expandable-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 3</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="borderless-table-expandable-content-3"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="borderless-table-expandable-expandable-toggle-4"
          type="button"
          aria-expanded="true"
          aria-controls="borderless-table-expandable-content-4"
          aria-labelledby="borderless-table-expandable-node-4"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="borderless-table-expandable-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="borderless-table-expandable-checkrow-4-check-input"
            name="borderless-table-expandable-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="borderless-table-expandable-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 4</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-m-no-padding"
        role="cell"
        colspan="7"
        id="borderless-table-expandable-content-4"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Expandable row content has no padding.</div>
      </td>
    </tr>
  </tbody>
</table>

```

### Borderless with compound expansion example

```html
<table
  class="pf-v6-c-table pf-m-grid-md pf-m-no-border-rows pf-m-expandable"
  role="grid"
  aria-label="Compound expandable table example"
  id="borderless-compound-expansion-table"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-v6-c-table__control-row" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;10
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            234
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>20 minutes</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-1-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-2-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-3-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__control-row" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;10
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            234
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>20 minutes</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-4-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-5-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-6-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__control-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
            2
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle pf-m-expanded"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            82
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            1
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>1 day ago</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-7-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-8-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-9-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-v6-c-table__control-row" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Repositories"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Branches"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
            4
          </span>
        </button>
      </td>
      <td
        class="pf-v6-c-table__td pf-v6-c-table__compound-expansion-toggle"
        role="cell"
        data-label="Pull requests"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
            1
          </span>
        </button>
      </td>

      <th class="pf-v6-c-table__th" role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
        <span>2 days ago</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-10-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-11-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td class="pf-v6-c-table__td pf-m-no-padding" role="cell" colspan="7">
        <div class="pf-v6-c-table__expandable-row-content pf-m-no-background">
          <table
            class="pf-v6-c-table pf-m-compact pf-m-no-border-rows"
            role="grid"
            id="borderless-compound-expansion-table-nested-table-12-"
            aria-label="Nested table"
          >
            <thead class="pf-v6-c-table__thead">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th pf-v6-c-table__sort"
                  role="columnheader"
                  aria-sort="none"
                  scope="col"
                >
                  <button class="pf-v6-c-table__button">
                    <span class="pf-v6-c-table__button-content">
                      <span class="pf-v6-c-table__text">Description</span>
                      <span class="pf-v6-c-table__sort-indicator">
                        <i class="fas fa-arrows-alt-v"></i>
                      </span>
                    </span>
                  </button>
                </th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Date</th>

                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  scope="col"
                >Status</th>

                <th
                  class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
                  role="columnheader"
                  scope="col"
                >
                  <span class="pf-v6-screen-reader">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody class="pf-v6-c-table__tbody" role="rowgroup">
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item one</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item two</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Warning</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item three</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item four</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
              <tr class="pf-v6-c-table__tr" role="row">
                <th
                  class="pf-v6-c-table__th"
                  role="columnheader"
                  data-label="Description"
                >Item five</th>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Date"
                >May 9, 2018</td>

                <td
                  class="pf-v6-c-table__td"
                  role="cell"
                  data-label="Status"
                >Active</td>

                <td class="pf-v6-c-table__td pf-v6-c-table__action">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Table actions"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>
</table>

```

### Borderless usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-no-border-rows` | `.pf-v6-c-table.pf-m-compact` | Modifies to remove borders between rows. **Note: Does not affect `.pf-v6-c-table__control-row`.** |
| `.pf-m-expandable` | `.pf-v6-c-table.pf-m-compact` | Indicates that the table has expandable rows. |

## Width modifiers

### Width modifiers examples

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a width modifier expandable"
  id="table-width-modifiers"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-width-modifiers-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-width-modifiers-checkrow-thead-check-input"
            name="table-width-modifiers-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="columnheader"
        scope="col"
      >Workspaces</th>

      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="columnheader"
        scope="col"
      >Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-width-modifiers-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-width-modifiers-checkrow-1-check-input"
            name="table-width-modifiers-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-width-modifiers-node1">Node 1</div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-width-modifiers-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-width-modifiers-checkrow-2-check-input"
            name="table-width-modifiers-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-width-modifiers-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-width-modifiers-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-width-modifiers-checkrow-3-check-input"
            name="table-width-modifiers-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-width-modifiers-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-width-modifiers-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-width-modifiers-checkrow-4-check-input"
            name="table-width-modifiers-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-width-modifiers-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Width modifiers usage

Width modifiers control the width of the columns. To control the responsive behavior of the table at different screen widths, see [responsive table behavior](#responsive-table-behavior).

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-width-[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, or 90]` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` widths. **Recommended for sortable title cell** |
| `.pf-m-width-max` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` maximum width. |
| `.pf-m-fit-content` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` minimum width with no text wrapping. |

## Hidden/visible breakpoint modifiers

### Hidden/visible breakpoint modifiers example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg"
  role="grid"
  aria-label="Table with hidden and visible modifiers example"
  id="table-hidden-visible"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg"
        role="columnheader"
        scope="col"
      >Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th pf-m-hidden-on-md pf-m-visible-on-lg"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th
        class="pf-v6-c-table__th pf-m-hidden pf-m-visible-on-sm"
        role="columnheader"
        scope="col"
      >Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg"
        role="cell"
        data-label="Repository name"
      >Visible only on md breakpoint</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td
        class="pf-v6-c-table__td pf-m-hidden-on-md pf-m-visible-on-lg"
        role="cell"
        data-label="Pull requests"
      >Hidden only on md breakpoint</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td pf-m-hidden pf-m-visible-on-sm"
        role="cell"
        data-label="Last commit"
      >Hidden on xs breakpoint</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg"
        role="cell"
        data-label="Repository name"
      >Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td
        class="pf-v6-c-table__td pf-m-hidden-on-md pf-m-visible-on-lg"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td pf-m-hidden pf-m-visible-on-sm"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg"
        role="cell"
        data-label="Repository name"
      >Repository 3</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td
        class="pf-v6-c-table__td pf-m-hidden-on-md pf-m-visible-on-lg"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td pf-m-hidden pf-m-visible-on-sm"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg"
        role="cell"
        data-label="Repository name"
      >Repository 4</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td
        class="pf-v6-c-table__td pf-m-hidden-on-md pf-m-visible-on-lg"
        role="cell"
        data-label="Pull requests"
      >25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td pf-m-hidden pf-m-visible-on-sm"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Hidden/visible breakpoint modifiers usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v6-c-table tr > th`, `.pf-v6-c-table tr > td` | Hides a table cell at optional [breakpoint](/tokens/all-patternfly-tokens), or hides it at all breakpoints with `.pf-m-hidden`. **Note: Needs to apply to all cells in the column you want to hide.** |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v6-c-table tr > th`, `.pf-v6-c-table tr > td` | Shows a table cell at optional [breakpoint](/tokens/all-patternfly-tokens). |

## Text control modifiers

To better control table cell behavior, PatternFly provides a series of modifiers to help contextually control layout. By default, `thead` cells are set to truncate, whereas `tbody` cells are set to wrap. Both `th` and `td` cells use a set of shared css properties mapped to customizable css variable values. Because only the shared css variables are changed by the modifier selector and not the properties, the modifier can be applied to any parent element up until `.pf-v6-c-table` itself \[`thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text`].

### Text control example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg"
  role="grid"
  aria-label="This is a simple table example"
  id="modifiers-without-text-wrapper-example"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-m-width-20"
        role="columnheader"
        scope="col"
      >Truncate (width 20%)</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Break word</th>

      <th class="pf-v6-c-table__th pf-m-wrap" role="columnheader" scope="col">
        Wrapping table header text. This
        <code>th</code> text will wrap instead of truncate.
      </th>

      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="columnheader"
        scope="col"
      >Fit content</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Wrapping</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-m-truncate"
        role="cell"
        data-label="Truncating text"
      >This text will truncate instead of wrap in table layout and wrap gracefully in grid layout.</td>
      <td
        class="pf-v6-c-table__td pf-m-break-word"
        role="cell"
        data-label="Break word"
      >
        <a
          href="#"
        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Wrapping">
        <p>
          By default,
          <code>thead</code> cells will truncate and
          <code>tbody</code> cells will wrap. Use
          <code>.pf-m-wrap</code> on a
          <code>th</code> to change its behavior.
        </p>
      </td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Fit content"
      >This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.</td>
      <td
        class="pf-v6-c-table__td pf-m-nowrap"
        role="cell"
        data-label="No wrap"
      >
        <a href="#">No wrap</a>
      </td>
    </tr>
  </tbody>
</table>

```

By default, truncation and wrapping settings do not affect the grid layout, but text will fallback gracefully by passively wrapping long strings. Truncation and wrapping settings will persist with the addition of a `.pf-v6-c-table__text` wrapper on table cell content. In addition to `.pf-v6-c-table__text`, all PatternFly layouts can be used in table cells and contain table text elements.

### Text control using the table text element example

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a simple table example"
  id="table-text-element-example"
>
  <caption class="pf-v6-c-table__caption">
    This table contains
    <code>.pf-v6-c-table__text</code>&nbsp; examples. The
    <code>.pf-v6-c-table__text</code>&nbsp; element can be using alone or in a nested configuration.
  </caption>

  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Selector/element</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Result</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="rowheader"
        data-label="Element"
        scope="row"
      >
        <div class="pf-v6-c-table__text">
          <b>
            <code>th.pf-m-truncate</code>
          </b>
        </div>
      </th>

      <td
        class="pf-v6-c-table__td pf-m-truncate"
        role="cell"
        data-label="Truncating text"
      >
        <span class="pf-v6-c-table__text">
          This table cell contains a single
          <code>`.pf-v6-c-table__text`</code>&nbsp; wrapper with the parent table cell applying
          <code>`.pf-m-truncate`</code>. The child
          <code>`.pf-v6-c-table__text`</code>&nbsp; element will inherit the modifier settings and apply to the grid layout.
        </span>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="rowheader"
        data-label="Element"
        scope="row"
      >
        <div class="pf-v6-c-table__text">
          <b>
            <code>.pf-v6-l-stack</code>
          </b>
        </div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Truncating text">
        <div class="pf-v6-l-stack pf-m-gutter">
          <div class="pf-v6-l-stack__item">
            <div class="pf-v6-c-table__text">
              Because
              <code>.pf-m-grid</code>&nbsp; applies a grid layout to
              <code>.pf-v6-c-table</code>, child elements will stack in the grid layout. To prevent this, wrap multiple elements with a div or use a PatternFly layout.
            </div>
          </div>
          <div class="pf-v6-l-stack__item">
            <p class="pf-v6-c-table__text">
              The
              <b>
                <code>.pf-v6-c-table__text</code>&nbsp;element
              </b>&nbsp; can additionally be nested, like in this example. The next
              <code>.pf-v6-c-table__text</code> element has a very long url whose width needs be constrained.
            </p>
          </div>
          <div class="pf-v6-l-stack__item">
            <a
              class="pf-v6-c-table__text pf-m-truncate"
              href="#"
            >http://truncatemodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>
          </div>
          <div class="pf-v6-l-stack__item">
            <p class="pf-v6-c-table__text">
              This
              <b>
                <code>.pf-v6-c-table__text</code>&nbsp;element
              </b>&nbsp; applies its own built in grid layout
              <b>
                <code>.pf-m-stack</code>
              </b>&nbsp;as well as a gutter
              <b>
                <code>.pf-m-gutter</code>
              </b>.
            </p>
          </div>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="rowheader"
        data-label="Element"
        scope="row"
      >
        <div class="pf-v6-c-table__text">
          <b>
            <code>.pf-v6-l-flex</code>
          </b>
        </div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Truncating text">
        <div class="pf-v6-l-flex pf-m-column pf-m-row-on-xl">
          <div class="pf-v6-l-flex__item pf-m-flex-1">
            <p
              class="pf-v6-c-table__text"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div class="pf-v6-l-flex__item pf-m-flex-1">
            <a
              class="pf-v6-c-table__text pf-m-break-word"
              href="#"
            >http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>
          </div>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="rowheader"
        data-label="Element"
        scope="row"
      >
        <div class="pf-v6-c-table__text">
          <b>
            <code>.pf-v6-l-flex</code>
          </b>
        </div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Truncating text">
        <div class="pf-v6-l-flex pf-m-column">
          <div class="pf-v6-l-flex">
            <div class="pf-v6-l-flex__item">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
              &nbsp;5
            </div>
            <div class="pf-v6-l-flex__item">
              <i class="fas fa-code" aria-hidden="true"></i>
              &nbsp;9
            </div>
            <div class="pf-v6-l-flex__item">
              <i class="fas fa-cube" aria-hidden="true"></i>
              &nbsp;2
            </div>
            <div class="pf-v6-l-flex__item">
              <i class="fas fa-check-circle" aria-hidden="true"></i>
              &nbsp;11
            </div>
          </div>
          <div class="pf-v6-l-flex__item">
            <p
              class="pf-v6-c-table__text"
            >This is paragraph that we want to wrap. It doesn' t need a modifier and has no extra long strings. Any modifier available for the flex layout can be used here.</p>
          </div>
          <div class="pf-v6-l-flex__item">
            <a
              class="pf-v6-c-table__text pf-m-break-word"
              href="#"
            >http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>
          </div>
        </div>
      </td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="rowheader"
        data-label="Element"
        scope="row"
      >
        <div class="pf-v6-c-table__text">
          <b>
            <code>.pf-v6-l-grid</code>
          </b>
        </div>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Truncating text">
        <div class="pf-v6-l-grid pf-m-gutter">
          <div class="pf-v6-l-grid__item pf-m-6-col pf-m-3-col-on-md">Item 1</div>
          <div class="pf-v6-l-grid__item pf-m-6-col pf-m-3-col-on-md">Item 2</div>
          <div class="pf-v6-l-grid__item pf-m-6-col pf-m-3-col-on-md">Item 3</div>
          <div class="pf-v6-l-grid__item pf-m-6-col pf-m-3-col-on-md">Item 4</div>
          <div class="pf-v6-l-grid__item">
            <p
              class="pf-v6-c-table__text"
            >This is paragraph that we want to wrap. It doesn' t need a modifier and has no extra long strings. Any modifier available for the flex layout can be used here.</p>
          </div>
          <div class="pf-v6-l-grid__item">
            <a
              class="pf-v6-c-table__text pf-m-truncate"
              href="#"
            >http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

```

### Table with long strings in the content

Long strings in table cells will push that column wider and possible take from other columns. This can cause content or headers to be truncated.

```html
<div class="pf-v6-c-tooltip pf-m-top" role="tooltip">
  <div class="pf-v6-c-tooltip__arrow"></div>

  <div class="pf-v6-c-tooltip__content" id="tooltip-top-content">Pull Requests</div>
</div>
<table
  class="pf-v6-c-table"
  aria-label="This is a simple table example"
  id="th-truncation-example"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" scope="col">Branches</th>

      <th class="pf-v6-c-table__th" scope="col">Pull requests</th>

      <th class="pf-v6-c-table__th" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" scope="col">Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Long lines of text will shrink adjacent column widths.</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        This example is not responsive. Adjacent
        <code>tbody</code> cells will shrink as a result of this text being a longer string and adjacent text being shorter in length. Truncation can be overridden in
        <code>th</code> cells with the addition of
        <code>.pf-m-wrap</code>,
        <code>.pf-m-nowrap</code> or
        <code>.pf-m-fit-content</code>.
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Width constrained

Add a [width modifier](#width-modifiers) to `thead th` to limit string length or add `.pf-m-truncate` to `tbody td`.

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a simple table example"
  id="width-constrained-example"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-m-width-40"
        role="columnheader"
        scope="col"
      >Width 40</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th
        class="pf-v6-c-table__th pf-m-fit-content"
        role="columnheader"
        scope="col"
      >Fit content th</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Since this is a long string of text and the other cells contain short strings (narrower than their table header), we'll need to control width this table header's width. Let's set width to 40%.</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-m-truncate"
        role="cell"
        data-label="Repository name"
      >This string will truncate in table mode only. Since this is a long string of text and the other cells contain short strings (narrower than their table header), we'll need to control width this table header's width. Let's set width to 40%.</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Text control modifiers usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__text` | `th > *`, `td > *` | Initiates a table text element. |
| `.pf-m-wrap` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Sets table cell content to wrap. If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. This is the default behavior for <code>tbody</code> cells. |
| `.pf-m-truncate` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Sets text to truncate based on a minimum width and available space adjacent table cells.  If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. This is the default behavior for <code>thead</code> cells. |
| `.pf-m-nowrap` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Unsets min/max width and sets whitespace to nowrap.  If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. This is specifically beneficial for cell's whose <code>thead th</code> cells are blank. The following example highlights link text that should display inline. Be careful with this modifier, it will prioritize its cell's content above all other cell's contents. |
| `.pf-m-fit-content` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Fit column width to cell content.  If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. |
| `.pf-m-break-word` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Breaks long strings to break wherever necessary as defined by the table layout. If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. |

## Sticky table modifiers

**Note:** Sticky table headers and columns have a higher `z-index` than the `z-index` used for menus (dropdown, select, etc). The intent is that the contents of a scrollable table will scroll under the sticky header/column, including any expanded menus. However, there may be use cases where a menu needs to appear on top of a sticky header/column, such as an expanded menu in a toolbar above a table with a sticky header.

There are a few ways this can be handled:

* Manipulate the `z-index` of the menu and/or table headers/columns manually.
* Use the `menuAppendTo` prop in non-composable react components with menus to append the menu to an element outside of the table (e.g., the `<body>` element) so that the menu has a higher stacking context than - and can appear on top of - sticky headers/columns as well as appear outside of any scrollable content in the table.
* In the case where the menu is outside of the table (e.g., above the table in a toolbar, or below the table and the menu expands up), assign the entire table a lower `z-index`  than the `z-index` of the menu. This creates a lower stacking context for the entire table compared to the menu, while preserving the stacking context of the elements inside of the table.

### Sticky header

```html
<div class="pf-v6-c-scroll-inner-wrapper">
  <table
    class="pf-v6-c-table pf-m-grid-md pf-m-sticky-header"
    role="grid"
    aria-label="This is a table with sticky header cells"
    id="table-sticky-header"
  >
    <thead class="pf-v6-c-table__thead">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          scope="col"
        >Repositories</th>

        <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          scope="col"
        >Pull requests</th>

        <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          scope="col"
        >Last commit</th>
      </tr>
    </thead>

    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Repository name"
        >Repository 1</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Last commit"
        >2 days ago</td>
      </tr>

      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Repository name"
        >Repository 2</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Last commit"
        >2 days ago</td>
      </tr>

      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Repository name"
        >Repository 3</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Last commit"
        >2 days ago</td>
      </tr>

      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Repository name"
        >Repository 4</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Last commit"
        >2 days ago</td>
      </tr>
    </tbody>
  </table>
</div>

```

### Sticky column

```html
<div class="pf-v6-c-scroll-inner-wrapper">
  <table
    class="pf-v6-c-table"
    role="grid"
    aria-label="This is a scrollable table"
    id="sticky-column-example"
  >
    <thead class="pf-v6-c-table__thead">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          aria-sort="none"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Fact</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          data-label="Example th"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">State</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 3</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 4</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 5</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 6</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 7</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 8</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 9</th>
      </tr>
    </thead>

    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 1</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 1</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 2</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 2</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 3</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 4</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 5</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 6</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 7</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 8</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 8</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 9</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 9</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-9</td>
      </tr>
    </tbody>
  </table>
</div>

```

### Multiple sticky columns

```html
<div class="pf-v6-c-scroll-inner-wrapper">
  <table
    class="pf-v6-c-table"
    role="grid"
    aria-label="This is a scrollable table"
    id="sticky-multi-column-example"
  >
    <thead class="pf-v6-c-table__thead">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          aria-sort="none"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Fact</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          aria-sort="none"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 120px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">State</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 3</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 4</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 5</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 6</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 7</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 8</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 9</th>
      </tr>
    </thead>

    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 1</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 1</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 2</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 2</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 3</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 3</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 4</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 4</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 5</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 5</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 6</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 6</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 7</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 7</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 8</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 8</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-9</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
        >Fact 9</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
        >State 9</th>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-8</td>

        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-9</td>
      </tr>
    </tbody>
  </table>
</div>

```

### Sticky columns and header

```html
<div class="pf-v6-c-scroll-outer-wrapper">
  <div class="pf-v6-c-scroll-inner-wrapper">
    <table
      class="pf-v6-c-table pf-m-sticky-header"
      role="grid"
      aria-label="This is a scrollable table"
      id="sticky-header-columns-example"
    >
      <thead class="pf-v6-c-table__thead">
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            aria-sort="none"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >
            <button class="pf-v6-c-table__button">
              <span class="pf-v6-c-table__button-content">
                <span class="pf-v6-c-table__text">Fact</span>
                <span class="pf-v6-c-table__sort-indicator">
                  <i class="fas fa-arrows-alt-v"></i>
                </span>
              </span>
            </button>
          </th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            aria-sort="none"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 120px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >
            <button class="pf-v6-c-table__button">
              <span class="pf-v6-c-table__button-content">
                <span class="pf-v6-c-table__text">State</span>
                <span class="pf-v6-c-table__sort-indicator">
                  <i class="fas fa-arrows-alt-v"></i>
                </span>
              </span>
            </button>
          </th>

          <th
            class="pf-v6-c-table__th"
            role="columnheader"
            data-label="Example th"
            scope="col"
          >Header 3</th>

          <th
            class="pf-v6-c-table__th"
            role="columnheader"
            data-label="Example th"
            scope="col"
          >Header 4</th>

          <th
            class="pf-v6-c-table__th"
            role="columnheader"
            data-label="Example th"
            scope="col"
          >Header 5</th>

          <th
            class="pf-v6-c-table__th"
            role="columnheader"
            data-label="Example th"
            scope="col"
          >Header 6</th>

          <th
            class="pf-v6-c-table__th"
            role="columnheader"
            data-label="Example th"
            scope="col"
          >Header 7</th>

          <th
            class="pf-v6-c-table__th"
            role="columnheader"
            data-label="Example th"
            scope="col"
          >Header 8</th>

          <th
            class="pf-v6-c-table__th"
            role="columnheader"
            data-label="Example th"
            scope="col"
          >Header 9</th>
        </tr>
      </thead>

      <tbody class="pf-v6-c-table__tbody" role="rowgroup">
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 1</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 1</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 1-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 1-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 1-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 1-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 1-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 1-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 1-9</td>
        </tr>
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 2</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 2</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 2-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 2-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 2-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 2-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 2-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 2-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 2-9</td>
        </tr>
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 3</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 3</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 3-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 3-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 3-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 3-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 3-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 3-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 3-9</td>
        </tr>
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 4</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 4</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 4-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 4-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 4-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 4-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 4-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 4-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 4-9</td>
        </tr>
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 5</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 5</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 5-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 5-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 5-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 5-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 5-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 5-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 5-9</td>
        </tr>
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 6</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 6</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 6-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 6-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 6-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 6-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 6-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 6-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 6-9</td>
        </tr>
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 7</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 7</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 7-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 7-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 7-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 7-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 7-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 7-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 7-9</td>
        </tr>
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 8</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 8</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 8-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 8-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 8-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 8-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 8-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 8-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 8-9</td>
        </tr>
        <tr class="pf-v6-c-table__tr" role="row">
          <th
            class="pf-v6-c-table__th pf-m-truncate pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 100px;"
          >Fact 9</th>

          <th
            class="pf-v6-c-table__th pf-m-truncate pf-m-border-right pf-v6-c-table__sticky-cell pf-m-left"
            role="columnheader"
            data-label="Example th"
            scope="col"
            style="--pf-v6-c-table__sticky-cell--MinWidth: 80px; --pf-v6-c-table__sticky-cell--InsetInlineStart: 100px;"
          >State 9</th>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 9-3</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 9-4</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 9-5</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 9-6</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 9-7</td>
          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 9-8</td>

          <td
            class="pf-v6-c-table__td pf-m-nowrap"
            role="cell"
            data-label="Example td"
          >Test cell 9-9</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```

### Sticky right column

```html
<div class="pf-v6-c-scroll-inner-wrapper">
  <table
    class="pf-v6-c-table"
    role="grid"
    aria-label="This is a scrollable table"
    id="sticky-right-column-example"
  >
    <thead class="pf-v6-c-table__thead">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          data-label="Example th"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Fact</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          data-label="Example th"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">State</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 3</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 4</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 5</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 6</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 7</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Example th"
          scope="col"
        >Header 8</th>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Header 9</th>
      </tr>
    </thead>

    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 1</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 1</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 1-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 1-9</th>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 2</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 2</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 2-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 2-9</th>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 3-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 3-9</th>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 4-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 4-9</th>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 5-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 5-9</th>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 6-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 6-9</th>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 7-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 7-9</th>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 8</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 8</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 8-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 8-9</th>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Fact 9</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >State 9</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-3</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-4</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-5</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-6</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-7</td>
        <td
          class="pf-v6-c-table__td pf-m-nowrap"
          role="cell"
          data-label="Example td"
        >Test cell 9-8</td>

        <th
          class="pf-v6-c-table__th pf-m-truncate pf-m-border-left pf-v6-c-table__sticky-cell pf-m-right"
          role="columnheader"
          data-label="Example th"
          scope="col"
          style="--pf-v6-c-table__sticky-cell--MinWidth: 150px;"
        >Test cell 9-9</th>
      </tr>
    </tbody>
  </table>
</div>

```

### Sticky table usage

For sticky columns to function correctly, the parent table's width must be controlled with `.pf-v6-c-scroll-inner-wrapper`. For sticky columns and sticky headers to function correctly, the parent table needs an inner and outer wrapper (`.pf-v6-c-scroll-outer-wrapper` and `.pf-v6-c-scroll-inner-wrapper`)

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-sticky-header` | `.pf-v6-c-table` | Makes the table cells in `<thead>` sticky to the top of the table on scroll. |
| `.pf-v6-c-scroll-outer-wrapper` | `<div>` | Initiates a table container sticky columns outer wrapper. |
| `.pf-v6-c-scroll-inner-wrapper` | `<div>` | Initiates a table container sticky columns inner wrapper. |
| `.pf-v6-c-table__sticky-cell` | `<th>`, `<td>` | Initiates a sticky table cell. |
| `.pf-m-right`, `.pf-m-inline-end` | `.pf-v6-c-table__sticky-cell` | Initiates a sticky, right-hand (in LTR) or left-hand (in RTL) table cell. |
| `.pf-m-left`, `.pf-m-inline-start` | `.pf-v6-c-table__sticky-cell` | Initiates a sticky, left-hand (in LTR) or right-hand (in RTL) table cell. |

## Nested column headers

### Nested column headers and expandable rows

```html
<div class="pf-v6-c-scroll-inner-wrapper">
  <table
    class="pf-v6-c-table pf-m-expandable"
    role="grid"
    aria-label="This is a nested column header table example"
    id="nested-columns-expandable-example"
  >
    <thead class="pf-v6-c-table__thead pf-m-nested-column-header">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
          rowspan="2"
          role="columnheader"
          scope="col"
        >
          <span class="pf-v6-screen-reader">Expandable toggle</span>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__check"
          aria-label="Row select"
          rowspan="2"
          role="columnheader"
          scope="col"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="nested-columns-expandable-example-checkrow-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="nested-columns-expandable-example-checkrow-check-input"
              name="nested-columns-expandable-example-checkrow-check-input"
              aria-label="Select all rows"
            />
          </label>
        </th>

        <th
          class="pf-v6-c-table__th pf-m-border-right"
          role="columnheader"
          scope="col"
          rowspan="2"
        >Team</th>

        <th
          class="pf-v6-c-table__th pf-m-border-right"
          role="columnheader"
          scope="col"
          colspan="3"
        >Members</th>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          scope="col"
          rowspan="2"
        >Contact</th>

        <td class="pf-v6-c-table__td" rowspan="2"></td>
      </tr>

      <tr class="pf-v6-c-table__tr pf-m-first-cell-offset-reset" role="row">
        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead"
          role="columnheader"
          scope="col"
        >Design lead</th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead"
          role="columnheader"
          scope="col"
        >Interaction design</th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-border-right"
          role="columnheader"
          scope="col"
        >Visual designers</th>
      </tr>
    </thead>

    <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
      <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
        <td
          class="pf-v6-c-table__td pf-v6-c-table__toggle"
          aria-label="Row expansion"
        >
          <button
            class="pf-v6-c-button pf-m-expanded pf-m-plain"
            id="nested-columns-expandable-example-expandable-toggle-1"
            type="button"
            aria-expanded="true"
            aria-controls="nested-columns-expandable-example-content-1"
            aria-labelledby="nested-columns-expandable-example-node-1"
            aria-label="Toggle row"
            aria-describedby="true"
          >
            <span class="pf-v6-c-button__icon">
              <div class="pf-v6-c-table__toggle-icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </td>

        <td
          class="pf-v6-c-table__td pf-v6-c-table__check"
          aria-label="Check row"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="nested-columns-expandable-example-checkrow-1-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="nested-columns-expandable-example-checkrow-1-check-input"
              name="nested-columns-expandable-example-checkrow-1-check-input"
              aria-label="Select row"
            />
          </label>
        </td>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Developer program"
          id="nested-columns-expandable-example-node1"
        >Developer program</th>

        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Branches"
        >Stacey Logan</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Pull requests"
        >Mark Shakshober</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Workspaces"
        >Kaliq Ray</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
          <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
            <span class="pf-v6-c-button__text">Message us!</span>
          </button>
        </td>
      </tr>
      <tr
        class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
        role="row"
      >
        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>

        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>

        <td
          class="pf-v6-c-table__td"
          role="cell"
          colspan="5"
          id="nested-columns-expandable-example-content-1"
        >
          <div
            class="pf-v6-c-table__expandable-row-content"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </td>

        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>
      </tr>
    </tbody>

    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-v6-c-table__toggle"
          aria-label="Row expansion"
        >
          <button
            class="pf-v6-c-button pf-m-plain"
            id="nested-columns-expandable-example-expandable-toggle-2"
            type="button"
            aria-controls="nested-columns-expandable-example-content-2"
            aria-labelledby="nested-columns-expandable-example-node-2"
            aria-label="Toggle row"
          >
            <span class="pf-v6-c-button__icon">
              <div class="pf-v6-c-table__toggle-icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </td>

        <td
          class="pf-v6-c-table__td pf-v6-c-table__check"
          aria-label="Check row"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="nested-columns-expandable-example-checkrow-2-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="nested-columns-expandable-example-checkrow-2-check-input"
              name="nested-columns-expandable-example-checkrow-2-check-input"
              aria-label="Select row"
            />
          </label>
        </td>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Developer program"
          id="nested-columns-expandable-example-node2"
        >Developer program</th>

        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Branches"
        >Stacey Logan</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Pull requests"
        >Mark Shakshober</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Workspaces"
        >Kaliq Ray</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
          <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
            <span class="pf-v6-c-button__text">Message us!</span>
          </button>
        </td>
      </tr>
      <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>

        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>

        <td
          class="pf-v6-c-table__td"
          role="cell"
          colspan="5"
          id="nested-columns-expandable-example-content-2"
        >
          <div
            class="pf-v6-c-table__expandable-row-content"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </td>

        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>
      </tr>
    </tbody>

    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
      <tr class="pf-v6-c-table__tr" role="row">
        <td
          class="pf-v6-c-table__td pf-v6-c-table__toggle"
          aria-label="Row expansion"
        >
          <button
            class="pf-v6-c-button pf-m-plain"
            id="nested-columns-expandable-example-expandable-toggle-3"
            type="button"
            aria-controls="nested-columns-expandable-example-content-3"
            aria-labelledby="nested-columns-expandable-example-node-3"
            aria-label="Toggle row"
          >
            <span class="pf-v6-c-button__icon">
              <div class="pf-v6-c-table__toggle-icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </div>
            </span>
          </button>
        </td>

        <td
          class="pf-v6-c-table__td pf-v6-c-table__check"
          aria-label="Check row"
        >
          <label
            class="pf-v6-c-check pf-m-standalone"
            for="nested-columns-expandable-example-checkrow-3-check-input"
          >
            <input
              class="pf-v6-c-check__input"
              type="checkbox"
              id="nested-columns-expandable-example-checkrow-3-check-input"
              name="nested-columns-expandable-example-checkrow-3-check-input"
              aria-label="Select row"
            />
          </label>
        </td>

        <th
          class="pf-v6-c-table__th"
          role="columnheader"
          data-label="Developer program"
          id="nested-columns-expandable-example-node3"
        >Developer program</th>

        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Branches"
        >Stacey Logan</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Pull requests"
        >Mark Shakshober</td>
        <td
          class="pf-v6-c-table__td"
          role="cell"
          data-label="Workspaces"
        >Kaliq Ray</td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Last commit">
          <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
            <span class="pf-v6-c-button__text">Message us!</span>
          </button>
        </td>
      </tr>
      <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>

        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>

        <td
          class="pf-v6-c-table__td"
          role="cell"
          colspan="5"
          id="nested-columns-expandable-example-content-3"
        >
          <div
            class="pf-v6-c-table__expandable-row-content"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </td>

        <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
          <span class="pf-v6-screen-reader">Actions</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

```

### Nested column headers example

```html
<div class="pf-v6-c-scroll-inner-wrapper">
  <table
    class="pf-v6-c-table"
    role="grid"
    aria-label="This is a nested column header table example"
    id="table-nested-column-headers-example"
  >
    <thead class="pf-v6-c-table__thead pf-m-nested-column-header">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-border-right"
          role="columnheader"
          scope="col"
          colspan="3"
        >Pods</th>

        <th
          class="pf-v6-c-table__th pf-m-border-right"
          role="columnheader"
          scope="col"
          colspan="2"
        >Ports</th>

        <th
          class="pf-v6-c-table__th pf-m-fit-content pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
          rowspan="2"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Packets</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>
      </tr>

      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-wrap pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Source</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-wrap pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Destination</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-fit-content pf-m-border-right pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Date & Time</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-fit-content pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Source</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-fit-content pf-m-border-right pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Destination</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>
      </tr>
    </thead>

    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
    </tbody>
  </table>
</div>

```

### Nested column headers, sticky header

```html
<div class="pf-v6-c-scroll-inner-wrapper">
  <table
    class="pf-v6-c-table pf-m-grid-md pf-m-sticky-header"
    role="grid"
    aria-label="This is a sticky nested column header table example"
    id="table-nested-column-headers-sticky-header-example"
  >
    <thead class="pf-v6-c-table__thead pf-m-nested-column-header">
      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-m-border-right"
          role="columnheader"
          scope="col"
          colspan="3"
        >Pods</th>

        <th
          class="pf-v6-c-table__th pf-m-border-right"
          role="columnheader"
          scope="col"
          colspan="2"
        >Ports</th>

        <th
          class="pf-v6-c-table__th pf-m-fit-content pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
          rowspan="2"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Packets</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>
      </tr>

      <tr class="pf-v6-c-table__tr" role="row">
        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-wrap pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Source</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-wrap pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Destination</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-fit-content pf-m-border-right pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Date & Time</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-fit-content pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Source</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>

        <th
          class="pf-v6-c-table__th pf-v6-c-table__subhead pf-m-fit-content pf-m-border-right pf-v6-c-table__sort"
          role="columnheader"
          aria-sort="none"
          scope="col"
        >
          <button class="pf-v6-c-table__button">
            <span class="pf-v6-c-table__button-content">
              <span class="pf-v6-c-table__text">Destination</span>
              <span class="pf-v6-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </span>
          </button>
        </th>
      </tr>
    </thead>

    <tbody class="pf-v6-c-table__tbody" role="rowgroup">
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
      <tr class="pf-v6-c-table__tr" role="row">
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-source-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-flex pf-m-nowrap">
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-c-label pf-m-teal">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">P</span>
                </span>
              </span>
            </div>
            <div class="pf-v6-l-flex__item pf-m-flex-1">
              <span class="pf-v6-c-table__text pf-m-truncate">
                <a href="#">api-pod-destination-name</a>
              </span>
            </div>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Date &amp; time">
          <div class="pf-v6-l-stack">
            <span>June 22, 2021</span>
            <span class="pf-v6-u-color-200">3:58:24 PM</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Source">
          <div class="pf-v6-l-stack">
            <span>443</span>
            <span class="pf-v6-u-color-200">(HTTPS)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Destination">
          <div class="pf-v6-l-stack">
            <span>24</span>
            <span class="pf-v6-u-color-200">(smtp)</span>
          </div>
        </td>
        <td class="pf-v6-c-table__td" role="cell" data-label="Packets">3</td>
      </tr>
    </tbody>
  </table>
</div>

```

### Nested column header modifier usage

## Favorites

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-nested-column-header` | `<thead>` | Modifies a table header to handle nested header cells. |
| `.pf-m-border-right` | `<th>`, `<td>` | Modifies a table cell to show a right border. |
| `.pf-m-border-left` | `<th>`, `<td>` | Modifies a table cell to show a left border. |

### Favorites examples

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a favorites table example"
  id="table-favorites"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-favorites-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-favorites-checkrow-thead-check-input"
            name="table-favorites-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Row favorited</span>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-favorites-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-favorites-checkrow-1-check-input"
            name="table-favorites-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorited pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Starred"
          id="table-favorites-favorite-button1"
          aria-labelledby="table-favorites-node1 table-favorites-favorite-button1"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <div>
          <span id="table-favorites-node1">Repository 1</span>. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines.
        </div>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-favorites-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-favorites-checkrow-2-check-input"
            name="table-favorites-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Not starred"
          id="table-favorites-favorite-button2"
          aria-labelledby="table-favorites-node2 table-favorites-favorite-button2"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-favorites-node2">Repository 2</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-favorites-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-favorites-checkrow-3-check-input"
            name="table-favorites-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorited pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Starred"
          id="table-favorites-favorite-button3"
          aria-labelledby="table-favorites-node3 table-favorites-favorite-button3"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-favorites-node3">Repository 3</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-favorites-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-favorites-checkrow-4-check-input"
            name="table-favorites-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Not starred"
          id="table-favorites-favorite-button4"
          aria-labelledby="table-favorites-node4 table-favorites-favorite-button4"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-favorites-node4">Repository 4</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>
  </tbody>
</table>

```

### Favorites sortable example

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a sortable with favorites table example"
  id="table-favorites-sortable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort pf-v6-c-table__favorite"
        aria-label="Row favorited"
        role="columnheader"
        scope="col"
        aria-sort="none"
      >
        <div class="pf-v6-c-action-list pf-m-icons">
          <div class="pf-v6-c-action-list__item">
            <button
              class="pf-v6-c-button pf-m-favorite pf-m-plain"
              type="button"
              aria-label="Favorite all"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-button__icon-favorite">
                  <svg
                    class="pf-v6-svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                  >
                    <path
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    />
                  </svg>
                </span>
                <span class="pf-v6-c-button__icon-favorited">
                  <svg
                    class="pf-v6-svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                  >
                    <path
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
          <div class="pf-v6-c-action-list__item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Sort favorites"
            >
              <span class="pf-v6-c-button__icon">
                <span class="pf-v6-c-table__sort-indicator">
                  <i class="fas fa-arrows-alt-v"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorited pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Starred"
          id="table-favorites-sortable-favorite-button1"
          aria-labelledby="table-favorites-sortable-node1 table-favorites-sortable-favorite-button1"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <div>
          <span id="table-favorites-sortable-node1">Repository 1</span>. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines.
        </div>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorited pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Starred"
          id="table-favorites-sortable-favorite-button3"
          aria-labelledby="table-favorites-sortable-node3 table-favorites-sortable-favorite-button3"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-favorites-sortable-node3">Repository 3</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Not starred"
          id="table-favorites-sortable-favorite-button2"
          aria-labelledby="table-favorites-sortable-node2 table-favorites-sortable-favorite-button2"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-favorites-sortable-node2">Repository 2</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Not starred"
          id="table-favorites-sortable-favorite-button4"
          aria-labelledby="table-favorites-sortable-node4 table-favorites-sortable-favorite-button4"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-favorites-sortable-node4">Repository 4</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__favorite" role="cell">
        <button
          class="pf-v6-c-button pf-m-favorite pf-m-plain"
          type="button"
          aria-label="Not starred"
          id="table-favorites-sortable-favorite-button5"
          aria-labelledby="table-favorites-sortable-node5 table-favorites-sortable-favorite-button5"
        >
          <span class="pf-v6-c-button__icon">
            <span class="pf-v6-c-button__icon-favorite">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-button__icon-favorited">
              <svg
                class="pf-v6-svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </span>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-favorites-sortable-node5">Repository 5</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Favorites accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="grid"` | `.pf-v6-c-table` | Identifies the element that serves as the grid widget container. **Required** |
| `aria-label` | `.pf-v6-c-table` | Provides an accessible name for the table when a descriptive `<caption>` or `<h*>` is not available. **Required in the absence of `<caption>` or `<h*>`** |
| `data-label="[td description]"` | `<td>` | This attribute replaces table header in mobile viewport. It is rendered by `::before` pseudo element. |

### Favorites usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__favorite` | `td` | Initiates a favorite table body cell. |
| `.pf-m-favorited` | `.pf-v6-c-table__favorite` | Modifies a favorite cell for the favorited state. |
| `.pf-m-favorite` | `.pf-v6-c-table__sort` | Modifies a sortable table header cell for use with a favorites column. |

## Draggable rows

### Draggable rows example

```html isBeta
<div
  id="table-draggable-rows-help"
>Activate the reorder button and use the arrow keys to reorder the list or use your mouse to drag/reorder. Press escape to cancel the reordering.</div>
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a table with draggable rows example"
  id="table-draggable-rows"
>
  <caption class="pf-v6-c-table__caption">This is the table caption</caption>

  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Drag row</span>
      </th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__draggable" role="cell">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          disabled
          aria-pressed="false"
          aria-label="Reorder"
          aria-describedby="table-draggable-rows-help"
          id="table-draggable-rows-row-1-draggable-button"
          aria-labelledby="table-draggable-rows-row-1-draggable-button table-draggable-rows-row-1-node"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-grip-vertical" aria-hidden="true"></i>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-draggable-rows-row-1-node">Draggable icon disabled</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__draggable" role="cell">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-pressed="false"
          aria-label="Reorder"
          aria-describedby="table-draggable-rows-help"
          id="table-draggable-rows-row-2-draggable-button"
          aria-labelledby="table-draggable-rows-row-2-draggable-button table-draggable-rows-row-2-node"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-grip-vertical" aria-hidden="true"></i>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-draggable-rows-row-2-node">Table cell</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-m-ghost-row" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__draggable" role="cell">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          disabled
          aria-pressed="false"
          aria-label="Reorder"
          aria-describedby="table-draggable-rows-help"
          id="table-draggable-rows-row-3-draggable-button"
          aria-labelledby="table-draggable-rows-row-3-draggable-button table-draggable-rows-row-3-node"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-grip-vertical" aria-hidden="true"></i>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-draggable-rows-row-3-node">Ghost row</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td pf-v6-c-table__draggable" role="cell">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-pressed="false"
          aria-label="Reorder"
          aria-describedby="table-draggable-rows-help"
          id="table-draggable-rows-row-4-draggable-button"
          aria-labelledby="table-draggable-rows-row-4-draggable-button table-draggable-rows-row-4-node"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-grip-vertical" aria-hidden="true"></i>
          </span>
        </button>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        <span id="table-draggable-rows-row-4-node">Table cell</span>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>
<div
  class="pf-v6-screen-reader"
  aria-live="assertive"
>This is the aria-live section that provides real-time feedback to the user.</div>

```

### Draggable rows accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-pressed="true or false"` | `.pf-v6-c-table__draggable .pf-v6-c-button` | Indicates whether the button is currently pressed or not.  |
| `aria-live` | `[element with live text]` | To give screen reader users live feedback about what's happening during interaction with the table, both during drag and drop interactions and keyboard interactions. **Highly Recommended** |
| `aria-describedby="[id value of applicable content]"` | `.pf-v6-c-table__draggable .pf-v6-c-button` | Gives the draggable button an accessible description by referring to the textual content that describes how to use the button to drag elements. The example here uses a `<div id="table-draggable-rows-help"></div>`. **Highly recommended** |
| `aria-labelledby="[id of .pf-v6-c-table__draggable .pf-v6-c-button] [id of row title text]"` | `.pf-v6-c-table__draggable .pf-v6-c-button` | Provides an accessible name for the draggable button. |
| `id="[]"` | `.pf-v6-c-table__draggable .pf-v6-c-button`, `[element with row title text]` | Gives the button and the text element accessible IDs. |

### Draggable rows usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__draggable` | `<td>` | Initiates a draggable table cell. |
| `.pf-m-drag-over` | `.pf-v6-c-table` | Modifies the table to indicate that a draggable item is being dragged over the table. |

## Striped

Basic striped table rows are supported on tables with a single `<tbody>` element and expandable tables by applying `.pf-m-striped` to the `.pf-v6-c-table` element, which applies striped styling to odd table rows. For more complex tables, `.pf-m-striped` can be applied directly to the `<tbody>` and `<tr>` elements. The class `.pf-m-striped-even` can be applied to `<tbody>` elements to apply striped styling to the even rows in the table body. This is for use in tables with multiple `<tbody>` elements where even row striping may be needed to ensure visual consistency.

### Striped table example

```html
<table
  class="pf-v6-c-table pf-m-grid-md pf-m-striped"
  role="grid"
  aria-label="This is a striped table example"
  id="table-striped"
>
  <caption class="pf-v6-c-table__caption">This is the table caption</caption>

  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 1</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 3</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 4</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Striped expandable table example

```html
<table
  class="pf-v6-c-table pf-m-grid-lg pf-m-striped pf-m-expandable"
  role="grid"
  aria-label="Striped expandable table example"
  id="table-striped-expandable"
>
  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Expand row</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__check"
        aria-label="Row select"
        role="columnheader"
        scope="col"
      >
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-striped-expandable-checkrow-thead-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-striped-expandable-checkrow-thead-check-input"
            name="table-striped-expandable-checkrow-thead-check-input"
            aria-label="Select all rows"
          />
        </label>
      </th>

      <th
        class="pf-v6-c-table__th pf-m-width-30 pf-v6-c-table__sort pf-m-selected"
        role="columnheader"
        aria-sort="ascending"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Repositories</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Branches</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__sort"
        role="columnheader"
        aria-sort="none"
        scope="col"
      >
        <button class="pf-v6-c-table__button">
          <span class="pf-v6-c-table__button-content">
            <span class="pf-v6-c-table__text">Pull requests</span>
            <span class="pf-v6-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </span>
        </button>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Links</span>
      </th>

      <th
        class="pf-v6-c-table__th pf-v6-c-table__cell-empty"
        role="columnheader"
        scope="col"
      >
        <span class="pf-v6-screen-reader">Actions</span>
      </th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-striped-expandable-expandable-toggle-1"
          type="button"
          aria-expanded="true"
          aria-controls="table-striped-expandable-content-1"
          aria-labelledby="table-striped-expandable-node-1"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-striped-expandable-checkrow-1-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-striped-expandable-checkrow-1-check-input"
            name="table-striped-expandable-checkrow-1-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-striped-expandable-node1">Node 1</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 1</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>

      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="4"
        id="table-striped-expandable-content-1"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__cell-empty">
        <span class="pf-v6-screen-reader">Actions</span>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-plain"
          id="table-striped-expandable-expandable-toggle-2"
          type="button"
          aria-controls="table-striped-expandable-content-2"
          aria-labelledby="table-striped-expandable-node-2"
          aria-label="Toggle row"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-striped-expandable-checkrow-2-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-striped-expandable-checkrow-2-check-input"
            name="table-striped-expandable-checkrow-2-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-striped-expandable-node2">Node 2</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 2</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-v6-c-table__expandable-row" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-striped-expandable-content-2"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-striped-expandable-expandable-toggle-3"
          type="button"
          aria-expanded="true"
          aria-controls="table-striped-expandable-content-3"
          aria-labelledby="table-striped-expandable-node-3"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-striped-expandable-checkrow-3-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-striped-expandable-checkrow-3-check-input"
            name="table-striped-expandable-checkrow-3-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-striped-expandable-node3">Node 3</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 3</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td"
        role="cell"
        colspan="7"
        id="table-striped-expandable-content-3"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-expanded" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
      <td
        class="pf-v6-c-table__td pf-v6-c-table__toggle"
        aria-label="Row expansion"
      >
        <button
          class="pf-v6-c-button pf-m-expanded pf-m-plain"
          id="table-striped-expandable-expandable-toggle-4"
          type="button"
          aria-expanded="true"
          aria-controls="table-striped-expandable-content-4"
          aria-labelledby="table-striped-expandable-node-4"
          aria-label="Toggle row"
          aria-describedby="true"
        >
          <span class="pf-v6-c-button__icon">
            <div class="pf-v6-c-table__toggle-icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </div>
          </span>
        </button>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__check" aria-label="Check row">
        <label
          class="pf-v6-c-check pf-m-standalone"
          for="table-striped-expandable-checkrow-4-check-input"
        >
          <input
            class="pf-v6-c-check__input"
            type="checkbox"
            id="table-striped-expandable-checkrow-4-check-input"
            name="table-striped-expandable-checkrow-4-check-input"
            aria-label="Select row"
          />
        </label>
      </td>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        data-label="Data label name"
      >
        <div id="table-striped-expandable-node4">Node 4</div>
        <a href="#">siemur/test-space</a>
      </th>

      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Action">
        <a href="#">Link 4</a>
      </td>

      <td class="pf-v6-c-table__td pf-v6-c-table__action">
        <button
          class="pf-v6-c-menu-toggle pf-m-plain"
          type="button"
          aria-expanded="false"
          aria-label="Table actions"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
      </td>
    </tr>

    <tr
      class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
      role="row"
    >
      <td
        class="pf-v6-c-table__td pf-m-no-padding"
        role="cell"
        colspan="7"
        id="table-striped-expandable-content-4"
      >
        <div
          class="pf-v6-c-table__expandable-row-content"
        >Expandable row content has no padding.</div>
      </td>
    </tr>
  </tbody>
</table>

```

### Striped multiple tbody example

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a striped tbody example"
  id="table-striped-tbody"
>
  <caption class="pf-v6-c-table__caption">This is the table caption</caption>

  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody pf-m-striped" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        tbody 1 - Repository 1
        <br />
        <small>(odd rows striped)</small>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >tbody 1 - Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        tbody 1 - Repository 3
        <br />
        <small>(odd rows striped)</small>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>

  <tbody class="pf-v6-c-table__tbody pf-m-striped-even" role="rowgroup">
    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >tbody 2 - Repository 4</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        tbody 2 - Repository 5
        <br />
        <small>(even rows striped using `.pf-m-striped-even`)</small>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >tbody 2 - Repository 6</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td class="pf-v6-c-table__td" role="cell" data-label="Repository name">
        tbody 2 - Repository 7
        <br />
        <small>(even rows striped using `.pf-m-striped-even`)</small>
      </td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Striped tr example

```html
<table
  class="pf-v6-c-table pf-m-grid-md"
  role="grid"
  aria-label="This is a striped tr example"
  id="table-striped-tr"
>
  <caption class="pf-v6-c-table__caption">This is the table caption</caption>

  <thead class="pf-v6-c-table__thead">
    <tr class="pf-v6-c-table__tr" role="row">
      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Repositories</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Branches</th>

      <th
        class="pf-v6-c-table__th"
        role="columnheader"
        scope="col"
      >Pull requests</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Workspaces</th>

      <th class="pf-v6-c-table__th" role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>

  <tbody class="pf-v6-c-table__tbody" role="rowgroup">
    <tr class="pf-v6-c-table__tr pf-m-striped" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 1</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 2</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr pf-m-striped" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 3</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>

    <tr class="pf-v6-c-table__tr" role="row">
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Repository name"
      >Repository 4</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Branches">10</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Pull requests">25</td>
      <td class="pf-v6-c-table__td" role="cell" data-label="Workspaces">5</td>
      <td
        class="pf-v6-c-table__td"
        role="cell"
        data-label="Last commit"
      >2 days ago</td>
    </tr>
  </tbody>
</table>

```

### Striped table usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-striped` | `.pf-v6-c-table`, `tbody`, `tr` | Modifies odd table rows to be striped. |
| `.pf-m-striped-even` | `tbody` | Modifies even table rows to be striped. For use in tables with multiple `tbody` elements where adjacent `tbody` elements need even row striping to maintain visual consistency. |

## Documentation

### Overview

Because the table component is not used for layout and presents tabular data only, it requires the use of `role="grid"`. Expandable table content (`.pf-v6-c-table__expandable-content`) is placed within a singular `<td>` per expandable row, that can span multiple columns.

### Role="grid"

Applying `role="grid"` to tables enhances accessible interaction while in table layout, however the responsive, css grid based layout can cause unexpected interactions. Therefore, for css grid layout, it is recommended that `role="grid"` be removed.

### Sortable tables

Table columns may shift when expanding/collapsing. To address this, set `.pf-m-fit-content`, or assign a width `.pf-m-width-[width]` to the corresponding `<th>` defining the column or `<td>` within the column. Width values are `[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90]` or `max`.

### Table header cells

By default, all table header cells are set to `white-space: nowrap`. If a `<th>`'s content needs to wrap, apply `.pf-m-wrap`.

### Implementation support

* One expandable toggle button, positioned in the first cell of a non-expandable row, preceding an expandable row.
* One checkbox or radio input, positioned in the first or second cell of a non-expandable row.
* One action button, positioned in the last cell of a non-expandable row.
* Tabular data.
* Compact presentation modifier (not compatible with expandable table).
