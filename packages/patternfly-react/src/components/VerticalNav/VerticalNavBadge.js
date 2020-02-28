import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';

const VerticalNavBadge = props => {
  const { badgeClass, iconClass, tooltip, count } = props;
  const key = badgeClass || iconClass || count;
  const badgeDiv = (
    <div className={classNames('badge', badgeClass)}>
      {count && iconClass && <span className={iconClass} />}
      {count && <span>{count}</span>}
    </div>
  );
  return !tooltip ? (
    badgeDiv
  ) : (
    <OverlayTrigger key={key} placement="right" overlay={<Tooltip id={key}>{tooltip}</Tooltip>}>
      {badgeDiv}
    </OverlayTrigger>
  );
};

VerticalNavBadge.propTypes = {
  badgeClass: PropTypes.string,
  iconClass: PropTypes.string,
  tooltip: PropTypes.string,
  count: PropTypes.number
};
VerticalNavBadge.defaultProps = {
  badgeClass: '',
  iconClass: '',
  tooltip: '',
  count: undefined
};

VerticalNavBadge.displayName = 'VerticalNav.Badge';

export default VerticalNavBadge;
