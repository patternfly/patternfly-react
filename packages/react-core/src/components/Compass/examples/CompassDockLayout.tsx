import {
  Compass,
  CompassContent,
  CompassMainHeader,
  CompassPanel,
  CompassMainHeaderContent
} from '@patternfly/react-core';
import './compass.css';

export const CompassBasic: React.FunctionComponent = () => {
  const dockContent = <div>Content</div>;
  const mainContent = (
    <CompassContent>
      <CompassMainHeader>
        <CompassPanel>
          <CompassMainHeaderContent>
            <div>Content title</div>
          </CompassMainHeaderContent>
        </CompassPanel>
      </CompassMainHeader>
      <div>Content</div>
    </CompassContent>
  );
  return <Compass dock={dockContent} main={mainContent} />;
};
