import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, EmptyState, Icon } from 'patternfly-react';
import { mockItems } from './mockItems';

import { CatalogTile } from '../../CatalogTile';
import { CatalogTileView } from '../index';

class MockCatalogTileViewExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: null
    };
  }

  onViewAll = id => {
    this.setState({ showAll: id });
  };

  getBadges = item => {
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

  renderEmptyState = category => (
    <EmptyState className="blank-slate-content-pf">
      <EmptyState.Info>There are no items in this category.</EmptyState.Info>
    </EmptyState>
  );

  renderCategory = category => {
    const { showAll } = this.state;
    const { emptyState } = this.props;

    if (!showAll || category.id === showAll) {
      return (
        <CatalogTileView.Category
          key={category.id}
          title={category.category}
          totalItems={emptyState ? 0 : category.items && category.items.length}
          viewAll={showAll === category.id}
          onViewAll={() => this.onViewAll(category.id)}
        >
          {!emptyState &&
            category.items &&
            category.items.map((item, index) => (
              <CatalogTile
                id={item.id}
                key={`tile-${index}`}
                title={item.title}
                featured={item.featured}
                iconImg={item.image}
                vendor={item.vendor}
                description={item.description}
                badges={this.getBadges(item)}
              />
            ))}
          {emptyState && this.renderEmptyState(category)}
        </CatalogTileView.Category>
      );
    }

    return null;
  };

  render() {
    const { showAll } = this.state;

    const activeCategory = showAll ? mockItems.find(category => category.id === showAll) : null;

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#" active={!activeCategory} onClick={() => this.onViewAll(null)}>
            All Categories
          </Breadcrumb.Item>
          {activeCategory && <Breadcrumb.Item active>{activeCategory.category}</Breadcrumb.Item>}
        </Breadcrumb>
        <CatalogTileView>
          {activeCategory
            ? this.renderCategory(activeCategory)
            : mockItems.map(category => this.renderCategory(category))}
        </CatalogTileView>
      </div>
    );
  }
}
MockCatalogTileViewExample.propTypes = {
  emptyState: PropTypes.bool
};
MockCatalogTileViewExample.defaultProps = {
  emptyState: false
};

export { MockCatalogTileViewExample };

export const MockCatalogTileViewExampleSource = `
import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, EmptyState, Icon } from 'patternfly-react';
import { mockItems } from './mockItems';

import { CatalogTile } from '../../CatalogTile';
import { CatalogTileView } from '../index';

class MockCatalogTileViewExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: null
    };
  }

  onViewAll = id => {
    this.setState({ showAll: id });
  };

  getBadges = item => {
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

  renderEmptyState = category => (
    <EmptyState className="blank-slate-content-pf">
      <EmptyState.Info>There are no items in this category.</EmptyState.Info>
    </EmptyState>
  );

  renderCategory = category => {
    const { showAll } = this.state;
    const { emptyState } = this.props;

    if (!showAll || category.id === showAll) {
      return (
        <CatalogTileView.Category
          key={category.id}
          title={category.category}
          totalItems={!emptyState && category.items && category.items.length}
          viewAll={showAll === category.id}
          onViewAll={() => this.onViewAll(category.id)}
        >
          {!emptyState &&
            category.items &&
            category.items.map((item, index) => (
              <CatalogTile
                id={item.id}
                key={\`tile-\${index}\`}
                title={item.title}
                featured={item.featured}
                iconImg={item.image}
                vendor={item.vendor}
                description={item.description}
                badges={this.getBadges(item)}
              />
            ))}
          {emptyState && this.renderEmptyState(category)}
        </CatalogTileView.Category>
      );
    }

    return null;
  };

  render() {
    const { showAll } = this.state;

    const activeCategory = showAll ? mockItems.find(category => category.id === showAll) : null;

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#" active={!activeCategory} onClick={() => this.onViewAll(null)}>
            All Categories
          </Breadcrumb.Item>
          {activeCategory && <Breadcrumb.Item active>{activeCategory.category}</Breadcrumb.Item>}
        </Breadcrumb>
        <CatalogTileView>
          {activeCategory
            ? this.renderCategory(activeCategory)
            : mockItems.map(category => this.renderCategory(category))}
        </CatalogTileView>
      </div>
    );
  }
}
MockCatalogTileViewExample.propTypes = {
  emptyState: PropTypes.bool
};
MockCatalogTileViewExample.defaultProps = {
  emptyState: false
};

export { MockCatalogTileViewExample };
`;
