import React from 'react';
import { mount } from 'enzyme';
import { HintBlock } from '../../index';
import { Icon } from '../Icon';

test('HintBlock displays correctly', () => {
  const onClose = jest.fn();
  const onButtonClick = jest.fn();
  const component = mount(
    <HintBlock
      id="test-id"
      className="test-class"
      title="Test Title Text"
      onClose={onClose}
      body="Test Body Text"
      buttonContent={
        <span>
          <Icon type="pf" name="help" /> Optional Action
        </span>
      }
      onButtonClick={onButtonClick}
    />
  );

  expect(component.render()).toMatchSnapshot();

  component.find('.close').simulate('click');
  expect(onClose).toBeCalled();

  component.find('.btn').simulate('click');
  expect(onClose).toBeCalled();
});

test('HintBlock hides close button when no close callback', () => {
  const onButtonClick = jest.fn();
  const component = mount(
    <HintBlock
      title="Test Title Text"
      body="Test Body Text"
      buttonContent="Optional Action"
      onButtonClick={onButtonClick}
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('HintBlock hides optional button when no button content', () => {
  const onClose = jest.fn();
  const component = mount(<HintBlock title="Test Title Text" onClose={onClose} body="Test Body Text" />);

  expect(component.render()).toMatchSnapshot();
});

test('HintBlock display complex content', () => {
  const component = mount(
    <HintBlock
      title={
        <div>
          My Custom <b>Title</b>
        </div>
      }
      body={
        <div>
          <p>
            This pattern does not yet exist in <a href="http://www.patternfly.org/pattern-library/">PatternFly</a>.
          </p>
          The <b>Hint Block</b> pattern is similar to an informational inline notification, but with additional emphasis
          (blue highlight). The intention is to use this for specific use cases involving new users, new features, or
          cases where extra guidance may assist in successfully completing a flow. The hint pattern involves a one-step
          reminder, explanation, or call to action. Potential Use Cases
          <ul>
            <li>
              To provide guidance to <b>new users</b> who do not know how to use the application
            </li>
            <li>
              To provide contextual help on using <b>new features</b>
            </li>
            <li>
              To provide hints on a flow/ the <b>next steps</b> a user should be thinking about.
            </li>
          </ul>
        </div>
      }
      buttonContent={
        <span>
          <Icon type="pf" name="help" /> Optional Action
        </span>
      }
    />
  );

  expect(component.render()).toMatchSnapshot();
});
