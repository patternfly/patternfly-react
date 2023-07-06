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
  <div data-testid="mock-wrapper">
    <div data-testid="popper">{isVisible && popper}</div>
    <p>{`zIndex: ${zIndex}`}</p>
    <p>{`isVisible: ${isVisible}`}</p>
    <p>{`enableFlip: ${enableFlip}`}</p>
    <p>{`placement: ${placement}`}</p>
    <p>{`appendTo: ${appendTo}`}</p>
    <p>{`distance: ${distance}`}</p>
    <p>{`flipBehavior: ${flipBehavior}`}</p>
    <p>{`minWidth: ${minWidth}`}</p>
    {trigger}
  </div>
);

export const getOpacityTransition = () => {};
