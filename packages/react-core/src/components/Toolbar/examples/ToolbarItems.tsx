import { Fragment, useState } from 'react';
import { Toolbar, ToolbarItem, ToolbarContent } from '@patternfly/react-core';
import { Button, SearchInput } from '@patternfly/react-core';

export const ToolbarItems = () => {
  const [searchValue, setSearchValue] = useState('');

  const items = (
    <Fragment>
      <ToolbarItem>
        <SearchInput
          aria-label="Items example search input"
          value={searchValue}
          onChange={(_event, value) => setSearchValue(value)}
          onClear={() => setSearchValue('')}
        />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem variant="separator" />
      <ToolbarItem>
        <Button variant="primary">Action2</Button>
      </ToolbarItem>
    </Fragment>
  );

  return (
    <Toolbar id="toolbar-items-example">
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};
