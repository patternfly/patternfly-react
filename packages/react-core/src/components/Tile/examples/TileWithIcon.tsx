import React from 'react';
import { Tile } from '@patternfly/react-core';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

export const TileWithIcon: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Tiles with icon">
    <Tile title="Default" icon={<PlusIcon />} isSelected={false}>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Selected" icon={<PlusIcon />} isSelected>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Disabled" icon={<PlusIcon />} isDisabled isSelected={false}>
      Subtext goes here
    </Tile>
  </div>
);
