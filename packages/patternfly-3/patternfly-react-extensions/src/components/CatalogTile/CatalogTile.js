import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CatalogTileBadge from './CatalogTileBadge';

const CatalogTile = ({
  id,
  className,
  featured,
  iconImg,
  iconClass,
  badges,
  title,
  vendor,
  description,
  maxDescriptionLength,
  truncateDescriptionFn,
  ...props
}) => {
  const classes = classNames('catalog-tile-pf', { featured }, className);

  const defaultTruncateDescription = (text, max) => {
    if (typeof text !== 'string' || text.length <= max) {
      return text;
    }

    return (
      <React.Fragment>
        {text.substring(0, max - 3)}
        &hellip;
      </React.Fragment>
    );
  };

  const renderBadges = () => {
    if (!badges || !badges.length) {
      return null;
    }

    return (
      <div className="catalog-tile-pf-badge-container">
        {badges.map((badge, index) => (
          <span key={`badge-${index}`}>{badge}</span>
        ))}
      </div>
    );
  };

  const truncateDescription = truncateDescriptionFn || defaultTruncateDescription;

  return (
    <div id={id} className={classes} {...props}>
      <div className="catalog-tile-pf-header">
        {iconImg && <img className="catalog-tile-pf-icon" src={iconImg} alt="" />}
        {iconClass && <span className={`catalog-tile-pf-icon ${iconClass}`} />}
        {renderBadges()}
      </div>
      <div className="catalog-tile-pf-body">
        <div className="catalog-tile-pf-title">{title}</div>
        <div className="catalog-tile-pf-subtitle">{vendor}</div>
        <div className="catalog-tile-pf-description">{truncateDescription(description, maxDescriptionLength, id)}</div>
      </div>
    </div>
  );
};

CatalogTile.propTypes = {
  /** Id */
  id: PropTypes.any,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag if the tile is 'featured' */
  featured: PropTypes.bool,
  /** URL of an image for the item's icon */
  iconImg: PropTypes.string,
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass: PropTypes.string,
  /** Array of badges */
  badges: PropTypes.arrayOf(PropTypes.node),
  /** Tile for the catalog item */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Vendor for the catalog item */
  vendor: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Description of the catalog item */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Max description length before applying truncation (when description is a string) */
  maxDescriptionLength: PropTypes.number,
  /** Truncation function(description, max, id) used to truncate description when necessary (defaults to using ellipses) */
  truncateDescriptionFn: PropTypes.func
};

CatalogTile.defaultProps = {
  id: null,
  className: '',
  featured: false,
  iconImg: null,
  iconClass: null,
  badges: [],
  vendor: null,
  description: null,
  maxDescriptionLength: 112,
  truncateDescriptionFn: null
};

CatalogTile.Badge = CatalogTileBadge;

export default CatalogTile;
