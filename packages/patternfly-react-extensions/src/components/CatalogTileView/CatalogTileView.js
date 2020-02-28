import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CatalogTileViewCategory from './CatalogTileViewCategory';

const CatalogTileView = ({ children, className, useCategories, ...props }) => {
  const classes = classNames(
    'catalog-tile-view-pf',
    { 'catalog-tile-view-pf-no-categories': !useCategories },
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

CatalogTileView.propTypes = {
  /** Children */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to use categories in the view */
  useCategories: PropTypes.bool
};

CatalogTileView.defaultProps = {
  children: null,
  useCategories: true,
  className: ''
};

CatalogTileView.Category = CatalogTileViewCategory;

export default CatalogTileView;
