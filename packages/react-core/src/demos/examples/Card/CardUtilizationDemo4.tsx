import React from 'react';
import { Card, CardTitle, CardBody, CardFooter, Title, Gallery, GalleryItem } from '@patternfly/react-core';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

export const CardUtilizationDemo4: React.FunctionComponent = () => (
  <Gallery hasGutter minWidths={{ default: '360px' }}>
    <GalleryItem>
      <Card id="utilization-card-4-card" component="div">
        <CardTitle>
          <Title headingLevel="h4" size="lg">
            CPU Usage
          </Title>
        </CardTitle>
        <CardBody>
          <ChartDonutThreshold
            ariaDesc="Mock storage capacity"
            ariaTitle="Mock donut utilization chart"
            constrainToVisibleArea={true}
            data={[
              { x: 'Warning at 60%', y: 60 },
              { x: 'Danger at 90%', y: 90 }
            ]}
            height={200}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            padding={{
              bottom: 0,
              left: 10,
              right: 150,
              top: 0
            }}
            width={350}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 80 }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
              legendOrientation="vertical"
              title="80%"
              subTitle="of 100 GBps"
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>{' '}
        </CardBody>
        <CardFooter>
          <a href="#">See details</a>
        </CardFooter>
      </Card>
    </GalleryItem>
  </Gallery>
);
