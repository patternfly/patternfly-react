import React from 'react';
import { shallow } from 'enzyme';
import ChipButton from './ChipButton';
import Chip from './Chip';

test('ChipButton', () => {
  const view = shallow(
    <ChipButton id="my-chip-button" className="chip-bttn-cls">
      <b>Close</b>
    </ChipButton>
  );
  expect(view).toMatchSnapshot();
});

describe('Chip', () => {
  test('overflow', () => {
    const view = shallow(
      <Chip className="my-chp-cls" isOverflowChip={true}>
        4 more
      </Chip>
    );
    expect(view).toMatchSnapshot();
  });

  test('closable', () => {
    const view = shallow(
      <Chip className="my-chp-cls" id="chip_one">
        Chip
      </Chip>
    );
    expect(view).toMatchSnapshot();
  });


  test('closable with tooltip', () => {
    const view = shallow(
      <Chip className="my-chp-cls" id="chip_one">
        12345678901234567891
      </Chip>
    );
    expect(view).toMatchSnapshot();
  });
})
