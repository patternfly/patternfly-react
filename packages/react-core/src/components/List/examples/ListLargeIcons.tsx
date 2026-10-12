import { List, ListItem } from '@rh-felt/react-core';
import RhUiLearnFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-learn-fill-icon';
import RhUiKeyIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-key-icon';
import RhUiDesktopIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-desktop-icon';

export const ListLargeIcons: React.FunctionComponent = () => (
  <List isPlain iconSize="large">
    <ListItem icon={<RhUiLearnFillIcon />}>First</ListItem>
    <ListItem icon={<RhUiKeyIcon />}>Second</ListItem>
    <ListItem icon={<RhUiDesktopIcon />}>Third</ListItem>
  </List>
);
