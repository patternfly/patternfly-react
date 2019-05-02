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

test('ClassificationBanner with renders properly', () => {
  const component = mount(testClassificationBannerSnapshot());

  expect(component.render()).toMatchSnapshot();
});

test('ClassificationBanner expectedly executes mouse click and is dismissed', () => {
  const component = mount(testClassificationBannerSnapshot({
    closed: false
  }));
  const closeButton = component.find('.classification-banner-pf-close');
  closeButton.simulate('click');
  expect(component.props().closed).toBe(true);
});