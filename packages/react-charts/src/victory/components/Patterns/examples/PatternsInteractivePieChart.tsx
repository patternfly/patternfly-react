import {
  Chart,
  ChartLegend,
  ChartThemeColor,
  ChartPie,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles
} from '@patternfly/react-charts/victory';
import { useState } from 'react';

interface PetData {
  x?: string;
  y?: number;
}

export const PatternsInteractivePieChart: React.FunctionComponent = () => {
  const [hiddenSeries, setHiddenSeries] = useState(new Set());

  const series = [
    {
      datapoints: { x: 'Cats', y: 25 },
      legendItem: { name: 'Cats: 35' }
    },
    {
      datapoints: { x: 'Dogs', y: 25 },
      legendItem: { name: 'Dogs: 25' }
    },
    {
      datapoints: { x: 'Birds', y: 10 },
      legendItem: { name: 'Birds: 10' }
    }
  ];

  // Returns groups of chart names associated with each data series
  const getChartNames = () => {
    const result = [];
    series.map((_, _index) => {
      // Provide names for each series hidden / shown -- use the same name for a pie chart
      result.push(['pie']);
    });
    return result;
  };

  // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend
  const getEvents = () =>
    getInteractiveLegendEvents({
      chartNames: getChartNames(),
      isHidden,
      legendName: 'chart7-ChartLegend',
      onLegendClick: handleLegendClick
    });

  // Returns legend data styled per hiddenSeries
  const getLegendData = () =>
    series.map((s, index) => ({
      ...s.legendItem, // name property
      ...getInteractiveLegendItemStyles(hiddenSeries.has(index)) // hidden styles
    }));

  // Hide each data series individually
  const handleLegendClick = (props) => {
    if (!hiddenSeries.delete(props.index)) {
      hiddenSeries.add(props.index);
    }
    setHiddenSeries(new Set(hiddenSeries));
  };

  // Returns true if data series is hidden
  const isHidden = (index) => hiddenSeries.has(index);

  const data: PetData[] = [];
  series.map((s, index) => {
    data.push(!hiddenSeries.has(index) ? s.datapoints : { y: null });
  });

  return (
    <div style={{ height: '275px', width: '500px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        events={getEvents()}
        hasPatterns
        height={275}
        legendComponent={<ChartLegend name={'chart7-ChartLegend'} data={getLegendData()} />}
        legendPosition="bottom"
        name="chart7"
        padding={{
          bottom: 65,
          left: 20,
          right: 20,
          top: 20
        }}
        showAxis={false}
        themeColor={ChartThemeColor.multiUnordered}
        width={500}
      >
        <ChartPie constrainToVisibleArea data={data} labels={({ datum }) => `${datum.x}: ${datum.y}`} name="pie" />
      </Chart>
    </div>
  );
};
