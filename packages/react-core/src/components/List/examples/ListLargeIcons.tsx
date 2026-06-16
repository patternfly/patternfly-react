import { List, ListItem } from '@patternfly/react-core';
import RhUiLearnFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-learn-fill-icon';
import KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';
import DesktopIcon from '@patternfly/react-icons/dist/esm/icons/desktop-icon';

export const ListLargeIcons: React.FunctionComponent = () => (
  <List isPlain iconSize="large">
    <ListItem icon={<RhUiLearnFillIcon />}>First</ListItem>
    <ListItem icon={<KeyIcon />}>Second</ListItem>
    <ListItem icon={<DesktopIcon />}>Third</ListItem>
  </List>
);
