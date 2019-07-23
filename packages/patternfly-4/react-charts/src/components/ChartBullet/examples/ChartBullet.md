---
title: 'Bullet'
section: 'charts'
typescript: true
propComponents: ['ChartAxis', 'ChartBullet']
---

import { ChartAxis, ChartBullet, ChartContainer, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-bullet.scss';

## Simple bullet chart
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
      height={150}
      labels={datum => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      width={600}
    />
  </div>
</div>
```

## Bullet chart with segmented primary measure
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={200}
      labels={datum => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accomodate labels
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
</div>
```

## Bullet chart with bottom-left aligned legend, top-left aligned label, and responsive container
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

class MultiColorChart extends React.Component {
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
    const itemsPerRow = width > 650 ? 5 : width > 550 ? 4 : width > 450 ? 3 : 2;
    return (
      <div ref={this.containerRef}>
        <div className="bullet-chart-horz-responsive-legend-bottom">
          <ChartBullet
            ariaDesc="Storage capacity"
            ariaTitle="Bullet chart example"
            comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
            comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
            height={250}
            labels={datum => `${datum.name}: ${datum.y}`}
            legendItemsPerRow={itemsPerRow}
            legendPosition="bottom-left"
            maxDomain={{y: 100}}
            padding={{
              bottom: 50,
              left: 50,
              right: 50,
              top: 100 // Adjusted to accomodate labels
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

## Bullet chart with primary measure dot
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={200}
      labels={datum => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accomodate labels
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
</div>
```

## Green bullet chart with error measure and custom axis ticks with 3 legend items per row
```js
import React from 'react';
import { ChartAxis, ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      axisComponent={<ChartAxis tickValues={[0, 75, 150]} />}
      comparativeErrorMeasureData={[{name: 'Error', y: 120}]}
      comparativeErrorMeasureLegendData={[{ name: 'Error' }]}
      comparativeWarningMeasureData={[{name: 'Warning', y: 80}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={200}
      labels={datum => `${datum.name}: ${datum.y}`}
      legendItemsPerRow={3}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accomodate labels
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
```

## Gold bullet chart with primary measure greater than max range
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 100}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      labels={datum => `${datum.name}: ${datum.y}`}
      height={200}
      maxDomain={{y: 125}}
      minDomain={{y: 50}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accomodate labels
        right: 50,
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
```

## Bullet chart with negative primary measure -- for measures considered to be bad when they are low
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 60}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={200}
      labels={datum => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 75}}
      minDomain={{y: -25}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accomodate labels
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
```

## Reversed bullet chart with right aligned legend -- for measures considered to be good when they are low
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-legend-right">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: -88}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      invert
      height={200}
      labels={datum => `${datum.name}: ${datum.y}`}
      legendPosition="right"
      legendOrientation="vertical"
      maxDomain={{y: 0}}
      minDomain={{y: -100}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accomodate labels
        right: 150, // Adjusted to accomodate legend
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
```

## Bullet chart with negative and positive primary measures with 4 legend items per row
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 60}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={200}
      labels={datum => `${datum.name}: ${datum.y}`}
      legendItemsPerRow={4}
      maxDomain={{y: 75}}
      minDomain={{y: -25}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accomodate labels
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
```

## Vertical bullet chart with segmented primary measure
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-vert-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={500}
      horizontal={false}
      labels={datum => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      padding={{
        bottom: 125, // Adjusted to accomodate legend
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
</div>
```

## Gold, vertical bullet chart with primary measure greater than max range
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-vert-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 100}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={500}
      horizontal={false}
      labels={datum => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 125}}
      minDomain={{y: 50}}
      padding={{
        bottom: 125, // Adjusted to accomodate legend
        left: 400,
        right: 50,
        top: 100 // Adjusted to accomodate primary segmented measure tooltip
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
</div>
```

## Custom height bullet chart
```js
import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-legend-bottom">
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      bulletHeight={160}
      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      height={200}
      labels={datum => `${datum.name}: ${datum.y}`}
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
</div>
```

## Horizontal group bullet chart
```js
import React from 'react';
import { ChartBullet, ChartContainer } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-group-legend-bottom">
    <ChartContainer 
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        height={500}
        width={600}
      >
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        height={500}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accomodate legend
          left: 150, // Adjusted to accomodate labels
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
        height={500}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accomodate legend
          left: 150, // Adjusted to accomodate labels
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
        height={500}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accomodate legend
          left: 150, // Adjusted to accomodate labels
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
        height={500}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accomodate legend
          left: 150, // Adjusted to accomodate labels
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
</div>
```

## Vertical group bullet chart
```js
import React from 'react';
import { ChartBullet, ChartContainer } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-vert-group-legend-bottom">
    <ChartContainer 
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        height={600}
        width={500}
      >
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        height={600}
        horizontal={false}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accomodate legend
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
        height={600}
        horizontal={false}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accomodate legend
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
        height={600}
        horizontal={false}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accomodate legend
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
        height={600}
        horizontal={false}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accomodate legend
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
</div>
```

## Horizontal group bullet chart with group title
```js
import React from 'react';
import { ChartBullet, ChartContainer } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-horz-group-title-legend-bottom">
    <ChartContainer 
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        height={600}
        width={600}
      >
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        groupSubTitle="Measure details"
        groupTitle="Text label"
        height={575}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accomodate legend
          left: 150, // Adjusted to accomodate labels
          right: 50,
          top: 275 // Adjusted to accomodate group labels
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
        height={600}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accomodate legend
          left: 150, // Adjusted to accomodate labels
          right: 50,
          top: 500 // Adjusted to accomodate group labels
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
        height={600}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accomodate legend
          left: 150, // Adjusted to accomodate labels
          right: 50,
          top: 725 // Adjusted to accomodate group labels
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
        height={600}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 100, // Adjusted to accomodate legend
          left: 150, // Adjusted to accomodate labels
          right: 50,
          top: 950 // Adjusted to accomodate group labels
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
</div>
```

## Vertical group bullet chart with group title
```js
import React from 'react';
import { ChartBullet, ChartContainer } from '@patternfly/react-charts';

<div>
  <div className="bullet-chart-vert-group-legend-bottom">
    <ChartContainer 
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        height={600}
        width={500}
      >
      <ChartBullet
        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        groupSubTitle="Measure details"
        groupTitle="Text label"
        height={600}
        horizontal={false}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accomodate legend
          left: 50,
          right: 50,
          top: 150 // Adjusted to accomodate group labels
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
        height={600}
        horizontal={false}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accomodate legend
          left: 300,
          right: 50,
          top: 150 // Adjusted to accomodate group labels
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
        height={600}
        horizontal={false}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accomodate legend
          left: 550,
          right: 50,
          top: 150 // Adjusted to accomodate group labels
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
        height={600}
        horizontal={false}
        labels={datum => `${datum.name}: ${datum.y}`}
        maxDomain={{y: 100}}
        padding={{
          bottom: 125, // Adjusted to accomodate legend
          left: 800,
          right: 50,
          top: 150 // Adjusted to accomodate group labels
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
</div>
```
