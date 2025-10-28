import { Compass, CompassHeader, CompassHero, CompassContent, CompassMainHeader } from '@patternfly/react-core';

export const CompassBasic: React.FunctionComponent = () => {
  const headerContent = <CompassHeader logo={<div>Logo</div>} nav={<div>Nav</div>} profile={<div>Profile</div>} />;
  const sidebarStartContent = <div>Sidebar start</div>;
  // TODO: simplify mainContent to only a div string
  const mainContent = (
    <>
      <CompassHero gradientDark={{ stop1: '#000', stop2: '#1b0d33', stop3: '#3d2785' }}>
        <div>Hero</div>
      </CompassHero>
      <CompassContent>
        <CompassMainHeader>
          <div>Content title</div>
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
      backgroundSrcDark="https://i.imgur.com/km6oyPo.jpeg"
    />
  );
};
