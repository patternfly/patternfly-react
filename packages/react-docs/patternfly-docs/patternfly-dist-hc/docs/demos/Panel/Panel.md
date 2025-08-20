---
id: Panel
section: components
---## Demos

### With a menu

```html
<div class="pf-v6-c-panel pf-m-raised">
  <div class="pf-v6-c-panel__header">Header content</div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__menu">
      <div class="pf-v6-c-menu pf-m-plain">
        <div class="pf-v6-c-menu__content">
          <ul class="pf-v6-c-menu__list" role="menu">
            <li class="pf-v6-c-menu__list-item" role="none">
              <button class="pf-v6-c-menu__item" type="button" role="menuitem">
                <span class="pf-v6-c-menu__item-main">
                  <span class="pf-v6-c-menu__item-text">Action</span>
                </span>
              </button>
            </li>
            <li class="pf-v6-c-menu__list-item" role="none">
              <a class="pf-v6-c-menu__item" href="#" role="menuitem">
                <span class="pf-v6-c-menu__item-main">
                  <span class="pf-v6-c-menu__item-text">Link</span>
                </span>
              </a>
            </li>
            <li class="pf-v6-c-menu__list-item pf-m-disabled" role="none">
              <button
                class="pf-v6-c-menu__item"
                type="button"
                disabled
                role="menuitem"
              >
                <span class="pf-v6-c-menu__item-main">
                  <span class="pf-v6-c-menu__item-text">Disabled action</span>
                </span>
              </button>
            </li>
            <li class="pf-v6-c-menu__list-item pf-m-disabled" role="none">
              <a
                class="pf-v6-c-menu__item"
                href="#"
                aria-disabled="true"
                tabindex="-1"
                role="menuitem"
              >
                <span class="pf-v6-c-menu__item-main">
                  <span class="pf-v6-c-menu__item-text">Disabled link</span>
                </span>
              </a>
            </li>
            <li class="pf-v6-c-menu__list-item pf-m-aria-disabled" role="none">
              <button
                class="pf-v6-c-menu__item"
                type="button"
                aria-disabled="true"
                role="menuitem"
              >
                <span class="pf-v6-c-menu__item-main">
                  <span class="pf-v6-c-menu__item-text">Aria-disabled action</span>
                </span>
              </button>
            </li>
            <li class="pf-v6-c-menu__list-item pf-m-aria-disabled" role="none">
              <a
                class="pf-v6-c-menu__item"
                href="#"
                aria-disabled="true"
                role="menuitem"
              >
                <span class="pf-v6-c-menu__item-main">
                  <span class="pf-v6-c-menu__item-text">Aria-disabled link</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-panel__footer">Footer content</div>
</div>

```
