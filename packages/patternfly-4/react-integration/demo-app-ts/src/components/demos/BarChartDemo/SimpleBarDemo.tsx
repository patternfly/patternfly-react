import React from 'react';
import { Chart, ChartBar } from '@patternfly/react-charts';

export class SimpleBarDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
    <div>
      <div className="bar-chart-container">
        <Chart domainPadding={{ x: [30, 25] }}>
          <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]}/>
        </Chart>
      </div>
    </div>
    )
  };
}
