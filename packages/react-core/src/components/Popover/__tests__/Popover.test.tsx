import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Popover, PopoverPosition } from '../Popover';
import { act } from 'react-dom/test-utils';

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

const waitForComponentToPaint = async (wrapper: any) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    wrapper.update();
  });
};

test('popover can close from content (uncontrolled)', () => {
  jest.useFakeTimers();
  const mockHide = jest.fn();
  const view = mount(
    <Popover
      id="test"
      aria-label="Popover with button in the body that can close it"
      onHide={mockHide}
      isVisible={
        true /* just for testing purposes to test that the popover would close when calling hide from bodyContent */
      }
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

  waitForComponentToPaint(view);
  jest.runAllTimers();

  expect(view).toMatchSnapshot();
  
  // popover visible
  expect(document.querySelectorAll('.pf-c-popover').length).toBe(1);
  // hide function not called yet
  expect(mockHide.mock.calls).toHaveLength(0);

  // get reference to the button within the bodyContent which is mounted on document.body
  const button = document.querySelector("#uncontrolled-close");
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // hide function was called
  expect(mockHide.mock.calls).toHaveLength(1);
  jest.runAllTimers();
  // popover no longer visible
  expect(document.querySelectorAll('.pf-c-popover').length).toBe(0);
});
