---
title: 'Legend chart'
section: 'charts'
typescript: true
propComponents: [
  'ChartLegend'
]
---

import { Chart, ChartArea, ChartAxis, ChartBullet, ChartGroup, ChartLegend, ChartLine, ChartPie, ChartScatter, ChartThemeColor } from '@patternfly/react-charts';
import { chart_area_Opacity } from '@patternfly/react-tokens';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

```js title=Right-aligned-legend
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

RightAlignedLegend = (
  <div style={{ height: '230px', width: '350px' }}>
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 140, // Adjusted to accommodate legend
        top: 20
      }}
      subTitle="Pets"
      title="100"
      width={350}
    />
  </div>
)
```

```js title=Bottom-aligned-legend
import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

BottomAlignedLegend = (
  <div style={{ height: '275px', width: '450px' }}>
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
      legendPosition="bottom"
      height={275}
      padding={{
        bottom: 75, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 50
      }}
      themeColor={ChartThemeColor.purple}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup offset={11}>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
)
```

```js title=Responsive-legend
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

class BulletChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      if(this.containerRef.current && this.containerRef.current.clientWidth){
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { width } = this.state;
    return (
      <div ref={this.containerRef}>
        <p>This demonstrates a responsive legend which wraps when items are wider than its container</p>
        <div style={{ height: '250px' }}>
          <ChartBullet
            ariaDesc="Storage capacity"
            ariaTitle="Bullet chart example"
            comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
            comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
            constrainToVisibleArea
            height={250}
            labels={({ datum }) => `${datum.name}: ${datum.y}`}
            legendAllowWrap={true}
            legendPosition="bottom-left"
            maxDomain={{y: 100}}
            padding={{
              bottom: 50,
              left: 50,
              right: 50,
              top: 100 // Adjusted to accommodate labels
            }}
            primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
            primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
            qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
            qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
            subTitle="Measure details"
            title="Text label"
            titlePosition="top-left"
            width={width}
          />
        </div>
      </div>
    );
  }
}
```

```js title=Standalone-legend
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts'; import {ChartLegend} from "./ChartLegend";

StandaloneLegend = (
  <div>
    <p>This demonstrates a standalone legend vs. using the `legendData` property</p>
    <div style={{ height: '275px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Line chart example"
        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
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
        <ChartLegend 
          data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
          x={80}
          y={235}
        />
      </Chart>
    </div>
  </div>
)
```

```js title=Legend-tooltips
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

<!-- // Todo: WIP
## Interactive legend
This demonstrates how to add an interactive legend using events such as `onMouseOver`, `onMouseOut`, and `onClick`
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartLegend, ChartThemeColor } from '@patternfly/react-charts';
import { chart_area_Opacity } from '@patternfly/react-tokens';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

class InteractiveLegendChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      hiddenSeries: new Set(),
      width: 0
    };
    this.series = [{
      datapoints: [
        { name: 'Cats', x: '2015', y: 3 },
        { name: 'Cats', x: '2016', y: 4 },
        { name: 'Cats', x: '2017', y: 8 },
        { name: 'Cats', x: '2018', y: 6 }
      ],
      legendItem: { name: 'Cats' }
    }, {
      datapoints: [
        { name: 'Dogs', x: '2015', y: 2 },
        { name: 'Dogs', x: '2016', y: 3 },
        { name: 'Dogs', x: '2017', y: 4 },
        { name: 'Dogs', x: '2018', y: 5 },
        { name: 'Dogs', x: '2019', y: 6 }
      ],
      legendItem: { name: 'Dogs' }
    }, {
      datapoints: [
        { name: 'Birds', x: '2015', y: 1 },
        { name: 'Birds', x: '2016', y: 2 },
        { name: 'Birds', x: '2017', y: 3 },
        { name: 'Birds', x: '2018', y: 2 },
        { name: 'Birds', x: '2019', y: 4 }
      ],
      legendItem: { name: 'Birds' }
    }];

    // Returns all names except given ID index
    this.getChildNames = (omitIndex) => {
      const result = [];
      this.series.map((_, index) => {
        if (index !== omitIndex) {
          result.push(`area-${index}`);
          result.push(`scatter-${index}`);
        }
      });
      return result;
    };
    
    // Returns legend data styled per hiddenSeries
    this.getLegendData = () => {
      const { hiddenSeries } = this.state;
      return this.series.map((s, index) => {
        const opacity = hiddenSeries.has(index) ? chart_area_Opacity.value : undefined; // Todo: add global opacity for interactive legend
        return {
          ...s.legendItem,
          labels: {
            opacity
          },
          symbol: {
            opacity
          }
        };
      });
    };

    this.handleLegendClick = (props) => {
      if (!this.state.hiddenSeries.delete(props.index)) {
        this.state.hiddenSeries.add(props.index);
      }
      this.setState({ hiddenSeries: new Set(this.state.hiddenSeries) });
    };

    this.handleResize = () => {
      if(this.containerRef.current && this.containerRef.current.clientWidth){
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };

    // Returns targeted events for legend data or labels
    this.getTargetedEvents = (target) => {
      return this.series.map((s, index) => {  
        const childNames = this.getChildNames(index);
        return {
          childName: ['legend'],
          target,
          eventKey: String(index),
          eventHandlers: {
            onClick: () => {
              return [
                {
                  target: 'data',
                  mutation: props => {
                    this.handleLegendClick(props);
                    return null;
                  }
                }
              ];
            },
            onMouseOver: () => {
              const { hiddenSeries } = this.state;
              return hiddenSeries.has(index) ? null : [
                {
                  childName: childNames,
                  target: 'data',
                  eventKey: 'all',
                  mutation: props => {
                    return {
                      style: {
                        ...props.style, 
                        opacity: chart_area_Opacity.value
                      }
                    };
                  }
                }, {
                  childName: 'legend',
                  target: 'data',
                  eventKey: 'all',
                  mutation: props => {
                    return props.index === index ? null : {
                      style: {
                        ...props.style, 
                        opacity: chart_area_Opacity.value
                      }
                    };
                  }
                }, {
                  childName: 'legend',
                  target: 'labels',
                  eventKey: 'all',
                  mutation: props => {
                    return props.datum && props.datum.name === s.legendItem.name ? null : {
                      style: {
                        ...props.style, 
                        opacity: chart_area_Opacity.value
                      }
                    };
                  }
                }
              ];
            },
            onMouseOut: () => {
              return [
                {
                  childName: childNames,
                  target: 'data',
                  eventKey: 'all',
                  mutation: () => null
                }, {
                  childName: 'legend',
                  target: 'data',
                  eventKey: 'all',
                  mutation: () => null
                }, {
                  childName: 'legend',
                  target: 'labels',
                  eventKey: 'all',
                  mutation: () => null
                }
              ];
            }
          }
        };
      });
    };

    this.getEvents = () => {
      return [
        ...this.getTargetedEvents('data'),
        ...this.getTargetedEvents('labels')
      ];
    };
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  // Tips:
  // 1. Don't omit components unless using custom colors -- that will reassign color scale
  // 2. Set domain or tick axis labels to account for when all data series are hidden
  // 3. Omit tooltip for ChartScatter component by checking childName prop
  // 4. Omit tooltip when all data series are hidden
  render() {
    const { hiddenSeries, width } = this.state;
    const allHidden = hiddenSeries.length === this.series.length;
    const tootlip = ({ datum }) => datum.childName.includes('area-') && datum.y !== null ? `${datum.name}: ${datum.y}` : null;

    return (
      <div ref={this.containerRef}>
        <div className="area-chart-legend-bottom-responsive">
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
            containerComponent={
              <ChartVoronoiContainer
                allowTooltip={!allHidden}
                labels={!allHidden ? tootlip : undefined} 
                constrainToVisibleArea 
              />
            }
            events={this.getEvents()}
            height={225}
            legendComponent={<ChartLegend name={'legend'} data={this.getLegendData()} />}
            legendPosition="bottom-left"
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 50,
              top: 50,
            }}
            maxDomain={{y: 9}}
            themeColor={ChartThemeColor.multiUnordered}
            width={width}
          >
            <ChartAxis tickValues={['2015', '2016', '2017', '2018']} />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup>
              {this.series.map((s, index) => {
                return (
                  <ChartScatter
                    data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null}]}
                    key={'scatter-' + index}
                    name={'scatter-' + index}
                    size={({ active }) => (active ? 5 : 3)}
                  />
                );
              })}
            </ChartGroup>
            <ChartGroup>
              {this.series.map((s, index) => {
                return (
                  <ChartArea
                    data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null}]}
                    key={'area-' + index}
                    name={'area-' + index}
                  />
                );
              })}
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
```
-->

## Documentation
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
