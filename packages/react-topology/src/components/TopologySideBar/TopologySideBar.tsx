import * as React from 'react';

import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { Button } from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Topology/topology-side-bar.css';

export interface TopologySideBarProps {
  /** Additional classes added to the sidebar */
  className?: string;
  /** Contents for the sidebar */
  children?: React.ReactNode;
  /** Flag if sidebar is being used in a resizable drawer (default false) */
  resizable?: boolean;
  /** Not used for resizeable side bars */
  show?: boolean;
  /** A callback for closing the sidebar, if provided the close button will be displayed in the sidebar */
  onClose?: () => void;
  /** Component to place in the header of the sidebar */
  header?: React.ReactNode;
}

export const TopologySideBar: React.FunctionComponent<TopologySideBarProps> = ({
  className = '',
  resizable = false,
  show,
  onClose = null,
  header,
  children = null,
  ...otherProps
}) => {
  const [isIn, setIsIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    let timer: any = null;

    if (isIn !== show) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsIn(show), 150);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [show, isIn]);

  const classNames = resizable
    ? `pf-topology-resizable-side-bar ${className}`
    : `pf-topology-side-bar fade ${className}${show ? ' shown' : ''}${isIn ? ' in' : ''}`;
  return (
    <div {...otherProps} role="dialog" className={classNames}>
      {(resizable || show) && (
        <React.Fragment>
          {onClose && (
            <Button
              className="pf-topology-side-bar__dismiss"
              variant="plain"
              onClick={onClose as any}
              aria-label="Close"
            >
              <TimesIcon />
            </Button>
          )}
          {header && <div className="pf-topology-side-bar__header">{header}</div>}
          <div className="pf-topology-side-bar__body">{children}</div>
        </React.Fragment>
      )}
    </div>
  );
};

TopologySideBar.displayName = 'TopologySideBar';
