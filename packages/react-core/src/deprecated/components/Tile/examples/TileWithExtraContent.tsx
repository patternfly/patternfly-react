import { Flex } from '@patternfly/react-core';
import { Tile } from '@patternfly/react-core/deprecated';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

export const TileWithExtraContent: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Tiles with extra content">
    <Flex>
      <Flex flex={{ default: 'flex_1' }}>
        <Tile title="Default" icon={<RhUiNotificationFillIcon />} isStacked isSelected={false}>
          This is really really long subtext that goes on for so long that it has to wrap to the next line. This is
          really really long subtext that goes on for so long that it has to wrap to the next line.
        </Tile>
      </Flex>
      <Flex flex={{ default: 'flex_1' }}>
        <Tile title="Selected" icon={<RhUiNotificationFillIcon />} isStacked isSelected>
          This is really really long subtext that goes on for so long that it has to wrap to the next line.
        </Tile>
      </Flex>
      <Flex flex={{ default: 'flex_1' }}>
        <Tile title="Disabled" icon={<RhUiNotificationFillIcon />} isStacked isDisabled isSelected={false}>
          Subtext goes here
        </Tile>
      </Flex>
    </Flex>
  </div>
);
