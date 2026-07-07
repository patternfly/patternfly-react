import { List, ListItem } from '@patternfly/react-core';
import RhUiLearnFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-learn-fill-icon';
import RhUiKeyIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-key-icon';
import DesktopIcon from '@patternfly/react-icons/dist/esm/icons/desktop-icon';

export const ListIcons: React.FunctionComponent = () => (
  <List isPlain>
    <ListItem icon={<RhUiLearnFillIcon />}>First</ListItem>
    <ListItem icon={<RhUiKeyIcon />}>Second</ListItem>
    <ListItem icon={<DesktopIcon />}>Third</ListItem>
  </List>
);
