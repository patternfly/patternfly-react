import { Gallery, Flex, PageSection, Content, Card, CardBody, Skeleton } from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core';

export const SkeletonCard: React.FunctionComponent = () => {
  const card = (index: number) => (
    <Card key={index} isCompact>
      <CardBody>
        <Flex direction={{ default: 'column' }} spacer={{ default: 'spacerMd' }}>
          <Skeleton screenreaderText="Loading content" />
          <Skeleton width="66%" />
          <Skeleton width="25%" />
          <Skeleton width="50%" />
        </Flex>
      </CardBody>
      <CardBody>
        <Skeleton shape="square" width="75%" screenreaderText="Loading medium square contents" />
      </CardBody>
      <CardBody>
        <Flex direction={{ default: 'column' }} spacer={{ default: 'spacerMd' }}>
          <Skeleton screenreaderText="Loading content" />
          <Skeleton width="25%" />
          <Skeleton width="75%" />
          <Skeleton width="50%" />
        </Flex>
      </CardBody>
    </Card>
  );
  return (
    <DashboardWrapper isBreadcrumbWidthLimited>
      <PageSection isWidthLimited aria-label="main-title">
        <Content component="h1" id="main-title">
          Main title
        </Content>
        <Content component="p">This is a full page demo.</Content>
      </PageSection>
      <PageSection aria-label="Card gallery">
        <Gallery hasGutter>{Array.from({ length: 7 }).map((_value, index) => card(index))}</Gallery>
      </PageSection>
    </DashboardWrapper>
  );
};
