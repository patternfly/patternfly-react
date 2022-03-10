import React from 'react';

import { render } from '@testing-library/react';

import { SelectMenu } from '../../SelectMenu';
import { SelectContext } from '../..';

describe('SelectMenu', () => {
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
        <SelectMenu />
      </SelectContext.Provider>
    );
    expect(view.container).toMatchSnapshot();
  });
});
