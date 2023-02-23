import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { usePopper } from './thirdparty/react-popper/usePopper';
import { Placement, Modifier } from './thirdparty/popper-core';
import { css } from '@patternfly/react-styles';
import '@patternfly/react-styles/css/components/Popper/Popper.css';

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
   * @beta Reference to the popper (menu/tooltip/popover) element.
   * Passing this prop will remove the wrapper div element from the popper.
   */
  popperRef?: HTMLElement | (() => HTMLElement) | React.RefObject<any>;
  /** True to set the width of the popper element to the trigger element's width */
  popperMatchesTriggerWidth?: boolean;
  /** popper direction */
  direction?: 'up' | 'down';
  /** popper position */
  position?: 'right' | 'left' | 'center';
  /** Instead of direction and position can set the placement of the popper */
  placement?: Placement;
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
}

export const Popper: React.FunctionComponent<PopperProps> = ({
  trigger,
  popper,
  popperMatchesTriggerWidth = true,
  direction = 'down',
  position = 'left',
  placement,
  appendTo = 'inline',
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
  popperRef
}) => {
  const [triggerElement, setTriggerElement] = React.useState(null);
  const [refElement, setRefElement] = React.useState<HTMLElement>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLElement>(null);
  const [ready, setReady] = React.useState(false);
  const refOrTrigger = refElement || triggerElement;
  const onDocumentClickCallback = React.useCallback(
    (event: MouseEvent) => onDocumentClick(event, refOrTrigger, popperElement),
    [isVisible, triggerElement, refElement, popperElement, onDocumentClick]
  );

  React.useEffect(() => {
    setReady(true);
  }, []);
  React.useEffect(() => {
    if (triggerRef) {
      if ((triggerRef as React.RefObject<any>).current) {
        setRefElement((triggerRef as React.RefObject<any>).current);
      } else if (typeof triggerRef === 'function') {
        setRefElement(triggerRef());
      }
    }
  }, [triggerRef]);
  React.useEffect(() => {
    // When the popperRef is defined or the popper visibility changes, ensure the popper element is up to date
    if (popperRef) {
      if ((popperRef as React.RefObject<any>).current) {
        setPopperElement((popperRef as React.RefObject<any>).current);
      } else if (typeof popperRef === 'function') {
        setPopperElement(popperRef());
      }
    }
  }, [isVisible, popperRef]);
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

    // Trigger a Popper update when content changes.
    const observer = new MutationObserver(() => {
      update && update();
    });
    popperElement && observer.observe(popperElement, { attributes: true, childList: true, subtree: true });

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
      observer.disconnect();
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
    if (position !== 'center') {
      convertedPlacement = `${convertedPlacement}-${position === 'right' ? 'end' : 'start'}`;
    }
    return convertedPlacement as Placement;
  };
  const getPlacementMemo = React.useMemo(getPlacement, [direction, position, placement]);
  const getOppositePlacementMemo = React.useMemo(
    () => getOppositePlacement(getPlacement()),
    [direction, position, placement]
  );
  const sameWidthMod: Modifier<'sameWidth', {}> = React.useMemo(
    () => ({
      name: 'sameWidth',
      enabled: popperMatchesTriggerWidth,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: ({ state }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      effect: ({ state }) => {
        state.elements.popper.style.width = `${(state.elements.reference as HTMLElement).offsetWidth}px`;
        return () => {};
      }
    }),
    [popperMatchesTriggerWidth]
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
        enabled: false
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
      sameWidthMod
    ]
  });

  React.useEffect(() => {
    forceUpdate && forceUpdate();
  }, [popper]);

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
      zIndex
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
      {ready && isVisible && getPopper()}
    </>
  );
};
Popper.displayName = 'Popper';
