import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CatalogItemHeader = ({ className, iconImg, iconClass, title, vendor, ...props }) => {
  const classes = classNames('catalog-item-header-pf', className);

  return (
    <header className={classes} {...props}>
      {iconImg && <img className="catalog-item-header-pf-icon" src={iconImg} alt="" />}
      {!iconImg && iconClass && <span className={`catalog-item-header-pf-icon ${iconClass}`} />}
      <div className="catalog-item-header-pf-text">
        <h1 className="catalog-item-header-pf-title">{title}</h1>
        {vendor && <h5 className="catalog-item-header-pf-subtitle">{vendor}</h5>}
      </div>
    </header>
  );
};

CatalogItemHeader.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** URL of an image for the item's icon */
  iconImg: PropTypes.string,
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass: PropTypes.string,
  /** Tile for the catalog item */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Vendor for the catalog item */
  vendor: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

CatalogItemHeader.defaultProps = {
  className: '',
  iconImg: null,
  iconClass: null,
  vendor: null
};

export default CatalogItemHeader;
