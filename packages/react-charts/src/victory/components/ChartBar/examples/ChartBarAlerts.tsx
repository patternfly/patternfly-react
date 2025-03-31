import {
  Chart,
  ChartAxis,
  ChartBar,
  ChartGroup,
  ChartLabel,
  ChartTooltip,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
/* eslint-disable-next-line */
import t_global_color_status_danger_100 from '@patternfly/react-tokens/dist/esm/t_global_color_status_danger_100';
/* eslint-disable-next-line */
import t_global_color_status_info_100 from '@patternfly/react-tokens/dist/esm/t_global_color_status_info_100';
/* eslint-disable-next-line */
import t_global_color_status_warning_100 from '@patternfly/react-tokens/dist/esm/t_global_color_status_warning_100';

interface AlertData {
  y0: Date;
  y: Date;
  severity: string;
  x?: number;
  fill?: string;
}

export const ChartBarAlerts: React.FunctionComponent = () => {
  // Start = y0, end = y
  const alerts = [
    [
      { y0: new Date('2024-08-06T01:30:00'), y: new Date('2024-08-09T02:30:00'), severity: 'danger' },
      { y0: new Date('2024-08-10T05:30:00'), y: new Date('2024-08-10T20:00:00'), severity: 'danger' },
      { y0: new Date('2024-08-12T10:00:00'), y: new Date('2024-08-13T10:30:00'), severity: 'danger' }
    ],
    [
      { y0: new Date('2024-08-06T01:30:00'), y: new Date('2024-08-07T02:30:00'), severity: 'danger' },
      { y0: new Date('2024-08-07T07:30:00'), y: new Date('2024-08-09T09:30:00'), severity: 'danger' },
      { y0: new Date('2024-08-10T05:30:00'), y: new Date('2024-08-10T20:00:00'), severity: 'warn' },
      { y0: new Date('2024-08-12T10:00:00'), y: new Date('2024-08-13T10:30:00'), severity: 'danger' }
    ],
    [
      { y0: new Date('2024-08-06T01:30:00'), y: new Date('2024-08-07T02:30:00'), severity: 'danger' },
      { y0: new Date('2024-08-08T07:30:00'), y: new Date('2024-08-09T09:30:00'), severity: 'danger' },
      { y0: new Date('2024-08-10T05:30:00'), y: new Date('2024-08-10T20:00:00'), severity: 'info' },
      { y0: new Date('2024-08-12T10:00:00'), y: new Date('2024-08-13T10:30:00'), severity: 'warn' }
    ],
    [
      { y0: new Date('2024-08-06T01:30:00'), y: new Date('2024-08-08T02:30:00'), severity: 'info' },
      { y0: new Date('2024-08-08T07:30:00'), y: new Date('2024-08-09T09:30:00'), severity: 'info' },
      { y0: new Date('2024-08-10T05:30:00'), y: new Date('2024-08-11T20:00:00'), severity: 'warn' },
      { y0: new Date('2024-08-12T10:00:00'), y: new Date('2024-08-13T10:30:00'), severity: 'info' }
    ],
    [
      { y0: new Date('2024-08-06T01:30:00'), y: new Date('2024-08-07T02:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-08T07:30:00'), y: new Date('2024-08-09T09:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-09T11:30:00'), y: new Date('2024-08-10T20:00:00'), severity: 'warn' },
      { y0: new Date('2024-08-12T10:00:00'), y: new Date('2024-08-13T10:30:00'), severity: 'warn' }
    ],
    [
      { y0: new Date('2024-08-06T01:30:00'), y: new Date('2024-08-08T02:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-08T07:30:00'), y: new Date('2024-08-09T09:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-10T05:30:00'), y: new Date('2024-08-11T20:00:00'), severity: 'warn' },
      { y0: new Date('2024-08-12T10:00:00'), y: new Date('2024-08-13T10:30:00'), severity: 'warn' }
    ],
    [
      { y0: new Date('2024-08-06T01:30:00'), y: new Date('2024-08-07T02:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-07T04:30:00'), y: new Date('2024-08-08T05:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-08T07:30:00'), y: new Date('2024-08-09T09:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-10T05:30:00'), y: new Date('2024-08-10T20:00:00'), severity: 'warn' },
      { y0: new Date('2024-08-11T05:30:00'), y: new Date('2024-08-11T20:00:00'), severity: 'warn' },
      { y0: new Date('2024-08-12T10:00:00'), y: new Date('2024-08-13T10:30:00'), severity: 'warn' }
    ],
    [
      { y0: new Date('2024-08-06T01:30:00'), y: new Date('2024-08-08T02:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-08T07:30:00'), y: new Date('2024-08-09T09:30:00'), severity: 'warn' },
      { y0: new Date('2024-08-10T05:30:00'), y: new Date('2024-08-11T20:00:00'), severity: 'warn' },
      { y0: new Date('2024-08-12T10:00:00'), y: new Date('2024-08-13T10:30:00'), severity: 'warn' }
    ]
  ];

  const legendData = [
    /* eslint-disable-next-line */
    { name: 'Danger', symbol: { fill: t_global_color_status_danger_100.var } },
    /* eslint-disable-next-line */
    { name: 'Info', symbol: { fill: t_global_color_status_info_100.var } },
    /* eslint-disable-next-line */
    { name: 'Warning', symbol: { fill: t_global_color_status_warning_100.var } }
  ];

  const getSeverityColor = (severity) => {
    if (severity === 'danger') {
      /* eslint-disable-next-line */
      return t_global_color_status_danger_100.var;
    } else if (severity === 'warn') {
      /* eslint-disable-next-line */
      return t_global_color_status_warning_100.var;
    } else {
      /* eslint-disable-next-line */
      return t_global_color_status_info_100.var;
    }
  };

  const formatDate = (date: Date, isTime: boolean) => {
    const dateString = date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const timeString = date?.toLocaleTimeString('en-US', { hour12: false });
    return isTime ? `${dateString} ${timeString}` : dateString;
  };

  const getChart = (alert: AlertData[], index: number) => {
    const data: AlertData[] = [];

    alert?.map((datum) => {
      data.push({
        ...datum,
        x: alerts.length - index,
        fill: getSeverityColor(datum.severity)
      });
    });

    if (data?.length === 0) {
      return null;
    }
    return (
      <ChartBar
        data={data}
        key={index}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
            stroke: ({ datum }) => datum.fill
          }
        }}
      />
    );
  };

  return (
    <div style={{ height: '400px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Bar chart example"
        containerComponent={
          <ChartVoronoiContainer
            labelComponent={
              <ChartTooltip
                constrainToVisibleArea
                dx={({ x, x0 }) => -(x - x0) / 2} // Position tooltip so pointer appears centered
                dy={-5} // Position tooltip so pointer appears above bar
                labelComponent={<ChartLabel dx={-68} textAnchor="start" />}
                orientation="top" // Mimic bullet chart tooltip orientation
              />
            }
            labels={({ datum }) =>
              `Severity: ${datum.severity}\nStart: ${formatDate(new Date(datum.y0), true)}\nEnd: ${formatDate(new Date(datum.y), true)}`
            }
          />
        }
        domainPadding={{ x: [20, 20], y: [20, 20] }}
        legendData={legendData}
        legendPosition="bottom-left"
        height={400}
        name="chart5"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 100,
          right: 50, // Adjusted to accommodate tooltip
          top: 50
        }}
        width={450}
      >
        <ChartAxis
          dependentAxis
          showGrid
          tickFormat={(t) => new Date(t).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          tickValues={[
            new Date('2024-08-06T00:00:00'),
            new Date('2024-08-08T00:00:00'),
            new Date('2024-08-10T00:00:00'),
            new Date('2024-08-12T00:00:00')
          ]}
        />
        <ChartAxis
          axisLabelComponent={<ChartLabel angle={0} dy={-125} />}
          label="Incidents"
          padding={{ top: 20, bottom: 60 }}
          style={{
            axis: {
              stroke: 'transparent'
            },
            ticks: {
              stroke: 'transparent'
            },
            tickLabels: {
              fill: 'transparent'
            }
          }}
        />
        <ChartGroup horizontal>{alerts.map((alert, index) => getChart(alert, index))}</ChartGroup>
      </Chart>
    </div>
  );
};
