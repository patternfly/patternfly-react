import { useState } from 'react';
import { Toolbar, ToolbarItem, ToolbarContent, Button, SearchInput, ToolbarGroup } from '@patternfly/react-core';

export const ToolbarDemo: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div style={{ padding: '16px' }}>
      <h2>Toolbar Example</h2>
      <Toolbar id="toolbar-demo">
        <ToolbarContent>
          <ToolbarGroup>
            <ToolbarItem>
              <SearchInput
                aria-label="Search input"
                placeholder="Search items..."
                value={searchValue}
                onChange={(_event, value) => setSearchValue(value)}
                onClear={() => setSearchValue('')}
              />
            </ToolbarItem>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarItem>
              <Button variant="primary">Add Item</Button>
            </ToolbarItem>
            <ToolbarItem variant="separator" />
            <ToolbarItem>
              <Button variant="secondary">Export</Button>
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="plain">More Actions</Button>
            </ToolbarItem>
          </ToolbarGroup>
        </ToolbarContent>
      </Toolbar>
    </div>
  );
};
