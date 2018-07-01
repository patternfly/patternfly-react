import * as React from 'react';
import { shallow } from 'enzyme';
import { Tag } from './index';

describe('#Tag render correctly with data', () => {
  it('should render tag', () => {
    const key = 'Patternfly-react version';
    const value = '2.10';
    const wrapper = shallow(<Tag value={value} name={key} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.name()).toEqual('span');
    expect(wrapper.props().className).toEqual('tag-pair');

    const labelKey = wrapper.find('Label').getElements()[0];
    const labelValue = wrapper.find('Label').getElements()[1];
    expect(labelKey.props.className).toEqual('tag-key');
    expect(labelValue.props.className).toEqual('tag-value');

    expect(labelKey.props.children).toEqual(key);
    expect(labelValue.props.children).toEqual(value);
  });
});
