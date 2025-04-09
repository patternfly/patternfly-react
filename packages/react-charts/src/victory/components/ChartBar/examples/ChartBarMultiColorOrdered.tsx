import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor } from '@patternfly/react-charts/victory';
import { VictoryZoomContainer } from 'victory-zoom-container';

interface PetData {
  name: string;
  x: string;
  y: number;
}

export const ChartBarMultiColorOrdered: React.FunctionComponent = () => {
  const catsData: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 3 }
  ];

  const dogsData: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 1 },
    { name: 'Dogs', x: '2017', y: 7 },
    { name: 'Dogs', x: '2018', y: 4 }
  ];

  const birdsData: PetData[] = [
    { name: 'Birds', x: '2015', y: 4 },
    { name: 'Birds', x: '2016', y: 4 },
    { name: 'Birds', x: '2017', y: 9 },
    { name: 'Birds', x: '2018', y: 7 }
  ];

  const miceData: PetData[] = [
    { name: 'Mice', x: '2015', y: 3 },
    { name: 'Mice', x: '2016', y: 3 },
    { name: 'Mice', x: '2017', y: 8 },
    { name: 'Mice', x: '2018', y: 5 }
  ];

  const legendData = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }];
  return (
    <div style={{ height: '400px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Bar chart example"
        containerComponent={<VictoryZoomContainer />}
        domainPadding={{ x: [30, 25] }}
        legendData={legendData}
        legendPosition="bottom-left"
        height={400}
        name="chart3"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 100, // Adjusted to accommodate tooltip
          top: 50
        }}
        themeColor={ChartThemeColor.multiOrdered}
        width={450}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartGroup offset={11} horizontal>
          <ChartBar data={catsData} />
          <ChartBar data={dogsData} />
          <ChartBar data={birdsData} />
          <ChartBar data={miceData} />
        </ChartGroup>
      </Chart>
    </div>
  );
};
