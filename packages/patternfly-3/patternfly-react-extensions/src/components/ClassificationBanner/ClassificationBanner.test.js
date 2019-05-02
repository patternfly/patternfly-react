import React from 'react';
import { mount } from 'enzyme';
import ClassificationBanner from './ClassificationBanner';

const testClassificationBannerSnapshot = () => (
  <ClassificationBanner
    // bottomBanner={true}
    classificationLevel="1"
    closeButton={false}
    hostName="Host Name"
    userName="User Name"
    closed={false}
    userNamePosition="left"
    hostNamePosition="right"
    bannerColor=""
  >
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
  const component = mount(testClassificationBannerSnapshot({
    closed: false
  }));
  const closeButton = component.find('#classification-banner-close-btn');
  closeButton.simulate('click');
  expect(component.props().closed).toBe(true);
});