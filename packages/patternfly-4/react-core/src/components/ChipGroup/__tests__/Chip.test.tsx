import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Chip } from '../Chip';
import { ChipButton } from '../ChipButton';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('Chip should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Chip
      children={<div>ReactNode</div>}
			closeBtnAriaLabel={"'close'"}
			className={"''"}
			isOverflowChip={false}
			isReadOnly={false}
			onClick={(_e: React.MouseEvent) => undefined as any}
			component={'div'}
			tooltipPosition={'top'}
    />);
  expect(view).toMatchSnapshot();
});

test('ChipButton', () => {
  const view = mount(
    <ChipButton id="my-chip-button" className="chip-bttn-cls">
      <b>Close</b>
    </ChipButton>
  );
  expect(view).toMatchSnapshot();
});

describe('Chip', () => {
  test('overflow', () => {
    const view = mount(
      <Chip className="my-chp-cls" isOverflowChip>
        4 more
      </Chip>
    );
    expect(view).toMatchSnapshot();
  });

  test('closable', () => {
    const view = mount(
      <Chip className="my-chp-cls" id="chip_one">
        Chip
      </Chip>
    );
    expect(view).toMatchSnapshot();
  });

  test('closable with tooltip', () => {
    const view = mount(
      <Chip className="my-chp-cls" id="chip_one">
        1234567890123456789
      </Chip>
    );
    expect(view).toMatchSnapshot();
  });

  test('readonly', () => {
    const view = mount(
      <Chip className="my-chp-cls" isReadOnly>
        4 more
      </Chip>
    );
    expect(view).toMatchSnapshot();
  });
});
