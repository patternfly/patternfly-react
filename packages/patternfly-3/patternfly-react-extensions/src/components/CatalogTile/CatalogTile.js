import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CatalogTileBadge from './CatalogTileBadge';

const defaultTruncateDescription = (text, max) => {
  if (max === -1 || typeof text !== 'string' || text.length <= max) {
    return text;
  }

  return (
    <React.Fragment>
      {text.substring(0, max - 3)}
      &hellip;
    </React.Fragment>
  );
};

class CatalogTile extends React.Component {
  state = {
    heightStyle: {}
  };

  componentDidMount() {
    this.computeDescHeight();
  }

  computeDescHeight() {
    const heightStyle = {};

    if (this.descFullHeight && this.descLineHeight) {
      heightStyle.maxHeight = `${Math.floor(this.descFullHeight / this.descLineHeight) * this.descLineHeight}px`;
    }
    console.log('descFullHeight: ', this.descFullHeight);
    console.log('descLineHeight: ', this.descLineHeight);
    console.log('max: ', heightStyle.maxHeight);

    this.setState({ heightStyle });
  }

  handleDescriptionRef = ref => {
    if (!ref) {
      return;
    }

    this.descFullHeight = ref.clientHeight;
  };

  handleDescriptionSpanRef = ref => {
    if (!ref) {
      return;
    }

    this.descLineHeight = parseInt(window.getComputedStyle(ref).getPropertyValue('line-height'), 10);
  };

  handleClick = e => {
    const { onClick, href } = this.props;

    if (!href) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  renderBadges = badges => {
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

  render() {
    const {
      id,
      className,
      featured,
      href,
      onClick,
      icon,
      iconImg,
      iconAlt,
      iconClass,
      badges,
      title,
      vendor,
      description,
      truncateDescriptionFn,
      maxDescriptionLength,
      footer,
      ...otherProps
    } = this.props;
    const { heightStyle } = this.state;
    const truncateDescription = truncateDescriptionFn || defaultTruncateDescription;

    const classes = classNames('catalog-tile-pf', { featured }, className);

    const OuterComponent =
      href || onClick
        ? ({ children }) => (
            <a id={id} className={classes} href={href || '#'} {...otherProps} onClick={e => this.handleClick(e)}>
              {children}
            </a>
          )
        : ({ children }) => (
            <div id={id} className={classes} {...otherProps}>
              {children}
            </div>
          );

    return (
      <OuterComponent>
        <div className="catalog-tile-pf-header">
          {iconImg && <img className="catalog-tile-pf-icon" src={iconImg} alt={iconAlt} />}
          {!iconImg && (iconClass || icon) && <span className={`catalog-tile-pf-icon ${iconClass}`}>{icon}</span>}
          {this.renderBadges(badges)}
        </div>
        <div className="catalog-tile-pf-body">
          <div className="catalog-tile-pf-title">{title}</div>
          <div className="catalog-tile-pf-subtitle">{vendor}</div>
          <div className="catalog-tile-pf-description" ref={this.handleDescriptionRef} style={heightStyle}>
            <span ref={this.handleDescriptionSpanRef}>
              {truncateDescription(description, maxDescriptionLength, id)}
            </span>
          </div>
        </div>
        {footer && <div className="catalog-tile-pf-footer">{footer}</div>}
      </OuterComponent>
    );
  }
}

CatalogTile.propTypes = {
  /** Id */
  id: PropTypes.any,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag if the tile is 'featured' */
  featured: PropTypes.bool,
  /** href for the tile if used as a link */
  href: PropTypes.string,
  /** Callback for a click on the tile */
  onClick: PropTypes.func,
  /** URL of an image for the item's icon */
  iconImg: PropTypes.string,
  /** Alternate text for the item's icon */
  iconAlt: PropTypes.string,
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass: PropTypes.string,
  /** Alternatively provided JSX for the icon */
  icon: PropTypes.node,
  /** Array of badges */
  badges: PropTypes.arrayOf(PropTypes.node),
  /** Tile for the catalog item */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Vendor for the catalog item */
  vendor: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Description of the catalog item */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Max description length before applying truncation (when description is a string), -1 for auto truncate to last visible line */
  maxDescriptionLength: PropTypes.number,
  /** Truncation function(description, max, id) used to truncate description when necessary (defaults to using ellipses) */
  truncateDescriptionFn: PropTypes.func,
  /** Footer for the tile */
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

CatalogTile.defaultProps = {
  id: null,
  className: '',
  featured: false,
  href: null,
  onClick: null,
  iconImg: null,
  iconAlt: '',
  iconClass: '',
  icon: null,
  badges: [],
  vendor: null,
  description: null,
  maxDescriptionLength: -1,
  truncateDescriptionFn: null,
  footer: null
};

CatalogTile.displayName = 'CatalogTile';

CatalogTile.Badge = CatalogTileBadge;

export default CatalogTile;
