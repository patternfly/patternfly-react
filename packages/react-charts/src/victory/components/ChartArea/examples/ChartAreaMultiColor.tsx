import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

interface PetData {
  name: string;
  x: string;
  y: number;
}
export const MultiColorChart: React.FunctionComponent = () => {
  const [width, setWidth] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const catsData: PetData[] = [
    { name: 'Cats', x: '2015', y: 3 },
    { name: 'Cats', x: '2016', y: 4 },
    { name: 'Cats', x: '2017', y: 8 },
    { name: 'Cats', x: '2018', y: 6 }
  ];

  const dogsData: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 3 },
    { name: 'Dogs', x: '2017', y: 4 },
    { name: 'Dogs', x: '2018', y: 5 },
    { name: 'Dogs', x: '2019', y: 6 }
  ];

  const birdsData: PetData[] = [
    { name: 'Birds', x: '2015', y: 1 },
    { name: 'Birds', x: '2016', y: 2 },
    { name: 'Birds', x: '2017', y: 3 },
    { name: 'Birds', x: '2018', y: 2 },
    { name: 'Birds', x: '2019', y: 4 }
  ];

  const legendData = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }];

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

  return (
    <div ref={containerRef} style={{ height: '225px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Area chart example"
        containerComponent={
          <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
        }
        legendData={legendData}
        legendPosition="bottom-left"
        height={225}
        name="chart3"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        maxDomain={{ y: 9 }}
        themeColor={ChartThemeColor.multiUnordered}
        width={width}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartGroup>
          <ChartArea data={catsData} interpolation="monotoneX" />
          <ChartArea data={dogsData} interpolation="monotoneX" />
          <ChartArea data={birdsData} interpolation="monotoneX" />
        </ChartGroup>
      </Chart>
    </div>
  );
};
