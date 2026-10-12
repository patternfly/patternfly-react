import { Panel, PanelMain, PanelMainBody, PanelFooter } from '@rh-felt/react-core';

export const PanelFooterExample: React.FunctionComponent = () => (
  <Panel>
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
    <PanelFooter>Footer content</PanelFooter>
  </Panel>
);
