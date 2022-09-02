import React from 'react';
import { Card, CardBody, Gallery, GalleryItem, PageSection } from '@patternfly/react-core';
import DashboardWrapper from '../DashboardWrapper';

export const MastheadBasic: React.FunctionComponent = () => {
  const pageId = 'main-content-page-masthead-demo';

  return (
    <DashboardWrapper mainContainerId={pageId} hasPageTemplateTitle>
      <PageSection isWidthLimited>
        <Gallery hasGutter>
          {Array.apply(0, Array(10)).map((_x: any, i: number) => (
            <GalleryItem key={i}>
              <Card>
                <CardBody>This is a card</CardBody>
              </Card>
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>
    </DashboardWrapper>
  );
};
