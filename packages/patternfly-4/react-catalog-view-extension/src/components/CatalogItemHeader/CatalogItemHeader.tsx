import * as React from 'react';
import classNames from 'classnames';

import { Omit } from '../../helpers/typeUtils';

export interface CatalogItemHeaderProps extends
  Omit<React.HTMLProps<HTMLElement>, 'title'> {
  /** Additional css classes */
  className?: string;
  /** URL of an image for the item's icon */
  iconImg?: string;
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass?: string;
  /** Tile for the catalog item */
  title: string | React.ReactNode;
  /** Vendor for the catalog item */
  vendor?: string | React.ReactNode;
}

export const CatalogItemHeader: React.FunctionComponent<CatalogItemHeaderProps> = ({
  className = '',
  iconImg = null,
  iconClass = null,
  title,
  vendor = null,
  ...props
}: CatalogItemHeaderProps) => {
  return (
    <header className={classNames('catalog-item-header-pf', className)} {...props}>
      {iconImg && <img className="catalog-item-header-pf-icon" src={iconImg} alt="" />}
      {!iconImg && iconClass && <span className={`catalog-item-header-pf-icon ${iconClass}`} />}
      <div className="catalog-item-header-pf-text">
        <h1 className="catalog-item-header-pf-title">{title}</h1>
        {vendor && <h5 className="catalog-item-header-pf-subtitle">{vendor}</h5>}
      </div>
    </header>
  );
};
