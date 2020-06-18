import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FindRefWrapper } from './FindRefWrapper';
import { usePopper } from 'react-popper';
import { Placement, Modifier } from '@popperjs/core';
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
}

export const Popper: React.FunctionComponent<PopperProps> = ({
  trigger,
  popper,
  popperMatchesTriggerWidth = false,
  direction = 'down',
  position = 'left',
  appendTo = () => document.body,
  zIndex = 9999,
  isVisible = true,
  positionModifiers,
  distance = 0,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onClick
}) => {
  const [triggerElement, setTriggerElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    setReady(true);
  });
  React.useEffect(() => {
    onMouseEnter && triggerElement && triggerElement.addEventListener('mouseenter', onMouseEnter);
    onMouseLeave && triggerElement && triggerElement.addEventListener('mouseleave', onMouseLeave);
    onFocus && triggerElement && triggerElement.addEventListener('focus', onFocus);
    onBlur && triggerElement && triggerElement.addEventListener('blur', onBlur);
    onClick && triggerElement && document.addEventListener('click', event => onClick(event, triggerElement));
    return () => {
      onMouseEnter && triggerElement && triggerElement.removeEventListener('mouseenter', onMouseEnter);
      onMouseLeave && triggerElement && triggerElement.removeEventListener('mouseleave', onMouseLeave);
      onFocus && triggerElement && triggerElement.removeEventListener('focus', onFocus);
      onBlur && triggerElement && triggerElement.removeEventListener('blur', onBlur);
      onClick && triggerElement && document.removeEventListener('click', event => onClick(event, triggerElement));
    };
  }, [triggerElement, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick]);
  const getPlacement = () => {
    let placement = direction === 'up' ? 'top' : 'bottom';
    if (position !== 'center') {
      placement = `${placement}-${position === 'right' ? 'end' : 'start'}`;
    }
    return placement as Placement;
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
  const { styles: popperStyles, attributes } = usePopper(triggerElement, popperElement, {
    placement: getPlacement(),
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, distance]
        }
      },
      {
        name: 'preventOverflow',
        enabled: true
      },
      {
        name: 'hide',
        enabled: true
      },
      {
        name: 'flip',
        enabled: true
      },
      sameWidthMod
    ]
  });

  const modifierFromPopperPosition = () => {
    if (attributes && attributes.popper && attributes.popper['data-popper-placement']) {
      const placement = attributes.popper['data-popper-placement'];
      if (placement.startsWith('top') /* && position !== 'top'*/) {
        console.log(`top`);
        return positionModifiers.top || '';
      } else if (placement.startsWith('bottom') /* && position !== 'bottom'*/) {
        console.log(`bottom`);
        return positionModifiers.bottom || '';
      } else if (placement.startsWith('left') /* && position !== 'left'*/) {
        console.log(`left`);
        return positionModifiers.left || '';
      } else if (placement.startsWith('right') /* && position !== 'right'*/) {
        console.log(`right`);
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
