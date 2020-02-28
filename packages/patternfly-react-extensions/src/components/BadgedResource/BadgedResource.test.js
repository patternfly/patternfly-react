import React from 'react';
import { mount } from 'enzyme';
import { BadgedResource, getResourceBadgeColor, resourceTypes } from './index';

test('BadgedResource renders properly', () => {
  const onClickMock = jest.fn();

  const component = mount(
    <div>
      <BadgedResource
        id="test-badged-resource-id"
        className="test-badged-resource-class"
        kindAbbr="DC"
        kindStr="Deployment Config"
        badgeColor={getResourceBadgeColor(BadgedResource.KINDS.DEPLOYMENT_CONFIG)}
      />
      <BadgedResource resourceKind={BadgedResource.KINDS.DEPLOYMENT_CONFIG} />
      <BadgedResource
        resourceName="Clickable Item"
        resourceKind={BadgedResource.KINDS.ROLE_BINDING}
        onClick={onClickMock}
      />
      <BadgedResource resourceKind={BadgedResource.KINDS.NAMESPACE} resourceName="No Tooltip Item" tipDelay={-1} />
      <BadgedResource
        kindAbbr="APIS"
        kindStr="API Service"
        resourceName="Fast Tooltip"
        tipDelay={0}
        badgeColor={BadgedResource.COLORS.cyan500}
      />
      <BadgedResource resourceName="Long Tooltip" tipDelay={1500} resourceKind={resourceTypes.DEPLOYMENT_CONFIG} />
      <BadgedResource
        resourceKind={BadgedResource.KINDS.PROJECT}
        large
        badgeColor={getResourceBadgeColor(BadgedResource.KINDS.PROJECT)}
      />
      <BadgedResource
        resourceKind={BadgedResource.KINDS.SERVICE_MONITOR}
        resourceName="Large Clickable Item"
        large
        onClick={onClickMock}
      />
    </div>
  );
  expect(component.render()).toMatchSnapshot();
});

test('BadgedResource href renders properly', () => {
  const component = mount(
    <BadgedResource
      resourceName="Clickable Item"
      resourceKind={BadgedResource.KINDS.ROLE_BINDING}
      href="http://patternfly.org"
    />
  );
  expect(component.render()).toMatchSnapshot();
});

test('BadgedResource onClick behaves properly', () => {
  const onClickMock = jest.fn();

  const component = mount(
    <BadgedResource
      id="test-on-click"
      className="test-click-class"
      resourceKind={BadgedResource.KINDS.ROLE_BINDING}
      resourceName="Clickable Item"
      onClick={onClickMock}
    />
  );

  component
    .find('#test-on-click.test-click-class .badged-resource-pf-resource-name')
    .hostNodes()
    .simulate('click');
  expect(component.render()).toMatchSnapshot();
  expect(onClickMock).toBeCalled();
});
