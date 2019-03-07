import { FunctionComponent, HTMLProps, ReactElement } from 'react';
import { Omit } from '../../helpers/typeUtils';
import { Instance, BasicPlacement, Props } from 'tippy.js';

export const PopoverPosition: {
  top: 'top';
  bottom: 'bottom';
  left: 'left';
  right: 'right';
};

export interface PopoverProps extends HTMLProps<HTMLDivElement> {
  /** Popover position */
  position?: BasicPlacement;
  /** If true, tries to keep the popover in view by flipping it if necessary */
  enableFlip?: boolean;
  /** Popover additional class */
  className?: string;
  /** The reference element to which the popover is relatively placed to */
  children: ReactElement<any>;
  /** Accessible label, required when header is not present */
  'aria-label'?: string;
  /** Header content, leave empty for no header */
  headerContent?: ReactElement<any>;
  /** Body content */
  bodyContent: ReactElement<any>;
  /**
   * True to show the popover programmatically. Used in conjunction with the shouldClose prop.
   * By default, the popover child element handles click events automatically. If you want to control this programmatically,
   * the popover will not auto-close if the Close button is clicked, ESC key is used, or if a click occurs outside the popover.
   * Instead, the consumer is responsible for closing the popover themselves by adding a callback listener for the shouldClose prop.
   */
  isVisible?: boolean;
  /**
   * Callback function that is only invoked when isVisible is also controlled. Called when the popover Close button is
   * clicked or the ESC key is used
   */
  shouldClose?(instance: Instance): void;
  /** The element to append the popover to, defaults to body */
  appendTo?: ReactElement<any> | ((ref: ReactElement<any>) => ReactElement<any>);
  /** Hides the popover when a click occurs outside */
  hideOnOutsideClick?: boolean;
  /** Lifecycle function invoked when the popover begins to transition out. */
  onHide?(instance: Instance): void;
  /** Lifecycle function invoked when the popover has fully transitioned out. */
  onHidden?(instance: Instance): void;
  /** Lifecycle function invoked when the popover begins to transition in. */
  onShow?(instance: Instance): void;
  /** Lifecycle function invoked when the popover has fully transitioned in. */
  onShown?(instance: Instance): void;
  /** Lifecycle function invoked when the popover has been mounted to the DOM. */
  onMount?(instance: Instance): void;
  /** z-index of the popover */
  zIndex?: number;
  /** Maximum width of the popover */
  maxWidth?: '18.75rem';
}

declare const Popover: FunctionComponent<PopoverProps>;

export default Popover;
