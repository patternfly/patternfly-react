import * as React from 'react';
// import * as echarts from 'echarts';
import { render } from '@testing-library/react';
import { Sankey } from './Sankey';

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

let spy: any;

// beforeAll(() => {
//   console.log(`*** TEST 1`);
//   spy = jest.spyOn(echarts, 'getInstanceByDom').mockImplementation(
//     () =>
//       ({
//         hideLoading: jest.fn(),
//         setOption: jest.fn(),
//         showLoading: jest.fn()
//       }) as any
//   );
// });
//
// afterAll(() => {
//   console.log(`*** TEST 2`);
//   spy.mockRestore();
// });

// See https://stackoverflow.com/questions/54921743/testing-echarts-react-component-with-jest-echartelement-is-null
xtest('renders component data', () => {
  const { asFragment } = render(<Sankey opts={{ renderer: 'svg' }} series={[{ data, links }]} />);
  expect(asFragment()).toMatchSnapshot();
});
