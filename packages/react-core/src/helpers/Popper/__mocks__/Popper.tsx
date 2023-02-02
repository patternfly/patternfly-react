import React from 'react';
import { PopperProps } from '../Popper';

export const Popper = ({ popper, zIndex, isVisible, trigger }: PopperProps) => (
  <>
    <div>{popper}</div>
    <p>{`zIndex: ${zIndex}`}</p>
    <p>{`isOpen: ${isVisible}`}</p>
    <div>{trigger}</div>
  </>
);
