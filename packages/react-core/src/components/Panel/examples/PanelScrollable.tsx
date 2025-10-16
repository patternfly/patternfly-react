import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

export const PanelScrollable: React.FunctionComponent = () => (
  <Panel isScrollable>
    <PanelMain tabIndex={0}>
      <PanelMainBody>
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
      </PanelMainBody>
    </PanelMain>
  </Panel>
);
