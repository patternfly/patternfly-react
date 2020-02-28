import React from 'react';
import { mount } from 'enzyme';
import { Icon } from 'patternfly-react';
import { PropertiesSidePanel, PropertyItem } from './index';

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
            <Icon type="pf" name="ok" /> Certified
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
            0.22.2 <Icon type="fa" name="external-link" />
          </a>
        }
      />
      <PropertyItem
        label="Created At"
        value={
          <span>
            <Icon type="fa" name="globe" /> Aug 23, 1:58pm
          </span>
        }
      />
      <PropertyItem label="Support" value={<a href="#">Red Hat</a>} />
    </PropertiesSidePanel>
  );
  expect(component.render()).toMatchSnapshot();
});
