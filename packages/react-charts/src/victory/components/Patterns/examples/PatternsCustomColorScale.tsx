import { ChartPie } from '@patternfly/react-charts/victory';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const PatternsCustomColorScale: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];
  const legendData: PetData[] = [{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }];
  return (
    <div style={{ height: '230px', width: '350px' }}>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        colorScale={[chart_color_blue_300.var, chart_color_yellow_300.var, chart_color_green_300.var]}
        constrainToVisibleArea
        data={data}
        hasPatterns={[true, true, false]}
        height={230}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart10"
        padding={{
          bottom: 20,
          left: 20,
          right: 140, // Adjusted to accommodate legend
          top: 20
        }}
        width={350}
      />
    </div>
  );
};
