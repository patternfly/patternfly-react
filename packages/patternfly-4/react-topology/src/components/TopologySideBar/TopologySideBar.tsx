import * as React from 'react';

import { TimesIcon } from '@patternfly/react-icons';
import { Button } from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Topology/topology-side-bar.css';

export interface TopologySideBarProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the sidebar */
  className?: string;
  /** Contents for the sidebar */
  children?: React.ReactNode;
  /** Flag if sidebar is open */
  show?: boolean;
  /** A callback for closing the sidebar, if provided the close button will be displayed in the sidebar */
  onClose?: () => void;
  /** Component to place in the header of the sidebar */
  header?: React.ReactNode;
}

interface TopologySideBarState {
  isIn: boolean;
}

export class TopologySideBar extends React.Component<TopologySideBarProps, TopologySideBarState> {

  timer: any = null;

  constructor(props: TopologySideBarProps) {
    super(props);
    this.state = { isIn: false };
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  updateForTransitions = () => {
    this.setState({ isIn: this.props.show });
  }

  startTimer = () => {
    this.clearTimer();
    this.timer = setTimeout(this.updateForTransitions, 150);
  }

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  render() {
    const {
      className = '',
      show = false,
      onClose = null,
      header,
      children = null,
      ...otherProps
    } = this.props;
    const { isIn } = this.state;

    if (isIn !== show) {
      this.clearTimer();
      this.startTimer();
    }

    return (
      <div
        {...otherProps}
        role="dialog"
        className={`pf-topology-side-bar fade ${className}${show ? ' shown' : ''}${isIn ? ' in' : ''}`}
      >
        {show && (
          <React.Fragment>
            {onClose && (
              <Button className="pf-topology-side-bar__dismiss" variant="plain" onClick={onClose as any} aria-label="Close">
                <TimesIcon />
              </Button>
            )}
            {header && (
              <div className="pf-topology-side-bar__header">
                {header}
              </div>
            )}
            <div className="pf-topology-side-bar__body">
              {children}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
