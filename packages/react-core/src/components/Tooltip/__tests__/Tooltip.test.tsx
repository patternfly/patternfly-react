import * as React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from '../Tooltip';

test('tooltip renders', () => {
  const view = shallow(
    <Tooltip
      position="top"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );
  expect(view).toMatchSnapshot();
});
