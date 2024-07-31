import React from 'react';

import { render } from '@testing-library/react';

import { OverflowMenuDropdownItem } from '../../OverflowMenuDropdownItem';

describe('OverflowMenuDropdownItem', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<OverflowMenuDropdownItem itemId="id" children={'any'} isShared={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
