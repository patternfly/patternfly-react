---
title: "Area Chart"
section: "charts"
---
## Simple Chart
```js
import React from 'react';
import { ChartArea, ChartGroup, ChartLegend, ChartVoronoiContainer } from '@patternfly/react-charts';

class SimpleChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      width: 0
    };

    this.getTooltipLabel = datum => `${datum.name}: ${datum.y}`;

    this.handleResize = () => {
      this.setState({ width: this.containerRef.current.clientWidth });
    };
  }

  componentDidMount() {
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

    return (
      <div ref={this.containerRef}>
        <div className="chart-overflow">
          <ChartGroup containerComponent={container} height={100} width={width}>
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
                { name: 'Dogs', x: 1, y: 0.5 },
                { name: 'Dogs', x: 2, y: 1 },
                { name: 'Dogs', x: 3, y: 2 },
                { name: 'Dogs', x: 4, y: 2.5 },
                { name: 'Dogs', x: 5, y: 2.5 }
              ]}
            />
          </ChartGroup>
        </div>
        <ChartLegend
          data={[{ name: 'Cats' }, { name: 'Dogs' }]}
          title="Average number of pets"
          height={50}
          width={width}
        />
      </div>
    );
  }
}
```

## Custom Colors Chart
```js
import React from 'react';
import { ChartArea, ChartGroup, ChartLegend, ChartVoronoiContainer } from '@patternfly/react-charts';

class CustomColorsChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      width: 0
    };

    this.getTooltipLabel = datum => `${datum.name}: ${datum.y}`;

    this.handleResize = () => {
      this.setState({ width: this.containerRef.current.clientWidth });
    };
  }

  componentDidMount() {
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
        // fill: global_success_color_200.value,
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
        <div className="chart-overflow">
          <ChartGroup containerComponent={container} height={100} width={width}>
            <ChartArea
              data={[
                { name: 'Cats', x: 1, y: 1 },
                { name: 'Cats', x: 2, y: 2 },
                { name: 'Cats', x: 3, y: 3.2 },
                { name: 'Cats', x: 4, y: 3.5 }
              ]}
              style={cats}
            />
            <ChartArea
              data={[
                { name: 'Dogs', x: 1, y: 0.5 },
                { name: 'Dogs', x: 2, y: 1 },
                { name: 'Dogs', x: 3, y: 2 },
                { name: 'Dogs', x: 4, y: 2.5 },
                { name: 'Dogs', x: 5, y: 2.5 }
              ]}
              style={dogs}
            />
          </ChartGroup>
        </div>
        <ChartLegend
          colorScale={[cats.data.fill, dogs.data.fill]}
          data={[{ name: 'Cats' }, { name: 'Dogs' }]}
          title="Average number of pets"
          height={50}
          width={width}
        />
      </div>
    );
  }
}
```

## Dark Green Theme Chart
```js
import React from 'react';
import { ChartArea, ChartGroup, ChartLegend, ChartTheme, ChartVoronoiContainer } from '@patternfly/react-charts';

class DarkGreenThemeChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      width: 0
    };

    this.getTooltipLabel = datum => `${datum.name}: ${datum.y}`;

    this.handleResize = () => {
      this.setState({ width: this.containerRef.current.clientWidth });
    };
  }

  componentDidMount() {
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

    return (
      <div ref={this.containerRef}>
        <div className="chart-overflow">
          <ChartGroup containerComponent={container} theme={ChartTheme.dark.green} height={100} width={width}>
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
                { name: 'Dogs', x: 1, y: 0.5 },
                { name: 'Dogs', x: 2, y: 1 },
                { name: 'Dogs', x: 3, y: 2 },
                { name: 'Dogs', x: 4, y: 2.5 },
                { name: 'Dogs', x: 5, y: 2.5 }
              ]}
            />
          </ChartGroup>
        </div>
        <ChartLegend
          data={[{ name: 'Cats' }, { name: 'Dogs' }]}
          theme={ChartTheme.dark.green}
          title="Average number of pets"
          height={50}
          width={width}
        />
      </div>
    );
  }
}
```