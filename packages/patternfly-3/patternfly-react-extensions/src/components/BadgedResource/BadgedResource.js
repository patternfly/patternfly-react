import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'patternfly/dist/js/patternfly-settings';
import { OverlayTrigger, Tooltip } from 'patternfly-react';

const { patternfly } = window;

const BadgedResource = ({
  id,
  className,
  badgeColor,
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

  const renderBadge = showTitle => (
    <span>
      <span className="sr-only">{kindStr}</span>
      <span className="badged-resource-pf-icon" title={showTitle && kindStr} style={{ backgroundColor: badgeColor }}>
        {kindAbbr}
      </span>
    </span>
  );

  const renderResourceType = () => {
    if (kindStr && tipDelay >= 0) {
      const tooltip = <Tooltip id={`${id}-tooltip`}>{kindStr}</Tooltip>;
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

BadgedResource.propTypes = {
  /** Id */
  id: PropTypes.any,
  /** Additional css classes */
  className: PropTypes.string,
  /** Background color for the badge (choose from ResourceBadge.COLORS) */
  badgeColor: PropTypes.any,
  /** Abbreviation for the resource kind to display in the badge */
  kindAbbr: PropTypes.string.isRequired,
  /** Full name of the resource kind to display in the badge tooltip  and for screen readers */
  kindStr: PropTypes.string.isRequired,
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
  badgeColor: BadgedResource.COLORS.lightBlue400,
  resourceName: '',
  large: false,
  tipDelay: 500,
  href: null,
  onClick: null
};

export default BadgedResource;
