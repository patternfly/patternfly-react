import { FunctionComponent } from 'react';
import { List, ListItem } from '@patternfly/react-core';
import BookOpenIcon from '@patternfly/react-icons/dist/esm/icons/book-open-icon';
import KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';
import DesktopIcon from '@patternfly/react-icons/dist/esm/icons/desktop-icon';

export const ListIcons: FunctionComponent = () => (
  <List isPlain>
    <ListItem icon={<BookOpenIcon />}>First</ListItem>
    <ListItem icon={<KeyIcon />}>Second</ListItem>
    <ListItem icon={<DesktopIcon />}>Third</ListItem>
  </List>
);
