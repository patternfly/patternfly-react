import React from 'react';
import { shallow } from 'enzyme';
import LoginBox from './LoginBox';
import LoginBoxBody from './LoginBoxBody';
import LoginBoxHeader from './LoginBoxHeader';
import LoginBoxFooter from './LoginBoxFooter';
import { Dropdown, DropdownItem } from '../Dropdown';

const subtitle = (
  <React.Fragment>
    Login to your account <a href="https://www.patternfly.org">Need an account?</a>
  </React.Fragment>
);
const dropdownToggle = jest.fn();

const myDropdown = (
  <Dropdown toggle={dropdownToggle}>
    <DropdownItem>English</DropdownItem>
  </Dropdown>
);

const LoginBoxContent = () => (
  <React.Fragment>
    <LoginBox>
      <LoginBoxHeader title="title" subtitle={subtitle} dropdown={myDropdown}>
        LoginBox Header
      </LoginBoxHeader>
      <LoginBoxBody>LoginBox Body</LoginBoxBody>
      <LoginBoxFooter>LoginBox Footer</LoginBoxFooter>
    </LoginBox>
  </React.Fragment>
);

test('simple LoginBox', () => {
  const view = shallow(<LoginBoxContent />);
  expect(view).toMatchSnapshot();
});

test('renders with PatternFly Core styles', () => {
  const view = shallow(<LoginBox />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginBox className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'loginbox';
  const view = shallow(<LoginBox data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});
