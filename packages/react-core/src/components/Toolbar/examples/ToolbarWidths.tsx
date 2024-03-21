import { FunctionComponent, Fragment } from 'react';
import { Toolbar, ToolbarItem, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarWidths: FunctionComponent = () => {
  const widths = {
    default: '100px',
    sm: '80px',
    md: '150px',
    lg: '200px',
    xl: '250px',
    '2xl': '300px'
  };

  const items = (
    <Fragment>
      <ToolbarItem widths={widths}>
        <Button variant="secondary" style={{ width: '100%' }}>
          Action
        </Button>
      </ToolbarItem>
    </Fragment>
  );

  return (
    <Toolbar id="toolbar-widths">
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};
