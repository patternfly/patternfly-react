import { Fragment } from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarGroupSpacers: React.FunctionComponent = () => {
  const groupGapItems = (
    <Fragment>
      <ToolbarGroup>
        <ToolbarItem>
          <Button variant="secondary">Default Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Default Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup gap={{ default: 'gapNone' }}>
        <ToolbarItem>
          <Button variant="secondary">No Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup gap={{ default: 'gapSm' }}>
        <ToolbarItem>
          <Button variant="secondary">Small Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup gap={{ default: 'gapXl' }}>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  const groupColumnGapItems = (
    <Fragment>
      <ToolbarGroup columnGap={{ default: 'columnGapNone' }}>
        <ToolbarItem>
          <Button variant="secondary">No Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup columnGap={{ default: 'columnGapSm' }}>
        <ToolbarItem>
          <Button variant="secondary">Small Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup columnGap={{ default: 'columnGapXl' }}>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  const groupRowGapItems = (
    <Fragment>
      <ToolbarGroup rowGap={{ default: 'rowGapNone' }} rowWrap={{ default: 'wrap' }}>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup rowGap={{ default: 'rowGapSm' }} rowWrap={{ default: 'wrap' }}>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup rowGap={{ default: 'rowGapXl' }} rowWrap={{ default: 'wrap' }}>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
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
        <ToolbarContent>{groupGapItems}</ToolbarContent>
      </Toolbar>
      Using column gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{groupColumnGapItems}</ToolbarContent>
      </Toolbar>
      Using row gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{groupRowGapItems}</ToolbarContent>
      </Toolbar>
      <br />
    </>
  );
};
