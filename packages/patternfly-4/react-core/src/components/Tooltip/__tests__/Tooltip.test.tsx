import * as React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from '../Tooltip';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('Tooltip should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Tooltip
      appendTo={() => document.body}
			aria={'describedby'}
			boundary={'window'}
			children={<p>ReactElement</p>}
			className={"''"}
			content={<div>ReactNode</div>}
			distance={15}
			enableFlip={true}
			entryDelay={500}
			exitDelay={500}
			flipBehavior={['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']}
			isAppLauncher={false}
			maxWidth={"string"}
			position={'top'}
			trigger={"'mouseenter focus'"}
			isContentLeftAligned={false}
			isVisible={false}
			zIndex={9999}
			tippyProps={undefined}
			id={"''"}
    />);
  expect(view).toMatchSnapshot();
});

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

test('tooltip passes along values to tippy.js', () => {
  const view = shallow(
    <Tooltip
      position="top"
      content={
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
    </Tooltip>
  );
  expect(view).toMatchSnapshot();
});