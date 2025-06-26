import { ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';
import chart_theme_blue_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_100';
import chart_theme_yellow_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_yellow_ColorScale_100';
import chart_theme_orange_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_300';

interface Data {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartPieCustomColorScale: React.FunctionComponent = () => {
  const data: Data[] = [
    { x: 'Sky', y: 38 },
    { x: 'Shady side of pyramid', y: 7 },
    { x: 'Sunny side of pyramid', y: 17 },
    { x: 'Sky', y: 38 }
  ];
  const legendData: Data[] = [{ name: 'Sky' }, { name: 'Shady side of pyramid' }, { name: 'Sunny side of pyramid' }];

  return (
    <div style={{ height: '230px', width: '450px' }}>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        colorScale={[
          chart_theme_blue_ColorScale_100.var,
          chart_theme_orange_ColorScale_300.var,
          chart_theme_yellow_ColorScale_100.var,
          chart_theme_blue_ColorScale_100.var
        ]}
        constrainToVisibleArea
        data={data}
        height={230}
        labels={({ datum }) => `${datum.x}`}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart2"
        padding={{
          bottom: 20,
          left: 20,
          right: 240, // Adjusted to accommodate legend
          top: 20
        }}
        themeColor={ChartThemeColor.orange}
        width={450}
      />
    </div>
  );
};
