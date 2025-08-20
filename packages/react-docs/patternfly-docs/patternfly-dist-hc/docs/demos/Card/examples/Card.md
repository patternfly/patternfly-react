---
id: Card
section: components
wrapperTag: div
---import './Card.css'

## Demos

### Horizontal grid collapsed

```html
<div class="pf-v6-c-card" id="card-demo-horizontal-grid-collapsed-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        id="card-demo-horizontal-grid-collapsed-example-toggle"
        type="button"
        aria-labelledby="card-demo-horizontal-grid-collapsed-example-title card-demo-horizontal-grid-collapsed-example-toggle"
        aria-label="Details"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-card__header-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Menu toggle"
        id="card-demo-horizontal-grid-collapsed-example-dropdown-kebab-right-aligned"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-card__header-main">
      <div class="pf-v6-l-split pf-m-gutter pf-m-wrap">
        <div class="pf-v6-c-card__title">
          <h2
            class="pf-v6-c-card__title-text"
            id="card-demo-horizontal-grid-collapsed-example-title"
          >Getting started</h2>
        </div>
        <div class="pf-v6-c-label-group">
          <div class="pf-v6-c-label-group__main">
            <ul
              class="pf-v6-c-label-group__list"
              role="list"
              aria-label="Group of labels"
            >
              <li class="pf-v6-c-label-group__list-item">
                <span class="pf-v6-c-label pf-m-compact">
                  <span class="pf-v6-c-label__content">
                    <span class="pf-v6-c-label__icon">
                      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                    </span>
                    <span class="pf-v6-c-label__text">Set up your cluster</span>
                  </span>
                </span>
              </li>
              <li class="pf-v6-c-label-group__list-item">
                <span class="pf-v6-c-label pf-m-compact pf-m-purple">
                  <span class="pf-v6-c-label__content">
                    <span class="pf-v6-c-label__icon">
                      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                    </span>
                    <span class="pf-v6-c-label__text">Guided tours</span>
                  </span>
                </span>
              </li>
              <li class="pf-v6-c-label-group__list-item">
                <span class="pf-v6-c-label pf-m-compact pf-m-green">
                  <span class="pf-v6-c-label__content">
                    <span class="pf-v6-c-label__icon">
                      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                    </span>
                    <span class="pf-v6-c-label__text">Quick starts</span>
                  </span>
                </span>
              </li>
              <li class="pf-v6-c-label-group__list-item">
                <button
                  class="pf-v6-c-label pf-m-compact pf-m-overflow"
                  type="button"
                >
                  <span class="pf-v6-c-label__content">
                    <span class="pf-v6-c-label__text">1 more</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Horizontal grid expanded

```html
<div
  class="pf-v6-c-card pf-m-expanded"
  id="card-demo-horizontal-grid-expanded-example"
>
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-toggle">
      <button
        class="pf-v6-c-button pf-m-plain"
        id="card-demo-horizontal-grid-expanded-example-toggle"
        type="button"
        aria-labelledby="card-demo-horizontal-grid-expanded-example-title card-demo-horizontal-grid-expanded-example-toggle"
        aria-label="Details"
      >
        <span class="pf-v6-c-button__icon pf-m-start">
          <span class="pf-v6-c-card__header-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-card__actions">
      <button
        class="pf-v6-c-menu-toggle pf-m-plain"
        type="button"
        aria-expanded="false"
        aria-label="Menu toggle"
        id="card-demo-horizontal-grid-expanded-example-dropdown-kebab-right-aligned"
      >
        <span class="pf-v6-c-menu-toggle__icon">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-card__header-main">
      <div class="pf-v6-c-card__title">
        <h2
          class="pf-v6-c-card__title-text"
          id="card-demo-horizontal-grid-expanded-example-title"
        >Getting started</h2>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-card__expandable-content">
    <div class="pf-v6-c-card__body">
      <div
        class="pf-v6-l-grid pf-m-all-6-col-on-md pf-m-all-3-col-on-lg pf-m-gutter"
      >
        <div
          class="pf-v6-l-flex pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"
        >
          <div
            class="pf-v6-l-flex pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"
          >
            <span class="pf-v6-c-label pf-m-blue">
              <span class="pf-v6-c-label__content">
                <span class="pf-v6-c-label__icon">
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                </span>
                <span class="pf-v6-c-label__text">Set up your cluster</span>
              </span>
            </span>
            <p>Continue setting up your cluster to access all you can in the Console</p>
            <ul class="pf-v6-c-list pf-m-plain" role="list">
              <li>
                <a href="#">Add identity provider</a>
              </li>
              <li>
                <a href="#">Configure alert receivers</a>
              </li>
              <li>
                <a href="#">Configure default ingress certificate</a>
              </li>
            </ul>
          </div>
          <a class="pf-v6-c-button pf-m-inline pf-m-link" href="#">
            <span class="pf-v6-c-button__text">View all set up cluster steps</span>
            <span class="pf-v6-c-button__icon pf-m-end">
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </span>
          </a>
        </div>
        <div
          class="pf-v6-l-flex pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"
        >
          <div
            class="pf-v6-l-flex pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"
          >
            <span class="pf-v6-c-label pf-m-purple">
              <span class="pf-v6-c-label__content">
                <span class="pf-v6-c-label__icon">
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                </span>
                <span class="pf-v6-c-label__text">Guided tours</span>
              </span>
            </span>
            <p>Tour some of the key features around the console</p>
            <ul class="pf-v6-c-list pf-m-plain" role="list">
              <li>
                <a href="#">Tour the console</a>
              </li>
              <li>
                <a href="#">Explore the Developer perspective</a>
              </li>
            </ul>
          </div>
          <a class="pf-v6-c-button pf-m-inline pf-m-link" href="#">
            <span class="pf-v6-c-button__text">View all guided tours</span>
            <span class="pf-v6-c-button__icon pf-m-end">
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </span>
          </a>
        </div>
        <div
          class="pf-v6-l-flex pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"
        >
          <div
            class="pf-v6-l-flex pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"
          >
            <span class="pf-v6-c-label pf-m-green">
              <span class="pf-v6-c-label__content">
                <span class="pf-v6-c-label__icon">
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                </span>
                <span class="pf-v6-c-label__text">Quick starts</span>
              </span>
            </span>
            <p>Get started with features using our step-by-step documentation</p>
            <ul class="pf-v6-c-list pf-m-plain" role="list">
              <li>
                <a href="#">Getting started with Serverless</a>
              </li>
              <li>
                <a href="#">Explore virtualization</a>
              </li>
              <li>
                <a href="#">Build pipelines</a>
              </li>
            </ul>
          </div>
          <a class="pf-v6-c-button pf-m-inline pf-m-link" href="#">
            <span class="pf-v6-c-button__text">View all quick starts</span>
            <span class="pf-v6-c-button__icon pf-m-end">
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </span>
          </a>
        </div>
        <div
          class="pf-v6-l-flex pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"
        >
          <div
            class="pf-v6-l-flex pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"
          >
            <span class="pf-v6-c-label pf-m-orange">
              <span class="pf-v6-c-label__content">
                <span class="pf-v6-c-label__icon">
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                </span>
                <span class="pf-v6-c-label__text">Learning resources</span>
              </span>
            </span>
            <p>Learn about new features within the Console and get started with demo apps</p>
            <ul class="pf-v6-c-list pf-m-plain" role="list">
              <li>
                <a href="#">See what's possible with the Explore page</a>
              </li>
              <li>
                <a href="#">
                  OpenShift 4.5: Top Tasks
                  <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">Try a demo app</a>
              </li>
            </ul>
          </div>
          <a class="pf-v6-c-button pf-m-inline pf-m-link" href="#">
            <span class="pf-v6-c-button__text">View all learning resources</span>
            <span class="pf-v6-c-button__icon pf-m-end">
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Horizontal split

```html
<div class="pf-v6-c-card" id="card-demo-horizontal-split-example">
  <div class="pf-v6-l-grid pf-m-all-6-col-on-md">
    <div
      class="pf-v6-l-grid__item"
      style="min-height: 200px; background: no-repeat bottom right / auto 75% url(/assets/images/pf-background.svg) black;"
    ></div>
    <div class="pf-v6-l-grid__item">
      <div class="pf-v6-c-card__title">
        <h2 class="pf-v6-c-card__title-text">Headline</h2>
      </div>
      <div
        class="pf-v6-c-card__body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu purus, lobortis nec euismod eu, tristique ut sapien. Nullam turpis lectus, aliquet sit amet volutpat eu, semper eget quam. Maecenas in tempus diam. Aenean interdum velit sed massa aliquet, sit amet malesuada nulla hendrerit. Aenean non faucibus odio. Etiam non metus turpis. Praesent sollicitudin elit neque, id ullamcorper nibh faucibus eget.</div>
      <div class="pf-v6-c-card__footer">
        <button class="pf-v6-c-button pf-m-tertiary" type="button">
          <span class="pf-v6-c-button__text">Call to action</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Details card

```html
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 260px;"
>
  <div class="pf-v6-c-card">
    <div class="pf-v6-c-card__title">
      <h2 class="pf-v6-c-title pf-m-xl">Details</h2>
    </div>
    <div class="pf-v6-c-card__body">
      <dl class="pf-v6-c-description-list" aria-label="API 1">
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Cluster API Address</dt>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <a href="#">https://api1.devcluster.openshift.com</a>
            </div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Cluster ID</dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >63b97ac1-b850-41d9-8820-239becde9e86</div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Provider</dt>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">AWS</div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">OpenShift Version</dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >4.5.0.ci-2020-06-16-015028</div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Update Channel</dt>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">stable-4.5</div>
          </dd>
        </div>
      </dl>
    </div>
    <hr class="pf-v6-c-divider" />
    <div class="pf-v6-c-card__footer">
      <a href="#">View Settings</a>
    </div>
  </div>
  <div class="pf-v6-c-card">
    <div class="pf-v6-c-card__title">
      <h2 class="pf-v6-c-title pf-m-xl">Details</h2>
    </div>
    <div class="pf-v6-c-card__body">
      <dl class="pf-v6-c-description-list" aria-label="API 2">
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Cluster API Address</dt>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <a href="#">https://api2.devcluster.openshift.com</a>
            </div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Cluster ID</dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >08908908-b850-41d9-8820-239becde9e86</div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Provider</dt>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">Azure</div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">OpenShift Version</dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >4.5.0.ci-2020-06-16-015026</div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Update Channel</dt>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">stable-4.4</div>
          </dd>
        </div>
      </dl>
    </div>
    <hr class="pf-v6-c-divider" />
    <div class="pf-v6-c-card__footer">
      <a href="#">View Settings</a>
    </div>
  </div>
</div>

```

### Aggregate status card

```html
<div class="pf-v6-l-grid pf-m-gutter">
  <div class="pf-v6-l-grid__item">
    <div class="pf-v6-l-gallery pf-m-gutter">
      <div class="pf-v6-c-card pf-v6-u-text-align-center">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text">5 Clusters</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <span class="pf-v6-c-icon pf-m-inline">
            <span class="pf-v6-c-icon__content pf-m-success">
              <i class="fas fa-check-circle" aria-hidden="true"></i>
            </span>
          </span>
        </div>
      </div>
      <div class="pf-v6-c-card pf-v6-u-text-align-center">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text">15 Clusters</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <span class="pf-v6-c-icon pf-m-inline">
            <span class="pf-v6-c-icon__content pf-m-warning">
              <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
            </span>
          </span>
        </div>
      </div>
      <div class="pf-v6-c-card pf-v6-u-text-align-center">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text">3 Clusters</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <span class="pf-v6-c-icon pf-m-inline">
            <span class="pf-v6-c-icon__content pf-m-danger">
              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-l-grid__item">
    <div class="pf-v6-l-gallery pf-m-gutter">
      <div class="pf-v6-c-card pf-v6-u-text-align-center">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text">10 Hosts</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <div class="pf-v6-l-flex pf-m-inline-flex pf-m-space-items-md">
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-success">
                    <i class="fas fa-check-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">
                <a href="#">2</a>
              </div>
            </div>
            <hr class="pf-v6-c-divider pf-m-vertical" />
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-warning">
                    <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">
                <a href="#">1</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card pf-v6-u-text-align-center">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text">50 Hosts</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <div class="pf-v6-l-flex pf-m-inline-flex pf-m-space-items-md">
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-success">
                    <i class="fas fa-check-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">
                <a href="#">5</a>
              </div>
            </div>
            <hr class="pf-v6-c-divider pf-m-vertical" />
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-danger">
                    <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">
                <a href="#">12</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card pf-v6-u-text-align-center">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text">12 Hosts</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <div class="pf-v6-l-flex pf-m-inline-flex pf-m-space-items-md">
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-warning">
                    <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">
                <a href="#">2</a>
              </div>
            </div>
            <hr class="pf-v6-c-divider pf-m-vertical" />
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-danger">
                    <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">
                <a href="#">7</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-l-grid__item">
    <div
      class="pf-v6-l-gallery pf-m-gutter"
      style="--pf-v6-l-gallery--GridTemplateColumns--min: 260px;"
    >
      <div class="pf-v6-c-card">
        <div class="pf-v6-c-card__title">
          <h2
            class="pf-v6-c-card__title-text pf-v6-u-text-align-center"
          >13 Hosts</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <div
            class="pf-v6-l-flex pf-m-justify-content-center pf-m-space-items-md"
          >
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-danger">
                    <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-stack">
                <a href="#">2 errors</a>
                <span>subtitle</span>
              </div>
            </div>
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-warning">
                    <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-stack">
                <a href="#">1 warnings</a>
                <span>subtitle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card">
        <div class="pf-v6-c-card__title pf-v6-u-text-align-center">
          <h2 class="pf-v6-c-card__title-text">3 Hosts</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <div
            class="pf-v6-l-flex pf-m-justify-content-center pf-m-space-items-md"
          >
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-success">
                    <i class="fas fa-check-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-stack">
                <a href="#">2 successes</a>
                <span>subtitle</span>
              </div>
            </div>
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-warning">
                    <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-stack">
                <a href="#">3 warnings</a>
                <span>subtitle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-card">
        <div class="pf-v6-c-card__title pf-v6-u-text-align-center">
          <h2 class="pf-v6-c-card__title-text">50 Hosts</h2>
        </div>
        <div class="pf-v6-c-card__body">
          <div
            class="pf-v6-l-flex pf-m-justify-content-center pf-m-space-items-md"
          >
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-warning">
                    <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-stack">
                <a href="#">7 warnings</a>
                <span>subtitle</span>
              </div>
            </div>
            <div class="pf-v6-l-flex pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-danger">
                    <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-stack">
                <a href="#">1 error</a>
                <span>subtitle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Status, tabbed card

```html
<div class="pf-v6-c-card">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-main">
      <h2 class="pf-v6-c-title pf-m-lg">Status</h2>
    </div>
  </div>
  <div class="pf-v6-c-card__body">
    <div class="pf-v6-c-tabs pf-m-fill" role="region" id="status-tabs">
      <ul class="pf-v6-c-tabs__list" role="tablist">
        <li class="pf-v6-c-tabs__item pf-m-current" role="presentation">
          <button
            type="button"
            class="pf-v6-c-tabs__link"
            role="tab"
            id="status-tabs-object-1-link"
          >
            <span class="pf-v6-c-tabs__item-text">Object 1</span>
          </button>
        </li>
        <li class="pf-v6-c-tabs__item" role="presentation">
          <button
            type="button"
            class="pf-v6-c-tabs__link"
            role="tab"
            id="status-tabs-object-2-link"
          >
            <span class="pf-v6-c-tabs__item-text">Object 2</span>
          </button>
        </li>
        <li class="pf-v6-c-tabs__item" role="presentation">
          <button
            type="button"
            class="pf-v6-c-tabs__link"
            role="tab"
            id="status-tabs-object-3-link"
          >
            <span class="pf-v6-c-tabs__item-text">Object 3</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="pf-v6-c-card__body">
    <section
      class="pf-v6-c-tab-content"
      id="-tab1-panel"
      role="tabpanel"
      tabindex="0"
    >
      <div class="pf-v6-c-tab-content__body">
        <dl
          class="pf-v6-c-description-list pf-m-horizontal pf-m-2-col-on-lg"
          aria-label="Status"
        >
          <div class="pf-v6-c-description-list__group">
            <dt class="pf-v6-c-description-list__term">
              <span class="pf-v6-c-description-list__text">
                <div class="pf-v6-l-grid">
                  <div class="pf-v6-l-grid__item pf-m-3-col">
                    <svg
                      class="pf-v6-c-spinner pf-m-inline"
                      role="progressbar"
                      viewBox="0 0 100 100"
                      aria-label="Loading"
                    >
                      <circle
                        class="pf-v6-c-spinner__path"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div class="pf-v6-l-grid__item pf-m-9-col">
                    <h3 class="pf-v6-c-title pf-m-md">Running</h3>
                  </div>
                </div>
              </span>
            </dt>
            <dd class="pf-v6-c-description-list__description">
              <div class="pf-v6-c-description-list__text">
                <div class="pf-v6-c-description-list__text">
                  <a href="#">Resource name that is long and can wrap</a>
                </div>
                <div class="pf-v6-c-description-list__text">121 systems</div>
              </div>
            </dd>
          </div>
          <div class="pf-v6-c-description-list__group">
            <dt class="pf-v6-c-description-list__term">
              <span class="pf-v6-c-description-list__text">
                <div class="pf-v6-l-flex">
                  <div class="pf-v6-l-flex__item">
                    <span class="pf-v6-c-icon pf-m-inline">
                      <span class="pf-v6-c-icon__content pf-m-success">
                        <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                      </span>
                    </span>
                  </div>
                  <div class="pf-v6-l-flex__item">
                    <h3 class="pf-v6-c-title pf-m-md">Ready</h3>
                  </div>
                </div>
              </span>
            </dt>
            <dd class="pf-v6-c-description-list__description">
              <div class="pf-v6-c-description-list__text">
                <div class="pf-v6-c-description-list__text">
                  <a href="#">Resource name</a>
                </div>
                <div class="pf-v6-c-description-list__text">121 systems</div>
              </div>
            </dd>
          </div>
          <div class="pf-v6-c-description-list__group">
            <dt class="pf-v6-c-description-list__term">
              <span class="pf-v6-c-description-list__text">
                <div class="pf-v6-l-grid">
                  <div class="pf-v6-l-grid__item pf-m-3-col">
                    <svg
                      class="pf-v6-c-spinner pf-m-inline"
                      role="progressbar"
                      viewBox="0 0 100 100"
                      aria-label="Loading"
                    >
                      <circle
                        class="pf-v6-c-spinner__path"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div class="pf-v6-l-grid__item pf-m-9-col">
                    <h3 class="pf-v6-c-title pf-m-md">Running</h3>
                  </div>
                </div>
              </span>
            </dt>
            <dd class="pf-v6-c-description-list__description">
              <div class="pf-v6-c-description-list__text">
                <div class="pf-v6-c-description-list__text">
                  <a href="#">Resource name that is long and can wrap</a>
                </div>
                <div class="pf-v6-c-description-list__text">121 systems</div>
              </div>
            </dd>
          </div>
          <div class="pf-v6-c-description-list__group">
            <dt class="pf-v6-c-description-list__term">
              <span class="pf-v6-c-description-list__text">
                <div class="pf-v6-l-flex">
                  <div class="pf-v6-l-flex__item">
                    <span class="pf-v6-c-icon pf-m-inline">
                      <span class="pf-v6-c-icon__content pf-m-success">
                        <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                      </span>
                    </span>
                  </div>
                  <div class="pf-v6-l-flex__item">
                    <h3 class="pf-v6-c-title pf-m-md">Ready</h3>
                  </div>
                </div>
              </span>
            </dt>
            <dd class="pf-v6-c-description-list__description">
              <div class="pf-v6-c-description-list__text">
                <div class="pf-v6-c-description-list__text">
                  <a href="#">Resource name that is long and can wrap</a>
                </div>
                <div class="pf-v6-c-description-list__text">121 systems</div>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </section>
    <section
      class="pf-v6-c-tab-content"
      id="-tab2-panel"
      role="tabpanel"
      tabindex="0"
      hidden
    >
      <div class="pf-v6-c-tab-content__body">Panel 2</div>
    </section>
    <section
      class="pf-v6-c-tab-content"
      id="-tab3-panel"
      role="tabpanel"
      tabindex="0"
      hidden
    >
      <div class="pf-v6-c-tab-content__body">Panel 3</div>
    </section>
  </div>
</div>

```

### Status card

```html
<div class="pf-v6-c-card" id="status-card-default-example">
  <div class="pf-v6-c-card__header">
    <h2 class="pf-v6-c-title pf-m-lg">Status</h2>
  </div>
  <div class="pf-v6-c-card__body">
    <div
      class="pf-v6-l-grid pf-m-all-6-col-on-sm pf-m-all-3-col-on-lg pf-m-gutter"
    >
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-check-circle pf-v6-u-success-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex__item">
            <span>Cluster</span>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-exclamation-circle pf-v6-u-danger-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex__item">
            <span class="popover-parent">
              <a href="#">Control Panel</a>
            </span>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-exclamation-circle pf-v6-u-danger-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v6-l-flex__item">
              <a href="#">Operators</a>
            </div>
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-u-color-400">1 degraged</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-check-circle pf-v6-u-success-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v6-l-flex__item">
              <a href="#">Image Vulnerabilities</a>
            </div>
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-u-color-400">0 vulnerable images</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-notification-drawer">
    <div class="pf-v6-c-notification-drawer__body">
      <section class="pf-v6-c-notification-drawer__group">
        <button
          class="pf-v6-c-notification-drawer__group-toggle"
          aria-expanded="false"
        >
          <div class="pf-v6-c-notification-drawer__group-toggle-title">
            <div class="pf-v6-l-flex">
              <div class="pf-v6-c-notification-drawer__group-toggle-title">
                <div class="pf-v6-l-flex pf-m-space-items-sm">
                  <div class="pf-v6-l-flex__item pf-m-spacer-md">
                    <span>Notifications</span>
                  </div>
                  <span class="pf-v6-c-label pf-m-red">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i
                          class="fas fa-fw fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span class="pf-v6-c-label__text">1</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-orange">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i
                          class="fas fa-fw fa-exclamation-triangle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-green">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-blue">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-teal">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span class="pf-v6-c-notification-drawer__group-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </button>
        <ul class="pf-v6-c-notification-drawer__list" role="list" hidden>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-danger"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Danger notification:</span>
                Critical alert regarding control plane
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-warning"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Warning notification:</span>
                Warning alert
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a warning notification description.</div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</div>

```

### Status card expanded notifications

```html
<div class="pf-v6-c-card" id="status-card-expanded-example">
  <div class="pf-v6-c-card__header">
    <h2 class="pf-v6-c-title pf-m-lg">Status</h2>
  </div>
  <div class="pf-v6-c-card__body">
    <div
      class="pf-v6-l-grid pf-m-all-6-col-on-sm pf-m-all-3-col-on-lg pf-m-gutter"
    >
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-check-circle pf-v6-u-success-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex__item">
            <span>Cluster</span>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-exclamation-circle pf-v6-u-danger-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex__item">
            <span class="popover-parent">
              <a href="#">Control Panel</a>
            </span>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-exclamation-circle pf-v6-u-danger-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v6-l-flex__item">
              <a href="#">Operators</a>
            </div>
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-u-color-400">1 degraged</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-check-circle pf-v6-u-success-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v6-l-flex__item">
              <a href="#">Image Vulnerabilities</a>
            </div>
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-u-color-400">0 vulnerable images</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-notification-drawer">
    <div class="pf-v6-c-notification-drawer__body">
      <section class="pf-v6-c-notification-drawer__group pf-m-expanded">
        <button
          class="pf-v6-c-notification-drawer__group-toggle"
          aria-expanded="true"
        >
          <div class="pf-v6-c-notification-drawer__group-toggle-title">
            <div class="pf-v6-l-flex">
              <div class="pf-v6-c-notification-drawer__group-toggle-title">
                <div class="pf-v6-l-flex pf-m-space-items-sm">
                  <div class="pf-v6-l-flex__item pf-m-spacer-md">
                    <span>Notifications</span>
                  </div>
                  <span class="pf-v6-c-label pf-m-red">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i
                          class="fas fa-fw fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span class="pf-v6-c-label__text">1</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-orange">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i
                          class="fas fa-fw fa-exclamation-triangle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-green">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-blue">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-teal">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span class="pf-v6-c-notification-drawer__group-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </button>
        <ul class="pf-v6-c-notification-drawer__list" role="list">
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-danger"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Danger notification:</span>
                Critical alert regarding control plane
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-warning"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Warning notification:</span>
                Warning alert
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a warning notification description.</div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</div>

```

### Status card expanded with popover

```html
<div class="pf-v6-c-card" id="status-card-expanded-with-popover-example">
  <div class="pf-v6-c-card__header">
    <h2 class="pf-v6-c-title pf-m-lg">Status</h2>
  </div>
  <div class="pf-v6-c-card__body">
    <div
      class="pf-v6-l-grid pf-m-all-6-col-on-sm pf-m-all-3-col-on-lg pf-m-gutter"
    >
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-check-circle pf-v6-u-success-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex__item">
            <span>Cluster</span>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-exclamation-circle pf-v6-u-danger-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex__item">
            <span class="popover-parent">
              <a href="#">Control Panel</a>
              <div
                class="pf-v6-c-popover pf-m-right"
                role="dialog"
                aria-modal="true"
                aria-labelledby="status-card-expanded-with-popover-example-popover-popover-right-header"
                aria-describedby="status-card-expanded-with-popover-example-popover-popover-right-body"
                style="--pf-v6-c-popover--MinWidth: 400px;"
              >
                <div class="pf-v6-c-popover__arrow"></div>
                <div class="pf-v6-c-popover__content">
                  <div class="pf-v6-c-popover__close">
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
                  <header class="pf-v6-c-popover__header">
                    <div
                      class="pf-v6-c-popover__title"
                      id="status-card-expanded-with-popover-example-popover-popover-right-header"
                    >
                      <h1
                        class="pf-v6-c-popover__title-text"
                      >Control Panel Status</h1>
                    </div>
                  </header>
                  <div
                    class="pf-v6-c-popover__body"
                    id="status-card-expanded-with-popover-example-popover-popover-right-body"
                  >Components of the Control Panel are responsible for maintaining and reconciling the state of the cluster.</div>
                  <div class="pf-v6-c-popover__body">
                    <table
                      class="pf-v6-c-table pf-m-compact pf-m-expandable"
                      aria-label="Control panel table"
                      id="status-card-expanded-with-popover-example-popover-table"
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

                          <th class="pf-v6-c-table__th" scope="col">Components</th>

                          <th
                            class="pf-v6-c-table__th pf-m-fit-content"
                            scope="col"
                          >Response rate</th>
                        </tr>
                      </thead>

                      <tbody class="pf-v6-c-table__tbody pf-m-expanded">
                        <tr class="pf-v6-c-table__tr pf-m-expanded" role="row">
                          <td
                            class="pf-v6-c-table__td pf-v6-c-table__toggle"
                            aria-label="Row expansion"
                          >
                            <button
                              class="pf-v6-c-button pf-m-expanded pf-m-plain"
                              id="status-card-expanded-with-popover-example-popover-table-expandable-toggle-1"
                              type="button"
                              aria-expanded="true"
                              aria-controls="status-card-expanded-with-popover-example-popover-table-content-1"
                              aria-labelledby="status-card-expanded-with-popover-example-popover-table-node-1"
                              aria-label="Toggle row"
                              aria-describedby="true"
                            >
                              <span class="pf-v6-c-button__icon">
                                <div class="pf-v6-c-table__toggle-icon">
                                  <i
                                    class="fas fa-angle-down"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </span>
                            </button>
                          </td>

                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            id="status-card-expanded-with-popover-example-popover-table-node1"
                            data-label="Branches"
                          >
                            <span class="pf-v6-c-table__text">API Servers</span>
                          </td>
                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            data-label="Pull requests"
                          >
                            <span class="pf-v6-c-table__text">
                              20%&nbsp;
                              <i
                                class="fas fa-exclamation-circle pf-v6-u-danger-color-200"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </td>
                        </tr>

                        <tr
                          class="pf-v6-c-table__tr pf-v6-c-table__expandable-row pf-m-expanded"
                          role="row"
                        >
                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            colspan="3"
                            id="status-card-expanded-with-popover-example-popover-table-content-1"
                          >
                            <div class="pf-v6-c-table__expandable-row-content">
                              <div
                                class="pf-v6-c-alert pf-m-danger pf-m-inline"
                                aria-label="Inline danger alert"
                              >
                                <div class="pf-v6-c-alert__icon">
                                  <i
                                    class="fas fa-fw fa-exclamation-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <p class="pf-v6-c-alert__title">
                                  <span
                                    class="pf-v6-screen-reader"
                                  >Danger alert:</span>
                                  This is a critical alert that can be associated with the control panel.
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>

                      <tbody class="pf-v6-c-table__tbody">
                        <tr class="pf-v6-c-table__tr" role="row">
                          <td
                            class="pf-v6-c-table__td pf-v6-c-table__toggle"
                            aria-label="Row expansion"
                          >
                            <button
                              class="pf-v6-c-button pf-m-plain"
                              id="status-card-expanded-with-popover-example-popover-table-expandable-toggle-2"
                              type="button"
                              aria-controls="status-card-expanded-with-popover-example-popover-table-content-2"
                              aria-labelledby="status-card-expanded-with-popover-example-popover-table-node-2"
                              aria-label="Toggle row"
                            >
                              <span class="pf-v6-c-button__icon">
                                <div class="pf-v6-c-table__toggle-icon">
                                  <i
                                    class="fas fa-angle-down"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </span>
                            </button>
                          </td>

                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            id="{{table--id}}-node2"
                            data-label="Branches"
                          >
                            <span
                              class="pf-v6-c-table__text"
                            >Controller Managers</span>
                          </td>
                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            data-label="Pull requests"
                          >
                            <span class="pf-v6-c-table__text">
                              100%&nbsp;
                              <i
                                class="fas fa-check-circle pf-v6-u-success-color-200"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </td>
                        </tr>

                        <tr
                          class="pf-v6-c-table__tr pf-v6-c-table__expandable-row"
                          role="row"
                        >
                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            colspan="3"
                            id="status-card-expanded-with-popover-example-popover-table-content-2"
                          >
                            <div
                              class="pf-v6-c-table__expandable-row-content"
                            >This is message</div>
                          </td>
                        </tr>
                      </tbody>

                      <tbody class="pf-v6-c-table__tbody">
                        <tr class="pf-v6-c-table__tr" role="row">
                          <td
                            class="pf-v6-c-table__td pf-v6-c-table__toggle"
                            aria-label="Row expansion"
                          >
                            <button
                              class="pf-v6-c-button pf-m-plain"
                              id="status-card-expanded-with-popover-example-popover-table-expandable-toggle-3"
                              type="button"
                              aria-controls="status-card-expanded-with-popover-example-popover-table-content-3"
                              aria-labelledby="status-card-expanded-with-popover-example-popover-table-node-3"
                              aria-label="Toggle row"
                            >
                              <span class="pf-v6-c-button__icon">
                                <div class="pf-v6-c-table__toggle-icon">
                                  <i
                                    class="fas fa-angle-down"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </span>
                            </button>
                          </td>

                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            id="{{table--id}}-node3"
                            data-label="Branches"
                          >
                            <span class="pf-v6-c-table__text">Schedulers</span>
                          </td>
                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            data-label="Pull requests"
                          >
                            <span class="pf-v6-c-table__text">
                              100%&nbsp;
                              <i
                                class="fas fa-check-circle pf-v6-u-success-color-200"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </td>
                        </tr>

                        <tr
                          class="pf-v6-c-table__tr pf-v6-c-table__expandable-row"
                          role="row"
                        >
                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            colspan="3"
                            id="status-card-expanded-with-popover-example-popover-table-content-3"
                          >
                            <div
                              class="pf-v6-c-table__expandable-row-content"
                            >This is the message</div>
                          </td>
                        </tr>
                      </tbody>

                      <tbody class="pf-v6-c-table__tbody">
                        <tr class="pf-v6-c-table__tr" role="row">
                          <td
                            class="pf-v6-c-table__td pf-v6-c-table__toggle"
                            aria-label="Row expansion"
                          >
                            <button
                              class="pf-v6-c-button pf-m-plain"
                              id="status-card-expanded-with-popover-example-popover-table-expandable-toggle-4"
                              type="button"
                              aria-controls="status-card-expanded-with-popover-example-popover-table-content-4"
                              aria-labelledby="status-card-expanded-with-popover-example-popover-table-node-4"
                              aria-label="Toggle row"
                            >
                              <span class="pf-v6-c-button__icon">
                                <div class="pf-v6-c-table__toggle-icon">
                                  <i
                                    class="fas fa-angle-down"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </span>
                            </button>
                          </td>

                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            id="{{table--id}}-node4"
                            data-label="Branches"
                          >
                            <span class="pf-v6-c-table__text">etcd</span>
                          </td>
                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            data-label="Pull requests"
                          >
                            <span class="pf-v6-c-table__text">
                              91%&nbsp;
                              <i
                                class="fas fa-check-circle pf-v6-u-success-color-200"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </td>
                        </tr>

                        <tr
                          class="pf-v6-c-table__tr pf-v6-c-table__expandable-row"
                          role="row"
                        >
                          <td
                            class="pf-v6-c-table__td"
                            role="cell"
                            colspan="3"
                            id="status-card-expanded-with-popover-example-popover-table-content-4"
                          >
                            <div
                              class="pf-v6-c-table__expandable-row-content"
                            >This is the message</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-exclamation-circle pf-v6-u-danger-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v6-l-flex__item">
              <a href="#">Operators</a>
            </div>
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-u-color-400">1 degraged</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-v6-l-grid__item">
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <div class="pf-v6-l-flex__item">
            <i
              class="fas fa-check-circle pf-v6-u-success-color-100"
              aria-hidden="true"
            ></i>
          </div>
          <div class="pf-v6-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v6-l-flex__item">
              <a href="#">Image Vulnerabilities</a>
            </div>
            <div class="pf-v6-l-flex__item">
              <span class="pf-v6-u-color-400">0 vulnerable images</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="pf-v6-c-divider" />
  <div class="pf-v6-c-notification-drawer">
    <div class="pf-v6-c-notification-drawer__body">
      <section class="pf-v6-c-notification-drawer__group pf-m-expanded">
        <button
          class="pf-v6-c-notification-drawer__group-toggle"
          aria-expanded="true"
        >
          <div class="pf-v6-c-notification-drawer__group-toggle-title">
            <div class="pf-v6-l-flex">
              <div class="pf-v6-c-notification-drawer__group-toggle-title">
                <div class="pf-v6-l-flex pf-m-space-items-sm">
                  <div class="pf-v6-l-flex__item pf-m-spacer-md">
                    <span>Notifications</span>
                  </div>
                  <span class="pf-v6-c-label pf-m-red">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i
                          class="fas fa-fw fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span class="pf-v6-c-label__text">1</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-orange">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i
                          class="fas fa-fw fa-exclamation-triangle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-green">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-blue">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                  <span class="pf-v6-c-label pf-m-teal">
                    <span class="pf-v6-c-label__content">
                      <span class="pf-v6-c-label__icon">
                        <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
                      </span>
                      <span class="pf-v6-c-label__text">3</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span class="pf-v6-c-notification-drawer__group-toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </button>
        <ul class="pf-v6-c-notification-drawer__list" role="list">
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-danger"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Danger notification:</span>
                Critical alert regarding control plane
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
          </li>
          <li
            class="pf-v6-c-notification-drawer__list-item pf-m-hoverable pf-m-warning"
            tabindex="0"
          >
            <div class="pf-v6-c-notification-drawer__list-item-header">
              <span class="pf-v6-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-v6-c-notification-drawer__list-item-header-title">
                <span class="pf-v6-screen-reader">Warning notification:</span>
                Warning alert
              </h2>
            </div>
            <div
              class="pf-v6-c-notification-drawer__list-item-description"
            >This is a warning notification description.</div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</div>

```

### Utilization card 1

```html
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 360px;"
>
  <div class="pf-v6-c-card" id="utilization-card-1-example">
    <div class="pf-v6-c-card__title" id="utilization-card-1-example-title1">
      <h2 class="pf-v6-c-title pf-m-lg">Top Utilized Clusters</h2>
    </div>
    <div class="pf-v6-c-card__body">
      <div class="pf-v6-l-flex pf-m-column">
        <div class="pf-v6-l-stack">
          <b>Cluster-1204</b>
          <span>27.3 cores available</span>
        </div>
        <div class="ws-chart">
          <img src="/assets/images/img_line-chart-1.png" alt="Line Chart" />
        </div>
        <a href="#">View details</a>
      </div>
    </div>
    <div class="pf-v6-c-card__body">
      <div class="pf-v6-l-flex pf-m-column">
        <div class="pf-v6-l-stack">
          <b>Abcdef-1204</b>
          <span>50.6 cores available</span>
        </div>
        <div class="ws-chart">
          <img src="/assets/images/img_line-chart-1.png" alt="Line Chart" />
        </div>
        <a href="#">View details</a>
      </div>
    </div>
    <hr class="pf-v6-c-divider" />
    <div class="pf-v6-c-card__footer">
      <a href="#">View all clusters</a>
    </div>
  </div>
</div>

```

### Utilization card 2

```html
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 360px;"
>
  <div class="pf-v6-c-card" id="utilization-card-2-example">
    <div class="pf-v6-c-card__title" id="utilization-card-2-example-title1">
      <h2 class="pf-v6-c-title pf-m-lg">Top Utilized Clusters</h2>
    </div>
    <div class="pf-v6-c-card__body">
      <div class="pf-v6-l-flex pf-m-column">
        <div class="pf-v6-l-stack">
          <a href="#">Cluster-1204</a>
          <span>27.3 cores available</span>
        </div>
        <div class="ws-chart">
          <img src="/assets/images/img_line-chart-1.png" alt="Line Chart" />
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">
      <div class="pf-v6-l-flex pf-m-column">
        <div class="pf-v6-l-stack">
          <a href="#">Abcdef-1204</a>
          <span>50.6 cores available</span>
        </div>
        <div class="ws-chart">
          <img src="/assets/images/img_line-chart-1.png" alt="Line Chart" />
        </div>
      </div>
    </div>
    <hr class="pf-v6-c-divider" />
    <div class="pf-v6-c-card__footer">
      <a href="#">View all clusters</a>
    </div>
  </div>
</div>

```

### Utilization card 3

```html
<b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to
<code>baseline</code> alignment.
<br />
<br />
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 360px;"
>
  <div class="pf-v6-c-card" id="utilization-card-3-example">
    <div class="pf-v6-c-card__header pf-v6-u-align-items-flex-start">
      <div class="pf-v6-c-card__header-main">
        <div class="pf-v6-c-card__title" id="utilization-card-3-example-title1">
          <h2 class="pf-v6-c-title pf-m-lg">Recommendations</h2>
        </div>
      </div>
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <button
          class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
          type="button"
          aria-expanded="false"
          id="utilization-card-3-example-select-dropdown"
        >
          <span class="pf-v6-c-menu-toggle__text">Filter</span>
          <span class="pf-v6-c-menu-toggle__controls">
            <span class="pf-v6-c-menu-toggle__toggle-icon">
              <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-card__body">
      <div class="pf-v6-l-flex pf-m-column">
        <span>System</span>
        <div class="pf-v6-l-flex pf-m-space-items-sm">
          <span class="pf-v6-c-icon pf-m-inline">
            <span class="pf-v6-c-icon__content pf-m-danger">
              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            </span>
          </span>
          <a hfer="#">25 incidents detected</a>
        </div>
        <div class="ws-chart">
          <img src="/assets/images/img_chart-stack.png" alt="Stack chart" />
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__footer">
      <a href="#">See details</a>
    </div>
  </div>
</div>

```

### Utilization card 4

```html
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 360px;"
>
  <div class="pf-v6-c-card" id="utilization-card-4-example">
    <div class="pf-v6-c-card__title" id="utilization-card-4-example-title1">
      <h2 class="pf-v6-c-title pf-m-lg">CPU Usage</h2>
    </div>
    <div class="pf-v6-c-card__body">
      <div class="ws-chart">
        <img src="/assets/images/img_chart-threshold.png" alt="Threshold chart" />
      </div>
    </div>
    <div class="pf-v6-c-card__footer">
      <a href="#">See details</a>
    </div>
  </div>
</div>

```

### Nested cards with expand toggle on the right

```html
<div class="pf-v6-c-card" id="nested-cards-toggle-right-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-main">
      <div
        class="pf-v6-c-card__title"
        id="nested-cards-toggle-right-example-title"
      >
        <h2 class="pf-v6-c-title pf-m-lg">Hardware Monitor</h2>
      </div>
    </div>
  </div>
  <div
    class="pf-v6-c-card pf-m-plain pf-m-expanded"
    id="nested-cards-toggle-right-example-group-1"
  >
    <div class="pf-v6-c-card__header pf-m-toggle-right">
      <div class="pf-v6-c-card__header-toggle">
        <button
          class="pf-v6-c-button pf-m-plain"
          id="nested-cards-toggle-right-example-group-1-toggle"
          type="button"
          aria-labelledby="nested-cards-toggle-right-example-group-1-title nested-cards-toggle-right-example-group-1-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-card__header-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="nested-cards-toggle-right-example-group-1-title"
        >
          <h2 class="pf-v6-c-card__title-text">CPU 1</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__expandable-content">
      <div class="pf-v6-c-card__body">
        <div class="pf-v6-l-grid pf-m-gutter">
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
              <div
                class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
              >
                <div class="pf-v6-l-flex__item">
                  <b>Temperature</b>
                </div>
                <hr
                  class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                />
                <div class="pf-v6-l-flex__item">
                  <span>64C</span>
                </div>
              </div>
            </div>
            <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item pf-m-2-col">
                  <div
                    class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                  >
                    <div class="pf-v6-l-flex__item">100C</div>
                    <div class="pf-v6-l-flex__item">50C</div>
                    <div class="pf-v6-l-flex__item">0C</div>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item pf-m-10-col">
                  <div class="ws-chart">
                    <img
                      src="/assets/images/img_line-chart-2.png"
                      alt="Line chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="pf-v6-c-divider pf-v6-u-hidden-on-md" />
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
              <div
                class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
              >
                <div class="pf-v6-l-flex__item">
                  <b>Speed</b>
                </div>
                <hr
                  class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                />
                <div class="pf-v6-l-flex__item">
                  <span>2.3Ghz</span>
                </div>
              </div>
            </div>
            <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item pf-m-2-col">
                  <div
                    class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                  >
                    <div class="pf-v6-l-flex__item">36hz</div>
                    <div class="pf-v6-l-flex__item">1.5Ghz</div>
                    <div class="pf-v6-l-flex__item">0Ghz</div>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item pf-m-10-col">
                  <div class="ws-chart">
                    <img
                      src="/assets/images/img_line-chart-2.png"
                      alt="Line chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="pf-v6-c-card pf-m-plain"
    id="nested-cards-toggle-right-example-group-2"
  >
    <div class="pf-v6-c-card__header pf-m-toggle-right">
      <div class="pf-v6-c-card__header-toggle">
        <button
          class="pf-v6-c-button pf-m-plain"
          id="nested-cards-toggle-right-example-group-2-toggle"
          type="button"
          aria-labelledby="nested-cards-toggle-right-example-group-2-title nested-cards-toggle-right-example-group-2-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-card__header-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="nested-cards-toggle-right-example-group-2-title"
        >
          <h2 class="pf-v6-c-card__title-text">CPU 2</h2>
        </div>
      </div>
    </div>
  </div>
  <div
    class="pf-v6-c-card pf-m-plain"
    id="nested-cards-toggle-right-example-group-3"
  >
    <div class="pf-v6-c-card__header pf-m-toggle-right">
      <div class="pf-v6-c-card__header-toggle">
        <button
          class="pf-v6-c-button pf-m-plain"
          id="nested-cards-toggle-right-example-group-3-toggle"
          type="button"
          aria-labelledby="nested-cards-toggle-right-example-group-3-title nested-cards-toggle-right-example-group-3-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-card__header-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="nested-cards-toggle-right-example-group-3-title&quot;"
        >
          <h2 class="pf-v6-c-card__title-text">CPU 3</h2>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Nested cards with expand toggle

```html
<div class="pf-v6-c-card" id="nested-cards-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-main">
      <div class="pf-v6-c-card__title" id="nested-cards-example-title">
        <h2 class="pf-v6-c-title pf-m-lg">Hardware Monitor</h2>
      </div>
    </div>
  </div>
  <div
    class="pf-v6-c-card pf-m-plain pf-m-expanded"
    id="nested-cards-example-group-1"
  >
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__header-toggle">
        <button
          class="pf-v6-c-button pf-m-plain"
          id="nested-cards-example-group-1-toggle"
          type="button"
          aria-labelledby="nested-cards-example-group-1-title nested-cards-example-group-1-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-card__header-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="nested-cards-example-group-1-title"
        >
          <h2 class="pf-v6-c-card__title-text">CPU 1</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__expandable-content">
      <div class="pf-v6-c-card__body">
        <div class="pf-v6-l-grid pf-m-gutter">
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
              <div
                class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
              >
                <div class="pf-v6-l-flex__item">
                  <b>Temperature</b>
                </div>
                <hr
                  class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                />
                <div class="pf-v6-l-flex__item">
                  <span>64C</span>
                </div>
              </div>
            </div>
            <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item pf-m-2-col">
                  <div
                    class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                  >
                    <div class="pf-v6-l-flex__item">100C</div>
                    <div class="pf-v6-l-flex__item">50C</div>
                    <div class="pf-v6-l-flex__item">0C</div>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item pf-m-10-col">
                  <div class="ws-chart">
                    <img
                      src="/assets/images/img_line-chart-2.png"
                      alt="Line chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="pf-v6-c-divider pf-v6-u-hidden-on-md" />
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
              <div
                class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
              >
                <div class="pf-v6-l-flex__item">
                  <b>Speed</b>
                </div>
                <hr
                  class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                />
                <div class="pf-v6-l-flex__item">
                  <span>2.3Ghz</span>
                </div>
              </div>
            </div>
            <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item pf-m-2-col">
                  <div
                    class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                  >
                    <div class="pf-v6-l-flex__item">36hz</div>
                    <div class="pf-v6-l-flex__item">1.5Ghz</div>
                    <div class="pf-v6-l-flex__item">0Ghz</div>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item pf-m-10-col">
                  <div class="ws-chart">
                    <img
                      src="/assets/images/img_line-chart-2.png"
                      alt="Line chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-card pf-m-plain" id="nested-cards-example-group-2">
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__header-toggle">
        <button
          class="pf-v6-c-button pf-m-plain"
          id="nested-cards-example-group-2-toggle"
          type="button"
          aria-labelledby="nested-cards-example-group-2-title nested-cards-example-group-2-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-card__header-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="nested-cards-example-group-2-title"
        >
          <h2 class="pf-v6-c-card__title-text">CPU 2</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-card pf-m-plain" id="nested-cards-example-group-3">
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__header-toggle">
        <button
          class="pf-v6-c-button pf-m-plain"
          id="nested-cards-example-group-3-toggle"
          type="button"
          aria-labelledby="nested-cards-example-group-3-title nested-cards-example-group-3-toggle"
          aria-label="Details"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-card__header-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="nested-cards-example-group-3-title"
        >
          <h2 class="pf-v6-c-card__title-text">CPU 3</h2>
        </div>
      </div>
    </div>
  </div>
</div>

```

### With accordion

```html
<div class="pf-v6-c-card" id="with-accordion-example">
  <div class="pf-v6-c-card__header">
    <div class="pf-v6-c-card__header-main">
      <div class="pf-v6-c-card__title" id="with-accordion-example-title">
        <h2 class="pf-v6-c-title pf-m-lg">Hardware Monitor</h2>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-card__body">
    <div class="pf-v6-c-accordion">
      <h3>
        <button
          class="pf-v6-c-accordion__toggle"
          type="button"
          aria-expanded="true"
        >
          <span class="pf-v6-c-accordion__toggle-text">CPU 1</span>
          <span class="pf-v6-c-accordion__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </button>
      </h3>
      <div class="pf-v6-c-accordion__expandable-content" hidden>
        <div class="pf-v6-c-accordion__expandable-content-body">
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid pf-m-gutter">
              <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
                <div
                  class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
                >
                  <div class="pf-v6-l-flex__item">
                    <b>Temperature</b>
                  </div>
                  <hr
                    class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                  />
                  <div class="pf-v6-l-flex__item">
                    <span>64C</span>
                  </div>
                </div>
              </div>
              <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
                <div class="pf-v6-l-grid pf-m-gutter">
                  <div class="pf-v6-l-grid__item pf-m-2-col">
                    <div
                      class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                    >
                      <div class="pf-v6-l-flex__item">100C</div>
                      <div class="pf-v6-l-flex__item">50C</div>
                      <div class="pf-v6-l-flex__item">0C</div>
                    </div>
                  </div>
                  <div class="pf-v6-l-grid__item pf-m-10-col">
                    <div class="ws-chart">
                      <img
                        src="/assets/images/img_line-chart-2.png"
                        alt="Line chart"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="pf-v6-c-divider pf-v6-u-hidden-on-md" />
            <div class="pf-v6-l-grid pf-m-gutter">
              <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
                <div
                  class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
                >
                  <div class="pf-v6-l-flex__item">
                    <b>Speed</b>
                  </div>
                  <hr
                    class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                  />
                  <div class="pf-v6-l-flex__item">
                    <span>2.3Ghz</span>
                  </div>
                </div>
              </div>
              <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
                <div class="pf-v6-l-grid pf-m-gutter">
                  <div class="pf-v6-l-grid__item pf-m-2-col">
                    <div
                      class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                    >
                      <div class="pf-v6-l-flex__item">36hz</div>
                      <div class="pf-v6-l-flex__item">1.5Ghz</div>
                      <div class="pf-v6-l-flex__item">0Ghz</div>
                    </div>
                  </div>
                  <div class="pf-v6-l-grid__item pf-m-10-col">
                    <div class="ws-chart">
                      <img
                        src="/assets/images/img_line-chart-2.png"
                        alt="Line chart"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>
        <button
          class="pf-v6-c-accordion__toggle"
          type="button"
          aria-expanded="false"
        >
          <span class="pf-v6-c-accordion__toggle-text">CPU 2</span>
          <span class="pf-v6-c-accordion__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </button>
      </h3>
      <div class="pf-v6-c-accordion__expandable-content" hidden>
        <div class="pf-v6-l-grid pf-m-gutter">
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
              <div
                class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
              >
                <div class="pf-v6-l-flex__item">
                  <b>Temperature</b>
                </div>
                <hr
                  class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                />
                <div class="pf-v6-l-flex__item">
                  <span>64C</span>
                </div>
              </div>
            </div>
            <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item pf-m-2-col">
                  <div
                    class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                  >
                    <div class="pf-v6-l-flex__item">100C</div>
                    <div class="pf-v6-l-flex__item">50C</div>
                    <div class="pf-v6-l-flex__item">0C</div>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item pf-m-10-col">
                  <div class="ws-chart">
                    <img
                      src="/assets/images/img_line-chart-2.png"
                      alt="Line chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="pf-v6-c-divider pf-v6-u-hidden-on-md" />
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
              <div
                class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
              >
                <div class="pf-v6-l-flex__item">
                  <b>Speed</b>
                </div>
                <hr
                  class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                />
                <div class="pf-v6-l-flex__item">
                  <span>2.3Ghz</span>
                </div>
              </div>
            </div>
            <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item pf-m-2-col">
                  <div
                    class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                  >
                    <div class="pf-v6-l-flex__item">36hz</div>
                    <div class="pf-v6-l-flex__item">1.5Ghz</div>
                    <div class="pf-v6-l-flex__item">0Ghz</div>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item pf-m-10-col">
                  <div class="ws-chart">
                    <img
                      src="/assets/images/img_line-chart-2.png"
                      alt="Line chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>
        <button
          class="pf-v6-c-accordion__toggle"
          type="button"
          aria-expanded="false"
        >
          <span class="pf-v6-c-accordion__toggle-text">CPU 3</span>
          <span class="pf-v6-c-accordion__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </button>
      </h3>
      <div class="pf-v6-c-accordion__expandable-content" hidden>
        <div class="pf-v6-l-grid pf-m-gutter">
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
              <div
                class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
              >
                <div class="pf-v6-l-flex__item">
                  <b>Temperature</b>
                </div>
                <hr
                  class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                />
                <div class="pf-v6-l-flex__item">
                  <span>64C</span>
                </div>
              </div>
            </div>
            <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item pf-m-2-col">
                  <div
                    class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                  >
                    <div class="pf-v6-l-flex__item">100C</div>
                    <div class="pf-v6-l-flex__item">50C</div>
                    <div class="pf-v6-l-flex__item">0C</div>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item pf-m-10-col">
                  <div class="ws-chart">
                    <img
                      src="/assets/images/img_line-chart-2.png"
                      alt="Line chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="pf-v6-c-divider pf-v6-u-hidden-on-md" />
          <div class="pf-v6-l-grid pf-m-gutter">
            <div class="pf-v6-l-grid__item pf-m-4-col-on-md">
              <div
                class="pf-v6-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v6-u-h-100-on-md"
              >
                <div class="pf-v6-l-flex__item">
                  <b>Speed</b>
                </div>
                <hr
                  class="pf-v6-c-divider pf-m-vertical pf-m-inset-sm pf-v6-u-hidden-on-md"
                />
                <div class="pf-v6-l-flex__item">
                  <span>2.3Ghz</span>
                </div>
              </div>
            </div>
            <div class="pf-v6-l-grid__item pf-m-8-col-on-md">
              <div class="pf-v6-l-grid pf-m-gutter">
                <div class="pf-v6-l-grid__item pf-m-2-col">
                  <div
                    class="pf-v6-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                  >
                    <div class="pf-v6-l-flex__item">36hz</div>
                    <div class="pf-v6-l-flex__item">1.5Ghz</div>
                    <div class="pf-v6-l-flex__item">0Ghz</div>
                  </div>
                </div>
                <div class="pf-v6-l-grid__item pf-m-10-col">
                  <div class="ws-chart">
                    <img
                      src="/assets/images/img_line-chart-2.png"
                      alt="Line chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Trend card 1

```html
<b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to
<code>baseline</code> alignment.
<br />
<br />
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 360px;"
>
  <div class="pf-v6-c-card" id="trend-card-1-example">
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__header-main">
        <div class="pf-v6-c-card__title" id="trend-card-1-example-title">
          <h1 class="pf-v6-c-title pf-m-2xl">1,050,765 IOPS</h1>
        </div>
        <span>Workload</span>
      </div>
      <div
        class="pf-v6-c-card__actions pf-m-no-offset"
        style="padding-block-start: 1px;"
      >
        <button
          class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
          type="button"
          aria-expanded="false"
          id="trend-card-1-example-select-dropdown"
        >
          <span class="pf-v6-c-menu-toggle__text">Filter</span>
          <span class="pf-v6-c-menu-toggle__controls">
            <span class="pf-v6-c-menu-toggle__toggle-icon">
              <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-card__body">
      <div class="ws-chart">
        <img src="/assets/images/img_line-chart-1.png" alt="Line Chart" />
      </div>
    </div>
  </div>
</div>

```

### Trend card 2

```html
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 360px;"
>
  <div class="pf-v6-c-card" id="trend-card-2-example">
    <div class="pf-v6-c-card__header">
      <div class="pf-v6-c-card__header-main">
        <div class="pf-v6-l-flex pf-m-align-items-center">
          <div class="pf-v6-l-flex__item pf-m-flex-none">
            <div class="pf-v6-l-flex pf-m-column pf-m-space-items-none">
              <div class="pf-v6-c-card__title" id="trend-card-2-example-title">
                <h1 class="pf-v6-c-title pf-m-2xl">842 TB</h1>
              </div>
              <span>Storage capacity</span>
            </div>
          </div>
          <div class="pf-v6-l-flex__item pf-m-flex-1">
            <div class="ws-chart">
              <img src="/assets/images/img_line-chart-1.png" alt="Line Chart" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__footer">
      <div class="pf-v6-l-flex">
        <a href="#">Action 1</a>
        <a href="#">Action 2</a>
      </div>
    </div>
  </div>
</div>

```

### Log view

```html
<b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to
<code>baseline</code> alignment.
<br />
<br />
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 360px;"
>
  <div class="pf-v6-c-card" id="card-log-view-example">
    <div class="pf-v6-c-card__header pf-v6-u-align-items-flex-start">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <button
          class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
          type="button"
          aria-expanded="false"
          id="card-log-view-example-select-dropdown"
        >
          <span class="pf-v6-c-menu-toggle__text">Most recent</span>
          <span class="pf-v6-c-menu-toggle__controls">
            <span class="pf-v6-c-menu-toggle__toggle-icon">
              <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-log-view-example-title1"
          style="padding-block-start: 3px;"
        >
          <h2 class="pf-v6-c-title pf-m-lg">Activity</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">
      <dl class="pf-v6-c-description-list" aria-label="Activity">
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Readiness probe failed</dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection refused</div>
          </dd>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <span class="pf-v6-c-timestamp">
                <time
                  class="pf-v6-c-timestamp__text"
                  datetime="2019-01-21T21:38"
                >Thursday, 21 January 2019, 9:38 PM EST</time>
              </span>
            </div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Successful assignment</dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >Successfully assigned default/example to ip-10-0-130-149.ec2.internal</div>
          </dd>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <span class="pf-v6-c-timestamp">
                <time
                  class="pf-v6-c-timestamp__text"
                  datetime="2019-01-21T21:34"
                >Thursday, 21 January 2019, 9:34 PM EST</time>
              </span>
            </div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Pulling image</dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >Pulling image "openshift/hello-openshift"</div>
          </dd>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <span class="pf-v6-c-timestamp">
                <time
                  class="pf-v6-c-timestamp__text"
                  datetime="2019-01-20T21:14"
                >Thursday, 21 January 2019, 8:14 PM EST</time>
              </span>
            </div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">Created container</dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >Created container hello-openshift</div>
          </dd>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <span class="pf-v6-c-timestamp">
                <time
                  class="pf-v6-c-timestamp__text"
                  datetime="2019-01-21T19:18"
                >Thursday, 21 January 2019, 7:18 PM EST</time>
              </span>
            </div>
          </dd>
        </div>
      </dl>
    </div>
    <hr class="pf-v6-c-divider" />
    <div class="pf-v6-c-card__footer">
      <a href="#">View all activity</a>
    </div>
  </div>
</div>

```

### Events view

```html
<b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to
<code>baseline</code> alignment.
<br />
<br />
<div
  class="pf-v6-l-gallery pf-m-gutter"
  style="--pf-v6-l-gallery--GridTemplateColumns--min: 360px;"
>
  <div class="pf-v6-c-card" id="card-events-view-example">
    <div class="pf-v6-c-card__header pf-v6-u-align-items-flex-start">
      <div class="pf-v6-c-card__actions pf-m-no-offset">
        <button
          class="pf-v6-c-menu-toggle pf-m-text pf-m-plain"
          type="button"
          aria-expanded="false"
          id="card-events-view-example-select-dropdown"
        >
          <span class="pf-v6-c-menu-toggle__text">Status</span>
          <span class="pf-v6-c-menu-toggle__controls">
            <span class="pf-v6-c-menu-toggle__toggle-icon">
              <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-card__header-main">
        <div
          class="pf-v6-c-card__title"
          id="card-events-view-example-title1"
          style="padding-block-start: 3px;"
        >
          <h2 class="pf-v6-c-title pf-m-lg">Events</h2>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-card__body">
      <dl class="pf-v6-c-description-list" aria-label="Events">
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">
            <div class="pf-v6-l-flex pf-m-nowrap pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-danger">
                    <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">Readiness probe failed</div>
            </div>
          </dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection refused</div>
          </dd>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <span class="pf-v6-c-timestamp">
                <time
                  class="pf-v6-c-timestamp__text"
                  datetime="2019-01-21T21:38"
                >Thursday, 21 January 2019, 9:38 PM EST</time>
              </span>
            </div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">
            <div class="pf-v6-l-flex pf-m-nowrap pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-success">
                    <i class="fas fa-check-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">Successful assignment</div>
            </div>
          </dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >Successfully assigned default/example to ip-10-0-130-149.ec2.internal</div>
          </dd>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <span class="pf-v6-c-timestamp">
                <time
                  class="pf-v6-c-timestamp__text"
                  datetime="2019-01-21T21:34"
                >Thursday, 21 January 2019, 9:34 PM EST</time>
              </span>
            </div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">
            <div class="pf-v6-l-flex pf-m-nowrap pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <svg
                  class="pf-v6-c-spinner pf-m-inline"
                  role="progressbar"
                  viewBox="0 0 100 100"
                  aria-label="Loading"
                >
                  <circle
                    class="pf-v6-c-spinner__path"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                  />
                </svg>
              </div>
              <div class="pf-v6-l-flex__item">Pulling image</div>
            </div>
          </dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >Pulling image "openshift/hello-openshift"</div>
          </dd>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <span class="pf-v6-c-timestamp">
                <time
                  class="pf-v6-c-timestamp__text"
                  datetime="2019-01-21T20:14"
                >Thursday, 21 January 2019, 8:14 PM EST</time>
              </span>
            </div>
          </dd>
        </div>
        <div class="pf-v6-c-description-list__group">
          <dt class="pf-v6-c-description-list__term">
            <div class="pf-v6-l-flex pf-m-nowrap pf-m-space-items-sm">
              <div class="pf-v6-l-flex__item">
                <span class="pf-v6-c-icon pf-m-inline">
                  <span class="pf-v6-c-icon__content pf-m-success">
                    <i class="fas fa-check-circle" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="pf-v6-l-flex__item">Created container</div>
            </div>
          </dt>
          <dd class="pf-v6-c-description-list__description">
            <div
              class="pf-v6-c-description-list__text"
            >Created container hello-openshift</div>
          </dd>
          <dd class="pf-v6-c-description-list__description">
            <div class="pf-v6-c-description-list__text">
              <span class="pf-v6-c-timestamp">
                <time
                  class="pf-v6-c-timestamp__text"
                  datetime="2019-01-21T19:18"
                >Thursday, 21 January 2019, 7:18 PM EST</time>
              </span>
            </div>
          </dd>
        </div>
      </dl>
    </div>
    <hr class="pf-v6-c-divider" />
    <div class="pf-v6-c-card__footer">
      <a href="#">View all events</a>
    </div>
  </div>
</div>

```
