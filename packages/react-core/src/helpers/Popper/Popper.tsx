import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FindRefWrapper } from './FindRefWrapper';
import { usePopper } from 'react-popper';
import { Placement, Modifier } from '@popperjs/core';
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
  /** The container to append the popper to. Defaults to 'document.body' */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** z-index of the popper element */
  zIndex?: number;
  /** True to make the popper visible */
  isVisible?: boolean;
  positionModifiers?: {
    top?: any;
    right?: any;
    bottom?: any;
    left?: any;
  };
  distance?: number;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onFocus?: any;
  onBlur?: any;
  onClick?: any;
  onKeyDown?: any;
  enableFlip?: boolean;
  placement?: Placement;
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
  onClick,
  onKeyDown,
  enableFlip = true,
  flipBehavior
}) => {
  const [triggerElement, setTriggerElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  const onClickCallback = (event: any) => onClick(event, triggerElement);
  React.useEffect(() => {
    setReady(true);
  });
  React.useEffect(() => {
    onMouseEnter && triggerElement && triggerElement.addEventListener('mouseenter', onMouseEnter);
    onMouseLeave && triggerElement && triggerElement.addEventListener('mouseleave', onMouseLeave);
    onFocus && triggerElement && triggerElement.addEventListener('focus', onFocus);
    onBlur && triggerElement && triggerElement.addEventListener('blur', onBlur);
    onClick && triggerElement && document.addEventListener('click', onClickCallback);
    onKeyDown && triggerElement && document.addEventListener('keydown', onKeyDown, false);
    return () => {
      onMouseEnter && triggerElement && triggerElement.removeEventListener('mouseenter', onMouseEnter);
      onMouseLeave && triggerElement && triggerElement.removeEventListener('mouseleave', onMouseLeave);
      onFocus && triggerElement && triggerElement.removeEventListener('focus', onFocus);
      onBlur && triggerElement && triggerElement.removeEventListener('blur', onBlur);
      onClick && triggerElement && document.removeEventListener('click', onClickCallback);
      onKeyDown && triggerElement && document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [triggerElement, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick]);
  const getPlacement = () => {
    let convertedPlacement = direction === 'up' ? 'top' : 'bottom';
    if (position !== 'center') {
      convertedPlacement = `${placement}-${position === 'right' ? 'end' : 'start'}`;
    }
    return convertedPlacement as Placement;
  };
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
  // Perhaps to be added in the future to the preventOverflow modifier for backwards compatibility reasons
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mapBoundaryOptions: (
    boundary: 'scrollParent' | 'window' | 'viewport' | HTMLElement
  ) => Partial<FlipOptions> = boundary => {
    if (boundary === 'window') {
      return {
        // equivalent to boundary: 'window' in v1, usually NOT necessary in v2
        rootBoundary: 'document'
      };
    } else if (boundary === 'scrollParent') {
      return {
        // check the reference's/trigger's boundary context instead of popper's
        altBoundary: true,
        boundary: 'clippingParents'
      };
    } else if (boundary === 'viewport') {
      return {
        rootBoundary: 'viewport'
      };
    } else {
      return {
        boundary
      };
    }
  };
  const { styles: popperStyles, attributes } = usePopper(triggerElement, popperElement, {
    placement: placement || getPlacement(),
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
        enabled: enableFlip,
        options: {
          fallbackPlacements:
            flipBehavior === 'flip' ? [getOppositePlacement(placement || getPlacement())] : flipBehavior
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
