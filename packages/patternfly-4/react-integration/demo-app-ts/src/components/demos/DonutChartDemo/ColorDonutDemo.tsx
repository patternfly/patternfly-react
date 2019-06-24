import React from 'react';
import { ChartDonut, ChartLegend, ChartThemeVariant, ChartThemeColor } from '@patternfly/react-charts';

export class ColorDonutDemo extends React.Component {

  render() {
    return (
      <div>
        <div className="donut-chart-container">
          <ChartDonut
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            labels={datum => `${datum.x}: ${datum.y}`}
            subTitle="Pets"
            themeColor={ChartThemeColor.multi}
            themeVariant={ChartThemeVariant.light}
            title="100"
            width={500}
          />
        </div>
        <ChartLegend
          data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
          height={35}
          width={500}
          orientation={'horizontal'}
          responsive={false}
          themeColor={ChartThemeColor.multi}
          themeVariant={ChartThemeVariant.light}
          x={500}
        />
      </div>

    )
  }
}
