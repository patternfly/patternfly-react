import { Tile } from '@patternfly/react-core/deprecated';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

export const TileStackedWithLargeIcons: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Stacked tiles with large icons">
    <Tile title="Default" icon={<RhUiNotificationFillIcon />} isStacked isDisplayLarge isSelected={false}>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Selected" icon={<RhUiNotificationFillIcon />} isStacked isDisplayLarge isSelected>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Disabled" icon={<RhUiNotificationFillIcon />} isStacked isDisplayLarge isDisabled isSelected={false}>
      Subtext goes here
    </Tile>
  </div>
);
