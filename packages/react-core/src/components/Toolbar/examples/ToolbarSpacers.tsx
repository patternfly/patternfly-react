import React from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarSpacers: React.FunctionComponent = () => {
  const groupGapItems = (
    <React.Fragment>
      <ToolbarGroup variant="action-group">
        <ToolbarItem>
          <Button variant="secondary">Default Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Default Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup variant="action-group" gap={{ default: 'gapNone' }}>
        <ToolbarItem>
          <Button variant="secondary">No Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup variant="action-group" gap={{ default: 'gapSm' }}>
        <ToolbarItem>
          <Button variant="secondary">Small Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup variant="action-group" gap={{ default: 'gapXl' }}>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  const groupColumnGapItems = (
    <React.Fragment>
      <ToolbarGroup variant="action-group" columnGap={{ default: 'columnGapNone' }}>
        <ToolbarItem>
          <Button variant="secondary">No Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">No Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup variant="action-group" columnGap={{ default: 'columnGapSm' }}>
        <ToolbarItem>
          <Button variant="secondary">Small Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Small Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup variant="action-group" columnGap={{ default: 'columnGapXl' }}>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Extra Large Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  const groupRowGapItems = (
    <React.Fragment>
      <ToolbarGroup className="pf-m-wrap" variant="action-group" rowGap={{ default: 'rowGapNone' }}>
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
      <ToolbarGroup className="pf-m-wrap" variant="action-group" rowGap={{ default: 'rowGapSm' }}>
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
      <ToolbarGroup className="pf-m-wrap" variant="action-group" rowGap={{ default: 'rowGapXl' }}>
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
    </React.Fragment>
  );

  const itemGapItems = (
    <React.Fragment>
      <ToolbarGroup className="pf-m-wrap" variant="action-group">
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
    </React.Fragment>
  );

  const itemColumnGapItems = (
    <React.Fragment>
      <ToolbarGroup className="pf-m-wrap" variant="action-group">
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
    </React.Fragment>
  );

  const itemRowGapItems = (
    <React.Fragment>
      <ToolbarGroup variant="action-group">
        <ToolbarItem className="pf-m-wrap" rowGap={{ default: 'rowGapNone' }}>
          <Button variant="secondary">No Row Gap</Button>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem className="pf-m-wrap" rowGap={{ default: 'rowGapSm' }}>
          <Button variant="secondary">Small Row Gap</Button>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem className="pf-m-wrap" rowGap={{ default: 'rowGapXl' }}>
          <Button variant="secondary">Extra Large Row Gap</Button>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  return (
    <>
      <h4>Toolbar group spacing</h4>
      <br />
      Using gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{groupGapItems}</ToolbarContent>
      </Toolbar>
      <br />
      Using column gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{groupColumnGapItems}</ToolbarContent>
      </Toolbar>
      <br />
      Using row gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{groupRowGapItems}</ToolbarContent>
      </Toolbar>
      <br />
      <h4>Toolbar item spacing</h4>
      <br />
      Using gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemGapItems}</ToolbarContent>
      </Toolbar>
      <br />
      Using column gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemColumnGapItems}</ToolbarContent>
      </Toolbar>
      <br />
      Using row gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemRowGapItems}</ToolbarContent>
      </Toolbar>
    </>
  );
};
