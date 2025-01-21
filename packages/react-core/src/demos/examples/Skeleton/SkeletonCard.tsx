import React from 'react';
import { Gallery, Flex, PageSection, Content, Card, CardBody, Skeleton } from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/src/demos/DashboardWrapper';

export const SkeletonCard: React.FunctionComponent = () => {
  const card = (index: number) => (
    <Card key={index} isCompact>
      <CardBody>
        <Flex direction={{ default: 'column' }} spacer={{ default: 'spacerMd' }}>
          <Skeleton screenreaderText="Loading content" />
          <Skeleton width="66%" screenreaderText="Loaded 66% of content" />
          <Skeleton width="25%" screenreaderText="Loaded 25% of content" />
          <Skeleton width="50%" screenreaderText="Loaded 50% of content" />
        </Flex>
      </CardBody>
      <CardBody>
        <Skeleton shape="square" width="75%" screenreaderText="Loading medium square contents" />
      </CardBody>
      <CardBody>
        <Flex direction={{ default: 'column' }} spacer={{ default: 'spacerMd' }}>
          <Skeleton screenreaderText="Loading content" />
          <Skeleton width="25%" screenreaderText="Loaded 25% of content" />
          <Skeleton width="75%" screenreaderText="Loaded 75% of content" />
          <Skeleton width="50%" screenreaderText="Loaded 50% of content" />
        </Flex>
      </CardBody>
    </Card>
  );
  return (
    <DashboardWrapper isBreadcrumbWidthLimited>
      <PageSection isWidthLimited>
        <Content component="h1">Main title</Content>
        <Content component="p">This is a full page demo.</Content>
      </PageSection>
      <PageSection>
        <Gallery hasGutter>{Array.from({ length: 7 }).map((_value, index) => card(index))}</Gallery>
      </PageSection>
    </DashboardWrapper>
  );
};