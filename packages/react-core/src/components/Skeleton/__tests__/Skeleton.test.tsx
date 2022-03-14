import React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';

describe('skeleton', () => {
  test('default', () => {
    const view = render(<Skeleton />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  ['25%', '33%', '50%', '66%', '75%'].forEach((width: string) =>
    test(`skeleton with ${width} width`, () => {
      const view = render(<Skeleton width={width} />);
      expect(view.container.outerHTML).toMatchSnapshot();
    })
  );

  ['25%', '33%', '50%', '66%', '75%', '100%'].forEach((height: string) =>
    test(`skeleton with ${height} height`, () => {
      const view = render(<Skeleton height={height} />);
      expect(view.container.outerHTML).toMatchSnapshot();
    })
  );

  ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].forEach((fontSize: string) =>
    test(`skeleton with ${fontSize} font size`, () => {
      const view = render(<Skeleton fontSize={fontSize as 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'} />);
      expect(view.container.outerHTML).toMatchSnapshot();
    })
  );

  test('circle skeleton', () => {
    const view = render(<Skeleton shape="circle" />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('square skeleton', () => {
    const view = render(<Skeleton shape="square" />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});
