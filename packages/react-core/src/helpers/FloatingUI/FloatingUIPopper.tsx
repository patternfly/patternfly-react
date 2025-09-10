import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  size,
  useClick,
  useHover,
  useFocus,
  useDismiss,
  useInteractions,
  FloatingPortal,
  Placement
} from '@floating-ui/react';
// Inline utility functions to avoid import issues
const clearTimeouts = (timeoutRefs: React.MutableRefObject<ReturnType<typeof setTimeout> | null>[]) => {
  timeoutRefs.forEach((timeoutRef) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  });
};

const getLanguageDirection = (targetElement: HTMLElement = document.body, defaultDirection: 'ltr' | 'rtl' = 'ltr') => {
  if (!targetElement) {
    return defaultDirection;
  }
  const computedStyle = window.getComputedStyle(targetElement);
  const direction = computedStyle.direction;
  return direction === 'rtl' ? 'rtl' : 'ltr';
};

// Re-export the same interface as the current Popper for 100% compatibility
export interface FloatingUIPopperProps {
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
  popper: React.ReactElement<any>;
  /**
   * Reference to the popper (menu/tooltip/popover) element.
   * Passing this prop will remove the wrapper div element from the popper.
   */
  _popperRef?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
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
  _positionModifiers?: {
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
  _onTriggerEnter?: (event?: KeyboardEvent) => void;
  /** Callback function when popper is clicked */
  onPopperClick?: (event?: MouseEvent) => void;
  /** Callback function when mouse enters popper content */
  onPopperMouseEnter?: (event?: MouseEvent) => void;
  /** Callback function when mouse leaves popper content */
  onPopperMouseLeave?: (event?: MouseEvent) => void;
  /** Callback function when document is clicked */
  _onDocumentClick?: (event?: MouseEvent, triggerElement?: HTMLElement, popperElement?: HTMLElement) => void;
  /** Callback function when keydown event occurs on document */
  _onDocumentKeyDown?: (event?: KeyboardEvent) => void;
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

const getFloatingUIOpacityTransition = (animationDuration: number) =>
  `opacity ${animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`;

export const FloatingUIPopper: React.FunctionComponent<FloatingUIPopperProps> = ({
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
  _positionModifiers,
  distance = 0,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  _onDocumentClick,
  onTriggerClick,
  _onTriggerEnter,
  onPopperClick,
  onPopperMouseEnter,
  onPopperMouseLeave,
  _onDocumentKeyDown,
  enableFlip = true,
  flipBehavior = 'flip',
  triggerRef,
  _popperRef,
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
  const [opacity, setOpacity] = useState(0);
  const [internalIsVisible, setInternalIsVisible] = useState(isVisible);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevExitDelayRef = useRef<number | undefined>(undefined);

  const showPopper = isVisible || internalIsVisible;

  // Get language direction for RTL support
  const languageDirection = getLanguageDirection(document.body);

  // Handle position mapping with RTL support
  const internalPosition = useMemo<'left' | 'right' | 'center'>(() => {
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

  // Convert Popper direction/position to Floating UI placement
  const floatingUIPlacement = useMemo<Placement>(() => {
    if (placement) {
      return placement;
    }

    let convertedPlacement = direction === 'up' ? 'top' : 'bottom';

    if (internalPosition !== 'center') {
      convertedPlacement = `${convertedPlacement}-${internalPosition === 'right' ? 'end' : 'start'}`;
    }

    return convertedPlacement as Placement;
  }, [direction, placement, internalPosition]);

  // Configure middleware
  const middleware = useMemo(() => {
    const middlewareArray = [
      offset(distance),
      size({
        apply: ({ elements, rects }) => {
          const triggerWidth = rects.reference.width;

          // Apply width constraints with higher specificity
          // Only set width if explicitly provided (fixed width)
          if (width) {
            elements.floating.style.setProperty(
              'width',
              width === 'trigger' ? `${triggerWidth}px` : width,
              'important'
            );
          }

          // Always set minWidth (default is 'trigger' which allows content expansion)
          if (minWidth) {
            elements.floating.style.setProperty(
              'min-width',
              minWidth === 'trigger' ? `${triggerWidth}px` : minWidth,
              'important'
            );
          }

          if (maxWidth) {
            elements.floating.style.setProperty(
              'max-width',
              maxWidth === 'trigger' ? `${triggerWidth}px` : maxWidth,
              'important'
            );
          }
        }
      })
    ];

    // Conditionally add flip middleware
    if (enableFlip) {
      middlewareArray.push(
        flip({
          fallbackPlacements: flipBehavior === 'flip' ? undefined : (flipBehavior as Placement[])
        })
      );
    }

    // Conditionally add shift middleware
    if (preventOverflow) {
      middlewareArray.push(shift());
    }

    return middlewareArray;
  }, [distance, enableFlip, flipBehavior, preventOverflow, width, minWidth, maxWidth]);

  // Set up reference element - use triggerRef if provided, otherwise use the wrapper div
  const [refElement, setRefElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (triggerRef) {
      if ((triggerRef as React.RefObject<any>).current) {
        setRefElement((triggerRef as React.RefObject<any>).current);
      } else if (typeof triggerRef === 'function') {
        setRefElement(triggerRef());
      } else {
        setRefElement(triggerRef as HTMLElement);
      }
    }
  }, [triggerRef]);

  const { refs, floatingStyles, context } = useFloating({
    placement: floatingUIPlacement,
    middleware,
    open: showPopper,
    whileElementsMounted: autoUpdate
  });

  // Set the reference element when triggerRef is provided
  useEffect(() => {
    if (refElement && triggerRef) {
      refs.setReference(refElement);
    }
  }, [refElement, triggerRef, refs]);

  // Interaction hooks for event handling
  const click = useClick(context);
  const hover = useHover(context);
  const focus = useFocus(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, hover, focus, dismiss]);

  // Handle custom event callbacks
  const handleMouseEnter = useCallback(
    (event: React.MouseEvent) => {
      onMouseEnter?.(event.nativeEvent);
    },
    [onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (event: React.MouseEvent) => {
      onMouseLeave?.(event.nativeEvent);
    },
    [onMouseLeave]
  );

  const handleFocus = useCallback(
    (event: React.FocusEvent) => {
      onFocus?.(event.nativeEvent);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent) => {
      onBlur?.(event.nativeEvent);
    },
    [onBlur]
  );

  const handleTriggerClick = useCallback(
    (event: React.MouseEvent) => {
      onTriggerClick?.(event.nativeEvent);
    },
    [onTriggerClick]
  );

  const handlePopperClick = useCallback(
    (event: React.MouseEvent) => {
      onPopperClick?.(event.nativeEvent);
    },
    [onPopperClick]
  );

  const handlePopperMouseEnter = useCallback(
    (event: React.MouseEvent) => {
      onPopperMouseEnter?.(event.nativeEvent);
    },
    [onPopperMouseEnter]
  );

  const handlePopperMouseLeave = useCallback(
    (event: React.MouseEvent) => {
      onPopperMouseLeave?.(event.nativeEvent);
    },
    [onPopperMouseLeave]
  );

  // Mount callback
  useEffect(() => {
    onMount();
  }, [onMount]);

  // Cleanup timers on unmount
  useEffect(
    () => () => {
      clearTimeouts([transitionTimerRef, hideTimerRef, showTimerRef]);
    },
    []
  );

  // Handle animation and delays
  const show = useCallback(() => {
    onShow();
    clearTimeouts([transitionTimerRef, hideTimerRef]);
    showTimerRef.current = setTimeout(() => {
      setInternalIsVisible(true);
      setOpacity(1);
      onShown();
    }, entryDelay);
  }, [onShow, onShown, entryDelay]);

  const hide = useCallback(() => {
    onHide();
    clearTimeouts([showTimerRef]);
    hideTimerRef.current = setTimeout(() => {
      setOpacity(0);
      transitionTimerRef.current = setTimeout(() => {
        setInternalIsVisible(false);
        onHidden();
      }, animationDuration);
    }, exitDelay);
  }, [onHide, onHidden, exitDelay, animationDuration]);

  useEffect(() => {
    if (isVisible) {
      show();
    } else {
      hide();
    }
  }, [isVisible, show, hide]);

  // Handle exit delay changes
  useEffect(() => {
    if (prevExitDelayRef.current !== undefined && prevExitDelayRef.current < exitDelay) {
      clearTimeouts([transitionTimerRef, hideTimerRef]);
      hideTimerRef.current = setTimeout(() => {
        transitionTimerRef.current = setTimeout(() => {
          setInternalIsVisible(false);
        }, animationDuration);
      }, exitDelay);
    }
    prevExitDelayRef.current = exitDelay;
  }, [exitDelay, animationDuration]);

  // Determine the portal root element
  let portalRoot = null;
  if (appendTo !== 'inline') {
    if (typeof appendTo === 'function') {
      portalRoot = appendTo();
    } else {
      portalRoot = appendTo;
    }
  }

  return (
    <>
      {trigger && !triggerRef && (
        <div
          ref={refs.setReference}
          {...getReferenceProps()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleTriggerClick}
        >
          {trigger}
        </div>
      )}
      {internalIsVisible && (
        <FloatingPortal root={portalRoot}>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              zIndex,
              opacity,
              transition: getFloatingUIOpacityTransition(animationDuration)
            }}
            {...getFloatingProps()}
            onClick={handlePopperClick}
            onMouseEnter={handlePopperMouseEnter}
            onMouseLeave={handlePopperMouseLeave}
          >
            {popper}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

FloatingUIPopper.displayName = 'FloatingUIPopper';
