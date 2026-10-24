import { Button, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';

export const ToolbarContainerQuery: React.FunctionComponent = () => (
  <div className="toolbar-container-query-resize">
    <Toolbar id="toolbar-container-query-example" isContainer>
      <ToolbarContent>
        <ToolbarItem visibility={{ md: 'hidden' }}>
          <Button variant="secondary">Hide on md</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Item</Button>
        </ToolbarItem>
        <ToolbarItem visibility={{ default: 'hidden', sm: 'visible' }}>
          <Button variant="secondary">Show on sm</Button>
        </ToolbarItem>
        <ToolbarGroup visibility={{ xl: 'hidden' }}>
          <ToolbarItem>
            <Button variant="secondary">Hide group on xl</Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="secondary">Hide group on xl</Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup visibility={{ default: 'hidden', lg: 'visible' }}>
          <ToolbarItem>
            <Button variant="secondary">Show group on lg</Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="secondary">Show group on lg</Button>
          </ToolbarItem>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  </div>
);
