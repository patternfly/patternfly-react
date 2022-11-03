import React from 'react';
import { Tile, Flex } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const TileWithExtraContent: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Tiles with extra content">
    <Flex>
      <Flex flex={{ default: 'flex_1' }}>
        <Tile title="Default" icon={<BellIcon />} isStacked isSelected={false}>
          This is really really long subtext that goes on for so long that it has to wrap to the next line. This is
          really really long subtext that goes on for so long that it has to wrap to the next line.
        </Tile>
      </Flex>
      <Flex flex={{ default: 'flex_1' }}>
        <Tile title="Selected" icon={<BellIcon />} isStacked isSelected>
          This is really really long subtext that goes on for so long that it has to wrap to the next line.
        </Tile>
      </Flex>
      <Flex flex={{ default: 'flex_1' }}>
        <Tile title="Disabled" icon={<BellIcon />} isStacked isDisabled isSelected={false}>
          Subtext goes here
        </Tile>
      </Flex>
    </Flex>
  </div>
);
