import { Panel, PanelMain, PanelMainBody, PanelHeader, Divider, PanelFooter } from '@patternfly/react-core';

export const PanelHeaderFooter: React.FunctionComponent = () => (
  <Panel>
    <PanelHeader>Header content</PanelHeader>
    <Divider />
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
    <PanelFooter>Footer content</PanelFooter>
  </Panel>
);
