import { ChartLabel, ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';
import { Tooltip } from '@patternfly/react-core';
import { useRef } from 'react';

interface PetData {
  x: string;
  y: number;
}

export const ChartLegendTooltips: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];

  // Custom legend label component
  // Note: Tooltip wraps children with a div tag, so we use a reference to ChartLabel instead
  const LegendLabel = ({ datum, ...rest }) => {
    const ref = useRef(null);
    return (
      <g ref={ref}>
        <ChartLabel {...rest} />
        <Tooltip content={datum.name} enableFlip triggerRef={ref} />
      </g>
    );
  };

  // Custom legend component
  const getLegend = (legendData) => <ChartLegend data={legendData} labelComponent={<LegendLabel />} />;

  return (
    <div style={{ height: '275px', width: '300px' }}>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        constrainToVisibleArea
        data={data}
        height={275}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        legendComponent={getLegend([{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }])}
        legendPosition="bottom"
        name="chart7"
        padding={{
          bottom: 65,
          left: 20,
          right: 20,
          top: 20
        }}
        themeColor={ChartThemeColor.multiOrdered}
        width={300}
      />
    </div>
  );
};
