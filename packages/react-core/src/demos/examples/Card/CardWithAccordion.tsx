import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Title,
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionContent,
  Divider,
  Grid,
  GridItem,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import { ChartArea, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
import sizing from '@patternfly/react-styles/css/utilities/Sizing/sizing';
import accessibility from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

export const CardWithAccordion: React.FunctionComponent = () => {
  const [openCPU, setOpenCPU] = React.useState('cpu1');

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title headingLevel="h4" size="lg">
            Hardware Monitor
          </Title>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Accordion>
          <AccordionItem isExpanded={openCPU === 'cpu1'}>
            <AccordionToggle
              id="cpu1-toggle"
              onClick={() => {
                if (openCPU === 'cpu1') {
                  setOpenCPU(null);
                } else {
                  setOpenCPU('cpu1');
                }
              }}
            >
              CPU 1
            </AccordionToggle>
            <AccordionContent>
              <Grid hasGutter>
                <Grid hasGutter>
                  <GridItem md={4}>
                    <Flex
                      className={sizing.h_100OnMd}
                      direction={{ md: 'column' }}
                      spaceItems={{ md: 'spaceItemsNone' }}
                      justifyContent={{ md: 'justifyContentCenter' }}
                    >
                      <FlexItem>
                        <b>Temperature</b>
                      </FlexItem>
                      <Divider
                        className={accessibility.hiddenOnMd}
                        orientation={{
                          default: 'vertical'
                        }}
                        inset={{ default: 'insetSm' }}
                      />
                      <FlexItem>
                        <span>64C</span>
                      </FlexItem>
                    </Flex>
                  </GridItem>
                  <GridItem md={8}>
                    <Grid hasGutter>
                      <GridItem span={2}>
                        <Flex
                          direction={{ default: 'column' }}
                          spaceItems={{ default: 'spaceItemsNone' }}
                          alignItems={{ md: 'alignItemsFlexEnd' }}
                        >
                          <FlexItem>100C</FlexItem>
                          <FlexItem>50C</FlexItem>
                          <FlexItem>0C</FlexItem>
                        </Flex>
                      </GridItem>
                      <GridItem span={10}>
                        <ChartGroup
                          ariaDesc="Mock CPU temperature"
                          ariaTitle="Mock CPU temperature sparkline chart"
                          containerComponent={
                            <ChartVoronoiContainer
                              labels={({ datum }) => `${datum.name}: ${datum.y}`}
                              constrainToVisibleArea
                            />
                          }
                          height={60}
                          maxDomain={{ y: 100 }}
                          padding={0}
                          width={400}
                        >
                          <ChartArea
                            data={[
                              { name: 'Temp', x: '1', y: 25 },
                              { name: 'Temp', x: '2', y: 40 },
                              { name: 'Temp', x: '3', y: 20 },
                              { name: 'Temp', x: '4', y: 60 },
                              { name: 'Temp', x: '5', y: 20 },
                              { name: 'Temp', x: '6', y: 41 },
                              { name: 'Temp', x: '7', y: 45 },
                              { name: 'Temp', x: '8', y: 41 },
                              { name: 'Temp', x: '9', y: 62 }
                            ]}
                          />
                        </ChartGroup>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
                <Divider className={accessibility.hiddenOnMd} />
                <Grid hasGutter>
                  <GridItem md={4}>
                    <Flex
                      className={sizing.h_100OnMd}
                      direction={{ md: 'column' }}
                      spaceItems={{ md: 'spaceItemsNone' }}
                      justifyContent={{ md: 'justifyContentCenter' }}
                    >
                      <FlexItem>
                        <b>Speed</b>
                      </FlexItem>
                      <Divider
                        className={accessibility.hiddenOnMd}
                        orientation={{
                          default: 'vertical'
                        }}
                        inset={{ default: 'insetSm' }}
                      />
                      <FlexItem>
                        <span>2.3Ghz</span>
                      </FlexItem>
                    </Flex>
                  </GridItem>
                  <GridItem md={8}>
                    <Grid hasGutter>
                      <GridItem span={2}>
                        <Flex
                          direction={{ default: 'column' }}
                          spaceItems={{ default: 'spaceItemsNone' }}
                          alignItems={{ md: 'alignItemsFlexEnd' }}
                        >
                          <FlexItem>3.6Ghz</FlexItem>
                          <FlexItem>1.5Ghz</FlexItem>
                          <FlexItem>0GHZ</FlexItem>
                        </Flex>
                      </GridItem>
                      <GridItem span={10}>
                        <ChartGroup
                          ariaDesc="Mock CPU speed"
                          ariaTitle="Mock CPU speed sparkline chart"
                          containerComponent={
                            <ChartVoronoiContainer
                              labels={({ datum }) => `${datum.name}: ${datum.y}`}
                              constrainToVisibleArea
                            />
                          }
                          height={60}
                          maxDomain={{ y: 3.6 }}
                          padding={0}
                          width={400}
                        >
                          <ChartArea
                            data={[
                              { name: 'Temp', x: '1', y: 0.9 },
                              { name: 'Temp', x: '2', y: 1.44 },
                              { name: 'Temp', x: '3', y: 0.72 },
                              { name: 'Temp', x: '4', y: 2.16 },
                              { name: 'Temp', x: '5', y: 0.72 },
                              { name: 'Temp', x: '6', y: 1.48 },
                              { name: 'Temp', x: '7', y: 1.62 },
                              { name: 'Temp', x: '8', y: 1.48 },
                              { name: 'Temp', x: '9', y: 2.23 }
                            ]}
                          />
                        </ChartGroup>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
              </Grid>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem isExpanded={openCPU === 'cpu2'}>
            <AccordionToggle
              id="cpu2-toggle"
              onClick={() => {
                if (openCPU === 'cpu2') {
                  setOpenCPU(null);
                } else {
                  setOpenCPU('cpu2');
                }
              }}
            >
              CPU 2
            </AccordionToggle>
            <AccordionContent>
              <Grid hasGutter>
                <Grid hasGutter>
                  <GridItem md={4}>
                    <Flex
                      className={sizing.h_100OnMd}
                      direction={{ md: 'column' }}
                      spaceItems={{ md: 'spaceItemsNone' }}
                      justifyContent={{ md: 'justifyContentCenter' }}
                    >
                      <FlexItem>
                        <b>Temperature</b>
                      </FlexItem>
                      <Divider
                        className={accessibility.hiddenOnMd}
                        orientation={{
                          default: 'vertical'
                        }}
                        inset={{ default: 'insetSm' }}
                      />
                      <FlexItem>
                        <span>64C</span>
                      </FlexItem>
                    </Flex>
                  </GridItem>
                  <GridItem md={8}>
                    <Grid hasGutter>
                      <GridItem span={2}>
                        <Flex
                          direction={{ default: 'column' }}
                          spaceItems={{ default: 'spaceItemsNone' }}
                          alignItems={{ md: 'alignItemsFlexEnd' }}
                        >
                          <FlexItem>100C</FlexItem>
                          <FlexItem>50C</FlexItem>
                          <FlexItem>0C</FlexItem>
                        </Flex>
                      </GridItem>
                      <GridItem span={10}>
                        <ChartGroup
                          ariaDesc="Mock CPU temperature"
                          ariaTitle="Mock CPU temperature sparkline chart"
                          containerComponent={
                            <ChartVoronoiContainer
                              labels={({ datum }) => `${datum.name}: ${datum.y}`}
                              constrainToVisibleArea
                            />
                          }
                          height={60}
                          maxDomain={{ y: 100 }}
                          padding={0}
                          width={400}
                        >
                          <ChartArea
                            data={[
                              { name: 'Temp', x: '1', y: 25 },
                              { name: 'Temp', x: '2', y: 40 },
                              { name: 'Temp', x: '3', y: 20 },
                              { name: 'Temp', x: '4', y: 60 },
                              { name: 'Temp', x: '5', y: 20 },
                              { name: 'Temp', x: '6', y: 41 },
                              { name: 'Temp', x: '7', y: 45 },
                              { name: 'Temp', x: '8', y: 41 },
                              { name: 'Temp', x: '9', y: 62 }
                            ]}
                          />
                        </ChartGroup>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
                <Divider className={accessibility.hiddenOnMd} />
                <Grid hasGutter>
                  <GridItem md={4}>
                    <Flex
                      className={sizing.h_100OnMd}
                      direction={{ md: 'column' }}
                      spaceItems={{ md: 'spaceItemsNone' }}
                      justifyContent={{ md: 'justifyContentCenter' }}
                    >
                      <FlexItem>
                        <b>Speed</b>
                      </FlexItem>
                      <Divider
                        className={accessibility.hiddenOnMd}
                        orientation={{
                          default: 'vertical'
                        }}
                        inset={{ default: 'insetSm' }}
                      />
                      <FlexItem>
                        <span>2.3Ghz</span>
                      </FlexItem>
                    </Flex>
                  </GridItem>
                  <GridItem md={8}>
                    <Grid hasGutter>
                      <GridItem span={2}>
                        <Flex
                          direction={{ default: 'column' }}
                          spaceItems={{ default: 'spaceItemsNone' }}
                          alignItems={{ md: 'alignItemsFlexEnd' }}
                        >
                          <FlexItem>3.6Ghz</FlexItem>
                          <FlexItem>1.5Ghz</FlexItem>
                          <FlexItem>0GHZ</FlexItem>
                        </Flex>
                      </GridItem>
                      <GridItem span={10}>
                        <ChartGroup
                          ariaDesc="Mock CPU speed"
                          ariaTitle="Mock CPU speed sparkline chart"
                          containerComponent={
                            <ChartVoronoiContainer
                              labels={({ datum }) => `${datum.name}: ${datum.y}`}
                              constrainToVisibleArea
                            />
                          }
                          height={60}
                          maxDomain={{ y: 3.6 }}
                          padding={0}
                          width={400}
                        >
                          <ChartArea
                            data={[
                              { name: 'Temp', x: '1', y: 0.9 },
                              { name: 'Temp', x: '2', y: 1.44 },
                              { name: 'Temp', x: '3', y: 0.72 },
                              { name: 'Temp', x: '4', y: 2.16 },
                              { name: 'Temp', x: '5', y: 0.72 },
                              { name: 'Temp', x: '6', y: 1.48 },
                              { name: 'Temp', x: '7', y: 1.62 },
                              { name: 'Temp', x: '8', y: 1.48 },
                              { name: 'Temp', x: '9', y: 2.23 }
                            ]}
                          />
                        </ChartGroup>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
              </Grid>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem isExpanded={openCPU === 'cpu3'}>
            <AccordionToggle
              id="cpu3-toggle"
              onClick={() => {
                if (openCPU === 'cpu3') {
                  setOpenCPU(null);
                } else {
                  setOpenCPU('cpu3');
                }
              }}
            >
              CPU 3
            </AccordionToggle>
            <AccordionContent>
              <Grid hasGutter>
                <Grid hasGutter>
                  <GridItem md={4}>
                    <Flex
                      className={sizing.h_100OnMd}
                      direction={{ md: 'column' }}
                      spaceItems={{ md: 'spaceItemsNone' }}
                      justifyContent={{ md: 'justifyContentCenter' }}
                    >
                      <FlexItem>
                        <b>Temperature</b>
                      </FlexItem>
                      <Divider
                        className={accessibility.hiddenOnMd}
                        orientation={{
                          default: 'vertical'
                        }}
                        inset={{ default: 'insetSm' }}
                      />
                      <FlexItem>
                        <span>64C</span>
                      </FlexItem>
                    </Flex>
                  </GridItem>
                  <GridItem md={8}>
                    <Grid hasGutter>
                      <GridItem span={2}>
                        <Flex
                          direction={{ default: 'column' }}
                          spaceItems={{ default: 'spaceItemsNone' }}
                          alignItems={{ md: 'alignItemsFlexEnd' }}
                        >
                          <FlexItem>100C</FlexItem>
                          <FlexItem>50C</FlexItem>
                          <FlexItem>0C</FlexItem>
                        </Flex>
                      </GridItem>
                      <GridItem span={10}>
                        <ChartGroup
                          ariaDesc="Mock CPU temperature"
                          ariaTitle="Mock CPU temperature sparkline chart"
                          containerComponent={
                            <ChartVoronoiContainer
                              labels={({ datum }) => `${datum.name}: ${datum.y}`}
                              constrainToVisibleArea
                            />
                          }
                          height={60}
                          maxDomain={{ y: 100 }}
                          padding={0}
                          width={400}
                        >
                          <ChartArea
                            data={[
                              { name: 'Temp', x: '1', y: 25 },
                              { name: 'Temp', x: '2', y: 40 },
                              { name: 'Temp', x: '3', y: 20 },
                              { name: 'Temp', x: '4', y: 60 },
                              { name: 'Temp', x: '5', y: 20 },
                              { name: 'Temp', x: '6', y: 41 },
                              { name: 'Temp', x: '7', y: 45 },
                              { name: 'Temp', x: '8', y: 41 },
                              { name: 'Temp', x: '9', y: 62 }
                            ]}
                          />
                        </ChartGroup>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
                <Divider className={accessibility.hiddenOnMd} />
                <Grid hasGutter>
                  <GridItem md={4}>
                    <Flex
                      className={sizing.h_100OnMd}
                      direction={{ md: 'column' }}
                      spaceItems={{ md: 'spaceItemsNone' }}
                      justifyContent={{ md: 'justifyContentCenter' }}
                    >
                      <FlexItem>
                        <b>Speed</b>
                      </FlexItem>
                      <Divider
                        className={accessibility.hiddenOnMd}
                        orientation={{
                          default: 'vertical'
                        }}
                        inset={{ default: 'insetSm' }}
                      />
                      <FlexItem>
                        <span>2.3Ghz</span>
                      </FlexItem>
                    </Flex>
                  </GridItem>
                  <GridItem md={8}>
                    <Grid hasGutter>
                      <GridItem span={2}>
                        <Flex
                          direction={{ default: 'column' }}
                          spaceItems={{ default: 'spaceItemsNone' }}
                          alignItems={{ md: 'alignItemsFlexEnd' }}
                        >
                          <FlexItem>3.6Ghz</FlexItem>
                          <FlexItem>1.5Ghz</FlexItem>
                          <FlexItem>0GHZ</FlexItem>
                        </Flex>
                      </GridItem>
                      <GridItem span={10}>
                        <ChartGroup
                          ariaDesc="Mock CPU speed"
                          ariaTitle="Mock CPU speed sparkline chart"
                          containerComponent={
                            <ChartVoronoiContainer
                              labels={({ datum }) => `${datum.name}: ${datum.y}`}
                              constrainToVisibleArea
                            />
                          }
                          height={60}
                          maxDomain={{ y: 3.6 }}
                          padding={0}
                          width={400}
                        >
                          <ChartArea
                            data={[
                              { name: 'Temp', x: '1', y: 0.9 },
                              { name: 'Temp', x: '2', y: 1.44 },
                              { name: 'Temp', x: '3', y: 0.72 },
                              { name: 'Temp', x: '4', y: 2.16 },
                              { name: 'Temp', x: '5', y: 0.72 },
                              { name: 'Temp', x: '6', y: 1.48 },
                              { name: 'Temp', x: '7', y: 1.62 },
                              { name: 'Temp', x: '8', y: 1.48 },
                              { name: 'Temp', x: '9', y: 2.23 }
                            ]}
                          />
                        </ChartGroup>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
              </Grid>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};
