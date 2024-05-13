import { render } from '@testing-library/react';
import { DualListSelectorPane } from '../DualListSelectorPane';
import { SearchInput } from '../../SearchInput';
import React from 'react';

describe('DualListSelector', () => {
  test('basic', () => {
    const { asFragment } = render(<DualListSelectorPane id="basicTest" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with search inputs', () => {
    const { asFragment } = render(<DualListSelectorPane id="searchTest" searchInput={<SearchInput />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with custom status', () => {
    const { asFragment } = render(<DualListSelectorPane id="statusTest" status="Test status1" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('basic with disabled controls', () => {
    const { asFragment } = render(<DualListSelectorPane id="disabledTest" isDisabled />);
    expect(asFragment()).toMatchSnapshot();
  });
});
