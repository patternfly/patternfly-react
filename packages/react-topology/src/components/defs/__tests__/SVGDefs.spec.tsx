import * as React from 'react';

import { render } from '@testing-library/react';

import SVGDefs, { SVGDefsSetterProps } from '../SVGDefs';
import SVGDefsContext, { SVGDefsContextProps } from '../SVGDefsContext';
import { SVGDefsSetter } from '../SVGDefsSetter';

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
    const { unmount } = render(
      <SVGDefsContext.Provider value={contextProps}>
        <SVGDefs {...props} />
      </SVGDefsContext.Provider>
    );

    // addDef called on mount and removeDef on unmount being called
    // signifies the context props were passed into SVGDefs (and therefore SVGDefsSetter).
    expect(contextProps.addDef).toHaveBeenCalledWith("foo", <span />);

    unmount();
    expect(contextProps.removeDef).toHaveBeenLastCalledWith("foo");
  });

  describe('SVGDefsSetter', () => {
    it('should callback #addDef and #removeDef on update', () => {
      const props: SVGDefsSetterProps = {
        id: 'foo',
        addDef: jest.fn(),
        removeDef: jest.fn(),
        children: <span />,
      };

      const { unmount, rerender } = render(<SVGDefsSetter {...props} />);
      expect(props.addDef).toHaveBeenCalledWith(props.id, props.children);

      // test update
      const newChild = <span />;
      rerender(<SVGDefsSetter {...props}>{newChild}</SVGDefsSetter>)
      expect(props.addDef).toHaveBeenCalledTimes(2);
      expect(props.addDef).toHaveBeenLastCalledWith(props.id, newChild);

      // test unmount
      unmount();
      expect(props.removeDef).toHaveBeenCalledTimes(1);
      expect(props.removeDef).toHaveBeenLastCalledWith(props.id);
    });
  });
});
