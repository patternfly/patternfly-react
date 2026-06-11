import {
  Compass,
  CompassContent,
  CompassMainHeader,
  Panel,
  PanelMain,
  PanelMainBody,
  CompassMainHeaderContent
} from '@patternfly/react-core';
import './compass.css';

export const CompassBasic: React.FunctionComponent = () => {
  const dockContent = <div>Content</div>;
  const mainContent = (
    <CompassContent>
      <CompassMainHeader>
        <Panel>
          <PanelMain>
            <PanelMainBody>
              <CompassMainHeaderContent>
                <div>Content title</div>
              </CompassMainHeaderContent>
            </PanelMainBody>
          </PanelMain>
        </Panel>
      </CompassMainHeader>
      <div>Content</div>
    </CompassContent>
  );
  return <Compass dock={dockContent} main={mainContent} />;
};
