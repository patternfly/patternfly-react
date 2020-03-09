import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export class DonutSmallDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ height: '150px', width: '150px', paddingTop: '50px', paddingLeft: '50px' }}>
          <ChartDonut
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            height={150}
            labels={({ datum }) => `${datum.x}: ${datum.y}%`}
            subTitle="Pets"
            title="100"
            width={150}
          />
        </div>
      </div>
    );
  }
}
