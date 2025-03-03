import { Fragment } from 'react';
import { Toolbar, ToolbarItem, ToolbarContent } from '@patternfly/react-core';
import { Button, SearchInput } from '@patternfly/react-core';

export const ToolbarItems: React.FunctionComponent = () => {
  const items = (
    <Fragment>
      <ToolbarItem>
        <SearchInput aria-label="Items example search input" />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem variant="separator" />
      <ToolbarItem>
        <Button variant="primary">Action</Button>
      </ToolbarItem>
    </Fragment>
  );

  return (
    <Toolbar id="toolbar-items-example">
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};
