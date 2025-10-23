import {
  Compass,
  CompassHeader,
  CompassHero,
  CompassContent,
  CompassMainHeader,
  CompassSection
} from '@patternfly/react-core';

export const CompassBasic: React.FunctionComponent = () => {
  const headerContent = (
    <CompassHeader logo={<div>Logo</div>} nav={<CompassSection>Nav</CompassSection>} profile={<div>Profile</div>} />
  );
  const panelStartContent = <CompassSection>Panel start</CompassSection>;
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
  const panelEndContent = <CompassSection>Panel end</CompassSection>;
  const footerContent = <CompassSection>Footer</CompassSection>;

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
