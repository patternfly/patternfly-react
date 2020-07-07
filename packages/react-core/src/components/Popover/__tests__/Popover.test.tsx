import * as React from 'react';
import { shallow } from 'enzyme';
import { Popover, PopoverPosition } from '../Popover';

test('popover renders close-button, header and body', () => {
  const view = shallow(
    <Popover
      id="test"
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

test('popover can have a custom minimum width', () => {
  const view = shallow(
    <Popover
      id="test"
      position="top"
      isVisible
      minWidth="600px"
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

test('popover can specify position as object value', () => {
  const view = shallow(
    <Popover
      id="test"
      position={PopoverPosition.right}
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
