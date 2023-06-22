import React from 'react';
import { PopperProps } from '../Popper';

export const Popper = ({
  popper,
  zIndex,
  placement,
  trigger,
  enableFlip,
  appendTo,
  distance,
  flipBehavior,
  isVisible,
  minWidth
}: PopperProps) => (
  <>
    <div data-testid="popper">{isVisible && popper}</div>
    <p>{`zIndex: ${zIndex}`}</p>
    <p>{`isOpen: ${isVisible}`}</p>
    <p>{`enableFlip: ${enableFlip}`}</p>
    <p>{`placement: ${placement}`}</p>
    <p>{`appendTo: ${appendTo}`}</p>
    <p>{`distance: ${distance}`}</p>
    <p>{`flipBehavior: ${flipBehavior}`}</p>
    <p>{`minWidth: ${minWidth}`}</p>
    <div data-testid="trigger">{trigger}</div>
  </>
);

export const getOpacityTransition = () => {};
