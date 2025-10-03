import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

export const PanelBasic: React.FunctionComponent = () => (
  <Panel>
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
