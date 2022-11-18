import React from 'react';
import { ButtonProps } from '../';

export const Button = ({ children, variant, isInline, onClick, iconPosition, icon, ...props }: ButtonProps) => (
  <>
    <button onClick={onClick} {...props}>
      {children}
    </button>
    <p>{`variant: ${variant}`}</p>
    <p id="labelling-id">Test label</p>
    <p>{`isInline: ${isInline}`}</p>
    <p>{`iconPosition: ${iconPosition}`}</p>
    <div data-testid="icon">{icon}</div>
  </>
);

export const ButtonVariant = { plain: 'plain', link: 'link' };
