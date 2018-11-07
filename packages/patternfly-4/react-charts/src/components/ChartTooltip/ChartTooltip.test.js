import React from 'react';
import { shallow } from 'enzyme';
import ChartArea from '../Chart/Chart';
import ChartGroup from '../ChartGroup/ChartGroup';
import ChartVoronoiContainer from '../ChartVoronoiContainer/ChartVoronoiContainer';
import ChartTooltip from './ChartTooltip';

Object.values([true, false]).forEach(isRead => {
  test(`ChartTooltip`, () => {
    const view = shallow(<ChartTooltip text={'This is a tooltip'}/>);
    expect(view).toMatchSnapshot();
  });
});

xtest('allows tooltip via container component', () => {
  const view = shallow(
    <ChartGroup
     containerComponent={<ChartVoronoiContainer labels={'This is a tooltip'}/>}
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
          { name: 'Dogs', x: 1, y: .5 },
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
