import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'patternfly/dist/js/patternfly-settings';
import { OverlayTrigger, Tooltip } from 'patternfly-react';
import { resourceTypes, kindAbbrs, kindStrings } from './ResourceTypes';

const { patternfly } = window;

const BadgedResource = ({
  id,
  className,
  badgeColor,
  resourceKind,
  kindAbbr,
  kindStr,
  resourceName,
  large,
  tipDelay,
  href,
  onClick,
  ...props
}) => {
  const handleClick = e => {
    if (!href) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  const renderBadge = showTitle => {
    const classes = classNames('badged-resource-pf-icon', resourceKind);
    return (
      <span>
        <span className="sr-only">{kindStr || kindStrings[resourceKind]}</span>
        <span
          className={classes}
          title={showTitle && (kindStr || kindStrings[resourceKind])}
          style={{ backgroundColor: badgeColor }}
        >
          {kindAbbr || kindAbbrs[resourceKind]}
        </span>
      </span>
    );
  };

  const renderResourceType = () => {
    const tipString = kindStr || kindStrings[resourceKind];

    if (tipString && tipDelay >= 0) {
      const tooltip = <Tooltip id={`${id}-tooltip`}>{tipString}</Tooltip>;
      return (
        <OverlayTrigger overlay={tooltip} placement="top" delay={tipDelay}>
          {renderBadge()}
        </OverlayTrigger>
      );
    }

    return renderBadge(true);
  };

  const renderResourceName = () => {
    if (href || onClick) {
      return (
        <a className="badged-resource-pf-resource-name" href={href || '#'} {...props} onClick={e => handleClick(e)}>
          {resourceName}
        </a>
      );
    }
    return <span className="badged-resource-pf-resource-name">{resourceName}</span>;
  };

  const classes = classNames('badged-resource-pf', { 'badged-resource-pf-lg': large }, className);

  return (
    <span id={id} className={classes} {...props}>
      {renderResourceType()}
      {renderResourceName()}
    </span>
  );
};

BadgedResource.COLORS = patternfly.pfPaletteColors;
BadgedResource.KINDS = resourceTypes;

BadgedResource.propTypes = {
  /** Id */
  id: PropTypes.any,
  /** Additional css classes */
  className: PropTypes.string,
  /** Not Preferred: Background color for the badge (choose from ResourceBadge.COLORS) */
  badgeColor: PropTypes.any,
  /** Preferred: css class for the badge (choose from BadgedResource.KINDS) */
  resourceKind: PropTypes.string,
  /** Abbreviation for the resource kind to display in the badge (defaulted if valid resourceKind is given) */
  kindAbbr: PropTypes.string,
  /** Full name of the resource kind to display in the badge tooltip and for screen readers (defaulted if valid resourceKind is given) */
  kindStr: PropTypes.string,
  /** Name of the resource */
  resourceName: PropTypes.string,
  /** Flag for large version */
  large: PropTypes.bool,
  /** Delay in ms for the tooltip (-1 to use title rather than a tooltip) */
  tipDelay: PropTypes.number,
  /** href for the item if used as a link */
  href: PropTypes.string,
  /** Callback for a click on the item */
  onClick: PropTypes.func
};

BadgedResource.defaultProps = {
  id: null,
  className: '',
  badgeColor: null,
  resourceKind: '',
  kindAbbr: '',
  kindStr: '',
  resourceName: '',
  large: false,
  tipDelay: 500,
  href: null,
  onClick: null
};

export default BadgedResource;
