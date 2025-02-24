import { Fragment } from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarItemSpacers: React.FunctionComponent = () => {
  const itemGapItems = (
    <Fragment>
      <ToolbarGroup rowWrap={{ default: 'wrap' }}>
        <ToolbarItem gap={{ default: 'gapNone' }}>
          <Button variant="secondary">No Gap</Button>
          <Button variant="secondary">No Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem gap={{ default: 'gapSm' }}>
          <Button variant="secondary">Small Gap</Button>
          <Button variant="secondary">Small Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem gap={{ default: 'gapXl' }}>
          <Button variant="secondary">Extra Large Gap</Button>
          <Button variant="secondary">Extra Large Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  const itemColumnGapItems = (
    <Fragment>
      <ToolbarGroup rowWrap={{ default: 'wrap' }}>
        <ToolbarItem columnGap={{ default: 'columnGapNone' }}>
          <Button variant="secondary">No Column Gap</Button>
          <Button variant="secondary">No Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem columnGap={{ default: 'columnGapSm' }}>
          <Button variant="secondary">Small Column Gap</Button>
          <Button variant="secondary">Small Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem columnGap={{ default: 'columnGapXl' }}>
          <Button variant="secondary">Extra Large Column Gap</Button>
          <Button variant="secondary">Extra Large Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  const itemRowGapItems = (
    <Fragment>
      <ToolbarGroup>
        <ToolbarItem rowGap={{ default: 'rowGapNone' }} rowWrap={{ default: 'wrap' }}>
          <Button variant="secondary">No Row Gap</Button>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem rowGap={{ default: 'rowGapSm' }} rowWrap={{ default: 'wrap' }}>
          <Button variant="secondary">Small Row Gap</Button>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem rowGap={{ default: 'rowGapXl' }} rowWrap={{ default: 'wrap' }}>
          <Button variant="secondary">Extra Large Row Gap</Button>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  return (
    <>
      Using gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemGapItems}</ToolbarContent>
      </Toolbar>
      Using column gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemColumnGapItems}</ToolbarContent>
      </Toolbar>
      Using row gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemRowGapItems}</ToolbarContent>
      </Toolbar>
    </>
  );
};
