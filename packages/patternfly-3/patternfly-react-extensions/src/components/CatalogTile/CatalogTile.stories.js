import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName } from 'storybook/constants/siteConstants';
import pfBrand from 'patternfly/dist/img/logo-alt.svg';
import ngnix from './__images__/nginx.png';
import { Icon } from 'patternfly-react';
import { name } from '../../../package.json';

import { CatalogTile, CatalogTileBadge } from './index';

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
        href="https://github.com/patternfly/patternfly-react"
        iconImg={pfBrand}
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <Icon type="fa" name="cog" />
          </CatalogTileBadge>
        ]}
        title="Patternfly-React"
        vendor="provided by Red Hat"
        description={
          'This is a very long description that should be truncated after 112 characters. ' +
          '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
          'to truncate the description how you see fit. It will be passed the description, max length, and id.'
        }
      />
      <CatalogTile
        iconImg={ngnix}
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <Icon type="fa" name="cog" />
          </CatalogTileBadge>
        ]}
        title="Nginx"
        vendor={<span>provided by Nginx</span>}
        description="The open source web server that powers 400 million websites."
      />
      <CatalogTile
        iconClass="fa fa-codepen"
        badges={[
          <CatalogTileBadge id="approved">
            <Icon type="pf" name="ok" />
          </CatalogTileBadge>
        ]}
        title="CodePen"
        vendor="provided by CodePen"
        description="An online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets."
      />
      <CatalogTile
        iconImg={pfBrand}
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <Icon type="fa" name="cog" />
          </CatalogTileBadge>,
          <CatalogTileBadge title="USDA Approved" id="approved">
            <Icon type="pf" name="ok" />
          </CatalogTileBadge>
        ]}
        title="PatternFly"
        vendor={
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        }
        description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
      />
    </div>
  ))
);
