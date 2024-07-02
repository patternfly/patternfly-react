import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { usePopper } from './thirdparty/react-popper/usePopper';
import { Placement, Modifier } from './thirdparty/popper-core';
import { clearTimeouts } from '../util';
import { css } from '@patternfly/react-styles';
import '@patternfly/react-styles/css/components/Popper/Popper.css';
import { getLanguageDirection } from '../util';

const hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom',
  'top-start': 'bottom-end',
  'top-end': 'bottom-start',
  'bottom-start': 'top-end',
  'bottom-end': 'top-start',
  'left-start': 'right-end',
  'left-end': 'right-start',
  'right-start': 'left-end',
  'right-end': 'left-start'
};

const getOppositePlacement = (placement: Placement): any =>
  placement.replace(
    /left|right|bottom|top|top-start|top-end|bottom-start|bottom-end|right-start|right-end|left-start|left-end/g,
    (matched: string) =>
      hash[
        matched as
          | 'left'
          | 'right'
          | 'bottom'
          | 'top'
          | 'top-start'
          | 'top-end'
          | 'bottom-start'
          | 'bottom-end'
          | 'right-start'
          | 'right-end'
          | 'left-start'
          | 'left-end'
      ] as Placement
  );

export const getOpacityTransition = (animationDuration: number) =>
  `opacity ${animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`;

export interface PopperProps {
  /**
   * Trigger reference element to which the popper is relatively placed to.
   */
  trigger?: React.ReactNode;
  /**
   * A reference to the trigger reference element that can be passed instead of or along
   * with the trigger prop. When passed along with the trigger prop, the div element that
   * wraps the trigger will be removed.
   */
  triggerRef?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
  /** The popper (menu/tooltip/popover) element */
  popper: React.ReactElement;
  /**
   * Reference to the popper (menu/tooltip/popover) element.
   * Passing this prop will remove the wrapper div element from the popper.
   */
  popperRef?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
  /** popper direction */
  direction?: 'up' | 'down';
  /** popper position */
  position?: 'right' | 'left' | 'center' | 'start' | 'end';
  /** Instead of direction and position can set the placement of the popper */
  placement?: Placement;
  /** Custom width of the popper. If the value is "trigger", it will set the width to the trigger element's width */
  width?: string | 'trigger';
  /** Minimum width of the popper. If the value is "trigger", it will set the min width to the trigger element's width */
  minWidth?: string | 'trigger';
  /** Maximum width of the popper. If the value is "trigger", it will set the max width to the trigger element's width */
  maxWidth?: string | 'trigger';
  /** The container to append the popper to. Defaults to 'inline'. */
  appendTo?: HTMLElement | (() => HTMLElement) | 'inline';
  /** z-index of the popper element */
  zIndex?: number;
  /** True to make the popper visible */
  isVisible?: boolean;
  /**
   * Map class names to positions, for example:
   * {
   *   top: styles.modifiers.top,
   *   bottom: styles.modifiers.bottom,
   *   left: styles.modifiers.left,
   *   right: styles.modifiers.right
   * }
   */
  positionModifiers?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    topStart?: string;
    topEnd?: string;
    bottomStart?: string;
    bottomEnd?: string;
    leftStart?: string;
    leftEnd?: string;
    rightStart?: string;
    rightEnd?: string;
  };
  /** Distance of the popper to the trigger */
  distance?: number;
  /** Callback function when mouse enters trigger */
  onMouseEnter?: (event?: MouseEvent) => void;
  /** Callback function when mouse leaves trigger */
  onMouseLeave?: (event?: MouseEvent) => void;
  /** Callback function when trigger is focused */
  onFocus?: (event?: FocusEvent) => void;
  /** Callback function when trigger is blurred (focus leaves) */
  onBlur?: (event?: FocusEvent) => void;
  /** Callback function when trigger is clicked */
  onTriggerClick?: (event?: MouseEvent) => void;
  /** Callback function when Enter key is used on trigger */
  onTriggerEnter?: (event?: KeyboardEvent) => void;
  /** Callback function when popper is clicked */
  onPopperClick?: (event?: MouseEvent) => void;
  /** Callback function when mouse enters popper content */
  onPopperMouseEnter?: (event?: MouseEvent) => void;
  /** Callback function when mouse leaves popper content */
  onPopperMouseLeave?: (event?: MouseEvent) => void;
  /** Callback function when document is clicked */
  onDocumentClick?: (event?: MouseEvent, triggerElement?: HTMLElement, popperElement?: HTMLElement) => void;
  /** Callback function when keydown event occurs on document */
  onDocumentKeyDown?: (event?: KeyboardEvent) => void;
  /** Enable to flip the popper when it reaches the boundary */
  enableFlip?: boolean;
  /** The behavior of how the popper flips when it reaches the boundary */
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
  /** The duration of the CSS fade transition animation. */
  animationDuration?: number;
  /** Delay in ms before the popper appears */
  entryDelay?: number;
  /** Delay in ms before the popper disappears */
  exitDelay?: number;
  /** Callback when popper's hide transition has finished executing */
  onHidden?: () => void;
  /**
   * Lifecycle function invoked when the popper begins to transition out.
   */
  onHide?: () => void;
  /**
   * Lifecycle function invoked when the popper has been mounted to the DOM.
   */
  onMount?: () => void;
  /**
   * Lifecycle function invoked when the popper begins to transition in.
   */
  onShow?: () => void;
  /**
   * Lifecycle function invoked when the popper has fully transitioned in.
   */
  onShown?: () => void;
  /** Flag to prevent the popper from overflowing its container and becoming partially obscured. */
  preventOverflow?: boolean;
}

export const Popper: React.FunctionComponent<PopperProps> = ({
  trigger,
  popper,
  direction = 'down',
  position = 'start',
  placement,
  width,
  minWidth = 'trigger',
  maxWidth,
  appendTo = () => document.body,
  zIndex = 9999,
  isVisible = true,
  positionModifiers,
  distance = 0,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onDocumentClick,
  onTriggerClick,
  onTriggerEnter,
  onPopperClick,
  onPopperMouseEnter,
  onPopperMouseLeave,
  onDocumentKeyDown,
  enableFlip = true,
  flipBehavior = 'flip',
  triggerRef,
  popperRef,
  animationDuration = 0,
  entryDelay = 0,
  exitDelay = 0,
  onHidden = () => {},
  onHide = () => {},
  onMount = () => {},
  onShow = () => {},
  onShown = () => {},
  preventOverflow = false
}) => {
  const [triggerElement, setTriggerElement] = React.useState(null);
  const [refElement, setRefElement] = React.useState<HTMLElement>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLElement>(null);
  const [popperContent, setPopperContent] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const [internalIsVisible, setInternalIsVisible] = React.useState(isVisible);
  const transitionTimerRef = React.useRef(null);
  const showTimerRef = React.useRef(null);
  const hideTimerRef = React.useRef(null);
  const prevExitDelayRef = React.useRef<number>();

  const refOrTrigger = refElement || triggerElement;
  const showPopper = isVisible || internalIsVisible;

  const triggerParent = ((triggerRef as React.RefObject<any>)?.current || triggerElement)?.parentElement;
  const languageDirection = getLanguageDirection(triggerParent);

  const internalPosition = React.useMemo<'left' | 'right' | 'center'>(() => {
    const fixedPositions = { left: 'left', right: 'right', center: 'center' };

    const positionMap = {
      ltr: {
        start: 'left',
        end: 'right',
        ...fixedPositions
      },
      rtl: {
        start: 'right',
        end: 'left',
        ...fixedPositions
      }
    };

    return positionMap[languageDirection][position] as 'left' | 'right' | 'center';
  }, [position, languageDirection]);

  const onDocumentClickCallback = React.useCallback(
    (event: MouseEvent) => onDocumentClick(event, refOrTrigger, popperElement),
    [showPopper, triggerElement, refElement, popperElement, onDocumentClick]
  );

  React.useEffect(() => {
    setReady(true);
    onMount();
  }, []);

  // Cancel all timers on unmount
  React.useEffect(
    () => () => {
      clearTimeouts([transitionTimerRef, hideTimerRef, showTimerRef]);
    },
    []
  );

  React.useEffect(() => {
    if (triggerRef) {
      if ((triggerRef as React.RefObject<any>).current) {
        setRefElement((triggerRef as React.RefObject<any>).current);
      } else if (typeof triggerRef === 'function') {
        setRefElement(triggerRef());
      }
    }
  }, [triggerRef, trigger]);
  React.useEffect(() => {
    // When the popperRef is defined or the popper visibility changes, ensure the popper element is up to date
    if (popperRef) {
      if ((popperRef as React.RefObject<any>).current) {
        setPopperElement((popperRef as React.RefObject<any>).current);
      } else if (typeof popperRef === 'function') {
        setPopperElement(popperRef());
      }
    }
  }, [showPopper, popperRef]);
  React.useEffect(() => {
    // Trigger a Popper update when content changes.
    const observer = new MutationObserver(() => {
      update && update();
    });
    popperElement && observer.observe(popperElement, { attributes: true, childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [popperElement]);

  const addEventListener = (listener: any, element: Document | HTMLElement, event: string, capture = false) => {
    if (listener && element) {
      element.addEventListener(event, listener, { capture });
    }
  };
  const removeEventListener = (listener: any, element: Document | HTMLElement, event: string, capture = false) => {
    if (listener && element) {
      element.removeEventListener(event, listener, { capture });
    }
  };

  React.useEffect(() => {
    addEventListener(onMouseEnter, refOrTrigger, 'mouseenter');
    addEventListener(onMouseLeave, refOrTrigger, 'mouseleave');
    addEventListener(onFocus, refOrTrigger, 'focus');
    addEventListener(onBlur, refOrTrigger, 'blur');
    addEventListener(onTriggerClick, refOrTrigger, 'click');
    addEventListener(onTriggerEnter, refOrTrigger, 'keydown');
    addEventListener(onPopperClick, popperElement, 'click');
    addEventListener(onPopperMouseEnter, popperElement, 'mouseenter');
    addEventListener(onPopperMouseLeave, popperElement, 'mouseleave');
    onDocumentClick && addEventListener(onDocumentClickCallback, document, 'click', true);
    addEventListener(onDocumentKeyDown, document, 'keydown', true);

    return () => {
      removeEventListener(onMouseEnter, refOrTrigger, 'mouseenter');
      removeEventListener(onMouseLeave, refOrTrigger, 'mouseleave');
      removeEventListener(onFocus, refOrTrigger, 'focus');
      removeEventListener(onBlur, refOrTrigger, 'blur');
      removeEventListener(onTriggerClick, refOrTrigger, 'click');
      removeEventListener(onTriggerEnter, refOrTrigger, 'keydown');
      removeEventListener(onPopperClick, popperElement, 'click');
      removeEventListener(onPopperMouseEnter, popperElement, 'mouseenter');
      removeEventListener(onPopperMouseLeave, popperElement, 'mouseleave');
      onDocumentClick && removeEventListener(onDocumentClickCallback, document, 'click', true);
      removeEventListener(onDocumentKeyDown, document, 'keydown', true);
    };
  }, [
    triggerElement,
    popperElement,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onTriggerClick,
    onTriggerEnter,
    onPopperClick,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onDocumentClick,
    onDocumentKeyDown,
    refElement
  ]);
  const getPlacement = () => {
    if (placement) {
      return placement;
    }
    let convertedPlacement = direction === 'up' ? 'top' : 'bottom';
    if (internalPosition !== 'center') {
      convertedPlacement = `${convertedPlacement}-${internalPosition === 'right' ? 'end' : 'start'}`;
    }
    return convertedPlacement as Placement;
  };
  const getPlacementMemo = React.useMemo(getPlacement, [direction, internalPosition, placement]);
  const getOppositePlacementMemo = React.useMemo(
    () => getOppositePlacement(getPlacement()),
    [direction, internalPosition, placement]
  );

  const widthMods: Modifier<'widthMods', {}> = React.useMemo(
    () => ({
      name: 'widthMods',
      enabled: width !== undefined || minWidth !== undefined || maxWidth !== undefined,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: ({ state }) => {
        const triggerWidth = state.rects.reference.width;
        if (width) {
          state.styles.popper.width = width === 'trigger' ? `${triggerWidth}px` : width;
        }

        if (minWidth) {
          state.styles.popper.minWidth = minWidth === 'trigger' ? `${triggerWidth}px` : minWidth;
        }

        if (maxWidth) {
          state.styles.popper.maxWidth = maxWidth === 'trigger' ? `${triggerWidth}px` : maxWidth;
        }
      },
      effect: ({ state }) => {
        const triggerWidth = (state.elements.reference as HTMLElement).offsetWidth;
        if (width) {
          state.elements.popper.style.width = width === 'trigger' ? `${triggerWidth}px` : width;
        }

        if (minWidth) {
          state.elements.popper.style.minWidth = minWidth === 'trigger' ? `${triggerWidth}px` : minWidth;
        }

        if (maxWidth) {
          state.elements.popper.style.maxWidth = maxWidth === 'trigger' ? `${triggerWidth}px` : maxWidth;
        }
        return () => {};
      }
    }),
    [width, minWidth, maxWidth]
  );

  const {
    styles: popperStyles,
    attributes,
    update,
    forceUpdate
  } = usePopper(refOrTrigger, popperElement, {
    placement: getPlacementMemo,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, distance]
        }
      },
      {
        name: 'preventOverflow',
        enabled: preventOverflow
      },
      {
        // adds attribute [data-popper-reference-hidden] to the popper element which can be used to hide it using CSS
        name: 'hide',
        enabled: true
      },
      {
        name: 'flip',
        enabled: getPlacementMemo.startsWith('auto') || enableFlip,
        options: {
          fallbackPlacements: flipBehavior === 'flip' ? [getOppositePlacementMemo] : flipBehavior
        }
      },
      widthMods
    ]
  });

  /** We want to forceUpdate only when a tooltip's content is dynamically updated.
   * TODO: Investigate into 3rd party libraries for a less limited/specific solution
   */
  React.useEffect(() => {
    // currentPopperContent = {tooltip children} || {dropdown children}
    const currentPopperContent =
      popper?.props?.children?.[1]?.props?.children || popper?.props?.children?.props?.children;
    setPopperContent(currentPopperContent);

    if (currentPopperContent && popperContent && currentPopperContent !== popperContent) {
      forceUpdate && forceUpdate();
    }
  }, [popper]);

  React.useEffect(() => {
    if (prevExitDelayRef.current < exitDelay) {
      clearTimeouts([transitionTimerRef, hideTimerRef]);
      hideTimerRef.current = setTimeout(() => {
        transitionTimerRef.current = setTimeout(() => {
          setInternalIsVisible(false);
        }, animationDuration);
      }, exitDelay);
    }
    prevExitDelayRef.current = exitDelay;
  }, [exitDelay]);

  const show = () => {
    onShow();
    clearTimeouts([transitionTimerRef, hideTimerRef]);
    showTimerRef.current = setTimeout(() => {
      setInternalIsVisible(true);
      setOpacity(1);
      onShown();
    }, entryDelay);
  };

  const hide = () => {
    onHide();
    clearTimeouts([showTimerRef]);
    hideTimerRef.current = setTimeout(() => {
      setOpacity(0);
      transitionTimerRef.current = setTimeout(() => {
        setInternalIsVisible(false);
        onHidden();
      }, animationDuration);
    }, exitDelay);
  };

  React.useEffect(() => {
    if (isVisible) {
      show();
    } else {
      hide();
    }
  }, [isVisible]);

  // Returns the CSS modifier class in order to place the Popper's arrow properly
  // Depends on the position of the Popper relative to the reference element
  const modifierFromPopperPosition = () => {
    if (attributes && attributes.popper && attributes.popper['data-popper-placement']) {
      const popperPlacement = attributes.popper['data-popper-placement'] as keyof typeof positionModifiers;
      return positionModifiers[popperPlacement];
    }
    return positionModifiers.top;
  };

  const options = {
    className: css(popper.props && popper.props.className, positionModifiers && modifierFromPopperPosition()),
    style: {
      ...((popper.props && popper.props.style) || {}),
      ...popperStyles.popper,
      zIndex,
      opacity,
      transition: getOpacityTransition(animationDuration)
    },
    ...attributes.popper
  };

  const getMenuWithPopper = () => {
    const localPopper = React.cloneElement(popper, options);

    return popperRef ? (
      localPopper
    ) : (
      <div style={{ display: 'contents' }} ref={(node) => setPopperElement(node?.firstElementChild as HTMLElement)}>
        {localPopper}
      </div>
    );
  };

  const getPopper = () => {
    if (appendTo === 'inline') {
      return getMenuWithPopper();
    } else {
      const target = typeof appendTo === 'function' ? appendTo() : appendTo;
      return ReactDOM.createPortal(getMenuWithPopper(), target);
    }
  };

  return (
    <>
      {!triggerRef && trigger && React.isValidElement(trigger) && (
        <div style={{ display: 'contents' }} ref={(node) => setTriggerElement(node?.firstElementChild as HTMLElement)}>
          {trigger}
        </div>
      )}
      {triggerRef && trigger && React.isValidElement(trigger) && trigger}
      {ready && showPopper && getPopper()}
    </>
  );
};
Popper.displayName = 'Popper';
