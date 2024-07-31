import * as React from 'react';
import { KeyTypes } from '../../helpers/constants';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';
import { PopoverContext } from './PopoverContext';
import { PopoverContent } from './PopoverContent';
import { PopoverBody } from './PopoverBody';
import { PopoverHeader } from './PopoverHeader';
import { PopoverFooter } from './PopoverFooter';
import { PopoverCloseButton } from './PopoverCloseButton';
import { PopoverArrow } from './PopoverArrow';
import popoverMaxWidth from '@patternfly/react-tokens/dist/esm/c_popover_MaxWidth';
import popoverMinWidth from '@patternfly/react-tokens/dist/esm/c_popover_MinWidth';
import { ReactElement } from 'react';
import { FocusTrap } from '../../helpers';
import { Popper } from '../../helpers/Popper/Popper';
import { getUniqueId } from '../../helpers/util';

export enum PopoverPosition {
  auto = 'auto',
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  topStart = 'top-start',
  topEnd = 'top-end',
  bottomStart = 'bottom-start',
  bottomEnd = 'bottom-end',
  leftStart = 'left-start',
  leftEnd = 'left-end',
  rightStart = 'right-start',
  rightEnd = 'right-end'
}

/** The main popover component. The following properties can also be passed into another component
 * that has a property specifically for passing in popover properties.
 */

export interface PopoverProps {
  /** Text announced by screen reader when alert severity variant is set to indicate
   * severity level.
   */
  alertSeverityScreenReaderText?: string;
  /** Severity variants for an alert popover. This modifies the color of the header to
   * match the severity.
   */
  alertSeverityVariant?: 'custom' | 'info' | 'warning' | 'success' | 'danger';
  /** The duration of the CSS fade transition animation. */
  animationDuration?: number;
  /** The element to append the popover to. Defaults to "inline". */
  appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement) | 'inline';
  /** Accessible label for the popover, required when header is not present. */
  'aria-label'?: string;
  /**
   * Body content of the popover. If you want to close the popover after an action within the
   * body content, you can use the isVisible prop for manual control, or you can provide a
   * function which will receive a callback as an argument to hide the popover, i.e.
   * bodyContent={hide => <Button onClick={() => hide()}>Close</Button>}
   */
  bodyContent: React.ReactNode | ((hide: () => void) => React.ReactNode);
  /**
   * The trigger reference element to which the popover is relatively placed to. If you cannot wrap
   * the element with the Popover, you can use the triggerRef prop instead.
   * Usage: <Popover><Button>Reference</Button></Popover>
   */
  children?: ReactElement<any>;
  /**
   * The trigger reference element to which the popover is relatively placed to. If you can wrap the
   * element with the popover, you can use the children prop instead, or both props together.
   * When passed along with the trigger prop, the div element that wraps the trigger will be removed.
   * Usage: <Popover triggerRef={() => document.getElementById('reference-element')} />
   */
  triggerRef?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
  /** Additional classes added to the popover. */
  className?: string;
  /** Accessible label for the close button. */
  closeBtnAriaLabel?: string;
  /** Distance of the popover to its target. Defaults to 25. */
  distance?: number;
  /** The element to focus when the popover becomes visible. By default the first
   * focusable element will receive focus.
   */
  elementToFocus?: HTMLElement | SVGElement | string;
  /**
   * If true, tries to keep the popover in view by flipping it if necessary.
   * If the position is set to 'auto', this prop is ignored.
   */
  enableFlip?: boolean;
  /**
   * The desired position to flip the popover to if the initial position is not possible.
   * By setting this prop to 'flip' it attempts to flip the popover to the opposite side if
   * there is no space.
   * You can also pass an array of positions that determines the flip order. It should contain
   * the initial position followed by alternative positions if that position is unavailable.
   * Example: Initial position is 'top'. Button with popover is in the top right corner.
   * 'flipBehavior' is set to ['top', 'right', 'left']. Since there is no space to the top, it
   * checks if right is available. There's also no space to the right, so it finally shows the
   * popover on the left.
   */
  flipBehavior?:
    | 'flip'
    | (
        | 'top'
        | 'bottom'
        | 'left'
        | 'right'
        | 'top-start'
        | 'top-end'
        | 'bottom-start'
        | 'bottom-end'
        | 'left-start'
        | 'left-end'
        | 'right-start'
        | 'right-end'
      )[];
  /**
   * Footer content of the popover. If you want to close the popover after an action within the
   * footer content, you can use the isVisible prop for manual control, or you can provide a
   * function which will receive a callback as an argument to hide the popover, i.e.
   * footerContent={hide => <Button onClick={() => hide()}>Close</Button>}
   */
  footerContent?: React.ReactNode | ((hide: () => void) => React.ReactNode);
  /** Removes fixed-width and allows width to be defined by contents. */
  hasAutoWidth?: boolean;
  /** Allows content to touch edges of popover container. */
  hasNoPadding?: boolean;
  /** Sets the heading level to use for the popover header. Defaults to h6. */
  headerComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Simple header content to be placed within a title. If you want to close the popover after
   * an action within the header content, you can use the isVisible prop for manual control,
   * or you can provide a function which will receive a callback as an argument to hide the
   * popover, i.e. headerContent={hide => <Button onClick={() => hide()}>Close</Button>}
   */
  headerContent?: React.ReactNode | ((hide: () => void) => React.ReactNode);
  /** Icon to be displayed in the popover header. **/
  headerIcon?: React.ReactNode;
  /** Hides the popover when a click occurs outside (only works if isVisible is not controlled
   * by the user).
   */
  hideOnOutsideClick?: boolean;
  /** Id used as part of the various popover elements (popover-${id}-header/body/footer). */
  id?: string;
  /**
   * True to show the popover programmatically. Used in conjunction with the shouldClose prop.
   * By default, the popover child element handles click events automatically. If you want to
   * control this programmatically, the popover will not auto-close if the close button is
   * clicked, the escape key is used, or if a click occurs outside the popover. Instead, the
   * consumer is responsible for closing the popover themselves by adding a callback listener
   * for the shouldClose prop.
   */
  isVisible?: boolean;
  /** Maximum width of the popover (default 18.75rem). */
  maxWidth?: string;
  /** Minimum width of the popover (default 6.25rem). */
  minWidth?: string;
  /**
   * Lifecycle function invoked when the popover has fully transitioned out.
   */
  onHidden?: () => void;
  /**
   * Lifecycle function invoked when the popover begins to transition out.
   */
  onHide?: (event: MouseEvent | KeyboardEvent) => void;
  /**
   * Lifecycle function invoked when the popover has been mounted to the DOM.
   */
  onMount?: () => void;
  /**
   * Lifecycle function invoked when the popover begins to transition in.
   */
  onShow?: (event: MouseEvent | KeyboardEvent) => void;
  /**
   * Lifecycle function invoked when the popover has fully transitioned in.
   */
  onShown?: () => void;
  /**
   * Popover position. Note: With the enableFlip property set to true, it will change the
   * position if there is not enough space for the starting position. The behavior of where it
   * flips to can be controlled through the flipBehavior property.
   */
  position?:
    | PopoverPosition
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  /**
   * Callback function that is only invoked when isVisible is also controlled. Called when the
   * popover close button is clicked, the enter key was used on it, or the escape key is used.
   */
  shouldClose?: (event: MouseEvent | KeyboardEvent, hideFunction?: () => void) => void;
  /**
   * Callback function that is only invoked when isVisible is also controlled. Called when the
   * enter key is used on the focused trigger.
   */
  shouldOpen?: (event: MouseEvent | KeyboardEvent, showFunction?: () => void) => void;
  /** Flag indicating whether the close button should be shown. */
  showClose?: boolean;
  /** Sets an interaction to open popover, defaults to "click" */
  triggerAction?: 'click' | 'hover';
  /** Whether to trap focus in the popover. */
  withFocusTrap?: boolean;
  /** The z-index of the popover. */
  zIndex?: number;
}

const alertStyle = {
  custom: styles.modifiers.custom,
  info: styles.modifiers.info,
  success: styles.modifiers.success,
  warning: styles.modifiers.warning,
  danger: styles.modifiers.danger
};

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
  headerComponent = 'h6',
  headerIcon = null,
  alertSeverityVariant,
  alertSeverityScreenReaderText,
  footerContent = null,
  appendTo = () => document.body,
  hideOnOutsideClick = true,
  onHide = (): void => null,
  onHidden = (): void => null,
  onShow = (): void => null,
  onShown = (): void => null,
  onMount = (): void => null,
  zIndex = 9999,
  triggerAction = 'click',
  minWidth = popoverMinWidth && popoverMinWidth.value,
  maxWidth = popoverMaxWidth && popoverMaxWidth.value,
  closeBtnAriaLabel = 'Close',
  showClose = true,
  distance = 25,
  flipBehavior = [
    'top',
    'bottom',
    'left',
    'right',
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'left-start',
    'left-end',
    'right-start',
    'right-end'
  ],
  animationDuration = 300,
  id,
  withFocusTrap: propWithFocusTrap,
  triggerRef,
  hasNoPadding = false,
  hasAutoWidth = false,
  elementToFocus,
  ...rest
}: PopoverProps) => {
  // could make this a prop in the future (true | false | 'toggle')
  // const hideOnClick = true;
  const uniqueId = id || getUniqueId();
  const triggerManually = isVisible !== null;
  const [visible, setVisible] = React.useState(false);
  const [focusTrapActive, setFocusTrapActive] = React.useState(Boolean(propWithFocusTrap));
  const popoverRef = React.useRef(null);

  React.useEffect(() => {
    onMount();
  }, []);
  React.useEffect(() => {
    if (triggerManually) {
      if (isVisible) {
        show(undefined, true);
      } else {
        hide();
      }
    }
  }, [isVisible, triggerManually]);
  const show = (event?: MouseEvent | KeyboardEvent, withFocusTrap?: boolean) => {
    event && onShow(event);
    setVisible(true);
    propWithFocusTrap !== false && withFocusTrap && setFocusTrapActive(true);
  };

  const hide = (event?: MouseEvent | KeyboardEvent) => {
    event && onHide(event);
    setVisible(false);
  };

  const positionModifiers = {
    top: styles.modifiers.top,
    bottom: styles.modifiers.bottom,
    left: styles.modifiers.left,
    right: styles.modifiers.right,
    'top-start': styles.modifiers.topLeft,
    'top-end': styles.modifiers.topRight,
    'bottom-start': styles.modifiers.bottomLeft,
    'bottom-end': styles.modifiers.bottomRight,
    'left-start': styles.modifiers.leftTop,
    'left-end': styles.modifiers.leftBottom,
    'right-start': styles.modifiers.rightTop,
    'right-end': styles.modifiers.rightBottom
  };
  const hasCustomMinWidth = minWidth !== popoverMinWidth.value;
  const hasCustomMaxWidth = maxWidth !== popoverMaxWidth.value;
  const onDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key === KeyTypes.Escape && visible) {
      if (triggerManually) {
        shouldClose(event, hide);
      } else {
        hide(event);
      }
    }
  };
  const onDocumentClick = (event: MouseEvent, triggerElement: HTMLElement, popperElement: HTMLElement) => {
    if (hideOnOutsideClick && visible) {
      const isFromChild = popperElement && popperElement.contains(event.target as Node);
      const isFromTrigger = triggerElement && triggerElement.contains(event.target as Node);
      if (isFromChild || isFromTrigger) {
        // if clicked within the popper or on the trigger, ignore this event
        return;
      }
      if (triggerManually) {
        shouldClose(event, hide);
      } else {
        hide(event);
      }
    }
  };
  const onTriggerClick = (event: MouseEvent) => {
    if (triggerManually) {
      if (visible) {
        shouldClose(event, hide);
      } else {
        shouldOpen(event, show);
      }
    } else {
      if (visible) {
        hide(event);
      } else {
        show(event, true);
      }
    }
  };

  const onContentMouseDown = () => {
    if (focusTrapActive) {
      setFocusTrapActive(false);
    }
  };

  const onMouseEnter = (event: MouseEvent) => {
    if (triggerManually) {
      shouldOpen(event as MouseEvent, show);
    } else {
      show(event as MouseEvent, false);
    }
  };

  const onMouseLeave = (event: MouseEvent) => {
    if (triggerManually) {
      shouldClose(event as MouseEvent, hide);
    } else {
      hide(event);
    }
  };

  const onFocus = (event: FocusEvent) => {
    if (triggerManually) {
      shouldOpen(event as MouseEvent | KeyboardEvent, show);
    } else {
      show(event as MouseEvent | KeyboardEvent, false);
    }
  };

  const onBlur = (event: FocusEvent) => {
    if (triggerManually) {
      shouldClose(event as MouseEvent | KeyboardEvent, hide);
    } else {
      hide(event as MouseEvent | KeyboardEvent);
    }
  };

  const closePopover = (event: MouseEvent) => {
    event.stopPropagation();
    if (triggerManually) {
      shouldClose(event, hide);
    } else {
      hide(event);
    }
  };

  const content = (
    <FocusTrap
      ref={popoverRef}
      active={focusTrapActive}
      focusTrapOptions={{
        returnFocusOnDeactivate: propWithFocusTrap !== false,
        clickOutsideDeactivates: true,
        // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
        // We want to prevent this in case false is ever passed in.
        initialFocus: elementToFocus || undefined,
        checkCanFocusTrap: (containers) =>
          new Promise((resolve) => {
            const interval = setInterval(() => {
              if (containers.every((container) => getComputedStyle(container).visibility !== 'hidden')) {
                resolve();
                clearInterval(interval);
              }
            }, 10);
          }),
        tabbableOptions: { displayCheck: 'none' },

        fallbackFocus: () => {
          // If the popover's trigger is focused but scrolled out of view,
          // FocusTrap will throw an error when the Enter button is used on the trigger.
          // That is because the Popover is hidden when its trigger is out of view.
          // Provide a fallback in that case.
          let node = null;
          if (document && document.activeElement) {
            node = document.activeElement as HTMLElement;
          }
          return node;
        }
      }}
      preventScrollOnDeactivate
      className={css(
        styles.popover,
        alertSeverityVariant && alertStyle[alertSeverityVariant],
        hasNoPadding && styles.modifiers.noPadding,
        hasAutoWidth && styles.modifiers.widthAuto,
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-label={headerContent ? undefined : ariaLabel}
      aria-labelledby={headerContent ? `popover-${uniqueId}-header` : undefined}
      aria-describedby={`popover-${uniqueId}-body`}
      onMouseDown={onContentMouseDown}
      style={{
        minWidth: hasCustomMinWidth ? minWidth : null,
        maxWidth: hasCustomMaxWidth ? maxWidth : null
      }}
      {...rest}
    >
      <PopoverArrow />
      <PopoverContent>
        {showClose && triggerAction === 'click' && (
          <PopoverCloseButton onClose={closePopover} aria-label={closeBtnAriaLabel} />
        )}
        {headerContent && (
          <PopoverHeader
            id={`popover-${uniqueId}-header`}
            icon={headerIcon}
            alertSeverityVariant={alertSeverityVariant}
            alertSeverityScreenReaderText={alertSeverityScreenReaderText || `${alertSeverityVariant} alert:`}
            titleHeadingLevel={headerComponent}
          >
            {typeof headerContent === 'function' ? headerContent(hide) : headerContent}
          </PopoverHeader>
        )}
        <PopoverBody id={`popover-${uniqueId}-body`}>
          {typeof bodyContent === 'function' ? bodyContent(hide) : bodyContent}
        </PopoverBody>
        {footerContent && (
          <PopoverFooter id={`popover-${uniqueId}-footer`}>
            {typeof footerContent === 'function' ? footerContent(hide) : footerContent}
          </PopoverFooter>
        )}
      </PopoverContent>
    </FocusTrap>
  );

  return (
    <PopoverContext.Provider value={{ headerComponent }}>
      <Popper
        trigger={children}
        triggerRef={triggerRef}
        popper={content}
        popperRef={popoverRef}
        minWidth={minWidth}
        appendTo={appendTo}
        isVisible={visible}
        onMouseEnter={triggerAction === 'hover' && onMouseEnter}
        onMouseLeave={triggerAction === 'hover' && onMouseLeave}
        onPopperMouseEnter={triggerAction === 'hover' && onMouseEnter}
        onPopperMouseLeave={triggerAction === 'hover' && onMouseLeave}
        onFocus={triggerAction === 'hover' && onFocus}
        onBlur={triggerAction === 'hover' && onBlur}
        positionModifiers={positionModifiers}
        distance={distance}
        placement={position}
        onTriggerClick={triggerAction === 'click' && onTriggerClick}
        onDocumentClick={onDocumentClick}
        onDocumentKeyDown={onDocumentKeyDown}
        enableFlip={enableFlip}
        zIndex={zIndex}
        flipBehavior={flipBehavior}
        animationDuration={animationDuration}
        onHidden={onHidden}
        onShown={onShown}
        onHide={() => setFocusTrapActive(false)}
      />
    </PopoverContext.Provider>
  );
};
Popover.displayName = 'Popover';
