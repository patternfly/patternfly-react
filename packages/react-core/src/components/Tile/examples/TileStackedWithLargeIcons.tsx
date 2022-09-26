import React from 'react';
import { Tile } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const TileStackedWithLargeIcons: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Stacked tiles with large icons">
    <Tile title="Default" icon={<BellIcon />} isStacked isDisplayLarge isSelected={false}>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Selected" icon={<BellIcon />} isStacked isDisplayLarge isSelected>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Disabled" icon={<BellIcon />} isStacked isDisplayLarge isDisabled isSelected={false}>
      Subtext goes here
    </Tile>
  </div>
);
