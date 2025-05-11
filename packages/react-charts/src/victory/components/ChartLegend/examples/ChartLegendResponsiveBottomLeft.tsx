import { ChartBullet } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

interface Data {
  name?: string;
  y?: number;
}

export const ChartLegendResponsiveBottomLeft: React.FunctionComponent = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [extraHeight, setExtraHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  const handleLegendAllowWrap = (newExtraHeight: number) => {
    if (newExtraHeight !== extraHeight) {
      setExtraHeight(newExtraHeight);
    }
  };

  const getHeight = (baseHeight: number) => baseHeight + extraHeight;

  React.useEffect(() => {
    const observer = getResizeObserver(containerRef.current, handleResize);
    handleResize();

    return () => {
      observer();
    };
  }, []);

  const comparativeWarningMeasureData: Data[] = [{ name: 'Warning', y: 88 }];
  const comparativeWarningMeasureLegendData: Data[] = [{ name: 'Warning' }];
  const primarySegmentedMeasureData: Data[] = [
    { name: 'Measure', y: 25 },
    { name: 'Measure', y: 60 }
  ];
  const primarySegmentedMeasureLegendData: Data[] = [{ name: 'Measure 1' }, { name: 'Measure 2' }];
  const qualitativeRangeData: Data[] = [
    { name: 'Range', y: 50 },
    { name: 'Range', y: 75 }
  ];
  const qualitativeRangeLegendData: Data[] = [{ name: 'Range 1' }, { name: 'Range 2' }];
  const height = getHeight(200);

  return (
    <div ref={containerRef} style={{ height: height + 'px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={comparativeWarningMeasureData}
        comparativeWarningMeasureLegendData={comparativeWarningMeasureLegendData}
        constrainToVisibleArea
        height={height}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        legendAllowWrap={handleLegendAllowWrap}
        legendPosition="bottom-left"
        maxDomain={{ y: 100 }}
        name="chart3"
        padding={{
          bottom: 50,
          left: 50,
          right: 50,
          top: 100 // Adjusted to accommodate labels
        }}
        primarySegmentedMeasureData={primarySegmentedMeasureData}
        primarySegmentedMeasureLegendData={primarySegmentedMeasureLegendData}
        qualitativeRangeData={qualitativeRangeData}
        qualitativeRangeLegendData={qualitativeRangeLegendData}
        subTitle="Measure details"
        title="Text label"
        titlePosition="top-left"
        width={width}
      />
    </div>
  );
};
