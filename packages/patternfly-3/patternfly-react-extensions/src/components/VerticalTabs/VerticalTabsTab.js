import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, noop } from 'patternfly-react';

const VerticalTabsTab = ({ className, title, active, onActivate, ...props }) => {
  const classes = classNames('vertical-tabs-pf-tab', { active }, className);

  return (
    <li className={classes}>
      <Button bsStyle="link" {...props} onClick={onActivate}>
        {title}
      </Button>
    </li>
  );
};

VerticalTabsTab.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Title for the tab */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Flag if this is the active tab */
  active: PropTypes.bool,
  /** Callback function when the tab is activated */
  onActivate: PropTypes.func
};

VerticalTabsTab.defaultProps = {
  className: '',
  title: null,
  active: false,
  onActivate: noop
};

export default VerticalTabsTab;
