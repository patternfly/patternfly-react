import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Title,
  Gallery,
  GalleryItem,
  Flex,
  FlexItem,
  Select,
  SelectList,
  SelectOption,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import { ChartArea, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

export const CardTrendDemo1: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const selectItems = (
    <SelectList>
      <SelectOption key="option1" value="Last hour">
        Last hour
      </SelectOption>
      <SelectOption key="option2" value="Last 6 hours">
        Last 6 hours
      </SelectOption>
      <SelectOption key="option3" value="Last 24 hours">
        Last 24 hours
      </SelectOption>
      <SelectOption key="option4" value="Last 7 days">
        Last 7 days
      </SelectOption>
    </SelectList>
  );

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle ref={toggleRef} onClick={() => setIsOpen(!isOpen)} isExpanded={isOpen} variant="plainText">
      Filter
    </MenuToggle>
  );

  const headerActions = (
    <Select onSelect={() => setIsOpen(!isOpen)} onOpenChange={setIsOpen} isOpen={isOpen} toggle={toggle}>
      {selectItems}
    </Select>
  );

  return (
    <React.Fragment>
      <b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to{' '}
      <code>baseline</code> alignment.
      <br />
      <br />
      <Gallery hasGutter minWidths={{ default: '360px' }}>
        <GalleryItem>
          <Card id="trend-card-1-card" component="div">
            <CardHeader actions={{ actions: headerActions, hasNoOffset: true }}>
              <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
                <FlexItem>
                  <CardTitle>
                    <Title headingLevel="h4" size="lg">
                      1,050,765 IOPS
                    </Title>
                  </CardTitle>
                </FlexItem>
                <FlexItem>
                  <span>Workload</span>
                </FlexItem>
              </Flex>
            </CardHeader>
            <CardBody>
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
            </CardBody>
          </Card>
        </GalleryItem>
      </Gallery>
    </React.Fragment>
  );
};
