---
id: Notification drawer
section: components
cssPrefix: pf-v6-c-notification-drawer
---## Examples

### Basic

```html
<div class="pf-v6-c-notification-drawer">
  <div class="pf-v6-c-notification-drawer__header">
    <h1 class="pf-v6-c-notification-drawer__header-title">Notifications</h1>
    <span class="pf-v6-c-notification-drawer__header-status">3 unread</span>
    <div class="pf-v6-c-notification-drawer__header-action">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Menu toggle"
        id="notification-drawer-basic-example-menu-toggle"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-notification-drawer__header-action-close">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Close"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-notification-drawer__body">
    <ul class="pf-v6-c-notification-drawer__list" role="list">
      <li
        class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-info"
        tabindex="0"
      >
        <div class="pf-v6-c-notification-drawer__list-item-header">
          <span class="pf-v6-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-info-circle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
            <span class="pf-v6-screen-reader">Info notification:</span>
            Unread
            info notification title
          </h2>
        </div>
        <div class="pf-v6-c-notification-drawer__list-item-action">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Menu toggle"
            id="notification-drawer-basic-example-menu-toggle-1"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-description"
        >This is an info notification description.</div>
        <div
          class="pf-v6-c-notification-drawer__list-item-timestamp"
        >5 minutes ago</div>
      </li>

      <li
        class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
        tabindex="0"
      >
        <div class="pf-v6-c-notification-drawer__list-item-header">
          <span class="pf-v6-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
          </span>
          <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
            <span class="pf-v6-screen-reader">Custom notification:</span>
            Unread
            recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
          </h2>
        </div>
        <div class="pf-v6-c-notification-drawer__list-item-action">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Menu toggle"
            id="notification-drawer-basic-example-menu-toggle-3"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-description"
        >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
        <div
          class="pf-v6-c-notification-drawer__list-item-timestamp"
        >10 minutes ago</div>
      </li>

      <li
        class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
        tabindex="0"
      >
        <div class="pf-v6-c-notification-drawer__list-item-header">
          <span class="pf-v6-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
          </span>
          <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
            <span class="pf-v6-screen-reader">Custom notification:</span>
            Unread
            recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
          </h2>
        </div>
        <div class="pf-v6-c-notification-drawer__list-item-action">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Menu toggle"
            id="notification-drawer-basic-example-menu-toggle-4"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-description"
        >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
        <div
          class="pf-v6-c-notification-drawer__list-item-timestamp"
        >20 minutes ago</div>
      </li>
      <li
        class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"
      >
        <div class="pf-v6-c-notification-drawer__list-item-header">
          <span class="pf-v6-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
            <span class="pf-v6-screen-reader">Warning notification:</span>
            Read warning notification title
          </h2>
        </div>
        <div class="pf-v6-c-notification-drawer__list-item-action">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Menu toggle"
            id="notification-drawer-basic-example-menu-toggle-5"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-description"
        >This is a warning notification description.</div>
        <div
          class="pf-v6-c-notification-drawer__list-item-timestamp"
        >20 minutes ago</div>
      </li>
      <li
        class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
      >
        <div class="pf-v6-c-notification-drawer__list-item-header">
          <span class="pf-v6-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
            <span class="pf-v6-screen-reader">Success notification:</span>
            Read success notification title
          </h2>
        </div>
        <div class="pf-v6-c-notification-drawer__list-item-action">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Menu toggle"
            id="notification-drawer-basic-example-menu-toggle-6"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-description"
        >This is a success notification description.</div>
        <div
          class="pf-v6-c-notification-drawer__list-item-timestamp"
        >30 minutes ago</div>
      </li>
      <li
        class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
      >
        <div class="pf-v6-c-notification-drawer__list-item-header">
          <span class="pf-v6-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
          <h2
            class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
          >
            <span class="pf-v6-screen-reader">Success notification:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
          </h2>
        </div>
        <div class="pf-v6-c-notification-drawer__list-item-action">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Menu toggle"
            id="notification-drawer-basic-example-menu-toggle-7"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-description"
        >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
        <div
          class="pf-v6-c-notification-drawer__list-item-timestamp"
        >40 minutes ago</div>
      </li>
      <li
        class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
      >
        <div class="pf-v6-c-notification-drawer__list-item-header">
          <span class="pf-v6-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
          <h2
            class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
            style="--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2"
          >
            <span class="pf-v6-screen-reader">Success notification:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
          </h2>
        </div>
        <div class="pf-v6-c-notification-drawer__list-item-action">
          <button
            class="pf-v6-c-menu-toggle pf-m-plain"
            type="button"
            aria-expanded="false"
            aria-label="Menu toggle"
            id="notification-drawer-basic-example-menu-toggle-8"
          >
            <span class="pf-v6-c-menu-toggle__icon">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-description"
        >This example uses ".pf-m-truncate" and sets "--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
        <div
          class="pf-v6-c-notification-drawer__list-item-timestamp"
        >50 minutes ago</div>
      </li>
      <li class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success">
        <div class="pf-v6-c-notification-drawer__list-item-header">
          <span class="pf-v6-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
            <span class="pf-v6-screen-reader">Success notification:</span>
            Notification drawer item title
          </h2>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-action pf-m-no-offset"
        >
          <button class="pf-v6-c-button pf-m-primary" type="button">
            <span class="pf-v6-c-button__text">Action</span>
          </button>
        </div>
        <div
          class="pf-v6-c-notification-drawer__list-item-description"
        >This example uses ".pf-m-no-offset" on the action wrapper to disable the default offset for button alignment.</div>
        <div
          class="pf-v6-c-notification-drawer__list-item-timestamp"
        >55 minutes ago</div>
      </li>
    </ul>
  </div>
</div>

```

### Groups

```html
<div class="pf-v6-c-notification-drawer">
  <div class="pf-v6-c-notification-drawer__header">
    <h1 class="pf-v6-c-notification-drawer__header-title">Notifications</h1>
    <span class="pf-v6-c-notification-drawer__header-status">9 unread</span>
    <div class="pf-v6-c-notification-drawer__header-action">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Menu toggle"
        id="notification-drawer-groups-example-menu-toggle"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
      <div class="pf-v6-c-notification-drawer__header-action-close">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Close"
        >
          <span class="pf-v6-c-button__icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-notification-drawer__body">
    <div class="pf-v6-c-notification-drawer__group-list">
      <section class="pf-v6-c-notification-drawer__group">
        <h1>
          <button
            class="pf-v6-c-notification-drawer__group-toggle"
            aria-expanded="false"
          >
            <div
              class="pf-v6-c-notification-drawer__group-toggle-title"
            >First notification group</div>
            <div class="pf-v6-c-notification-drawer__group-toggle-count">
              <span class="pf-v6-c-badge pf-m-unread">2</span>
            </div>
            <span class="pf-v6-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </h1>
        <ul class="pf-v6-c-notification-drawer__list" role="list" hidden>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-info"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Info notification:</span>
                Unread
                info notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group1-menu-toggle-1"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is an info notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >5 minutes ago</div>
          </li>

          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Custom notification:</span>
                Unread
                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group1-menu-toggle-3"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >10 minutes ago</div>
          </li>

          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Custom notification:</span>
                Unread
                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group1-menu-toggle-4"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >20 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Warning notification:</span>
                Read warning notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group1-menu-toggle-5"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a warning notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >20 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Success notification:</span>
                Read success notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group1-menu-toggle-6"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a success notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >30 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2
                class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
              >
                <span class="pf-v6-screen-reader">Success notification:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group1-menu-toggle-7"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >40 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2
                class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
                style="--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2"
              >
                <span class="pf-v6-screen-reader">Success notification:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group1-menu-toggle-8"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-truncate" and sets "--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >50 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Success notification:</span>
                Notification drawer item title
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-action pf-m-no-offset"
            >
              <button class="pf-v6-c-button pf-m-primary" type="button">
                <span class="pf-v6-c-button__text">Action</span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-no-offset" on the action wrapper to disable the default offset for button alignment.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >55 minutes ago</div>
          </li>
        </ul>
      </section>
      <section class="pf-v6-c-notification-drawer__group pf-m-expanded">
        <h1>
          <button
            class="pf-v6-c-notification-drawer__group-toggle"
            aria-expanded="true"
          >
            <div
              class="pf-v6-c-notification-drawer__group-toggle-title"
            >Second notification group</div>
            <div class="pf-v6-c-notification-drawer__group-toggle-count">
              <span class="pf-v6-c-badge pf-m-unread">2</span>
            </div>
            <span class="pf-v6-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </h1>
        <ul class="pf-v6-c-notification-drawer__list" role="list">
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-info"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Info notification:</span>
                Unread
                info notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group2-menu-toggle-1"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is an info notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >5 minutes ago</div>
          </li>

          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Custom notification:</span>
                Unread
                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group2-menu-toggle-3"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >10 minutes ago</div>
          </li>

          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Custom notification:</span>
                Unread
                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group2-menu-toggle-4"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >20 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Warning notification:</span>
                Read warning notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group2-menu-toggle-5"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a warning notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >20 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Success notification:</span>
                Read success notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group2-menu-toggle-6"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a success notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >30 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2
                class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
              >
                <span class="pf-v6-screen-reader">Success notification:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group2-menu-toggle-7"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >40 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2
                class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
                style="--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2"
              >
                <span class="pf-v6-screen-reader">Success notification:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group2-menu-toggle-8"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-truncate" and sets "--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >50 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Success notification:</span>
                Notification drawer item title
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-action pf-m-no-offset"
            >
              <button class="pf-v6-c-button pf-m-primary" type="button">
                <span class="pf-v6-c-button__text">Action</span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-no-offset" on the action wrapper to disable the default offset for button alignment.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >55 minutes ago</div>
          </li>
        </ul>
      </section>
      <section class="pf-v6-c-notification-drawer__group">
        <h1>
          <button
            class="pf-v6-c-notification-drawer__group-toggle"
            aria-expanded="false"
          >
            <div
              class="pf-v6-c-notification-drawer__group-toggle-title"
            >Third notification group</div>
            <div class="pf-v6-c-notification-drawer__group-toggle-count">
              <span class="pf-v6-c-badge pf-m-unread">3</span>
            </div>
            <span class="pf-v6-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </h1>
        <ul class="pf-v6-c-notification-drawer__list" role="list" hidden>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-info"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Info notification:</span>
                Unread
                info notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group3-menu-toggle-1"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is an info notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >5 minutes ago</div>
          </li>

          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Custom notification:</span>
                Unread
                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group3-menu-toggle-3"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >10 minutes ago</div>
          </li>

          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Custom notification:</span>
                Unread
                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group3-menu-toggle-4"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >20 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Warning notification:</span>
                Read warning notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group3-menu-toggle-5"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a warning notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >20 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Success notification:</span>
                Read success notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group3-menu-toggle-6"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a success notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >30 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2
                class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
              >
                <span class="pf-v6-screen-reader">Success notification:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group3-menu-toggle-7"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >40 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2
                class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
                style="--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2"
              >
                <span class="pf-v6-screen-reader">Success notification:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group3-menu-toggle-8"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-truncate" and sets "--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >50 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Success notification:</span>
                Notification drawer item title
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-action pf-m-no-offset"
            >
              <button class="pf-v6-c-button pf-m-primary" type="button">
                <span class="pf-v6-c-button__text">Action</span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-no-offset" on the action wrapper to disable the default offset for button alignment.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >55 minutes ago</div>
          </li>
        </ul>
      </section>
      <section class="pf-v6-c-notification-drawer__group">
        <h1>
          <button
            class="pf-v6-c-notification-drawer__group-toggle"
            aria-expanded="false"
          >
            <div
              class="pf-v6-c-notification-drawer__group-toggle-title"
            >Fourth notification group</div>
            <div class="pf-v6-c-notification-drawer__group-toggle-count">
              <span class="pf-v6-c-badge pf-m-unread">2</span>
            </div>
            <span class="pf-v6-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </h1>
        <ul class="pf-v6-c-notification-drawer__list" role="list" hidden>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-info"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Info notification:</span>
                Unread
                info notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group4-menu-toggle-1"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is an info notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >5 minutes ago</div>
          </li>

          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Custom notification:</span>
                Unread
                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group4-menu-toggle-3"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >10 minutes ago</div>
          </li>

          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-custom"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Custom notification:</span>
                Unread
                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group4-menu-toggle-4"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >20 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Warning notification:</span>
                Read warning notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group4-menu-toggle-5"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a warning notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >20 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Success notification:</span>
                Read success notification title
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group4-menu-toggle-6"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a success notification description.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >30 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2
                class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
              >
                <span class="pf-v6-screen-reader">Success notification:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group4-menu-toggle-7"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >40 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2
                class="pf-v6-c-notification-drawer__list-item-header-title pf-m-truncate"
                style="--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2"
              >
                <span class="pf-v6-screen-reader">Success notification:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.
              </h2>
            </div>
            <div class="pf-v6-c-notification-drawer__list-item-action">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="notification-drawer-groups-example-group4-menu-toggle-8"
              >
                <span class="pf-v6-c-menu-toggle__icon">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-truncate" and sets "--pf-v6-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >50 minutes ago</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-read pf-m-success"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Success notification:</span>
                Notification drawer item title
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-action pf-m-no-offset"
            >
              <button class="pf-v6-c-button pf-m-primary" type="button">
                <span class="pf-v6-c-button__text">Action</span>
              </button>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This example uses ".pf-m-no-offset" on the action wrapper to disable the default offset for button alignment.</div>
            <div
              class="pf-v6-c-notification-drawer__list-item-timestamp"
            >55 minutes ago</div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</div>

```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-v6-c-notification-drawer__group-toggle` | Indicates that the group notification list is hidden. |
| `aria-expanded="true"` | `.pf-v6-c-notification-drawer__group-toggle` | Indicates that the group notification list is visible. |
| `hidden` | `.pf-v6-c-notification-drawer__list` | Indicates that the group notification list is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `tabindex="0"` | `.pf-v6-c-notification-drawer__list-item.pf-m-hoverable` | Inserts the hoverable list item into the tab order of the page so that it is focusable. |
| `aria-hidden="true"` | `.pf-v6-c-notification-drawer__group-toggle-icon > *`, `.pf-v6-c-notification-drawer__list-item-header-icon > *` | Hides icon for assistive technologies. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-notification-drawer` | `<div>` | Initiates the notification drawer. **Required** |
| `.pf-v6-c-notification-drawer__header` | `<div>` | Initiates the notification drawer header. **Required** |
| `.pf-v6-c-notification-drawer__header-title` | `<h1>` | Initiates the notification drawer header title. **Required** |
| `.pf-v6-c-notification-drawer__header-status` | `<span>` | Initiates the notification drawer header status. |
| `.pf-v6-c-notification-drawer__header-action` | `<div>` | Initiates the notification drawer header action. |
| `.pf-v6-c-notification-drawer__header-action-close` | `<div>` | Initiates the notification drawer header action button. |
| `.pf-v6-c-notification-drawer__body` | `<div>` | Initiates the notification drawer body. **Required** |
| `.pf-v6-c-notification-drawer__list` | `<ul>` | Initiates a notification list. **Required** |
| `.pf-v6-c-notification-drawer__list-item` | `<li>` | Initiates a notification list item. Always use with a state modifier class. **Required** |
| `.pf-v6-c-notification-drawer__list-item-header` | `<div>` | Initiates a notification list item header. **Required** |
| `.pf-v6-c-notification-drawer__list-item-header-icon` | `<span>` | Initiates a notification list item header icon. **Required** |
| `.pf-v6-c-notification-drawer__list-item-header-title` | `<h2>` | Initiates a notification list item header title. **Required** |
| `.pf-v6-c-notification-drawer__list-item-action` | `<div>` | Initiates a notification list item action. |
| `.pf-v6-c-notification-drawer__list-item-description` | `<div>` | Initiates a notification list item description. **Required** |
| `.pf-v6-c-notification-drawer__list-item-timestamp` | `<div>` | Initiates a notification list item timestamp. **Required** |
| `.pf-v6-c-notification-drawer__group-list` | `<div>` | Initiates a notification group list. **Required when notifications are grouped** |
| `.pf-v6-c-notification-drawer__group` | `<section>` | Initiates a notification group. **Required** |
| `.pf-v6-c-notification-drawer__group-toggle` | `<button>` | Initiates a notification group toggle. **Required** |
| `.pf-v6-c-notification-drawer__group-title` | `<div>` | Initiates a notification group toggle title. **Required** |
| `.pf-v6-c-notification-drawer__group-count` | `<div>` | Initiates a notification group toggle count. |
| `.pf-v6-c-notification-drawer__group-icon` | `<span>` | Initiates a notification group toggle icon. **Required** |
| `.pf-m-custom` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the custom state. |
| `.pf-m-info` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the info state. |
| `.pf-m-warning` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the warning state. |
| `.pf-m-danger` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the danger state. |
| `.pf-m-success` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the success state. |
| `.pf-m-read` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the read state. |
| `.pf-m-hoverable` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item hover states to inidicate it is clickable. |
| `.pf-m-expanded` | `.pf-v6-c-notification-drawer__group` | Modifies a notification group for the expanded state. |
| `.pf-m-truncate` | `.pf-v6-c-notification-drawer__list-item-header-title` |  Modifies the title to display a single line and truncate any overflow text with ellipses. **Note:** you can specify the max number of lines to show by setting the `--pf-v6-c-notification-drawer__list-item-header-title--max-lines` (the default value is `1`). |
| `.pf-m-no-offset` | `.pf-v6-c-notification-drawer__list-item-action` | Modifies a notification item action to remove the vertical offset for action alignment. |
