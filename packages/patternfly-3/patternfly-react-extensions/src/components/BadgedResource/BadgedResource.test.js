import React from 'react';
import { mount } from 'enzyme';
import { BadgedResource } from './index';

test('BadgedResource renders properly', () => {
  const onClickMock = jest.fn();

  const component = mount(
    <div>
      <BadgedResource
        id="test-badged-resource-id"
        className="test-badged-resource-class"
        kindAbbr="DC"
        kindStr="Deployment Config"
      />
      <BadgedResource
        kindAbbr="RB"
        kindStr="Role Binding"
        resourceName="Clickable Item"
        badgeColor={BadgedResource.COLORS.cyan500}
        onClick={onClickMock}
      />
      <BadgedResource
        kindAbbr="HPA"
        kindStr="Horizontal Pod Autoscaler"
        resourceName="No Tooltip Item"
        tipDelay={-1}
        badgeColor={BadgedResource.COLORS.lightBlue400}
      />
      <BadgedResource
        kindAbbr="APIS"
        kindStr="API Service"
        resourceName="Fast Tooltip"
        tipDelay={0}
        badgeColor={BadgedResource.COLORS.orange600}
      />
      <BadgedResource
        kindAbbr="DC"
        kindStr="Deployment Config"
        resourceName="Long Tooltip"
        tipDelay={1500}
        badgeColor={BadgedResource.COLORS.lightGreen500}
      />
      <BadgedResource
        kindAbbr="PR"
        kindStr="Project"
        resourceName="Large Item"
        large
        badgeColor={BadgedResource.COLORS.green500}
      />
      <BadgedResource
        kindAbbr="SM"
        kindStr="Service Model"
        resourceName="Large Clickable Item"
        large
        badgeColor={BadgedResource.COLORS.purple600}
        onClick={onClickMock}
      />
    </div>
  );
  expect(component.render()).toMatchSnapshot();
});

test('BadgedResource href renders properly', () => {
  const component = mount(
    <BadgedResource
      kindAbbr="RB"
      kindStr="Role Binding"
      resourceName="Clickable Item"
      badgeColor={BadgedResource.COLORS.cyan500}
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
      kindAbbr="RB"
      kindStr="Role Binding"
      resourceName="Clickable Item"
      badgeColor={BadgedResource.COLORS.cyan500}
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
