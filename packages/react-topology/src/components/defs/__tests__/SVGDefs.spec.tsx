import * as React from 'react';
import { mount } from 'enzyme';
import SVGDefs from '../SVGDefs';
import { SVGDefsSetter } from "../SVGDefsSetter";
import SVGDefsContext, { SVGDefsContextProps } from '../SVGDefsContext';

type SVGDefsSetterProps = React.ComponentProps<typeof SVGDefsSetter>;

describe('SVGDefs', () => {
  it('should get #addDef and #removeDef from context', () => {
    const contextProps: SVGDefsContextProps = {
      addDef: jest.fn(),
      removeDef: jest.fn(),
    };
    const props: React.ComponentProps<typeof SVGDefs> = {
      id: 'foo',
      children: <span />,
    };
    const wrapper = mount(
      <SVGDefsContext.Provider value={contextProps}>
        <SVGDefs {...props} />
      </SVGDefsContext.Provider>,
    );
    const innerWrapper = wrapper.find(SVGDefsSetter).first();
    expect(innerWrapper.props()).toEqual({
      ...contextProps,
      ...props,
    });
  });
});

describe('SVGDefsSetter', () => {
  it('should callback #addDef and #removeDef on update', () => {
    const props: SVGDefsSetterProps = {
      id: 'foo',
      addDef: jest.fn(),
      removeDef: jest.fn(),
      children: <span />,
    };

    const wrapper = mount<SVGDefsSetterProps>(<SVGDefsSetter {...props} />);
    expect(props.addDef).toHaveBeenCalledWith(props.id, props.children);

    // test update
    const newChild = <span />;
    wrapper.setProps({ children: newChild });
    expect(props.addDef).toHaveBeenCalledTimes(2);
    expect(props.addDef).toHaveBeenLastCalledWith(props.id, newChild);

    // test unmount
    wrapper.unmount();
    expect(props.removeDef).toHaveBeenCalledTimes(1);
    expect(props.removeDef).toHaveBeenLastCalledWith(props.id);
  });
});
