import React from 'react';
import { shallow } from 'enzyme';
import { Popover } from './index';

test('popover renders close-button, header and body', () => {
  const view = shallow(
    <Popover
      position="top"
      isVisible
      hideOnOutsideClick
      headerContent={<div>Popover Header</div>}
      bodyContent={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle Popover</div>
    </Popover>
  );
  expect(view).toMatchSnapshot();
});
