import { setupJestCanvasMock } from 'jest-canvas-mock';
import { render, screen } from '@testing-library/react';
import { Charts } from '../../Charts';

import * as echarts from 'echarts/core';
import { SankeyChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

// Register required components
echarts.use([SankeyChart, SVGRenderer, TitleComponent, TooltipComponent]);

beforeEach(() => {
  jest.resetAllMocks();
  jest.mock('echarts');
  setupJestCanvasMock();
});

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

const props: any = {
  height: 400,
  id: 'sankey-chart',
  option: {
    series: [{ data, links, type: 'sankey' }],
    title: {
      text: 'This is a Sankey chart'
    }
  },
  width: 800
};

// Remove dynamic _echarts_instance_ ID
const removeInstanceID = (fragment) => {
  fragment.getElementById('sankey-chart').removeAttribute('_echarts_instance_');
  return fragment;
};

test('renders component', () => {
  const { asFragment } = render(<Charts {...props} />);
  expect(removeInstanceID(asFragment())).toMatchSnapshot();
});

test('renders title', async () => {
  render(<Charts {...props} />);

  const title = await screen.findByText(props.option.title.text);
  expect(title).toMatchSnapshot();
});

test('renders height and width', async () => {
  const { asFragment } = render(<Charts {...props} />);

  const svg = asFragment().querySelector('svg');
  expect(svg).toHaveAttribute('height', `${props.height}`);
  expect(svg).toHaveAttribute('width', `${props.width}`);
});
