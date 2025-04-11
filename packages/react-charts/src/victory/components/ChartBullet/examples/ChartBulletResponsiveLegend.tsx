import { ChartBullet } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
interface ChartData {
  name: string;
  y?: number;
}
export const BulletChartResponsiveLegend: React.FunctionComponent = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [extraHeight, setExtraHeight] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(0);
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: 88 }];
  const comparativeWarningMeasureLegendData: ChartData[] = [{ name: 'Warning' }];
  const primarySegmentedMeasureData: ChartData[] = [
    { name: 'Measure', y: 25 },
    { name: 'Measure', y: 60 }
  ];
  const primarySegmentedMeasureLegendData: ChartData[] = [{ name: 'Measure 1' }, { name: 'Measure 2' }];
  const qualitativeRangeData: ChartData[] = [
    { name: 'Range', y: 50 },
    { name: 'Range', y: 75 }
  ];
  const qualitativeRangeLegendData: ChartData[] = [{ name: 'Range 1' }, { name: 'Range 2' }];
  const handleResize = (): void => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };
  const handleLegendAllowWrap = (newExtraHeight: number): void => {
    if (newExtraHeight !== extraHeight) {
      setExtraHeight(newExtraHeight);
    }
  };
  const getHeight = (baseHeight: number): number => baseHeight + extraHeight;

  React.useEffect(() => {
    let observer: () => void;

    if (containerRef.current) {
      observer = getResizeObserver(containerRef.current, handleResize);
      handleResize();
    }
    return () => {
      if (observer) {
        observer();
      }
    };
  }, []);

  const height: number = getHeight(200);
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
