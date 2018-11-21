import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, helpers } from 'patternfly-react';
import { ResizeSensor } from 'css-element-queries';
import Break from 'breakjs';
import CatalogTile from '../CatalogTile/CatalogTile';

const layout =
  window && typeof window.matchMedia === 'function'
    ? Break({ mobile: 480, small: 768, medium: 992, large: 1200 })
    : { atMost: () => false };

class CatalogTileViewCategory extends React.Component {
  constructor(props) {
    super(props);
    this._resizeSensors = [];
    this.state = {
      numShown: 0,
      rightSpacerWidth: 0
    };
  }

  componentDidMount() {
    this._isMounted = true;

    // Watch for resizes and recompute the number shown when it does
    this.computeNumShown();
    this._resizeSensors.push(new ResizeSensor([this.categoryContainer], helpers.debounce(this.computeNumShown, 100)));
  }

  componentWillUnmount() {
    this._isMounted = false;
    this._resizeSensors.forEach(sensor => {
      sensor.detach();
    });
  }

  computeNumShown = () => {
    if (!this._isMounted) {
      return;
    }

    if (this.categoryContainer && layout) {
      let rows = 1;

      if (layout.atMost('mobile')) {
        rows = 3;
      } else if (layout.atMost('small')) {
        rows = 2;
      }

      const numShown = Math.floor(this.categoryContainer.clientWidth / 235) * rows;
      const rightSpacerWidth = this.categoryContainer.clientWidth % 235;
      this.setState({ numShown, rightSpacerWidth });
    }
  };

  handleRef = ref => {
    if (!ref) {
      return;
    }
    this.categoryContainer = ref;
  };

  render() {
    const { children, className, title, totalItems, viewAllText, viewAll, onViewAll, ...props } = this.props;
    const { numShown, rightSpacerWidth } = this.state;
    const classes = classNames('catalog-tile-view-pf-category', className);

    const tileValidator = child => helpers.hasDisplayName(child, CatalogTile.displayName);
    const filterCatalogTiles = childrenArray =>
      childrenArray &&
      childrenArray.filter(
        child =>
          tileValidator(child) ||
          (child.props && filterCatalogTiles(helpers.childrenToArray(child.props.children), tileValidator))
      );

    const allChildren = helpers.childrenToArray(children);

    /* Find the children that are tiles (or are wrapped tiles) and those that are not */
    let catalogTiles = filterCatalogTiles(allChildren);
    const nonTiles = allChildren.filter(child => !catalogTiles.includes(child));

    // Only show the tiles that fit in a single row, unless viewAll is specified
    if (!viewAll && numShown && numShown < totalItems) {
      catalogTiles = catalogTiles.slice(0, numShown);
    }

    return (
      <div className={classes} {...props} ref={this.handleRef}>
        <div className="catalog-tile-view-pf-category-header">
          <span className="catalog-tile-view-pf-category-header-title">{title}</span>
          {!viewAll &&
            numShown < totalItems && (
              <span className="pull-right">
                <Button
                  bsStyle="link"
                  className="catalog-tile-view-pf-category-view-all pull-right"
                  style={{ marginRight: rightSpacerWidth }}
                  onClick={onViewAll}
                >
                  {`${viewAllText} (${totalItems})`}
                </Button>
              </span>
            )}
        </div>
        <div className="catalog-tile-view-pf-category-body">
          {catalogTiles}
          {nonTiles}
        </div>
      </div>
    );
  }
}

CatalogTileViewCategory.propTypes = {
  /** CatalogTile items */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Tile for the category */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Total number of items in this category */
  totalItems: PropTypes.number,
  /** Text to show for the view all toggle when viewAll is false */
  viewAllText: PropTypes.string,
  /** Flag to show all tiles (versus only the first row) */
  viewAll: PropTypes.bool,
  /** Callback when view all is clicked */
  onViewAll: PropTypes.func
};

CatalogTileViewCategory.defaultProps = {
  children: null,
  className: '',
  title: null,
  totalItems: 0,
  viewAll: true,
  viewAllText: 'View All',
  onViewAll: helpers.noop
};

export default CatalogTileViewCategory;
