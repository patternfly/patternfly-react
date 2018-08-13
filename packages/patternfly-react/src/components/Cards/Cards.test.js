import React from 'react';
import { mount } from 'enzyme';
import { MenuItem } from '../MenuItem';
import { Card, CardTitle, CardBody, CardGrid, CardHeading, CardFooter, CardLink, CardDropdownButton } from './index';

test('Card is working properly', () => {
  const component = mount(
    <Card accented aggregatedMini>
      Card Content
    </Card>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Card Title is working properly', () => {
  const component = mount(<CardTitle>Card Title</CardTitle>);

  expect(component.render()).toMatchSnapshot();
});

test('Card Footer is working properly', () => {
  const component = mount(<CardFooter>This is a Card Footer</CardFooter>);

  expect(component.render()).toMatchSnapshot();
});

test('Card Grid is working properly', () => {
  const component = mount(<CardGrid>Grid Content</CardGrid>);

  expect(component.render()).toMatchSnapshot();
});

test('Card Header is working properly', () => {
  const component = mount(<CardHeading>Card Content</CardHeading>);

  expect(component.render()).toMatchSnapshot();
});

test('Card Body is working properly', () => {
  const component = mount(<CardBody>This is a Card Body</CardBody>);

  expect(component.render()).toMatchSnapshot();
});

test('Card Link is working properly', () => {
  const component = mount(
    <CardLink disabled href="https://github.com/patternfly/patternfly-react/pull/203">
      Card Content
    </CardLink>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Card Drop Down Button is working properly', () => {
  const component = mount(
    <CardDropdownButton id="cardDropdownButton1" title="Last 30 Days" onClick={jest.fn()}>
      <MenuItem eventKey="1" active>
        Last 30 Days
      </MenuItem>
    </CardDropdownButton>
  );

  expect(component.render()).toMatchSnapshot();
});
