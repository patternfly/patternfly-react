import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-side-bar';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { Button } from '@patternfly/react-core';

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
    ? css(styles.topologyResizableSideBar, className)
    : css(styles.topologySideBar, 'fade', className, show && styles.shown, isIn && styles.in);
  return (
    <div {...otherProps} role="dialog" className={classNames}>
      {(resizable || show) && (
        <React.Fragment>
          {onClose && (
            <Button
              className={css(styles.topologySideBarDismiss)}
              variant="plain"
              onClick={onClose as any}
              aria-label="Close"
            >
              <TimesIcon />
            </Button>
          )}
          {header && <div className={css(styles.topologySideBarHeader)}>{header}</div>}
          {children}
        </React.Fragment>
      )}
    </div>
  );
};

TopologySideBar.displayName = 'TopologySideBar';
