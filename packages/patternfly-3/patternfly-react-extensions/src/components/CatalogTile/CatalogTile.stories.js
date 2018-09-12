import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName } from 'storybook/constants/siteConstants';
import pfBrand from 'patternfly/dist/img/logo.svg';
import github from 'patternfly/dist/img/github-logo.svg';
import { Icon } from 'patternfly-react';
import { CatalogTile, CatalogTileBadge } from './index';

import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/Catalog Components/Catalog Tile`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Catalog Tile',
    description: 'This is a tile that provides the layout desired for catalog items.'
  })
);

stories.add(
  'Catalog Tile',
  withInfo({
    source: true,
    propTables: [CatalogTile, CatalogTileBadge]
  })(() => (
    <div style={{ display: 'flex' }}>
      <CatalogTile
        id="long-description-test"
        featured
        iconImg={pfBrand}
        badges={[<CatalogTile.Badge type="fa" name="cog" title="Certified" id="certified" />]}
        title="Patternfly-React"
        vendor={
          <span>
            OpenSource funded by <a href="redhat.com">Red Hat</a>
          </span>
        }
        description={
          'This is a very long description that should be truncated after 112 characters. ' +
          '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
          'to truncate the description how you see fit. It will be passed the description, max length, and id.'
        }
      />
      <CatalogTile
        iconImg={github}
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <Icon type="fa" name="cog" />
          </CatalogTileBadge>,
          <CatalogTileBadge title="USDA Approved" id="approved">
            <Icon type="pf" name="ok" />
          </CatalogTileBadge>
        ]}
        title="GitHub Desktop"
        vendor="provided by GitHub"
        description="Simple collaboration from your desktop."
      />
      <CatalogTile
        featured
        iconImg={pfBrand}
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <Icon type="fa" name="cog" />
          </CatalogTileBadge>
        ]}
        title="PatternFly"
        vendor={
          <span>
            OpenSource funded by <a href="redhat.com">Red Hat</a>
          </span>
        }
        description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
      />
    </div>
  ))
);
