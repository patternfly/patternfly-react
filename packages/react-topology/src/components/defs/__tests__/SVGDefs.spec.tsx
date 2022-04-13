import * as React from 'react';

import { render, screen } from '@testing-library/react';

import SVGDefs from '../SVGDefs';
import SVGDefsContext, { SVGDefsContextProps } from '../SVGDefsContext';

describe('SVGDefs', () => {
  it('should get #addDef and #removeDef from context', () => {
    const contextProps: SVGDefsContextProps = {
      addDef: jest.fn(),
      removeDef: jest.fn()
    };
    const props: React.ComponentProps<typeof SVGDefs> = {
      id: 'foo',
      children: <span />
    };
    const { asFragment } = render(
      <SVGDefsContext.Provider value={contextProps}>
        <SVGDefs {...props} />
      </SVGDefsContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
