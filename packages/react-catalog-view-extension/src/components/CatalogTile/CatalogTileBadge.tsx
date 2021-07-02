import * as React from 'react';
import { Tooltip } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';

export interface CatalogTileBadgeProps extends Omit<React.HTMLProps<HTMLElement>, 'title'> {
  /** Children (typically an Icon) */
  children?: React.ReactNode;
  /** Additional css classes */
  className?: string;
  /** Id (was necessary for PF3 tooltip, but not for the PF4 one; keeping prop in case people still want it) */
  id?: string;
  /** Tooltip String (also used for screen readers) */
  title?: string;
}

export const CatalogTileBadge: React.FunctionComponent<CatalogTileBadgeProps> = ({
  children = null,
  className = '',
  id = null,
  title = null,
  ...props
}: CatalogTileBadgeProps) => {
  const classes = css('catalog-tile-pf-badge', className);

  if (title) {
    return (
      <React.Fragment>
        <Tooltip id={id} content={title}>
          <span className={classes} {...props}>
            {children}
            <span className="pf-u-screen-reader">{title}</span>
          </span>
        </Tooltip>
      </React.Fragment>
    );
  }
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
CatalogTileBadge.displayName = 'CatalogTileBadge';
