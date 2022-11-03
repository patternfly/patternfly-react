import React from 'react';
import { Tile } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const TileStacked: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Stacked tiles">
    <Tile title="Default" icon={<BellIcon />} isStacked isSelected={false}>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Selected" icon={<BellIcon />} isStacked isSelected>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Disabled" icon={<BellIcon />} isStacked isDisabled isSelected={false}>
      Subtext goes here
    </Tile>
  </div>
);
