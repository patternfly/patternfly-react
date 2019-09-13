---
title: 'Sparkline'
section: 'charts'
typescript: true
propComponents: ['ChartArea']
---

import { ChartArea, ChartGroup, ChartLabel, ChartThemeColor } from '@patternfly/react-charts';
import './sparkline.scss';

## Tutorial
```js
import React from 'react';
import { Text, TextContent, TextVariants } from '@patternfly/react-charts';

<TextContent>
  <Text component={TextVariants.p}>
    PatternFly React charts are based on the Victory chart library, along with additional functionality, custom 
    components, and theming for PatternFly. This provides a collection of React components you can use to build 
    interfaces with consistent markup, styling, and behavior.
  </Text>
  <Text component={TextVariants.p}>
    In this 
    <Text component={TextVariants.a} href="https://katacoda.com/patternfly/courses/charts/module-sparkline" target="_blank">
      tutorial
    </Text>,
    we will build a PatternFly sparkline chart together - starting with a simple chart, adding tooltips, and concluding 
    by changing the theme color. You'll learn a little bit about React and how to use PatternFly components together to 
    build a consistent experience.
  </Text>
</TextContent>
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
        containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
        height={100}
        maxDomain={{y: 9}}
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

## Green, sparkline chart
This demonstrates an alternate way of applying tooltips using CSS overflow
```js
import React from 'react';
import { ChartArea, ChartGroup, ChartLabel, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="sparkline-container sparkline-overflow">
    <div className="sparkline-chart">
      <ChartGroup
        ariaDesc="Average number of pets"
        ariaTitle="Sparkline chart example"
        containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
        height={100}
        maxDomain={{y: 9}}
        padding={0}
        themeColor={ChartThemeColor.green}
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
