import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FindRefWrapper } from './FindRefWrapper';
import { usePopper } from 'react-popper';
import { Placement, Modifier, Boundary } from '@popperjs/core';
import { Options as FlipOptions } from '@popperjs/core/lib/modifiers/flip';
import getOppositePlacement from '@popperjs/core/lib/utils/getOppositePlacement';
import { css } from '@patternfly/react-styles';

export interface ToggleMenuBaseProps {
  /** The container to append the menu to. Defaults to 'inline'
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo="parent"
   * menuAppendTo={() => document.body}
   * menuAppendTo={document.getElementById('target')}
   */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'parent' | 'inline';
}

export const getOpacityTransition = (animationDuration: number) =>
  `opacity ${animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`;

export interface PopperProps {
  /** The trigger element */
  trigger: React.ReactNode;
  /** The popper (menu/tooltip/popover) element */
  popper: React.ReactElement;
  /** True to set the width of the popper element to the trigger element's width */
  popperMatchesTriggerWidth?: boolean;
  /** popper direction */
  direction?: 'up' | 'down';
  /** popper position */
  position?: 'right' | 'left' | 'center';
  /** Instead of direction and position can set the placement of the popper */
  placement?: Placement;
  /** The container to append the popper to. Defaults to 'document.body' */
  appendTo?: HTMLElement | (() => HTMLElement);
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
  /** Callback function when document is clicked */
  onDocumentClick?: (event?: MouseEvent, triggerElement?: HTMLElement) => void;
  /** Callback function when keydown event occurs on document */
  onDocumentKeyDown?: (event?: KeyboardEvent) => void;
  /** Enable to flip the popper when it reaches the boundary */
  enableFlip?: boolean;
  /** The behavior of how the popper flips when it reaches the boundary */
  flipBehavior?: 'flip' | ('top' | 'bottom' | 'left' | 'right')[];
}

export const Popper: React.FunctionComponent<PopperProps> = ({
  trigger,
  popper,
  popperMatchesTriggerWidth = true,
  direction = 'down',
  position = 'left',
  placement,
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
  onDocumentKeyDown,
  enableFlip = true,
  flipBehavior = 'flip'
}) => {
  const [triggerElement, setTriggerElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  const onDocumentClickCallback = React.useCallback(event => onDocumentClick(event, triggerElement), [
    isVisible,
    triggerElement,
    onDocumentClick
  ]);
  React.useEffect(() => {
    setReady(true);
  }, []);
  const addEventListener = (listener: any, element: Document | HTMLElement, event: string) => {
    if (listener && element) {
      element.addEventListener(event, listener);
    }
  };
  const removeEventListener = (listener: any, element: Document | HTMLElement, event: string) => {
    if (listener && element) {
      element.removeEventListener(event, listener);
    }
  };
  React.useEffect(() => {
    addEventListener(onMouseEnter, triggerElement, 'mouseenter');
    addEventListener(onMouseLeave, triggerElement, 'mouseleave');
    addEventListener(onFocus, triggerElement, 'focus');
    addEventListener(onBlur, triggerElement, 'blur');
    addEventListener(onTriggerClick, triggerElement, 'click');
    addEventListener(onTriggerEnter, triggerElement, 'keydown');
    addEventListener(onPopperClick, popperElement, 'click');
    onDocumentClick && addEventListener(onDocumentClickCallback, document, 'click');
    addEventListener(onDocumentKeyDown, document, 'keydown');
    return () => {
      removeEventListener(onMouseEnter, triggerElement, 'mouseenter');
      removeEventListener(onMouseLeave, triggerElement, 'mouseleave');
      removeEventListener(onFocus, triggerElement, 'focus');
      removeEventListener(onBlur, triggerElement, 'blur');
      removeEventListener(onTriggerClick, triggerElement, 'click');
      removeEventListener(onTriggerEnter, triggerElement, 'keydown');
      removeEventListener(onPopperClick, popperElement, 'click');
      onDocumentClick && removeEventListener(onDocumentClickCallback, document, 'click');
      removeEventListener(onDocumentKeyDown, document, 'keydown');
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
    onDocumentClick,
    onDocumentKeyDown
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
  const getOppositePlacementMemo = React.useMemo(() => getOppositePlacement(getPlacement()), [
    direction,
    position,
    placement
  ]);
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mapBoundaryOptions: (boundary: string | HTMLElement) => Partial<FlipOptions> = boundary => {
    if (boundary === 'window') {
      return {
        // equivalent to boundary: 'window' in v1, usually NOT necessary in v2
        altBoundary: false,
        rootBoundary: 'document'
      };
    } else if (boundary === 'scrollParent') {
      return {
        // check the reference's/trigger's boundary context instead of popper's
        altBoundary: true,
        boundary: 'clippingParents' as Boundary
      };
    } else if (boundary === 'viewport') {
      return {
        altBoundary: false,
        rootBoundary: 'viewport'
      };
    } else {
      // HTMLElement
      return {
        altBoundary: false,
        boundary: boundary as HTMLElement
      };
    }
  };
  // maybe make this an option again to be backwards compatible although it shouldn't be needed anymore
  // boundary would be of type: 'scrollParent' | 'window' | 'viewport' | HTMLElement
  // const mapBoundaryOptionsMemo = React.useMemo(mapBoundaryOptions, [boundary]);
  const { styles: popperStyles, attributes } = usePopper(triggerElement, popperElement, {
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
        name: 'hide',
        enabled: false
      },
      {
        name: 'flip',
        enabled: getPlacementMemo.startsWith('auto') || enableFlip,
        options: {
          fallbackPlacements: flipBehavior === 'flip' ? [getOppositePlacementMemo] : flipBehavior
          // ...mapBoundaryOptionsMemo
        }
      },
      sameWidthMod
    ]
  });

  const modifierFromPopperPosition = () => {
    if (attributes && attributes.popper && attributes.popper['data-popper-placement']) {
      const popperPlacement = attributes.popper['data-popper-placement'];
      if (popperPlacement.startsWith('top')) {
        return positionModifiers.top || '';
      } else if (popperPlacement.startsWith('bottom')) {
        return positionModifiers.bottom || '';
      } else if (popperPlacement.startsWith('left')) {
        return positionModifiers.left || '';
      } else if (popperPlacement.startsWith('right')) {
        return positionModifiers.right || '';
      }
    }
    return positionModifiers.top;
  };

  const menuWithPopper = React.cloneElement(popper, {
    className: css(popper.props && popper.props.className, positionModifiers && modifierFromPopperPosition()),
    style: {
      ...((popper.props && popper.props.style) || {}),
      ...popperStyles.popper,
      zIndex
    },
    ...attributes.popper
  });

  const getTarget: () => HTMLElement = () => {
    if (typeof appendTo === 'function') {
      return appendTo();
    }
    return appendTo;
  };

  return (
    <>
      <FindRefWrapper onFoundRef={(foundRef: any) => setTriggerElement(foundRef)}>{trigger}</FindRefWrapper>
      {ready &&
        isVisible &&
        ReactDOM.createPortal(
          <FindRefWrapper onFoundRef={(foundRef: any) => setPopperElement(foundRef)}>{menuWithPopper}</FindRefWrapper>,
          getTarget()
        )}
    </>
  );
};
Popper.displayName = 'Popper';
