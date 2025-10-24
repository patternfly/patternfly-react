import { Panel, PanelMain, PanelMainBody, PanelHeader, Divider, PanelFooter } from '@patternfly/react-core';

export const PanelScrollableHeaderFooter: React.FunctionComponent = () => (
  <Panel isScrollable>
    <PanelHeader>Header content</PanelHeader>
    <Divider />
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
    <PanelFooter>Footer content</PanelFooter>
  </Panel>
);
