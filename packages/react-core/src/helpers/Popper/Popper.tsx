import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FindRefWrapper } from './FindRefWrapper';
import { usePopper } from 'react-popper';
import { Placement, Modifier } from '@popperjs/core';

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
  position?: 'right' | 'left';
  /** The container to append the popper to. Defaults to 'document.body' */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** z-index of the popper element */
  zIndex?: number;
  /** True to make the popper visible */
  isVisible?: boolean;
}

export const Popper: React.FunctionComponent<PopperProps> = ({
  trigger,
  popper,
  popperMatchesTriggerWidth = true,
  direction = 'down',
  position = 'left',
  appendTo = () => document.body,
  zIndex = 9999,
  isVisible = true
}) => {
  const [triggerElement, setTriggerElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true));
  const getPlacement = () =>
    `${direction === 'up' ? 'top' : 'bottom'}-${position === 'right' ? 'end' : 'start'}` as Placement;
  const sameWidthMod: Modifier<'sameWidth', {}> = React.useMemo(
    () => ({
      name: 'sameWidth',
      enabled: popperMatchesTriggerWidth,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: ({ state }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      effect: ({ state }) => () => {
        state.elements.popper.style.width = `${(state.elements.reference as HTMLElement).offsetWidth}px`;
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
          offset: [0, 0] // offset: [0, 15] for tooltips and popovers
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
        enabled: false
      },
      sameWidthMod
    ]
  });

  const menuWithPopper = React.cloneElement(popper, {
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
