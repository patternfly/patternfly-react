import React from 'react';
import { mount } from 'enzyme';
import { AboutModal, AboutModalVersions, AboutModalVersionItem } from '../../index';

const testAboutModal = props => (
  <AboutModal
    show={false}
    onHide={jest.fn()}
    productTitle="Product Title"
    altLogo="Patternfly Logo"
    trademarkText="Trademark and Copyright Information"
    {...props}
  >
    <AboutModalVersions>
      <AboutModalVersionItem label="Label" versionText="Version" />
    </AboutModalVersions>
  </AboutModal>
);

test('AboutModal renders correctly when hidden', () => {
  const component = mount(testAboutModal());
  expect(component.render()).toMatchSnapshot();
  expect(component.props().show).toBeFalsy();
});

test('AboutModal renders correctly when shown', () => {
  const component = mount(testAboutModal({ show: true }));
  expect(component.render()).toMatchSnapshot();
  expect(component.props().show).toBeTruthy();
});
