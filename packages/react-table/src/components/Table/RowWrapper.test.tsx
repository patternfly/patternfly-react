import * as React from 'react';
import { mount } from 'enzyme';
import { RowWrapper, RowWrapperProps } from './RowWrapper';

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
    const view = mount(getRowWrapper({ onScroll: jest.fn(), onResize: jest.fn(), trRef }));
    expect(view).toMatchSnapshot();
    expect(trRef.mock.calls).toHaveLength(1);
  });
  test('renders expanded correctly', () => {
    const view = mount(getRowWrapper({ row: { isExpanded: true } }));
    expect(view).toMatchSnapshot();
  });
});
