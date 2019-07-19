---
title: 'Area'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartArea', 'ChartGroup', 'ChartVoronoiContainer']
---

import { Chart, ChartArea, ChartAxis, ChartGroup, ChartLabel, ChartLegendWrapper, ChartVoronoiContainer } from '@patternfly/react-charts';
import './chart-area.scss';

## Simple area chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="area-chart-legend-right">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Area chart example"
      containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={200}
      maxDomain={{y: 9}}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accomodate legend
        top: 50
      }}
      width={800}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Birds', x: 1, y: 2 },
            { name: 'Birds', x: 2, y: 3 },
            { name: 'Birds', x: 3, y: 4 },
            { name: 'Birds', x: 4, y: 5 },
            { name: 'Birds', x: 5, y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: 1, y: 1 },
            { name: 'Dogs', x: 2, y: 2 },
            { name: 'Dogs', x: 3, y: 3 },
            { name: 'Dogs', x: 4, y: 2 },
            { name: 'Dogs', x: 5, y: 4 }
          ]}
          interpolation="basis"
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Cyan area chart with bottom aligned legend
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="area-chart-legend-bottom">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Area chart example"
      containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
      legendPosition="bottom"
      height={225}
      padding={{
        bottom: 75, // Adjusted to accomodate legend
        left: 50,
        right: 50,
        top: 50,
      }}
      maxDomain={{y: 9}}
      themeColor={ChartThemeColor.cyan}
      width={650}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Birds', x: 1, y: 2 },
            { name: 'Birds', x: 2, y: 3 },
            { name: 'Birds', x: 3, y: 4 },
            { name: 'Birds', x: 4, y: 5 },
            { name: 'Birds', x: 5, y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: 1, y: 1 },
            { name: 'Dogs', x: 2, y: 2 },
            { name: 'Dogs', x: 3, y: 3 },
            { name: 'Dogs', x: 4, y: 2 },
            { name: 'Dogs', x: 5, y: 4 }
          ]}
          interpolation="basis"
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Multi-color (unorderd) chart with bottom-left aligned legend and responsive container
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';

class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      this.setState({ width: this.containerRef.current.clientWidth });
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ width: this.containerRef.current.clientWidth });
      window.addEventListener('resize', this.handleResize);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { width } = this.state;
    
    return (
      <div ref={this.containerRef}>
        <div className="area-chart-legend-bottom-responsive">
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
            containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
            legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
            legendPosition="bottom-left"
            height={225}
            padding={{
              bottom: 75, // Adjusted to accomodate legend
              left: 50,
              right: 50,
              top: 50,
            }}
            maxDomain={{y: 9}}
            themeColor={ChartThemeColor.multiUnordered}
            width={width}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup>
              <ChartArea
                data={[
                  { name: 'Cats', x: 1, y: 3 },
                  { name: 'Cats', x: 2, y: 4 },
                  { name: 'Cats', x: 3, y: 8 },
                  { name: 'Cats', x: 4, y: 6 }
                ]}
                interpolation="basis"
              />
             <ChartArea
               data={[
                  { name: 'Birds', x: 1, y: 2 },
                  { name: 'Birds', x: 2, y: 3 },
                  { name: 'Birds', x: 3, y: 4 },
                  { name: 'Birds', x: 4, y: 5 },
                  { name: 'Birds', x: 5, y: 6 }
                ]}
                interpolation="basis"
              />
              <ChartArea
                data={[
                  { name: 'Dogs', x: 1, y: 1 },
                  { name: 'Dogs', x: 2, y: 2 },
                  { name: 'Dogs', x: 3, y: 3 },
                  { name: 'Dogs', x: 4, y: 2 },
                  { name: 'Dogs', x: 5, y: 4 }
                ]}
                interpolation="basis"
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
```

## Sparkline chart
```js
import React from 'react';
import { ChartArea, ChartGroup, ChartLabel } from '@patternfly/react-charts';

<div>
  <div className="sparkline-container">
    <div className="sparkline-chart">
      <ChartGroup
        ariaDesc="Average number of pets"
        ariaTitle="Sparkline chart example"
        containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
        height={75}
        padding={0}
        width={400}
      >
        <ChartArea
          data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
          ]}
        />
      </ChartGroup>
    </div>
    <ChartLabel text="CPU utilization"/>
  </div>
</div>
```
