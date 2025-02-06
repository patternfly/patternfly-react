import React from 'react';
import { Sankey, ThemeColor } from '@patternfly/react-charts/echarts';
import { getResizeObserver } from '@patternfly/react-core';

export const FormBasic: React.FunctionComponent = () => {
  const data = [
    {
      name: 'a'
    },
    {
      name: 'b'
    },
    {
      name: 'a1'
    },
    {
      name: 'a2'
    },
    {
      name: 'b1'
    },
    {
      name: 'c'
    }
  ];

  const links = [
    {
      source: 'a',
      target: 'a1',
      value: 5
    },
    {
      source: 'a',
      target: 'a2',
      value: 3
    },
    {
      source: 'b',
      target: 'b1',
      value: 8
    },
    {
      source: 'a',
      target: 'b1',
      value: 3
    },
    {
      source: 'b1',
      target: 'a1',
      value: 1
    },
    {
      source: 'b1',
      target: 'c',
      value: 2
    }
  ];

  const legend = {
    orient: 'vertical',
    left: 'left',
    data: ['a', 'a1', 'b', 'b1', 'c']
  };

  // let observer = () => {};
  const containerRef = React.useRef<HTMLDivElement>();
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && containerRef.current.clientWidth) {
        setWidth(containerRef.current.clientWidth);
      }
    };
    let observer = () => {};
    observer = getResizeObserver(containerRef.current, handleResize);

    return () => {
      observer();
    };
  }, [containerRef, width]);

  return (
    <div ref={containerRef}>
      <Sankey
        height={400}
        id="chart1"
        legend={legend}
        nodeSelector="html"
        series={[{ data, links }]}
        themeColor={ThemeColor.multiUnordered}
        title={{
          subtext: 'This is a Sankey chart',
          left: 'center'
        }}
        tooltip={{
          valueFormatter: (value) => `${value} GiB`
        }}
        width={width}
      />
    </div>
  );
};
