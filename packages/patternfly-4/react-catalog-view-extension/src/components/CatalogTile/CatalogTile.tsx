import * as React from 'react';
import { Card, CardActions, CardHead, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import classNames from 'classnames';

import { Omit } from '../../helpers/typeUtils';
import { CatalogTileBadge } from './CatalogTileBadge';
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
  /** Max description length before applying truncation (when description is a string), -1 for no truncation */
  maxDescriptionLength?: number;
  /** Truncation function(description, max, id) used to truncate description when necessary (defaults to using ellipses) */
  truncateDescriptionFn: (description: string | React.ReactNode, max: number, id?: any) => string;
  /** Footer for the tile */
  footer?: string | React.ReactNode;
}

export interface CatalogTileState {
  heightStyle: { maxHeight: string, WebkitLineClamp: string };
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
    maxDescriptionLength: 112,
    truncateDescriptionFn: null as (description: string | React.ReactNode, max: number, id?: any) => string,
    footer: null as string | React.ReactNode
  };

  state = {
    heightStyle: {}
  };

  descLineHeight = null as number;
  footerFullHeight = null as number;
  cardFullHeight = null as number;
  headerFullHeight = null as number;
  headFullHeight = null as number;

  componentDidMount() {
    this.computeDescHeight();
  }

  computeDescHeight() {
    let heightStyle = { maxHeight: null as string, WebkitLineClamp: null as string };
    let descriptionHeight = null as number;
    if (this.cardFullHeight && this.headerFullHeight) {
      descriptionHeight = this.cardFullHeight - this.headerFullHeight;
      if (this.headFullHeight) {
        descriptionHeight = descriptionHeight - this.headFullHeight;
      }
      if (this.footerFullHeight) {
        descriptionHeight = descriptionHeight - this.footerFullHeight;
      }
    }
    if (descriptionHeight && this.descLineHeight) {
      heightStyle.maxHeight = `${Math.floor((descriptionHeight) / this.descLineHeight) * this.descLineHeight}px`;
      const maxLines = `${Math.floor(descriptionHeight / this.descLineHeight)}`;
      heightStyle.WebkitLineClamp = maxLines;
    }

    this.setState({ heightStyle });
  }

  private defaultTruncateDescription = (text: (string | React.ReactNode), max: number, id?: any) => {
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

  handleDescriptionSpanRef = (ref: HTMLSpanElement) => {
    if (!ref) {
      return;
    }

    this.descLineHeight = parseInt(window.getComputedStyle(ref).getPropertyValue('line-height'), 10);
  };

  handleFooterRef = (ref: HTMLDivElement) => {
    if (!ref) {
      return;
    }

    this.footerFullHeight = ref.clientHeight;
  }

  handleHeaderRef = (ref: HTMLDivElement) => {
    if (!ref) {
      return;
    }

    this.headerFullHeight = ref.clientHeight;
  }

  handleHeadRef = (ref: HTMLDivElement) => {
    if (!ref) {
      return;
    }

    this.headFullHeight = ref.clientHeight;
  }

  handleCardRef = (ref: HTMLDivElement) => {
    if (!ref) {
      return;
    }

    this.cardFullHeight = ref.clientHeight;
  }

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
      truncateDescriptionFn,
      maxDescriptionLength,
      footer,
      ref,
      ...props
    } = this.props;
    const { heightStyle } = this.state;
    const truncateDescription = truncateDescriptionFn || this.defaultTruncateDescription;

    return (
      <Card component={href || onClick ? 'a' : 'div'} id={id} href={href || '#'} className={classNames('catalog-tile-pf', { featured }, className)} onClick={e => this.handleClick(e)} isHoverable ref={this.handleCardRef} {...props}>
        {(badges.length > 0 || iconImg || iconClass || icon) && <CardHead ref={this.handleHeadRef}>
          {iconImg && <img className="catalog-tile-pf-icon" src={iconImg} alt={iconAlt} />}
          {!iconImg && (iconClass || icon) && <span className={`catalog-tile-pf-icon ${iconClass}`}>{icon}</span>}
          <CardActions>
            {this.renderBadges(badges)}
          </CardActions>
        </CardHead>}
        <CardHeader className="catalog-tile-pf-header" ref={this.handleHeaderRef}>
          <div className="catalog-tile-pf-title">{title}</div>
          {vendor && <div className="catalog-tile-pf-subtitle">{vendor}</div>}
        </CardHeader>
        {description && <CardBody className="catalog-tile-pf-body">
          <div className="catalog-tile-pf-description" style={heightStyle}>
            <span ref={this.handleDescriptionSpanRef}>
              {truncateDescription(description, maxDescriptionLength, id)}
            </span>
          </div>
        </CardBody>}
        {footer && <CardFooter className="catalog-tile-pf-footer" ref={this.handleFooterRef} >{footer}</CardFooter>}
      </Card>
    );
  }
}
