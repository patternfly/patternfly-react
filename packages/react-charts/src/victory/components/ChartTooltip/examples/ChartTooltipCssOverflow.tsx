import {
  ChartArea,
  ChartGroup,
  ChartLabel,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';

interface PetData {
  name: string;
  x: string;
  y: number;
}

export const ChartTooltipCssOverflow: React.FunctionComponent = () => {
  const sheet = (() => {
    const style = document.createElement('style');
    document.head.appendChild(style);
    return style.sheet;
  })();

  sheet.insertRule(
    '.ws-react-charts-tooltip-overflow { margin-left: 50px; margin-top: 50px; height: 135px; }',
    sheet.cssRules.length
  );

  sheet.insertRule('.ws-react-charts-tooltip-overflow svg { overflow: visible; }', sheet.cssRules.length);

  const data: PetData[] = [
    { name: 'Cats', x: '2015', y: 3 },
    { name: 'Cats', x: '2016', y: 4 },
    { name: 'Cats', x: '2017', y: 8 },
    { name: 'Cats', x: '2018', y: 6 }
  ];
  return (
    <div className="ws-react-charts-tooltip-overflow">
      <div style={{ height: '100px', width: '400px' }}>
        <ChartGroup
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="CSS overflow example chart title"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}
          height={100}
          maxDomain={{ y: 9 }}
          name="chart9"
          padding={0}
          themeColor={ChartThemeColor.green}
          width={400}
        >
          <ChartArea data={data} />
          <ChartLabel text="CPU utilization" dy={120} />
        </ChartGroup>
      </div>
    </div>
  );
};
