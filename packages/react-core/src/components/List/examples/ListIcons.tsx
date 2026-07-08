import { List, ListItem } from '@patternfly/react-core';
import RhUiLearnFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-learn-fill-icon';
import RhUiKeyIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-key-icon';
import RhUiDesktopIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-desktop-icon';

export const ListIcons: React.FunctionComponent = () => (
  <List isPlain>
    <ListItem icon={<RhUiLearnFillIcon />}>First</ListItem>
    <ListItem icon={<RhUiKeyIcon />}>Second</ListItem>
    <ListItem icon={<RhUiDesktopIcon />}>Third</ListItem>
  </List>
);
