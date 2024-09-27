/* eslint-disable camelcase */
import React from 'react';
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  Title,
  Gallery,
  GalleryItem,
  Flex,
  FlexItem,
  Select,
  SelectList,
  SelectOption,
  MenuToggle,
  MenuToggleElement,
  Icon
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { Chart, ChartStack, ChartBar, ChartTooltip } from '@patternfly/react-charts/victory';
import chart_color_yellow_100 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_100';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import chart_color_red_orange_400 from '@patternfly/react-tokens/dist/esm/chart_color_red_orange_400';
import flex from '@patternfly/react-styles/css/utilities/Flex/flex';

export const CardUtilizationDemo3: React.FunctionComponent = () => {
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
          <Card id="utilization-card-3-card" component="div">
            <CardHeader className={flex.alignItemsFlexStart} actions={{ actions: headerActions, hasNoOffset: true }}>
              <CardTitle>
                <Title headingLevel="h4" size="lg" style={{ paddingTop: '3px' }}>
                  Recommendations
                </Title>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Flex direction={{ default: 'column' }}>
                <FlexItem>
                  <span>System</span>
                </FlexItem>
                <Flex>
                  <Icon status="danger">
                    <ExclamationCircleIcon aria-hidden />
                  </Icon>
                  <a href="#">25 incidents detected</a>
                </Flex>
                <FlexItem>
                  <Chart
                    ariaDesc="Mock incidents chart"
                    ariaTitle="Mock stack chart"
                    domainPadding={{ x: [30, 25] }}
                    legendData={[
                      { name: 'Low', symbol: { fill: chart_color_yellow_100.value } },
                      { name: 'Important', symbol: { fill: chart_color_yellow_300.value } },
                      { name: 'Moderate', symbol: { fill: chart_color_orange_300.value } },
                      { name: 'Critical', symbol: { fill: chart_color_red_orange_400.value } }
                    ]}
                    legendPosition="bottom-left"
                    height={50}
                    padding={{
                      bottom: 40,
                      left: 0,
                      right: 0,
                      top: 0
                    }}
                    width={350}
                    showAxis={false}
                  >
                    <ChartStack
                      horizontal
                      colorScale={[
                        chart_color_yellow_100.value,
                        chart_color_yellow_300.value,
                        chart_color_orange_300.value,
                        chart_color_red_orange_400.value
                      ]}
                    >
                      <ChartBar
                        data={[
                          {
                            name: 'Low',
                            x: 'Cluster A',
                            y: 6,
                            label: 'Low: 6'
                          }
                        ]}
                        labelComponent={<ChartTooltip constrainToVisibleArea />}
                      />
                      <ChartBar
                        data={[
                          {
                            name: 'Important',
                            x: 'Cluster A',
                            y: 2,
                            label: 'Important: 2'
                          }
                        ]}
                        labelComponent={<ChartTooltip constrainToVisibleArea />}
                      />
                      <ChartBar
                        data={[
                          {
                            name: 'Moderate',
                            x: 'Cluster A',
                            y: 4,
                            label: 'Moderate: 4'
                          }
                        ]}
                        labelComponent={<ChartTooltip constrainToVisibleArea />}
                      />
                      <ChartBar
                        data={[
                          {
                            name: 'Critical',
                            x: 'Cluster A',
                            y: 2,
                            label: 'Critical: 2'
                          }
                        ]}
                        labelComponent={<ChartTooltip constrainToVisibleArea />}
                      />
                    </ChartStack>
                  </Chart>
                </FlexItem>
              </Flex>
            </CardBody>
            <CardFooter>
              <a href="#">See details</a>
            </CardFooter>
          </Card>
        </GalleryItem>
      </Gallery>
    </React.Fragment>
  );
};
