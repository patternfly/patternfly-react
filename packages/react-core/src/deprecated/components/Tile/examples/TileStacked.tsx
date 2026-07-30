import { Tile } from '@patternfly/react-core/deprecated';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

export const TileStacked: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Stacked tiles">
    <Tile title="Default" icon={<RhUiNotificationFillIcon />} isStacked isSelected={false}>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Selected" icon={<RhUiNotificationFillIcon />} isStacked isSelected>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Disabled" icon={<RhUiNotificationFillIcon />} isStacked isDisabled isSelected={false}>
      Subtext goes here
    </Tile>
  </div>
);
