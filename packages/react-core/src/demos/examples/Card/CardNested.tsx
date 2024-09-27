import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardExpandableContent,
  Checkbox,
  Title,
  Divider,
  Grid,
  GridItem,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import { ChartArea, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
import sizing from '@patternfly/react-styles/css/utilities/Sizing/sizing';
import accessibility from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

export const CardNested: React.FunctionComponent = () => {
  const [isCardExpanded1, onCardExpand1] = React.useState(true);
  const [isCardExpanded2, onCardExpand2] = React.useState(false);
  const [isCardExpanded3, onCardExpand3] = React.useState(false);
  const [isToggleOnRight, onCheckClick] = React.useState(false);

  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <Checkbox
          id="isToggleRightAligned"
          key="isToggleRightAligned"
          label="Align expand toggle on right"
          isChecked={isToggleOnRight}
          onChange={(_event) => onCheckClick(!isToggleOnRight)}
        />
      </div>
      <Card id="nested-cards-card">
        <CardHeader>
          <CardTitle id="nested-cards-toggle-title">
            <Title headingLevel="h4" size="lg">
              {' '}
              Hardware Monitor{' '}
            </Title>
          </CardTitle>
        </CardHeader>
        <Card id="nested-cards-toggle-group-1" isPlain isExpanded={isCardExpanded1}>
          <CardHeader
            onExpand={() => onCardExpand1(!isCardExpanded1)}
            isToggleRightAligned={isToggleOnRight}
            toggleButtonProps={{
              id: 'toggle-button-1',
              'aria-label': 'Details',
              'aria-labelledby': 'nested-cards-toggle-group-1-title toggle-button-1',
              'aria-expanded': isCardExpanded1
            }}
          >
            <CardTitle id="nested-cards-toggle-group-1-title">
              <span className="pf-v6-u-font-weight-light">CPU 1</span>
            </CardTitle>
          </CardHeader>
          <CardExpandableContent>
            <CardBody>
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
            </CardBody>
          </CardExpandableContent>
        </Card>
        <Card id="nested-cards-toggle-group-2" isPlain isExpanded={isCardExpanded3}>
          <CardHeader
            onExpand={() => onCardExpand3(!isCardExpanded3)}
            isToggleRightAligned={isToggleOnRight}
            toggleButtonProps={{
              id: 'toggle-button-2',
              'aria-label': 'Details',
              'aria-labelledby': 'nested-cards-toggle-group-2-title toggle-button-2',
              'aria-expanded': isCardExpanded3
            }}
          >
            <CardTitle id="nested-cards-toggle-group-2-title">
              <span className="pf-v6-u-font-weight-light">CPU 2</span>
            </CardTitle>
          </CardHeader>
          <CardExpandableContent>
            <CardBody>
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
            </CardBody>
          </CardExpandableContent>
        </Card>
        <Card id="nested-cards-toggle-group-3" isPlain isExpanded={isCardExpanded2}>
          <CardHeader
            onExpand={() => onCardExpand2(!isCardExpanded2)}
            isToggleRightAligned={isToggleOnRight}
            toggleButtonProps={{
              id: 'toggle-button-3',
              'aria-label': 'Details',
              'aria-labelledby': 'nested-cards-toggle-group-3-title toggle-button-3',
              'aria-expanded': isCardExpanded2
            }}
          >
            <CardTitle id="nested-cards-toggle-group-3-title">
              <span className="pf-v6-u-font-weight-light">CPU 3</span>
            </CardTitle>
          </CardHeader>
          <CardExpandableContent>
            <CardBody>
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
            </CardBody>
          </CardExpandableContent>
        </Card>
      </Card>
    </>
  );
};
