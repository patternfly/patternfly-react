import {
  Chart,
  ChartAxis,
  ChartBar,
  ChartStack,
  ChartThemeColor,
  ChartTooltip
} from '@patternfly/react-charts/victory';

interface PetData {
  name?: string;
  x?: string;
  y?: number;
  label?: string;
}

export const ChartTooltipDataLabel: React.FunctionComponent = () => {
  const legendData: PetData[] = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }];
  const data1: PetData[] = [
    { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' },
    { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' },
    { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' },
    { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }
  ];

  const data2: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' },
    { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' },
    { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' },
    { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }
  ];

  const data3: PetData[] = [
    { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' },
    { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' },
    { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' },
    { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }
  ];

  const data4: PetData[] = [
    { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' },
    { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' },
    { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' },
    { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }
  ];

  return (
    <div style={{ height: '275px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
        ariaTitle="Data label example chart title"
        domainPadding={{ x: [30, 25] }}
        legendData={legendData}
        legendPosition="bottom-left"
        height={275}
        name="chart6"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        themeColor={ChartThemeColor.multiOrdered}
        width={450}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartStack horizontal>
          <ChartBar data={data1} labelComponent={<ChartTooltip constrainToVisibleArea />} />
          <ChartBar data={data2} labelComponent={<ChartTooltip constrainToVisibleArea />} />
          <ChartBar data={data3} labelComponent={<ChartTooltip constrainToVisibleArea />} />
          <ChartBar data={data4} labelComponent={<ChartTooltip constrainToVisibleArea />} />
        </ChartStack>
      </Chart>
    </div>
  );
};
