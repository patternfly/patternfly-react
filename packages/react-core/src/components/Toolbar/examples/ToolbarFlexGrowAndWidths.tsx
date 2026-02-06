import { Fragment } from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';
import SearchInput from '@patternfly/react-core/dist/esm/components/SearchInput/SearchInput';

export const ToolbarFlexGrowAndWidths: React.FunctionComponent = () => {
  const flexGrowItems = (
    <Fragment>
      <ToolbarItem>
        <Button variant="secondary">Item 1</Button>
      </ToolbarItem>
      <ToolbarItem flexGrow={{ default: 'flexGrow' }}>
        <SearchInput aria-label="Flex grow search input" />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Item 2</Button>
      </ToolbarItem>
    </Fragment>
  );

  const flexGrowGroupItems = (
    <Fragment>
      <ToolbarGroup>
        <ToolbarItem>
          <Button variant="secondary">Item 1</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Item 2</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup flexGrow={{ default: 'flexGrow' }}>
        <ToolbarItem>
          <Button variant="secondary">Flex grow group item 1</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Flex grow group item 2</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarItem>
          <Button variant="secondary">Item 3</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  const widthItems = (
    <Fragment>
      <ToolbarItem widths={{ default: '200px' }}>
        <SearchInput aria-label="Search input with fixed width" />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Regular item</Button>
      </ToolbarItem>
      <ToolbarItem widths={{ default: '300px' }}>
        <SearchInput aria-label="Search input with wider fixed width" />
      </ToolbarItem>
    </Fragment>
  );

  const responsiveWidthItems = (
    <Fragment>
      <ToolbarItem widths={{ default: '100px', md: '200px', xl: '300px' }}>
        <SearchInput aria-label="Search input with responsive width" />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Regular item</Button>
      </ToolbarItem>
    </Fragment>
  );

  return (
    <>
      Using flexGrow on ToolbarItem
      <br />
      <br />
      <Toolbar id="toolbar-flex-grow-item">
        <ToolbarContent>{flexGrowItems}</ToolbarContent>
      </Toolbar>
      <br />
      <br />
      Using flexGrow on ToolbarGroup
      <br />
      <br />
      <Toolbar id="toolbar-flex-grow-group">
        <ToolbarContent>{flexGrowGroupItems}</ToolbarContent>
      </Toolbar>
      <br />
      <br />
      Using widths on ToolbarItem
      <br />
      <br />
      <Toolbar id="toolbar-widths">
        <ToolbarContent>{widthItems}</ToolbarContent>
      </Toolbar>
      <br />
      <br />
      Using responsive widths on ToolbarItem
      <br />
      <br />
      <Toolbar id="toolbar-responsive-widths">
        <ToolbarContent>{responsiveWidthItems}</ToolbarContent>
      </Toolbar>
    </>
  );
};
