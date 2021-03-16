import * as React from 'react';

import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import { Button } from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Topology/topology-side-bar.css';

export interface TopologySideBarProps {
  /** Additional classes added to the sidebar */
  className?: string;
  /** Contents for the sidebar */
  children?: React.ReactNode;
  /** @deprecated - no longer used */
  show?: boolean;
  /** A callback for closing the sidebar, if provided the close button will be displayed in the sidebar */
  onClose?: () => void;
  /** Component to place in the header of the sidebar */
  header?: React.ReactNode;
}

export const TopologySideBar: React.FunctionComponent<TopologySideBarProps> = ({
  className = '',
  show,
  onClose = null,
  header,
  children = null,
  ...otherProps
}) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    show !== undefined && console.warn('The TopologySideBar show prop has been deprecated and is no longer used.');
  }

  return (
    <div {...otherProps} role="dialog" className={`pf-topology-side-bar ${className}`}>
      <React.Fragment>
        {onClose && (
          <Button className="pf-topology-side-bar__dismiss" variant="plain" onClick={onClose as any} aria-label="Close">
            <TimesIcon />
          </Button>
        )}
        {header && <div className="pf-topology-side-bar__header">{header}</div>}
        <div className="pf-topology-side-bar__body">{children}</div>
      </React.Fragment>
    </div>
  );
};

TopologySideBar.displayName = 'TopologySideBar';
