import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Title,
  Gallery,
  GalleryItem,
  Flex,
  FlexItem,
  Stack,
  Divider
} from '@patternfly/react-core';
import { ChartArea, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

export const CardUtilizationDemo2: React.FunctionComponent = () => (
  <Gallery hasGutter minWidths={{ default: '360px' }}>
    <GalleryItem>
      <Card id="utilization-card-2-card" component="div">
        <CardTitle>
          <Title headingLevel="h4" size="lg">
            Top Utilized Clusters
          </Title>
        </CardTitle>
        <CardBody>
          <Flex direction={{ default: 'column' }}>
            <FlexItem>
              <Stack>
                <a href="#">Cluster-1204</a>
                <span>27.3 cores available</span>
              </Stack>
            </FlexItem>
            <FlexItem>
              <ChartGroup
                ariaDesc="Mock average cluster utilization"
                ariaTitle="Mock cluster sparkline chart"
                containerComponent={
                  <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
                }
                height={100}
                maxDomain={{ y: 9 }}
                padding={0}
                width={400}
              >
                <ChartArea
                  data={[
                    { name: 'Cluster', x: '2015', y: 7 },
                    { name: 'Cluster', x: '2016', y: 6 },
                    { name: 'Cluster', x: '2017', y: 8 },
                    { name: 'Cluster', x: '2018', y: 3 },
                    { name: 'Cluster', x: '2019', y: 4 },
                    { name: 'Cluster', x: '2020', y: 1 },
                    { name: 'Cluster', x: '2021', y: 0 }
                  ]}
                />
              </ChartGroup>
            </FlexItem>
          </Flex>
        </CardBody>
        <CardBody>
          <Flex direction={{ default: 'column' }}>
            <FlexItem>
              <Stack>
                <a href="#">Abcdef-1204</a>
                <span>50.6 cores available</span>
              </Stack>
            </FlexItem>
            <FlexItem>
              <ChartGroup
                ariaDesc="Mock average cluster utilization"
                ariaTitle="Mock cluster sparkline chart"
                containerComponent={
                  <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
                }
                height={100}
                maxDomain={{ y: 9 }}
                padding={0}
                width={400}
              >
                <ChartArea
                  data={[
                    { name: 'Cluster', x: '2015', y: 7 },
                    { name: 'Cluster', x: '2016', y: 6 },
                    { name: 'Cluster', x: '2017', y: 8 },
                    { name: 'Cluster', x: '2018', y: 3 },
                    { name: 'Cluster', x: '2019', y: 4 },
                    { name: 'Cluster', x: '2020', y: 1 },
                    { name: 'Cluster', x: '2021', y: 0 }
                  ]}
                />
              </ChartGroup>
            </FlexItem>
          </Flex>
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="#">View all clusters</a>
        </CardFooter>
      </Card>
    </GalleryItem>
  </Gallery>
);
