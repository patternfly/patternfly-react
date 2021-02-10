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

test('popover can close from content (uncontrolled)', () => {
  const view = shallow(
    <Popover
      id="test"
      aria-label="Popover with button in the body that can close it"
      isVisible
      headerContent={<div>Popover header</div>}
      bodyContent={hide => (
        <div>
          <div>
            All the content props (headerContent, bodyContent, footerContent) can take a function which the Popover
            component passes the hide function to which can be used to close the Popover after some user interaction.
          </div>
          <div>
            <button id="uncontrolled-close" onClick={hide}>
              Close popover
            </button>
          </div>
        </div>
      )}
      footerContent="Popover footer"
    >
      <button id="uncontrolled-toggle">Toggle Popover</button>
    </Popover>
  );
  expect(view).toMatchSnapshot();
});
