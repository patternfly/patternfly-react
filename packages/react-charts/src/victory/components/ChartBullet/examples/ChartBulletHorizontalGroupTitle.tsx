import { ChartBullet, ChartContainer } from '@patternfly/react-charts/victory';

export const ChartBulletHorizontalGroupTitle: React.FunctionComponent = () => (
  <div style={{ height: '600px', width: '600px' }}>
    <ChartContainer title="Bullet chart example" height={600} width={600}>
      <ChartBullet
        comparativeWarningMeasureData={[{ name: 'Warning', y: 78 }]}
        constrainToVisibleArea
        groupSubTitle="Measure details"
        groupTitle="Text label"
        height={575}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart22"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 275 // Adjusted to accommodate group labels
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
        height={600}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart23"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 500 // Adjusted to accommodate group labels
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
        height={600}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart24"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 725 // Adjusted to accommodate group labels
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
        height={600}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart25"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 950 // Adjusted to accommodate group labels
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
