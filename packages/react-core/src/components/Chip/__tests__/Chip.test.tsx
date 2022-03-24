import React from 'react';
import { render } from '@testing-library/react';
import { Chip } from '../Chip';


describe('Chip', () => {
  test('overflow', () => {
    const view = render(
      <Chip className="my-chp-cls" isOverflowChip>
        4 more
      </Chip>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('closable', () => {
    const view = render(
      <Chip className="my-chp-cls" id="chip_one">
        Chip
      </Chip>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('closable with tooltip', () => {
    const view = render(
      <Chip className="my-chp-cls" id="chip_one">
        1234567890123456789
      </Chip>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('readonly', () => {
    const view = render(
      <Chip className="my-chp-cls" isReadOnly>
        4 more
      </Chip>
    );
    expect(view.container).toMatchSnapshot();
  });
});

