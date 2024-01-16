import { render } from '@testing-library/react';
import { DualListSelectorPane } from '../../DualListSelector';
import React from 'react';

describe('DualListSelector', () => {
  test('basic', () => {
    const { asFragment } = render(<DualListSelectorPane options={['Option 1', 'Option 2']} id="firstTest" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with search inputs', () => {
    const { asFragment } = render(
      <DualListSelectorPane options={['Option 1', 'Option 2']} id="secondTest" isSearchable />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('with custom status', () => {
    const { asFragment } = render(
      <DualListSelectorPane options={['Option 1', 'Option 2']} status="Test status1" id="thirdTest" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('basic with disabled controls', () => {
    const { asFragment } = render(
      <DualListSelectorPane options={['Option 1', 'Option 2']} id="disabledTest" isDisabled />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
