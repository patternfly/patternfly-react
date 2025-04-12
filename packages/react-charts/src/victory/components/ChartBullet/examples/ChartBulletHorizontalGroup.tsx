import { ChartBullet, ChartContainer } from '@patternfly/react-charts/victory';

export const ChartBulletHorizontalGroup: React.FunctionComponent = () => (
  <div style={{ height: '500px', width: '600px' }}>
    <ChartContainer title="Bullet chart example" height={500} width={600}>
      <ChartBullet
        comparativeWarningMeasureData={[{ name: 'Warning', y: 78 }]}
        constrainToVisibleArea
        height={500}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart14"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 75
        }}
        primarySegmentedMeasureData={[
          { name: 'Measure', y: 15 },
          { name: 'Measure', y: 50 }
        ]}
        qualitativeRangeData={[
          { name: 'Range', y: 40 },
          { name: 'Range', y: 65 }
        ]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
        constrainToVisibleArea
        height={500}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart15"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 300
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
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{ name: 'Warning', y: 98 }]}
        constrainToVisibleArea
        height={500}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart16"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 525
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
        width={600}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{ name: 'Warning', y: 78 }]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        height={500}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart17"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 750
        }}
        primarySegmentedMeasureData={[
          { name: 'Measure', y: 15 },
          { name: 'Measure', y: 50 }
        ]}
        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
        qualitativeRangeData={[
          { name: 'Range', y: 40 },
          { name: 'Range', y: 65 }
        ]}
        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
        standalone={false}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </ChartContainer>
  </div>
);
