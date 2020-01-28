import * as React from 'react';
import { shallow } from 'enzyme';
import { Popover, PopoverPosition } from '../Popover';

it('Popover should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Popover
      aria-label={"''"}
			appendTo={() => document.body}
			bodyContent={<div>ReactNode</div>}
			boundary={'window'}
			children={<p>ReactElement</p>}
			className={"''"}
			closeBtnAriaLabel={"'Close'"}
			distance={25}
			enableFlip={true}
			flipBehavior={['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']}
			footerContent={null}
			headerContent={null}
			hideOnOutsideClick={true}
			isVisible={null}
			maxWidth={"string"}
			onHidden={(): void => null}
			onHide={(): void => null}
			onMount={(): void => null}
			onShow={(): void => null}
			onShown={(): void => null}
			position={'top'}
			shouldClose={(): void => null}
			zIndex={9999}
			tippyProps={undefined}
    />);
  expect(view).toMatchSnapshot();
});

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

test('popover can specify position as object value', () => {
  const view = shallow(
    <Popover
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

test('popover passes along values to tippy.js', () => {
  const view = shallow(
    <Popover
      position={PopoverPosition.right}
      isVisible
      hideOnOutsideClick
      headerContent={<div>Popover Header</div>}
      bodyContent={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
      tippyProps={{
        duration: [200, 200],
        offset: 20
      }}
    >
      <div>Tippy Props Test</div>
    </Popover>
  );
  expect(view).toMatchSnapshot();
});
