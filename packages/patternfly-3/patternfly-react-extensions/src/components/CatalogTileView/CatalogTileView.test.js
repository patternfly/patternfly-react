import React from 'react';
import { mount } from 'enzyme';
import { EmptyState } from 'patternfly-react';

import { CatalogTileView, CatalogTileViewCategory } from './index';
import { CatalogTile, CatalogTileBadge } from '../CatalogTile/index';

const pfBrand = '<PatternFly Brand Image here>';
const github = '<GitHub Brand Image here>';

test('CatalogTile renders properly', () => {
  const component = mount(
    <CatalogTileView id="test-catalog-tile-view">
      <CatalogTileViewCategory id="category-1" title="Category 1" totalItems={4} viewAll={false}>
        <CatalogTile
          featured
          iconImg={pfBrand}
          badges={[<CatalogTile.Badge type="fa" name="cog" title="Certified" id="certified" />]}
          title="Patternfly"
          vendor={
            <span>
              PatternFly is a <a href="redhat.com">Red Hat</a> sponsored project.
            </span>
          }
          description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
        />
        <CatalogTile
          iconImg={github}
          badges={[
            <CatalogTileBadge type="fa" name="cog" title="Certified" id="certified" />,
            <CatalogTileBadge type="pf" name="ok" title="USDA Approved" id="approved" />
          ]}
          title="GitHub Desktop"
          vendor="provided by GitHub"
          description="Simple collaboration from your desktop."
        />
        <CatalogTile
          featured
          iconImg={pfBrand}
          badges={[<CatalogTile.Badge type="fa" name="cog" title="Certified" id="certified" />]}
          title="Patternfly"
          vendor={
            <span>
              PatternFly is a <a href="redhat.com">Red Hat</a> sponsored project.
            </span>
          }
          description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
        />
        <CatalogTile
          iconImg={github}
          badges={[
            <CatalogTileBadge type="fa" name="cog" title="Certified" id="certified" />,
            <CatalogTileBadge type="pf" name="ok" title="USDA Approved" id="approved" />
          ]}
          title="GitHub Desktop"
          vendor="provided by GitHub"
          description="Simple collaboration from your desktop."
        />
      </CatalogTileViewCategory>
      <CatalogTileViewCategory id="category-2" title="Category 2" totalItems={3} viewAll>
        <CatalogTile
          featured
          iconImg={pfBrand}
          badges={[<CatalogTile.Badge type="fa" name="cog" title="Certified" id="certified" />]}
          title="Patternfly"
          vendor={
            <span>
              PatternFly is a <a href="redhat.com">Red Hat</a> sponsored project.
            </span>
          }
          description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
        />
        <CatalogTile
          iconImg={github}
          badges={[
            <CatalogTileBadge type="fa" name="cog" title="Certified" id="certified" />,
            <CatalogTileBadge type="pf" name="ok" title="USDA Approved" id="approved" />
          ]}
          title="GitHub Desktop"
          vendor="provided by GitHub"
          description="Simple collaboration from your desktop."
        />
        <CatalogTile
          featured
          iconImg={pfBrand}
          badges={[<CatalogTile.Badge type="fa" name="cog" title="Certified" id="certified" />]}
          title="Patternfly"
          vendor={
            <span>
              PatternFly is a <a href="redhat.com">Red Hat</a> sponsored project.
            </span>
          }
          description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
        />
      </CatalogTileViewCategory>
    </CatalogTileView>
  );
  expect(component.render()).toMatchSnapshot();
  component.unmount();
});

test('CatalogTile renders no tiles state properly', () => {
  const component = mount(
    <CatalogTileView id="test-catalog-tile-view">
      <CatalogTileViewCategory id="category-1" title="Category 1" totalItems={0}>
        <EmptyState className="blank-slate-content-pf">
          <EmptyState.Info>There are no items in this category.</EmptyState.Info>
        </EmptyState>
      </CatalogTileViewCategory>
    </CatalogTileView>
  );
  expect(component.render()).toMatchSnapshot();
  component.unmount();
});

test('CatalogTile renders wrapped tiles properly', () => {
  const component = mount(
    <CatalogTileView id="test-catalog-tile-view">
      <CatalogTileViewCategory id="category-1" title="Category 1" totalItems={4} viewAll={false}>
        <span>
          <CatalogTile
            featured
            iconImg={pfBrand}
            badges={[<CatalogTile.Badge type="fa" name="cog" title="Certified" id="certified" />]}
            title="Patternfly"
            vendor={
              <span>
                PatternFly is a <a href="redhat.com">Red Hat</a> sponsored project.
              </span>
            }
            description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
          />
        </span>
        <div>
          <a href="#">
            <CatalogTile
              iconImg={github}
              badges={[
                <CatalogTileBadge type="fa" name="cog" title="Certified" id="certified" />,
                <CatalogTileBadge type="pf" name="ok" title="USDA Approved" id="approved" />
              ]}
              title="GitHub Desktop"
              vendor="provided by GitHub"
              description="Simple collaboration from your desktop."
            />
          </a>
        </div>
        <CatalogTile
          featured
          iconImg={pfBrand}
          badges={[<CatalogTile.Badge type="fa" name="cog" title="Certified" id="certified" />]}
          title="Patternfly"
          vendor={
            <span>
              PatternFly is a <a href="redhat.com">Red Hat</a> sponsored project.
            </span>
          }
          description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
        />
      </CatalogTileViewCategory>
    </CatalogTileView>
  );
  expect(component.render()).toMatchSnapshot();
  component.unmount();
});
