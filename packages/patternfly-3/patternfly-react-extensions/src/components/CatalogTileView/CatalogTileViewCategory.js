import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, debounce, noop } from 'patternfly-react';
import { ResizeSensor } from 'css-element-queries';
import Break from 'breakjs';

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

  componentWillUnmount() {
    this._resizeSensors.forEach(sensor => {
      sensor.detach();
    });
  }

  computeNumShown = () => {
    if (this.categoryContainer && layout) {
      let rows = 1;

      if (layout.atMost('mobile')) {
        rows = 3;
      } else if (layout.atMost('small')) {
        rows = 2;
      }

      const numShown = Math.floor(this.categoryContainer.clientWidth / 240) * rows;
      const rightSpacerWidth = this.categoryContainer.clientWidth % 240;
      this.setState({ numShown, rightSpacerWidth });
    }
  };

  handleRef = ref => {
    if (!ref) {
      return;
    }
    this.categoryContainer = ref;
    this.computeNumShown();

    // Watch for resizes and recompute the number shown when it does
    this._resizeSensors.push(new ResizeSensor([this.categoryContainer], debounce(this.computeNumShown, 100)));
  };

  render() {
    const { children, className, title, totalItems, viewAllText, viewAll, onViewAll, ...props } = this.props;
    const { numShown, rightSpacerWidth } = this.state;
    const classes = classNames('catalog-tile-view-pf-category', className);
    const bodyClasses = classNames('catalog-tile-view-pf-category-body', { 'view-all': viewAll });

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
        <div className={bodyClasses}>{children}</div>
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
  onViewAll: noop
};

export default CatalogTileViewCategory;
