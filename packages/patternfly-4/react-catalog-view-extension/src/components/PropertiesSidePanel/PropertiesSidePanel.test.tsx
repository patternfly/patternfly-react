import * as React from 'react';
import { mount } from 'enzyme';
import OkIcon from '@patternfly/react-icons/dist/js/icons/ok-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import GlobeIcon from '@patternfly/react-icons/dist/js/icons/globe-icon';

import { PropertiesSidePanel, PropertyItem } from './';

test('PropertyItem renders properly', () => {
  const component = mount(
    <PropertyItem label="Operator Version" value="0.9.8 (latest)" className="test-property-item-class" />
  );
  expect(component.render()).toMatchSnapshot();
});

test('PropertiesSidePanel renders properly', () => {
  const component = mount(
    <PropertiesSidePanel className="test-properties-side-panel-class">
      <PropertyItem label="Operator Version" value="0.9.8 (latest)" className="test-property-item-class" />
      <PropertyItem
        label="Certified Level"
        value={
          <span>
            <OkIcon style={{ color: '#3f9c35' }} /> Certified
          </span>
        }
      />
      <PropertyItem label="Provider" value="Red Hat, Inc" />
      <PropertyItem label="Health Index" value="A" />
      <PropertyItem
        label="Repository"
        value={
          <a href="https://quay.io/repository/redhat/prometheus-operator">
            https://quay.io/repository/redhat/prometheus-operator
          </a>
        }
      />
      <PropertyItem
        label="Container Image"
        value={
          <a href="#">
            0.22.2 <ExternalLinkAltIcon />
          </a>
        }
      />
      <PropertyItem
        label="Created At"
        value={
          <span>
            <GlobeIcon /> Aug 23, 1:58pm
          </span>
        }
      />
      <PropertyItem label="Support" value={<a href="#">Red Hat</a>} />
    </PropertiesSidePanel>
  );
  expect(component.render()).toMatchSnapshot();
});
