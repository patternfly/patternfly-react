import * as React from 'react';
import { GridItem } from '../GridItem';
import { render } from '@testing-library/react';
import { DeviceSizes } from '../../../styles/sizes';

test('adds span class', () => {
  const view = render(<GridItem span={4} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('adds offset class', () => {
  const view = render(<GridItem offset={4} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('adds row class', () => {
  const view = render(<GridItem rowSpan={4} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

Object.keys(DeviceSizes).forEach(size => {
  test(`adds ${size} span class`, () => {
    const props = { [size]: 4 };
    const view = render(<GridItem {...props} />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test(`adds ${size} offset classes`, () => {
    const props = { [`${size}Offset`]: 1 };
    const view = render(<GridItem {...props} />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test(`adds ${size} row classes`, () => {
    const props = { [`${size}RowSpan`]: 1 };
    const view = render(<GridItem {...props} />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});
