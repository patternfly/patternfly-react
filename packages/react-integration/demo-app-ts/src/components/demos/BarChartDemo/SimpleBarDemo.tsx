import React from 'react';
import { Chart, ChartBar } from '@patternfly/react-charts';

export class SimpleBarDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ width: '600px', height: '250px', paddingLeft: '50px' }}>
          <Chart
            domain={{ y: [0, 9] }}
            domainPadding={{ x: [30, 25] }}
            legendData={[{ name: 'Cats' }]}
            legendOrientation="vertical"
            legendPosition="right"
            height={250}
            padding={{
              bottom: 50,
              left: 50,
              right: 200, // Adjusted to accommodate legend
              top: 50
            }}
            width={600}
          >
            <ChartBar
              data={[
                { name: 'Cats', x: '2015', y: 1 },
                { name: 'Cats', x: '2016', y: 2 },
                { name: 'Cats', x: '2017', y: 5 },
                { name: 'Cats', x: '2018', y: 3 }
              ]}
            />
          </Chart>
        </div>
      </div>
    );
  }
}
