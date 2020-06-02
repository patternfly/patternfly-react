import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartArea } from '../ChartArea';
import { ChartGroup } from '../ChartGroup';
import { ChartCursorFlyout } from './ChartCursorFlyout';
import { ChartCursorTooltip } from './ChartCursorTooltip';
import { createContainer } from '../ChartUtils';

Object.values([true, false]).forEach(() => {
  test('ChartTooltip', () => {
    const view = shallow(<ChartCursorTooltip text="This is a tooltip" flyoutComponent={<ChartCursorFlyout />} />);
    expect(view).toMatchSnapshot();
  });
});

test('allows tooltip via container component', () => {
  const CursorVoronoiContainer = createContainer('cursor', 'voronoi');
  const view = shallow(
    <ChartGroup
      containerComponent={
        <CursorVoronoiContainer
          labels={point => 'y: ' + point.y}
          labelComponent={<ChartCursorTooltip flyoutComponent={<ChartCursorFlyout />} />}
        />
      }
      height={200}
      width={200}
    >
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
