import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';
import { Button, Tooltip, TooltipPosition } from '@patternfly/react-core';
import { useState } from 'react';

interface Data {
  x: string;
  y: number;
}

export const ChartTooltipWrappedChart: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(!isVisible);
  };

  const data: Data[] = [
    { x: 'Warning at 60%', y: 60 },
    { x: 'Danger at 90%', y: 90 }
  ];

  return (
    <div>
      <div style={{ height: '230px', width: '230px' }}>
        <Tooltip
          content={<div>My custom tooltip</div>}
          isVisible={isVisible}
          position={TooltipPosition.right}
          trigger="manual"
        >
          <ChartDonutThreshold
            allowTooltip={false}
            ariaDesc="Storage capacity  - possibly more information to summarize the data in the chart."
            ariaTitle="Wrapped example chart title"
            data={data}
            labels={() => null}
            name="chart10"
          >
            <ChartDonutUtilization
              allowTooltip={false}
              data={{ x: 'Storage capacity', y: 45 }}
              labels={() => null}
              subTitle="of 100 GBps"
              title="45%"
            />
          </ChartDonutThreshold>
        </Tooltip>
      </div>
      <div style={{ width: '230px', textAlign: 'center' }}>
        <Button onClick={showTooltip}>Show Tooltip</Button>
      </div>
    </div>
  );
};
