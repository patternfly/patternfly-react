import {
  ChartArea,
  ChartContainer,
  ChartGroup,
  ChartLabel,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import { useEffect } from 'react';

interface PetData {
  name: string;
  x: string;
  y: number;
}

export const SparklineGreen: React.FunctionComponent = () => {
  const data: PetData[] = [
    { name: 'Cats', x: '2015', y: 3 },
    { name: 'Cats', x: '2016', y: 4 },
    { name: 'Cats', x: '2017', y: 8 },
    { name: 'Cats', x: '2018', y: 6 }
  ];

  useEffect(() => {
    // Workaround for documentation-framework issue https://github.com/patternfly/patternfly-react/issues/11455
    const sheet = (() => {
      const style = document.createElement('style');
      document.head.appendChild(style);
      return style.sheet;
    })();

    sheet.insertRule(
      '.ws-react-charts-sparkline-overflow { margin-left: 50px; margin-top: 50px; height: 135px; }',
      sheet.cssRules.length
    );
    sheet.insertRule('.ws-react-charts-sparkline-overflow svg { overflow: visible; }', sheet.cssRules.length);
  }, []);
  return (
    <div className="ws-react-charts-sparkline-overflow">
      <div style={{ height: '100px', width: '400px' }}>
        <ChartGroup
          ariaDesc="Average number of pets"
          ariaTitle="Sparkline chart example"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}
          height={100}
          maxDomain={{ y: 9 }}
          name="chart2"
          padding={0}
          themeColor={ChartThemeColor.green}
          width={400}
        >
          <ChartArea data={data} />
        </ChartGroup>
      </div>
      <ChartContainer title="CPU utilization">
        <ChartLabel text="CPU utilization" dy={15} />
      </ChartContainer>
    </div>
  );
};
