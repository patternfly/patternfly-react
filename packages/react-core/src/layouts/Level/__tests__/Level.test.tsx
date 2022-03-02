import * as React from 'react';
import { Level } from '../Level';
import { LevelItem } from '../LevelItem';
import { render } from '@testing-library/react';

test('Gutter', () => {
  const view = render(<Level hasGutter />);
  expect(view.container).toMatchSnapshot();
});

test('item', () => {
  const view = render(<LevelItem>Level Item</LevelItem>);
  expect(view.container).toMatchSnapshot();
});
