---
title: 'Sparkline'
section: 'charts'
typescript: true
propComponents: ['ChartArea', 'ChartGroup', 'ChartLabel']
---

import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
import './sparkline.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

## Tutorial

PatternFly React charts are based on the [Victory chart](https://formidable.com/open-source/victory/docs/victory-chart/) library, 
along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React 
based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

In this tutorial, we will build a bar chart together - starting with a simple chart, adding tooltips, and 
concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent 
user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/sparkline-chart)

## Sparkline chart
```js
import React from 'react';
import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="sparkline-container">
    <div className="sparkline-chart">
      <ChartGroup
        ariaDesc="Average number of pets"
        ariaTitle="Sparkline chart example"
        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
        height={100}
        maxDomain={{y: 9}}
        padding={0}
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

## Green, sparkline chart
This demonstrates an alternate way of applying tooltips using CSS overflow
```js
import React from 'react';
import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="sparkline-container sparkline-overflow">
    <div className="sparkline-chart">
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

## Tips

- For single data points or zero values, you may want to set the `domain` prop. See Victory's <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">FAQ</a>

## Docs
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartArea` props, see <a href="https://formidable.com/open-source/victory/docs/victory-area" target="_blank">VictoryArea</a>
 - For `ChartGroup` props, see <a href="https://formidable.com/open-source/victory/docs/victory-group" target="_blank">VictoryGroup</a>
 - For `ChartLabel` props, see <a href="https://formidable.com/open-source/victory/docs/victory-label" target="_blank">VictoryLabel</a>
 - For `ChartVoronoiContainer` props, see <a href="https://formidable.com/open-source/victory/docs/victory-voronoi-container" target="_blank">VictoryVoronoiContainer</a>
