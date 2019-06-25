import React from 'react';
import { Chart, ChartArea, ChartGroup, ChartLegend, ChartVoronoiContainer } from '@patternfly/react-charts';

export class CustomColorsDemo extends React.Component {
  state = {
    width: 0
  };

  containerRef: any;
  getTooltipLabel: (point: any, index: number, points: any[]) => string;
  handleResize: () => void;


  constructor(props) {
    super(props);
    this.containerRef = React.createRef<HTMLDivElement>();

    this.getTooltipLabel = datum => `${datum.name}: ${datum.y}`;

    this.handleResize = () => {
      this.setState({ width: this.containerRef.current.clientWidth });
    };
  }

  componentDidMount() {
    window.scrollTo(0,0);

    setTimeout(() => {
      this.setState({ width: this.containerRef.current.clientWidth });
      window.addEventListener('resize', this.handleResize);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { width } = this.state;
    const container = <ChartVoronoiContainer labels={this.getTooltipLabel} />;
    const cats = {
      data: {
        fill: '#486b00', // global_success_color_200.value,
        stroke: '#92d400' // global_success_color_100.value
      }
    };
    const dogs = {
      data: {
        fill: '#007bba', // global_primary_color_100.value,
        stroke: '#00659c' // global_primary_color_200.value
      }
    };

    return (
      <div ref={this.containerRef}>
        <div className="area-chart-overflow">
          <Chart containerComponent={container} height={200} width={width}>
            <ChartGroup>
              <ChartArea
                data={[
                  { name: 'Cats', x: 1, y: 2 },
                  { name: 'Cats', x: 2, y: 3 },
                  { name: 'Cats', x: 3, y: 4 },
                  { name: 'Cats', x: 4, y: 5 }
                ]}
                style={cats}
              />
              <ChartArea
                data={[
                  { name: 'Dogs', x: 1, y: 1 },
                  { name: 'Dogs', x: 2, y: 2 },
                  { name: 'Dogs', x: 3, y: 3 },
                  { name: 'Dogs', x: 4, y: 4 },
                  { name: 'Dogs', x: 5, y: 4 }
                ]}
                style={dogs}
              />
            </ChartGroup>
          </Chart>
        </div>
        <ChartLegend
          colorScale={[cats.data.fill, dogs.data.fill]}
          data={[{ name: 'Cats' }, { name: 'Dogs' }]}
          height={50}
          responsive={false}
          title="Average number of pets"
          width={width}
        />
      </div>
    );
  }
}
