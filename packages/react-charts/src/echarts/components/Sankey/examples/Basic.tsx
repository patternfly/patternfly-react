import React from 'react';
import { Sankey } from '@patternfly/react-charts/echarts';

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

  return (
    <div>
      <Sankey
        height={400}
        id="basic-chart"
        nodeSelector="html"
        option={{
          series: [{ data, links }],
          title: {
            subtext: 'This is a Sankey chart',
            left: 'center'
          },
          tooltip: {
            valueFormatter: (value) => `${value} GiB`
          }
        }}
        width={825}
      />
    </div>
  );
};
