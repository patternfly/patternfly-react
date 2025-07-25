import { Switch } from '@patternfly/react-core';
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts/victory';
import { useState } from 'react';

interface PetData {
  name?: string;
  x?: string;
  y?: number;
}

export const SkeletonsDonutChart: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];

  return (
    <>
      <Switch id="donut-skeleton-switch" label="Enable skeleton" isChecked={isChecked} onChange={handleChange} />
      <div style={{ height: '230px', width: '230px' }}>
        <ChartDonut
          ariaDesc="Average number of pets"
          ariaTitle="Donut chart example"
          constrainToVisibleArea
          data={data}
          labels={({ datum }) => `${datum.x}: ${datum.y}%`}
          name="chart5"
          subTitle="Pets"
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          title="100"
        />
      </div>
    </>
  );
};
