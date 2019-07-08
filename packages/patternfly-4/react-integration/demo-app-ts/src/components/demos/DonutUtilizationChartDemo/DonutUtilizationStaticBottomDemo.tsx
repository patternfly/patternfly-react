import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationStaticBottomDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0 , 0);
  }

  render() {
    return (
      <div>
        <div style={{backgroundColor: 'white', height: '275px', width: '675px', paddingTop: '20px'}}>
          <ChartDonutThreshold
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            donutHeight={175}
            height={225}
            labels={datum => datum.x ? datum.x : null}
            legendPosition="bottom"
            subTitlePosition="right"
            width={675}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 45 }}
              labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
              legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
              subTitle="of 100 GBps"
              title="45%"
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>
        </div>
      </div>
    )
  }
}
