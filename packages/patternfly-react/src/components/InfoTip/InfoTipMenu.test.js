import React from 'react';
import { shallow } from 'enzyme';
import InfoTipMenu from './InfoTipMenu';

const props = {
  children: 'children'
};

test('forwards only valid props to the root element', () => {
  const view = shallow(
    <InfoTipMenu {...props} id="id" bsRole="bsRole" bsClass="bsClass" pullRight="pullRight" labelledBy="labeledBy" />
  );
  expect(view).toMatchSnapshot('props are forwarded to root element');
});

test('adds classname to the root element', () => {
  const className = 'extra-classname';
  const view = shallow(<InfoTipMenu {...props} className={className} />);
  const rootClassName = view.first().props().className;
  expect(rootClassName.includes(className)).toBe(true);
});
