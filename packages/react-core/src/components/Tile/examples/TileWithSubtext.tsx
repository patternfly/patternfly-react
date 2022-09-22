import React from 'react';
import { Tile } from '@patternfly/react-core';

export const TileWithSubtext: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Tiles with subtext">
    <Tile title="Default" isSelected={false}>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Selected" isSelected>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Disabled" isDisabled isSelected={false}>
      Subtext goes here
    </Tile>
  </div>
);
