import React from 'react';
import { Tile } from '@patternfly/react-core';

export const TileBasic: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Basic tiles">
    <Tile title="Default" isSelected={false} />
    <Tile title="Selected" isSelected />
    <Tile title="Disabled" isDisabled isSelected={false} />
  </div>
);
