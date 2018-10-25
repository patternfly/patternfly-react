import React from 'react';
import {
  ChartArea,
  ChartGroup,
  ChartLegend,
  ChartVoronoiContainer
} from '@patternfly/react-charts';
import getContainerProps from './common/getContainerProps';

class SimpleChart extends React.Component {
  static getContainerProps = getContainerProps;
  static title = 'Simple Chart';

  containerRef = React.createRef();
  state = {
    width: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ width: this.containerRef.current.clientWidth });
      window.addEventListener('resize', this.handleResize);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  getTooltipLabel = (datum) => {
    return `${datum.name}: ${datum.y}`;
  }

  handleResize = () => {
    this.setState({ width: this.containerRef.current.clientWidth });
  };

  render() {
    const { width } = this.state;
    const container = (
      <ChartVoronoiContainer labels={this.getTooltipLabel}/>
    );

    return (
      <div ref={this.containerRef}>
        <div className="chart-overflow">
          <ChartGroup
            containerComponent={container}
            height={100}
            width={width}
          >
            <ChartArea
              data={[
                { name: 'Cats', x: 1, y: 1 },
                { name: 'Cats', x: 2, y: 2 },
                { name: 'Cats', x: 3, y: 3.2 },
                { name: 'Cats', x: 4, y: 3.5 }
              ]}
            />
            <ChartArea
              data={[
                { name: 'Dogs', x: 1, y: .5 },
                { name: 'Dogs', x: 2, y: 1 },
                { name: 'Dogs', x: 3, y: 2 },
                { name: 'Dogs', x: 4, y: 2.5 },
                { name: 'Dogs', x: 5, y: 2.5 }
              ]}
            />
          </ChartGroup>
        </div>
        <ChartLegend
          data={[
            { name: 'Cats' }, { name: 'Dogs' }
          ]}
          title="Average number of pets"
          height={50}
          width={width}
        />
      </div>
    );
  }
}

export default SimpleChart;
