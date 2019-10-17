---
title: 'Bullet chart'
section: 'charts'
typescript: true
propComponents: [
  'ChartAxis',
  'ChartBullet',
  'ChartContainer'
]
hideDarkMode: true
---

import { ChartAxis, ChartBullet, ChartContainer, ChartThemeColor } from '@patternfly/react-charts';
import { Button, Tooltip } from '@patternfly/react-core';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a bullet chart using a Katacoda tutorial starting with a simple chart, adding qualitative ranges, primary comparative measures, a comparative warning measure, tooltips, labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/bullet-chart)

## Examples
```js title=Basic
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

Basic = (
  <div style={{ height: '150px', width: '600px' }}>
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
      constrainToVisibleArea
      height={150}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      width={600}
    />
  </div>
)
```

```js title=Segmented-primary-measure
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

SegmentedPrimaryMeasure = (
  <div style={{ height: '200px', width: '600px' }}>
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      height={200}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 50
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
  </div>
)
```

```js title=Responsive-container-with-bottom-aligned-legend
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
      <div>
        <p>This bullet chart has a bottom-left aligned legend, top-left aligned label, and responsive container</p>
        <div ref={this.containerRef} style={{ height: '250px' }}>
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

```js title=Bullet-chart-with-primary-measure-dot
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

PrimaryMeasureDot = (
  <div style={{ height: '200px', width: '600px' }}>
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      height={200}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 50
      }}
      primaryDotMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
      primaryDotMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
  </div>
)
```

```js title=Error-measure-and-custom-axis-ticks
import React from 'react';
import { ChartAxis, ChartBullet } from '@patternfly/react-charts';

ErrorMeasureCustomAxis = (
  <div>
    <p>This is a green bullet chart with error measure and custom axis ticks with 3 legend items per row</p>
    <div style={{ height: '200px', width: '600px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        axisComponent={<ChartAxis tickValues={[0, 75, 150]} />}
        comparativeErrorMeasureData={[{name: 'Error', y: 120}]}
        comparativeErrorMeasureLegendData={[{ name: 'Error' }]}
        comparativeWarningMeasureData={[{name: 'Warning', y: 80}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        height={200}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        legendItemsPerRow={3}
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 50
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 75 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
        qualitativeRangeData={[{ name: 'Range', y: 65 }, { name: 'Range', y: 100 }, { name: 'Range', y: 150 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        themeColor={ChartThemeColor.green}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </div>
  </div>
)
```

```js title=Primary-measure-outside-range
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

PrimaryMeasureOutsideRange = (
  <div>
    <p>This is a gold bullet chart with primary measure greater than max range</p>
    <div style={{ height: '200px', width: '600px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={[{name: 'Warning', y: 80}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        height={200}
        maxDomain={{y: 125}}
        minDomain={{y: 50}}
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 75,
          top: 50
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 75 }, { name: 'Measure', y: 135 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
        qualitativeRangeData={[{ name: 'Range', y: 85 }, { name: 'Range', y: 125 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        themeColor={ChartThemeColor.gold}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </div>
  </div>
)
```

```js title=Negative-primary-measure
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

NegativePrimaryMeasure = (
  <div>
    <p>This bullet chart with negative primary measure is for measures considered to be bad when they are low</p>
    <div style={{ height: '200px', width: '600px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={[{name: 'Warning', y: 60}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        height={200}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 75}}
        minDomain={{y: -25}}
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 65
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: -15 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }]}
        qualitativeRangeData={[{ name: 'Range', y: 25, y0: -25 }, { name: 'Range', y: 50 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </div>
  </div>
)
```

```js title=Reversed-with-right-aligned-legend
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

ReversedRightLegend = (
  <div>
    <p>This reversed bullet chart with right aligned legend is for measures considered to be good when they are low</p>
    <div style={{ height: '200px', width: '700px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={[{name: 'Warning', y: -88}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        invert
        height={200}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        legendPosition="right"
        legendOrientation="vertical"
        maxDomain={{y: 0}}
        minDomain={{y: -100}}
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 150, // Adjusted to accommodate legend
          top: 80
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: -60 }, { name: 'Measure', y: -25 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
        qualitativeRangeData={[{ name: 'Range', y: -50 }, { name: 'Range', y: -75 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        subTitle="Measure details"
        title="Text label"
        width={700}
      />
    </div>
  </div>
)
```

```js title=Negative-and-positive-primary-measures
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

PrimaryMeasures = (
  <div>
    <p>This bullet chart with negative and positive primary measures has 4 legend items per row</p>
    <div style={{ height: '200px', width: '600px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={[{name: 'Warning', y: 60}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        height={200}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        legendItemsPerRow={4}
        maxDomain={{y: 75}}
        minDomain={{y: -25}}
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 65
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: -10 }, { name: 'Measure', y: -20 }, { name: 'Measure', y: 10 }, { name: 'Measure', y: 40 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }, { name: 'Measure 3' }, { name: 'Measure 4' }]}
        qualitativeRangeData={[{ name: 'Range', y: 25, y0: -25 }, { name: 'Range', y: 50 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </div>
  </div>
)
```

```js title=Vertical-with-segmented-primary-measure
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

Vertical = (
  <div style={{ height: '500px', width: '500px' }}>
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      height={500}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 400,
        right: 50,
        top: 50
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
  </div>
)
```

```js title=Vertical-primary-measure-outside-max-range
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

VerticalOutsideRange = (
  <div style={{ height: '500px', width: '500px' }}>
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 100}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      height={500}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 125}}
      minDomain={{y: 50}}
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 400,
        right: 50,
        top: 50 // Adjusted to accommodate primary segmented measure tooltip
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 75 }, { name: 'Measure', y: 135 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 85 }, { name: 'Range', y: 125 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      subTitle="Measure details"
      title="Text label"
      themeColor={ChartThemeColor.gold}
      width={500}
    />
  </div>
)
```

```js title=Custom-size
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

CustomSize = (
  <div style={{ height: '200px', width: '600px' }}>
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      bulletSize={160}
      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={200}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accomodate labels
        right: 50,
        top: 50
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
  </div>
)
```

```js title=Horizontal-group
import React from 'react';
import { ChartBullet, ChartContainer } from '@patternfly/react-charts';

HorizontalGroup = (
  <div style={{ height: '500px', width: '600px' }}>
    <ChartContainer 
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        height={500}
        width={600}
      >
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        constrainToVisibleArea
        height={500}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 75
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
        constrainToVisibleArea
        height={500}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 300
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}
        constrainToVisibleArea
        height={500}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 525
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}
        qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        height={500}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 750
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </ChartContainer>
  </div>
)
```

```js title=Vertical-group
import React from 'react';
import { ChartBullet, ChartContainer } from '@patternfly/react-charts';

VerticalGroup = (
  <div style={{ height: '600px', width: '500px' }}>
    <ChartContainer 
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        height={600}
        width={500}
      >
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={500}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 300,
          right: 50,
          top: 50
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={500}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 550,
          right: 50,
          top: 50
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}
        qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={500}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 800,
          right: 50,
          top: 50
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={500}
      />
    </ChartContainer>
  </div>
)
```

```js title=Horizontal-group-with-title
import React from 'react';
import { ChartBullet, ChartContainer } from '@patternfly/react-charts';

HorizontalGroupWithTitle = (
  <div style={{ height: '600px', width: '600px' }}>
    <ChartContainer 
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        height={600}
        width={600}
      >
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        constrainToVisibleArea
        groupSubTitle="Measure details"
        groupTitle="Text label"
        height={575}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 275 // Adjusted to accommodate group labels
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
        constrainToVisibleArea
        height={600}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 500 // Adjusted to accommodate group labels
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}
        constrainToVisibleArea
        height={600}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 725 // Adjusted to accommodate group labels
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}
        qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        height={600}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 950 // Adjusted to accommodate group labels
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </ChartContainer>
  </div>
)
```

```js title=Vertical-group-with-title
import React from 'react';
import { ChartBullet, ChartContainer } from '@patternfly/react-charts';

VerticalGroupWithTitle = (
  <div style={{ height: '600px', width: '500px' }}>
    <ChartContainer 
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        height={600}
        width={500}
      >
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        groupSubTitle="Measure details"
        groupTitle="Text label"
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 150 // Adjusted to accommodate group labels
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={500}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 300,
          right: 50,
          top: 150 // Adjusted to accommodate group labels
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={500}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 550,
          right: 50,
          top: 150 // Adjusted to accommodate group labels
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}
        qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={500}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 800,
          right: 50,
          top: 150 // Adjusted to accommodate group labels
        }}
        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={500}
      />
    </ChartContainer>
  </div>
)
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
 - For `ChartBullet` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
 - For `ChartContainer` props, see [VictoryContainer](https://formidable.com/open-source/victory/docs/victory-container)
