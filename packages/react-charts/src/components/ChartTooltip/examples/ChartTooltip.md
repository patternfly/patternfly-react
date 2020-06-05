---
title: 'Tooltip chart'
section: 'charts'
typescript: true
propComponents: ['ChartTooltip']
hideDarkMode: true
---

import { Chart, ChartArea, ChartAxis, ChartBar, ChartDonut, ChartGroup, ChartLabel, ChartLine, ChartStack, ChartThemeColor, ChartTooltip, createContainer, getCustomTheme } from '@patternfly/react-charts';
import { Button, Tooltip } from '@patternfly/react-core';
import './chart-tooltip.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
```js title=Voronoi-container
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

VononoiContainer = (
  <div>
    <p>This demonstrates how to use a voronoi container to display tooltips</p>
    <div style={{ height: '200px', width: '800px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Area chart example"
        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
        legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
        legendOrientation="vertical"
        legendPosition="right"
        height={200}
        maxDomain={{y: 9}}
        padding={{
          bottom: 50,
          left: 50,
          right: 200, // Adjusted to accommodate legend
          top: 50
        }}
        width={800}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid/>
        <ChartGroup>
          <ChartArea
            data={[
              { name: 'Cats', x: '2015', y: 3 },
              { name: 'Cats', x: '2016', y: 4 },
              { name: 'Cats', x: '2017', y: 8 },
              { name: 'Cats', x: '2018', y: 6 }
            ]}
            interpolation="monotoneX"
          />
          <ChartArea
            data={[
              { name: 'Dogs', x: '2015', y: 2 },
              { name: 'Dogs', x: '2016', y: 3 },
              { name: 'Dogs', x: '2017', y: 4 },
              { name: 'Dogs', x: '2018', y: 5 },
              { name: 'Dogs', x: '2019', y: 6 }
            ]}
            interpolation="monotoneX"
          />
          <ChartArea
            data={[
              { name: 'Birds', x: '2015', y: 1 },
              { name: 'Birds', x: '2016', y: 2 },
              { name: 'Birds', x: '2017', y: 3 },
              { name: 'Birds', x: '2018', y: 2 },
              { name: 'Birds', x: '2019', y: 4 }
            ]}
            interpolation="monotoneX"
          />
        </ChartGroup>
      </Chart>
    </div>
  </div>
)
```

```js title=Combined-cursor-and-voronoi-containers
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartTooltip, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';

class CombinedCursorVoronoiContainer extends React.Component {
  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("cursor", "voronoi");

    return (
      <div>
        <p>This demonstrates how to combine cursor and voronoi containers to display tooltips along with a cursor</p>
        <div style={{ height: '275px', width: '450px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Line chart example"
            containerComponent={
              <CursorVoronoiContainer
                constrainToVisibleArea
                cursorDimension="x"
                labels={({ datum }) => `${datum.name}: ${datum.y}`}
                mouseFollowTooltips
                voronoiDimension="x"
                voronoiPadding={50}
              />
            }
            legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
            legendPosition="bottom"
            height={275}
            maxDomain={{y: 10}}
            minDomain={{y: 0}}
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 50,
              top: 50
            }}
            themeColor={ChartThemeColor.green}
            width={450}
          >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
            <ChartGroup>
              <ChartLine
                data={[
                  { name: 'Cats', x: '2015', y: 1 },
                  { name: 'Cats', x: '2016', y: 2 },
                  { name: 'Cats', x: '2017', y: 5 },
                  { name: 'Cats', x: '2018', y: 3 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Dogs', x: '2015', y: 2 },
                  { name: 'Dogs', x: '2016', y: 1 },
                  { name: 'Dogs', x: '2017', y: 7 },
                  { name: 'Dogs', x: '2018', y: 4 }
                ]}
                style={{
                  data: {
                    strokeDasharray: '3,3'
                  }
                }}
              />
              <ChartLine
                data={[
                  { name: 'Birds', x: '2015', y: 3 },
                  { name: 'Birds', x: '2016', y: 4 },
                  { name: 'Birds', x: '2017', y: 9 },
                  { name: 'Birds', x: '2018', y: 5 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Mice', x: '2015', y: 3 },
                  { name: 'Mice', x: '2016', y: 3 },
                  { name: 'Mice', x: '2017', y: 8 },
                  { name: 'Mice', x: '2018', y: 7 }
                ]}
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
```

```js title=Data-label
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';

DataLabel = (
  <div>
    <p>This demonstrates an alternate way of applying tooltips using data labels</p>
    <div style={{ height: '275px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Stack chart example"
        domainPadding={{ x: [30, 25] }}
        legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
        legendPosition="bottom-left"
        height={275}
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50, 
          top: 50
        }}
        themeColor={ChartThemeColor.multiOrdered}
        width={450}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartStack horizontal>
          <ChartBar 
            data={[
              { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' }, 
              { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' }, 
              { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' }, 
              { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }
            ]} 
            labelComponent={<ChartTooltip constrainToVisibleArea />}
          />
          <ChartBar 
            data={[
              { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' }, 
              { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' }, 
              { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' }, 
              { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }
            ]}
            labelComponent={<ChartTooltip constrainToVisibleArea />}
          />
          <ChartBar 
            data={[
              { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' }, 
              { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' }, 
              { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' }, 
              { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }
            ]}
            labelComponent={<ChartTooltip constrainToVisibleArea />}
          />
          <ChartBar 
            data={[
              { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' }, 
              { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' }, 
              { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' }, 
              { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }
            ]}
            labelComponent={<ChartTooltip constrainToVisibleArea />}
          />
        </ChartStack>
      </Chart>
    </div>
  </div>
)
```

```js title=Legend
import React from 'react';
import { ChartLabel, ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import { Tooltip } from '@patternfly/react-core';

class TooltipPieChart extends React.Component {
  constructor(props) {
    super(props);

    // Custom legend label compoenent
    this.LegendLabel = ({datum, ...rest}) => (
      <Tooltip content={datum.name} enableFlip>
        <ChartLabel {...rest} />
      </Tooltip>
    );

    // Custom legend component
    this.getLegend = (legendData) => (
      <ChartLegend
        data={legendData}
        labelComponent={<this.LegendLabel />}
      />
    );
  }

  render() {
    return (
      <div>
        <p>This demonstrates an approach for applying tooltips to a legend using a custom label component</p>
        <div style={{ height: '275px', width: '300px' }}>
          <ChartPie
            ariaDesc="Average number of pets"
            ariaTitle="Pie chart example"
            constrainToVisibleArea={true}
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            height={275}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            legendComponent={this.getLegend([
              { name: 'Cats: 35' }, 
              { name: 'Dogs: 55' }, 
              { name: 'Birds: 10' }
            ])}
            legendPosition="bottom"
            padding={{
              bottom: 65,
              left: 20,
              right: 20,
              top: 20
            }}
            themeColor={ChartThemeColor.multiOrdered}
            width={300}
          />
        </div>
      </div>
    );
  }
}
```

```js title=Left-aligned
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartThemeVariant, ChartVoronoiContainer, getCustomTheme } from '@patternfly/react-charts';

class TooltipThemeChart extends React.Component {
  constructor(props) {
    super(props);

    // Victory theme properties only
    this.themeProps = {
      voronoi: {
        style: {
          labels: {
            textAnchor: 'start' // Align tooltip labels left
          }
        }
      }
    };

    // Applies theme color and variant to base theme
    this.myCustomTheme = getCustomTheme(
      ChartThemeColor.default,
      ChartThemeVariant.default,
      this.themeProps
    );
  }

  render() {
    return (
      <div>
        <p>This demonstrates how to customize tooltip label alignment using theme properties</p>
        <div style={{ height: '250px', width: '600px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Line chart example"
            containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea voronoiDimension="x"/>}
            legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
            legendOrientation="vertical"
            legendPosition="right"
            height={250}
            maxDomain={{y: 10}}
            minDomain={{y: 0}}
            padding={{
              bottom: 50,
              left: 50,
              right: 200, // Adjusted to accommodate legend
              top: 50
            }}
            theme={this.myCustomTheme}
            width={600}
          >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
            <ChartGroup>
              <ChartLine
                data={[
                  { name: 'Cats', x: '2015', y: 1 },
                  { name: 'Cats', x: '2016', y: 2 },
                  { name: 'Cats', x: '2017', y: 5 },
                  { name: 'Cats', x: '2018', y: 3 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Dogs', x: '2015', y: 2 },
                  { name: 'Dogs', x: '2016', y: 1 },
                  { name: 'Dogs', x: '2017', y: 7 },
                  { name: 'Dogs', x: '2018', y: 4 }
                ]}
                style={{
                  data: {
                    strokeDasharray: '3,3'
                  }
                }}
              />
              <ChartLine
                data={[
                  { name: 'Birds', x: '2015', y: 3 },
                  { name: 'Birds', x: '2016', y: 4 },
                  { name: 'Birds', x: '2017', y: 9 },
                  { name: 'Birds', x: '2018', y: 5 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Mice', x: '2015', y: 3 },
                  { name: 'Mice', x: '2016', y: 3 },
                  { name: 'Mice', x: '2017', y: 8 },
                  { name: 'Mice', x: '2018', y: 7 }
                ]}
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
```

```js title=CSS-overflow
import React from 'react';
import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

CSSOverflow = (
  <div>
    <p>This demonstrates an alternate way of applying tooltips using CSS overflow instead of <code>constrainToVisibleArea</code></p>
    <div className="ws-react-charts-tooltip-overflow">
      <div style={{ height: '100px', width: '400px' }}>
        <ChartGroup
          ariaDesc="Average number of pets"
          ariaTitle="Sparkline chart example"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}
          height={100}
          maxDomain={{y: 9}}
          padding={0}
          themeColor={ChartThemeColor.green}
          width={400}
        >
          <ChartArea
            data={[
              { name: 'Cats', x: '2015', y: 3 },
              { name: 'Cats', x: '2016', y: 4 },
              { name: 'Cats', x: '2017', y: 8 },
              { name: 'Cats', x: '2018', y: 6 }
            ]}
          />
        </ChartGroup>
      </div>
      <ChartContainer>
        <ChartLabel text="CPU utilization" dy={15}/>
      </ChartContainer>
    </div>
  </div>
)
```

```js title=Wrapped-chart
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';
import { Button, Tooltip } from '@patternfly/react-core';

class TooltipChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.showTooltip = () => {
      this.setState({ isVisible: true });
    };
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <p>This demonstrates an alternate way of applying tooltips by wrapping charts with the Tooltip component</p>
        <div style={{ height: '285px', width: '230px', textAlign: 'center' }}>
          <Tooltip content={<div>My custom tooltip</div>} isVisible={isVisible} position={TooltipPosition.right} trigger="manual">
            <ChartDonutThreshold
              allowTooltip={false}
              ariaDesc="Storage capacity"
              ariaTitle="Donut utilization chart with static threshold example"
              data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
              labels={() => null}
            >
              <ChartDonutUtilization
                allowTooltip={false}
                data={{ x: 'Storage capacity', y: 45 }}
                labels={() => null}
                subTitle="of 100 GBps"
                title="45%"
              />
            </ChartDonutThreshold>
          </Tooltip>
          <Button onClick={this.showTooltip}>Show Tooltip</Button>
        </div>
      </div>
    );
  }
}
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
