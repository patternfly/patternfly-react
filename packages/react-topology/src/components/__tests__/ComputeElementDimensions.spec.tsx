import * as React from 'react';
import { shallow } from 'enzyme';
import BaseNode from '../../elements/BaseNode';
import ComputeElementDimensions from '../ComputeElementDimensions';

describe('ComputeElementDimensions', () => {
  it('should render invisible group', () => {
    const wrapper = shallow(<ComputeElementDimensions element={new BaseNode()} />);
    expect(wrapper.props().style?.visibility).toBe('hidden');
  });
});
