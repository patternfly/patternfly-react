import { ChartLabel, ChartLegend, ChartDonut, ChartThemeColor } from '@patternfly/react-charts/victory';

interface PetData {
  x: string;
  y: number;
}

export const ChartLegendLayout: React.FunctionComponent = () => {
  // Custom legend label component
  const LegendLabel = ({ values, ...rest }) => (
    <ChartLabel {...rest} style={[{ fontWeight: 700 }, {}]} text={[values[rest.index], rest.text]} />
  );

  // Custom legend component
  const getLegend = (legendData, values) => (
    <ChartLegend
      data={legendData}
      gutter={25}
      itemsPerRow={2}
      labelComponent={<LegendLabel dy={10} lineHeight={1.5} values={values} />}
      rowGutter={20}
    />
  );

  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];

  return (
    <div style={{ height: '230px', width: '375px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        constrainToVisibleArea
        data={data}
        height={230}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        legendComponent={getLegend([{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }], [35, 55, 10])}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart9"
        padding={{
          bottom: 20,
          left: 20,
          right: 140, // Adjusted to accommodate legend
          top: 20
        }}
        subTitle="Pets"
        title="100"
        themeColor={ChartThemeColor.multiOrdered}
        width={375}
      />
    </div>
  );
};
