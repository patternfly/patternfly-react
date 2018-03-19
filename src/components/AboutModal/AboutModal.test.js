import React from 'react';
import renderer from 'react-test-renderer';
import { noop } from '../../common/helpers';
import {
  AboutModal,
  AboutModalVersions,
  AboutModalVersionItem
} from '../../index';

test('AboutModal renders correctly when hidden', () => {
  const component = renderer.create(
    <AboutModal
      show={false}
      onHide={noop}
      productTitle="Product Title"
      altLogo="Patternfly Logo"
      trademarkText="Trademark and Copyright Information"
    >
      <AboutModalVersions>
        <AboutModalVersionItem label="Label" versionText="Version" />
        <AboutModalVersionItem label="Label" versionText="Version" />
        <AboutModalVersionItem label="Label" versionText="Version" />
        <AboutModalVersionItem label="Label" versionText="Version" />
      </AboutModalVersions>
    </AboutModal>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/** TODO: requires https://github.com/react-bootstrap/react-overlays/issues/225
test('AboutModal renders correctly when shown', () => {
  const component = renderer.create(
    <AboutModal
      show
      onHide={noop}
      productTitle="Product Title"
      altLogo="Patternfly Logo"
      trademarkText="Trademark and Copyright Information"
    >
      <AboutModalVersions>
        <AboutModalVersionItem label="Label" versionText="Version" />
        <AboutModalVersionItem label="Label" versionText="Version" />
        <AboutModalVersionItem label="Label" versionText="Version" />
        <AboutModalVersionItem label="Label" versionText="Version" />
      </AboutModalVersions>
    </AboutModal>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
*/
