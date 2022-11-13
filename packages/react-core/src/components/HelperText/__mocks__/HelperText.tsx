import React from 'react';
import { HelperTextProps } from '../';

export const HelperText = ({ children, isLiveRegion }: HelperTextProps) => (
  <>
    <div data-testid="helper-text-children-container">{children}</div>
    <p>{`isLiveRegion: ${isLiveRegion}`}</p>
  </>
);
