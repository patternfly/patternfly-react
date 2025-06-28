import {
  Chart,
  ChartBar,
  ChartAxis,
  ChartGroup,
  ChartThemeColor,
  ChartVoronoiContainer,
  getCustomTheme
} from '@patternfly/react-charts/victory';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_teal_300 from '@patternfly/react-tokens/dist/esm/chart_color_teal_300';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';

interface PetData {
  name?: string;
  x?: string;
  y?: number;
}

export const CustomeThemeCustomTheme: React.FunctionComponent = () => {
  const colorScale = [
    chart_color_blue_300.var,
    chart_color_green_300.var,
    chart_color_teal_300.var,
    chart_color_yellow_300.var
  ];

  const layoutProps = {
    padding: {
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }
  };

  // Victory theme properties only
  const themeProps = {
    bar: {
      colorScale,
      ...layoutProps
    },
    chart: {
      colorScale,
      ...layoutProps
    },
    group: {
      colorScale,
      ...layoutProps
    },
    legend: {
      colorScale
    }
  };

  // Applies theme color and variant to base theme
  const myCustomTheme = getCustomTheme(ChartThemeColor.default, themeProps);

  const legendData: PetData[] = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }];

  const data1: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 3 }
  ];

  const data2: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 1 },
    { name: 'Dogs', x: '2017', y: 7 },
    { name: 'Dogs', x: '2018', y: 4 }
  ];

  const data3: PetData[] = [
    { name: 'Birds', x: '2015', y: 4 },
    { name: 'Birds', x: '2016', y: 4 },
    { name: 'Birds', x: '2017', y: 9 },
    { name: 'Birds', x: '2018', y: 7 }
  ];

  const data4: PetData[] = [
    { name: 'Mice', x: '2015', y: 3 },
    { name: 'Mice', x: '2016', y: 3 },
    { name: 'Mice', x: '2017', y: 8 },
    { name: 'Mice', x: '2018', y: 5 }
  ];

  return (
    <div style={{ height: '250px', width: '600px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Bar chart example"
        containerComponent={
          <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
        }
        domain={{ y: [0, 9] }}
        domainPadding={{ x: [30, 25] }}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        height={250}
        name="chart6"
        theme={myCustomTheme}
        width={600}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartGroup offset={11}>
          <ChartBar data={data1} />
          <ChartBar data={data2} />
          <ChartBar data={data3} />
          <ChartBar data={data4} />
        </ChartGroup>
      </Chart>
    </div>
  );
};
