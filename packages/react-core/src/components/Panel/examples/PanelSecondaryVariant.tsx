import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

export const PanelSecondaryVariant: React.FunctionComponent = () => (
  <Panel variant="secondary">
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
