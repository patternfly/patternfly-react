import React from 'react';
import { Icon } from 'patternfly-react';
import { mockItems } from './mockItems';

import { CatalogTile } from '../../CatalogTile';
import { CatalogTileView } from '../index';

const MockCatalogTileViewNoCategoriesExample = () => {
  const getBadges = item => {
    const badges = [];

    if (item.certified) {
      badges.push(
        <CatalogTile.Badge key="certified" id="certified" title="Certified">
          <Icon type="fa" name="cog" />
        </CatalogTile.Badge>
      );
    }

    if (item.approved) {
      badges.push(
        <CatalogTile.Badge key="certified" title="USDA Approved" id="approved">
          <Icon type="pf" name="ok" />
        </CatalogTile.Badge>
      );
    }

    return badges;
  };

  return (
    <CatalogTileView useCategories={false}>
      {mockItems.map((item, index) => (
        <CatalogTile
          id={item.id}
          key={`tile-${index}`}
          title={item.title}
          featured={item.featured}
          iconImg={item.image}
          vendor={item.vendor}
          description={item.description}
          badges={getBadges(item)}
        />
      ))}
    </CatalogTileView>
  );
};

export { MockCatalogTileViewNoCategoriesExample };

export const MockCatalogTileViewNoCategoriesExampleSource = `
import React from 'react';
import { Icon } from 'patternfly-react';
import { mockItems } from './mockItems';

import { CatalogTile } from '../../CatalogTile';
import { CatalogTileView } from '../index';

const MockCatalogTileViewNoCategoriesExample = () => {
  const getBadges = item => {
    const badges = [];

    if (item.certified) {
      badges.push(
        <CatalogTile.Badge key="certified" id="certified" title="Certified">
          <Icon type="fa" name="cog" />
        </CatalogTile.Badge>
      );
    }

    if (item.approved) {
      badges.push(
        <CatalogTile.Badge key="certified" title="USDA Approved" id="approved">
          <Icon type="pf" name="ok" />
        </CatalogTile.Badge>
      );
    }

    return badges;
  };

  return (
    <CatalogTileView useCategories={false}>
      {mockItems.map((item, index) => (
        <CatalogTile
          id={item.id}
          key={\`tile-\${index}\`}
          title={item.title}
          featured={item.featured}
          iconImg={item.image}
          vendor={item.vendor}
          description={item.description}
          badges={getBadges(item)}
        />
      ))}
    </CatalogTileView>
  );
};

export { MockCatalogTileViewNoCategoriesExample };
`;
