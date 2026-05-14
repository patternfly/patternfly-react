import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';

export const ToolbarVertical: React.FunctionComponent = () => (
  <Toolbar id="toolbar-vertical" isVertical>
    <ToolbarContent>
      <ToolbarGroup variant="action-group-plain">
        <ToolbarItem>Item 1</ToolbarItem>
        <ToolbarItem>Item 2</ToolbarItem>
        <ToolbarItem>Item 3</ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup variant="action-group-plain" visibilityAtHeight={{ default: 'hidden', md: 'visible' }}>
        <ToolbarItem>Item 4 (visible above md breakpoint)</ToolbarItem>
        <ToolbarItem visibilityAtHeight={{ default: 'hidden', lg: 'visible' }}>
          Item 5 (visible above lg breakpoint)
        </ToolbarItem>
        <ToolbarItem visibilityAtHeight={{ default: 'hidden', lg: 'visible' }}>
          Item 6 (visible above lg breakpoint)
        </ToolbarItem>
      </ToolbarGroup>
    </ToolbarContent>
  </Toolbar>
);
