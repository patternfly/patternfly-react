import React from 'react';
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  Title,
  Gallery,
  GalleryItem,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import { ChartArea, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

export const CardTrendDemo2: React.FunctionComponent = () => (
  <Gallery hasGutter minWidths={{ default: '360px' }}>
    <GalleryItem>
      <Card id="trend-card-2-card" component="div">
        <CardHeader>
          <Flex alignItems={{ default: 'alignItemsCenter' }}>
            <FlexItem flex={{ default: 'flexNone' }}>
              <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
                <FlexItem>
                  <CardTitle>
                    <Title headingLevel="h4" size="2xl">
                      842 TB
                    </Title>
                  </CardTitle>
                </FlexItem>
                <FlexItem>
                  <span>Storage capacity</span>
                </FlexItem>
              </Flex>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
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
        </CardHeader>
        <CardFooter>
          <Flex>
            <FlexItem>
              <a href="#">Action 1</a>
            </FlexItem>
            <FlexItem>
              <a href="#">Action 2</a>
            </FlexItem>
          </Flex>
        </CardFooter>
      </Card>
    </GalleryItem>
  </Gallery>
);
