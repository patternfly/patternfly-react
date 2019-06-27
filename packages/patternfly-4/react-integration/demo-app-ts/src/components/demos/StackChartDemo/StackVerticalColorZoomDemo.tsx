import React from 'react';
import { Chart, ChartBar, ChartStack, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

export class StackVerticalColorZoomDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{width: '50%'}}>
        <div className="stack-chart-container">
          <Chart
            allowZoom
            themeColor={ChartThemeColor.multi}
            themeVariant={ChartThemeVariant.light}
          >
            <ChartStack domainPadding={{x: [10, 2]}}>
              <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
              <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
              <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
              <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
            </ChartStack>
          </Chart>
        </div>
      </div>
    )
  }
}
