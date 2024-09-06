import React from 'react';
import { Sankey, ThemeColor } from '@patternfly/react-charts/echarts';
import { Switch } from '@patternfly/react-core';

export const Skeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

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
    <>
      <Switch id="area-skeleton-switch" label="Enable skeleton" isChecked={isChecked} onChange={handleChange} />
      <Sankey
        height={400}
        id="skeleton-chart"
        nodeSelector="html"
        option={{
          series: [{ data, links }],
          title: {
            text: 'This is a Sankey chart',
            left: 'center'
          },
          tooltip: {
            valueFormatter: (value) => `${value} GiB`
          }
        }}
        themeColor={isChecked ? ThemeColor.skeleton : ThemeColor.green}
        width={825}
      />
    </>
  );
};
