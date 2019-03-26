import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from './index';
import Tippy from '@tippy.js/react';

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

test('tooltip triggered by click', () => {
  const view = shallow(
    <Tooltip
      position="top"
      trigger="click"
      content={<p>my content</p>}
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );
  expect(view.find(Tippy).prop('trigger')).toBe('click');
});
