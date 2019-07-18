import * as React from 'react';
import PopoverBase from '../../helpers/PopoverBase/PopoverBase';
import { Instance as TippyInstance } from 'tippy.js';
import { KEY_CODES } from '../../helpers/constants';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css, getModifier } from '@patternfly/react-styles';
import { PopoverArrow } from './PopoverArrow';
import { PopoverContent } from './PopoverContent';
import { PopoverBody }  from './PopoverBody';
import { PopoverHeader } from './PopoverHeader';
import { PopoverFooter } from './PopoverFooter';
import { PopoverCloseButton } from './PopoverCloseButton';
import GenerateId from '../../helpers/GenerateId/GenerateId';
import { c_popover_MaxWidth as popoverMaxWidth } from '@patternfly/react-tokens';
import { popoverBaseStyles } from '../Tooltip/styles';
import { ReactElement } from 'react';
// Can't use ES6 imports :(
// The types for it are also wrong, we should probably ditch this dependency.
// tslint:disable-next-line
const FocusTrap: any = require('focus-trap-react');
popoverBaseStyles();

export enum PopoverPosition {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right'
};

export interface PopoverProps {
  /** Popover position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** If true, tries to keep the popover in view by flipping it if necessary */
  enableFlip?: boolean;
  /** Popover additional class */
  className?: string;
  /** The reference element to which the popover is relatively placed to */
  children: ReactElement<any>;
  /** Accessible label, required when header is not present */
  'aria-label'?: string;
  /** Header content, leave empty for no header */
  headerContent?: React.ReactNode;
  /** Body content */
  bodyContent: React.ReactNode;
  footerContent?: React.ReactNode;
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
  shouldClose?: (tip:TippyInstance) => void;
  /** The element to append the popover to, defaults to body */
  appendTo?: Element | ((ref: Element) => Element);
  /** Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user) */
  hideOnOutsideClick?: boolean;
  /** Lifecycle function invoked when the popover begins to transition out. */
  onHide?: (tip:TippyInstance) => void;
  /** Lifecycle function invoked when the popover has fully transitioned out. */
  onHidden?: (tip:TippyInstance) => void;
  /** Lifecycle function invoked when the popover begins to transition in. */
  onShow?: (tip:TippyInstance) => void;
  /** Lifecycle function invoked when the popover has fully transitioned in. */
  onShown?: (tip:TippyInstance) => void;
  /** Lifecycle function invoked when the popover has been mounted to the DOM. */
  onMount?: (tip:TippyInstance) => void;
  /** z-index of the popover */
  zIndex?: number;
  /** Maximum width of the tooltip (default 18.75rem) */
  maxWidth?: string;
  /** Aria label for the Close button */
  closeBtnAriaLabel?: string;
}

export interface PopoverState {
  isOpen: boolean;
}

export class Popover extends React.Component<PopoverProps, PopoverState> {
  private tip: TippyInstance;
  static defaultProps = {
    position: 'top',
    enableFlip: true,
    className: '',
    isVisible: null as boolean,
    shouldClose: ():void => null,
    'aria-label': '',
    headerContent: null as typeof PopoverHeader,
    footerContent: null as typeof PopoverFooter,
    appendTo: () => document.body,
    hideOnOutsideClick: true,
    onHide: ():void => null,
    onHidden: ():void => null,
    onShow: ():void => null,
    onShown: ():void => null,
    onMount: ():void => null,
    zIndex: 9999,
    maxWidth: popoverMaxWidth && popoverMaxWidth.value,
    closeBtnAriaLabel: 'Close'
  };

  constructor(props: PopoverProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  hideOrNotify = () => {
    if (this.props.isVisible === null) {
      // Handle closing
      this.tip.hide();
    } else {
      // notify consumer
      this.props.shouldClose(this.tip);
    }
  };

  handleEscKeyClick = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.tip.state.isVisible) {
      this.hideOrNotify();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKeyClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  storeTippyInstance = (tip:TippyInstance) => {
    this.tip = tip;
  };

  closePopover = () => {
    this.hideOrNotify();
  };

  hideAllPopovers = () => {
    document.querySelectorAll('.tippy-popper').forEach((popper:any) => {
      if (popper._tippy) {
        popper._tippy.hide();
      }
    });
  };

  onHide = (tip:TippyInstance)  => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
    return this.props.onHide(tip);
  };

  onHidden = (tip:TippyInstance)  => this.props.onHidden(tip);

  onMount = (tip:TippyInstance)  => this.props.onMount(tip);

  onShow = (tip:TippyInstance)  => {
    const { hideOnOutsideClick, isVisible, onShow } = this.props;
    // hide all other open popovers first if events are managed by us
    if (!hideOnOutsideClick && isVisible === null) {
      this.hideAllPopovers();
    }
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
    }
    return onShow(tip);
  };

  onShown = (tip:TippyInstance)  => this.props.onShown(tip);

  render() {
    const {
      position,
      enableFlip,
      children,
      className,
      'aria-label': ariaLabel,
      headerContent,
      bodyContent,
      footerContent,
      isVisible,
      shouldClose,
      appendTo,
      hideOnOutsideClick,
      onHide,
      onHidden,
      onShow,
      onShown,
      onMount,
      zIndex,
      maxWidth,
      closeBtnAriaLabel,
      ...rest
    } = this.props;

    if (!headerContent && !ariaLabel) {
      return new Error('aria-label is required when header is not used');
    }

    const content = (
      <GenerateId>
        {randomId =>
          this.state.isOpen && (
            <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
              <div
                className={css(
                  styles.popover,
                  !enableFlip && getModifier(styles, position, styles.modifiers.top),
                  className
                )}
                role="dialog"
                aria-modal="true"
                aria-label={headerContent ? undefined : ariaLabel}
                aria-labelledby={headerContent ? `popover-${randomId}-header` : undefined}
                aria-describedby={`popover-${randomId}-body`}
                {...rest}
              >
                <PopoverArrow />
                <PopoverContent>
                  <PopoverCloseButton onClose={this.closePopover} aria-label={closeBtnAriaLabel} />
                  {headerContent && <PopoverHeader id={`popover-${randomId}-header`}>{headerContent}</PopoverHeader>}
                  <PopoverBody id={`popover-${randomId}-body`}>{bodyContent}</PopoverBody>
                  {footerContent && <PopoverFooter>{footerContent}</PopoverFooter>}
                </PopoverContent>
              </div>
            </FocusTrap>
          )
        }
      </GenerateId>
    );
    const handleEvents = isVisible === null;
    const shouldHideOnClick = () => {
      if (handleEvents) {
        if (hideOnOutsideClick === true) {
          return true;
        }
        return 'toggle';
      }
      return false;
    };
    return (
      <PopoverBase
        onCreate={this.storeTippyInstance}
        maxWidth={maxWidth}
        zIndex={zIndex}
        appendTo={appendTo}
        content={content}
        lazy
        trigger={handleEvents ? 'click' : 'manual'}
        isVisible={isVisible}
        hideOnClick={shouldHideOnClick()}
        animateFill={false}
        theme="pf-tippy"
        performance
        interactive
        interactiveBorder={0}
        placement={position}
        distance={25}
        flip={enableFlip}
        popperOptions={{
          modifiers: {
            preventOverflow: {
              enabled: enableFlip
            },
            hide: {
              enabled: enableFlip
            }
          }
        }}
        onHide={this.onHide}
        onHidden={this.onHidden}
        onShow={this.onShow}
        onShown={this.onShown}
        onMount={this.onMount}
      >
        {children}
      </PopoverBase>
    );
  }
}
