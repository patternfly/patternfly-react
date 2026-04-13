import { Button, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';

export const ToolbarGroups: React.FunctionComponent = () => (
  <Toolbar id="toolbar-vertical" isVertical>
    <ToolbarContent>
      <ToolbarGroup variant="action-group-plain">
        <ToolbarItem>
          <Button variant="plain" aria-label="edit" icon={<EditIcon />} />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="plain" aria-label="clone" icon={<CloneIcon />} />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="plain" aria-label="sync" icon={<SyncIcon />} />
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup variant="action-group-plain" visibilityAtHeight={{ default: 'hidden', md: 'visible' }}>
        <ToolbarItem>
          <Button variant="plain" aria-label="edit" icon={<EditIcon />} />
        </ToolbarItem>
        <ToolbarItem visibilityAtHeight={{ default: 'hidden', lg: 'visible' }}>
          <Button variant="plain" aria-label="clone" icon={<CloneIcon />} />
        </ToolbarItem>
        <ToolbarItem visibilityAtHeight={{ default: 'hidden', lg: 'visible' }}>
          <Button variant="plain" aria-label="sync" icon={<SyncIcon />} />
        </ToolbarItem>
      </ToolbarGroup>
    </ToolbarContent>
  </Toolbar>
);
