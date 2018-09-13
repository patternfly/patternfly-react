import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger, Tooltip } from 'patternfly-react';

const CatalogTileBadge = ({ children, className, id, title, ...props }) => {
  const classes = classNames('catalog-tile-pf-badge', className);

  if (title) {
    const tooltip = <Tooltip id={id}>{title}</Tooltip>;
    return (
      <React.Fragment>
        <OverlayTrigger overlay={tooltip} placement="top">
          <span className={classes} {...props}>
            {children}
            <span className="sr-only">{title}</span>
          </span>
        </OverlayTrigger>
      </React.Fragment>
    );
  }

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

CatalogTileBadge.propTypes = {
  /** Children (typically an Icon) */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Id (necessary for tooltip) */
  id: PropTypes.string,
  /** Tooltip String (also used for screen readers) */
  title: PropTypes.string
};

CatalogTileBadge.defaultProps = {
  children: null,
  className: '',
  id: null,
  title: null
};

export default CatalogTileBadge;
