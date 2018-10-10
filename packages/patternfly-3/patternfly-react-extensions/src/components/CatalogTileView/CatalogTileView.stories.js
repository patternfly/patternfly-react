import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName } from 'storybook/constants/siteConstants';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { name } from '../../../package.json';
import { MockCatalogTileViewExample, MockCatalogTileViewExampleSource } from './__mocks__/mockCatalogTileViewExample';

import { CatalogTileView, CatalogTileViewCategory } from './index';
import { CatalogTile, CatalogTileBadge } from '../CatalogTile';

const stories = storiesOf(`${storybookPackageName(name)}/Catalog Components/Catalog Tile View`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Catalog Tile View',
    description:
      'Note: The breadcrumbs are not part of the CatalogTileView component. They are added to show the intended ' +
      'usage of the viewAll button.'
  })
);

stories.addDecorator(withKnobs);

stories.add(
  'CatalogTileView',
  withInfo({
    source: false,
    propTables: [CatalogTileView, CatalogTileViewCategory, CatalogTile, CatalogTileBadge],
    propTablesExclude: [MockCatalogTileViewExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockCatalogTileViewExampleSource}</pre>
      </div>
    )
  })(() => {
    const emptyState = boolean('Empty State', false);
    return <MockCatalogTileViewExample emptyState={emptyState} />;
  })
);
