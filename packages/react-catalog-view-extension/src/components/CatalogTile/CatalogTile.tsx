import * as React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';
import classNames from 'classnames';

export interface CatalogTileProps extends Omit<React.HTMLProps<HTMLElement>, 'title'> {
  /** Id */
  id?: any;
  /** Additional css classes */
  className?: string;
  /** Flag if the tile is 'featured' */
  featured: boolean;
  /** Callback for a click on the tile */
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  /** href for the tile if used as a link */
  href: string;
  /** URL of an image for the item's icon */
  iconImg?: string;
  /** Alternate text for the item's icon */
  iconAlt?: string;
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass?: string;
  /** Alternatively provided JSX for the icon */
  icon?: React.ReactNode;
  /** Array of badges */
  badges?: React.ReactNode[];
  /** Tile for the catalog item */
  title: string | React.ReactNode;
  /** Vendor for the catalog item */
  vendor?: string | React.ReactNode;
  /** Description of the catalog item */
  description?: string | React.ReactNode;
  /** Footer for the tile */
  footer?: string | React.ReactNode;
}

export class CatalogTile extends React.Component<CatalogTileProps> {
  static defaultProps = {
    id: null as any,
    className: '',
    featured: false,
    onClick: null as (event: React.SyntheticEvent<HTMLElement>) => void,
    href: null as string,
    iconImg: null as string,
    iconAlt: '',
    iconClass: '',
    icon: null as React.ReactNode,
    badges: [] as React.ReactNode[],
    vendor: null as string | React.ReactNode,
    description: null as string | React.ReactNode,
    footer: null as string | React.ReactNode
  };

  private handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
    const { onClick, href } = this.props;

    if (!href) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  private renderBadges = (badges: React.ReactNode[]) => {
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
      onClick,
      href,
      icon,
      iconImg,
      iconAlt,
      iconClass,
      badges,
      title,
      vendor,
      description,
      footer,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ref,
      ...props
    } = this.props;

    return (
      <Card
        component={href || onClick ? 'a' : 'div'}
        id={id}
        href={href || '#'}
        className={classNames('catalog-tile-pf', { featured }, className)}
        onClick={e => this.handleClick(e)}
        isHoverable
        {...props}
      >
        {(badges.length > 0 || iconImg || iconClass || icon) && (
          <CardHeader>
            {iconImg && <img className="catalog-tile-pf-icon" src={iconImg} alt={iconAlt} />}
            {!iconImg && (iconClass || icon) && <span className={`catalog-tile-pf-icon ${iconClass}`}>{icon}</span>}
            {badges.length > 0 && <CardActions>{this.renderBadges(badges)}</CardActions>}
          </CardHeader>
        )}
        <CardTitle className="catalog-tile-pf-header">
          <div className="catalog-tile-pf-title">{title}</div>
          {vendor && <div className="catalog-tile-pf-subtitle">{vendor}</div>}
        </CardTitle>
        {description && (
          <CardBody className="catalog-tile-pf-body">
            <div className="catalog-tile-pf-description">
              <span className={classNames({ 'has-footer': footer })}>{description}</span>
            </div>
          </CardBody>
        )}
        {footer && <CardFooter className="catalog-tile-pf-footer">{footer}</CardFooter>}
      </Card>
    );
  }
}
