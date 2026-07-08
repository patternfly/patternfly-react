import { Tile } from '@patternfly/react-core/deprecated';
import RhUiAddIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-icon';

export const TileWithIcon: React.FunctionComponent = () => (
  <div role="listbox" aria-label="Tiles with icon">
    <Tile title="Default" icon={<RhUiAddIcon />} isSelected={false}>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Selected" icon={<RhUiAddIcon />} isSelected>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Disabled" icon={<RhUiAddIcon />} isDisabled isSelected={false}>
      Subtext goes here
    </Tile>
  </div>
);
