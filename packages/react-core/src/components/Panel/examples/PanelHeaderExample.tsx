import { Panel, PanelMain, PanelMainBody, PanelHeader, Divider } from '@rh-felt/react-core';

export const PanelHeaderExample: React.FunctionComponent = () => (
  <Panel>
    <PanelHeader>Header content</PanelHeader>
    <Divider />
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
