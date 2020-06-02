import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartArea } from '../ChartArea';
import { ChartGroup } from '../ChartGroup';
import { ChartCursorContainer } from './ChartCursorContainer';

Object.values([true, false]).forEach(() => {
  test('ChartVoronoiContainer', () => {
    const view = shallow(<ChartCursorContainer />);
    expect(view).toMatchSnapshot();
  });
});

test('renders container via ChartGroup', () => {
  const view = shallow(
    <ChartGroup containerComponent={<ChartCursorContainer />} height={200} width={200}>
      <ChartArea
        data={[
          { name: 'Cats', x: 1, y: 1 },
          { name: 'Cats', x: 2, y: 2 },
          { name: 'Cats', x: 3, y: 3.2 },
          { name: 'Cats', x: 4, y: 3.5 }
        ]}
      />
      <ChartArea
        data={[
          { name: 'Dogs', x: 1, y: 0.5 },
          { name: 'Dogs', x: 2, y: 1 },
          { name: 'Dogs', x: 3, y: 2 },
          { name: 'Dogs', x: 4, y: 2.5 },
          { name: 'Dogs', x: 5, y: 2.5 }
        ]}
      />
    </ChartGroup>
  );
  expect(view).toMatchSnapshot();
});
