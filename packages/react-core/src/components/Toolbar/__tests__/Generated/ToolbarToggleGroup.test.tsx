import React from 'react';

import { render } from '@testing-library/react';

import { ToolbarContentContext, ToolbarToggleGroup } from '../..';
import { PageContext } from '../../../Page/Page';

describe('ToolbarToggleGroup', () => {
  it('should match snapshot', () => {
    const view = render(
      <PageContext.Provider
        value={{ isManagedSidebar: false, onNavToggle: jest.fn(), isNavOpen: true, width: 1, getBreakpoint: jest.fn() }}
      >
        <ToolbarContentContext.Provider
          value={{
            expandableContentId: 'test',
            expandableContentRef: { current: ((<></>) as unknown) as HTMLDivElement },
            chipContainerRef: { current: ((<></>) as unknown) as HTMLDivElement }
          }}
        >
          <ToolbarToggleGroup breakpoint="xl" toggleIcon={<div>ReactNode</div>} />
        </ToolbarContentContext.Provider>
      </PageContext.Provider>
    );
    expect(view.container).toMatchSnapshot();
  });
});
