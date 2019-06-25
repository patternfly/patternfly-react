import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

export class ColorBarZoomNoAxesDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div className="bar-chart-container">
          <ChartGroup offset={11}
                      allowZoom
                      domainPadding={{ x: [30, 25] }}
                      themeColor={ChartThemeColor.multi}
                      themeVariant={ChartThemeVariant.light}>
            <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
            <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
            <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
            <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
          </ChartGroup>
        </div>
      </div>
    )
  }
}
