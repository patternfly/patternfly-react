import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

export const PanelPill: React.FunctionComponent = () => (
  <Panel isPill>
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
