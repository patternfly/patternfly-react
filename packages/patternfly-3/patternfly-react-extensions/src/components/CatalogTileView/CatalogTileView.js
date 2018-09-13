import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CatalogTileViewCategory from './CatalogTileViewCategory';

const CatalogTileView = ({ children, className, ...props }) => {
  const classes = classNames('catalog-tile-view-pf', className);

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
  className: PropTypes.string
};

CatalogTileView.defaultProps = {
  children: null,
  className: ''
};

CatalogTileView.Category = CatalogTileViewCategory;

export default CatalogTileView;
