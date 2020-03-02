import React from 'react';
import { mount } from 'enzyme';
import ClassificationBanner from './ClassificationBanner';

const testClassificationBannerSnapshot = props => (
  <ClassificationBanner closed {...props}>
    <br />
    <p>This is the main body of a web page.</p>
    <p>Scroll down to see the bottom banner.</p>
  </ClassificationBanner>
);

test('ClassificationBanner renders properly', () => {
  const component = mount(testClassificationBannerSnapshot()).getElement();

  expect(component).toMatchSnapshot();
});

test('ClassificationBanner expectedly executes mouse click and is dismissed', () => {
  const component = mount(
    testClassificationBannerSnapshot({
      closeButton: true,
      closed: false
    })
  );

  const closeButton = component.find('button');
  closeButton.simulate('click');
  expect(component.state('closed')).toBe(true);
});
