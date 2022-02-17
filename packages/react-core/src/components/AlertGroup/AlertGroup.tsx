import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM } from '../../helpers';
import { Alert } from '../Alert';
import { AlertGroupInline } from './AlertGroupInline';

export interface AlertGroupProps extends Omit<React.HTMLProps<HTMLUListElement>, 'className'> {
  /** Additional classes added to the AlertGroup */
  className?: string;
  /** Alerts to be rendered in the AlertGroup */
  children?: React.ReactNode;
  /** Toast notifications are positioned at the top right corner of the viewport */
  isToast?: boolean;
  /** Turns the container into a live region so that changes to content within the AlertGroup, such as appending an Alert, are reliably announced to assistive technology. */
  isLiveRegion?: boolean;
  /** Determine where the alert is appended to */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** Max number to display before showing overflow, negative numbers will show all, default is 3 */
  maxDisplayed?: number;
  /** Amount overflowed by */
  overflowedBy?: number;
  /** Function to call if user clicks on overflow message */
  onOverflowClick?: () => void;
  /** Custom text to show for the overflow message */
  overflowMessage?: string;
}

interface AlertGroupState {
  container: HTMLElement;
}

export class AlertGroup extends React.Component<AlertGroupProps, AlertGroupState> {
  static displayName = 'AlertGroup';
  state = {
    container: undefined
  } as AlertGroupState;

  componentDidMount() {
    const container = document.createElement('div');
    const target: HTMLElement = this.getTargetElement();
    this.setState({ container });
    target.appendChild(container);
  }

  componentWillUnmount() {
    const target: HTMLElement = this.getTargetElement();
    if (this.state.container) {
      target.removeChild(this.state.container);
    }
  }

  getTargetElement() {
    const appendTo = this.props.appendTo;
    if (typeof appendTo === 'function') {
      return appendTo();
    }
    return appendTo || document.body;
  }

  render() {
    const { className, children, isToast, isLiveRegion, maxDisplayed = 3, onOverflowClick, overflowMessage, ...props } = this.props;
    let shownChildren = children;
    // let overflow = 0;
    // if (onOverflowClick && maxDisplayed > -1 && Array.isArray(children) && children.length > maxDisplayed) {
    //   shownChildren = children.slice(0,maxDisplayed-1);
    //   overflow = children.length - maxDisplayed + 1;
    // }
    const alertGroup = (
      <AlertGroupInline onOverflowClick={onOverflowClick} className={className} isToast={isToast} isLiveRegion={isLiveRegion} overflowMessage={overflowMessage} {...props}>
      {/* <AlertGroupInline onOverflowClick={onOverflowClick} className={className} isToast={isToast} isLiveRegion={isLiveRegion} overflowedBy={overflow} {...props}> */}
        {shownChildren}
      </AlertGroupInline>
    );
    if (!this.props.isToast) {
      return alertGroup;
    }

    const container = this.state.container;

    if (!canUseDOM || !container) {
      return null;
    }

    return ReactDOM.createPortal(alertGroup, container);
  }
}
