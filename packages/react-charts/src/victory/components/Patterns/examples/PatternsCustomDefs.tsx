import { ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const PatternsCustomDefs: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];
  const legendData: PetData[] = [{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }];

  return (
    <div style={{ height: '230px', width: '350px' }}>
      <svg aria-hidden height="0" width="0" style={{ display: 'block' }}>
        <defs>
          <pattern
            id="pattern1"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            width="10"
            height="10"
            x="0"
            y="0"
          >
            <path d="M 0 0 L 5 10 L 10 0" stroke={chart_color_blue_300.value} strokeWidth="2" fill="none"></path>
          </pattern>
          <pattern
            id="pattern2"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            width="10"
            height="10"
            x="0"
            y="0"
          >
            <path
              d="M 0 3 L 5 3 L 5 0 M 5 10 L 5 7 L 10 7"
              stroke={chart_color_green_300.value}
              strokeWidth="2"
              fill="none"
            ></path>
          </pattern>
        </defs>
      </svg>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        constrainToVisibleArea
        data={data}
        height={230}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart11"
        padding={{
          bottom: 20,
          left: 20,
          right: 140, // Adjusted to accommodate legend
          top: 20
        }}
        patternScale={['url("#pattern1")', 'url("#pattern2")', null]}
        themeColor={ChartThemeColor.multiUnordered}
        width={350}
      />
    </div>
  );
};
