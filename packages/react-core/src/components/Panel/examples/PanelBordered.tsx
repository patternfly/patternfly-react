import { Panel, PanelMain, PanelMainBody } from '@rh-felt/react-core';

export const PanelBordered: React.FunctionComponent = () => (
  <Panel variant="bordered">
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
