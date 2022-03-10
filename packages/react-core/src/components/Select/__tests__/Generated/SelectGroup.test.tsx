import React from 'react';

import { render } from '@testing-library/react';

import { SelectGroup } from '../../SelectGroup';
import { SelectContext } from '../..';

describe('SelectGroup', () => {
  it('should match snapshot', () => {
    const view = render(
      <SelectContext.Provider
        value={{
          onSelect: jest.fn(),
          onClose: jest.fn(),
          onFavorite: jest.fn(),
          variant: 'default',
          inputIdPrefix: 'something'
        }}
      >
        <SelectGroup children={[]} className="" label="" titleId="" />
      </SelectContext.Provider>
    );
    expect(view.container).toMatchSnapshot();
  });
});
