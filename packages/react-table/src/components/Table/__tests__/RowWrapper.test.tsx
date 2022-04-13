import * as React from 'react';
import { render } from '@testing-library/react';
import { RowWrapper, RowWrapperProps } from '../RowWrapper';

const getRowWrapper = (props: RowWrapperProps) => (
  <table>
    <tbody>
      <RowWrapper {...props} />
    </tbody>
  </table>
);

describe('RowWrapper', () => {
  test('renders correctly', () => {
    const trRef = jest.fn();
    const { asFragment } = render(getRowWrapper({ onScroll: jest.fn(), onResize: jest.fn(), trRef }));

    expect(asFragment()).toMatchSnapshot();
    expect(trRef.mock.calls).toHaveLength(1);
  });

  test('renders expanded correctly', () => {
    const { asFragment } = render(getRowWrapper({ row: { isExpanded: true } }));
    expect(asFragment()).toMatchSnapshot();
  });
});
