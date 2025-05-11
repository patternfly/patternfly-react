import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import { VictoryZoomContainer } from 'victory-zoom-container';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
  symbol?: { type: string };
}

export const ChartLineMultiColor: React.FunctionComponent = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);

  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  React.useEffect(() => {
    const observer = getResizeObserver(containerRef.current, handleResize);
    handleResize();
    return () => {
      observer();
    };
  }, []);

  const legendData: PetData[] = [
    { name: 'Cats' },
    { name: 'Dogs', symbol: { type: 'dash' } },
    { name: 'Birds' },
    { name: 'Mice' }
  ];
  const data1: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 3 }
  ];
  const data2: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 1 },
    { name: 'Dogs', x: '2017', y: 7 },
    { name: 'Dogs', x: '2018', y: 4 }
  ];
  const data3: PetData[] = [
    { name: 'Birds', x: '2015', y: 3 },
    { name: 'Birds', x: '2016', y: 4 },
    { name: 'Birds', x: '2017', y: 9 },
    { name: 'Birds', x: '2018', y: 5 }
  ];
  const data4: PetData[] = [
    { name: 'Mice', x: '2015', y: 3 },
    { name: 'Mice', x: '2016', y: 3 },
    { name: 'Mice', x: '2017', y: 8 },
    { name: 'Mice', x: '2018', y: 7 }
  ];

  return (
    <div ref={containerRef}>
      <div style={{ height: '275px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Line chart example"
          containerComponent={<VictoryZoomContainer zoomDimension="x" />}
          legendData={legendData}
          legendPosition="bottom-left"
          height={275}
          maxDomain={{ y: 10 }}
          minDomain={{ y: 0 }}
          name="chart3"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          themeColor={ChartThemeColor.multiUnordered}
          width={width}
        >
          <ChartAxis tickValues={[2, 3, 4]} />
          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
          <ChartGroup>
            <ChartLine data={data1} />
            <ChartLine
              data={data2}
              style={{
                data: {
                  strokeDasharray: '3,3'
                }
              }}
            />
            <ChartLine data={data3} />
            <ChartLine data={data4} />
          </ChartGroup>
        </Chart>
      </div>
    </div>
  );
};
