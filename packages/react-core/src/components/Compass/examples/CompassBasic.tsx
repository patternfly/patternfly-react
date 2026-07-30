import {
  Compass,
  CompassHeader,
  CompassHero,
  CompassContent,
  CompassMainHeader,
  Panel,
  PanelMain,
  PanelMainBody,
  CompassMainHeaderContent
} from '@patternfly/react-core';
import './compass.css';

export const CompassBasic: React.FunctionComponent = () => {
  const headerContent = <CompassHeader logo={<div>Logo</div>} nav={<div>Nav</div>} profile={<div>Profile</div>} />;
  const sidebarStartContent = <div>Sidebar start</div>;
  // TODO: simplify mainContent to only a div string
  const mainContent = (
    <>
      <CompassHero>
        <div>Hero</div>
      </CompassHero>
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
    </>
  );
  const sidebarEndContent = <div>Sidebar end</div>;
  const footerContent = <div>Footer</div>;

  return (
    <Compass
      header={headerContent}
      sidebarStart={sidebarStartContent}
      main={mainContent}
      sidebarEnd={sidebarEndContent}
      footer={footerContent}
      style={{ height: '600px' }}
    />
  );
};
