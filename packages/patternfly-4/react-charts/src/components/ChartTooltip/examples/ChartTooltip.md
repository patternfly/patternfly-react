---
title: 'Tooltip'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartArea', 'ChartAxis', 'ChartBar', 'ChartDonut', 'ChartGroup', 'ChartLine', 'ChartLegend', 'ChartStack', 'ChartTooltip']
---

import { Chart, ChartArea, ChartAxis, ChartBar, ChartDonut, ChartGroup, ChartLabel, ChartLine, ChartStack, ChartThemeColor, ChartTooltip, getCustomTheme } from '@patternfly/react-charts';
import { Button, Tooltip } from '@patternfly/react-core';
import './chart-tooltip.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Voronoi container tooltips
This demonstrates how to use a voronoi container to display tooltips
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

<div>
  <div className="area-chart-legend-right">
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
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 3 },
            { name: 'Dogs', x: '2017', y: 4 },
            { name: 'Dogs', x: '2018', y: 5 },
            { name: 'Dogs', x: '2019', y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Birds', x: '2015', y: 1 },
            { name: 'Birds', x: '2016', y: 2 },
            { name: 'Birds', x: '2017', y: 3 },
            { name: 'Birds', x: '2018', y: 2 },
            { name: 'Birds', x: '2019', y: 4 }
          ]}
          interpolation="basis"
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Data label tooltips
This demonstrates an alternate way of applying tooltips using data labels
```js
import React from 'react';
import { Chart, ChartAxis, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="tooltip-bar-chart-legend-bottom">
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
```

## Legend tooltips
This demonstrates an approach for applying tooltips to a legend using a custom label component
```js
import React from 'react';
import { ChartLabel, ChartPie, ChartThemeColor } from '@patternfly/react-charts';
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
        <div className="pie-chart-legend-bottom">
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

## Left aligned tooltips
This demonstrates how to customize tooltip label alignment using theme properties
```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartThemeVariant, getCustomTheme } from '@patternfly/react-charts';

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
        <div className="tooltip-line-chart-legend-right">
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

## CSS overflow tooltips
This demonstrates an alternate way of applying tooltips using CSS overflow instead of `constrainToVisibleArea`
```js
import React from 'react';
import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="tooltip-sparkline-container tooltip-sparkline-overflow">
    <div className="tooltip-sparkline-chart">
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
```

## Wrapped chart tooltip
This demonstrates an alternate way of applying tooltips by wrapping charts with the Tooltip component
```js
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
        <div className="tooltip-donut-threshold-chart">
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

## Tips

- For single data points or zero values, you may want to set the `domain` prop. See Victory's <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">FAQ</a>
- `ChartLegend` may be used as a standalone component, instead of using `legendData` and `legendPosition`

## Docs
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see <a href="https://formidable.com/open-source/victory/docs/victory-chart" target="_blank">VictoryChart</a>
 - For `ChartArea` props, see <a href="https://formidable.com/open-source/victory/docs/victory-area" target="_blank">VictoryArea</a>
 - For `ChartAxis` props, see <a href="https://formidable.com/open-source/victory/docs/victory-axis" target="_blank">VictoryAxis</a>
 - For `ChartBar` props, see <a href="https://formidable.com/open-source/victory/docs/victory-bar" target="_blank">VictoryBar</a>
 - For `ChartDonut` props, see <a href="https://formidable.com/open-source/victory/docs/victory-pie" target="_blank">VictoryPie</a>
 - For `ChartGroup` props, see <a href="https://formidable.com/open-source/victory/docs/victory-group" target="_blank">VictoryGroup</a>
 - For `ChartLegend` props, see <a href="https://formidable.com/open-source/victory/docs/victory-legend" target="_blank">VictoryLegend</a>
 - For `ChartLine` props, see <a href="https://formidable.com/open-source/victory/docs/victory-line" target="_blank">VictoryLine</a>
 - For `ChartStack` props, see <a href="https://formidable.com/open-source/victory/docs/victory-stack" target="_blank">VictoryStack</a>
 - For `ChartTooltip` props, see <a href="https://formidable.com/open-source/victory/docs/victory-tooltip" target="_blank">VictoryTooltip</a>
