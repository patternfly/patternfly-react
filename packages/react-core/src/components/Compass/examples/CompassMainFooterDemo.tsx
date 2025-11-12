import {
  Compass,
  CompassHeader,
  CompassHero,
  CompassContent,
  CompassMainHeader,
  CompassMainFooter
} from '@patternfly/react-core';
import './compass.css';

export const CompassMainFooterDemo: React.FunctionComponent = () => {
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
          <div>Content title</div>
        </CompassMainHeader>
        <div>Content</div>
      </CompassContent>
      <CompassMainFooter>
        <div>Footer</div>
      </CompassMainFooter>
    </>
  );
  const sidebarEndContent = <div>Sidebar end</div>;

  return (
    <Compass
      header={headerContent}
      sidebarStart={sidebarStartContent}
      main={mainContent}
      sidebarEnd={sidebarEndContent}
      isFooterExpanded={false}
    />
  );
};
