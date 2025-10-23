import {
  Compass,
  CompassHeader,
  CompassHero,
  CompassContent,
  CompassMainHeader,
  CompassSection
} from '@patternfly/react-core';

export const CompassBasic: React.FunctionComponent = () => {
  const headerContent = <CompassHeader logo={<div>Logo</div>} nav={<div>Nav</div>} profile={<div>Profile</div>} />;
  const panelStartContent = <div>Panel start</div>;
  const mainContent = (
    <>
      <CompassHero>
        <div>Hero</div>
      </CompassHero>
      <CompassContent>
        <CompassMainHeader title="Content title" />
        <CompassSection>Content</CompassSection>
      </CompassContent>
    </>
  );
  const panelEndContent = <div>Panel end</div>;
  const footerContent = <div>Footer</div>;

  return (
    <Compass
      header={headerContent}
      panelStart={panelStartContent}
      main={mainContent}
      panelEnd={panelEndContent}
      footer={footerContent}
    />
  );
};
