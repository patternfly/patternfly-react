import { ChartBullet, ChartContainer } from '@patternfly/react-charts/victory';

interface ChartData {
  name: string;
  y?: number;
}

export const ChartBulletVerticalGroupTitle: React.FunctionComponent = () => {
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: 78 }];
  const primarySegmentedMeasureData: ChartData[] = [
    { name: 'Measure', y: 15 },
    { name: 'Measure', y: 50 }
  ];
  const qualitativeRangeData: ChartData[] = [
    { name: 'Range', y: 40 },
    { name: 'Range', y: 65 }
  ];

  return (
    <div style={{ height: '600px', width: '500px' }}>
      <ChartContainer title="Bullet chart example" height={600} width={500}>
        <ChartBullet
          comparativeWarningMeasureData={comparativeWarningMeasureData}
          comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
          constrainToVisibleArea
          groupSubTitle="Measure details"
          groupTitle="Text label"
          height={600}
          horizontal={false}
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
          maxDomain={{ y: 100 }}
          name="chart26"
          padding={{
            bottom: 125, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 150 // Adjusted to accommodate group labels
          }}
          primarySegmentedMeasureData={primarySegmentedMeasureData}
          primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
          qualitativeRangeData={qualitativeRangeData}
          qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
          standalone={false}
          subTitle="Measure details"
          title="Text label"
          width={500}
        />
        <ChartBullet
          comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
          constrainToVisibleArea
          height={600}
          horizontal={false}
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
          maxDomain={{ y: 100 }}
          name="chart27"
          padding={{
            bottom: 125, // Adjusted to accommodate legend
            left: 300,
            right: 50,
            top: 150 // Adjusted to accommodate group labels
          }}
          primarySegmentedMeasureData={[
            { name: 'Measure', y: 25 },
            { name: 'Measure', y: 60 }
          ]}
          qualitativeRangeData={[
            { name: 'Range', y: 50 },
            { name: 'Range', y: 75 }
          ]}
          standalone={false}
          subTitle="Measure details"
          title="Text label"
          width={500}
        />
        <ChartBullet
          comparativeWarningMeasureData={[{ name: 'Warning', y: 98 }]}
          constrainToVisibleArea
          height={600}
          horizontal={false}
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
          maxDomain={{ y: 100 }}
          name="chart28"
          padding={{
            bottom: 125, // Adjusted to accommodate legend
            left: 550,
            right: 50,
            top: 150 // Adjusted to accommodate group labels
          }}
          primarySegmentedMeasureData={[
            { name: 'Measure', y: 35 },
            { name: 'Measure', y: 70 }
          ]}
          qualitativeRangeData={[
            { name: 'Range', y: 60 },
            { name: 'Range', y: 85 }
          ]}
          standalone={false}
          subTitle="Measure details"
          title="Text label"
          width={500}
        />
        <ChartBullet
          comparativeWarningMeasureData={comparativeWarningMeasureData}
          constrainToVisibleArea
          height={600}
          horizontal={false}
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
          maxDomain={{ y: 100 }}
          name="chart29"
          padding={{
            bottom: 125, // Adjusted to accommodate legend
            left: 800,
            right: 50,
            top: 150 // Adjusted to accommodate group labels
          }}
          primarySegmentedMeasureData={primarySegmentedMeasureData}
          qualitativeRangeData={qualitativeRangeData}
          standalone={false}
          subTitle="Measure details"
          title="Text label"
          width={500}
        />
      </ChartContainer>
    </div>
  );
};
