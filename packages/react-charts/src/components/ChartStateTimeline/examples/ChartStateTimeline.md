---
id: State timeline chart
section: charts
propComponents: [
  'Chart',
  'ChartAxis',
  'ChartGroup',
  'ChartLine',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { Chart, ChartAxis, ChartBar, ChartStack, ChartTooltip } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory-zoom-container';
import { global_danger_color_200 } from '@patternfly/react-tokens/dist/js/global_danger_color_200';
import { global_success_color_100 } from '@patternfly/react-tokens/dist/js/global_success_color_100';
import { global_warning_color_100 } from '@patternfly/react-tokens/dist/js/global_warning_color_100';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Custom colors with responsive container

This demonstrates zoom and pan behavior for one axis only.

```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartTooltip } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory-zoom-container';
import global_danger_color_200 from '@patternfly/react-tokens/global_danger_color_200/dist/esm/global_danger_color_200';
import global_success_color_100 from '@patternfly/react-tokens/global_success_color_100/dist/esm/global_success_color_100';
import global_warning_color_100 from '@patternfly/react-tokens/global_warning_color_100/dist/esm/global_warning_color_100';

class StateTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      width: 0
    };
    this.dataCPU = [
      {x: 'CPU utilization', y: '20 May', val: 25},
      {x: 'CPU utilization', y: '21 May', val: 55},
      {x: 'CPU utilization', y: '22 May', val: 60},
      {x: 'CPU utilization', y: '23 May', val: 70},
      {x: 'CPU utilization', y: '24 May', val: 20},
      {x: 'CPU utilization', y: '25 May', val: 20},
      {x: 'CPU utilization', y: '26 May', val: 25},
      {x: 'CPU utilization', y: '27 May', val: 25},
      {x: 'CPU utilization', y: '28 May', val: 55},
      {x: 'CPU utilization', y: '29 May', val: 60},
      {x: 'CPU utilization', y: 'Today', val: 70}
    ];
    this.dataMemory = [
      {x: 'Memory utilization', y: '20 May', val: 25},
      {x: 'Memory utilization', y: '21 May', val: 35},
      {x: 'Memory utilization', y: '22 May', val: 70},
      {x: 'Memory utilization', y: '23 May', val: 75},
      {x: 'Memory utilization', y: '24 May', val: 20},
      {x: 'Memory utilization', y: '25 May', val: 20},
      {x: 'Memory utilization', y: '26 May', val: 25},
      {x: 'Memory utilization', y: '27 May', val: 35},
      {x: 'Memory utilization', y: '28 May', val: 55},
      {x: 'Memory utilization', y: '29 May', val: 70},
      {x: 'Memory utilization', y: 'Today', val: 75}
    ];
    this.dataIO = [
      {x: 'I/O utilization', y: '20 May', val: 35},
      {x: 'I/O utilization', y: '21 May', val: 35},
      {x: 'I/O utilization', y: '22 May', val: 75},
      {x: 'I/O utilization', y: '23 May', val: 35},
      {x: 'I/O utilization', y: '24 May', val: 30},
      {x: 'I/O utilization', y: '25 May', val: 30},
      {x: 'I/O utilization', y: '26 May', val: 35},
      {x: 'I/O utilization', y: '27 May', val: 35},
      {x: 'I/O utilization', y: '28 May', val: 70},
      {x: 'I/O utilization', y: '29 May', val: 75},
      {x: 'I/O utilization', y: 'Today', val: 35}
    ];
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

    const fill = ({ datum }) => datum.val < 33 
      ? global_success_color_100.value
      : datum.val >= 33 && datum.val <= 66 
        ? global_warning_color_100.value 
        : global_danger_color_200.value;

    // Workaround for constrainToVisibleArea not working with Victory zoom containers
    const TooltipComponent = (props) => {
      if (props.x < props.width - 49) { // width - right-side padding
        return (
          <ChartTooltip {...props} orientation="top" dx={-1} dy={-5} />
        );
      }
      return null;
    };
    TooltipComponent.defaultEvents = ChartTooltip.defaultEvents;

    return (
      <div ref={this.containerRef}>
        <div style={{ height: '275px' }}>
          <Chart
            ariaDesc="State timeline chart example"
            ariaTitle="State timeline chart"
            containerComponent={<VictoryZoomContainer zoomDimension="y" zoomDomain={{y: [this.dataIO.length - 5, this.dataIO.length]}} />}
            domainPadding={{x: 25, y: 50}}
            legendData={[
              { name: '< 33%', symbol: { fill: global_success_color_100.value, type: 'circle' }},
              { name: '33 - 66%', symbol: { fill: global_warning_color_100.value, type: 'circle' }},
              { name: '> 67%', symbol: { fill: global_danger_color_200.value, type: 'circle' }}]}
            legendPosition="bottom-right"
            height={250}
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 150,
              right: 50,
              top: 50
            }}
            width={width}
           >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid style={{grid: {strokeDasharray: '10, 5'}}} />
            <ChartStack>
              {this.dataCPU.map((datum, index) => (
                <ChartBar
                  data={[{...datum, _y: 1}]} // match bar height to y-axis spacing
                  horizontal
                  labelComponent={<TooltipComponent />}
                  labels={({datum}) => `${datum.val}%`}
                  key={`${datum.x}${index}`}
                  style={{data: {fill}}}
                />
              ))}
              {this.dataMemory.map((datum, index) => (
                <ChartBar
                  data={[{...datum, _y: 1}]} // match bar height to y-axis spacing
                  horizontal
                  labelComponent={<TooltipComponent />}
                  labels={({datum}) => `${datum.val}%`}
                  key={`${datum.x}${index}`}
                  style={{data: {fill}}}
                />
              ))}
              {this.dataIO.map((datum, index) => (
                <ChartBar
                  data={[{...datum, _y: 1}]} // match bar height to y-axis spacing
                  horizontal
                  labelComponent={<TooltipComponent />}
                  labels={({datum}) => `${datum.val}%`}
                  key={`${datum.x}${index}`}
                  style={{data: {fill}}}
                />
              ))}
            </ChartStack>
          </Chart>
        </div>
      </div>
    );
  }
}
```

## Documentation
### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
 - For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
 - For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
 - For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
 - For `VictoryZoomContainer` props, see [VictoryZoomContainerline](https://formidable.com/open-source/victory/docs/victory-zoom-container)
