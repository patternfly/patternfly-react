import React from 'react';
import { mount } from 'enzyme';
import { Chip } from '../Chip';


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

