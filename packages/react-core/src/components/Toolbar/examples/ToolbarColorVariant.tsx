import React from 'react';
import { Toolbar, ToolbarItem, ToolbarContent, Button, SearchInput, Checkbox } from '@patternfly/react-core';

export const ToolbarColorVariant: React.FunctionComponent = () => {
  const [isSecondary, setisSecondary] = React.useState(true);

  return (
    <React.Fragment>
      <Toolbar id="toolbar-color-variant" colorVariant={isSecondary ? 'secondary' : 'primary'}>
        <ToolbarContent>
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
        </ToolbarContent>
      </Toolbar>
      <Checkbox
        label="Secondary"
        isChecked={isSecondary}
        onChange={(_event, checked) => setisSecondary(checked)}
        id="isSecondaryCheckbox"
      />
    </React.Fragment>
  );
};
