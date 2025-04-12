import { ChartBullet, ChartContainer } from '@patternfly/react-charts/victory';

export const ChartBulletVerticalGroup: React.FunctionComponent = () => (
  <div style={{ height: '600px', width: '500px' }}>
    <ChartContainer title="Bullet chart example" height={600} width={500}>
      <ChartBullet
        comparativeWarningMeasureData={[{ name: 'Warning', y: 78 }]}
        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart18"
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
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
        width={500}
      />
      <ChartBullet
        comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart19"
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 300,
          right: 50,
          top: 50
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
        name="chart20"
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 550,
          right: 50,
          top: 50
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
        comparativeWarningMeasureData={[{ name: 'Warning', y: 78 }]}
        constrainToVisibleArea
        height={600}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart21"
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 800,
          right: 50,
          top: 50
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
        width={500}
      />
    </ChartContainer>
  </div>
);
