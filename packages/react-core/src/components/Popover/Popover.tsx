/* eslint-disable no-console */
import * as React from 'react';
import { KEY_CODES } from '../../helpers/constants';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';
import { PopoverContent } from './PopoverContent';
import { PopoverBody } from './PopoverBody';
import { PopoverHeader } from './PopoverHeader';
import { PopoverFooter } from './PopoverFooter';
import { PopoverCloseButton } from './PopoverCloseButton';
import { PopoverArrow } from './PopoverArrow';
import popoverMaxWidth from '@patternfly/react-tokens/dist/js/c_popover_MaxWidth';
import popoverMinWidth from '@patternfly/react-tokens/dist/js/c_popover_MinWidth';
import { ReactElement } from 'react';
import { FocusTrap } from '../../helpers';
import { Popper, getOpacityTransition } from '../../helpers/Popper/Popper';
import { getUniqueId } from '../../helpers/util';
import { Instance as TippyInstance, Props as TippyProps } from '../../helpers/Popper/DeprecatedTippyTypes';

export enum PopoverPosition {
  auto = 'auto',
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right'
}

export interface PopoverProps {
  /** Accessible label, required when header is not present */
  'aria-label'?: string;
  /** The element to append the popover to, defaults to body */
  appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement);
  /** Body content */
  bodyContent: React.ReactNode;
  /** The reference element to which the popover is relatively placed to */
  children: ReactElement<any>;
  /** Popover additional class */
  className?: string;
  /** Aria label for the Close button */
  closeBtnAriaLabel?: string;
  /** Distance of the popover to its target, defaults to 25 */
  distance?: number;
  /**
   * If true, tries to keep the popover in view by flipping it if necessary
   * If the position is set to 'auto', this prop is ignored
   */
  enableFlip?: boolean;
  /**
   * The desired position to flip the popover to if the initial position is not possible.
   * By setting this prop to 'flip' it attempts to flip the popover to the opposite side if there is no space.
   * You can also pass an array of positions that determines the flip order. It should contain the initial position
   * followed by alternative positions if that position is unavailable.
   * Example: Initial position is 'top'. Button with popover is in the top right corner. 'flipBehavior' is set to
   * ['top', 'right', 'left']. Since there is no space to the top, it checks if right is available. There's also no
   * space to the right, so it finally shows the popover on the left.
   */
  flipBehavior?: 'flip' | ('top' | 'bottom' | 'left' | 'right')[];
  /** Footer content */
  footerContent?: React.ReactNode;
  /** Header content, leave empty for no header */
  headerContent?: React.ReactNode;
  /** Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user) */
  hideOnOutsideClick?: boolean;
  /**
   * True to show the popover programmatically. Used in conjunction with the shouldClose prop.
   * By default, the popover child element handles click events automatically. If you want to control this programmatically,
   * the popover will not auto-close if the Close button is clicked, ESC key is used, or if a click occurs outside the popover.
   * Instead, the consumer is responsible for closing the popover themselves by adding a callback listener for the shouldClose prop.
   */
  isVisible?: boolean;
  /** Minimum width of the popover (default 6.25rem) */
  minWidth?: string;
  /** Maximum width of the popover (default 18.75rem) */
  maxWidth?: string;
  /**
   * Lifecycle function invoked when the popover has fully transitioned out.
   * Note: The tip argument is no longer passed and has been deprecated.
   */
  onHidden?: (tip?: TippyInstance) => void;
  /**
   * Lifecycle function invoked when the popover begins to transition out.
   * Note: The tip argument is no longer passed and has been deprecated.
   */
  onHide?: (tip?: TippyInstance) => void;
  /**
   * Lifecycle function invoked when the popover has been mounted to the DOM.
   * Note: The tip argument is no longer passed and has been deprecated.
   */
  onMount?: (tip?: TippyInstance) => void;
  /**
   * Lifecycle function invoked when the popover begins to transition in.
   * Note: The tip argument is no longer passed and has been deprecated.
   */
  onShow?: (tip?: TippyInstance) => void;
  /**
   * Lifecycle function invoked when the popover has fully transitioned in.
   * Note: The tip argument is no longer passed and has been deprecated.
   */
  onShown?: (tip?: TippyInstance) => void;
  /**
   * Popover position. Note: With 'enableFlip' set to true,
   * it will change the position if there is not enough space for the starting position.
   * The behavior of where it flips to can be controlled through the flipBehavior prop.
   */
  position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /**
   * Callback function that is only invoked when isVisible is also controlled. Called when the popover Close button is
   * clicked, Enter key was used on it, or the ESC key is used.
   * Note: The tip argument is no longer passed and has been deprecated.
   */
  shouldClose?: (tip?: TippyInstance, hideFnc?: any) => void;
  /**
   * Callback function that is only invoked when isVisible is also controlled. Called when the Enter key is
   * used on the focused trigger
   */
  shouldOpen?: (showFnc?: any) => void;
  /** z-index of the popover */
  zIndex?: number;
  /** CSS fade transition animation duration */
  animationDuration?: number;
  /** id used as part of the various popover elements (popover-${id}-header/body/footer) */
  id?: string;
  /** @deprecated - no longer used. if you want to constrain the popper to a specific element use the appendTo prop instead */
  boundary?: 'scrollParent' | 'window' | 'viewport' | HTMLElement;
  /** @deprecated - no longer used */
  tippyProps?: Partial<TippyProps>;
}

export interface PopoverState {
  isOpen: boolean;
  focusTrapActive: boolean;
}

export const Popover: React.FunctionComponent<PopoverProps> = ({
  children,
  position = 'top',
  enableFlip = true,
  className = '',
  isVisible = null as boolean,
  shouldClose = (): void => null,
  shouldOpen = (): void => null,
  'aria-label': ariaLabel = '',
  bodyContent,
  headerContent = null,
  footerContent = null,
  appendTo = () => document.body,
  hideOnOutsideClick = true,
  onHide = (): void => null,
  onHidden = (): void => null,
  onShow = (): void => null,
  onShown = (): void => null,
  onMount = (): void => null,
  zIndex = 9999,
  minWidth = popoverMinWidth && popoverMinWidth.value,
  maxWidth = popoverMaxWidth && popoverMaxWidth.value,
  closeBtnAriaLabel = 'Close',
  distance = 25,
  // For every initial starting position, there are 3 escape positions
  flipBehavior = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'],
  animationDuration = 300,
  id,
  boundary,
  tippyProps,
  ...rest
}) => {
  if (process.env.NODE_ENV !== 'production') {
    boundary !== undefined &&
      console.warn(
        'The Popover boundary prop has been deprecated. If you want to constrain the popper to a specific element use the appendTo prop instead.'
      );
    tippyProps !== undefined && console.warn('The Popover tippyProps prop has been deprecated and is no longer used.');
  }
  // could make this a prop in the future (true | false | 'toggle')
  // const hideOnClick = true;
  const uniqueId = id || getUniqueId();
  const triggerManually = isVisible !== null;
  const [visible, setVisible] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const [focusTrapActive, setFocusTrapActive] = React.useState(false);
  const transitionTimerRef = React.useRef(null);
  const showTimerRef = React.useRef(null);
  const hideTimerRef = React.useRef(null);
  React.useEffect(() => {
    onMount();
  }, []);
  React.useEffect(() => {
    if (triggerManually) {
      if (isVisible) {
        show();
      } else {
        hide();
      }
    }
  }, [isVisible, triggerManually]);
  const show = (withFocusTrap?: boolean) => {
    onShow();
    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    showTimerRef.current = setTimeout(() => {
      setVisible(true);
      setOpacity(1);
      withFocusTrap && setFocusTrapActive(true);
      onShown();
    }, 0);
  };
  const hide = () => {
    onHide();
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setOpacity(0);
      setFocusTrapActive(false);
      transitionTimerRef.current = setTimeout(() => {
        setVisible(false);
        onHidden();
      }, animationDuration);
    }, 0);
  };
  const positionModifiers = {
    top: styles.modifiers.top,
    bottom: styles.modifiers.bottom,
    left: styles.modifiers.left,
    right: styles.modifiers.right
  };
  const hasCustomMinWidth = minWidth !== popoverMinWidth.value;
  const hasCustomMaxWidth = maxWidth !== popoverMaxWidth.value;
  const onDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && visible) {
      if (triggerManually) {
        shouldClose(null, hide);
      } else {
        hide();
      }
    }
  };
  const onDocumentClick = () => {
    // did not click on trigger or popper (otherwise the event bubbling would have been prevented) which means we clicked outside
    if (hideOnOutsideClick && visible) {
      if (triggerManually) {
        shouldClose(null, hide);
      } else {
        hide();
      }
    }
  };
  const onTriggerEnter = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ENTER) {
      if (!visible) {
        if (triggerManually) {
          shouldOpen(show);
        } else {
          show(true);
        }
      } else {
        if (triggerManually) {
          shouldClose(null, hide);
        } else {
          hide();
        }
      }
    }
  };
  const onTriggerClick = () => {
    if (triggerManually) {
      if (visible) {
        shouldClose(null, hide);
      } else {
        shouldOpen(show);
      }
    } else {
      if (visible) {
        hide();
      } else {
        show();
      }
    }
  };
  const onPopperClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  const onContentMouseDown = () => {
    if (focusTrapActive) {
      setFocusTrapActive(false);
    }
  };
  const closePopover = (event: any) => {
    event.stopPropagation();
    if (triggerManually) {
      shouldClose(null, hide);
    } else {
      hide();
    }
  };
  const content = (
    <FocusTrap
      active={focusTrapActive}
      focusTrapOptions={{ returnFocusOnDeactivate: true, clickOutsideDeactivates: true }}
      className={css(styles.popover, className)}
      role="dialog"
      aria-modal="true"
      aria-label={headerContent ? undefined : ariaLabel}
      aria-labelledby={headerContent ? `popover-${uniqueId}-header` : undefined}
      aria-describedby={`popover-${uniqueId}-body`}
      onMouseDown={onContentMouseDown}
      style={{
        minWidth: hasCustomMinWidth ? minWidth : null,
        maxWidth: hasCustomMaxWidth ? maxWidth : null,
        opacity,
        transition: getOpacityTransition(animationDuration)
      }}
      {...rest}
    >
      <PopoverArrow />
      <PopoverContent>
        <PopoverCloseButton onClose={closePopover} aria-label={closeBtnAriaLabel} />
        {headerContent && <PopoverHeader id={`popover-${uniqueId}-header`}>{headerContent}</PopoverHeader>}
        <PopoverBody id={`popover-${uniqueId}-body`}>{bodyContent}</PopoverBody>
        {footerContent && <PopoverFooter id={`popover-${uniqueId}-footer`}>{footerContent}</PopoverFooter>}
      </PopoverContent>
    </FocusTrap>
  );

  return (
    <Popper
      trigger={children}
      popper={content}
      popperMatchesTriggerWidth={false}
      appendTo={appendTo}
      isVisible={visible}
      positionModifiers={positionModifiers}
      distance={distance}
      placement={position}
      onTriggerClick={onTriggerClick}
      onTriggerEnter={onTriggerEnter}
      onPopperClick={onPopperClick}
      onDocumentClick={onDocumentClick}
      onDocumentKeyDown={onDocumentKeyDown}
      enableFlip={enableFlip}
      zIndex={zIndex}
      flipBehavior={flipBehavior}
    />
  );
};
Popover.displayName = 'Popover';
