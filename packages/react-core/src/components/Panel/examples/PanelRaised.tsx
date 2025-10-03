import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

export const PanelRaised: React.FunctionComponent = () => (
  <Panel variant="raised">
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
