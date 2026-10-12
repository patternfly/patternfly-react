import { Panel, PanelMain, PanelMainBody } from '@rh-felt/react-core';

export const PanelScrollableWithAutoHeight: React.FunctionComponent = () => (
  <div style={{ height: '200px' }}>
    <Panel isScrollable isAutoHeight>
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
  </div>
);
