import React from 'react';
import { HelperTextItemProps } from '../';

export const HelperTextItem = ({ children, variant }: HelperTextItemProps) => (
  <>
    <div data-testid="helper-text-item-children-container">{children}</div>
    <p>{`variant: ${variant}`}</p>
  </>
);
